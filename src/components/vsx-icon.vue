<template>
  <component :is="icon" :color="color" :type="type" :size="size" />
</template>
<script lang="ts" setup>
import { computed, defineAsyncComponent } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "linear",
  },
  size: {
    type: [String, Number],
    default: 24,
  },
  color: {
    type: String,
    default: "currentColor",
  },
  iconName: {
    type: String,
    required: true,
  },
});
const icon = computed(() => {
  console.log(props.iconName);
  return defineAsyncComponent(
    () => import(/*@vite-ignore */ `./icons/${props.iconName}.vue`)
  );
});
</script>
