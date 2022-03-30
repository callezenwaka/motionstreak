<template>
  <div class="document">
    <form class="form--container" @submit.prevent="handleDocument">
      <div class="form--header">
        <h2 class="form--title">Submit Document</h2>
      </div>
      fees - {{fees}}
      <div v-if="!!validations.length" class="validations">
        <ul style="text-align: left;"><li style="list-style-type: disc;" v-for="(validation, index) in validations" :key="index">{{validation}}</li></ul>
      </div>
      <div class="form--item">
        <label class="form--label" for="requester">User Address: </label>
        <input class="form--input" type="text" name="requester" id="requester" v-model="document.requester" @blur="handleBlur($event)" placeholder="Enter your address" required />
      </div>
      <div class="form--item">
        <label class="form--label" for="verifier">Destination School Address: </label>
        <input class="form--input" type="text" name="verifier" id="verifier" v-model="document.verifier" @blur="handleBlur($event)" placeholder="Enter destination school address" required />
      </div>
      <div class="form--item">
        <label class="form--label" for="certifier">School Address: </label>
        <input class="form--input" type="text" name="certifier" id="certifier" v-model="document.certifier" @blur="handleBlur($event)"  @input="handleCertifier($event)" placeholder="Enter source school address" required />
      </div>
      <div class="form--item">
        <label class="form--label" for="name">Document Name: </label>
        <input class="form--input" type="text" name="name" id="name" v-model="document.name" @blur="handleBlur($event)" placeholder="Enter document name" required />
      </div>
      <div class="form--item">
        <label for="fee" class="form--label">Document Name: </label><br>
        <select name="fee" id="fee" ref="fee" class="form--input" @change="handleFee($event)">
          <option value="" selected disabled>Select Document</option>
          <option v-for="(fee) in fees" :value='fee' :key="fee.doc">{{ fee.doc }}</option>
        </select>
      </div>
      <div class="form--item">
        <label class="form--label" for="fee">Processing Fee: </label>
        <input class="form--input" type="text" name="fee" id="fee" v-model="document.fee" @blur="handleBlur($event)" placeholder="Enter processing fee" required />
      </div>
      <div class="form--item">
        <label class="form--label" for="description">Document Description: </label>
        <input class="form--input" type="text" name="description" id="description" v-model="document.description" @blur="handleBlur($event)" placeholder="Enter description" required />
      </div>
      <div class="form--item">
        <label class="form--label" for="file">Document Image: </label>
        <input class="form--input" type="file" name="file" id="file" @change="handleImage" @blur="handleBlur($event)" required />
      </div>
      <div class="form--item">
        <button class="form--button" :class="{isValid: isValid}" :disabled="!isValid" type="submit">Document</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { computed, defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import Certifier from '@/types/Certifier';
import Fee from '@/types/Fee';
import Document from '@/types/Document';
export default defineComponent({
  name: "Document",
  components: {
  },
  setup() {
    const store = useStore();
    // const route = useRoute();
    const router = useRouter();
    // let validations = reactive<string[]>([]);
    let validations = reactive<string[]>([]);
    const certifier = computed((): Certifier => store.getters.certifier);
    const fees = computed((): Fee => store.getters.certifier.fees);
    const getCertifier = (address: string) => store.dispatch('getCertifier', address);
    const addDocument = (document: Document) => store.dispatch('addDocument', document);
    const addDocumentImage = (file: FormData) => store.dispatch('addDocumentImage', file);
    let document = reactive({
      requester: '',
      verifier: '',
      certifier: '',
      name: '',
      description: "",
      image: '',
      fee: '',
    });
    const isValid = computed(() => {
      return (
        document.requester !== "" && 
        document.verifier !== "" && 
        document.certifier !== "" && 
        document.name !== "" && 
        document.description !== "" && 
        document.image !== "" && 
        document.fee !== ""
      );
    });
    const handleFee = async (event: Event) => {
      console.log(event);
      // console.log(fee);
    }
    const handleBlur = (event: Event) => {
      const target = event.target as HTMLInputElement;
      target.style.borderColor = target.value
        ? "rgba(229,231,235, 1)"
        : "rgba(255, 0, 0, 1)";
    };
    const handleCertifier = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      // console.log(target.value);
      await getCertifier(target.value);

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
        document.image = await addDocumentImage(formData);
      } catch (error) {
        console.log(error);
      }
    }
    const handleDocument = async () => {
      if (!handleValidation()) return;
      try {
        await addDocument(document);
        router.push({ name: "Home" });
      } catch (error) {
        console.log(error);
      }
    };

    return {
      certifier,
      fees,
      validations, 
      document, 
      isValid,
      handleFee,
      handleBlur, 
      handleCertifier,
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
  padding: 1rem;
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