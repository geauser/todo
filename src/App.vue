<template>
  <section class="container m-auto max-w-lg px-4">
    <the-header />
    <main-section />
  </section>
</template>

<script>
import TheHeader   from '@/components/TheHeader.vue';
import MainSection from '@/components/MainSection.vue';

export default {

  components: {
    TheHeader,
    MainSection,
  },
};
</script>
