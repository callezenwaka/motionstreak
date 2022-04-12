<template>
  <div class="profile">
    <div class="form--header">
      <h2 class="form--title">Update Profile</h2>
    </div>
    <div class="user--address">
      <img :src="user.photoURL" :alt="user.displayName">
      <div v-if="canCopy" class="clipboard--wrapper">
        <p>{{handleAddress(user.address)}}</p>
        <button aria-label="Copy" class="clipboard--button" @click="handleCopy(user.address, copy);">
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
    <form class="form--container" @submit.prevent="handleUpdate">
      <div v-if="!!validations.length" class="validations">
        <ul style="text-align: left;"><li style="list-style-type: disc;" v-for="(validation, index) in validations" :key="index">{{validation}}</li></ul>
      </div>
      <div class="form--item">
        <label class="form--label" for="name">Full Name: </label>
        <input class="form--input" type="text" name="name" id="name" v-model="user.displayName" @blur="handleBlur($event)" placeholder="Enter your full name" required />
      </div>
      <div class="form--item">
        <label class="form--label" for="email">Email: </label>
        <input class="form--input" type="email" name="email" id="email" v-model="user.email" @blur="handleBlur($event)" placeholder="Enter your email" required />
      </div>
      <div class="form--item">
        <label class="form--label" for="phone">Phone Number: </label>
        <input class="form--input" type="text" name="phone" id="phone" v-model="user.phoneNumber" @blur="handleBlur($event)" placeholder="Enter your phone number" required />
      </div>
      <div class="form--item">
        <label class="form--label" for="file">User Avatar: </label>
        <input class="form--file" type="file" name="file" id="file" @change="handleImage" @blur="handleBlur($event)" required />
      </div>
      <div class="form--item">
        <button class="form--button" :class="{isValid: isValid}" :disabled="!isValid" type="submit">Send</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { useStore } from '@/store';
import { ActionTypes } from '@/store/actions';
import { Account, Profile } from '@/store/state';
import { computed, defineComponent, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { handleAddress, handleCopy, handleBlur } from "@/utils";
export default defineComponent({
  name: 'UserView',
  components: {
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const copy = reactive({
      canCopy: false,
      isCopying: false,
    })
    copy.canCopy = !!navigator.clipboard;
    let validations = reactive<string[]>([]);
    const profile = computed((): Profile => store.getters.profile);
    const addAccountImage = (formData: FormData) => store.dispatch(ActionTypes.AddAccountImage, formData);
    const updateAccount = (account: Account) => store.dispatch(ActionTypes.UpdateAccount, account);
    const user = reactive({    
      displayName: profile.value.displayName,
      phoneNumber: profile.value.phoneNumber,
      photoURL: profile.value.photoURL,
      email: profile.value.email,
      role: profile.value.role,
      isActive: profile.value.isActive,
      isActivated: profile.value.isActivated,
      address: profile.value.address,
      affiliate: profile.value.affiliate,
    })
    const isValid = computed(() => {
      return (
        user.displayName !== "" && 
        user.phoneNumber !== "" && 
        // user.photoURL !== "" && 
        user.email !== "" 
      );
    });
    // const handleAddress = (address: string) => {
    //   return `${address.slice(0, 4)}...${address.slice(address.length - 3)}`;
    // }
    // const handleCopy = async (word: string) => {
    //   copy.isCopying = true;
    //   await navigator.clipboard.writeText(word);
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
    const handleValidation = (): boolean => {
      validations = [];
      if (!user.displayName) {
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
        const data = await addAccountImage(formData);
        console.log(data);
        user.photoURL = typeof data === "string"? data : '';
      } catch (error) {
        console.log(error);
      }
    }
    const handleUpdate = async () => {
      if (!handleValidation()) return;
      try {
        console.log()
        await updateAccount({...user});
        router.push({ name: "Dashboard" });
      } catch (error) {
        console.log(error);
      }
    };

    return {
      ...toRefs(copy),
      copy,
      user,
      isValid,
      profile,
      document,
      validations,
      handleAddress,
      handleCopy,
      handleBlur,
      handleValidation,
      handleImage,
      handleUpdate
     }
  }
});
</script>

<style scoped>
/* profile */
.profile {
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
.user--address {
  position: relative;
  margin-bottom: 2rem;
}
img {
  border-radius: 50%;
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
  .form--container {
    width: 410px;
    margin: 0 auto;
  }
}
/* max */
@media only screen and (min-width: 981px) {
}
</style>