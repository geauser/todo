<template>

  <ul class="">

    <li
      v-for="(task, index) in tasks"
      :key="index">

      <task-list-item :task="task" />

    </li>

  </ul>

</template>

<script>
import TaskListItem from '@/components/TaskListItem.vue';

export default {

  components: {
    TaskListItem,
  },

  props: {

    tasks: {
      type: Array,
      required: true,
    },

  },

};
</script>
