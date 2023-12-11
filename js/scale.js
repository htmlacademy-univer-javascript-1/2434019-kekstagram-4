const DEFAULT_SCALE = 100;
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const STEP_SCALE = 25;

const modalElement = document.querySelector('.img-upload');
const imageElement = modalElement.querySelector('.img-upload__preview img');
const valueScale = modalElement.querySelector('.scale__control--value');
const smallerButton = modalElement.querySelector('.scale__control--smaller');
const biggerButton = modalElement.querySelector('.scale__control--bigger');

const imageScale = (value) => {
  imageElement.style.transform = `scale(${value/100})`;
  valueScale.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  imageScale(Math.max(parseInt(valueScale.value, 10) - STEP_SCALE, MIN_SCALE));
};

const onBiggerButtonClick = () => {
  imageScale(Math.min(parseInt(valueScale.value, 10) + STEP_SCALE, MAX_SCALE));
};

const destroyScale = () => {
  imageScale(DEFAULT_SCALE);
  smallerButton.removeEventListener('click', onSmallerButtonClick);
  biggerButton.removeEventListener('click', onBiggerButtonClick);
};

const initScale = () => {
  smallerButton.addEventListener('click', onSmallerButtonClick);
  biggerButton.addEventListener('click', onBiggerButtonClick);
};

export {destroyScale, initScale};
