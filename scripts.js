// Общие скрипты для всех страниц

// Анимация слайдера 
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const slides = slider.querySelectorAll("img");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 5000); // Меняет слайд каждые 5 секунд
  showSlide(currentIndex);
});

// Взаимодействие с формами
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Форма отправлена!");
  });
});

// Галерея изображений
document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    alert(`Вы выбрали изображение: ${img.alt}`);
  });
});
