<template>
  <div class="container">
    <div><h1>Previsualizacion</h1></div>
    <div class="content">
      <h3>{{ content.title }}</h3>
      <img class="content-image" :src="content.file" />
      <p>{{ content.text }}</p>
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
<style scoped>
.content {
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  border-radius: 10px;
}

.content-image {
  width: 80%;
}
</style>