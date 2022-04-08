<template>
  <div class="profile">
    <form class="form--container" @submit.prevent="handleUpdate">
      <div class="form--header">
        <h2 class="form--title">Update Profile</h2>
      </div>
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
      <!-- <div class="form--item">
        <label class="form--label" for="file">User Avatar: </label>
        <input class="form--input" type="file" name="file" id="file" @change="handleImage" @blur="handleBlur($event)" required />
      </div> -->
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
import { computed, defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'UserView',
  components: {
  },
  setup() {
    const store = useStore();
    let validations = reactive<string[]>([]);
    const profile = computed((): Profile => store.getters.profile);
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
    const handleBlur = (event: Event) => {
      const target = event.target as HTMLInputElement;
      target.style.borderColor = target.value
        ? "rgba(229,231,235, 1)"
        : "rgba(255, 0, 0, 1)";
    };
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

    const handleUpdate = async () => {
      console.log()
      await updateAccount({...user});
    };

    return {
      user,
      isValid,
      profile,
      document,
      validations,
      handleBlur,
      handleValidation,
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