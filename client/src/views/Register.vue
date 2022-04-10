<template>
  <div class="register">
    <Header></Header>
    <div class="">
      <form class="form--container" @submit.prevent="handleRegister">
        <div class="form--header">
          <h2 class="form--title">Register</h2>
        </div>
        <div v-if="!!validations.length" class="validations">
          <ul style="text-align: left;"><li style="list-style-type: disc;" v-for="(validation, index) in validations" :key="index">{{validation}}</li></ul>
        </div>
        <div class="form--item">
          <label class="form--label" for="name">Full Name: </label>
          <input class="form--input" type="text" name="name" id="name" v-model="user.displayName" @blur="handleBlur($event)" placeholder="Enter your full name" required />
        </div>
        <div class="form--item">
          <label class="form--label" for="phone">Phone Number: </label>
          <input class="form--input" type="tel" name="phone" id="phone" v-model="user.phoneNumber" @blur="handleBlur($event)" placeholder="Enter your phone number" required />
        </div>
        <div class="form--item">
          <label class="form--label" for="email">Email: </label>
          <input class="form--input" type="email" name="email" id="email" v-model="user.email" @blur="handleBlur($event)" placeholder="Enter your email" required />
        </div>
        <div class="form--item">
          <label class="form--label" for="password">Password: </label>
          <input class="form--input" type="password" name="key" id="key" v-model="user.password" @blur="handleBlur($event)" placeholder="Enter your password" required />
        </div>
        <div class="form--item" style="flex-direction: row; align-items: center;">
          <label class="form--label" for="role">Organization Account? </label>&nbsp;<span class="register--tip"><span class="register--blink tooltip">&quest;<span class="tooltiptext">Checkbox if organization account.</span></span></span>:&nbsp;&nbsp; 
          <input class="form--checkbox" type="checkbox" name="role" id="role" v-model="user.role" true-value="Tenant" false-value="User" />
        </div>
        <div class="form--item">
          <button class="form--button" :class="{isValid: isValid}" :disabled="!isValid" type="submit">Sign Up</button>
        </div>
        <div class="form--option">
					<span class="form--text">Already have a user account?</span>
					<router-link class="form--link" to="/login">&nbsp;Sign in</router-link>
				</div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Header from "@/components/partials/Header.vue";
import { computed, defineComponent, reactive } from "vue";
import { useStore } from "@/store";
import { useRouter } from 'vue-router';
import { ActionTypes } from "@/store/actions";
export default defineComponent({
  name: "RegisterView",
  components: {
    Header
  },
  setup() {
    const store = useStore();
    // const route = useRoute();
    const router = useRouter();
    let validations = reactive<string[]>([]);
    let user = reactive({
      displayName: '',
      phoneNumber: '',
      photoURL: 'https://ipfs.infuria.io/ipfs/QmakHdxH44vEMZXkNGkEwZr9usFCe9CraHgWDsgQbYPWYV',
      email: '',
      password: '',
      role: 'User',
      isActivated: true,
    });
    const isValid = computed(() => {
      return (
        user.displayName !== "" && 
        user.phoneNumber !== "" && 
        user.email !== "" && 
        user.password !== ""  && 
        user.role !== "" 
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
      if (!user.email) {
        validations.push("Email is required!");
      }
      setTimeout(() => (validations = []), 5000);
      // If No Errors Return True
      if (validations.length) return false;
      return true;
    };
    const handleRegister = async () => {
      if (!handleValidation()) return;
      try {
        await store.dispatch(ActionTypes.Register, {...user});
        router.push({ name: "Home" });
      } catch (error) {
        console.log(error);
      }
    };

    return { validations, user, isValid, handleBlur, handleValidation, handleRegister };
  },
});
</script>

<style scoped>
/* register */
.register {
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
  margin: 0rem auto;
  padding: 0 1rem;
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
  color: var(--dark-theme-color);
  position: relative;
  height: 16px;
  text-align: left;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 0.02em;
}
.form--checkbox {
  width: 16px;
  height: 16px;
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
.register--tip {
  /* background-color: #000000; */
  border: 1px solid #000000;
  color: #000000;
  border-radius: 100%;
  padding: .0rem .3rem;
}
.register--blink {
  animation: blink-animation 1s steps(5, start) infinite;
  -webkit-animation: blink-animation 1s steps(5, start) infinite;
  color: var(--dark-theme-color);
}
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
.tooltip {
  position: relative;
  display: inline-block;
  /* border-bottom: 1px dotted black; */
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 250px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -60px;
  margin-left: -125px;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
.form--option {
  margin: 15px;
  color: rgb(33, 49, 60);
  font-size: 15px;
  display: inline;
  text-align: start;
  display: block;
  text-align: center;
}
.form--link {
  text-decoration: none;
  color: rgb(0, 124, 173);
}
.form--text {
  color: #ffffff;
}
/* mini */
@media only screen and (min-width: 481px) {
  .form--container {
    width: 410px;
    margin: 0 auto;
    /* margin: 10rem auto 0 */
  }
}
/* max */
@media only screen and (min-width: 981px) {
}
</style>