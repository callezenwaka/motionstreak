<template>
  <div class="file">
    <Header></Header>
    <div class="">
      <form class="form--container" @submit.prevent="handleFile">
        <div class="form--header">
          <h2 class="form--title">CHange Avatar</h2>
        </div>
        <div class="form--item">
        <label class="form--label" for="file">User Avatar: </label>
        <input class="form--file" type="file" name="file" id="file" @change="handleImage" @blur="handleBlur($event)" required />
        </div>
        <div class="form--item">
          <button class="form--button" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Header from "@/components/partials/Header.vue";
import { defineComponent } from "vue";
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';
export default defineComponent({
  name: "FileView",
  components: {
    Header
  },
  setup() {
    // const route = useRoute();

    // const AVATAR= gql`
    //   mutation Avatar($file: FileRequest!) {
    //     Avatar(file: $file,) {
    //       success,
    //       message,
    //       errorStatus,
    //       error
    //     }
    //   }
    // `;

    const { mutate: handleAvatar, onDone } = useMutation(gql`
      mutation Avatar($file: FileRequest!) {
        Avatar(file: $file,) {
          success,
          message,
          errorStatus,
          error
        }
      }
    `)

    const handleBlur = (event: Event) => {
      const target = event.target as HTMLInputElement;
      target.style.borderColor = target.value
        ? "rgba(229,231,235, 1)"
        : "rgba(255, 0, 0, 1)";
    };

    onDone(result => {
      console.log(result.data)
    })

    const handleImage = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = (target.files as FileList)[0];
      // const data = {
      //   file: (target.files as FileList)[0]
      // }
      console.log(file);
      // let formData = new FormData();
      // formData.append("file", file);
      try {
        // console.log(data);
        handleAvatar({
          file: file,
          // variables: data,
        });
        // const data = await addAccountImage(formData);
        // user.photoURL = typeof data === "string"? data : '';
      } catch (error) {
        console.log(error);
      }
    }

    const handleFile = async () => {
      // if (!handleValidation()) return;
      // try {
      //   await store.dispatch(ActionTypes.File, {...user});
      //   router.push({ name: "Dashboard" });
      // } catch (error) {
      //   console.log(error);
      // }
    };

    return { handleBlur, handleImage, handleFile };
  },
});
</script>

<style scoped>
/* file */
.file {
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
  margin: 0rem auto 0;
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
  /* color: var(--dark-theme-color); */
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
  color: #3a6df0;
}
.form--text {
  color: #ffffff;
}
/* mini */
@media only screen and (min-width: 481px) {
  .form--container {
    width: 410px;
    margin: 0 auto;
    margin: 8rem auto 0
  }
}
/* max */
@media only screen and (min-width: 981px) {
  .app {
    background-color: var(--theme-bg-color);
    min-width: 1250px;
    max-width: 1250px;
    /* max-height: 860px; */
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    /* border-radius: 14px; */
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    font-size: 15px;
    font-weight: 500;
  }
}
</style>