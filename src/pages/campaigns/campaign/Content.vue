<template>
  <div class="content">
    <div>{{ content.name }}</div>
  </div>
</template>
<script>
export default {
  props: ["content"],
  setup(props) {
    const content = props.content;
    return {
      content,
    };
  },
};
</script>
<style scoped>
.content {
  border: 1px solid #ccc;
}
</style>
