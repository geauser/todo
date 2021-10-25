<template>

  <form
    class="flex flex-col px-3 py-2 border border-gray-200 rounded"
    @submit.prevent="submitForm">

    <input
      ref="titleInput"
      v-model="title"
      class="text-sm text-black mb-2 outline-none"
      type="text"
      placeholder="Task name">

    <input
      v-model="desc"
      class="text-xs text-gray-800 outline-none mb-3"
      type="text"
      placeholder="Description">

    <footer class="flex justify-end w-full">

      <button
        class="px-4 py-0.5 text-sm text-gray-600 mr-2"
        type="reset"
        @click="cancelForm">
        Cancel
      </button>

      <button
        class="px-4 py-0.5 text-sm bg-gray-800 text-white rounded disabled:cursor-default disabled:opacity-50"
        :disabled="!canSubmit"
        type="submit">
        {{ editMode ? 'Edit' : 'Add' }}
      </button>

    </footer>

  </form>

</template>

<script>
export default {

  props: {

    task: {
      type: Object,
      default: null,
    },

  },

  emits: ['cancel', 'submit'],

  data: () => ({
    title: '',
    desc:  '',
  }),

  computed: {
    editMode() { return Boolean(this.task); },
    // A task must have at least a title
    canSubmit() { return Boolean(this.title); },
  },

  created() {
    if (!this.task) return;
    this.title = this.task.title || '';
    this.desc  = this.task.desc  || '';
  },

  mounted() {
    this.$refs.titleInput.focus();
  },

  methods: {

    cancelForm() {
      this.title = '';
      this.desc  = '';
      this.$emit('cancel');
    },

    submitForm() {
      if (!this.canSubmit) return;

      const { title, desc } = this;
      this.$emit('submit', { title, desc });
      this.title = '';
      this.desc  = '';
      this.$refs.titleInput.focus();

    },

  },

};
</script>
