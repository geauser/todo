<template>

  <section class="flex flex-col" role="main">

    <header class="flex justify-between w-full mb-4">

      <search-bar />

      <button
        class="new-task-button"
        @click="showNewTaskForm = true">
        Add Task
        <span class="material-icons text-white text-base ml-2" aria-hidden="true">add_box</span>
      </button>

    </header>

    <hr class="w-full border-gray-200 mb-5" />

    <task-list :tasks="todoTasks" />

    <task-form
      v-if="showNewTaskForm"
      class="my-4"
      @cancel="showNewTaskForm = false"
      @submit="createNewTask" />

    <task-list
      class="mt-6 mb-10"
      :tasks="doneTasks" />

    <button
      class="floating-new-task-button"
      @click="showNewTaskForm = true">
      <span class="material-icons text-white text-base" aria-hidden="true">add_box</span>
    </button>

  </section>

</template>

<script>
import { mapGetters } from 'vuex';

import SearchBar     from '@/components/SearchBar.vue';
import TaskList      from '@/components/TaskList.vue';
import TaskForm      from '@/components/TaskForm.vue';

export default {

  components: {
    SearchBar,
    TaskList,
    TaskForm,
  },

  data: () => ({
    showNewTaskForm: false,
  }),

  computed: {

    ...mapGetters([
      'todoTasks',
      'doneTasks',
    ]),

  },

  methods: {

    createNewTask(newTask) {
      this.$store.dispatch('addTask', newTask);
    },

  },

};
</script>

<style scoped>

  .new-task-button {
    /* Put Tailwind properties here for lisibility's sake */
    @apply
      flex items-center
      px-2 py-0.5
      font-sans text-sm text-white
      box-content rounded
      bg-gray-800
      hover:bg-gray-600
      transition-colors;
  }

  .floating-new-task-button {
    @apply
      fixed
      right-4 bottom-8
      flex items-center justify-center
      h-12 w-12
      visible
      font-sans text-sm text-white
      rounded-full
      bg-gray-800
      sm:invisible
  }

</style>
