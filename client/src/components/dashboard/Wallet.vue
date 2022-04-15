<template>
  <div class="wallet">
    <h1>Profile Wallet</h1>
    <div class="wallet--wrapper">
      <div class="wallet-buttons">
        <button type="button" class="wallet-button" @click="handleTransactions('isSending')">Send</button>
        <button type="button" class="wallet-button" @click="handleTransactions('isBuying')">Buy</button>
        <button type="button" class="wallet-button" @click="handleTransactions('isRecords')">Activities</button>
      </div>
      <div class="wallet--items">
        <div class="wallet--item">
          <label for="receiver">
            <input type="text" name="receiver" id="receiver" placeholder="Add receiver address">
          </label>
          <label for="amount">
            <input type="number" name="amount" id="amount" placeholder="Add amount">
          </label>
          <button type="button">Confirm</button>
        </div>
        <div class="wallet--item">
          <label for="sender">
            <input type="text" name="sender" id="sender" placeholder="Add sender address">
          </label>
          <label for="amount">
            <input type="number" name="amount" id="amount" placeholder="Add amount">
          </label>
          <button type="button">Confirm</button>
        </div>
        <div class="wallet--item">
          <label for="receiver">
            <input type="text" name="receiver" id="receiver">
          </label>
          <label for="amount">
            <input type="number" name="amount" id="amount">
          </label>
          <button type="button">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'WalletView',
  components: {
    // HelloWorld,
  },
  setup() {
     type Pages = {
      isBuying: boolean;
      isSending: boolean;
      isRecord: boolean;
    };
    const pages:Pages = reactive({
      isBuying: false,
      isSending: false,
      isRecord: true,
    });
    const handleTransactions = async (current: string) => {
      if (pages[current as keyof Pages]) return;
      else {
        for (let page in pages) {
          pages[page as keyof Pages] = page === current? true : false;
        }
      }
    };

    return {
      handleTransactions,
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
.wallet-buttons {
  align-items: center;
    justify-content: center;
    align-content: center;
    /* gap: 1rem; */
  display: flex;
}
.wallet-button {
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
.wallet-button:not(:first-child),
.wallet-button:not(:last-child) {
  /* border-right: 1px solid #900;
  border-left: 1px solid #900; */
}
/* .wallet-button:not(:last-child) {
  color: green;
  border-right: 1px solid #900;
  border-left: 1px solid #900;
} */
.wallet-button:not(:nth-child(2n+1)) {
  color: #fff;
  border-right: 1px solid;
  border-left: 1px solid;
}
.wallet--items {
  margin-top: 32px;
}
.wallet--item {
  display: flex;
  flex-direction: column;
}
.wallet--item button {
  width: fit-content;
    align-self: center;
  background-color: #3a6df0;
  border: none;
  padding: 8px 26px;
  color: #fff;
  border-radius: 20px;
  margin-top: 16px;
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;
}
</style>