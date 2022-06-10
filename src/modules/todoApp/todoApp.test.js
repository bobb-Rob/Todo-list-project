/** * @jest-environment jsdom */
import todoApp from './todoApp.js';
import Task from '../task'


describe('add & delete function test', () => {
    test('add task function', () => {
        //Arrange
        let task = new Task('Apple', todoApp.todos);
             
        //Act
        todoApp.addTaskToArr(task);

        //Assertions
        expect(todoApp.todos).toHaveLength(1);
        
    });
});