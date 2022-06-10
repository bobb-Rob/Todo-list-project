/** * @jest-environment jsdom */
import todoApp from './todoApp.js';
import Task from '../task';
import displayItems from '../displayTask'

document.body.innerHTML = `
<div class="todo-app">
        <div class="header">
            <h1>Today's To Do</h1>
            <i class="fa-solid fa-rotate"></i>
        </div>
        <form action="#" class="todo-input-wrapper">
            <input type="text" placeholder="Add to your list..." id="add-task-input">
            <ion-icon class="ionic" name="enter-outline"></ion-icon>
        </form>
        <ul class="todo-list-holder">

        </ul>
        <button type="button" class="clear-all-btn">Clear all completed</button>
    </div>`

describe('add & delete function test', () => {
    test('add task function', () => {
        //Arrange
        let task = new Task('Apple', todoApp.todos);
        
        //Act
        todoApp.addTaskToArr(task);
        todoApp.addTaskToArr(task);        

        //Assertions
        expect(todoApp.todos).toHaveLength(2);       
    });

    test('Add task to DOM', () => {
        const listContainer = document.querySelector('.todo-list-holder');
        todoApp.todos.forEach((todo) => {
            let domTask = document.createElement('div')           
          listContainer.appendChild(domTask);
        });

        expect(listContainer.children.length).toEqual(2);
    })
});