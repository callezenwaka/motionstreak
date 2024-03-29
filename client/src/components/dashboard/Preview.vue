<template>
  <div class="preview">
    <form class="form--container" @submit.prevent="handleUpdate">
      <div class="form--header">
        <h2 class="form--title">Preview Document</h2>
      </div>
      <div v-if="!!validations.length" class="validations">
        <ul style="text-align: left;"><li style="list-style-type: disc;" v-for="(validation, index) in validations" :key="index">{{validation}}</li></ul>
      </div>
      <div class="form--item">
        <label class="form--label" for="name">Destination Name: </label>
        <input class="form--input" type="text" name="name" id="name" v-model="account.displayName" readonly required />
      </div>
      <div class="form--item">
        <label class="form--label" for="address">Destination Address: </label>
        <input class="form--input" type="text" name="address" id="address" v-model="item.verifier" readonly required />
      </div>
      <div class="form--item">
        <label class="form--label" for="name">Document Name: </label>
        <input class="form--input" type="text" name="name" id="name" v-model="item.name" readonly required />
      </div>
      <div class="form--item">
        <label class="form--label" for="fee">Processing Fee: </label>
        <input class="form--input" type="text" name="fee" id="fee" v-model="item.fee" readonly required />
      </div>
      <div v-if="Status[item.status] === 'CERTIFIED'" class="form--item">
        <label for="status" class="form--label">Document Status: </label>
        <select class="form--input" name="status" id="status" v-model="item.status">
          <option :value=0 disabled>Select Status</option>
          <option :value="Status.VERIFIED">VERIFIED</option>
          <option :value="Status.REJECTED">REJECTED</option>
        </select>
      </div>
      <div v-if="Status[item.status] === 'PENDING'" class="form--item">
        <label for="status" class="form--label">Document Status: </label>
        <select class="form--input" name="status" id="status" v-model="item.status">
          <option :value=0 disabled>Select Status</option>
          <option :value="Status.CERTIFIED">CERTIFIED</option>
          <option :value="Status.DECLINED">DECLINED</option>
        </select>
      </div>
      <div v-if="Status[item.status] === 'PENDING'" class="form--item">
        <label class="form--label" for="file">Document Image: </label>
        <input class="form--file" type="file" name="file" id="file" @change="handleImage" @blur="handleBlur($event)" required />
      </div>
      <div class="form--item" v-if="item.imageURL">
        <img :src="item.imageURL" :alt="item.name">
      </div>
      <div class="form--item">
        <button class="form--button" :class="{isValid: isValid}" :disabled="!isValid" type="submit">Send</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { computed, defineComponent, reactive } from "vue";
import { useStore } from '@/store'
import { ActionTypes } from '@/store/actions'
import { useRouter } from 'vue-router';
import { Account, Document } from "@/store/state";
import { handleBlur } from "@/utils";
export default defineComponent({
  name: "PreviewView",
  components: {
    // Header
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    enum Status { CERTIFIED = 1, DECLINED, VERIFIED, REJECTED }
    let validations = reactive<string[]>([]);
    const document = computed((): Document => store.getters.document);
    const account = computed((): Account => store.getters.account);
    const addDocumentImage = (formData: FormData) => store.dispatch(ActionTypes.AddDocumentImage, formData);
    const updateDocument = (document: Document) => store.dispatch(ActionTypes.UpdateDocument, document);
    const item = reactive({
      requester: document.value.requester,
      verifier: document.value.verifier,
      certifier: document.value.certifier,
      name: document.value.name,
      imageURL: document.value.imageURL,
      fee: document.value.fee,
      index: document.value.index,
      status: document.value.status,
    });
    const isValid = computed(() => {
      return (
        item.requester !== "" && 
        item.verifier !== "" && 
        item.certifier !== "" && 
        item.name !== "" && 
        item.imageURL !== "" && 
        item.fee !== 0 &&
        item.status !== 0
      );
    });
    const handleValidation = (): boolean => {
      validations = [];
      if (!item.requester) {
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
        item.imageURL = typeof data === "string"? data : '';
      } catch (error) {
        console.log(error);
      }
    }
    const handleUpdate = async () => {
      if (!handleValidation()) return;
      try {
        await updateDocument({...item});
        router.push({ name: "Home" });
      } catch (error) {
        console.log(error);
      }
    };

    return {
      validations,
      account,
      document,
      item,
      isValid,
      Status,
      handleBlur,
      handleValidation, 
      handleImage, 
      handleUpdate,
    };
  },
});
</script>

<style scoped>
/* preview */
.preview {
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
.form--file {
  margin-top: 20px;
}
img {
  max-width: 50%;
  min-width: 50%;
  height: auto;
  margin: 0 auto;
  transition: transform ease-in-out 0.3s;
}
img:hover {
  min-width: 100%;
  transform: scale(1.2); 
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