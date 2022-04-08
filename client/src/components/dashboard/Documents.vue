<template>
  <div class="document">
    <!-- <Header></Header> -->    
    <div class="content-section">
      <div class="content-section-title"><h2>Documents in your vault</h2></div>
      <div class="apps-card">
        <div class="app-card" v-for="document in documents" :key="document.index">
          <span>
            <img src="@/assets/certificate.svg" alt="" srcset="">
            {{document.name}}
          </span>
          <div class="app-card__subtext">
            The transcript validation process typically proceeds in three steps and typically takes three inputs. The first is the transcript to be validated, the second is any intermediate transcript certified by the source organization, and the third is the verification of intermediate transcript by the destination organization.
          </div>
          <div class="app-card-buttons">
            <button class="content-button status-button">Update</button>
            <div class="menu"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import Header from "@/components/partials/Header.vue";
import { computed, defineComponent, onMounted } from "vue";
// import { useStore } from "vuex";
import { useStore } from '@/store'
import { ActionTypes } from '@/store/actions'
import Profile from '@/types/Profile';
import Document from '@/types/Document';
export default defineComponent({
  name: "DocumentView",
  components: {
    // Header
  },
  setup() {
    const store = useStore();
    // const route = useRoute();
    // const router = useRouter();
    onMounted(() => store.dispatch(ActionTypes.GetDocuments))
    const documents = computed((): Document[] => store.getters.documents);
    const profile = computed((): Profile => store.getters.profile);
    const isLoading = computed((): boolean => store.state.isLoading);

    return {
      isLoading,
      profile, 
      documents,
    };
  },
});
</script>

<style scoped>
/* document */
.document {
  /* padding: 1rem; */
  height: 100%;
  min-height: 100vh;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 500ms linear;
}
.content-button {
  background-color: #3a6df0;
  border: none;
  padding: 8px 26px;
  color: #fff;
  border-radius: 20px;
  margin-top: 16px;
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;
}
.content-section {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}
.content-section-title {
  color: var(--content-title-color);
  margin-top: 14px;
  margin-bottom: 28px;
}
.menu {
  width: 5px;
  height: 5px;
  background-color: var(--button-inactive);
  border-radius: 50%;
  box-shadow: 7px 0 0 0 var(--button-inactive), 14px 0 0 0 var(--button-inactive);
  margin: 0 12px;
}
.apps-card {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: calc(100% + 20px);
  gap: 1rem;
}

.app-card {
  display: flex;
  flex-direction: column;
  width: calc(33.3% - 20px);
  font-size: 16px;
  background-color: var(--content-bg);
  border-radius: 14px;
  border: 1px solid var(--theme-bg-color);
  padding: 20px;
  cursor: pointer;
  transition: 0.3s ease;
}
.app-card:hover {
  transform: scale(1.02);
  background-color: var(--theme-bg-color);
}
.app-card svg, .app-card img {
  width: 28px;
  border-radius: 6px;
  margin-right: 12px;
  flex-shrink: 0;
}
/* .app-card + .app-card {
  margin-left: 20px;
} */
.app-card span {
  display: flex;
  align-items: center;
}
.app-card__subtext {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6em;
  margin-top: 20px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 20px;
}
.app-card-buttons {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-top: 16px;
}
@media screen and (max-width: 1110px) {
  .app-card {
    width: calc(50% - 20px);
  }
  .app-card:last-child {
    margin-top: 20px;
    margin-left: 0px;
  }
}
@media screen and (max-width: 565px) {
  .app-card {
    width: calc(100% - 20px);
    margin-top: 20px;
  }
  .app-card + .app-card {
    margin-left: 0;
  }
}
</style>