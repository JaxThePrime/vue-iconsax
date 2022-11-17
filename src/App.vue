<template>
  <div>
    <vsx-icon color="blue" iconName="WalletCheck" type="bold" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import vsxIcon from "./components/vsx-icon.vue";
export default defineComponent({
  components: {
    vsxIcon,
  },
});
</script>
