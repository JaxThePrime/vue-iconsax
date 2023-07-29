<template>
  <component :is="computedIcon" />
</template>

<script lang="ts" setup>
import { computed, defineAsyncComponent } from "vue";
const props = defineProps({
  iconName: String,
});
const computedIcon = computed(() => {
  return defineAsyncComponent(() => import(`./icons/${props.iconName}.vue`));
});
</script>

<style lang="scss" scoped></style>
