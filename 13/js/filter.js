import {getRandomElements} from './util.js';

const RANDOM_PICTURES_COUNT = 10;
const filtersContainerElement = document.querySelector('.img-filters');

let activeFilter = 'filter-default';
let pictures = [];

const compareDiscussedPhotos = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;

const Filter = {
  'filter-default': () => pictures.slice(),
  'filter-random': () => getRandomElements(pictures, RANDOM_PICTURES_COUNT).slice(),
  'filter-discussed': () => pictures.slice().sort(compareDiscussedPhotos),
};

const getFilteredPictures = () => Filter[activeFilter](pictures);

const setOnFilterClick = (callback) => {
  filtersContainerElement.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) { return; }

    const clickedButton = evt.target;
    if (clickedButton.id === activeFilter) { return; }

    filtersContainerElement.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    clickedButton.classList.add('img-filters__button--active');
    activeFilter = clickedButton.id;

    callback(getFilteredPictures());
  });
};

const initFilters = (data, callback) => {
  pictures = data.slice();
  filtersContainerElement.classList.remove('img-filters--inactive');
  setOnFilterClick(callback);
};

export {initFilters};
