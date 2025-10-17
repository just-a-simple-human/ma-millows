function productPage() {
  function initProductCounter() {
    const counterInput = document.querySelector(".product-info__counter-input");
    const [counterMinus, counterPlus] = document.querySelectorAll(
      ".product-info__counter-button"
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
  initProductCounter();
  function initProductSlider() {
    const swiperThumbs = new Swiper(".product-main__thumb-slider", {
      spaceBetween: 8,
      direction: "horizontal",
      autoHeight: true,
      slidesPerView: 4,
      allowTouchMove: false,
      loop: true,
      breakpoints: {
        1024: {
          autoHeight: true,
          direction: "vertical",
          slidesPerView: 5,
        },
      },
    });

    const swiperSlider = new Swiper(".product-main__slider", {
      spaceBetween: 16,
      autoHeight: true,
      direction: "vertical",
      allowTouchMove: false,
      loop: true,
      slidesPerView: 1,
      touchReleaseOnEdges: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: { swiper: swiperThumbs },
      on: {
        slideChangeTransitionStart: () =>
          swiperThumbs.slideToLoop(swiperSlider.realIndex),
      },
      breakpoints: {
        1024: {
          spaceBetween: 64,
        },
      },
    });
  }
  initProductSlider();
}
productPage();
