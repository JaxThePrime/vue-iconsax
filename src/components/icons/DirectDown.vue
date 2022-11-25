<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="m17.02 2.718-3.48 1.74c-.97.48-2.1.48-3.07 0l-3.49-1.75C4 1.218.85 4.438 2.41 7.388l.82 1.54c.11.21.29.38.51.48l12.65 5.69c.52.23 1.13.02 1.39-.48l3.81-7.24c1.55-2.94-1.59-6.16-4.57-4.66ZM15.6 16.31l-8.28-3.73c-.93-.42-1.87.58-1.39 1.48l3.04 5.77c1.29 2.45 4.79 2.45 6.08 0l1.07-2.04c.28-.55.04-1.22-.52-1.48Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M3.071 7.698c-1.45-2.75 1.48-5.74 4.26-4.35l3.24 1.62c.9.45 1.96.45 2.86 0l3.24-1.62c2.78-1.39 5.7 1.6 4.26 4.35l-6.1 11.59c-1.2 2.28-4.46 2.28-5.66 0l-3.67-6.97"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="m17.02 2.718-3.48 1.74c-.97.48-2.1.48-3.07 0l-3.49-1.75C4 1.218.85 4.438 2.41 7.388l.82 1.54c.11.21.29.38.51.48l12.65 5.69c.52.23 1.13.02 1.39-.48l3.81-7.24c1.55-2.94-1.59-6.16-4.57-4.66Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="m15.6 16.31-8.28-3.73c-.93-.42-1.87.58-1.39 1.48l3.04 5.77c1.29 2.45 4.79 2.45 6.08 0l1.07-2.04c.28-.55.04-1.22-.52-1.48Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M9.17 19.29 3.07 7.7C1.62 4.95 4.55 1.96 7.33 3.35l3.24 1.62c.9.45 1.96.45 2.86 0l3.24-1.62c2.78-1.39 5.7 1.6 4.26 4.35l-6.1 11.59c-1.2 2.28-4.46 2.28-5.66 0Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M12.002 21.749a3.93 3.93 0 0 1-3.49-2.11l-6.1-11.59c-.82-1.55-.55-3.35.67-4.6 1.22-1.25 3.02-1.55 4.58-.77l3.24 1.62c.68.34 1.5.34 2.19 0l3.24-1.62c1.57-.78 3.37-.48 4.59.77 1.22 1.25 1.49 3.05.67 4.6l-6.1 11.59a3.93 3.93 0 0 1-3.49 2.11Zm-6.12-18c-.71 0-1.33.34-1.73.75-.6.62-1.03 1.69-.42 2.85l6.1 11.59c.43.82 1.24 1.31 2.16 1.31.92 0 1.73-.49 2.16-1.31l6.1-11.59c.61-1.16.19-2.24-.42-2.85-.6-.61-1.66-1.06-2.84-.48l-3.24 1.62c-1.11.55-2.42.55-3.53 0l-3.23-1.62c-.38-.19-.76-.27-1.11-.27Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M9.17 19.29L3.07 7.7C1.62 4.95 4.55 1.96 7.33 3.35l3.24 1.62c.9.45 1.96.45 2.86 0l3.24-1.62c2.78-1.39 5.7 1.6 4.26 4.35l-6.1 11.59c-1.2 2.28-4.46 2.28-5.66 0z"
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
            default: 32,
        },
        color: {
            type: String,
            default: "currentColor",
        },
    },
})
</script>