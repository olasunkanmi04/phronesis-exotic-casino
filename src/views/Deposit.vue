<script setup>
import { watch, ref, onUnmounted, onMounted } from "vue";
import { useCustomerStore } from "../stores/customer";

const customerStore = useCustomerStore();
const depositRequest = ref(null);

const requestDepositData = {
  websiteId: import.meta.env.VITE_WEBSITE_ID,
  customerId: import.meta.env.VITE_CUSTOMER_ID,
  currency: "USD",
  amounts: [10, 50, 100],
  customAmount: {
    minimum: 10,
    multipleOf: 1,
    maximum: 10000,
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

onMounted(() => {
  createDepositRequest();
});

const mountDepositForm = async () => {
  if (depositRequest.value.cashierToken && window.RebillyCashier) {
    await RebillyCashier.renderDeposit({
      cashierToken: depositRequest.value.cashierToken,
      mountElement: document.getElementById("deposit"),
    });
  } else {
    console.error("RebillyCashier library not loaded");
  }
};

watch(depositRequest, () => {
  mountDepositForm();
});
</script>

<template>
  <div class="strategy">
    <h4>Make a deposit</h4>

    <div id="deposit"></div>
    <!-- <form action="" class="strategy__form">
      <label for="strategy">Select a currency</label>
      <select name="strategy" id="strategy" v-model="currency">
        <option value="" selected disabled>Currency</option>
        <option value="CAD">CAD</option>
        <option value="USD">USD</option>
      </select>
    </form> -->
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
