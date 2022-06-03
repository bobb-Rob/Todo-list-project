import Store from './localStorage.js';

class TodoApp {
  constructor(todos) {
    this.todos = todos;
  }

    addTaskToArr = (task) => {
      const todoList = this.todos;
      this.todos = [...todoList, task];
    }

    removeTask = (id) => {
      const todoList = this.todos;
      this.todos = todoList.filter(((task) => task.index !== id));
    }

    resetIndex = () => {
      this.todos.forEach((task, index) => {
        task.index = index + 1;
      });
    }
}

const todoApp = new TodoApp(Store.getTask());
export default todoApp;