<template>
  <div class="content">
    <div>{{ content.title }}</div>
    <div>{{ content.app }}</div>
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
  padding: 0.75rem;
}
</style>
