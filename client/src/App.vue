<template>
    <div class="dark-light">
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </div>
    <Toast :toast="toast"></Toast>
    <div class="app">
      <router-view/>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Toast from "@/components/partials/Toast.vue";
import { store } from "./store";
export default defineComponent({
  name: "HomeView",
  components: {
    Toast,
  },
  setup() {
    const toast = computed((): boolean => store.getters.toast);

    return {
      toast,
    }
  }
});
</script>

<style>

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
  outline: none;
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
}

:root {
  --dark-theme-color: #e7e9ea;
  --theme-bg-color: rgba(16 18 27 / 40%);
  --border-color: rgba(113 119 144 / 25%);
  --theme-color: #f9fafb;
  --inactive-color: rgb(113 119 144 / 78%);
  --body-font: "Poppins", sans-serif;
  --hover-menu-bg: rgba(12 15 25 / 30%);
  --content-title-color: #999ba5;
  --content-bg: rgb(146 151 179 / 13%);
  --button-inactive: rgb(249 250 251 / 55%);
  --dropdown-bg: #21242d;
  --dropdown-hover: rgb(42 46 60);
  --popup-bg: rgb(22 25 37);
  --search-bg: #14162b;
  --overlay-bg: rgba(36, 39, 59, 0.3);
  --scrollbar-bg: rgb(1 2 3 / 40%);
}

.light-mode {
  --theme-bg-color: rgb(255 255 255 / 31%);
  --theme-color: #3c3a3a;
  --inactive-color: #333333;
  --button-inactive: #3c3a3a;
  --search-bg: rgb(255 255 255 / 31%);
  --dropdown-bg: #f7f7f7;
  --overlay-bg: rgb(255 255 255 / 30%);
  --dropdown-hover: rgb(236 236 236);
  --border-color: rgb(255 255 255 / 35%);
  --popup-bg: rgb(255 255 255);
  --hover-menu-bg: rgba(255 255 255 / 35%);
  --scrollbar-bg: rgb(255 253 253 / 57%);
  --content-title-color: --theme-color;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

body {
  font-family: var(--body-font);
  background-image: url(https://wallpapershome.com/images/wallpapers/macos-big-sur-1280x720-dark-wwdc-2020-22655.jpg);
  background: linear-gradient(to right, rgb(56, 189, 248), rgb(251, 113, 133), rgb(163, 230, 53));
  background: linear-gradient(to right, rgb(153, 246, 228), rgb(217, 249, 157));
  /* background: linear-gradient(to right, rgb(239, 68, 68), rgb(34, 197, 94)); */
  /* background: linear-gradient(to right, rgb(202, 138, 4), rgb(220, 38, 38)); */
  /* background-image: radial-gradient(circle, #5c0067 0%, #00d4ff 100%); */
  /* background-image: linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%); */
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  background: linear-gradient(rgb(17, 24, 39), rgb(75, 85, 99));
  /* background: linear-gradient(to right, rgb(243, 244, 246), rgb(209, 213, 219)); */
  background-size: cover;
  background-position: center;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  /* padding: 2em; */
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 480px) {
  body {
    padding: 0em;
  }
}
.video-bg {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.video-bg video {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
img {
  max-width: 100%;
}

.dark-light {
  position: fixed;
  bottom: 50px;
  right: 30px;
  background-color: var(--dropdown-bg);
  box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.2);
  padding: 8px;
  border-radius: 50%;
  z-index: 3;
  cursor: pointer;
}
.dark-light svg {
  width: 24px;
  flex-shrink: 0;
  fill: #ffce45;
  stroke: #ffce45;
  transition: 0.5s;
}
.light-mode .dark-light svg {
  fill: transparent;
  stroke: var(--theme-color);
}
.light-mode .profile-img {
  border: 2px solid var(--theme-bg-color);
}
.light-mode .content-section ul {
  background-color: var(--theme-bg-color);
}
.light-mode .pop-up__title {
  border-color: var(--theme-color);
}
.light-mode .dropdown.is-active ul {
  background-color: rgba(255, 255, 255, 0.94);
}

body.light-mode:before,
body.light-mode .video-bg:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.72) 0%,
    rgba(255, 255, 255, 0.45) 100%
  );
  -webkit-backdrop-filter: saturate(3);
  backdrop-filter: saturate(3);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  color: #e7e9ea;
  min-width: 100%;
}
.app {
  background-color: var(--theme-bg-color);
  /* min-width: 1250px; */
  max-width: 1250px;
  max-width: 100%;
  /* max-height: 860px; */
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  /* border-radius: 14px; */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  font-size: 15px;
  font-weight: 500;
}
</style>
