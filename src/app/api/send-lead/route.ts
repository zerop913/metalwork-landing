import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { LeadNotificationEmail } from "@/emails/lead-notification";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");

  return digits.length === 10 || digits.length === 11;
}

async function sendLeadToTelegram(params: {
  name: string;
  phone: string;
  email?: string;
  description?: string;
}) {
  const token = process.env.TELEGRAM_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return;
  }

  const message = [
    "<b>Новая заявка с сайта</b>",
    "",
    `<b>Имя:</b> ${params.name}`,
    `<b>Телефон:</b> ${params.phone}`,
    `<b>Email:</b> ${params.email || "-"}`,
    `<b>Описание:</b> ${params.description || "-"}`,
  ].join("\n");

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Telegram send failed: ${errorText}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, description } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Имя и телефон обязательны" },
        { status: 400 },
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: "Укажите корректный номер телефона" },
        { status: 400 },
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const recipients = (contactEmail || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    if (recipients.length === 0) {
      return NextResponse.json(
        { error: "Email получателя не настроен" },
        { status: 500 },
      );
    }

    if (!fromEmail) {
      return NextResponse.json(
        { error: "Адрес отправителя не настроен" },
        { status: 500 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: `КОВКА 53 <${fromEmail}>`,
      to: recipients,
      subject: `Новая заявка от ${name}`,
      html: LeadNotificationEmail({ name, phone, email, description }),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Не блокируем успешную отправку формы, если Telegram временно недоступен.
    try {
      await sendLeadToTelegram({ name, phone, email, description });
    } catch (telegramError) {
      console.error("Telegram notification error:", telegramError);
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    return NextResponse.json(
      { error: "Ошибка отправки заявки" },
      { status: 500 },
    );
  }
}
