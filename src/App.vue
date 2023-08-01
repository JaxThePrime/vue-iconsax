<template>
  <VsxIcon :iconName="icon" />
  <button @click="icon === 'Wallet' ? (icon = 'Calendar') : (icon = 'Wallet')">
    Change
  </button>
  {{ icon }}
</template>

<script lang="ts" setup>
import { ref } from "vue";
import VsxIcon from "./components/VsxIcon.vue";
const icon = ref("Wallet");
</script>

<style lang="scss" scoped></style>
