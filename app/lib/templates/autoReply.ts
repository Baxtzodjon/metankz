type AutoReplyData = {
  name?: string;
};

export function autoReplyTemplate(data: AutoReplyData) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.5;">
      <h2>Спасибо за обращение!</h2>
      <p>${data.name ? `Здравствуйте, ${data.name}!` : "Здравствуйте!"}</p>
      <p>
        Мы получили вашу заявку и свяжемся с вами в ближайшее время.
      </p>
      <p style="margin-top: 20px;">
        С уважением,<br/>
        <b>Metan KZ</b>
      </p>
    </div>
  `;
}
