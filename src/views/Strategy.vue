<script setup>
import { onMounted, watch, ref } from "vue";
import { useCustomerStore } from "../stores/customer";
import RebillyInstruments from "@rebilly/instruments";

const customerStore = useCustomerStore();
const currency = ref(null);
const depositRequest = ref(null);
const isLoading = ref(false);

const createDepositRequest = async () => {
  const requestDepositData = {
    websiteId: import.meta.env.VITE_WEBSITE_ID,
    customerId: import.meta.env.VITE_CUSTOMER_ID,
    currency: currency.value,
  };
  console.log("requestDepositData", requestDepositData);
  isLoading.value = true;
  try {
    const response = await fetch("/.netlify/functions/getDepositRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestDepositData),
    });

    const { fields: request } = await response.json();
    depositRequest.value = request;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};

watch(currency, () => {
  if (currency.value && customerStore.customerToken) {
    RebillyInstruments.destroy();
    createDepositRequest();
  }
});

watch(depositRequest, () => {
  if (depositRequest.value) {
    // Mount Rebilly Instruments
    RebillyInstruments.mount({
      apiMode: "sandbox",
      deposit: {
        depositRequestId: depositRequest.value.id,
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
    <h4>Make a deposit</h4>
    <form action="" class="strategy__form">
      <label for="strategy">Select a currency</label>
      <select name="strategy" id="strategy" v-model="currency">
        <option value="" selected disabled>Currency</option>
        <option value="CAD">CAD</option>
        <option value="USD">USD</option>
      </select>
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
    text-align: center;
    label {
      display: block;
      margin-bottom: 10px;
    }

    select {
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
