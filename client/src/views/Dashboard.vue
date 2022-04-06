<template>
  <div class="about">
    <Header></Header>
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { defineComponent } from 'vue';
import Header from '@/components/partials/Header.vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
    Header,
  },
});
</script>