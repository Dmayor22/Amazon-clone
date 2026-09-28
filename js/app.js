const prevBtn = document.querySelector("#prev_btn");
const nextBtn = document.querySelector("#next_btn");
const sliderImages = document.querySelectorAll(".hero_slider div img");
const scrollContainer = document.querySelectorAll(".best_sellers div img");
const discountScrollContainer = document.querySelectorAll(
  ".best_sellers_two div img",
);

let currentImage = 0;

const changeSlider = () => {
  sliderImages.forEach((image, index) => {
    if (currentImage === index) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
};

changeSlider();

nextBtn.addEventListener("click", () => {
  if (currentImage === sliderImages.length - 1) {
    currentImage = 0;
  } else {
    currentImage = currentImage + 1;
  }

  changeSlider();
});

prevBtn.addEventListener("click", () => {
  if (currentImage === 0) {
    currentImage = sliderImages.length - 1;
  } else {
    currentImage = currentImage - 1;
  }

  console.log(currentImage);

  changeSlider();
});

scrollContainer.forEach((item) => {
  item.addEventListener("wheel", (e) => {
    e.preventDefault();
    item.scrollLeft += e.deltaY;
  });
});

discountScrollContainer.forEach((item) => {
  item.addEventListener("wheel", (e) => {
    e.preventDefault();
    item.scrollLeft += e.deltaY;
  });
});
