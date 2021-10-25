<template>

  <div
    class="pretty p-default p-round"
    style="margin-right: 0">

    <input
      type="checkbox"
      :checked="checked"
      @click.prevent="$emit('click')" />

    <div class="state">
      <label />
    </div>

  </div>

</template>

<script>
export default {

  props: {
    checked: { type: Boolean, required: true },
  },

  emits: ['click'],

};
</script>
