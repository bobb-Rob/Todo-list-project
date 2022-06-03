import todoApp from './todoApp.js';
import Store from './localStorage.js';

const todoCard = ({ description, index }) => {
  const liEl = document.createElement('li');
  liEl.classList.add('todo-wrapper');
  liEl.id = `todo-${index}`;
  liEl.innerHTML = `
      <div class='left-align'>
        <div>
          <input type="checkbox" id="task-${index}" />
        </div>
        <div class='description-wrapper'>
          <p class='description'>${description}</p>
        </div>
      </div>
      <div class='more-delete-wrapper'>
          <ion-icon class='more-icon ionic' name="ellipsis-vertical-outline"></ion-icon>
      </div>
        `;
  return liEl;
};

const editEl = (e) => {
  const moreIcon = e.target;
  const todoWrap = moreIcon.parentElement.parentElement;
  const moreIconWrapper = moreIcon.parentElement;
  const descWrapper = todoWrap.firstElementChild.lastElementChild;
  const desc = descWrapper.querySelector('.description');

  const deleteIcon = document.createElement('div');
  deleteIcon.innerHTML = '<ion-icon class=\'ionic delete-icon\' name="trash-outline"></ion-icon>';
  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.classList.add('edit-input');
  inputEl.value = desc.textContent;

  // hide description and moreIcon
  desc.classList.toggle('none');
  moreIcon.classList.toggle('none');
  // Append delete and input element for edit
  moreIconWrapper.appendChild(deleteIcon);
  descWrapper.appendChild(inputEl);
  todoWrap.style.backgroundColor = '#f6f6c8';
  inputEl.focus(); // Initiate focus

  const idLength = todoWrap.id.length;
  const taskId = Number(todoWrap.id[idLength - 1]);

  inputEl.addEventListener('change', (e) => {
    const input = e.target;
    desc.textContent = input.value;
    desc.classList.toggle('none');
    moreIcon.classList.toggle('none');
    todoWrap.style.backgroundColor = '';
    Store.editTaskLocalStore(taskId, input.value);
    deleteIcon.remove();
    input.remove();
  });

  deleteIcon.addEventListener('click', () => {
    const listContainer = document.querySelector('.todo-list-holder');
    todoApp.removeTask(taskId);
    while (listContainer.firstChild) { // Remove all task in the list
      listContainer.removeChild(listContainer.firstChild);
    }
    /* eslint-disable no-use-before-define */
    displayItems(); // insert all task including the new task
    Store.removeTask(taskId);
  });
};

const displayItems = () => {
  const listContainer = document.querySelector('.todo-list-holder');
  todoApp.todos.forEach((todo) => {
    listContainer.appendChild(todoCard(todo));
  });

  const moreIcon = document.querySelectorAll('.more-icon');
  const moreIconArr = Array.from(moreIcon);
  moreIconArr.forEach((icon) => {
    icon.addEventListener('click', editEl);
  });
};

export { todoCard, displayItems, editEl };