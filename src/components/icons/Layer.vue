<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="m19.37 4.891-5.86-2.61c-.86-.38-2.16-.38-3.02 0l-5.86 2.61c-1.48.66-1.7 1.56-1.7 2.04s.22 1.38 1.7 2.04l5.86 2.61c.43.19.97.29 1.51.29s1.08-.1 1.51-.29l5.86-2.61c1.48-.66 1.7-1.56 1.7-2.04s-.21-1.38-1.7-2.04Z"
      :fill="color"
    ></path>
    <path
      d="M12 17.04c-.38 0-.76-.08-1.11-.23l-6.74-3c-1.03-.46-1.83-1.69-1.83-2.82 0-.41.33-.74.74-.74s.74.33.74.74c0 .54.45 1.24.95 1.46l6.74 3c.32.14.69.14 1.01 0l6.74-3c.5-.22.95-.91.95-1.46 0-.41.33-.74.74-.74s.74.33.74.74c0 1.12-.8 2.36-1.83 2.82l-6.74 3c-.34.15-.72.23-1.1.23Z"
      :fill="color"
    ></path>
    <path
      d="M12 22c-.38 0-.76-.08-1.11-.23l-6.74-3a3.085 3.085 0 0 1-1.83-2.82c0-.41.33-.74.74-.74s.74.33.74.74c0 .63.37 1.2.95 1.46l6.74 3c.32.14.69.14 1.01 0l6.74-3c.57-.25.95-.83.95-1.46 0-.41.33-.74.74-.74s.74.33.74.74c0 1.22-.72 2.32-1.83 2.82l-6.74 3c-.34.15-.72.23-1.1.23Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M18.92 5.54c1.7.75 1.7 1.99 0 2.74l-5.9 2.62c-.67.3-1.77.3-2.44 0l-5.9-2.62c-1.7-.75-1.7-1.99 0-2.74l5.9-2.62c.67-.3 1.77-.3 2.44 0l1.92.85"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M3 11c0 .84.63 1.81 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.77-.34 1.4-1.31 1.4-2.15"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M3 16c0 .93.55 1.77 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.85-.38 1.4-1.22 1.4-2.15"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="m19.37 4.891-5.86-2.61c-.86-.38-2.16-.38-3.02 0l-5.86 2.61c-1.48.66-1.7 1.56-1.7 2.04s.22 1.38 1.7 2.04l5.86 2.61c.43.19.97.29 1.51.29s1.08-.1 1.51-.29l5.86-2.61c1.48-.66 1.7-1.56 1.7-2.04s-.21-1.38-1.7-2.04Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M12 17.04c-.38 0-.76-.08-1.11-.23l-6.74-3c-1.03-.46-1.83-1.69-1.83-2.82 0-.41.33-.74.74-.74s.74.33.74.74c0 .54.45 1.24.95 1.46l6.74 3c.32.14.69.14 1.01 0l6.74-3c.5-.22.95-.91.95-1.46 0-.41.33-.74.74-.74s.74.33.74.74c0 1.12-.8 2.36-1.83 2.82l-6.74 3c-.34.15-.72.23-1.1.23Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M12 22c-.38 0-.76-.08-1.11-.23l-6.74-3a3.085 3.085 0 0 1-1.83-2.82c0-.41.33-.74.74-.74s.74.33.74.74c0 .63.37 1.2.95 1.46l6.74 3c.32.14.69.14 1.01 0l6.74-3c.57-.25.95-.83.95-1.46 0-.41.33-.74.74-.74s.74.33.74.74c0 1.22-.72 2.32-1.83 2.82l-6.74 3c-.34.15-.72.23-1.1.23Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M13.01 2.92l5.9 2.62c1.7.75 1.7 1.99 0 2.74l-5.9 2.62c-.67.3-1.77.3-2.44 0l-5.9-2.62c-1.7-.75-1.7-1.99 0-2.74l5.9-2.62c.67-.3 1.77-.3 2.44 0z"
    ></path>
    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M3 11c0 .84.63 1.81 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.77-.34 1.4-1.31 1.4-2.15"
    ></path>
    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M3 16c0 .93.55 1.77 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.85-.38 1.4-1.22 1.4-2.15"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M11.79 11.88c-.54 0-1.09-.1-1.52-.29l-5.9-2.62C2.87 8.3 2.65 7.4 2.65 6.91s.22-1.39 1.72-2.06l5.9-2.62c.87-.39 2.18-.39 3.05 0l5.91 2.62c1.49.66 1.72 1.57 1.72 2.06s-.22 1.39-1.72 2.06l-5.91 2.62c-.44.2-.98.29-1.53.29Zm0-8.44c-.34 0-.67.05-.91.16l-5.9 2.62c-.61.28-.83.56-.83.69 0 .13.22.42.82.69l5.9 2.62c.48.21 1.35.21 1.83 0l5.91-2.62c.61-.27.83-.56.83-.69 0-.13-.22-.42-.83-.69l-5.9-2.62c-.24-.1-.58-.16-.92-.16Z"
      :fill="color"
    ></path>
    <path
      d="M12 17.09c-.38 0-.76-.08-1.12-.24l-6.79-3.02c-1.03-.45-1.84-1.7-1.84-2.83 0-.41.34-.75.75-.75s.75.34.75.75c0 .55.45 1.24.95 1.47l6.79 3.02c.32.14.69.14 1.02 0l6.79-3.02c.5-.22.95-.92.95-1.47 0-.41.34-.75.75-.75s.75.34.75.75c0 1.13-.81 2.38-1.84 2.84l-6.79 3.02c-.36.15-.74.23-1.12.23Z"
      :fill="color"
    ></path>
    <path
      d="M12 22.088c-.38 0-.76-.08-1.12-.24l-6.79-3.02a3.106 3.106 0 0 1-1.84-2.84c0-.41.34-.75.75-.75s.75.35.75.76c0 .63.37 1.21.95 1.47l6.79 3.02c.32.14.69.14 1.02 0l6.79-3.02c.58-.26.95-.83.95-1.47 0-.41.34-.75.75-.75s.75.34.75.75c0 1.23-.72 2.34-1.84 2.84l-6.79 3.02c-.36.15-.74.23-1.12.23Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="m13.01 2.92 5.9 2.62c1.7.75 1.7 1.99 0 2.74l-5.9 2.62c-.67.3-1.77.3-2.44 0l-5.9-2.62c-1.7-.75-1.7-1.99 0-2.74l5.9-2.62c.67-.3 1.77-.3 2.44 0Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M3 11c0 .84.63 1.81 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.77-.34 1.4-1.31 1.4-2.15"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M3 16c0 .93.55 1.77 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.85-.38 1.4-1.22 1.4-2.15"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>

</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        type: {
            type: String,
            default: "linear",
        },
        size: {
            type: [ String, Number ],
            default: 24,
        },
        color: {
            type: String,
            default: "currentColor",
        },
        strokeWidth: {
          type: String,
          default: "1.5",
        },
    },
})
</script>