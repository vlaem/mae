<template>
  <div class="community">
    <div class="content-search">
      <o-input
        placeholder="Encuentra inspiración"
        type="search"
        icon="search"
        v-model="search"
      >
      </o-input>
    </div>
    <div class="content-grid">
      <content
        v-for="content of filteredContent"
        :key="content.id"
        :content="content"
      />
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import Content from "./community/Content.vue";
import { useStore } from "src/store/community";
export default {
  setup() {
    const store = useStore();
    const search = ref("");

    const filteredContent = computed(() => {
      if (!search.value) {
        return store.content;
      }
      return store.content.filter((content) => {
        return content.title.toLowerCase().includes(search.value.toLowerCase());
      });
    });

    return {
      store,
      search,
      filteredContent,
    };
  },
  components: {
    Content,
  },
};
</script>
<style scoped>
.community {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}


.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
}
</style>