const DESCRIPTION = [
  'Прекраный день!',
  'Отдыхаю',
  'Работаю',
  'С семьей)',
  'Романтичный ужин',
  'Пикник',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const PHOTO_COUNT = 25;

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const generatePhotoId = createIdGenerator();
const generateCommentId = createIdGenerator();
const generateUrlId = createIdGenerator();

const createMessege = () => getRandomInteger(0, 1)
  ? getRandomArrayElement(MESSAGE)
  : `${getRandomArrayElement(MESSAGE)} ${getRandomArrayElement(MESSAGE)}`;

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-/${getRandomInteger(1, 6)}.svg`,
  message: createMessege(),
  name: getRandomArrayElement(NAMES)
});

const createDescriptionPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${generateUrlId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment)
});

const descriptionPhoto = Array.from({length: PHOTO_COUNT}, createDescriptionPhoto);
descriptionPhoto();
