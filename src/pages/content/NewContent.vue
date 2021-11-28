<template>
  <div></div>
</template>
<script>
import { useStore } from "src/store/campaigns";

export default {
  props: ["campaignId"],
  setup() {
    const store = useStore();
    
    return {
      store,
    };
  },
};
</script>