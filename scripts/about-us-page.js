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
