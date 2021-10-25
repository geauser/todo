<template>

  <task-form
    v-if="showEditTaskForm"
    class="my-2"
    :task="task"
    @cancel="showEditTaskForm = false"
    @submit="editTask" />

  <article
    v-else
    class="group relative hover:bg-gray-50 focus:bg-gray-50 pt-3 pb-3">

    <tbody class="mt-3">
      <tr>
        <td class="flex items-start">
          <header class="mr-3">
            <task-checkbox
              :checked="task.completed"
              @click="handleTaskStatusChange" />
          </header>
        </td>

        <td>
          <section>
            <h1
              class="text-sm text-black"
              :class="{ 'line-through text-gray-400': task.completed }">
              {{ task.title }}
            </h1>
            <p
              v-if="task.desc"
              class="text-xs"
              :class="`${task.completed ? 'text-gray-300' : 'text-gray-500'}`">{{ task.desc }}</p>
          </section>
        </td>
      </tr>
    </tbody>

    <div class="invisible group-focus:visible group-hover:visible flex absolute bg-white shadow-sm border rounded right-0 -top-3 z-10">

      <button
        v-if="!task.completed"
        class="py-1 px-2.5 border-gray-200 hover:bg-gray-50"
        style="border-right-width: 1px"
        @click="showEditTaskForm = true">
        <span class="text-sm text-gray-600 material-icons">edit</span>
      </button>

      <button
        class="py-1 px-2.5 hover:bg-red-50"
        @click="deleteTask">
        <span class="text-sm text-red-600 material-icons">delete</span>
      </button>
    </div>

  </article>

  <hr class="w-full border-gray-200" />

</template>

<script>
import TaskCheckbox from '@/components/TaskCheckbox.vue';
import TaskForm     from '@/components/TaskForm.vue';

export default {

  components: {
    TaskCheckbox,
    TaskForm,
  },

  props: {

    task: {
      type: Object,
      required: true,
    },

  },

  data: () => ({
    showEditTaskForm: false,
  }),

  methods: {

    handleTaskStatusChange() {
      const actionName = this.task.completed ? 'markTaskTodo' : 'markTaskDone';
      this.$store.dispatch(actionName, this.task);
    },

    editTask(editedTask) {
      this.$store.dispatch('editTask', { task: editedTask, index: this.task.index });
      this.showEditTaskForm = false;
    },

    deleteTask() {
      this.$store.dispatch('deleteTask', this.task);
    },
  },

};
</script>
