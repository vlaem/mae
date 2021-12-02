<template>
  <div class="container">
    <div><h1>Campaña</h1></div>
       <div class="campaign">
      <o-input
        placeholder="Nombre Campaña"
        v-model="campaign.name"
        disabled
      ></o-input>
      <o-datepicker
        placeholder="Fecha Lanzamiento"
        v-model="campaign.launchDate"
        locale="es-PE"
        disabled
      />
    </div>
    <div>
      <o-button variant="primary" @click="newContent">Nuevo Contenido</o-button>
      <content
        v-for="content in campaign.content"
        :key="content.id"
        :content="content"
      />
    </div>
  </div>
</template>
<script>
import { useStore } from "src/store/campaigns";
import { useRouter } from "vue-router";
import Content from "./campaign/Content.vue";

export default {
  props: ["id"],
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const storeCampaign = store.getCampaignById(props.id);
    const campaign = { ...storeCampaign };

    const newContent = () => {
      router.push({
        name: "campaign-new-content",
        params: { campaignId: props.id },
      });
    };

    return {
      store,
      campaign,
      newContent,
    };
  },
  components: {
    Content,
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}
.campaign {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}
</style>