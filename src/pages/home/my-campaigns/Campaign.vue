<template>
  <div @click="viewCampaign" class="campaign">
    <div>{{ campaign.name }}</div>
    <div>Fecha</div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";

export default {
  props: ["campaign"],
  setup(props) {
    const router = useRouter();
    const viewCampaign = () => {
      router.push({
        name: "campaign",
        params: {
          id: props.campaign.id,
        },
      });
    };

    return {
      viewCampaign,
    };
  },
};
</script>
<style scoped>
.campaign {
  border: 1px solid blue;
}
</style>