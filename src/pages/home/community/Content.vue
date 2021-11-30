<template>
  <div class="content" @click="viewContent">
    <img :src="content.file" />
    <p>{{ content.title }}</p>
  </div>
</template>
<script>
export default {
  props: ["content"],
  setup() {
    const viewContent = () => {
        v
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