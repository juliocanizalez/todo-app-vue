import { defineStore } from 'pinia';
import { nanoid } from 'nanoid';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    todoList: [],
  }),
  actions: {
    addTask(task) {
      if (task.length > 0) {
        const id = nanoid();
        const isDone = false;
        const todo = { id, task, isDone };

        this.todoList.push(todo);
      }
    },
    removeTask(id) {
      const index = this.todoList.findIndex((t) => t.id === id);

      this.todoList.splice(index, 1);
    },
    modifyTask(id, task) {
      const index = this.todoList.findIndex((t) => t.id === id);

      this.todoList.splice(index, 1, task);
    },
    markDone(id) {
      const index = this.todoList.findIndex((t) => t.id === id);

      this.todoList[index].isDone = true;
    },
  },
  getters: {
    getDoneList: (state) => state.todoList.filter((item) => item.isDone),
    getTodoList: (state) => state.todoList.filter((item) => !item.isDone),
  },
});
