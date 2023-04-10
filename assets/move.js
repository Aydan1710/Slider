const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider-container');
const sliderItems = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
let totalItems = sliderItems.length;
let slideWidth = sliderItems[0].clientWidth;


sliderContainer.style.width = slideWidth * totalItems + 'px';


sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;


prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  }
  sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});


nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= totalItems) {
    currentIndex = 0;
  }
  sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});
