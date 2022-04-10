<template>
  <div class="request">
    <!-- <Header></Header> -->
    <form class="form--container" @submit.prevent="handleDocument">
      <div class="form--header">
        <h2 class="form--title">Request Document</h2>
      </div>
      <div v-if="!!validations.length" class="validations">
        <ul style="text-align: left;"><li style="list-style-type: disc;" v-for="(validation, index) in validations" :key="index">{{validation}}</li></ul>
      </div>
      <div class="form--item">
        <label class="form--label" for="requester">User Address: </label>
        <input class="form--input" type="text" name="requester" id="requester" v-model="request.requester" readonly required />
      </div>
      <div class="form--item">
        <label class="form--label" for="verifier">Destination Address: </label>
        <input class="form--input" type="text" name="verifier" id="verifier" v-model="request.verifier" @blur="handleBlur($event)" @input="handleDestination($event)" placeholder="Enter destination address" required />
      </div>
      <div class="form--item">
        <label class="form--label" for="destination">Destination Name: </label>
        <input class="form--input" type="text" name="destination" id="destination" v-model="account.displayName" @blur="handleBlur($event)" @input="handleDestination($event)" placeholder="Enter destination address" required />
      </div>
      <div class="form--item">
        <label class="form--label" for="certifier">Source Address: </label>
        <input class="form--input" type="text" name="certifier" id="certifier" v-model="request.certifier" @blur="handleBlur($event)" @input="handleSource($event)" placeholder="Enter source address" required />
      </div>
      <div class="form--item">
        <label for="document" class="form--label">Document Name: </label><br>
        <select name="document" id="document" class="form--input" @change="handleFee($event)">
          <option value="" selected disabled>Select Document</option>
          <option :value="{name: service.name, cost: service.cost}" v-for="(service) in services" :key="service.index">{{ service.name }}</option>
        </select>
      </div>
      <div class="form--item">
        <label class="form--label" for="fee">Processing Fee: </label>
        <input class="form--input" type="text" name="fee" id="fee" v-model="request.fee" @blur="handleBlur($event)" placeholder="Enter processing fee" readonly required />
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
import { Account, Profile, Service } from "@/store/state";
export default defineComponent({
  name: "RequestView",
  components: {
    // Header
  },
  setup() {
    const store = useStore();
    // const route = useRoute();
    const router = useRouter();
    let validations = reactive<string[]>([]);
    const profile = computed((): Profile => store.getters.profile);
    const account = computed((): Account => store.state.account)
    const services = computed((): Service[] => store.getters.services);
    let request = reactive({
      requester: profile.value.address,
      verifier: '',
      certifier: '',
      name: '',
      imageURL: '',
      fee: 0,
    });
    const isValid = computed(() => {
      return (
        request.requester !== "" &&
        // request.requester == profile.value.address &&
        request.verifier !== request.certifier &&
        request.verifier !== "" && 
        request.certifier !== "" && 
        request.name !== "" &&
        request.fee !== 0
      );
    });
    const handleFee = async (event: Event) => {
      const target = event.target as HTMLSelectElement;
      let item = services.value[target.selectedIndex-1]
      request.name = item.name;
      request.fee = item.cost;
    }
    const handleBlur = (event: Event) => {
      const target = event.target as HTMLInputElement;
      target.style.borderColor = target.value
        ? "rgba(229,231,235, 1)"
        : "rgba(255, 0, 0, 1)";
    };
    const handleDestination = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      store.dispatch(ActionTypes.GetAccount, target.value);
    };
    const handleSource = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      store.dispatch(ActionTypes.GetServices, target.value);
    };
    const handleValidation = (): boolean => {
      validations = [];
      if (!request.requester) {
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
        // request.imageURL = await addDocumentImage(formData);
      } catch (error) {
        console.log(error);
      }
    }
    const handleDocument = async () => {
      if (!handleValidation()) return;
      try {
        await store.dispatch(ActionTypes.AddDocument, {...request});
        router.push({ name: "Home" });
      } catch (error) {
        console.log(error);
      }
    };

    return {
      account,
      profile,
      services,
      validations, 
      request, 
      isValid,
      handleFee,
      handleBlur,
      handleDestination,
      handleSource,
      handleValidation, 
      handleImage, 
      handleDocument 
    };
  },
});
</script>

<style scoped>
/* request */
.request {
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