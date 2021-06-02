document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".homeSplide") !== null) {
    new Splide(".homeSplide").mount();
  }

  if (document.querySelector(".homeProductSplide") !== null) {
    new Splide(".homeProductSplide", {
      type: "loop",
      perPage: 3,
      gap: "2rem",
    }).mount();
  }

  if (document.querySelector(".platformSplide") !== null) {
    new Splide(".platformSplide", {
      type: "loop",
      perPage: 3,
      gap: "5rem",
    }).mount();
  }

  // sync

  if (document.querySelector("#secondary-slider") !== null) {
    // Create and mount the thumbnails slider.
    var secondarySlider = new Splide("#secondary-slider", {
      rewind: true,
      fixedWidth:
        document.querySelector(".containersSelf__slideBox--right").clientWidth /
        3,
      fixedHeight: 165,
      isNavigation: true,
      perPage: 1,
      gap: "2rem",
      focus: "center",
      pagination: true,
      arrows: false,
      cover: true,
      breakpoints: {
        600: {
          fixedWidth: 66,
          fixedHeight: 40,
        },
      },
    }).mount();

    // Create the main slider.
    var primarySlider = new Splide("#primary-slider", {
      type: "fade",
      heightRatio: 0.5,
      pagination: false,
      arrows: true,
      cover: true,
    });

    primarySlider.sync(secondarySlider).mount();
  }

  if (document.querySelector(".metalSlider") !== null) {
    new Splide(".metalSlider", {
      type: "loop",
      perPage: 3,
      focus: "center",
      pagination: false,
      gap: "5rem",
      fixedHeight: 90,
    }).mount();
  }
});
