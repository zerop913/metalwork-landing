interface LeadNotificationProps {
  name: string;
  phone: string;
  email?: string;
  description?: string;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatDescription(value?: string) {
  if (!value) {
    return "";
  }

  return escapeHtml(value.trim()).replace(/\r?\n/g, "<br>");
}

function buildInfoRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 0 0 18px;">
        <p style="margin: 0 0 8px; font-family: 'Inter', Arial, Helvetica, sans-serif; font-size: 11px; font-weight: 600; color: #8b867c; text-transform: uppercase; letter-spacing: 1.2px;">
          ${label}
        </p>
        <div style="padding: 16px 18px; background-color: #f7f5f1; border: 1px solid #ebe6dd; border-left: 4px solid #e8521a;">
          ${value}
        </div>
      </td>
    </tr>
  `;
}

export function LeadNotificationEmail({
  name,
  phone,
  email,
  description,
}: LeadNotificationProps): string {
  const siteUrl = process.env.SITE_URL?.trim() || "https://kovka53.ru";
  const logoUrl = `${siteUrl.replace(/\/$/, "")}/images/logo/logo-black.png`;
  const safeName = escapeHtml(name.trim());
  const safePhone = escapeHtml(phone.trim());
  const safeEmail = email ? escapeHtml(email.trim()) : "";
  const formattedDescription = formatDescription(description);
  const nameRow = buildInfoRow(
    "Имя клиента",
    `<p style="margin: 0; font-family: 'Montserrat', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: 700; color: #171717;">${safeName}</p>`,
  );
  const phoneRow = buildInfoRow(
    "Телефон",
    `<a href="tel:${safePhone}" style="font-family: 'Montserrat', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: 700; color: #e8521a; text-decoration: none;">${safePhone}</a>`,
  );
  const emailRow = safeEmail
    ? buildInfoRow(
        "Email",
        `<a href="mailto:${safeEmail}" style="font-family: 'Inter', Arial, Helvetica, sans-serif; font-size: 16px; font-weight: 600; color: #e8521a; text-decoration: none;">${safeEmail}</a>`,
      )
    : "";
  const descriptionRow = formattedDescription
    ? buildInfoRow(
        "Описание проекта",
        `<p style="margin: 0; font-family: 'Inter', Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.7; color: #3e3a34;">${formattedDescription}</p>`,
      )
    : "";

  return `
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@600;700;800&display=swap" rel="stylesheet">
  </head>
  <body style="margin: 0; padding: 0; background-color: #f3f0ea;">
    <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(180deg, #f3f0ea 0%, #ede7de 100%);">
      <tr>
        <td align="center" style="padding: 32px 16px;">
          <table role="presentation" style="width: 100%; max-width: 680px; border-collapse: collapse;">
            <tr>
              <td style="padding-bottom: 16px;">
                <p style="margin: 0; font-family: 'Inter', Arial, Helvetica, sans-serif; font-size: 12px; font-weight: 600; color: #8b867c; letter-spacing: 1.4px; text-transform: uppercase; text-align: center;">
                  Уведомление с сайта
                </p>
              </td>
            </tr>
            <tr>
              <td style="background-color: #ffffff; border: 1px solid #e8e1d6; box-shadow: 0 18px 40px rgba(36, 26, 14, 0.08);">
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 28px 32px 24px; background: linear-gradient(135deg, #fffaf5 0%, #f6efe6 100%); border-bottom: 1px solid #eee5da;">
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="vertical-align: top;">
                            <img src="${logoUrl}" alt="КОВКА 53" width="164" style="display: block; width: 164px; max-width: 100%; height: auto; margin-bottom: 20px;">
                            <p style="margin: 0 0 8px; font-family: 'Inter', Arial, Helvetica, sans-serif; font-size: 11px; font-weight: 700; color: #e8521a; text-transform: uppercase; letter-spacing: 1.6px;">
                              Новая заявка
                            </p>
                            <h1 style="margin: 0; font-family: 'Montserrat', Arial, Helvetica, sans-serif; font-size: 28px; line-height: 1.15; font-weight: 800; color: #171717; letter-spacing: 0.3px;">
                              К вам пришёл новый клиент
                            </h1>
                            <p style="margin: 12px 0 0; font-family: 'Inter', Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.65; color: #5f5a51;">
                              Контакты и детали проекта собраны ниже. Можно сразу перезвонить клиенту или ответить ему по email.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 28px 32px 8px;">
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        ${nameRow}
                        ${phoneRow}
                        ${emailRow}
                        ${descriptionRow}
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px 32px 28px; border-top: 1px solid #eee5da;">
                      <p style="margin: 0; font-family: 'Inter', Arial, Helvetica, sans-serif; font-size: 12px; line-height: 1.7; color: #8b867c;">
                        Это автоматическое уведомление с сайта <span style="color: #171717; font-weight: 600;">КОВКА 53</span>.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;
}
