<template>
  <div>
    <vsxIcon iconName="MessageText1" type="bold" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { vsxIcon } from "./components/";
import { Wallet } from "./components/";
export default defineComponent({
  components: {
    vsxIcon,
    Wallet,
  },
});
</script>
