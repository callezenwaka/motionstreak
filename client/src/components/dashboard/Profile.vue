<template>
  <div class="profile">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'ProfileView',
  components: {
    // HelloWorld,
  },
});
</script>

<style scoped>
/* profile */
.profile {
  /* padding: 1rem; */
  height: 100%;
  min-height: 100vh;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 500ms linear;
}
</style>