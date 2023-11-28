import {getRandomInteger, getRandomArrayElement} from './util.js';

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

const createMessege = () => getRandomInteger(0, 1)
  ? getRandomArrayElement(MESSAGE)
  : `${getRandomArrayElement(MESSAGE)} ${getRandomArrayElement(MESSAGE)}`;

const createComment = (id) => ({
  id: id,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createMessege(),
  name: getRandomArrayElement(NAMES)
});

const createDescriptionPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment)
});

const descriptionPhotos = () => Array.from({length: PHOTO_COUNT}, (_, index) => createDescriptionPhoto(index + 1));
export {descriptionPhotos};
