const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();

const createThumbnails = (descriptionPhotos) => {
  descriptionPhotos.forEach(({url, description, likes, comments}) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__img').alt = description;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    pictureFragment.appendChild(photoElement);
  });
  pictureContainer.appendChild(pictureFragment);
};

export {createThumbnails};
