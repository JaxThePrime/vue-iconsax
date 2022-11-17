<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M15.78 20.98A5.436 5.436 0 0 1 12 22.51c-1.36 0-2.72-.52-3.78-1.54-.36-.34-.72-.72-1.08-1.11l12.9-12.9c.25.54.44 1.11.58 1.74 1.17 5.16-1.99 9.52-4.84 12.28ZM21.769 2.229c-.3-.3-.79-.3-1.09 0l-18.45 18.46c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z"
      :fill="color"
    ></path>
    <path
      d="M8.849 10.31a3.15 3.15 0 0 1 6.06-1.21l3.98-3.98C17.119 2.98 14.439 2 11.999 2c-1.77 0-3.66.52-5.24 1.61-1.58 1.1-2.86 2.77-3.38 5.08-.84 3.67.52 6.95 2.41 9.52l5-5a3.144 3.144 0 0 1-1.94-2.9Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M10.419 13.001a3.113 3.113 0 0 1-1.54-2.69 3.118 3.118 0 0 1 5.81-1.57M6.512 3.842c3.54-2.79 9.2-2.41 12.17 1.14M5.99 17.808c-1.84-2.51-3.18-5.72-2.36-9.32M20.38 8.5c1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0M22 2 2 22"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="m18.889 5.11-13.1 13.1c-1.89-2.57-3.25-5.85-2.41-9.52.52-2.31 1.8-3.98 3.38-5.08C8.339 2.52 10.229 2 11.999 2c2.44 0 5.12.98 6.89 3.11ZM15.78 20.98A5.436 5.436 0 0 1 12 22.51c-1.36 0-2.72-.52-3.78-1.54-.36-.34-.72-.72-1.08-1.11l12.9-12.9c.25.54.44 1.11.58 1.74 1.17 5.16-1.99 9.52-4.84 12.28Z"
      :fill="color"
    ></path>
    <path
      d="M21.769 2.229a.743.743 0 0 0-1.08 0l-5.67 5.67-.72.72a2.848 2.848 0 0 0-2.3-1.18c-1.58 0-2.87 1.29-2.87 2.87 0 .9.44 1.75 1.18 2.3l-8.08 8.08c-.31.3-.31.78 0 1.08.15.15.34.23.54.23s.39-.08.54-.23l18.46-18.46c.31-.3.31-.78 0-1.08Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M10.42 13a3.113 3.113 0 0 1-1.54-2.69 3.118 3.118 0 0 1 5.81-1.57"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M5.99 17.81c-1.84-2.51-3.18-5.72-2.36-9.32C5.28 1.23 14.57.06 18.68 4.98M20.38 8.5c1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0M22 2 2 22"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M10.419 13.75c-.13 0-.26-.03-.38-.1a3.875 3.875 0 0 1-1.91-3.33 3.867 3.867 0 0 1 7.21-1.95.752.752 0 1 1-1.3.76c-.42-.74-1.2-1.19-2.04-1.19-1.3 0-2.37 1.06-2.37 2.37 0 .84.45 1.62 1.17 2.04.36.21.48.67.27 1.03-.14.23-.39.37-.65.37Z"
      :fill="color"
    ></path>
    <path
      d="M5.99 18.558c-.23 0-.46-.11-.61-.31-2.4-3.29-3.24-6.63-2.49-9.93.78-3.43 3.3-5.97 6.74-6.8 3.6-.87 7.38.3 9.61 2.97.27.32.22.79-.09 1.06a.75.75 0 0 1-1.06-.1c-1.87-2.24-5.05-3.21-8.11-2.48-2.92.7-4.97 2.77-5.63 5.67-.65 2.86.1 5.79 2.24 8.71.24.33.17.8-.16 1.05-.13.11-.29.16-.44.16ZM11.998 22.758a5.97 5.97 0 0 1-4.13-1.67.746.746 0 0 1-.02-1.06c.29-.3.76-.31 1.06-.02a4.426 4.426 0 0 0 6.17 0c2.67-2.57 5.63-6.63 4.57-11.34a.753.753 0 0 1 1.47-.33c1.22 5.39-2.04 9.91-4.99 12.75a5.97 5.97 0 0 1-4.13 1.67Z"
      :fill="color"
    ></path>
    <path
      d="M2.001 22.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l20-20c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-20 20c-.15.15-.34.22-.53.22Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M10.42 13a3.113 3.113 0 01-1.54-2.69 3.118 3.118 0 015.81-1.57"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M5.99 17.81c-1.84-2.51-3.18-5.72-2.36-9.32C5.28 1.23 14.57.06 18.68 4.98"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M20.38 8.5c1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 01-7.21 0"
      opacity=".4"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M22 2L2 22"
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
            default: "#292D32",
        },
    },
})
</script>