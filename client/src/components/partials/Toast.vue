<template>
  <Transition name="slide-fade">
    <div v-if="toast.status" class="toast">
      <div class="toast--wrapper">
        <div class="toast--icon">
          <svg version="1.1" class="toast__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
              <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z"></path>
          </svg>
        </div>
        <div class="toast--content">
          <p class="toast--type">{{ toast.title }}</p>
          <p class="toast--message">{{ toast.text }}</p>
        </div>
        <div class="toast--action">
          <button type="button" class="toast--" @click="handleClose">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.642 15.642" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 15.642 15.642">
              <path fill-rule="evenodd" d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { store } from "@/store";
import { ActionTypes } from "@/store/actions";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ToastView",
  props: ['toast'],
  setup() {
    const handleClose = async () => {
      store.dispatch(ActionTypes.SetToast, {
        title: '',
        text: '',
        status: false,
      });
    }

    return { handleClose };
  },
});
</script>

<style scoped>
/* toast */
@import url('https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i');
.toast {
  position: absolute;
  width: 100%;
  background-color: #fff;
  color: #000;
  text-align: left;
  padding: 21px 0;
  background-color: #fff;
  border-radius: 4px;
  max-width: 500px;
  top: 45px;
  right: 0;
  z-index: 20;
  box-shadow: 1px 7px 14px -5px rgb(0 0 0 / 20%);
}
.toast:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  border-top-left-radius:4px;
  border-bottom-left-radius: 4px;
}
.toast::before {
  background-color: #2BDE3F;
  background-color: #3a6df0;
}
/* .toast--wrapper {

} */
.toast--icon {
  background-color: #2BDE3F;
  background-color: #3a6df0;
}
.toast--icon {
  position: absolute;
  top: 50%;
  left: 22px;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
  padding: 7px;
  border-radius: 50%;
  display: inline-block;
}
.toast--svg {
  fill: #fff;
}
.toast--content {
  padding-left: 70px;
  padding-right: 60px;
}
.toast--type {
  color: #000000;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 8px;
}
.toast--message {
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 0;
  color: #000000;
}
.toast--action button {
  position: absolute;
  border: none;
  background-color: transparent;
  right: 22px;
  top: 50%;
  width: 14px;
  cursor: pointer;
  height: 14px;
  fill: #000000;
  transform: translateY(-50%);
}
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
@media screen and (min-width: 565px) {
.toast {
  top: 60px;
}
}
</style>