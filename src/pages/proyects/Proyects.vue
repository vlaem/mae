<template>
  <div>
    <div><h1>Proyectos Marketeros</h1></div>
    <o-tabs v-model="activeTab">
      <o-tab-item value="0" label="Todos"> Todos </o-tab-item>
      <o-tab-item value="1" label="En Curso"> En Curso </o-tab-item>
      <o-tab-item value="2" label="Hechos"> Hechos </o-tab-item>
      <o-tab-item value="3" label="Comunidad" disabled> Comunidad </o-tab-item>
    </o-tabs>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const activeTab = ref("0");

    return {
      activeTab,
    };
  },
};
</script>