/** * @jest-environment jsdom */
import todoApp from './todoApp.js';
import Task from '../task'


describe('add & delete function test', () => {
    test('add task function', () => {
        //Arrange
        let task = new Task('Apple', todoApp.todos);
        let arr = []
        let arrLength = arr.length;
      
        //Act
        todoApp.addTaskToArr(task, arr);
        // //Assertion
        expect(arr).toHaveLength(arrLength);
    });
});