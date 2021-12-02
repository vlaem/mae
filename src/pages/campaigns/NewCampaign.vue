<template>
  <div class="container">
    <div><h1>Crear Campaña</h1></div>
    <div class="campaign">
      <o-input
        placeholder="Nombre Campaña"
        v-model="newCampaign.name"
      ></o-input>
      <o-datepicker
        placeholder="Fecha Lanzamiento"
        v-model="newCampaign.launchDate"
        locale="es-PE"
      />
      <div>
        <o-button type="submit" @click="create" :disabled="!canCreate">Crear</o-button>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "src/store/campaigns";
import { reactive, computed } from "vue";
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

    const canCreate = computed(() => {
      return newCampaign.name.length > 0 && newCampaign.launchDate;
    });

    return {
      canCreate,
      newCampaign,
      create,
    };
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