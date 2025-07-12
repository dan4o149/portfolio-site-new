document.addEventListener("DOMContentLoaded", function () {
  // Бургер-меню
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Валидация формы
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Пожалуйста, введите корректный email.");
      return;
    }

    alert("Форма успешно отправлена!");
    form.reset();
  });
});
