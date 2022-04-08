<template>
  <div class="document">
    <!-- <Header></Header> -->
    <form class="form--container" @submit.prevent="handleDocument">
      <div class="form--header">
        <h2 class="form--title">Submit Document</h2>
      </div>
      <div v-if="!!validations.length" class="validations">
        <ul style="text-align: left;"><li style="list-style-type: disc;" v-for="(validation, index) in validations" :key="index">{{validation}}</li></ul>
      </div>
      <div class="form--item">
        <label class="form--label" for="requester">User Address: </label>
        <input class="form--input" type="text" name="requester" id="requester" v-model="document.requester" @blur="handleBlur($event)" readonly required />
      </div>
      <div class="form--item">
        <label class="form--label" for="verifier">Destination Address: </label>
        <input class="form--input" type="text" name="verifier" id="verifier" v-model="document.verifier" @blur="handleBlur($event)" placeholder="Enter destination address" required />
      </div>
      <div class="form--item">
        <label class="form--label" for="certifier">Source Address: </label>
        <input class="form--input" type="text" name="certifier" id="certifier" v-model="document.certifier" @blur="handleBlur($event)" @input="handleServices($event)" placeholder="Enter source address" required />
      </div>
      <!-- <div class="form--item">
        <label class="form--label" for="name">Document Name: </label>
        <input class="form--input" type="text" name="name" id="name" v-model="document.name" @blur="handleBlur($event)" placeholder="Enter document name" required />
      </div> -->
      <div class="form--item">
        <label for="fee" class="form--label">Document Name: </label><br>
        <select name="fee" id="fee" ref="fee" class="form--input" @change="handleFee($event)">
          <option value="" selected disabled>Select Document</option>
          <option :value="{name: service.name, cost: service.cost}" v-for="(service) in services" :key="service.index">{{ service.name }}</option>
        </select>
      </div>
      <div class="form--item">
        <label class="form--label" for="fee">Processing Fee: </label>
        <input class="form--input" type="text" name="fee" id="fee" v-model="document.fee" @blur="handleBlur($event)" placeholder="Enter processing fee" readonly required />
      </div>
      <!-- <div class="form--item">
        <label class="form--label" for="description">Document Description: </label>
        <input class="form--input" type="text" name="description" id="description" v-model="document.description" @blur="handleBlur($event)" placeholder="Enter description" required />
      </div>
      <div class="form--item">
        <label class="form--label" for="file">Document Image: </label>
        <input class="form--input" type="file" name="file" id="file" @change="handleImage" @blur="handleBlur($event)" required />
      </div> -->
      <div class="form--item">
        <button class="form--button" :class="{isValid: isValid}" :disabled="!isValid" type="submit">Send</button>
      </div>
    </form>
    
    <div class="content-section">
      <div class="content-section-title">Documents in your vault</div>
      <div class="apps-card">
        <div class="app-card">
          <span>
            <svg viewBox="0 0 512 512" style="border: 1px solid #a059a9">
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M480 0H32C14.368 0 0 14.368 0 32v448c0 17.664 14.368 32 32 32h448c17.664 0 32-14.336 32-32V32c0-17.632-14.336-32-32-32z"
                fill="#210027"
                data-original="#7b1fa2"
              />
              <g xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M192 64h-80c-8.832 0-16 7.168-16 16v352c0 8.832 7.168 16 16 16s16-7.168 16-16V256h64c52.928 0 96-43.072 96-96s-43.072-96-96-96zm0 160h-64V96h64c35.296 0 64 28.704 64 64s-28.704 64-64 64zM400 256h-32c-18.08 0-34.592 6.24-48 16.384V272c0-8.864-7.168-16-16-16s-16 7.136-16 16v160c0 8.832 7.168 16 16 16s16-7.168 16-16v-96c0-26.464 21.536-48 48-48h32c8.832 0 16-7.168 16-16s-7.168-16-16-16z"
                  fill="#f6e7fa"
                  data-original="#e1bee7"
                />
              </g>
            </svg>
            Premiere Pro
          </span>
          <div class="app-card__subtext">
            The transcript validation process typically proceeds in three steps and typically takes three inputs. The first is the transcript to be validated, the second is any intermediate transcript certified by the source organization, and the third is the verification of intermediate transcript by the destination organization.
          </div>
          <div class="app-card-buttons">
            <button class="content-button status-button">Update</button>
            <div class="menu"></div>
          </div>
        </div>
        <div class="app-card">
          <span>
            <svg viewBox="0 0 52 52" style="border: 1px solid #c1316d">
              <g xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                  fill="#2f0015"
                  data-original="#6f2b41"
                />
                <path
                  d="M18.08 39H15.2V13.72l-2.64-.08V11h5.52v28zM27.68 19.4c1.173-.507 2.593-.761 4.26-.761s3.073.374 4.22 1.12V11h2.88v28c-2.293.32-4.414.48-6.36.48-1.947 0-3.707-.4-5.28-1.2-2.08-1.066-3.12-2.92-3.12-5.561v-7.56c0-2.799 1.133-4.719 3.4-5.759zm8.48 3.12c-1.387-.746-2.907-1.119-4.56-1.119-1.574 0-2.714.406-3.42 1.22-.707.813-1.06 1.847-1.06 3.1v7.12c0 1.227.44 2.188 1.32 2.88.96.719 2.146 1.079 3.56 1.079 1.413 0 2.8-.106 4.16-.319V22.52z"
                  fill="#e1c1cf"
                  data-original="#ff70bd"
                />
              </g>
            </svg>
            InDesign
          </span>
          <div class="app-card__subtext">
            Design and publish great projects & mockups
          </div>
          <div class="app-card-buttons">
            <button class="content-button status-button">Update</button>
            <div class="menu"></div>
          </div>
        </div>
        <div class="app-card">
          <span>
            <svg viewBox="0 0 52 52" style="border: 1px solid #c75deb">
              <g xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                  fill="#3a3375"
                  data-original="#3a3375"
                />
                <path
                  d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z"
                  fill="#e4d1eb"
                  data-original="#e7adfb"
                />
              </g>
            </svg>
            After Effects
          </span>
          <div class="app-card__subtext">
            Industry Standart motion graphics & visual effects
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
import { computed, defineComponent, reactive } from "vue";
// import { useStore } from "vuex";
import { useStore } from '@/store'
import { ActionTypes } from '@/store/actions'
import { useRouter } from 'vue-router';
import Service from '@/types/Service';
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
    const router = useRouter();
    let validations = reactive<string[]>([]);
    const profile = computed((): Profile => store.getters.profile);
    const isLoading = computed((): boolean => store.state.isLoading)
    const services = computed((): Service[] => store.getters.services);
    // onMounted(() => store.dispatch(ActionTypes.GetTaskItems))
    const getServices = (address: string) => store.dispatch(ActionTypes.GetServices, address);
    const addDocument = (document: Document) => store.dispatch(ActionTypes.AddDocument, document);
    // const addDocumentImage = (file: FormData) => store.dispatch('addDocumentImage', file);
    let document = reactive({
      requester: profile.value.address,
      verifier: '',
      certifier: '',
      name: '',
      // description: "",
      imageURL: '',
      fee: 0,
    });
    const isValid = computed(() => {
      return (
        document.requester !== "" && 
        document.verifier !== "" && 
        document.certifier !== "" && 
        document.name !== "" && 
        // document.description !== "" && 
        // document.imageURL !== "" && 
        document.fee !== 0
      );
    });
    const handleFee = async (event: Event) => {
      const target = event.target as HTMLSelectElement;
      let item = services.value[target.selectedIndex-1]
      document.name = item.name;
      document.fee = item.cost;
    }
    const handleBlur = (event: Event) => {
      const target = event.target as HTMLInputElement;
      target.style.borderColor = target.value
        ? "rgba(229,231,235, 1)"
        : "rgba(255, 0, 0, 1)";
    };
    const handleServices = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      // console.log(target.value);
      getServices(target.value);
    };
    const handleValidation = (): boolean => {
      validations = [];
      if (!document.requester) {
        validations.push("Your address is required!");
      }
      setTimeout(() => (validations = []), 5000);
      // If No Errors Return True
      if (validations.length) return false;
      return true;
    };
    const handleImage = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = (target.files as FileList)[0];
      let formData = new FormData();
      formData.append("file", file);
      try {
        // document.imageURL = await addDocumentImage(formData);
      } catch (error) {
        console.log(error);
      }
    }
    const handleDocument = async () => {
      if (!handleValidation()) return;
      try {
        await addDocument({...document});
        router.push({ name: "Home" });
      } catch (error) {
        console.log(error);
      }
    };

    return {
      isLoading,
      profile,
      services,
      validations, 
      document, 
      isValid,
      handleFee,
      handleBlur, 
      handleServices,
      handleValidation, 
      handleImage, 
      handleDocument 
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
.form--container {
  width: 100%;
  margin: 50px auto;
  padding: 0 .5rem;
}
.form--title {
  text-align: center;
  margin: 2rem 0;
}
.validations {
  display: flex;
  justify-content: center;
  color: #ff0000;
  padding: 0.5rem;
  border-radius: 5px;
}
.form--item {
  display: flex;
  flex-direction: column;
  border: none;
  margin: 0px 0px 20px;
  padding: 0px;
}
.form--label {
  font-size: 14px;
  color: rgb(61, 79, 88);
  position: relative;
  height: 16px;
  text-align: left;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 0.02em;
}
.form--input {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(229, 231, 235, 1);
  border-radius: 4px;
  height: 52px;
  font-size: 16px;
  line-height: 24px;
  margin-top: 5px;
  padding-left: 12px;
  padding-right: 12px;
  transition: border-color 150ms ease-in-out 0s;
}
.form--button {
  position: relative;
  background-color: transparent;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  -webkit-box-align: stretch;
  height: 45px;
  width: 100%;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 5px;
  border-radius: 4px;
  border-color: transparent;
  text-decoration: none;
  cursor: not-allowed;
  z-index: 0;
  transition: all 150ms ease-in-out 0s;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
}
.form--button.isValid {
  cursor: pointer;
  background-color: #0d6efd;
}
.form--button.isValid:hover {
  opacity: 0.5;
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
  margin-bottom: 14px;
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
.app-card svg {
  width: 28px;
  border-radius: 6px;
  margin-right: 12px;
  flex-shrink: 0;
}
.app-card + .app-card {
  margin-left: 20px;
}
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
/* mini */
@media only screen and (min-width: 481px) {
  .form--container {
    width: 410px;
    margin: 0 auto;
  }
}
/* max */
@media only screen and (min-width: 981px) {
}
</style>