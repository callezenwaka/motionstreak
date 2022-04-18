<template>
  <div class="fund">
    <Header></Header>
    <div class="fund--wrapper">
      <div class="main-container-wrapper">
        <div class="main-container">
          <div class="home__container">
            <div class="home__main-view">
              <div class="menu-bar">
                <button class="connected-status-indicator">
                  <div
                    class="
                      color-indicator
                      color-indicator--color-ui-4
                      color-indicator--size-sm
                    "
                  >
                    <span class="color-indicator__inner-circle"></span>
                  </div>
                  <div class="connected-status-indicator__text">Not connected</div>
                </button>
                <div class="selected-account">
                  <div class="selected-account__tooltip-wrapper">
                    <div
                      class=""
                      tabindex="0"
                      data-tooltipped=""
                      aria-describedby="tippy-tooltip-1"
                      data-original-title="Copy to clipboard"
                      style="display: inline"
                    >
                      <button class="selected-account__clickable">
                        <div class="selected-account__name">Account 1</div>
                        <div class="selected-account__address">
                          0xEbA...4325
                          <div class="selected-account__copy">
                            <svg
                              width="11"
                              height="11"
                              viewBox="0 0 11 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0 0H1H9V1H1V9H0V0ZM2 2H11V11H2V2ZM3 3H10V10H3V3Z"
                                fill="#989a9b"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  class="fas fa-ellipsis-v menu-bar__account-options"
                  data-testid="account-options-menu-button"
                  title="Account Options"
                ></button>
              </div>
              <div class="home__balance-wrapper">
                <div class="wallet-overview">
                  <div class="wallet-overview__balance">
                    <img
                      class="identicon identicon__image-border"
                      src="@/assets/eth_logo.svg"
                      alt=""
                      style="height: 32px; width: 32px; border-radius: 16px"
                    />
                    <div>
                      <div title="" class="" tabindex="0" style="display: inline">
                        <div class="eth-overview__balance">
                          <div class="eth-overview__primary-container">
                            <div
                              class="
                                currency-display-component
                                eth-overview__primary-balance
                              "
                              data-testid="eth-overview__primary-currency"
                            >
                              <span class="currency-display-component__text">0</span
                              ><span class="currency-display-component__suffix"
                                >ETH</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="wallet-overview__buttons">
                    <button class="icon-button eth-overview__button">
                      <div class="icon-button__circle">
                        <svg
                          width="17"
                          height="21"
                          viewBox="0 0 17 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.62829 14.3216C8.65369 14.2947 8.67756 14.2664 8.69978 14.2368L12.8311 10.1286C13.0886 9.87975 13.1913 9.51233 13.1 9.16703C13.0087 8.82174 12.7375 8.55207 12.3903 8.46129C12.0431 8.37051 11.6736 8.47268 11.4233 8.72869L8.89913 11.2387L8.89913 1.3293C8.90647 0.970874 8.71837 0.636511 8.40739 0.455161C8.0964 0.273811 7.71112 0.27381 7.40014 0.45516C7.08915 0.636511 6.90105 0.970873 6.90839 1.3293L6.90839 11.2387L4.38422 8.72869C4.13396 8.47268 3.76446 8.37051 3.41722 8.46129C3.06998 8.55207 2.79879 8.82174 2.7075 9.16703C2.61621 9.51233 2.71896 9.87975 2.97641 10.1286L7.11049 14.2395C7.28724 14.4717 7.55784 14.6148 7.85026 14.6306C8.14268 14.6464 8.42727 14.5333 8.62829 14.3216Z"
                            fill="white"
                          ></path>
                          <rect
                            x="0.260986"
                            y="15.75"
                            width="15.8387"
                            height="2.25"
                            rx="1"
                            fill="white"
                          ></rect>
                        </svg>
                      </div>
                      <span>Buy</span></button
                    ><button
                      class="icon-button eth-overview__button"
                      data-testid="eth-overview-send"
                    >
                      <div class="icon-button__circle">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.6827 0.889329C13.6458 0.890495 13.609 0.893722 13.5725 0.898996H7.76263C7.40564 0.893947 7.07358 1.08151 6.89361 1.38986C6.71364 1.69821 6.71364 2.07958 6.89361 2.38793C7.07358 2.69628 7.40564 2.88384 7.76263 2.87879H11.3124L1.12335 13.0678C0.864749 13.3161 0.760577 13.6848 0.851011 14.0315C0.941446 14.3786 1.21235 14.6495 1.55926 14.7399C1.90616 14.8303 2.27485 14.7262 2.52313 14.4676L12.7121 4.27857V7.82829C12.7071 8.18528 12.8946 8.51734 13.203 8.69731C13.5113 8.87728 13.8927 8.87728 14.2011 8.69731C14.5094 8.51734 14.697 8.18528 14.6919 7.82829V2.01457C14.7318 1.7261 14.6427 1.43469 14.4483 1.2179C14.2538 1.00111 13.9738 0.880924 13.6827 0.889329Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <span>Send</span></button
                    ><button
                      class="icon-button eth-overview__button icon-button--disabled"
                      disabled=""
                    >
                      <div>
                        <div
                          class=""
                          tabindex="0"
                          data-tooltipped=""
                          aria-describedby="tippy-tooltip-2"
                          data-original-title="Unavailable on this network"
                          style="display: inline"
                        >
                          <div class="icon-button__circle">
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.1714 9.66035V12.3786H4.68253C4.51685 12.3786 4.38253 12.2443 4.38253 12.0786V10.5478C4.38253 10.1888 3.94605 10.0116 3.69574 10.269L0.978328 13.0641C0.827392 13.2193 0.827392 13.4665 0.978328 13.6217L3.69573 16.4168C3.94604 16.6742 4.38253 16.497 4.38253 16.1379V14.6072C4.38253 14.4415 4.51685 14.3072 4.68253 14.3072H14.9992H15.0492V14.2572V9.66035C15.0492 9.14182 14.6288 8.72146 14.1103 8.72146C13.5918 8.72146 13.1714 9.14182 13.1714 9.66035ZM2.55476 2.55003H2.50476V2.60003V7.19686C2.50476 7.71539 2.92511 8.13575 3.44364 8.13575C3.96218 8.13575 4.38253 7.71539 4.38253 7.19686V4.70619C4.38253 4.5805 4.48443 4.47861 4.61012 4.47861H12.8714C13.0371 4.47861 13.1714 4.61292 13.1714 4.77861V6.30937C13.1714 6.66845 13.6079 6.84566 13.8582 6.5882L16.5756 3.79315C16.7266 3.6379 16.7266 3.39074 16.5756 3.23549L13.8582 0.440443C13.6079 0.182981 13.1714 0.360188 13.1714 0.719273V2.25004C13.1714 2.41572 13.0371 2.55003 12.8714 2.55003H2.55476Z"
                                fill="white"
                                stroke="white"
                                stroke-width="0.1"
                              ></path>
                            </svg>
                          </div>
                          <span>Swap</span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div class="tabs">
                <ul class="tabs__list home__tabs">
                  <li
                    class="tab home__tab tab--active home__tab--active"
                    data-testid="home__asset-tab"
                  >
                    <button>Assets</button>
                  </li>
                  <li class="tab home__tab" data-testid="home__activity-tab">
                    <button>Activity</button>
                  </li>
                </ul>
                <div class="tabs__content">
                  <div
                    class="list-item asset-list-item list-item--single-content-row"
                    data-testid="wallet-balance"
                    role="button"
                    tabindex="0"
                  >
                    <div class="list-item__icon">
                      <img
                        class="identicon identicon__image-border"
                        src="@/assets/eth_logo.svg"
                        alt="0 ETH"
                        style="height: 32px; width: 32px; border-radius: 16px"
                      />
                    </div>
                    <div class="list-item__heading">
                      <button class="asset-list-item__token-button" title="0 ETH">
                        <h2>
                          <span class="asset-list-item__token-value">0</span
                          ><span class="asset-list-item__token-symbol">ETH</span>
                        </h2>
                      </button>
                    </div>
                    <div class="list-item__right-content">
                      <i
                        class="fas fa-chevron-right asset-list-item__chevron-right"
                      ></i>
                    </div>
                  </div>
                  <div style=""></div>
                  <div class="box box--margin-top-4 box--flex-direction-row">
                    <div
                      class="
                        box
                        box--display-flex
                        box--justify-content-center
                        box--flex-direction-row
                      "
                    >
                      <h6
                        class="
                          box
                          box--margin-top-1
                          box--margin-right-0
                          box--margin-bottom-1
                          box--margin-left-0
                          box--flex-direction-row
                          typography
                          typography--h6
                          typography--weight-normal
                          typography--style-normal
                          typography--color-ui-4
                        "
                      >
                        Don't see your token?
                      </h6>
                    </div>
                    <div
                      class="
                        box
                        import-token-link
                        box--flex-direction-row box--text-align-center
                      "
                    >
                      <a
                        class="button btn-link import-token-link__link"
                        role="button"
                        tabindex="0"
                        >Import tokens</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="home__support">
                <span>
                  Need help? Contact
                  <a
                    href="https://support.metamask.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    >MetaMask Support</a
                  >
                </span>
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
    background: #f7f7f7;
}
@media screen and (max-width: 575px){
.fund--wrapper {
    background-color: var(--white);
}
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
    --neutral-black: var(--Black-100);
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
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
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
.main-container-wrapper {
    display: flex;
    justify-content: center;
    flex: 1 0 auto;
    min-height: 0;
    width: 100%;
}
  @media screen and (max-width: 575px){
.main-container-wrapper {
    flex: 1;
}
 }
.main-container {
    z-index: 18;
}
 @media screen and (max-width: 575px)
{
  .main-container {
    width: 100%;
    overflow-y: auto;
    background-color: var(--white);
}
}
.home__container {
    display: flex;
    min-height: 100%;
}
.home__main-view {
    flex: 1 1 66.5%;
    background: var(--white);
    min-width: 0;
    display: flex;
    flex-direction: column;
}
.menu-bar {
    display: grid;
    grid-template-columns: 30% minmax(30%, 1fr) 30%;
    -webkit-column-gap: 5px;
    -moz-column-gap: 5px;
    column-gap: 5px;
    padding: 0 8px;
    border-bottom: 1px solid var(--Grey-100);
    height: 64px;
}
.connected-status-indicator {
    display: flex;
    align-items: center;
    place-self: center start;
    background: none;
    font-size: inherit;
    padding: 8px;
    border-radius: 100px;
}
button {
    border-style: none;
    cursor: pointer;
}
.color-indicator--color-ui-4 {
    border-color: var(--ui-4);
}

.color-indicator--size-sm {
    height: 8px;
    width: 8px;
    border-radius: 4px;
}
.color-indicator {
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
}
.color-indicator__inner-circle {
    background-color: transparent;
}
.color-indicator--size-sm .color-indicator__inner-circle {
    border-radius: 4px;
    height: 4px;
    width: 4px;
}
.connected-status-indicator__text {
    font-size: 0.625rem;
    font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
    line-height: 140%;
    font-style: normal;
    font-weight: normal;
    color: var(--Grey-500);
    margin-left: 6px;
    white-space: nowrap;
}
.selected-account {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
}
.menu-bar .selected-account {
    grid-column: 2/span 1;
    place-self: center stretch;
}
.selected-account__tooltip-wrapper {
    width: 100%;
}
button {
    border-style: none;
    cursor: pointer;
}
.selected-account__clickable {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 4px 0;
    padding: 6px 1px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    background-color: unset;
}
.selected-account__name {
    font-size: 1rem;
    font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
    line-height: 140%;
    font-style: normal;
    font-weight: normal;
    width: 100%;
    font-weight: 500;
    color: var(--black);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    margin-bottom: 4px;
}
.selected-account__address {
    font-size: 0.75rem;
    font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
    line-height: 140%;
    font-style: normal;
    font-weight: normal;
    color: #989a9b;
    display: flex;
    align-items: center;
}
.selected-account__copy {
    height: 13px;
    display: inline-block;
    -webkit-margin-start: 3px;
    margin-inline-start: 3px;
}
.menu-bar .menu-bar__account-options {
    background: none;
    font-size: inherit;
    padding: 0 8px 0 5px;
    place-self: center end;
}
.fa, .fas {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
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
.fa-ellipsis-v:before {
    content: "";
}
.home__balance-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex: 0 0 auto;
}
.wallet-overview {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    min-height: 209px;
    min-width: 0;
    padding-top: 10px;
    flex-direction: column;
    width: 100%;
}
.wallet-overview__balance {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.identicon {
    direction: ltr;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
.identicon__image-border {
    border: 1px solid var(--alto);
    background: var(--white);
}
.eth-overview__balance {
    display: flex;
    flex-direction: column;
    min-width: 0;
    position: relative;
    align-items: center;
    margin: 16px 0;
    padding: 0 16px;
    max-width: 100%;
}
.eth-overview__primary-container {
    display: flex;
}
.currency-display-component {
    display: flex;
    align-items: center;
}

.eth-overview__primary-balance {
    font-size: 2rem;
    font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
    line-height: 140%;
    font-style: normal;
    font-weight: normal;
    color: var(--black);
    width: 100%;
    justify-content: center;
}
.currency-display-component__text {
    direction: ltr;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.currency-display-component__suffix {
    padding-left: 4px;
}
.wallet-overview__buttons {
    display: flex;
    flex-direction: row;
    height: 68px;
    margin-bottom: 24px;
}
.icon-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: unset;
    text-align: center;
    font-size: 0.75rem;
    font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
    line-height: 140%;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    cursor: pointer;
    color: var(--Blue-500);
}
.eth-overview__button {
    margin-right: 24px;
}
.icon-button__circle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 36px;
    background: #037dd6;
    border-radius: 18px;
    margin-top: 6px;
    margin-bottom: 5px;
}
.icon-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: unset;
    text-align: center;
    font-size: 0.75rem;
    font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
    line-height: 140%;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    cursor: pointer;
    color: var(--Blue-500);
}
.eth-overview__button {
    margin-right: 24px;
}
.icon-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: unset;
    text-align: center;
    font-size: 0.75rem;
    font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
    line-height: 140%;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    cursor: pointer;
    color: var(--Blue-500);
}
.icon-button--disabled {
    opacity: 0.3;
    cursor: auto;
}
button[disabled], input[type=submit][disabled] {
    cursor: not-allowed;
    opacity: 0.5;
}
.eth-overview__button:last-of-type {
    margin-right: 0;
}
.icon-button__circle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 36px;
    background: #037dd6;
    border-radius: 18px;
    margin-top: 6px;
    margin-bottom: 5px;
}
.tabs {
    flex-grow: 1;
    -moz-transform: translateZ(0);
}
.home__main-view .home__tabs {
    border: none;
    box-shadow: 0 3px 4px rgb(135 134 134 / 16%);
}
.tabs__list {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid var(--geyser);
    background-color: var(--white);
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
}
ol, ul {
    list-style: none;
}
.home__main-view .home__tab--active {
    color: var(--Blue-500);
}

.home__main-view .home__tab {
    font-size: 0.875rem;
    font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
    line-height: 140%;
    font-style: normal;
    font-weight: normal;
    flex-grow: 1;
    color: var(--Grey-500);
    font-weight: 500;
}
.tab--active {
    color: var(--black);
    border-bottom: 2px solid var(--primary-blue);
}
.home__main-view .home__tab button {
    padding: 16px 8px;
}

.tab button {
    cursor: pointer;
    padding: 8px;
    min-width: 50px;
    text-align: center;
    display: block;
    width: 100%;
    background-color: unset;
    font-size: unset;
    color: unset;
}
.list-item--single-content-row {
    grid-template-areas: "icon head head head head head head head right right right right";
    align-items: center;
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
    border-top: 1px solid var(--mercury);
    border-bottom: 1px solid var(--mercury);
    color: var(--Black-100);
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

.identicon__image-border {
    border: 1px solid var(--alto);
    background: var(--white);
}
.identicon {
    direction: ltr;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
.asset-list-item .list-item__heading {
    max-width: 100%;
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
.list-item__heading button {
    background: unset;
    font-size: unset;
    -webkit-padding-start: 0;
    padding-inline-start: 0;
}
.asset-list-item__token-button {
    -webkit-padding-start: 0;
    padding-inline-start: 0;
    min-width: 0;
    min-height: 0;
    text-align: start;
}
.asset-list-item__token-button h2 {
    display: flex;
}
.asset-list-item__token-button span {
    padding-right: 5px;
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
.asset-list-item .list-item__right-content {
    align-self: center;
}
.list-item__right-content {
    grid-area: right;
    text-align: right;
    align-items: flex-end;
    overflow: hidden;
    white-space: nowrap;
}
.fa, .fas {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
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
.fa-chevron-right:before {
    content: "";
}
.box--flex-direction-row {
    flex-direction: row;
}
.box--margin-top-4 {
    margin-top: 16px;
}
.box--flex-direction-row {
    flex-direction: row;
}

.box--justify-content-center {
    justify-content: center;
}
.box--display-flex {
    display: flex;
}
.typography--style-normal {
    font-style: normal;
}

.typography--weight-normal {
    font-weight: normal;
}
.typography--color-ui-4 {
    color: var(--ui-4);
}
.typography--h6 {
    font-size: 0.875rem;
    font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
    line-height: 140%;
    font-style: normal;
    font-weight: normal;
}
.typography {
    font-size: 1rem;
    font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
    line-height: 140%;
    font-style: normal;
    font-weight: normal;
}
.box--flex-direction-row {
    flex-direction: row;
}
.box--margin-bottom-1 {
    margin-bottom: 4px;
}
.box--margin-top-1 {
    margin-top: 4px;
}
.box--margin-left-0 {
    margin-left: 0px;
}
.box--margin-right-0 {
    margin-right: 0px;
}
.box--text-align-center {
    text-align: center;
}
.box--flex-direction-row {
    flex-direction: row;
}
.import-token-link .import-token-link__link {
    font-size: 0.875rem;
    font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
    line-height: 140%;
    font-style: normal;
    font-weight: normal;
    display: inline;
    padding: 0 5px 16px;
}

.btn-link {
    font-size: 1.125rem;
    font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
    line-height: 140%;
    font-style: normal;
    font-weight: normal;
    color: var(--Blue-500);
    cursor: pointer;
    background-color: transparent;
}
.button {
    --hover-secondary: #b0d7f2;
    --hover-default: #b3b3b3;
    --hover-confirm: #0372c3;
    --hover-red: #feb6bf;
    --hover-red-primary: #c72837;
    --hover-orange: #ffd3b5;
    --warning-light-orange: #f8b588;
    font-size: 0.875rem;
    font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
    line-height: 140%;
    font-style: normal;
    font-weight: normal;
    font-weight: 500;
    padding: 0.75rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 6px;
    width: 100%;
    transition: border-color 0.3s ease, background-color 0.3s ease;
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
    border-top: 1px solid var(--mercury);
    border-bottom: 1px solid var(--mercury);
    color: var(--Black-100);
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
    color: var(--Grey-500);
    margin-top: 4px;
}
.transaction-list-item .list-item__subheading > h3 {
    overflow: visible;
    display: flex;
    white-space: nowrap;
    text-overflow: initial;
}
.list-item__subheading > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.transaction-status--confirmed {
    color: var(--success-3);
}
.transaction-status {
    display: inline;
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
.transaction-list-item__pending-actions:empty {
    padding-top: 0;
}
.transaction-list-item__pending-actions {
    padding-top: 12px;
    display: flex;
}
.list-item__right-content {
    grid-area: right;
    text-align: right;
    align-items: flex-end;
    overflow: hidden;
    white-space: nowrap;
}
.transaction-list-item__primary-currency {
    color: var(--Black-100);
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
    color: var(--Grey-500);
}





.home__support {
    padding: 10px 0 20px 0;
    text-align: center;
}
.home__support a {
    color: var(--primary-1);
}
a {
    text-decoration: none;
    color: inherit;
}

</style>