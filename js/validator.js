const MAX_HASHTAGS_COUNT = 5;
const MAX_COMMENT_LENGTH = 140;
const VALID_HASHTAG_SYMBOLS = /^#[a-zA-Z0-9а-яА-Я]{1,19}$/;

const form = document.querySelector('.img-upload__form');
const commentElement = document.querySelector('.text__description');
const hashtagsElement = document.querySelector('.text__hashtags');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

const toHashtagsList = (hashtags) => hashtags
  .split(' ')
  .map((hashtag) => hashtag.trim().toLowerCase())
  .filter((hashtag) => hashtag.length);

const isRightHashtags = (hashtags) => toHashtagsList(hashtags).every((hashtag) => VALID_HASHTAG_SYMBOLS.test(hashtag));

const isUniqueHashtags = (hashtags) => {
  const hashtagsList = toHashtagsList(hashtags);
  return hashtagsList.length === (new Set(hashtagsList)).size;
};

const isRightHashtagsCount = (hashtags) => toHashtagsList(hashtags).length <= MAX_HASHTAGS_COUNT;

const HashtagsRules = [
  {
    check: (hashtags) => isRightHashtagsCount(hashtags),
    ERROR: `Максимум ${MAX_HASHTAGS_COUNT} хэштегов`
  },
  {
    check: (hashtags) => isUniqueHashtags(hashtags),
    ERROR: 'Хэштеги не должны повторяться'
  },
  {
    check: (hashtags) => isRightHashtags(hashtags),
    ERROR: 'Неправильный хэштег'
  },
];

HashtagsRules.forEach((rule, index) => pristine.addValidator(hashtagsElement, rule.check, rule.ERROR, index, true));

pristine.addValidator(commentElement, (comment) => comment.length < MAX_COMMENT_LENGTH, `Комментарий не может быть длиннее ${MAX_COMMENT_LENGTH} символов`, 1, false);

const onFormInput = (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
};

const refreshPrinstine = () => {
  pristine.reset();
};

export {onFormInput, refreshPrinstine};
