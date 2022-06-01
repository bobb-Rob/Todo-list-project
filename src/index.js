import todos from './todoItems.js';
import './style.css';

const todoItem = ({ description, index }) => {
  const liEl = document.createElement('li');
  liEl.classList.add('todo-wrapper');
  liEl.id = `todo-${index}`;
  liEl.innerHTML = `
    <div class='left-align'>
      <div>
        <input type="checkbox" id="${index}" />
      </div>
      <div>
        <p contenteditable="true">${description}</p>
      </div>
    </div>
      <div>
        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
    </div>
      `;
  return liEl;
};

const displayTodo = () => {
  const listContainer = document.querySelector('.todo-list-holder');
  todos.forEach((todo) => {
    listContainer.appendChild(todoItem(todo));
  });
};

document.addEventListener('DOMContentLoaded', displayTodo);
