<template>
  <div>
    <o-button type="submit" @click="createCampaign">Crear Campaña</o-button>
  </div>
</template>
<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const createCampaign = async () => {
      router.push({ name: "new-campaign" });
    };
    return {
      createCampaign,
    };
  },
};
</script>
