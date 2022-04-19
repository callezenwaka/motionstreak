<template>
  <div class="fund">
    <Header></Header>
    <div class="fund--wrapper">
      <div class="asset" data-testid="wallet-balance" role="button" tabindex="0">
        <div class="asset--icon">
          <img class="asset--eth" src="@/assets/eth_logo.svg" alt="0 ETH" style="height: 32px; width: 32px; border-radius: 16px;">
        </div>
        <div class="list-item__heading">
          <button class="asset-list-item__token-button" title="0 ETH">
            <h2>
              <span class="asset-list-item__token-value">0</span>
              <span class="asset-list-item__token-symbol">ETH</span>
            </h2>
          </button>
        </div>
        <div class="list-item__right-content">
          <i class="fas fa-chevron-right asset-list-item__chevron-right"></i>
        </div>
      </div>
      <div class="transaction-list">
        <div class="transaction-list__transactions">
          <div class="transaction-list__completed-transactions">
            <div class="list-item transaction-list-item" role="button" tabindex="0">
              <div class="list-item__icon">
                <svg class="rotate" width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="#2F80ED"></rect>
                  <path d="M18.5851 9.88921C18.5586 9.89005 18.5321 9.89238 18.5057 9.89618H14.3207C14.0635 9.89254 13.8243 10.0276 13.6947 10.2497C13.565 10.4719 13.565 10.7466 13.6947 10.9687C13.8243 11.1908 14.0635 11.3259 14.3207 11.3222H16.8777L9.53811 18.6614C9.35182 18.8402 9.27679 19.1058 9.34193 19.3557C9.40707 19.6056 9.60222 19.8007 9.85211 19.8658C10.102 19.931 10.3676 19.8559 10.5464 19.6697L17.886 12.3305V14.8874C17.8823 15.1445 18.0175 15.3837 18.2396 15.5133C18.4617 15.643 18.7364 15.643 18.9585 15.5133C19.1806 15.3837 19.3158 15.1445 19.3121 14.8874V10.6997C19.3409 10.4919 19.2767 10.282 19.1366 10.1259C18.9965 9.96973 18.7948 9.88316 18.5851 9.88921Z" fill="#2F80ED"></path>
                </svg>
                <!-- <svg class="rotate" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" stroke="#2F80ED"></rect>
                  <path d="M14.3465 17.3611C14.3661 17.3402 14.3846 17.3181 14.4018 17.2952L17.597 14.0999C17.7961 13.9063 17.8756 13.6206 17.805 13.352C17.7344 13.0834 17.5246 12.8737 17.2561 12.8031C16.9875 12.7325 16.7017 12.812 16.5082 13.0111L14.5559 14.9633L14.5559 7.25598C14.5616 6.97721 14.4161 6.71715 14.1756 6.5761C13.9351 6.43505 13.6371 6.43505 13.3966 6.5761C13.1561 6.71715 13.0106 6.97721 13.0163 7.25598L13.0163 14.9633L11.064 13.0111C10.8705 12.812 10.5847 12.7325 10.3161 12.8031C10.0476 12.8737 9.83782 13.0834 9.76721 13.352C9.69661 13.6206 9.77608 13.9063 9.97519 14.0999L13.1726 17.2973C13.3093 17.4779 13.5186 17.5891 13.7447 17.6014C13.9709 17.6137 14.191 17.5258 14.3465 17.3611Z" fill="#2F80ED"></path>
                  <rect x="7.875" y="19.25" width="12.25" height="1.75" rx="0.875" fill="#2F80ED"></rect>
                </svg> -->
              </div>
              <div class="list-item__heading">
                <h2 class="list-item__title">Receive</h2>
              </div>
              <div class="list-item__subheading">
                <h3>
                  <div class="transaction-status transaction-status--confirmed">Apr 12</div>
                  <span class="transaction-list-item__address" title="From: 0x574...249b">From: 0x574...249b</span>
                </h3>
              </div>
              <div class="list-item__actions">
                <div class="transaction-list-item__pending-actions"></div>
              </div>
              <div class="list-item__right-content">
                <h2 title="0.001 ETH" class="transaction-list-item__primary-currency">0.001 ETH</h2>
                <h3 class="transaction-list-item__secondary-currency">0.001 ETH</h3>
              </div>
            </div>
            <div class="list-item transaction-list-item" role="button" tabindex="0">
              <div class="list-item__icon">
                <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="#2F80ED"></rect>
                  <path d="M18.5851 9.88921C18.5586 9.89005 18.5321 9.89238 18.5057 9.89618H14.3207C14.0635 9.89254 13.8243 10.0276 13.6947 10.2497C13.565 10.4719 13.565 10.7466 13.6947 10.9687C13.8243 11.1908 14.0635 11.3259 14.3207 11.3222H16.8777L9.53811 18.6614C9.35182 18.8402 9.27679 19.1058 9.34193 19.3557C9.40707 19.6056 9.60222 19.8007 9.85211 19.8658C10.102 19.931 10.3676 19.8559 10.5464 19.6697L17.886 12.3305V14.8874C17.8823 15.1445 18.0175 15.3837 18.2396 15.5133C18.4617 15.643 18.7364 15.643 18.9585 15.5133C19.1806 15.3837 19.3158 15.1445 19.3121 14.8874V10.6997C19.3409 10.4919 19.2767 10.282 19.1366 10.1259C18.9965 9.96973 18.7948 9.88316 18.5851 9.88921Z" fill="#2F80ED"></path>
                </svg>
              </div>
              <div class="list-item__heading">
                <h2 class="list-item__title">Send</h2>
              </div>
              <div class="list-item__subheading">
                <h3>
                  <div class="transaction-status transaction-status--confirmed">Apr 14</div>
                  <span class="transaction-list-item__address" title="To: 0x5ca...87fe">To: 0x5ca...87fe</span>
                </h3>
              </div>
              <div class="list-item__actions">
                <div class="transaction-list-item__pending-actions"></div>
              </div>
              <div class="list-item__right-content">
                <h2 title="-0.24 ETH" class="transaction-list-item__primary-currency">-0.24 ETH</h2>
                <h3 class="transaction-list-item__secondary-currency">-0.24 ETH</h3>
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
  name: "FundView",
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
/* fund */
.fund--wrapper {
    overflow-x: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* background: #f7f7f7; */
}
@media screen and (max-width: 575px){
.fund--wrapper {
    /* background-color: #ffffff; */
}
}
.rotate {
  transform: rotate(90deg);
}
* { 
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: inherit;
  font-style: inherit;
  font-variant: inherit;
  font-size: inherit;
  line-height: inherit;
  vertical-align: baseline;
}
:root {
    --white: #fff;
    --black: #000;
    --orange: #ffa500;
    --red: #f00;
    --gray: #808080;
    --gallery: #efefef;
    --wild-sand: #f6f6f6;
    --dusty-gray: #9b9b9b;
    --alto: #dedede;
    --alabaster: #fafafa;
    --silver-chalice: #aeaeae;
    --tundora: #4d4d4d;
    --nile-blue: #1b344d;
    --scorpion: #5d5d5d;
    --silver: #cdcdcd;
    --caribbean-green: #02c9b1;
    --monzo: #d0021b;
    --crimson: #e91550;
    --blue-lagoon: #038789;
    --purple: #690496;
    --tulip-tree: #ebb33f;
    --malibu-blue: #b8cbd8;
    --athens-grey: #e9edf0;
    --geyser: #d2d8dd;
    --manatee: #93949d;
    --spindle: #c7ddec;
    --mid-gray: #5b5d67;
    --cape-cod: #38393a;
    --dodger-blue: #3099f2;
    --ecstasy: #f7861c;
    --linen: #fdf4f4;
    --oslo-gray: #8c8e94;
    --polar: #fafcfe;
    --blizzard-blue: #bfdef3;
    --mischka: #dddee9;
    --web-orange: #f2a202;
    --mercury: #e5e5e5;
}
:root {
    --Blue-000: #eaf6ff;
    --Blue-100: #a7d9fe;
    --Blue-200: #75c4fd;
    --Blue-300: #43aefc;
    --Blue-400: #1098fc;
    --Blue-500: #037dd6;
    --Blue-600: #0260a4;
    --Blue-700: #024272;
    --Blue-800: #01253f;
    --Blue-900: #00080d;
    --Grey-000: #f2f3f4;
    --Grey-100: #d6d9dc;
    --Grey-200: #bbc0c5;
    --Grey-300: #9fa6ae;
    --Grey-400: #848c96;
    --Grey-500: #6a737d;
    --Grey-600: #535a61;
    --Grey-700: #3b4046;
    --Grey-800: #24272a;
    --Grey-900: #141618;
    --Green-000: #f3fcf5;
    --Green-100: #d6ffdf;
    --Green-200: #afecbd;
    --Green-300: #86e29b;
    --Green-400: #5dd879;
    --Green-500: #28a745;
    --Green-600: #1e7e34;
    --Green-700: #145523;
    --Green-800: #0a2c12;
    --Green-900: #041007;
    --Red-000: #fcf2f3;
    --Red-100: #f7d5d8;
    --Red-200: #f1b9be;
    --Red-300: #e88f97;
    --Red-400: #e06470;
    --Red-500: #d73a49;
    --Red-600: #b92534;
    --Red-700: #8e1d28;
    --Red-800: #64141c;
    --Red-900: #3a0c10;
    --Orange-000: #fef5ef;
    --Orange-100: #fde2cf;
    --Orange-200: #fbc49d;
    --Orange-300: #faa66c;
    --Orange-400: #f8883b;
    --Orange-500: #f66a0a;
    --Orange-600: #c65507;
    --Orange-700: #954005;
    --Orange-800: #632b04;
    --Orange-900: #321602;
    --Yellow-000: #fefae8;
    --Yellow-100: #fefcde;
    --Yellow-500: #ffd33d;
    --Black-100: #24292e;
    --primary-blue: var(--Blue-500);
    --primary-orange: var(--Orange-500);
    --accent-yellow: var(--Yellow-500);
    --accent-green: var(--Green-500);
    --accent-red: var(--Red-500);
    --accent-purple: #6f42c1;
    --accent-pink: #ff45d8;
    --neutral-white: #fff;
    --neutral-black: #24292e;
    --neutral-grey: var(--Grey-500);
    --primary-1: #037dd6;
    --primary-2: #eaf6ff;
    --primary-3: #0260a4;
    --secondary-1: #f66a0a;
    --secondary-2: #fef5ef;
    --secondary-3: #c65507;
    --error-1: #d73a49;
    --error-2: #fcf2f3;
    --error-3: #b92534;
    --alert-1: #ffd33d;
    --alert-2: #fefcde;
    --alert-3: #f8c000;
    --success-1: #4cd964;
    --success-2: #caf4d1;
    --success-3: #219e37;
    --ui-black: #24292e;
    --ui-grey: #d6d9dc;
    --ui-white: #fff;
    --ui-1: #f2f3f4;
    --ui-2: #d6d9dc;
    --ui-3: #bbc0c5;
    --ui-4: #6a737d;
    --ui-5: #c4c4c4;
    --mainnet: #29b6af;
    --ropsten: #ff4a8d;
    --kovan: #9064ff;
    --rinkeby: #f6c343;
    --goerli: #3099f2;
    --localhost: #29b6af;
    --flask-purple: #8b45b6;
}
/* asset */
.asset {
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 86px;
  margin: 0;
  background: #fff;
  padding: 24px 16px;
  font-size: 1rem;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  color: #24292e;
  cursor: pointer;
}
.asset--icon {
    grid-area: icon;
    align-self: center;
}
.asset--eth {
    direction: ltr;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 1px solid #dedede;
    background: #ffffff;
}
.list-item__icon > * {
    margin: 0 16px 0 0;
}
.asset-list-item .list-item__heading {
    max-width: 100%;
}
.asset-list-item__token-button {
    -webkit-padding-start: 0;
    padding-inline-start: 0;
    min-width: 0;
    min-height: 0;
    text-align: start;
}
.list-item__heading button {
    background: unset;
    font-size: unset;
    -webkit-padding-start: 0;
    padding-inline-start: 0;
}
/* button */
button {
    border-style: none;
    cursor: pointer;
}
.asset-list-item__token-button h2 {
    display: flex;
}
.asset-list-item__token-value {
    flex: 1;
    padding-right: 5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
    display: block;
    overflow: hidden;
}
.asset-list-item__token-button span {
    padding-right: 5px;
}
.asset-list-item__token-button span {
    padding-right: 5px;
}
.list-item__right-content {
    grid-area: right;
    text-align: right;
    align-items: flex-end;
    overflow: hidden;
    white-space: nowrap;
}
.asset-list-item .list-item__right-content {
    align-self: center;
}
.fa, .fas, .far, .fal, .fad, .fab {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
}
.fa, .fas {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
}
.fa-chevron-right:before {
    content: "";
}



/* transactions */
.transaction-list {
    display: flex;
    flex-direction: column;
    flex: 1;
}
.transaction-list__transactions {
    flex: 1;
}
.transaction-list__completed-transactions {
    display: flex;
    flex-direction: column;
    flex: 1;
}
.list-item {
    width: 100%;
    min-height: 86px;
    margin: 0;
    background: #fff;
    padding: 24px 16px;
    font-size: 1rem;
    font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
    line-height: 140%;
    font-style: normal;
    font-weight: normal;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    color: #24292e;
    display: grid;
    grid-template-columns: 0fr repeat(11, 1fr);
    grid-template-areas:
        "icon head head head head head head head right right right right"
        "icon sub sub sub sub sub sub sub right right right right"
        ". actions actions actions actions actions actions actions right right right right";
    align-items: start;
    cursor: pointer;
}
.list-item__icon {
    grid-area: icon;
    align-self: center;
}
.list-item__icon > * {
    margin: 0 16px 0 0;
}
.list-item__heading {
    font-size: 1rem;
    font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
    line-height: 140%;
    font-style: normal;
    font-weight: normal;
    grid-area: head;
    position: relative;
    display: flex;
    align-items: center;
}
.list-item__title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.list-item__subheading {
    font-size: 0.75rem;
    font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
    line-height: 140%;
    font-style: normal;
    font-weight: normal;
    grid-area: sub;
    color: #6a737d;
    margin-top: 4px;
}
.list-item__subheading > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.transaction-list-item .list-item__subheading > h3 {
    overflow: visible;
    display: flex;
    white-space: nowrap;
    text-overflow: initial;
}
.transaction-status {
    display: inline;
}
.transaction-status--confirmed {
    color: #219e37;
}
.transaction-list-item .transaction-status::after {
    content: "·";
    margin: 0 4px;
}
.transaction-list-item__origin, .transaction-list-item__address {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.list-item__actions {
    grid-area: actions;
}
.transaction-list-item__pending-actions {
    padding-top: 12px;
    display: flex;
}
.transaction-list-item__pending-actions:empty {
    padding-top: 0;
}
.list-item__right-content {
    grid-area: right;
    text-align: right;
    align-items: flex-end;
    overflow: hidden;
    white-space: nowrap;
}
.transaction-list-item__primary-currency {
    color: #24292e;
    overflow: hidden;
    text-overflow: ellipsis;
}
.transaction-list-item__secondary-currency {
    font-size: 0.75rem;
    font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
    line-height: 140%;
    font-style: normal;
    font-weight: normal;
    margin-top: 4px;
    color: #6a737d;
}








</style>