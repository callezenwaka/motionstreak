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
          <div class="transactions">
            <div>Transaction 1</div>
            <div>Transaction 2</div>
            <div>Transaction 3</div>
            <div>Transaction 4</div>
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