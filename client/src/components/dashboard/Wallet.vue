<template>
  <div class="wallet">
    <h1>Profile Wallet</h1>
    <div class="wallet--wrapper">
      <div class="wallet--buttons">
        <button type="button" class="wallet--button" :class="{active: pages.isBuying}" @click="handleTransfer('isBuying')">Buy</button>
        <button type="button" class="wallet--button" :class="{active: pages.isSending}" @click="handleTransfer('isSending')">Send</button>
        <button type="button" class="wallet--button" :class="{active: pages.isHistory}" @click="handleTransfer('isHistory')">History</button>
      </div>
      <div class="wallet--items">
        <form v-if="pages.isBuying" class="wallet--item" @submit.prevent="handleReceive">
          <div class="form--item">
            <label class="form--label" for="receiver">Receiver Address: </label>
            <input class="form--input" type="text" name="receiver" id="receiver" v-model="buy.receiver" placeholder="Add receiver address">
          </div>
          <div class="form--item">
            <label class="form--label" for="amount">Amount: </label>
            <input class="form--input" type="number" name="amount" id="amount" v-model="buy.amount" placeholder="Add amount">
          </div>
          <div class="form--item">
            <button class="form--button" :class="{active: isBuying}" type="button">Confirm</button>
          </div>
        </form>
        <form v-if="pages.isSending" class="wallet--item" @submit.prevent="handleSend">
          <div class="form--item">
            <label class="form--label" for="sender">Sender Address: </label>
            <input class="form--input" type="text" name="sender" id="sender" v-model="send.sender" placeholder="Add sender address">
          </div>
          <div class="form--item">
            <label class="form--label" for="amount">Amount: </label>
            <input class="form--input" type="number" name="amount" id="amount" v-model="send.amount" placeholder="Add amount">
          </div>
          <div class="form--item">
            <button class="form--button" :class="{active: isSending}" type="button">Confirm</button>
          </div>
        </form>
        <div v-if="pages.isHistory" class="wallet--item">
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
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { computed, defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'WalletView',
  setup() {
    const buy = reactive({
      receiver: '',
      amount: 0,
    })
    const send = reactive({
      sender: '',
      amount: 0,
    })
    const isBuying = computed(() => {
      return (
        buy.receiver !== "" && 
        buy.amount !== 0
      );
    });
    const isSending = computed(() => {
      return (
        send.sender !== "" && 
        send.amount !== 0
      );
    });
    type Pages = {
      isBuying: boolean;
      isSending: boolean;
      isHistory: boolean;
    };
    const pages:Pages = reactive({
      isHistory: true,
      isBuying: false,
      isSending: false,
    });
    const handleTransfer = async (current: string) => {
      if (pages[current as keyof Pages]) return;
      else {
        for (let page in pages) {
          pages[page as keyof Pages] = page === current? true : false;
        }
      }
    };
    const handleReceive = async () => {
      return;
    };
    const handleSend = async () => {
      return;
    };

    return {
      buy,
      send,
      isBuying,
      isSending,
      pages,
      handleTransfer,
      handleReceive,
      handleSend,
    }
  }
});
</script>

<style scoped>
/* wallet */
.wallet {
  /* padding: 1rem; */
  height: 100%;
  min-height: 100vh;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 500ms linear;
}
.wallet--wrapper {
  display: flex;
  flex-direction: column;
}
.wallet--buttons {
  align-items: center;
    justify-content: center;
    align-content: center;
    /* gap: 1rem; */
  display: flex;
}
.wallet--button {
  background-color: #3a6df0;
  border: none;
  padding: 8px 26px;
  color: #fff;
  /* border-radius: 20px; */
  margin-top: 16px;
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;
}
.wallet--button:not(:nth-child(2n+1)) {
  color: #fff;
  border-right: 1px solid;
  border-left: 1px solid;
}
.wallet--button.active {
  opacity: .5;
}
.wallet--items {
  /* width: 410px; */
  width: 100%;
  margin: 0 auto;
  margin-top: 32px;
}
.wallet--item {
  display: flex;
  flex-direction: column;
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
/* button {
    border-style: none;
    cursor: pointer;
} */
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
.rotate {
  transform: rotate(90deg);
}
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
/*  */
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
.form--button.active {
  cursor: pointer;
  background-color: #0d6efd;
}
.form--button.isValid:hover {
  opacity: 0.5;
}
/* mini */
@media only screen and (min-width: 481px) {
  .wallet--items {
    width: 410px;
    margin: 0 auto;
    margin-top: 32px;
  }
}
</style>