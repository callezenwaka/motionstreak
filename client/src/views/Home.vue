<template>
  <div class="home">
    <Header></Header>
    <div class="">
      <div class="wrapper">
        <div class="main-container">
          <div class="content-wrapper">
            <div class="content-wrapper-header">
              <div class="content-wrapper-context">
                <h2 class="img-content">
                  <img src="../assets/algovault.svg" alt="" srcset="">
                  One Vault
                </h2>
                <div class="content-text">
                  Grab yourself 10 free documents from One Vault in a 30-day free
                  trial plan and find fast, secure and cheap file sharing services,
                  that will help you with your new projects.
                </div>
                <button class="content-button" @click="handleLogin">Start free trial</button>
              </div>
              <img class="content-wrapper-img" src="../assets/files.svg" alt="File" />
            </div>
            <!-- Services -->
            <div class="content-section">
              <div class="content-section-title"><h2>Our Services</h2></div>
              <div class="apps-card">
                <div class="app-card">
                  <span><img src="../assets/certificate.svg" alt="" srcset="">Certificates</span>
                  <div class="app-card__subtext">
                    The certificate validation process typically proceeds in three steps and typically takes three inputs. The first is the certificate to be validated, the second is any intermediate certificate certified by the source organization, and the third is the verification of intermediate certificate by the destination organization.
                  </div>
                  <div class="app-card-buttons">
                    <button class="content-button status-button" @click="handleLogin">Update</button>
                  </div>
                </div>
                <div class="app-card">
                  <span><img src="../assets/transcript.svg" alt="" srcset="">Transcript</span>
                  <div class="app-card__subtext">
                    The transcript validation process typically proceeds in three steps and typically takes three inputs. The first is the transcript to be validated, the second is any intermediate transcript certified by the source organization, and the third is the verification of intermediate transcript by the destination organization.
                  </div>
                  <div class="app-card-buttons">
                    <button class="content-button status-button" @click="handleLogin">Update</button>
                  </div>
                </div>
                <div class="app-card">
                  <span><img src="../assets/reference.svg" alt="" srcset="">References</span>
                  <div class="app-card__subtext">
                    The reference validation process typically proceeds in three steps and typically takes three inputs. The first is the reference to be validated, the second is any intermediate reference certified by the source organization, and the third is the verification of intermediate reference by the destination organization.
                  </div>
                  <div class="app-card-buttons">
                    <button class="content-button status-button" @click="handleLogin">Update</button>
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
import Header from "@/components/partials/Header.vue";
import { useRouter } from 'vue-router';
export default defineComponent({
  name: "HomeView",
  components: {
    Header,
  },
  setup() {
    const router = useRouter();
    const handleLogin = () => {
      router.push({ name: 'Login' });
    }

    return {
      handleLogin,
    }
  }
});
</script>

<style scoped>
/* home */
.home {
  height: 100%;
  min-height: 100vh;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 500ms linear;
}
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
.img-content img {
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
.status-button:not(.open):hover {
  color: #fff;
  border-color: #fff;
}
.content-button:not(.open):hover {
  background: #1e59f1;
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