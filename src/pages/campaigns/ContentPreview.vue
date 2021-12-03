<template>
  <div class="container">
    <div><h1>Previsualizacion</h1></div>
    <div class="content">
      <h3>{{ content.title }}</h3>
      <img class="content-image" :src="content.file" />
      <p>{{ content.text }}</p>
    </div>
    <div v-if="offerCutContent">
      <p>
        Te sugerimos hacer un texto más corto por que las personas no suelen dar
        click en leer más.
      </p>
      <o-button type="submit" @click="cut">Acortar texto</o-button>
    </div>
    <div v-if="!offerCutContent && !content.published">
      <p>Estas listo para publicar</p>
      <o-button type="submit" @click="publish">Publicar</o-button>
    </div>
  </div>
</template>
<script>
import { reactive, computed } from "vue";
import { useStore } from "src/store/campaigns";
import { useStore as useCommunityStore } from "src/store/community";

export default {
  props: ["campaignId", "id"],
  setup(props) {
    const store = useStore();
    const communityStore = useCommunityStore();
    const content = store.getContentById(props.campaignId, props.id);
    const cut = () => {
      store.cutContent(props.campaignId, props.id);
    };
    const offerCutContent = computed(() => {
      if (content.type === "pic" && content.text.length > 150) {
        return true;
      }
      if (content.type === "ad" && content.text.length > 125) {
        return true;
      }
      return false;
    });
    const publish = () => {
      communityStore.publishContent(content);
      content.published = true;
    };
    return {
      store,
      content,
      cut,
      offerCutContent,
      publish,
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