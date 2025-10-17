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
