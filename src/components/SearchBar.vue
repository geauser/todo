<template>

  <input
    class="px-2 py-0.5 font-sans text-sm text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded"
    type="text"
    placeholder="Search">

</template>

<script>
export default {

  props: {
    value: {
      type: String,
      required: true,
    },
  },

};
</script>

<style>

</style>
