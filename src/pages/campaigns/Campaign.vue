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
        
    </div>
  </div>
</template>
<script>
import { useStore } from "src/store/campaigns";

export default {
  props: ["id"],
  setup(props) {
    const store = useStore();

    const storeCampaign = store.getCampaignById(props.id);
    const campaign = { ...storeCampaign };

    return {
      store,
      campaign,
    };
  },
};
</script>