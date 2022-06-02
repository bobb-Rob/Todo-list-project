
export default class Store {
    static getTask = () => {
        let task;
        if(localStorage.getItem('todos') === null){
            task = [];
        }else{
            task = JSON.parse(localStorage.getItem('todos'));
        }
        return task;
    }

    static setTask = (newTask) => {
        let task = Store.getTask();
        task = [...task, newTask];
        localStorage.setItem('todos', JSON.stringify(task));
    }

    static removeTask = (id) => {

    }
}
