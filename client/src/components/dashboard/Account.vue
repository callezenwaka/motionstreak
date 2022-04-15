<template>
  <div class="account">
    <div class="address--container">
      <div class="form--header">
        <h2 class="form--title">Search Account</h2>
      </div>
      <div class="form--item">
        <label class="form--label" for="address">Account Address: </label>
        <input class="form--input" type="text" name="address" id="address" v-model="address" @input="handleInput($event)" @blur="handleBlur($event)" placeholder="Search address" required />
      </div>
    </div>
    <div class="account--or">
      <div>
        <p class="spinner" :class="{active: true}">&#10042;</p>
      </div>
    </div>
    <div v-if="account.address" class="account--address">
      <div class="form--header">
        <h2 class="form--title">Account Profile</h2>
      </div>
      <img :src="account.photoURL" :alt="account.displayName">
      <div v-if="canCopy" class="clipboard--wrapper">
        <p>{{handleAddress(account.address)}}</p>
        <button aria-label="Copy" class="clipboard--button" @click="handleCopy(account.address || '', copy);">
          <svg v-if="!isCopying" height="16" viewBox="0 0 16 16" version="1.1" width="16" class="octicon octicon--copy">
            <path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path>
          </svg>
          <svg  v-else height="16" viewBox="0 0 16 16" version="1.1" width="16" class="octicon octicon--check">
            <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
          </svg>
          <span class="sr-only">Copy</span>
        </button>
      </div>
    </div>
    <form class="form--container">
      <div class="form--item">
        <label class="form--label" for="name">Full Name: </label>
        <input class="form--input" type="text" name="name" id="name" v-model="account.displayName" readonly />
      </div>
      <div class="form--item">
        <label class="form--label" for="email">Email: </label>
        <input class="form--input" type="email" name="email" id="email" v-model="account.email" readonly />
      </div>
      <div class="form--item">
        <label class="form--label" for="phone">Phone Number: </label>
        <input class="form--input" type="text" name="phone" id="phone" v-model="account.phoneNumber" readonly />
      </div>
      <div class="form--item">
        <label class="form--label" for="role">Account Type: </label>
        <input class="form--input" type="text" name="role" id="role" v-model="account.role" readOnly />
      </div>
      <!-- <div class="form--item">
        <label class="form--label" for="status">Account Status: </label>
        <input class="form--input" type="text" name="status" id="status" v-model="account.isActivated" readOnly />
      </div> -->
    </form>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { useStore } from '@/store';
import { ActionTypes } from '@/store/actions';
import { Account } from '@/store/state';
import { computed, defineComponent, onBeforeUnmount, reactive, ref, toRefs } from 'vue';
import { handleAddress, handleCopy, handleBlur } from "@/utils";
import { MutationType } from '@/store/mutations';
export default defineComponent({
  name: 'AccountView',
  components: {
  },
  setup() {
    const store = useStore();
    const address = ref('');
    const copy = reactive({
      canCopy: false,
      isCopying: false,
    });
    copy.canCopy = !!navigator.clipboard;
    const account = computed((): Account => store.getters.account);
    onBeforeUnmount(() => store.commit(MutationType.SetAccount, {
      address:"",
      affiliate:"",
      displayName:"",
      email:"",
      isActivated:false,
      isActive:false,
      phoneNumber:"",
      photoURL:"",
      role:"",
    }));
    // const handleAddress = (address: string) => {
    //   return `${address.slice(0, 4)}...${address.slice(address.length - 3)}`;
    // }
    // const handleCopy = async (word?: string) => {
    //   copy.isCopying = true;
    //   if(word) await navigator.clipboard.writeText(word);
    //   setTimeout(() => {
    //     copy.isCopying = false;
    //   }, 5000);
    // };
    // const handleBlur = (event: Event) => {
    //   const target = event.target as HTMLInputElement;
    //   target.style.borderColor = target.value
    //     ? "rgba(229,231,235, 1)"
    //     : "rgba(255, 0, 0, 1)";
    // };
    const handleInput = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      console.log(target.value);
      store.dispatch(ActionTypes.GetAccount, target.value);
    };

    return {
      ...toRefs(copy),
      copy,
      account,
      address,
      handleInput,
      handleAddress,
      handleCopy,
      handleBlur,
    }
  }
});
</script>

<style scoped>
/* account */
.account {
  /* padding: 1rem; */
  height: 100%;
  min-height: 100vh;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 500ms linear;
}
.address--container {
  width: 100%;
  margin: 50px auto;
  padding: 0 .5rem;
}
.account--address {
  position: relative;
  margin-bottom: 2rem;
}
.account--or {
  margin: 20px 0px;
  position: relative;
  text-align: center;
  width: 298px;
  width: calc(100vw - 32px);
  width: 100%;
}
.account--or::before {
  display: inline-block;
  border-top: 1px solid rgb(184, 196, 194);
  content: "";
  margin: 0px auto;
  position: absolute;
  height: 0px;
  inset: 50% 0px 0px;
  transform: translateY(-50%);
  width: 100%;
}
.account--or div {
  display: inline-block;
  background: rgb(255, 255, 255);
  background-color: rgba(243, 244, 246, 1);
  /* padding: 0px 10px; */
  font-size: 24px;
  font-weight: normal;
  line-height: 16px;
  color: rgb(93, 108, 116);
  text-align: center;
  position: inherit;
}
.spinner.active {
  display: inline-block;
  /* width: 100px; */
  /* height: 100px; */
  /* background-color: #0CB1C4; */
  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
  /* transform: rotate(3deg); */
   /* transform: rotate(0.3rad);/ */
   /* transform: rotate(3grad); */ 
   /* transform: rotate(.03turn);  */
}

@keyframes spin {
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
}
img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
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
.clipboard--wrapper {
  animation: fade-out 0.2s both;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
  /* position: absolute !important; */
  right: 0 !important;
  top: 0 !important;
}
.clipboard--button {
  position: relative;
  padding: 0 !important;
  margin-left: 10px !important;
}
.sr-only {
  display: none;
}
.octicon {
  fill: currentColor;
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  /* margin: 8px !important; */
}
.octicon.octicon--check {
  display: block !important;
  color: #22863a !important;
}
/* mini */
@media only screen and (min-width: 481px) {
  .form--container,
  .address--container {
    width: 410px;
    margin: 0 auto;
  }
}
/* max */
@media only screen and (min-width: 981px) {
}
</style>