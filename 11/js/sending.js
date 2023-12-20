import {isEscapeKey} from './util.js';

const bodyElement = document.querySelector('body');
const overlayElement = document.querySelector('.img-upload__overlay');
const successMessageElement = document.querySelector('#success').content.querySelector('.success');
const errorMessageElement = document.querySelector('#error').content.querySelector('.error');
const successButtonElement = successMessageElement.querySelector('.success__button');
const errorButtonElement = errorMessageElement.querySelector('.error__button');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const onBodyClick = (evt) => {
  const clickElem = evt.target;
  if(clickElem.classList.contains('success__inner') || clickElem.classList.contains('error__inner')) {
    return;
  }
  closeMessage();
};

function closeMessage () {
  const messageElement = bodyElement.querySelector('.success') || bodyElement.querySelector('.error');
  messageElement.remove();
  if (errorMessageElement.classList.contains('open-error')) {
    errorMessageElement.classList.remove('open-error');
  }
  document.removeEventListener('keydown', onDocumentKeydown);
  bodyElement.removeEventListener('click', onBodyClick);
}

const showMessage = (messageElement, buttonElement) => {
  if (buttonElement === successButtonElement) {
    bodyElement.append(messageElement);
  } else {
    overlayElement.append(messageElement);
    errorMessageElement.classList.add('open-error');
  }
  document.addEventListener('keydown', onDocumentKeydown);
  bodyElement.addEventListener('click', onBodyClick);
  buttonElement.addEventListener('click', closeMessage);
};

const showSuccessMessage = () => {
  showMessage(successMessageElement, successButtonElement);
};

const showErrorMessage = () => {
  showMessage(errorMessageElement, errorButtonElement);
};

export {showSuccessMessage, showErrorMessage};
