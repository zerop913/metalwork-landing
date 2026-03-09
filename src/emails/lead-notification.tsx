interface LeadNotificationProps {
  name: string;
  phone: string;
  email?: string;
  description?: string;
}

export function LeadNotificationEmail({
  name,
  phone,
  email,
  description,
}: LeadNotificationProps): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td align="center" style="padding: 40px 0;">
              <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                
                <!-- Header -->
                <tr>
                  <td style="padding: 32px; background: linear-gradient(135deg, #E8521A 0%, #D14215 100%);">
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 0.5px;">
                      КОВКА 53
                    </h1>
                    <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">
                      Новая заявка с сайта
                    </p>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding: 40px 32px;">
                    
                    <!-- Name -->
                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                      <tr>
                        <td style="padding-bottom: 8px;">
                          <p style="margin: 0; font-size: 12px; font-weight: 600; color: #999999; text-transform: uppercase; letter-spacing: 1px;">
                            Имя клиента
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px; background-color: #f9f9f9; border-left: 3px solid #E8521A;">
                          <p style="margin: 0; font-size: 16px; font-weight: 600; color: #1a1a1a;">
                            ${name}
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Phone -->
                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                      <tr>
                        <td style="padding-bottom: 8px;">
                          <p style="margin: 0; font-size: 12px; font-weight: 600; color: #999999; text-transform: uppercase; letter-spacing: 1px;">
                            Телефон
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px; background-color: #f9f9f9; border-left: 3px solid #E8521A;">
                          <a href="tel:${phone}" style="margin: 0; font-size: 16px; font-weight: 600; color: #E8521A; text-decoration: none;">
                            ${phone}
                          </a>
                        </td>
                      </tr>
                    </table>

                    ${
                      email
                        ? `
                    <!-- Email -->
                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                      <tr>
                        <td style="padding-bottom: 8px;">
                          <p style="margin: 0; font-size: 12px; font-weight: 600; color: #999999; text-transform: uppercase; letter-spacing: 1px;">
                            Email
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px; background-color: #f9f9f9; border-left: 3px solid #E8521A;">
                          <a href="mailto:${email}" style="margin: 0; font-size: 16px; font-weight: 600; color: #E8521A; text-decoration: none;">
                            ${email}
                          </a>
                        </td>
                      </tr>
                    </table>
                    `
                        : ""
                    }

                    ${
                      description
                        ? `
                    <!-- Description -->
                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                      <tr>
                        <td style="padding-bottom: 8px;">
                          <p style="margin: 0; font-size: 12px; font-weight: 600; color: #999999; text-transform: uppercase; letter-spacing: 1px;">
                            Описание проекта
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px; background-color: #f9f9f9; border-left: 3px solid #E8521A;">
                          <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #333333; white-space: pre-wrap;">
                            ${description}
                          </p>
                        </td>
                      </tr>
                    </table>
                    `
                        : ""
                    }

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding: 24px 32px; background-color: #f9f9f9; border-top: 1px solid #e5e5e5;">
                    <p style="margin: 0; font-size: 13px; color: #666666; line-height: 1.5;">
                      Это автоматическое уведомление с сайта <strong>КОВКА 53</strong>.<br>
                      Свяжитесь с клиентом в ближайшее время.
                    </p>
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
