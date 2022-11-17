<template>
  <div>
    <vsxIcon iconName="Wallet" color="blue" type="bold" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { vsxIcon } from "./components/";
export default defineComponent({
  components: {
    vsxIcon,
  },
});
</script>
