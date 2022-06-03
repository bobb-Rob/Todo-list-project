export default class Store {
    static getTask = () => {
      let task;
      if (localStorage.getItem('todos') === null) {
        task = [];
      } else {
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
      let allTask = Store.getTask();
      allTask = allTask.filter((task) => task.index !== id);
      allTask.forEach((task, index) => {
        task.index = index + 1;
      });
      localStorage.setItem('todos', JSON.stringify(allTask));
    }

    static editTaskLocalStore = (id, newDesc) => {
      const allTask = Store.getTask();
      for (let i = 0; i < allTask.length; i += 1) {
        if (allTask[i].index === id) {
          allTask[i].description = newDesc;
        }
      }
      localStorage.setItem('todos', JSON.stringify(allTask));
    }

    static toggleMarkAsComplete = (id) => {
      const allTask = Store.getTask();
      for (let i = 0; i < allTask.length; i += 1) {
        if (allTask[i].index === id) {
          if (allTask[i].completed) {
            allTask[i].completed = false;
          } else {
            allTask[i].completed = true;
          }
        }
      }
      localStorage.setItem('todos', JSON.stringify(allTask));
    }

    static deleteAllTask = () => {
      let allTask = Store.getTask();
      allTask = allTask.filter((task) => !task);
      localStorage.setItem('todos', JSON.stringify(allTask));
    }
}
