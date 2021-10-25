<template>

  <input
    class="px-2 py-0.5 font-sans text-sm text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded"
    type="text"
    placeholder="Search"
    :value="searchTerms"
    @input="updateSearchTerms($event.target.value)">

</template>

<script>
import { mapState } from 'vuex';

export default {

  computed: {
    ...mapState(['searchTerms']),
  },

  methods: {
    updateSearchTerms(newTerms) {
      this.$store.dispatch('setSearchTerms', newTerms);
    },
  },

};
</script>

<style>

</style>
