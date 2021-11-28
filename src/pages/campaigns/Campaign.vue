<template>
  <div>
    <div><h1>Campaña</h1></div>
    <div>
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
    </div>
  </div>
</template>
<script>
import { useStore } from "src/store/campaigns";
import { useRouter } from "vue-router";
export default {
  props: ["id"],
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const storeCampaign = store.getCampaignById(props.id);
    const campaign = { ...storeCampaign };

    const newContent = () => {
      router.push({ name: "new-content", params: { campaignId: props.id } });
    };

    return {
      store,
      campaign,
      newContent,
    };
  },
};
</script>