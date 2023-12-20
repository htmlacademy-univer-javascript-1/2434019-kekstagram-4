import {openBigPicture} from './big-picture.js';
import {createThumbnails} from './thumbnails.js';

const containerElement = document.querySelector('.pictures');
const renderGallery = (pictures) => {
  containerElement.addEventListener('click', (evt) => {

    const thumbnail = evt.target.closest('[data-thumbnail-id]');

    if (!thumbnail) {return;}

    evt.preventDefault();
    const picture = pictures.find((item) => item.id === +thumbnail.dataset.thumbnailId);
    openBigPicture(picture);
  });

  createThumbnails(pictures, containerElement);
};

export {renderGallery};
