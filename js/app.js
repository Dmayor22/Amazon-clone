// variables
const prevBtn = document.querySelector("#prev_btn");
const nextBtn = document.querySelector("#next_btn");
const sliderImages = document.querySelectorAll(".hero_slider div img");

let currentImage = 0;

// function to change slide
const changeSlider = () => {
  // loops and removes the default image --no images at the beginning
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }

  sliderImages[currentImage].style.display = "block";
};

changeSlider();

// prev btn
prevBtn.addEventListener("click", () => {
  if (currentImage > 0) {
    currentImage--;
  } else {
    currentImage = sliderImages.length - 1;
  }

  changeSlider();
});


// prev btn
nextBtn.addEventListener("click", () => {
  if (currentImage < sliderImages.length - 1) {
    currentImage++;
  } else {
    currentImage = 0;
  }

  changeSlider();
});
