const DEFAULT_SCALE = 100;
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const STEP_SCALE = 25;

const modalElement = document.querySelector('.img-upload');
const imageElement = modalElement.querySelector('.img-upload__preview img');
const valueScaleElement = modalElement.querySelector('.scale__control--value');
const smallerButtonElement = modalElement.querySelector('.scale__control--smaller');
const biggerButtonElement = modalElement.querySelector('.scale__control--bigger');

const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value/100})`;
  valueScaleElement.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  scaleImage(Math.max(parseInt(valueScaleElement.value, 10) - STEP_SCALE, MIN_SCALE));
};

const onBiggerButtonClick = () => {
  scaleImage(Math.min(parseInt(valueScaleElement.value, 10) + STEP_SCALE, MAX_SCALE));
};

const destroyScale = () => {
  scaleImage(DEFAULT_SCALE);
  smallerButtonElement.removeEventListener('click', onSmallerButtonClick);
  biggerButtonElement.removeEventListener('click', onBiggerButtonClick);
};

const initScale = () => {
  smallerButtonElement.addEventListener('click', onSmallerButtonClick);
  biggerButtonElement.addEventListener('click', onBiggerButtonClick);
};

export {destroyScale, initScale};
