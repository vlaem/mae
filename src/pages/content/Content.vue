<template>
  <div>
    <h2>{{ content.title }}</h2>
    <img :src="content.file" />
    <p>{{ content.text }}</p>

    <div>
      <div v-for="message of content.messages" :key="message.id">
        <div>{{ message.text }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "src/store/community";
export default {
  props: ["id"],
  setup(props) {
    const store = useStore();

    const content = store.getContentById(props.id);

    return {
      content,
    };
  },
};
</script>