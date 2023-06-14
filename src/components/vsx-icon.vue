<template>
  <component :is="icon" :color="color" :type="type" :size="size" />
</template>

<script setup lang="ts">
import { shallowRef, watch, defineAsyncComponent } from "vue";
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
const icon = shallowRef(
  defineAsyncComponent(
    () => import(/* @vite-ignore */ `./icons/${props.iconName}.vue`)
  )
);
watch(
  () => props.iconName,
  () => {
    icon.value = defineAsyncComponent(
      () => import(/* @vite-ignore */ `./icons/${props.iconName}.vue`)
    );
  }
);
</script>

<style lang="scss" scoped></style>
