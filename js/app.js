const prevBtn = document.querySelector("#prev_btn");
const nextBtn = document.querySelector("#next_btn");
const sliderImages = document.querySelectorAll(".hero_slider div img");

let currentImage = 0;

const changeSlider = () => {
  sliderImages.forEach((image, index) => {
    image.style.display = index === currentImage ? "block" : "none";
  });
};

changeSlider();

prevBtn.addEventListener("click", () => {
  currentImage =
    currentImage === 0 ? sliderImages.length - 1 : currentImage - 1;

  changeSlider();
});

nextBtn.addEventListener("click", () => {
  currentImage =
    currentImage === sliderImages.length - 1 ? 0 : currentImage + 1;

  changeSlider();
});
