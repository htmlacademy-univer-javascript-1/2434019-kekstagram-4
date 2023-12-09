const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();

const createThumbnails = (descriptionPhotos, pictureContainer) => {
  descriptionPhotos.forEach(({url, description, likes, comments, id}) => {
    const thumbnail = pictureTemplate.cloneNode(true);
    thumbnail.querySelector('.picture__img').src = url;
    thumbnail.querySelector('.picture__img').alt = description;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;
    thumbnail.dataset.thumbnailId = id;
    pictureFragment.appendChild(thumbnail);
  });
  pictureContainer.appendChild(pictureFragment);
};

export {createThumbnails};
