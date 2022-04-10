<template>
  <div class="header">
    <nav class="header-menu" :class="{ active: isOpen }">
      <router-link class="menu-link is-active" to="/">Home</router-link>
      <router-link v-if="isActivated" class="menu-link" to="/dashboard">Dashboard</router-link>
      <!-- <router-link v-if="!isActivated" class="menu-link" to="/register">Register</router-link> -->
      <router-link v-if="!isActivated" class="menu-link" to="/login">Login</router-link>
      <router-link v-if="isActivated" class="menu-link" to="/login">Logout</router-link>
      <!-- <router-link class="menu-link" to="/about">About</router-link> -->
    </nav>
    <div class="menu" :class="{ active: isOpen }">
      <button type="button" @click="handleMenu">
        <span v-if="isOpen">&#10005;</span>
        <span v-else>&#9776;</span>
      </button>
    </div>
    <div class="search-bar"><input type="text" placeholder="Search" /></div>
    <div v-if="isActivated" class="header-profile">
      <div class="notification">
        <span class="notification-number">3</span>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-bell"
        >
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"></path>
        </svg>
      </div>
      <img class="profile-img" :src="profile.photoURL || avatar" alt="">
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { computed, defineComponent, ref } from "vue";
import { useStore } from '@/store'
import { Profile } from "@/store/state";
export default defineComponent({
  name: "HeaderView",
  setup() {
    const store = useStore();
    const profile = computed((): Profile => store.getters.profile);
    const avatar = computed(() => {return require(`@/assets/avatar.png`)});
    const photoURL = ref('');
    let isOpen = ref(false);
    const handleMenu = () => {
      isOpen.value = !isOpen.value;
    }
    const isActivated = computed(() => profile.value.isActivated)

    return { profile, avatar, photoURL, isOpen, isActivated, handleMenu }
  }
});
</script>

<style scoped>
/* header */
.header {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 58px;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  /* padding: 0 30px; */
  white-space: nowrap;
}
/* @media screen and (max-width: 480px) {
  .header {
    padding: 0 16px;
  }
} */
.header-menu {
  display: flex;
  align-items: center;
}
.header-menu {
  display: flex;
  display: none;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  min-width: 100%;
  margin-top: 7.5rem;
  background-color: #111827;
}
.header-menu.active {
  display: flex;
}
.header-menu a {
  width: 100%;
  padding: 20px 30px;
  text-decoration: none;
  color: var(--inactive-color);
  border-bottom: 2px solid transparent;
  transition: 0.3s;
}
@media screen and (min-width: 945px) {
  .header-menu {
    display: flex;
  }
  .header-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 0;
    min-width: unset;
    margin-top: unset;
    background-color: unset;
}
}
/* @media screen and (max-width: 610px) {
  .header-menu a:not(.main-header-link) {
    display: none;
  }
} */
/* .header-menu a.is-active,
.header-menu a:hover {
  color: var(--theme-color);
  border-bottom: 2px solid var(--theme-color);
} */
.header-menu a.router-link-exact-active {
  /* color: #42b983; */
  color: var(--theme-color);
  /* background-color: #0c0f194d; */
  background-color: var(--hover-menu-bg);
  border-bottom: 2px solid var(--theme-color);
}
.menu {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  cursor: pointer;
}
.menu.active {
    /* display: flex;
    flex-direction: column;
    white-space: nowrap;
    cursor: pointer; */
    z-index: 20;
    /* margin-right: -5rem; */
    position: absolute;
}
.menu button {
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: xx-large;
  padding-left: 8px;
  padding-right: 8px;
}
@media screen and (min-width: 945px) {
  .menu {
    display: none;
  }
}
.side-menu a {
  text-decoration: none;
  color: var(--theme-color);
  display: flex;
  align-items: center;
  font-weight: 400;
  padding: 10px;
  font-size: 14px;
  border-radius: 6px;
  transition: 0.3s;
}
.side-menu a:hover {
  background-color: var(--hover-menu-bg);
}
.side-menu svg {
  width: 16px;
  margin-right: 8px;
}
/* .menu {
  display: flex;
    flex-direction: row;
    justify-content: center;
    padding-right: 36px;
    padding-left: 16px;
} */
.notify {
  position: relative;
}
.notify:before {
  content: "";
  position: absolute;
  background-color: #3a6df0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  right: 20px;
  top: 16px;
}
@media screen and (max-width: 1055px) {
  .notify {
    display: none;
  }
}
.search-bar {
  height: 40px;
  display: flex;
  width: 100%;
  max-width: 400px;
  padding-left: 16px;
  border-radius: 4px;
}
.search-bar input {
  width: 100%;
  height: 100%;
  border: none;
  background-color: var(--search-bg);
  border-radius: 4px;
  font-family: var(--body-font);
  font-size: 15px;
  font-weight: 500;
  padding: 0 20px 0 40px;
  box-shadow: 0 0 0 2px rgba(134, 140, 160, 0.02);
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
  background-size: 14px;
  background-repeat: no-repeat;
  background-position: 16px 48%;
  color: var(--theme-color);
}
.search-bar input::-moz-placeholder {
  font-family: var(--body-font);
  color: var(--inactive-color);
  font-size: 15px;
  font-weight: 500;
}
.search-bar input:-ms-input-placeholder {
  font-family: var(--body-font);
  color: var(--inactive-color);
  font-size: 15px;
  font-weight: 500;
}
.search-bar input::placeholder {
  font-family: var(--body-font);
  color: var(--inactive-color);
  font-size: 15px;
  font-weight: 500;
}
.header-profile {
  display: flex;
  align-items: center;
  padding: 0 16px 0 40px;
  margin-left: auto;
  flex-shrink: 0;
}
.header-profile svg {
  width: 22px;
  color: #f9fafb;
  flex-shrink: 0;
}
.notification {
  position: relative;
}
.notification-number {
  position: absolute;
  background-color: #3a6df0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  right: -6px;
  top: -6px;
}
.notification + svg {
  margin-left: 22px;
}
@media screen and (max-width: 945px) {
  .notification + svg {
    display: none;
  }
}
.profile-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  -o-object-fit: cover;
  object-fit: cover;
  border: 2px solid var(--theme-color);
  margin-left: 22px;
}
.wide .header-menu,
.wide .header-profile {
  display: none;
}
.wide .search-bar {
  max-width: 600px;
  margin: auto;
  transition: 0.4s;
  box-shadow: 0 0 0 1px var(--border-color);
  padding-left: 0;
}
</style>