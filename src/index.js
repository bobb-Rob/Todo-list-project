import todoApp from './modules/todoApp.js';
import { displayItems } from './modules/element.js';
import Task from './modules/task.js';
import Store from './modules/localStorage.js';
import './style.css';

// event
// Load TodoList once page loads
document.addEventListener('DOMContentLoaded', displayItems);

const AddTaskInput = document.querySelector('#add-task-input');
AddTaskInput.addEventListener('change', (e) => {
  const inputEl = e.target;
  const newTask = new Task(inputEl.value, todoApp.todos);

  if (inputEl.value !== '') {
    const listContainer = document.querySelector('.todo-list-holder');
    todoApp.addTaskToArr(newTask);

    while (listContainer.firstChild) { // Remove all task in the list
      listContainer.removeChild(listContainer.firstChild);
    }
    displayItems(); // insert all task including the new task
    Store.setTask(newTask);
    AddTaskInput.value = '';
  }
});

// Onclick event on more btn
// const moreIcon = document.querySelector('.more-icon');
// moreIcon.addEventListener('click', editEl)