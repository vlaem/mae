<template>
  <div>
    <div><h1>Previsualizacion</h1></div>
    <div>
      <img :src="content.file" />
      <div>{{ content.text }}</div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import { useStore } from "src/store/campaigns";

export default {
  props: ["campaignId", "id"],
  setup(props) {
    const store = useStore();
    const content = store.getContentById(props.campaignId, props.id);

    return {
      store,
      content,
    };
  },
};
</script>