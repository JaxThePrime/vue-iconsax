<template>
  <component
    :is="Object(icons)[props.iconName]"
    :color="color"
    :size="size"
    :type="type"
  />
</template>
<script lang="ts" setup>
import { computed } from "vue";
import * as icons from "./icons";
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
</script>
