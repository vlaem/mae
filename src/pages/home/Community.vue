<template>
  <div>
    <o-input
      placeholder="Search..."
      type="search"
      icon="search"
      v-model="search"
    >
    </o-input>    
    <div>
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