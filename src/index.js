
import './style.css';


const todos = [
  {
    description: 'Creating a frontend project',
    completed: false,
    index: 1,
  },
  {
    description: 'Baking cakes',
    completed: false,
    index: 2,
  },
  {
    description: 'Reading about local storage',
    completed: false,
    index: 3,
  },
  {
    description: 'Cleaning the house',
    completed: false,
    index: 4,
  },
];

todos.forEach((todo) => {
  const liEl = document.createElement('li');
  liEl.classList.add('todo-wrapper');
  liEl.innerHTML = `
      <div>
        <input type="checkbox" id="${todo.index}" />
      </div>
      <div>
        <p contenteditable="true">${todo.description}</p>
      </div>
      <div>
        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
    </div>
      `;
      const listContainer = document.querySelector('.todo-list-holder');
      listContainer.appendChild(liEl);
});