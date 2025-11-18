function aboutPage() {
  function initTopSlider() {
    const topSlider = new Swiper(".about-top__slider", {
      slidesPerView: 1,
      loop: true,
      direction: "horizontal",
      autoplay: true,
      pagination: {
        el: ".about-top__navigation",
        clickable: true,
        bulletElement: "button",
      },
    });
  }
  initTopSlider();
  function initProductionSlider() {
    const productionSlider = new Swiper(".about-production__slider", {
      spaceBetween: 16,
      slidesPerView: 1,
      loop: true,
      direction: "horizontal",
      autoplay: true,
      pagination: {
        el: ".about-production__pagination",
        clickable: true,
        bulletElement: "button",
      },
    });
  }
  initProductionSlider();
}
aboutPage();

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

// import Swiper from "swiper";

function homePage() {
  function initNewsSlider() {
    const newsSlider = new Swiper(".home-news__slider", {
      slidesPerView: 1,
      loop: true,
      allowTouchMove: false,
      watchOverflow: false,
      spaceBetween: 96,
      centeredSlidesBounds: true,
      centeredSlides: true,

      autoplay: {
        delay: 4500,
      },
      speed: 600,

      pagination: {
        el: ".home-news__pagination",
        clickable: true,
        bulletElement: "button",
      },
    });
  }
  initNewsSlider();
  function initAssortmentSlider() {
    const assortmentSlider = new Swiper(".home-assortment__slider", {
      slidesPerView: 1,
      loop: true,
      allowTouchMove: false,
      autoplay: {
        delay: 4500,
      },
      speed: 600,
      spaceBetween: 56,

      breakpoints: {
        480: {},
      },

      pagination: {
        el: ".home-assortment__pagination",
        clickable: true,
        bulletElement: "button",
      },
    });
  }
  initAssortmentSlider();
}

homePage();

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
