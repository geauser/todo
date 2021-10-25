import { createStore } from 'vuex';
import mut             from './mutations';

export default createStore({
  state: {

    todoTasks: [
      {
        title:    'Vehicula Ligula Tellus',
        desc:      'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
      },
      {
        title:     'Ipsum Vulputate',
        desc:      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        title:     'Mollis Malesuada',
        desc:      'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      },
      {
        title:     'Consectetur Mollis',
        desc:      'Vestibulum id ligula porta felis euismod semper.',
      },
      {
        title:     'Condimentum Cursus',
        desc:      '',
      },
    ],
    doneTasks: [],

  },

  getters: {

    /**
     * Instead of using the tasks lists in the store's state,
     * we expose them via a getter that will add a 'completed'
     * and a 'i' (index) attribute, removing the need to
     * remember from which list (todo or done) the task comes
     * from or its position inside the list.
     */
    todoTasks: (state) => state.todoTasks.map((t, i) => ({ ...t, index: i, completed: false })),
    doneTasks: (state) => state.doneTasks.map((t, i) => ({ ...t, index: i, completed: true })),

  },

  mutations: {

    [mut.ADD_TASK_TO_DONE](state, task) {
      state.doneTasks.unshift(task);
    },

    [mut.ADD_TASK_TO_TODO](state, task) {
      state.todoTasks.push(task);
    },

    [mut.REMOVE_TASK_FROM_TODO](state, index) {
      // Remove the element by filtering it out of the array
      state.todoTasks = state.todoTasks.filter((_, i) => i !== index);
    },

    [mut.REMOVE_TASK_FROM_DONE](state, index) {
      // Remove the element by filtering it out of the array
      state.doneTasks = state.doneTasks.filter((_, i) => i !== index);
    },

    [mut.EDIT_TASK](state, { task, index }) {
      state.todoTasks[index] = task;
    },

  },
  actions: {

    markTaskDone({ commit }, task) {
      commit(mut.REMOVE_TASK_FROM_TODO, task.index);
      commit(mut.ADD_TASK_TO_DONE, task);
    },

    markTaskTodo({ commit }, task) {
      commit(mut.REMOVE_TASK_FROM_DONE, task.index);
      commit(mut.ADD_TASK_TO_TODO, task);
    },

    addTask({ commit }, task) {
      commit(mut.ADD_TASK_TO_TODO, task);
    },

    editTask({ commit }, { task, index }) {
      commit(mut.EDIT_TASK, { task, index });
    },

    deleteTask({ commit }, task) {
      if (task.completed) commit(mut.REMOVE_TASK_FROM_DONE, task.index);
      else commit(mut.REMOVE_TASK_FROM_TODO, task.index);
    },

  },
  modules: {},
});
