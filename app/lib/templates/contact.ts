type ContactFormData = {
  name: string;
  phone: string;
  email?: string;
  message?: string;
};

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_SITE_URL || "https://metankz.com"
    : "http://localhost:3000";

const EMOJI: Record<keyof ContactFormData, string> = {
  name: "🧑",
  phone: "📱",
  email: "✉️",
  message: "💬",
};

/* <h2>Новая заявка(Contact Form)</h2>
  <p><b>Имя:</b> ${data.name}</p>
  <p><b>Телефон:</b> ${data.phone}</p>
  <p><b>Email:</b> ${data.email || "-"}</p>
  <p><b>Сообщение:</b><br/> ${data.message || "-"}</p> */

export function contactFormTemplate(data: ContactFormData) {
  return `
    <div style="
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Arial, sans-serif;
      background-color: #f4f5f6;
      padding: 30px;
    ">
      <div style="
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        overflow: hidden;
      ">

        <!-- Header -->
        <div style="
          background-color: #1e212c;
          padding: 24px 30px;
          text-align: center;
        ">
          <img
            src="${BASE_URL}/icons/logo.png"
            alt="Logo"
            width="120"
            style="
              display: block;
              margin: 0 auto 12px;
            "
          />
          <h2 style="
            margin: 0;
            color: #ffffff;
            font-size: 20px;
            font-weight: 600;
          ">
            📩 Новая заявка с сайта
          </h2>
        </div>

        <!-- Content -->
        <div style="padding: 30px">

          <p style="
            margin: 0 0 20px;
            font-size: 14px;
            color: #6b7280;
          ">
            Вы получили новое сообщение с формы на сайте.
          </p>

          <!-- Name -->
          <div style="margin-bottom: 16px">
            <div style="
              font-size: 12px;
              color: #9ca3af;
              margin-bottom: 4px;
            ">
              ${EMOJI.name} Имя
            </div>
            <div style="
              font-size: 16px;
              color: #111827;
              font-weight: 500;
            ">
              ${data.name}
            </div>
          </div>

          <!-- Phone -->
          <div style="margin-bottom: 16px">
            <div style="
              font-size: 12px;
              color: #9ca3af;
              margin-bottom: 4px;
            ">
              ${EMOJI.phone} Телефон
            </div>
            <div style="
              font-size: 16px;
              color: #111827;
              font-weight: 500;
            ">
              ${data.phone}
            </div>
          </div>

          <!-- Email -->
          <div style="margin-bottom: 16px">
            <div style="
              font-size: 12px;
              color: #9ca3af;
              margin-bottom: 4px;
            ">
              ${EMOJI.email} Email
            </div>
            <div style="
              font-size: 16px;
              color: #111827;
              font-weight: 500;
            ">
              ${data.email || "—"}
            </div>
          </div>

          <!-- Message -->
          <div style="margin-bottom: 10px">
            <div style="
              font-size: 12px;
              color: #9ca3af;
              margin-bottom: 6px;
            ">
              ${EMOJI.message} Сообщение
            </div>
            <div style="
              font-size: 15px;
              color: #111827;
              line-height: 1.6;
              background-color: #f9fafb;
              padding: 15px;
              border-radius: 6px;
              border: 1px solid #e5e7eb;
            ">
              ${data.message || "—"}
            </div>
          </div>

        </div>

        <!-- Footer -->
        <div style="
          padding: 15px 30px;
          background-color: #f9fafb;
          font-size: 12px;
          color: #9ca3af;
          text-align: center;
        ">
          Это письмо отправлено с формы обратной связи сайта.
        </div>

      </div>
    </div>
  `;
}
