<template>
  <div>
    <campaign
      v-for="campaign in store.campaigns"
      :key="campaign.id"
      :campaign="campaign"
    />
    <new-campaign />
  </div>
</template>

<script>
import { useStore } from "src/store/campaigns";
import Campaign from "./my-campaigns/Campaign.vue";
import NewCampaign from "./my-campaigns/NewCampaign.vue";

export default {
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
  components: {
    Campaign,
    NewCampaign,
  },
};
</script>