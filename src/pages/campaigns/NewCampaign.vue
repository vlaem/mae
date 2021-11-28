<template>
  <div>
    <div><h1>Crear Campaña</h1></div>
    <div>
      <o-input
        placeholder="Nombre Campaña"
        v-model="newCampaign.name"
      ></o-input>
      <o-datepicker
        placeholder="Fecha Lanzamiento"
        v-model="newCampaign.launchDate"
        locale="es-PE"
      />
      <o-button type="submit" @click="create">Crear</o-button>
    </div>
  </div>
</template>
<script>
import { useStore } from "src/store/campaigns";
import { reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const newCampaign = reactive({
      name: "",
      launchDate: null,
    });

    const create = () => {
      const result = store.addCampaign({
        name: newCampaign.name,
        launchDate: newCampaign.launchDate,
      });

      newCampaign.name = "";
      newCampaign.launchDate = null;

      router.push({ name: "campaign", params: { id: result.id } });
    };

    return {
      newCampaign,
      create,
    };
  },
};
</script>