import {isEscapeKey} from './util.js';
import {updateComments} from './comments.js';

const bigPictureElement = document.querySelector('.big-picture');
const cancelButtonElement = document.querySelector('.big-picture__cancel');
const bodyElement = document.querySelector('body');

const renderPictureDetails = ( { url, likes, description} ) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.big-picture__img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};


const closeBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onCancelButtonClick);
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

const openBigPicture = (data) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  cancelButtonElement.addEventListener('click', onCancelButtonClick);

  renderPictureDetails(data);
  updateComments(data);
};

function onCancelButtonClick () {
  closeBigPicture();
}

export {openBigPicture};
