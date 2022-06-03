import todoApp from "./todoApp";
import todoCard from "./todoCard";

const displayItems = () => {
    const listContainer = document.querySelector('.todo-list-holder');
    todoApp.todos.forEach((todo) => {
      listContainer.appendChild(todoCard(todo));
    });
  }

  export default displayItems;