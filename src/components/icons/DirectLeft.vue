<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="m21.292 17.022-1.74-3.48c-.48-.97-.48-2.1 0-3.07l1.74-3.48c1.49-2.99-1.72-6.13-4.67-4.57l-1.54.82c-.21.11-.38.29-.48.51l-5.7 12.64c-.23.52-.02 1.13.48 1.39l7.24 3.81c2.95 1.56 6.16-1.59 4.67-4.57ZM7.69 15.6l3.73-8.28c.42-.93-.58-1.87-1.48-1.39L4.17 8.96c-2.45 1.29-2.45 4.79 0 6.08l2.04 1.07c.55.29 1.22.06 1.48-.51Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M16.3 3.071c2.75-1.45 5.74 1.48 4.35 4.26l-1.62 3.24c-.45.9-.45 1.96 0 2.86l1.62 3.24c1.39 2.78-1.6 5.7-4.35 4.26l-11.59-6.1c-2.28-1.2-2.28-4.46 0-5.66l6.97-3.67"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="m21.292 17.022-1.74-3.48c-.48-.97-.48-2.1 0-3.07l1.74-3.48c1.49-2.99-1.72-6.13-4.67-4.57l-1.54.82c-.21.11-.38.29-.48.51l-5.7 12.64c-.23.52-.02 1.13.48 1.39l7.24 3.81c2.95 1.56 6.16-1.59 4.67-4.57Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="m7.69 15.6 3.73-8.28c.42-.93-.58-1.87-1.48-1.39L4.17 8.96c-2.45 1.29-2.45 4.79 0 6.08l2.04 1.07c.55.29 1.22.06 1.48-.51Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="m4.71 9.17 11.59-6.1c2.75-1.45 5.74 1.48 4.35 4.26l-1.62 3.24c-.45.9-.45 1.96 0 2.86l1.62 3.24c1.39 2.78-1.6 5.7-4.35 4.26l-11.59-6.1c-2.28-1.2-2.28-4.46 0-5.66Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M17.81 22.061c-.63 0-1.26-.15-1.86-.47l-11.59-6.1a3.93 3.93 0 0 1-2.11-3.49c0-1.47.81-2.81 2.11-3.49l11.59-6.1c1.55-.81 3.35-.55 4.6.67 1.25 1.22 1.55 3.02.77 4.58l-1.62 3.24c-.34.68-.34 1.5 0 2.19l1.62 3.24c.78 1.56.48 3.36-.77 4.58-.77.76-1.74 1.15-2.74 1.15Zm-.01-18.62c-.36 0-.75.09-1.15.3l-11.59 6.1c-.82.43-1.31 1.24-1.31 2.16 0 .92.49 1.73 1.31 2.16l11.59 6.1c1.16.61 2.24.19 2.85-.42.62-.6 1.06-1.67.48-2.84l-1.62-3.24a3.982 3.982 0 0 1 0-3.53l1.62-3.24c.59-1.17.14-2.24-.48-2.84-.4-.39-1-.71-1.7-.71Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M4.71 9.17l11.59-6.1c2.75-1.45 5.74 1.48 4.35 4.26l-1.62 3.24c-.45.9-.45 1.96 0 2.86l1.62 3.24c1.39 2.78-1.6 5.7-4.35 4.26l-11.59-6.1c-2.28-1.2-2.28-4.46 0-5.66z"
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