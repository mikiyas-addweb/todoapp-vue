import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem("TASKS"))
    ? JSON.parse(localStorage.getItem("TASKS"))
    : [],
  },
  getters: {
  },
  mutations: {
    ADD_TASK(state, task) {
	  
      if (!state.tasks.some(({content}) => content == task)) {
        let a = [{ content: task, done: false }, ...state.tasks];
        localStorage.setItem("TASKS", JSON.stringify(a));
        state.tasks = JSON.parse(localStorage.getItem("TASKS"));
      }
    },
    REMOVE_TASK(state, task) {
      state.tasks.splice(state.tasks.indexOf(task), 1);
      let a = state.tasks;
      localStorage.setItem("TASKS", JSON.stringify(a));
      state.tasks = JSON.parse(localStorage.getItem("TASKS"));
    },
    TOGGLE_TASK(state, task) {
      task.done = !task.done;
      let a = state.tasks;
      localStorage.setItem("TASKS", JSON.stringify(a));
      state.tasks = JSON.parse(localStorage.getItem("TASKS"));
    },
    REMOVE_ALL_TASKS(state, task) {
      let a = [];
      localStorage.setItem("TASKS", JSON.stringify(a));
      state.tasks = JSON.parse(localStorage.getItem("TASKS"));
    },
  },
  actions: {
  },
  modules: {
  }
})
