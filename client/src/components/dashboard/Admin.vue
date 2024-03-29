<template>
  <div class="account">
    <div class="address--container">
      <div class="form--header">
        <h2 class="form--title">Search Admin</h2>
      </div>
      <div class="form--item">
        <label class="form--label" for="address">Account Address: </label>
        <input class="form--input" type="text" name="address" id="address" v-model="address" @input="handleInput($event)" @blur="handleBlur($event)" placeholder="Search address" required />
      </div>
    </div>
    <div class="account--or"><span></span></div>
    <form class="form--container" @submit.prevent="handleAccount">
      <div v-if="!!validations.length" class="validations">
        <ul style="text-align: left;"><li style="list-style-type: disc;" v-for="(validation, index) in validations" :key="index">{{validation}}</li></ul>
      </div>
      <div class="form--item">
        <label class="form--label" for="name">Full Name: </label>
        <input class="form--input" type="text" name="name" id="name" v-model="account.displayName" :placeholder="readOnly? 'Enter full name':''" :readOnly="readOnly" required />
      </div>
      <div class="form--item">
        <label class="form--label" for="phone">Phone Number: </label>
        <input class="form--input" type="text" name="phone" id="phone" v-model="account.phoneNumber" :placeholder="readOnly? 'Enter phone number password':''" :readOnly="readOnly" required />
      </div>
      <div class="form--item">
        <label class="form--label" for="email">Email: </label>
        <input class="form--input" type="email" name="email" id="email" v-model="account.email" :placeholder="readOnly? 'Enter email':''" :readOnly="readOnly" required />
      </div>
      <div v-if="isTenant && !isUpdating" class="form--item">
        <label class="form--label" for="password">Password: </label>
        <input class="form--input" type="password" name="key" id="key" v-model="item.password" @blur="handleBlur($event)" :placeholder="readOnly? 'Enter password':''" :readOnly="readOnly" required />
      </div>
      <div v-if="isTenant && isUpdating" class="form--item">
        <label class="form--label" for="role">Account Type: </label>
        <input class="form--input" type="text" name="role" id="role" v-model="account.role" readonly />
      </div>
      <div v-if="isTenant && isUpdating" class="form--item">
        <label class="form--label" for="status">Account Status: </label>
        <select class="form--input" v-model="account.isActive" name="status" id="status">
          <option :value=0 disabled>Select Status</option>
          <option :value="false">False</option>
          <option :value="true">True</option>
        </select>
      </div>
      <div v-if="isTenant" class="form--item">
        <button class="form--button" :class="{isValid: isValid}" :disabled="!isValid" type="submit">{{(isUpdating)? 'Update' : 'Create'}}</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { useStore } from '@/store';
import { ActionTypes } from '@/store/actions';
import { MutationType } from '@/store/mutations';
import { Account, Profile } from '@/store/state';
import { computed, defineComponent, reactive, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { handleAddress, handleCopy, handleBlur } from "@/utils";
export default defineComponent({
  name: 'AdminView',
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
    const isTenant = computed((): boolean => store.getters.isTenant);
    const profile = computed((): Profile => store.getters.profile);
    const account = computed((): Account => store.getters.account);
    let address = ref('');
    const isUpdating = ref(false);
    const item = reactive({
      photoURL: 'https://ipfs.infura.io/ipfs/QmUHa9QV34uPdJ1JZ5XqcQgn5jfmW3SxUnt3yoFfHu8Sow',
      password: '',
      role: 'Admin',
      isActive: true,
      isActivated: true,
      affiliate: profile.value.affiliate,
    })
    const readOnly = computed(() => {
      return account.value.isActivated;
    });
    const isValid = computed(() => {
      return isTenant.value;
    });
    const handleInput = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      isUpdating.value = true;
      store.dispatch(ActionTypes.GetAccount, target.value);
    };
    const handleValidation = (): boolean => {
      validations = [];
      if (!item.password) {
        validations.push("Password is required!");
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
        const data = await store.dispatch(ActionTypes.AddAccountImage, formData);
        item.photoURL = typeof data === "string"? data : '';
      } catch (error) {
        console.log(error);
      }
    }
    const handleAccount = async () => {
      if (isUpdating.value) {
        const { address, displayName, email, phoneNumber, photoURL, role, isActive, isActivated } = account.value;
        isUpdating.value = false;
        await store.dispatch(ActionTypes.UpdateAccount, {
          address,
          displayName,
          email,
          phoneNumber,
          photoURL,
          role,
          isActive,
          isActivated,
        });
      } else {
        if (!handleValidation()) return;
        const { displayName, email, phoneNumber } = account.value;
        const { password, photoURL, role, isActive, isActivated, affiliate } = item;
        await store.dispatch(ActionTypes.AddAccount, {
          displayName,
          email,
          phoneNumber,
          photoURL,
          role,
          isActive,
          isActivated,
          password,
          affiliate,
        })
      }
      address.value = '';
      item.password = '';
      store.commit(MutationType.SetAccount, {
        displayName: '',
        email: '',
        phoneNumber: '',
        photoURL: '',
        role: '',
        affiliate: '',
        isActive: false,
        isActivated: false,
      });
      router.push('/dashboard');
    };

    return {
      ...toRefs(copy),
      copy,
      item,
      address,
      account,
      isUpdating,
      isTenant,
      readOnly,
      isValid,
      document,
      validations,
      handleInput,
      handleAddress,
      handleCopy,
      handleBlur,
      handleValidation,
      handleImage,
      handleAccount,
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
.account--or span {
  padding: 0px 10px;
  font-size: 24px;
  font-weight: normal;
  line-height: 16px;
  color: rgb(93, 108, 116);
  text-align: center;
  position: inherit;
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
  color: #ffffff;
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