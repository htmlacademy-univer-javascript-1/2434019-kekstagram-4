import {isEscapeKey} from './util.js';
import {pristine} from './validator.js';
import {sendData} from './api.js';
import {showSuccessMessage, showErrorMessage} from './sending.js';
import {initScale, destroyScale} from './scale.js';
import {initEffect, destroyEffect} from './effects.js';

const bodyElement = document.querySelector('body');
const formElement = document.querySelector('.img-upload__form');
const fileFieldElement = document.querySelector('.img-upload__input');
const overlayElement = document.querySelector('.img-upload__overlay');
const cancelButtonElement = document.querySelector('.img-upload__cancel');
const hashtagFieldElement = document.querySelector('.text__hashtags');
const commentFieldElement = document.querySelector('.text__description');
const submitButtonElement = document.querySelector('.img-upload__submit');

const isFieldFocused = () =>
  document.activeElement === hashtagFieldElement ||
  document.activeElement === commentFieldElement;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && !isFieldFocused()) {
    evt.preventDefault();
    closeEditPopup();
  }
};

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикация...'
};

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = SubmitButtonText.IDLE;
};

const onFormInput = (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();
    sendData(new FormData(evt.target))
      .then(() => {
        closeEditPopup();
        showSuccessMessage();
      })
      .catch(() => {
        closeEditPopup();
        showErrorMessage();
      })
      .finally(unblockSubmitButton);
  }
};

function openEditPopup () {
  overlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  cancelButtonElement.addEventListener('click', onCancelButtonClick);
  formElement.addEventListener('submit', onFormInput);
  initScale();
}

function closeEditPopup () {
  formElement.reset();
  pristine.reset();
  overlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  formElement.removeEventListener('submit', onFormInput);
  cancelButtonElement.removeEventListener('click', onCancelButtonClick);
  destroyScale();
  destroyEffect();
}

function onCancelButtonClick () {
  closeEditPopup();
}

const initEditPopup = () => {
  initEffect();
  fileFieldElement.addEventListener('change', openEditPopup);
};

export {initEditPopup, onDocumentKeydown};
