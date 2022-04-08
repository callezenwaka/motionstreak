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
        <input class="form--input" type="text" name="name" id="name" v-model="service.name" @blur="handleBlur($event)" placeholder="Enter service name" required />
      </div>
      <div class="form--item">
        <label class="form--label" for="cost">Service Cost: </label>
        <input class="form--input" type="number" step=any name="cost" id="cost" v-model="service.cost" @blur="handleBlur($event)" placeholder="Enter service cost" required />
      </div>
      <div class="form--item">
        <button class="form--button" :class="{isValid: isValid}" :disabled="!isValid" type="submit">Send</button>
      </div>
    </form>
    <!--  -->
    <div class="content-section">
      <div class="content-section-title">Services</div>
      <ul>
        <li class="adobe-product">
          <div class="products">
            <svg viewBox="0 0 52 52" style="border: 1px solid #3291b8">
              <g xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                  fill="#061e26"
                  data-original="#393687"
                />
                <path
                  d="M12.16 39H9.28V11h9.64c2.613 0 4.553.813 5.82 2.44 1.266 1.626 1.9 3.76 1.9 6.399 0 .934-.027 1.74-.08 2.42-.054.681-.22 1.534-.5 2.561-.28 1.026-.66 1.866-1.14 2.52-.48.654-1.213 1.227-2.2 1.72-.987.494-2.16.74-3.52.74h-7.04V39zm0-12h6.68c.96 0 1.773-.187 2.44-.56.666-.374 1.153-.773 1.46-1.2.306-.427.546-1.04.72-1.84.173-.801.267-1.4.28-1.801.013-.399.02-.973.02-1.72 0-4.053-1.694-6.08-5.08-6.08h-6.52V27zM29.48 33.92l2.8-.12c.106.987.6 1.754 1.48 2.3.88.547 1.893.82 3.04.82s2.14-.26 2.98-.78c.84-.52 1.26-1.266 1.26-2.239s-.36-1.747-1.08-2.32c-.72-.573-1.6-1.026-2.64-1.36-1.04-.333-2.086-.686-3.14-1.06a7.36 7.36 0 01-2.78-1.76c-.987-.934-1.48-2.073-1.48-3.42s.54-2.601 1.62-3.761 2.833-1.739 5.26-1.739c.854 0 1.653.1 2.4.3.746.2 1.28.394 1.6.58l.48.279-.92 2.521c-.854-.666-1.974-1-3.36-1-1.387 0-2.42.26-3.1.78-.68.52-1.02 1.18-1.02 1.979 0 .88.426 1.574 1.28 2.08.853.507 1.813.934 2.88 1.28 1.066.347 2.126.733 3.18 1.16 1.053.427 1.946 1.094 2.68 2s1.1 2.106 1.1 3.6c0 1.494-.6 2.794-1.8 3.9-1.2 1.106-2.954 1.66-5.26 1.66-2.307 0-4.114-.547-5.42-1.64-1.307-1.093-1.987-2.44-2.04-4.04z"
                  fill="#c1dbe6"
                  data-original="#89d3ff"
                />
              </g>
            </svg>
            Photoshop
          </div>
          <span class="status">
            <span class="status-circle green"></span>
            Updated</span
          >
          <div class="button-wrapper">
            <button class="content-button status-button open">
              Open
            </button>
            <div class="menu">
              <button class="dropdown">
                <ul>
                  <li><a href="#">Go to Discover</a></li>
                  <li><a href="#">Learn more</a></li>
                  <li><a href="#">Uninstall</a></li>
                </ul>
              </button>
            </div>
          </div>
        </li>
        <li class="adobe-product">
          <div class="products">
            <svg viewBox="0 0 52 52" style="border: 1px solid #b65a0b">
              <g xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                  fill="#261400"
                  data-original="#6d4c13"
                />
                <path
                  d="M30.68 39h-3.24l-2.76-9.04h-8.32L13.72 39H10.6l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L17.12 27h6.84zM37.479 12.24c0 .453-.16.84-.48 1.16-.32.319-.7.479-1.14.479-.44 0-.827-.166-1.16-.5-.334-.333-.5-.713-.5-1.14s.166-.807.5-1.141c.333-.333.72-.5 1.16-.5.44 0 .82.16 1.14.48.321.322.48.709.48 1.162zM37.24 39h-2.88V18.96h2.88V39z"
                  fill="#e6d2c0"
                  data-original="#ffbd2e"
                />
              </g>
            </svg>
            Illustrator
          </div>

          <span class="status">
            <span class="status-circle"></span>
            Update Available</span
          >
          <div class="button-wrapper">
            <button class="content-button status-button">
              Update this app
            </button>
            <div class="pop-up">
              <div class="pop-up__title">
                Update This App
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="close feather feather-x-circle"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M15 9l-6 6M9 9l6 6" />
                </svg>
              </div>
              <div class="pop-up__subtitle">
                Adjust your selections for advanced options as desired
                before continuing. <a href="#">Learn more</a>
              </div>
              <div class="checkbox-wrapper">
                <input type="checkbox" id="check1" class="checkbox" />
                <label for="check1"
                  >Import previous settings and preferences</label
                >
              </div>
              <div class="checkbox-wrapper">
                <input type="checkbox" id="check2" class="checkbox" />
                <label for="check2">Remove old versions</label>
              </div>
              <div class="content-button-wrapper">
                <button class="content-button status-button open close">
                  Cancel
                </button>
                <button class="content-button status-button">
                  Continue
                </button>
              </div>
            </div>
            <div class="menu">
              <button class="dropdown">
                <ul>
                  <li><a href="#">Go to Discover</a></li>
                  <li><a href="#">Learn more</a></li>
                  <li><a href="#">Uninstall</a></li>
                </ul>
              </button>
            </div>
          </div>
        </li>
        <li class="adobe-product">
          <div class="products">
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
          </div>
          <span class="status">
            <span class="status-circle green"></span>
            Updated</span
          >
          <div class="button-wrapper">
            <button class="content-button status-button open">
              Open
            </button>
            <div class="menu">
              <button class="dropdown">
                <ul>
                  <li><a href="#">Go to Discover</a></li>
                  <li><a href="#">Learn more</a></li>
                  <li><a href="#">Uninstall</a></li>
                </ul>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import Header from "@/components/partials/HeaderView.vue";
import { computed, defineComponent, reactive } from "vue";
import { useStore } from '@/store/index'
import { ActionTypes } from '@/store/actions'
import { useRouter } from 'vue-router';
import Service from '@/types/Service';
export default defineComponent({
  name: "ServiceView",
  components: {
    // Header
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    let validations = reactive<string[]>([]);
    const addDocument = (service: Service) => store.dispatch(ActionTypes.AddService, service);
    let service = reactive({
      name: '',
      cost: 0,
    });
    const isValid = computed(() => {
      return (
        service.name !== "" && 
        service.cost !== 0
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
      if (!service.name) {
        validations.push("Name is required!");
      }
      setTimeout(() => (validations = []), 5000);
      // If No Errors Return True
      if (validations.length) return false;
      return true;
    };
    const handleService = async () => {
      if (!handleValidation()) return;
      try {
        await addDocument({...service});
        router.push({ name: "Home" });
      } catch (error) {
        console.log(error);
      }
    };

    return {
      validations, 
      service, 
      isValid,
      handleBlur, 
      handleService,
      handleValidation,
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
.content-section ul svg {
  width: 28px;
  border-radius: 6px;
  margin-right: 16px;
  flex-shrink: 0;
}

.products {
  display: flex;
  align-items: center;
  width: 150px;
}
@media screen and (max-width: 480px) {
  .products {
    width: 120px;
  }
}

.status {
  margin-left: auto;
  width: 140px;
  font-size: 15px;
  position: relative;
}
@media screen and (max-width: 700px) {
  .status {
    display: none;
  }
}
.status-circle {
  width: 6px;
  height: 6px;
  background-color: #396df0;
  position: absolute;
  border-radius: 50%;
  top: 4px;
  left: -20px;
}
.status-circle.green {
  background-color: #3bf083;
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
.status-button.open {
  background: none;
  color: var(--button-inactive);
  border: 1px solid var(--button-inactive);
}
.status-button:not(.open):hover {
  color: #fff;
  border-color: #fff;
}

.content-button:not(.open):hover {
  background: #1e59f1;
}

.menu {
  width: 5px;
  height: 5px;
  background-color: var(--button-inactive);
  border-radius: 50%;
  box-shadow: 7px 0 0 0 var(--button-inactive), 14px 0 0 0 var(--button-inactive);
  margin: 0 12px;
}

@media screen and (max-width: 415px) {
  .adobe-product .menu {
    display: none;
  }
}
.dropdown {
  position: relative;
  height: 53px;
  width: 40px;
  top: -24px;
  display: flex;
  left: -5px;
  background: transparent;
  border: none;
  cursor: pointer;
}
.dropdown ul {
  position: absolute;
  background: var(--dropdown-bg);
  height: 110px;
  width: 120px;
  right: 0;
  top: 20px;
  pointer-events: none;
  opacity: 0;
  transform: translatey(10px);
  transition: all 0.4s ease;
}
.dropdown ul li a {
  text-decoration: none;
  color: var(--theme-color);
  font-size: 12px;
}

.dropdown.is-active ul {
  opacity: 1;
  pointer-events: all;
  transform: translatey(25px);
}
.dropdown.is-active ul li:hover {
  background-color: var(--dropdown-hover);
}

.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 187px;
  margin-left: auto;
}

.pop-up {
  position: absolute;
  padding: 30px 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
  z-index: 10;
  background-color: var(--popup-bg);
  width: 500px;
  visibility: hidden;
  opacity: 0;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  white-space: normal;
}
@media screen and (max-width: 570px) {
  .pop-up {
    width: 100%;
  }
}
.pop-up.visible {
  visibility: visible;
  opacity: 1;
}
.pop-up__title {
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pop-up__subtitle {
  white-space: normal;
  margin: 20px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.8em;
}
.pop-up__subtitle a {
  color: var(--theme-color);
}

.content-button-wrapper .content-button.status-button.open.close {
  width: auto;
}

.content-section .close {
  margin-right: 0;
  width: 24px;
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
}
.checkbox-wrapper + .checkbox-wrapper {
  margin: 20px 0 40px;
}

.checkbox {
  display: none;
}

.checkbox + label {
  display: flex;
  align-items: center;
}
.checkbox + label:before {
  content: "";
  margin-right: 10px;
  width: 15px;
  height: 15px;
  border: 1px solid var(--theme-color);
  border-radius: 4px;
  cursor: pointer;
  flex-shrink: 0;
}

.checkbox:checked + label:before {
  background-color: #3a6df0;
  border-color: #3a6df0;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3e%3cpath d='M20 6L9 17l-5-5'/%3e%3c/svg%3e");
  background-position: 50%;
  background-size: 12px;
  background-repeat: no-repeat;
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