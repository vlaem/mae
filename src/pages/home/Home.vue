<template>
  <div>
    <div><h1>Proyectos Marketeros</h1></div>
    <o-tabs v-model="activeTab">
      <o-tab-item value="0" label="Mis Campañas"><my-campaigns /> </o-tab-item>
      <o-tab-item value="1" label="Comunidad"> <community /> </o-tab-item>
    </o-tabs>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import MyCampaigns from "src/pages/home/MyCampaigns.vue";
import Community from "src/pages/home/Community.vue";

export default {
  setup() {
    const activeTab = ref("0");

    return {
      activeTab,
    };
  },
  components: {
    MyCampaigns,
    Community,
  },
};
</script>