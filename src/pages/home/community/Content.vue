<template>
  <div class="content" @click="viewContent">
    <img class="content-image" :src="content.file" />
    <span>{{ content.title }}</span>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 10px;
}
.content-image {
  max-width: 145px;
  max-height: 145px;
}
</style>