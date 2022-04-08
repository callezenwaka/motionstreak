<template>
  <div class="home">
    <Header></Header>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <div class="">
      <div class="wrapper">
        <div class="main-container" data-v-039c5b43="">
          <div class="content-wrapper" data-v-039c5b43="">
            <div class="content-wrapper-header" data-v-039c5b43="">
              <div class="content-wrapper-context" data-v-039c5b43="">
                <h2 class="img-content" data-v-039c5b43="">
                  <img src="../assets/algovault.svg" alt="" srcset="">
                  One Vault
                </h2>
                <div class="content-text" data-v-039c5b43="">
                  Grab yourself 10 free images from Adobe Stock in a 30-day free
                  trial plan and find perfect image, that will help you with your
                  new project.
                </div>
                <button class="content-button" data-v-039c5b43="">
                  Start free trial
                </button>
              </div>
              <img
                class="content-wrapper-img"
                src="../assets/files.svg"
                alt=""
                data-v-039c5b43=""
              />
            </div>
            <!-- Services -->
            <div class="content-section" data-v-039c5b43="">
              <div class="content-section-title" data-v-039c5b43="">
                <h2>Our Services</h2>
              </div>
              <div class="apps-card" data-v-039c5b43="">
                <div class="app-card" data-v-039c5b43="">
                  <span data-v-039c5b43="">
                    <img src="../assets/certificate.svg" alt="" srcset="">
                    Certificates
                  </span>
                  <div class="app-card__subtext" data-v-039c5b43="">
                    <!-- Edit, master and create fully proffesional videos -->
                    The certificate validation process typically proceeds in three steps and typically takes three inputs. The first is the certificate to be validated, the second is any intermediate certificate certified by the source organization, and the third is the verification of intermediate certificate by the destination organization.
                  </div>
                  <div class="app-card-buttons" data-v-039c5b43="">
                    <button
                      class="content-button status-button"
                      data-v-039c5b43=""
                    >
                      Update
                    </button>
                    <div class="menu" data-v-039c5b43=""></div>
                  </div>
                </div>
                <div class="app-card" data-v-039c5b43="">
                  <span data-v-039c5b43="">
                    <img src="../assets/transcript.svg" alt="" srcset="">
                    Transcript
                  </span>
                  <div class="app-card__subtext" data-v-039c5b43="">
                    The transcript validation process typically proceeds in three steps and typically takes three inputs. The first is the transcript to be validated, the second is any intermediate transcript certified by the source organization, and the third is the verification of intermediate transcript by the destination organization.
                  </div>
                  <div class="app-card-buttons" data-v-039c5b43="">
                    <button
                      class="content-button status-button"
                      data-v-039c5b43=""
                    >
                      Update
                    </button>
                    <div class="menu" data-v-039c5b43=""></div>
                  </div>
                </div>
                <div class="app-card" data-v-039c5b43="">
                  <span data-v-039c5b43="">
                    <img src="../assets/reference.svg" alt="" srcset="">
                    References
                  </span>
                  <div class="app-card__subtext" data-v-039c5b43="">
                    The reference validation process typically proceeds in three steps and typically takes three inputs. The first is the reference to be validated, the second is any intermediate reference certified by the source organization, and the third is the verification of intermediate reference by the destination organization.
                  </div>
                  <div class="app-card-buttons" data-v-039c5b43="">
                    <button
                      class="content-button status-button"
                      data-v-039c5b43=""
                    >
                      Update
                    </button>
                    <div class="menu" data-v-039c5b43=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/partials/Header.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    // HelloWorld,
    Header,
  },
});
</script>

<style scoped>
/* home */
/* .home {
  height: 100%;
  min-height: 100vh;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 500ms linear;
} */
.app {
  background-color: var(--theme-bg-color);
  max-width: 1250px;
  max-height: 860px;
  /* height: 90vh; */
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
.wrapper {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}
.main-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.content-wrapper {
  display: flex;
  flex-direction: column;
  color: var(--theme-color);
  padding: 25px 40px;
  height: 100%;
  overflow: auto;
  /* background-color: var(--theme-bg-color); */
}
@media screen and (max-width: 510px) {
  .content-wrapper {
    padding: 20px;
  }
}
.content-wrapper-header {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png"), linear-gradient(to right top, #cf4af3, #e73bd7, #f631bc, #fd31a2, #ff3a8b, #ff4b78, #ff5e68, #ff705c, #ff8c51, #ffaa49, #ffc848, #ffe652);
  background-image: linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0));;
  border-radius: 14px;
  padding: 20px 40px;
}
@media screen and (max-width: 415px) {
  .content-wrapper-header {
    padding: 20px;
    flex-direction: column;
  }
}
.content-wrapper.overlay {
  pointer-events: none;
  transition: 0.3s;
  /* background-color: var(--overlay-bg); */
}
.img-content {
  font-weight: 500;
  font-size: 24px;
  display: flex;
  align-items: center;
  margin: 0;
}
.img-content svg, .img-content img {
  width: 28px;
  margin-right: 14px;
}
.img-content img {
  width: 50px;
  margin-right: 14px;
}

.content-text {
  font-weight: 400;
  font-size: 14px;
  margin-top: 16px;
  line-height: 1.7em;
  color: #ebecec;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.content-wrapper-context {
  max-width: 350px;
  min-width: 50%;
}

.content-button {
  background-color: #3a6df0;
  border: none;
  padding: 8px 26px;
  color: #fff;
  border-radius: 20px;
  margin-top: 16px;
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;
      /* background-color: #dc2626; */
    border: 1px solid #fff;
}

.content-wrapper-img {
      width: 50%;
  -o-object-fit: cover;
     object-fit: cover;
  /* margin-top: -25px; */
  -o-object-position: center;
     object-position: center;
}
@media screen and (max-width: 570px) {  
  .content-wrapper-img {
    width: 50%;
    -o-object-fit: cover;
    object-fit: cover;
    margin-top: 25px;
    -o-object-position: center;
    object-position: center;
  }
  .content-wrapper-img {
    width: 110px;
    width: 100%;
  }
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
@media screen and (max-width: 480px) {
  .button-wrapper {
    width: auto;
  }
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

.apps-card {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: calc(100% + 20px);
}

.app-card {
  display: flex;
  flex-direction: column;
  width: calc(33.3% - 20px);
  font-size: 16px;
  background-color: var(--content-bg);
  border-radius: 14px;
  border: 1px solid var(--theme-bg-color);
  padding: 20px;
  cursor: pointer;
  transition: 0.3s ease;
}
.app-card:hover {
  transform: scale(1.02);
  background-color: var(--theme-bg-color);
}
.app-card svg, .app-card img {
  width: 28px;
  border-radius: 6px;
  margin-right: 12px;
  flex-shrink: 0;
}
.app-card + .app-card {
  margin-left: 20px;
}
.app-card span {
  display: flex;
  align-items: center;
}
.app-card__subtext {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6em;
  margin-top: 20px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 20px;
}
.app-card-buttons {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-top: 16px;
}
@media screen and (max-width: 1110px) {
  .app-card {
    width: calc(50% - 20px);
  }
  .app-card:last-child {
    margin-top: 20px;
    margin-left: 0px;
  }
}
@media screen and (max-width: 565px) {
  .app-card {
    width: calc(100% - 20px);
    margin-top: 20px;
  }
  .app-card + .app-card {
    margin-left: 0;
  }
}

::-webkit-scrollbar {
  width: 6px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-bg);
  border-radius: 10px;
}
</style>