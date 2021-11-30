<template>
  <div class="content" @click="viewContent">
    <img :src="content.file" />
    <p>{{ content.title }}</p>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  props: ["content"],
  setup(props) {
    const router = useRouter();
    const viewContent = () => {
      router.push({
        name: "content",
        params: {
          id: props.content.id,
        },
      });
    };

    return {
      viewContent,
    };
  },
};
</script>
<style scoped>
.content {
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>