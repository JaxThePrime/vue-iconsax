<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm.18 12.63-2.22 2.22c-.54.54-1.24.8-1.94.8s-1.41-.27-1.94-.8a2.758 2.758 0 0 1 0-3.89l1.41-1.41c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.41 1.41a1.25 1.25 0 0 0 0 1.77c.49.49 1.28.49 1.77 0l2.22-2.22c.61-.61.95-1.43.95-2.3 0-.87-.34-1.68-.95-2.3-1.23-1.23-3.37-1.23-4.6 0L8.29 11.4a2.692 2.692 0 0 0 0 3.79c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0a4.183 4.183 0 0 1 0-5.91l2.42-2.42c.9-.9 2.09-1.39 3.36-1.39s2.46.49 3.36 1.39c.9.9 1.39 2.09 1.39 3.36s-.49 2.46-1.39 3.35Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="m5.762 8.809-1.21 1.21c-2.34 2.34-2.34 6.14 0 8.49M12.33 12.152l-2.47 2.47a3.495 3.495 0 0 0 0 4.95 3.495 3.495 0 0 0 4.95 0l3.89-3.89a7.007 7.007 0 0 0 0-9.9 7.007 7.007 0 0 0-9.9 0"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      :fill="color"
    ></path>
    <path
      d="M12.2 17.661c-.7 0-1.41-.27-1.94-.8a2.758 2.758 0 0 1 0-3.89l1.41-1.41c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.41 1.41a1.25 1.25 0 0 0 0 1.77c.49.49 1.28.49 1.77 0l2.22-2.22c.61-.61.95-1.43.95-2.3 0-.87-.34-1.68-.95-2.3-1.23-1.23-3.37-1.23-4.6 0l-2.42 2.42a2.692 2.692 0 0 0 0 3.79c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0a4.183 4.183 0 0 1 0-5.91l2.42-2.42c.9-.9 2.09-1.39 3.36-1.39s2.46.49 3.36 1.39c.9.9 1.39 2.09 1.39 3.36s-.49 2.46-1.39 3.36l-2.22 2.22c-.54.53-1.24.8-1.95.8Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="m12.33 12.15-2.47 2.47a3.495 3.495 0 0 0 0 4.95 3.495 3.495 0 0 0 4.95 0l3.89-3.89a7.007 7.007 0 0 0 0-9.9 7.007 7.007 0 0 0-9.9 0l-4.24 4.24c-2.34 2.34-2.34 6.14 0 8.49"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M12.33 21.34c-1.09 0-2.18-.41-3.01-1.24a4.249 4.249 0 0 1 0-6.01l2.48-2.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.48 2.47a2.758 2.758 0 0 0 0 3.89 2.758 2.758 0 0 0 3.89 0l3.89-3.89a6.21 6.21 0 0 0 1.83-4.42c0-1.67-.65-3.24-1.83-4.42a6.253 6.253 0 0 0-8.84 0l-4.24 4.24a5.22 5.22 0 0 0-1.54 3.71c0 1.4.55 2.72 1.54 3.71.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0a6.736 6.736 0 0 1-1.98-4.77c0-1.8.7-3.5 1.98-4.77l4.24-4.24c3.02-3.02 7.94-3.02 10.96 0a7.709 7.709 0 0 1 2.27 5.48c0 2.07-.81 4.02-2.27 5.48l-3.89 3.89c-.83.83-1.91 1.24-3 1.24Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="m12.33 12.152-2.47 2.47a3.495 3.495 0 0 0 0 4.95 3.495 3.495 0 0 0 4.95 0l3.89-3.89a7.007 7.007 0 0 0 0-9.9 7.007 7.007 0 0 0-9.9 0l-4.24 4.24c-2.34 2.34-2.34 6.14 0 8.49"
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