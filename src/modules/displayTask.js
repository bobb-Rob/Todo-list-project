import todoApp from './todoApp/todoApp.js';
import { todoCard } from './domElements.js';

const displayItems = () => {
  const listContainer = document.querySelector('.todo-list-holder');
  todoApp.todos.forEach((todo) => {
    listContainer.appendChild(todoCard(todo));
  });
};



export default displayItems;