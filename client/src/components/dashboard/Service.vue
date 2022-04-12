<template>
  <div class="service">
    <!-- <Header></Header> -->
    <form class="form--container" @submit.prevent="handleService">
      <div class="form--header">
        <h2 class="form--title">Add Service</h2>
      </div>
      <div v-if="!!validations.length" class="validations">
        <ul style="text-align: left;"><li style="list-style-type: disc;" v-for="(validation, index) in validations" :key="index">{{validation}}</li></ul>
      </div>
      <div class="form--item">
        <label class="form--label" for="name">Service Name: </label>
        <input class="form--input" type="text" name="name" id="name" v-model="item.name" @blur="handleBlur($event)" placeholder="Enter service name" required />
      </div>
      <div class="form--item">
        <label class="form--label" for="cost">Service Cost: </label>
        <input class="form--input" type="number" step=any name="cost" id="cost" v-model="item.cost" @blur="handleBlur($event)" placeholder="Enter service cost" required />
      </div>
      <div class="form--item">
        <button class="form--button" :class="{isValid: isValid}" :disabled="!isValid" type="submit">Send</button>
      </div>
    </form>
    <!-- service list -->
    <div class="content-section">
      <div class="content-section-title">Services</div>
      <div v-if="services.length">
        <ul>
          <li class="services" v-for="service in services" :key="service.index">
            <div class="service--item">
              <img src="@/assets/certificate.svg" :alt="service.name" srcset="">
              <span>{{service.name}}</span>
            </div>
            <span class="status">ETH {{service.cost}}</span>
            <div class="button-wrapper">
              <!-- <button type="button" class="content-button status-button" @click="handleUpdate(service)"> -->
              <button type="button" class="edit" @click="handleUpdate(service)">
                <span>Edit</span>
                <!-- &#9998; #ca8a04 &#128465; -->
              </button>
              <button type="button" class="delete" @click="handleDelete(service.index)">
                <span>Delete</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div v-else><span>No service exist</span></div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import Header from "@/components/partials/HeaderView.vue";
import { computed, defineComponent, onMounted, reactive } from "vue";
import { useStore } from '@/store/index'
import { ActionTypes } from '@/store/actions'
import { useRouter } from 'vue-router';
import { Profile, Service } from "@/store/state";
import { handleBlur } from "@/utils";
export default defineComponent({
  name: "ServiceView",
  components: {
    // Header
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    let validations = reactive<string[]>([]);
    const profile = computed((): Profile => store.getters.profile);
    const services = computed((): Service[] => store.getters.services);
    onMounted(() => store.dispatch(ActionTypes.GetServices, profile.value.affiliate));
    type Item = {
      name: string;
      cost: number;
      index?: number;
      value?: boolean;
    }
    // let updating:Updating = reactive({
    //   value: false,
    //   index: 0
    // });
    let item:Item = reactive({
      name: '',
      cost: 0,
    });
    const isValid = computed(() => {
      return (
        item.name !== "" && 
        item.cost !== 0
      );
    });
    // const handleBlur = (event: Event) => {
    //   const target = event.target as HTMLInputElement;
    //   target.style.borderColor = target.value
    //     ? "rgba(229,231,235, 1)"
    //     : "rgba(255, 0, 0, 1)";
    // };
    const handleUpdate = (service: Service) => {
      item.value = true;
      item.index = service.index;
      item.name = service.name; 
      item.cost = service.cost;
    }
    const handleDelete = (index: number) => {
      store.dispatch(ActionTypes.DeleteService, index);
    }
    const handleValidation = (): boolean => {
      validations = [];
      if (!item.name) validations.push("Name is required!");
      if (!item.cost) validations.push("Cost is required!");
      setTimeout(() => (validations = []), 5000);
      // If No Errors Return True
      if (validations.length) return false;
      return true;
    };
    const handleService = async () => {
      if (!handleValidation()) return;
      try {
        if (item.value) {
          const { name, cost, index } = item;
          store.dispatch(ActionTypes.UpdateService, { name, cost, index });
        } else {
          const { name, cost } = item;
          store.dispatch(ActionTypes.AddService, { name, cost });
        }
        router.push({ name: "Dashboard" });
      } catch (error) {
        console.log(error);
      }
    };

    return {
      validations, 
      profile,
      item,
      services,
      isValid,
      handleBlur, 
      handleService,
      handleValidation,
      handleUpdate,
      handleDelete,
    };
  },
});
</script>

<style scoped>
/* service */
.service {
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
  margin: 5rem auto 0;
  /* padding: 0 1rem; */  
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
.content-section ul {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  background-color: var(--content-bg);
  padding-left: 0;
  margin: 0;
  border-radius: 14px;
  border: 1px solid var(--theme-bg-color);
  cursor: pointer;
}
.content-section ul li {
  list-style: none;
  padding: 10px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  transition: 0.3s;
}
.content-section ul li:hover {
  background-color: var(--theme-bg-color);
}
.content-section ul li:hover:first-child {
  border-radius: 13px 13px 0 0;
}
.content-section ul li:hover:last-child {
  border-radius: 0 0 13px 13px;
}
.content-section ul li + li {
  border-top: 1px solid var(--border-color);
}
.content-section ul svg,
.content-section ul img {
  width: 28px;
  border-radius: 6px;
  margin-right: 16px;
  flex-shrink: 0;
}
.service--item {
  display: flex;
  align-items: center;
  width: 150px;
}
@media screen and (max-width: 480px) {
  .service--item {
    width: 120px;
  }
}
.status {
  /* margin-left: auto; */
  width: 140px;
  font-size: 15px;
  position: relative;
}
@media screen and (max-width: 700px) {
  .status {
    display: none;
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
.status-button {
  background: none;
  background: #1e59f1;
  color: #fff;
  border-radius: 5px;
  border: 1px solid var(--button-inactive);
  cursor: pointer;
}
.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 187px;
  /* margin-left: auto; */
}
.button-wrapper button {
  /* width: 2.5em; */
  height: auto;
  margin-left: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
button span {
  /* width: 2.5em; */
  height: auto;
  margin-left: 10px;
  /* font-size: 2rem; */
}
button.edit span {
  color: #1e59f1;
}
button.delete span {
  color: #ff0000;
}

@media screen and (max-width: 415px) {
  .services .menu {
    display: none;
  }
}
.content-section .close {
  margin-right: 0;
  width: 24px;
}
.content-button-wrapper {
  margin-top: auto;
  margin-left: auto;
}
.content-button-wrapper .open {
  margin-right: 8px;
}
@media screen and (max-width: 480px) {
  .button-wrapper {
    width: auto;
  }
}
/* mini */
@media only screen and (min-width: 481px) {
  .form--container {
    width: 410px;
    margin: 0 auto;
    margin: 5rem auto 0;
  }
}
/* max */
@media only screen and (min-width: 981px) {
}
</style>