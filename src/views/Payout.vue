<script setup>
import { watch, ref } from "vue";
import { useCustomerStore } from "../stores/customer";
import RebillyInstruments from "@rebilly/instruments";

const customerStore = useCustomerStore();
const amount = ref(null);
const payoutRequest = ref(null);
const isLoading = ref(false);

const createPayoutRequest = async () => {
  const requestPayoutData = {
    websiteId: import.meta.env.VITE_WEBSITE_ID,
    customerId: import.meta.env.VITE_CUSTOMER_ID,
    currency: "USD",
    amount: amount.value,
  };
  console.log("requestPayoutData", requestPayoutData);
  isLoading.value = true;
  try {
    const response = await fetch("/.netlify/functions/getPayoutRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestPayoutData),
    });

    const { fields: request } = await response.json();
    payoutRequest.value = request;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};

const requestPayout = () => {
  if (amount.value && customerStore.customerToken) {
    createPayoutRequest();
  }
};

watch(payoutRequest, () => {
  if (payoutRequest.value) {
    // Mount Rebilly Instruments
    RebillyInstruments.mount({
      apiMode: "sandbox",
      payout: {
        payoutRequestId: payoutRequest.value.id,
      },
      jwt: customerStore.customerToken,
      theme: {
        colorPrimary: "#d36135", // Brand color
        colorText: "#fff",
        colorDanger: "#cd5c5c",
        colorBackground: "#283845", // Website background color
        buttonColorText: "#fff",
        labels: "floating",
        fontSizeBase: "13px",
      },
    });
    // Optional
    RebillyInstruments.on("instrument-ready", (instrument) => {
      console.info("instrument-ready", instrument);
    });
    RebillyInstruments.on("purchase-completed", (purchase) => {
      console.info("purchase-completed", purchase);
    });
  }
});
</script>

<template>
  <div class="strategy">
    <h4>Make a payout</h4>
    <form class="strategy__form" v-if="!payoutRequest">
      <label for="currency">Amount</label>

      <input type="number" v-model="amount" />

      <button class="styled-button" @click="requestPayout" type="button">
        Request payout
      </button>
    </form>
    <div v-if="isLoading" style="margin-top: 40px">Loading...</div>
    <div class="rebilly-instruments-summary"></div>
    <div class="rebilly-instruments"></div>
  </div>
</template>

<style scoped lang="scss">
.strategy {
  width: 100%;
  max-width: 700px;
  margin: 40px auto;
  color: #fff;
  font-size: 1rem;
  &__form {
    margin-bottom: 50px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    label {
      display: block;
      margin-bottom: 10px;
    }

    select,
    input {
      width: 100px;
      padding: 10px;
      font-size: 1rem;
      border: 1px solid #fff;
      border-radius: 5px;
      background-color: transparent;
      color: #fff;
      &:focus {
        outline: none;
        border-color: #d36135;
      }
    }
  }

  h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-left: auto;
    color: #fff;
    margin-bottom: 50px;
    text-align: center;
  }
}
</style>
