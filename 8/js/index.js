const slides = document.querySelectorAll('.slider-slide');
const buttonPrev = document.querySelector('.slide-prev');
const buttonNext = document.querySelector('.slide-next');
const bullets = document.querySelectorAll('.slider-pagination-button');
const slidesAmount = slides.length;
let currentIndex = 0;

const onSlideChange = (index) => {
  const activeSlide = document.querySelector('.slider-slide.is-active');
  const activeBullet = document.querySelector('.slider-pagination-button.is-active');

  document.body.classList.remove('color-pink');
  document.body.classList.remove('color-blue');
  document.body.classList.remove('color-yellow');
  document.body.classList.add(`${slides[index].dataset.class}`);
  activeSlide.classList.remove('is-active');
  slides[index].classList.add('is-active');
  activeBullet.classList.remove('is-active');
  bullets[index].classList.add('is-active');
};

const onPrevButtonClick = (evt) => {
  evt.preventDefault();
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slidesAmount - 1;
  }

  onSlideChange(currentIndex);
};

const onNextButtonClick = (evt) => {
  evt.preventDefault();
  currentIndex++;

  if (currentIndex === slidesAmount) {
    currentIndex = 0;
  }

  onSlideChange(currentIndex);
};

const initSlider = () => {
  buttonPrev.addEventListener('click', onPrevButtonClick);
  buttonNext.addEventListener('click', onNextButtonClick);
  bullets.forEach((element, index) => element.addEventListener('click', () => onSlideChange(index)));
};

initSlider();


const modalOpenBtn = document.querySelector('.contacts-button');
const modal = document.querySelector('.modal-container');
const modalCloseBtn = document.querySelector('.modal-close-button');

modalOpenBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
modal.classList.add('is-open');
});

modalCloseBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('is-open');
  });

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modal.classList.remove('is-open');
  }
});
