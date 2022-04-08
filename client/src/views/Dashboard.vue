<template>
  <div class="dashboard">
    <Header></Header>
    <div class="app">
      <div class="wrapper">
        <div class="left-side">
          <div class="side-wrapper">
            <div class="side-title">Categories</div>
            <div class="side-menu">
              <button type="button" :class="{ active: pages.isDocuments }" @click="handlePages('isDocuments')">
                Documents
              </button>
              <button type="button" :class="{ active: pages.isService }" @click="handlePages('isService')">
                Services
              </button>
              <button type="button" :class="{ active: pages.isAccount }" @click="handlePages('isAccount')">
                Account
              </button>
              <button type="button" :class="{ active: pages.isRequest }" @click="handlePages('isRequest')">
                Request
              </button>
              <button type="button" :class="{ active: pages.isCertify }" @click="handlePages('isCertify')">
                Certify
              </button>
              <button type="button" :class="{ active: pages.isVerify }" @click="handlePages('isVerify')">
                Verify
              </button>
            </div>
          </div>
          <div class="side-wrapper">
            <div class="side-title">Resource Links</div>
            <div class="side-menu">
              <button type="button" :class="{ active: pages.isHelp }" @click="handlePages('isHelp')">
                Help
              </button>
              <button type="button" :class="{ active: pages.isUser }" @click="handlePages('isUser')">
                Profile
              </button>
              <button type="button" >
                Logout
              </button>
            </div>
          </div>
        </div>
        <div class="main-container">
          <div class="content-wrapper">
            <!-- <Service v-if="isTenant && pages.isService"></Service> -->
            <!-- <Request v-if="isUser"></Request> -->
            <!-- <Certify v-if="isAdmin && profile.affiliate == document.certifier"></Certify> -->
            <!-- <Verify v-if="isAdmin && profile.affiliate == document.verifier"></Verify> -->
            <Service v-if="pages.isService"></Service>
            <Request v-if="pages.isRequest"></Request>
            <Certify v-if="pages.isCertify"></Certify>
            <Verify v-if="pages.isVerify"></Verify>
            <Documents v-if="pages.isDocuments"></Documents>
            <Account v-if="pages.isAccount"></Account>
            <User v-if="pages.isUser"></User>
            <Help v-if="pages.isHelp"></Help>
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
import Documents from "@/components/dashboard/Documents.vue";
import Request from "@/components/dashboard/Request.vue";
import Certify from "@/components/dashboard/Certify.vue";
import Verify from "@/components/dashboard/Verify.vue";
import User from "@/components/dashboard/User.vue";
import Help from "@/components/dashboard/Help.vue";
import { computed, defineComponent, reactive } from 'vue';
import { useStore } from "@/store";
import { Profile, Document } from "@/store/state";

export default defineComponent({
  name: 'DashboardView',
  components: {
    Header,
    Account,
    Service,
    Documents,
    Request,
    Certify,
    Verify,
    User,
    Help
  },
  setup() {
    const store = useStore();
    const profile = computed((): Profile => store.getters.profile);
    const document = computed((): Document => store.getters.document);
    const isTenant = computed((): boolean => store.getters.isTenant);
    const isAdmin = computed((): boolean => store.getters.isAdmin);
    const isUser = computed((): boolean => store.getters.isUser);
    type Pages = {
      isDocuments: boolean,
      isAccount: boolean,
      isService: boolean,
      isRequest: boolean,
      isCertify: boolean,
      isVerify: boolean,
      isUser: boolean,
      isHelp: boolean,
    };
    const pages:Pages = reactive({
      isDocuments: true,
      isAccount: false,
      isService: false,
      isRequest: false,
      isCertify: false,
      isVerify: false,
      isUser: false,
      isHelp: false,
    });

    const handlePages = async (current: string) => {
      console.log(current);
      if (pages[current as keyof Pages]) return;
      else {
        for (let page in pages) {
          pages[page as keyof Pages] = page === current? true : false;
        }
      }
    };

    return { 
      profile,
      document,
      isTenant,
      isAdmin,
      isUser,
      pages,
      handlePages
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
}
.left-side {
  flex-basis: 240px;
  border-right: 1px solid var(--border-color);
  padding: 26px;
  overflow: auto;
  flex-shrink: 0;
}
@media screen and (max-width: 945px) {
  .left-side {
    display: none;
  }
}
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
.content-wrapper {
  display: flex;
  flex-direction: column;
  color: var(--theme-color);
  padding: 20px 40px;
  height: 100%;
  overflow: auto;
  background-color: var(--theme-bg-color);
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