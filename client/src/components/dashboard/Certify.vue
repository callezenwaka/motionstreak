<template>
  <div class="certify">
    <!-- <Header></Header> -->
    <form class="form--container" @submit.prevent="handleCertify">
      <div class="form--header">
        <h2 class="form--title">Certify Document</h2>
      </div>
      <div v-if="!!validations.length" class="validations">
        <ul style="text-align: left;"><li style="list-style-type: disc;" v-for="(validation, index) in validations" :key="index">{{validation}}</li></ul>
      </div>
      <div class="form--item">
        <label class="form--label" for="address">Destination Address: </label>
        <input class="form--input" type="text" name="address" id="address" v-model="certify.verifier" @blur="handleBlur($event)" readonly required />
      </div>
      <div class="form--item">
        <label class="form--label" for="name">Document Name: </label>
        <input class="form--input" type="text" name="name" id="name" v-model="certify.name" @blur="handleBlur($event)" readonly required />
      </div>
      <div class="form--item">
        <label class="form--label" for="fee">Processing Fee: </label>
        <input class="form--input" type="text" name="fee" id="fee" v-model="certify.fee" @blur="handleBlur($event)" readonly required />
      </div>
      <div class="form--item">
        <label for="status" class="form--label">Document Status: </label>
        <select class="form--input" name="status" id="status" v-model="certify.status">
          <option value="" selected disabled>Select Status</option>
          <option :value="status.CERTIFIED">CERTIFIED</option>
          <option :value="status.REJECTED">REJECTED</option>
        </select>
      </div>
      <div class="form--item">
        <label class="form--label" for="file">Document Image: </label>
        <input class="form--input" type="file" name="file" id="file" @change="handleImage" @blur="handleBlur($event)" required />
      </div>
      <div class="form--item">
        <button class="form--button" :class="{isValid: isValid}" :disabled="!isValid" type="submit">Send</button>
      </div>
    </form>
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
import Document from '@/types/Document';
export default defineComponent({
  name: "CertifyView",
  components: {
    // Header
  },
  setup() {
    const store = useStore();
    // const route = useRoute();
    const router = useRouter();
    enum status { CERTIFIED = 1, VERIFIED, REJECTED }
    let validations = reactive<string[]>([]);
    const document = computed((): Document => store.getters.document);
    const isLoading = computed((): boolean => store.state.isLoading)
    const updateDocument = (document: Document) => store.dispatch(ActionTypes.UpdateDocument, document);
    const addDocumentImage = (formData: FormData) => store.dispatch(ActionTypes.AddDocumentImage, formData);
    let certify = reactive({
      requester: document.value.requester,
      verifier: document.value.verifier,
      certifier: document.value.certifier,
      name: document.value.name,
      imageURL: '',
      fee: document.value.fee,
      index: document.value.index,
      status: 0,
    });
    const isValid = computed(() => {
      return (
        certify.requester !== "" && 
        certify.verifier !== "" && 
        certify.certifier !== "" && 
        certify.name !== "" && 
        certify.imageURL !== "" && 
        certify.fee !== 0 &&
        certify.status !== 0
      );
    });
    const handleBlur = (event: Event) => {
      const target = event.target as HTMLInputElement;
      target.style.borderColor = target.value
        ? "rgba(229,231,235, 1)"
        : "rgba(255, 0, 0, 1)";
    };
    const handleValidation = (): boolean => {
      validations = [];
      if (!certify.requester) {
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
        const data = await addDocumentImage(formData);
        certify.imageURL = typeof data === "string"? data : '';
      } catch (error) {
        console.log(error);
      }
    }
    const handleCertify = async () => {
      if (!handleValidation()) return;
      try {
        await updateDocument({...certify});
        router.push({ name: "Home" });
      } catch (error) {
        console.log(error);
      }
    };

    return {
      isLoading,
      validations, 
      document,
      certify,
      isValid,
      status,
      handleBlur,
      handleValidation, 
      handleImage, 
      handleCertify 
    };
  },
});
</script>

<style scoped>
/* certify */
.certify {
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