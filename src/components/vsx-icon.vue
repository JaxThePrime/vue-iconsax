<template>
  <component :is="icon" :color="color" :size="size" :type="type" />
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
  return defineAsyncComponent(() => import(`./icons/${props.iconName}.vue`));
});
</script>
