<template>
  <div class="dashboard">
    <Header></Header>
    <div class="">
      <div class="wrapper">
        <div class="side-arrow" :class="{ active: isOpen }">
          <button type="button" @click="handleArrow">
            <span v-if="isOpen">&#10094;</span>
            <span v-else>&#10095;</span>
          </button>
        </div>
        <div class="left-side" :class="{ active: isOpen }">
          <div class="side-wrapper">
            <div class="side-title">Categories</div>
            <div class="side-menu">
              <button type="button" :class="{ active: pages.isDocuments }" @click="handlePages('isDocuments')">
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path
                    d="M497 151H316c-8.401 0-15 6.599-15 15v300c0 8.401 6.599 15 15 15h181c8.401 0 15-6.599 15-15V166c0-8.401-6.599-15-15-15zm-76 270h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15zm0-180h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15z"
                  />
                  <path
                    d="M15 331h196v60h-75c-8.291 0-15 6.709-15 15s6.709 15 15 15h135v-30h-30v-60h30V166c0-24.814 20.186-45 45-45h135V46c0-8.284-6.716-15-15-15H15C6.716 31 0 37.716 0 46v270c0 8.284 6.716 15 15 15z"
                  />
                </svg>
                Documents
              </button>
              <button v-if="isTenant" type="button" :class="{ active: pages.isService }" @click="handlePages('isService')">
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path
                    d="M497 151H316c-8.401 0-15 6.599-15 15v300c0 8.401 6.599 15 15 15h181c8.401 0 15-6.599 15-15V166c0-8.401-6.599-15-15-15zm-76 270h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15zm0-180h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15z"
                  />
                  <path
                    d="M15 331h196v60h-75c-8.291 0-15 6.709-15 15s6.709 15 15 15h135v-30h-30v-60h30V166c0-24.814 20.186-45 45-45h135V46c0-8.284-6.716-15-15-15H15C6.716 31 0 37.716 0 46v270c0 8.284 6.716 15 15 15z"
                  />
                </svg>
                Services
              </button>
              <button type="button" :class="{ active: pages.isAccount }" @click="handlePages('isAccount')">
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path
                    d="M497 151H316c-8.401 0-15 6.599-15 15v300c0 8.401 6.599 15 15 15h181c8.401 0 15-6.599 15-15V166c0-8.401-6.599-15-15-15zm-76 270h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15zm0-180h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15z"
                  />
                  <path
                    d="M15 331h196v60h-75c-8.291 0-15 6.709-15 15s6.709 15 15 15h135v-30h-30v-60h30V166c0-24.814 20.186-45 45-45h135V46c0-8.284-6.716-15-15-15H15C6.716 31 0 37.716 0 46v270c0 8.284 6.716 15 15 15z"
                  />
                </svg>
                Account
              </button>
              <button v-if="isTenant" type="button" :class="{ active: pages.isAdmin }" @click="handlePages('isAdmin')">
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path
                    d="M497 151H316c-8.401 0-15 6.599-15 15v300c0 8.401 6.599 15 15 15h181c8.401 0 15-6.599 15-15V166c0-8.401-6.599-15-15-15zm-76 270h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15zm0-180h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15z"
                  />
                  <path
                    d="M15 331h196v60h-75c-8.291 0-15 6.709-15 15s6.709 15 15 15h135v-30h-30v-60h30V166c0-24.814 20.186-45 45-45h135V46c0-8.284-6.716-15-15-15H15C6.716 31 0 37.716 0 46v270c0 8.284 6.716 15 15 15z"
                  />
                </svg>
                Admin
              </button>
              <button v-if="isUser" type="button" :class="{ active: pages.isRequest }" @click="handlePages('isRequest')">
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path
                    d="M497 151H316c-8.401 0-15 6.599-15 15v300c0 8.401 6.599 15 15 15h181c8.401 0 15-6.599 15-15V166c0-8.401-6.599-15-15-15zm-76 270h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15zm0-180h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15z"
                  />
                  <path
                    d="M15 331h196v60h-75c-8.291 0-15 6.709-15 15s6.709 15 15 15h135v-30h-30v-60h30V166c0-24.814 20.186-45 45-45h135V46c0-8.284-6.716-15-15-15H15C6.716 31 0 37.716 0 46v270c0 8.284 6.716 15 15 15z"
                  />
                </svg>
                Request
              </button>
              <button v-if="isAdmin && pages.isCertify && profile.affiliate == document.certifier" type="button" :class="{ active: pages.isCertify }" @click="handlePages('isCertify')">
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path
                    d="M497 151H316c-8.401 0-15 6.599-15 15v300c0 8.401 6.599 15 15 15h181c8.401 0 15-6.599 15-15V166c0-8.401-6.599-15-15-15zm-76 270h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15zm0-180h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15z"
                  />
                  <path
                    d="M15 331h196v60h-75c-8.291 0-15 6.709-15 15s6.709 15 15 15h135v-30h-30v-60h30V166c0-24.814 20.186-45 45-45h135V46c0-8.284-6.716-15-15-15H15C6.716 31 0 37.716 0 46v270c0 8.284 6.716 15 15 15z"
                  />
                </svg>
                Certify
              </button>
              <button v-if="isAdmin && pages.isVerify && profile.affiliate == document.verifier" type="button" :class="{ active: pages.isVerify }" @click="handlePages('isVerify')">
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path
                    d="M497 151H316c-8.401 0-15 6.599-15 15v300c0 8.401 6.599 15 15 15h181c8.401 0 15-6.599 15-15V166c0-8.401-6.599-15-15-15zm-76 270h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15zm0-180h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15z"
                  />
                  <path
                    d="M15 331h196v60h-75c-8.291 0-15 6.709-15 15s6.709 15 15 15h135v-30h-30v-60h30V166c0-24.814 20.186-45 45-45h135V46c0-8.284-6.716-15-15-15H15C6.716 31 0 37.716 0 46v270c0 8.284 6.716 15 15 15z"
                  />
                </svg>
                Verify
              </button>
              <button v-if="isAdmin && profile.affiliate == document.verifier && pages.isPreview" type="button" :class="{ active: pages.isVerify }" @click="handlePages('isVerify')">
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path
                    d="M497 151H316c-8.401 0-15 6.599-15 15v300c0 8.401 6.599 15 15 15h181c8.401 0 15-6.599 15-15V166c0-8.401-6.599-15-15-15zm-76 270h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15zm0-180h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15z"
                  />
                  <path
                    d="M15 331h196v60h-75c-8.291 0-15 6.709-15 15s6.709 15 15 15h135v-30h-30v-60h30V166c0-24.814 20.186-45 45-45h135V46c0-8.284-6.716-15-15-15H15C6.716 31 0 37.716 0 46v270c0 8.284 6.716 15 15 15z"
                  />
                </svg>
                Preview
              </button>
            </div>
          </div>
          <div class="side-wrapper">
            <div class="side-title">Resource Links</div>
            <div class="side-menu">
              <button type="button" :class="{ active: pages.isHelp }" @click="handlePages('isHelp')">
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path
                    d="M497 151H316c-8.401 0-15 6.599-15 15v300c0 8.401 6.599 15 15 15h181c8.401 0 15-6.599 15-15V166c0-8.401-6.599-15-15-15zm-76 270h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15zm0-180h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15z"
                  />
                  <path
                    d="M15 331h196v60h-75c-8.291 0-15 6.709-15 15s6.709 15 15 15h135v-30h-30v-60h30V166c0-24.814 20.186-45 45-45h135V46c0-8.284-6.716-15-15-15H15C6.716 31 0 37.716 0 46v270c0 8.284 6.716 15 15 15z"
                  />
                </svg>
                Help
              </button>
              <button type="button" :class="{ active: pages.isWallet }" @click="handlePages('isWallet')">
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path
                    d="M497 151H316c-8.401 0-15 6.599-15 15v300c0 8.401 6.599 15 15 15h181c8.401 0 15-6.599 15-15V166c0-8.401-6.599-15-15-15zm-76 270h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15zm0-180h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15z"
                  />
                  <path
                    d="M15 331h196v60h-75c-8.291 0-15 6.709-15 15s6.709 15 15 15h135v-30h-30v-60h30V166c0-24.814 20.186-45 45-45h135V46c0-8.284-6.716-15-15-15H15C6.716 31 0 37.716 0 46v270c0 8.284 6.716 15 15 15z"
                  />
                </svg>
                Wallet
              </button>
              <button type="button" :class="{ active: pages.isUser }" :title="profile.displayName" @click="handlePages('isUser')">
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path
                    d="M497 151H316c-8.401 0-15 6.599-15 15v300c0 8.401 6.599 15 15 15h181c8.401 0 15-6.599 15-15V166c0-8.401-6.599-15-15-15zm-76 270h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15zm0-180h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15z"
                  />
                  <path
                    d="M15 331h196v60h-75c-8.291 0-15 6.709-15 15s6.709 15 15 15h135v-30h-30v-60h30V166c0-24.814 20.186-45 45-45h135V46c0-8.284-6.716-15-15-15H15C6.716 31 0 37.716 0 46v270c0 8.284 6.716 15 15 15z"
                  />
                </svg>
                {{profile.displayName? handleTrim(profile.displayName, 9): 'Profile'}}
                <img class="profile-img" :src="profile.photoURL || avatar" alt="User">
              </button>
              <button type="button" @click="handleLogout">
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path
                    d="M497 151H316c-8.401 0-15 6.599-15 15v300c0 8.401 6.599 15 15 15h181c8.401 0 15-6.599 15-15V166c0-8.401-6.599-15-15-15zm-76 270h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15zm0-180h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15z"
                  />
                  <path
                    d="M15 331h196v60h-75c-8.291 0-15 6.709-15 15s6.709 15 15 15h135v-30h-30v-60h30V166c0-24.814 20.186-45 45-45h135V46c0-8.284-6.716-15-15-15H15C6.716 31 0 37.716 0 46v270c0 8.284 6.716 15 15 15z"
                  />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
        <div class="main-container" :class="{ active: isOpen }">
          <div class="content-wrapper">
            <Service v-if="isTenant && pages.isService"></Service>
            <Request v-if="isUser && pages.isRequest"></Request>
            <Documents v-if="pages.isDocuments" @handlePages="handlePages"></Documents>
            <Account v-if="pages.isAccount"></Account>
            <Admin v-if="isTenant && pages.isAdmin"></Admin>
            <User v-if="pages.isUser"></User>
            <Help v-if="pages.isHelp"></Help>
            <Wallet v-if="pages.isWallet"></Wallet>
            <Preview v-if="pages.isPreview"></Preview>
          </div>
        </div>
      </div>
      <!-- <div class="overlay-app"></div> -->
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Header from "@/components/partials/Header.vue";
import Service from "@/components/dashboard/Service.vue";
import Account from "@/components/dashboard/Account.vue";
import Admin from "@/components/dashboard/Admin.vue";
import Documents from "@/components/dashboard/Documents.vue";
import Request from "@/components/dashboard/Request.vue";
import User from "@/components/dashboard/User.vue";
import Help from "@/components/dashboard/Help.vue";
import Wallet from "@/components/dashboard/Wallet.vue";
import Preview from "@/components/dashboard/Preview.vue";
import { computed, defineComponent, reactive, ref } from 'vue';
import { useStore } from "@/store";
import { Profile, Document } from "@/store/state";
import { handleLogout } from "@/utils";
export default defineComponent({
  name: 'DashboardView',
  components: {
    Header,
    Account,
    Admin,
    Service,
    Documents,
    Request,
    User,
    Help,
    Wallet,
    Preview,
  },
  setup() {
    const store = useStore();
    const avatar = computed(() => {return require(`@/assets/avatar.png`)});
    const profile = computed((): Profile => store.getters.profile);
    const document = computed((): Document => store.getters.document);
    const isTenant = computed((): boolean => store.getters.isTenant);
    const isAdmin = computed((): boolean => store.getters.isAdmin);
    const isUser = computed((): boolean => store.getters.isUser);
    let isOpen = ref(false);
    type Pages = {
      isDocuments: boolean;
      isAccount: boolean;
      isAdmin: boolean;
      isService: boolean;
      isRequest: boolean;
      isCertify: boolean;
      isVerify: boolean;
      isUser: boolean;
      isHelp: boolean;
      isWallet: boolean;
      isPreview: boolean;
    };
    const pages:Pages = reactive({
      isDocuments: true,
      isAccount: false,
      isAdmin: false,
      isService: false,
      isRequest: false,
      isCertify: false,
      isVerify: false,
      isUser: false,
      isHelp: false,
      isWallet: false,
      isPreview: false,
    });

    const handlePages = async (current: string) => {
      if (pages[current as keyof Pages]) return;
      else {
        for (let page in pages) {
          pages[page as keyof Pages] = page === current? true : false;
        }
      }
      if(isOpen.value) return isOpen.value = false;
    };
    const handleArrow = () => {
      isOpen.value = !isOpen.value;
    }
    const handleTrim = (word: string, size: number) => {
      return `${word.slice(0, size)}...`;
    }

    return {
      avatar,
      isOpen,
      profile,
      document,
      isTenant,
      isAdmin,
      isUser,
      pages,
      handlePages,
      handleArrow,
      handleTrim,
      handleLogout,
    }
  }
});
</script>

<style scoped>
/* .dashboard {} */
.app {
  background-color: var(--theme-bg-color);
  max-width: 1250px;
  max-height: 860px;
  /* height: 90vh; */
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
.wrapper {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  position: relative;
}
.left-side {
  flex-basis: 240px;
  border-right: 1px solid var(--border-color);
  padding: 26px;
  overflow: auto;
  flex-shrink: 0;
}
.left-side.active {
  display: block;
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* margin-left: 120px; */
  /* flex-basis: 340px; */
  /* display: none; */
}
@media screen and (max-width: 945px) {
  .left-side {
    display: none;
  }
}
.side-arrow {
  position: absolute;
      top: 0;
    left: 0px;
    z-index: 5;
}
.side-arrow.active {
    position: absolute;
    top: 0;
    left: 240px;
    z-index: 5;
}
@media screen and (min-width: 945px) {
  .side-arrow {
    display: none;
  }
}
.side-arrow button {
  background-color: #2c3e5066;
  border: none;
  color: #fff;
  font-size: xx-large;
  padding-left: 8px;
  padding-right: 8px;
}
/* .side-wrapper {
  padding-left: 1rem;
} */
.side-wrapper + .side-wrapper {
  margin-top: 20px;
}
.side-title {
  color: var(--inactive-color);
  margin-bottom: 14px;
}
.side-menu {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
}
.side-menu a, .side-menu button {
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
.side-menu button {
  background-color: inherit;
  border: none;
}
.side-menu a:hover, 
.side-menu button:hover,
.side-menu button.active {
  background-color: var(--hover-menu-bg);
}
.side-menu svg {
  width: 16px;
  margin-right: 8px;
}
.updates {
  position: relative;
  top: 0;
  right: 0;
  margin-left: auto;
  width: 18px;
  height: 18px;
  font-size: 11px;
}
.main-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.main-container.active {
  display: none;
}
.content-wrapper {
  display: flex;
  flex-direction: column;
  color: var(--theme-color);
  padding: 20px 40px;
  height: 100%;
  overflow: auto;
  background-color: var(--theme-bg-color);
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
@media screen and (max-width: 510px) {
  .content-wrapper {
    padding: 20px;
  }
}
.status-button {
  font-size: 15px;
  margin-top: 0;
  padding: 6px 24px;
}
@media screen and (max-width: 390px) {
  .status-button {
    padding: 6px 14px;
  }
}
.status-button:not(.open):hover {
  color: #fff;
  border-color: #fff;
}
.content-button:not(.open):hover {
  background: #1e59f1;
}
::-webkit-scrollbar {
  width: 6px;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: var(--scrollbar-bg);
  border-radius: 10px;
}
</style>