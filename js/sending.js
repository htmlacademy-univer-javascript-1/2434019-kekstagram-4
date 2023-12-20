import {isEscapeKey} from './util.js';

const bodyElement = document.querySelector('body');
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
  document.removeEventListener('keydown', onDocumentKeydown);
  bodyElement.removeEventListener('click', onBodyClick);
}

const showMessage = (messageElement, buttonElement) => {
  bodyElement.append(messageElement);
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
