<template>
  <div class="document">
    <!-- <Header></Header> -->    
    <div class="content-section">
      <div class="content-section-title"><h2>Documents in your vault</h2></div>
      <div  v-if="documents.length" class="apps-card">
        <div class="app-card" v-for="document in documents" :key="document.index">
          <span>
            <img src="@/assets/certificate.svg" alt="certificate" srcset="">
            {{document.name}}
          </span>
          <div class="app-card__subtext">
            The transcript validation process typically proceeds in three steps and typically takes three inputs. The first is the transcript to be validated, the second is any intermediate transcript certified by the source organization, and the third is the verification of intermediate transcript by the destination organization.
          </div>
          <!-- <div v-if="profile.role.toLowerCase() === 'user'">
            <span>Certifier: {{handleAddress(document.certifier)}}</span>
            <span>Verifier: {{handleAddress(document.verifier)}}</span>
          </div> -->
          <div class="app-card-buttons">
            <button v-if="profile.role.toLowerCase() === 'admin'" class="content-button status-button" @click="handleUpdate(document)">Update</button>
            <div v-else style=" text-transform: capitalize;">Status: {{status[document.status]}}</div>
            <!-- <div class="menu"></div> -->
          </div>
        </div>
      </div>
      <div v-else><span>No document exist</span></div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from '@/store'
import { ActionTypes } from '@/store/actions'
import { MutationType } from "@/store/mutations";
import { Profile, Document } from "@/store/state";
import { handleAddress } from "@/utils";
export default defineComponent({
  name: "DocumentView",
  components: {
    // Header
  },
  setup(props, context) {
    const store = useStore();
    enum status { PENDING, CERTIFIED = 1, DECLINED, VERIFIED, REJECTED }
    onMounted(() => store.dispatch(ActionTypes.GetDocuments, {affiliate: profile.value.affiliate}));
    const documents = computed((): Document[] => store.getters.documents);
    const profile = computed((): Profile => store.getters.profile);
    const isLoading = computed((): boolean => store.state.isLoading);
    
    const handleUpdate = async (document: Document) => {
      const res = (profile.value.affiliate == document.verifier)
      ? {address: document.verifier, page: "isVerify"}
      : {address: document.certifier, page: "isCertify"};
      store.commit(MutationType.SetDocument, document);
      store.dispatch(ActionTypes.GetAccount, res.address)
      context.emit("handlePages", res.page);
    }

    return {
      status,
      isLoading,
      profile, 
      documents,
      handleUpdate,
      handleAddress,
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
  /* .app-card:last-child {
    margin-top: 20px;
    margin-left: 0px;
  } */
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