const pictureTemplateElement = document.querySelector('#picture').content.querySelector('.picture');
const pictureFragmentElement = document.createDocumentFragment();
const pictureContainerElement = document.querySelector('.pictures');

const createThumbnails = (descriptionPhotos) => {
  pictureContainerElement.querySelectorAll('.picture').forEach((thumbnail) => thumbnail.remove());
  descriptionPhotos.forEach(({url, description, likes, comments, id}) => {
    const thumbnail = pictureTemplateElement.cloneNode(true);
    thumbnail.querySelector('.picture__img').src = url;
    thumbnail.querySelector('.picture__img').alt = description;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;
    thumbnail.dataset.thumbnailId = id;
    pictureFragmentElement.appendChild(thumbnail);
  });
  pictureContainerElement.appendChild(pictureFragmentElement);
};

export {createThumbnails};
