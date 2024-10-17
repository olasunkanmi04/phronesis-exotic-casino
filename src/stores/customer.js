import { ref } from "vue";
import { defineStore } from "pinia";

export const useCustomerStore = defineStore("customer", () => {
  const customerToken = ref(null);

  const fetchCustomerToken = async () => {
    try {
      const response = await fetch("/.netlify/functions/getCustomerToken");
      const data = await response.json();
      customerToken.value = data.token;
    } catch (error) {
      console.error(error);
    }
  };

  return { customerToken, fetchCustomerToken };
});
