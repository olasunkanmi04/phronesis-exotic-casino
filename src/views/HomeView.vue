<script setup>
import { watch, ref, onUnmounted } from "vue";
import { useCustomerStore } from "../stores/customer";
import RebillyInstruments from "@rebilly/instruments";

const customerStore = useCustomerStore();
const depositRequest = ref(null);

const requestDepositData = {
  websiteId: import.meta.env.VITE_WEBSITE_ID,
  customerId: import.meta.env.VITE_CUSTOMER_ID,
  currency: "USD",
  amounts: [10, 20, 30, 40],
  customAmount: {
    minimum: 10,
    multipleOf: 10,
    maximum: 5000,
  },
};

const createDepositRequest = async () => {
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
    console.error(error);
  }
};

watch(customerStore, () => {
  if (customerStore.customerToken) {
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

onUnmounted(() => {
  RebillyInstruments.destroy();
});
</script>

<template>
  <main class="home_main">
    <div class="home_summary">
      <h3 style="font-size: 50px; color: #a6cfd5">
        Deposit now and let the winning begin – your jackpot awaits!
      </h3>
    </div>
    <div class="home_deposit">
      <div class="home_deposit-instrument">
        <div class="rebilly-instruments-summary"></div>
        <div class="rebilly-instruments"></div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.home_main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home_deposit {
  width: 80%;
  &-instrument {
    margin-left: auto;
  }
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  margin-left: auto;
  color: #fff;
}

.home_summary {
  text-align: center;
}
</style>
