const PART_SHOW_COMMNENT = 5;

let showComments = 0;
let comments = [];

const commentContainer = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsLoaderElement = document.querySelector('.comments-loader');
const commentsShownElement = document.querySelector('.show-comment-count');
const totalCommentsElement = document.querySelector('.comments-count');

const createComment = ( {avatar, name, message} ) => {
  const comment = commentTemplate.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = () => {
  showComments += PART_SHOW_COMMNENT;
  if (showComments >= comments.length) {
    commentsLoaderElement.classList.add('hidden');
    showComments = comments.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < showComments; i++) {
    const comment = createComment(comments[i]);
    fragment.appendChild(comment);
  }

  commentContainer.innerHTML='';
  commentContainer.appendChild(fragment);
  commentsShownElement.textContent = showComments;
  totalCommentsElement.textContent = comments.length;
};

const updateComments = (data) => {
  comments = data.comments;
  showComments = 0;
  renderComments();
};

function onCommentsLoaderClick () {
  renderComments();
}

commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);

export {updateComments};
