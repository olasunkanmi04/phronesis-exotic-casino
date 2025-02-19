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
      token: depositRequest.value.cashierToken,
      mountElement: document.getElementById("deposit"),
    });
  } else {
    console.error("RebillyCashier library not loaded");
  }
};

watch(depositRequest, () => {
  mountDepositForm();
});






<script lang="ts" setup>
    import { computed, ref, nextTick, watch } from 'vue';
    import { useApiClient } from '@/plugins/api-manager';
    import { useToast } from '@/plugins/toast-provider';
    import { useAutomatedBlocklistStore } from '../../pinia/automated-blocklist';
    import debounce from '@/common/helpers/debounce';

    interface Entry {
        fields: {
            id: string;
            status: string;
            eventType: string;
            rules: any[];
        };
    }
    const automatedBlocklistStore = useAutomatedBlocklistStore();
    const toast = useToast();
    const apiClient = useApiClient();
    const isLoading = ref(false);
    const props = defineProps<{ entry: Entry }>();
    const localEntry = ref(props.entry);
    const localStatus = ref(props.entry.fields.status);
    const debouncedToggleStatus = debounce(toggleStatus, 500);

    // const isActive = computed({
    //     get() {
    //         return props.entry.fields.status === 'active';
    //     },
    //     set(value) {
    //         localStatus.value = value ? 'active' : 'inactive';
    //         debouncedToggleStatus();
    //     },
    // });

    const isActive = ref(props.entry.fields.status === 'active');

    // 🛠️ Sync with backend changes
    // watch(
    //     () => props.entry.fields.status,
    //     (newStatus) => {
    //         isActive.value = newStatus === 'active';
    //     },
    // );

    // 🔥 Watch for UI changes & trigger API call
    // watch(isActive, async (newValue, oldValue) => {
    //     if (newValue !== oldValue) {
    //         await toggleStatus();
    //     }
    // });

    async function toggleStatus() {
        if (isLoading.value) return;
        try {
            isLoading.value = true;
            console.log('isActive.value 1', isActive.value);

            const status = isActive.value ? 'inactive' : 'active';
            isActive.value = !isActive.value;

            let rules;
            automatedBlocklistStore.rules.forEach(
                (rule: {
                    fields: { rules: { id: string; status: string }[]; eventType: string };
                }) => {
                    if (rule.fields.eventType === props.entry.fields.eventType) {
                        rule.fields.rules.forEach((r: { id: string; status: string }) => {
                            if (r.id === props.entry.fields.id) {
                                r.status = status;
                            }
                        });
                        rules = rule.fields.rules;
                    }
                },
            );
            await apiClient.events.updateRules({
                eventType: props.entry.fields.eventType,
                data: {
                    rules,
                },
            });
            await automatedBlocklistStore.fetchAutomatedBlocklist();
            toast.positive('Automated blocklist updated.');
        } catch (error) {
            toast.negative('Something went wrong, please try again later.');
            console.error(error);
        } finally {
            isLoading.value = false;
        }
    }
</script>

<template>
    <r-toggle v-model="isActive" @update:model-value="toggleStatus" :disabled="isLoading" />
</template>

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
