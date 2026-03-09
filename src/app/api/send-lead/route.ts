import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { LeadNotificationEmail } from "@/emails/lead-notification";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const contactEmail = process.env.CONTACT_EMAIL;
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

    const { data, error } = await resend.emails.send({
      from: "КОВКА 53 <onboarding@resend.dev>",
      to: recipients,
      subject: `Новая заявка от ${name}`,
      html: LeadNotificationEmail({ name, phone, email, description }),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    return NextResponse.json(
      { error: "Ошибка отправки заявки" },
      { status: 500 },
    );
  }
}
