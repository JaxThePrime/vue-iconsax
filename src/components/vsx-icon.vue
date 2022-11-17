<template>
  <component :is="cp" :color="color" :type="type" :size="size" />
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
export default defineComponent({
  props: {
    type: {
      type: String,
      default: "linear",
    },
    size: {
      type: [String, Number],
      default: 32,
    },
    color: {
      type: String,
      default: "#292D32",
    },
    iconName: {
      type: String,
      required: true,
    },
  },
  computed: {
    cp() {
      const type = this.type.toLowerCase();
      if (
        type !== "bulk" &&
        type !== "broken" &&
        type !== "bold" &&
        type !== "twotone" &&
        type !== "outline" &&
        type !== "linear"
      ) {
        throw new Error("Invalid type");
      }
      return defineAsyncComponent(
        () => import(`../components/${this.iconName}.vue`)
      );
    },
  },
});
</script>
