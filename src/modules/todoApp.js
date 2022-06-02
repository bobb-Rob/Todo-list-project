import Store from './localStorage.js';
import { todoCard }  from './element.js'



class TodoApp {
    constructor(todos){
        this.todos = todos;        
    }

    addTaskToArr = (task) => {
        let todoList = this.todos;
        this.todos = [...todoList, task];    
    }

    addtaskToUI = (task, location) => { 
        location.appendChild(todoCard(task));
    };
    
    
    removeTask = (id) => {
        let todoList = this.todos;
        this.todos = todoList.filter((task => task.index !== id))
    }

}

const todoApp = new TodoApp(Store.getTask());
export { todoApp }