<template>
  <div>
    <Wallet color="blue" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Wallet } from "./components";
export default defineComponent({
  components: {
    Wallet,
  },
});
</script>
