'use strict';
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
      alert("يرجى ملء جميع الحقول المطلوبة وقبول الشروط.");
    } else {
    
      const formData = new FormData(form);
      const mailtoLink = `mailto:432205459@qu.edu.sa?subject=${formData.get("subject")}&body=Name: ${formData.get("name")}%0D%0AEmail: ${formData.get("email_address")}%0D%0APhone: ${formData.get("phoneNumber")}%0D%0AMessage: ${formData.get("message")}`;

      window.location.href = mailtoLink;

      alert("سيتم نقلك لتطبيق البريد لتأكيد رسالتك, شكرًا لك!");
    }
  });
});
