<template>
  <div>
    <div><h1>New Content</h1></div>
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
      <o-select v-model="newContent.app">
        <option value="instagram">Instagram</option>
      </o-select>
      <o-select placeholder="Tipo de publicacion" v-model="newContent.type">
        <option value="pic">Pie de foto</option>
        <option value="ad">Pie de foto en anuncios</option>
      </o-select>
    </div>
    
  </div>
</template>
<script>
import { reactive } from "vue";
import { useStore } from "src/store/campaigns";

export default {
  props: ["campaignId"],
  setup(props) {
    const store = useStore();
    const campaign = store.getCampaignById(props.campaignId);
    const newContent = reactive({
      app: "instagram",
      type: null,
    });
    return {
      store,
      campaign,
      newContent,
    };
  },
};
</script>