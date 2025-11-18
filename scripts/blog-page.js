function blogPage() {
  function initPopularSlider() {
    const popularSlider = new Swiper(".blog-popular__slider", {
      loop: true,
      direction: "horizontal",
      autoplay: false,
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1024: {
          centeredSlides: true,
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
  }
  initPopularSlider();
  function initIngredientCounter() {
    const counterInput = document.querySelector(
      ".blog-ingredients__counter-input"
    );
    const [counterMinus, counterPlus] = document.querySelectorAll(
      ".blog-ingredients__counter-button"
    );
    counterMinus?.addEventListener("click", () => {
      if (counterInput.value - 1 < 1) {
        counterMinus.setAttribute("disabled", "true");
        return;
      }
      counterInput.value--;
    });
    counterPlus?.addEventListener("click", () => {
      if (counterInput.value >= 1) {
        counterMinus.removeAttribute("disabled");
      }
      counterInput.value++;
    });
  }
  initIngredientCounter();
}
blogPage();
