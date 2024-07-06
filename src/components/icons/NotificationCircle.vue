<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" :fill="color"></path>
    <path
      d="M17.79 9.34a4.455 4.455 0 0 1-3.13-3.13c-.26-.96-.2-1.88.09-2.7a.99.99 0 0 0-.72-1.3c-1.47-.31-3.06-.3-4.72.15-3.78 1.06-6.67 4.33-7.21 8.22-.92 6.62 4.69 12.23 11.31 11.32 3.9-.54 7.16-3.43 8.21-7.22.46-1.65.47-3.24.16-4.72-.12-.58-.74-.91-1.3-.72-.81.29-1.73.35-2.69.1Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M3.02 16.402a9.976 9.976 0 0 0 8.98 5.6c5.52 0 10-4.48 10-10 0-.68-.07-1.35-.2-1.99M14.02 2.2C13.36 2.07 12.69 2 12 2 6.48 2 2 6.48 2 12M19 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3c0-.36-.06-.7-.18-1.01"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" :fill="color"></path>
    <path
      opacity=".4"
      d="M19 9.5c-2.48 0-4.5-2.02-4.5-4.5 0-.91.27-1.75.74-2.45A9.971 9.971 0 0 0 12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10c0-1.13-.2-2.22-.55-3.24-.7.47-1.54.74-2.45.74Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M14.02 2.2C13.36 2.07 12.69 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-.68-.07-1.35-.2-1.99"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M19 8.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25S17.76 7.25 19 7.25 21.25 6.24 21.25 5 20.24 2.75 19 2.75Z"
      :fill="color"
    ></path>
    <path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25c.73 0 1.46.07 2.17.22.41.08.67.48.58.89-.08.41-.48.67-.88.58A8.99 8.99 0 0 0 12 2.75C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25c0-.62-.06-1.24-.18-1.84-.08-.41.18-.8.59-.88.41-.09.8.18.88.59.14.7.21 1.42.21 2.14 0 5.92-4.82 10.74-10.75 10.74Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      opacity=".4"
      d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M14.02 2.2C13.36 2.07 12.69 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-.68-.07-1.35-.2-1.99"
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