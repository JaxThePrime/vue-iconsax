<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="m19.512 5.85-5.94-3.43c-.97-.56-2.17-.56-3.15 0l-5.93 3.43a3.15 3.15 0 0 0-1.57 2.73v6.84c0 1.12.6 2.16 1.57 2.73l5.94 3.43c.97.56 2.17.56 3.15 0l5.94-3.43a3.15 3.15 0 0 0 1.57-2.73V8.58a3.192 3.192 0 0 0-1.58-2.73Zm-7.51 1.49c1.29 0 2.33 1.04 2.33 2.33S13.292 12 12.002 12s-2.33-1.04-2.33-2.33c0-1.28 1.04-2.33 2.33-2.33Zm2.68 9.32h-5.36c-.81 0-1.28-.9-.83-1.57.68-1.01 2-1.69 3.51-1.69 1.51 0 2.83.68 3.51 1.69.45.66-.03 1.57-.83 1.57Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M10.432 2.42c.97-.56 2.17-.56 3.15 0l5.94 3.43c.97.56 1.57 1.6 1.57 2.73v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.15 3.15 0 0 1-1.57-2.73V8.58c0-1.12.6-2.16 1.57-2.73l1.9-1.1"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12.002 11a2.33 2.33 0 1 0 0-4.66 2.33 2.33 0 0 0 0 4.66ZM16 16.658c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M21.08 8.58v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.15 3.15 0 0 1-1.57-2.73V8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43c.97-.56 2.17-.56 3.15 0l5.94 3.43c.97.57 1.57 1.6 1.57 2.73Z"
      :fill="color"
    ></path>
    <path
      d="M12.002 12a2.33 2.33 0 1 0 0-4.66 2.33 2.33 0 0 0 0 4.66ZM14.681 16.658c.81 0 1.28-.9.83-1.57-.68-1.01-2-1.69-3.51-1.69-1.51 0-2.83.68-3.51 1.69-.45.67.02 1.57.83 1.57h5.36Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M21.08 8.58v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.15 3.15 0 0 1-1.57-2.73V8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43c.97-.56 2.17-.56 3.15 0l5.94 3.43c.97.57 1.57 1.6 1.57 2.73Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 11a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 11ZM16 16.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M12 22.751c-.67 0-1.35-.17-1.95-.52l-5.94-3.43c-1.2-.7-1.95-1.99-1.95-3.38v-6.84c0-1.39.75-2.68 1.95-3.38l5.94-3.43c1.2-.7 2.69-.7 3.9 0l5.94 3.43c1.2.7 1.95 1.99 1.95 3.38v6.84c0 1.39-.75 2.68-1.95 3.38l-5.94 3.43c-.6.35-1.28.52-1.95.52Zm0-20c-.41 0-.83.11-1.2.32l-5.94 3.43c-.74.43-1.2 1.22-1.2 2.08v6.84c0 .85.46 1.65 1.2 2.08l5.94 3.43c.74.43 1.66.43 2.4 0l5.94-3.43c.74-.43 1.2-1.22 1.2-2.08v-6.84c0-.85-.46-1.65-1.2-2.08l-5.94-3.43c-.37-.21-.79-.32-1.2-.32Z"
      :fill="color"
    ></path>
    <path
      d="M12.002 11.75c-1.7 0-3.08-1.38-3.08-3.08 0-1.7 1.38-3.08 3.08-3.08 1.7 0 3.08 1.38 3.08 3.08 0 1.7-1.38 3.08-3.08 3.08Zm0-4.66c-.87 0-1.58.71-1.58 1.58 0 .87.71 1.58 1.58 1.58.87 0 1.58-.71 1.58-1.58 0-.87-.71-1.58-1.58-1.58ZM16 17.408c-.41 0-.75-.34-.75-.75 0-1.38-1.46-2.51-3.25-2.51s-3.25 1.13-3.25 2.51c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-2.21 2.13-4.01 4.75-4.01s4.75 1.8 4.75 4.01c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M21.08 8.58v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.15 3.15 0 0 1-1.57-2.73V8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43c.97-.56 2.17-.56 3.15 0l5.94 3.43c.97.57 1.57 1.6 1.57 2.73Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M12.002 11a2.33 2.33 0 1 0 0-4.66 2.33 2.33 0 0 0 0 4.66ZM16 16.658c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
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