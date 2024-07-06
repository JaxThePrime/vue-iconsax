<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M16.65 4.79h-.28c-.1-.79-.39-1.42-.85-1.89-.6-.6-1.47-.9-2.59-.9H7.35C5.1 2 3.86 3.24 3.86 5.49c0 1.12.3 1.99.9 2.59.6.6 1.47.9 2.59.9h5.58c2 0 3.2-.99 3.44-2.79h.28c2.09 0 2.09.28 2.09 2.09v1.86c0 1.81 0 2.09-2.09 2.09h-3.72c-2.99 0-3.42 1.42-3.48 2.8-.9.06-1.87.48-1.87 2.08v2.79c0 1.73 1.14 2.09 2.09 2.09h.93c.95 0 2.09-.36 2.09-2.09v-2.79c0-1.58-.95-2.02-1.85-2.08.05-1.01.34-1.41 2.08-1.41h3.72c3.25 0 3.49-1.32 3.49-3.49V8.28c.01-2.17-.23-3.49-3.48-3.49Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M20 8c0-2 0-3-3-3h-1M10 15.999c0-1.66 0-3 3-3h4c2.03 0 2.68-.46 2.9-1.37M12 2H8a9.475 9.475 0 0 0 0 6h4c.65-1.95.65-4.05 0-6Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M8 2H7C5 2 4 3 4 5s1 3 3 3h1C7 6 7 4 8 2ZM13 2h-1c1 2 1 4 0 6h1c2 0 3-1 3-3s-1-3-3-3ZM9.5 22h1c1.5 0 1.5-1 1.5-1.5v-3c0-.5 0-1.5-1.5-1.5h-1C8 16 8 17 8 17.5v3C8 21 8 22 9.5 22Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M15.52 2.9c-.6-.6-1.47-.9-2.59-.9H7.35C5.1 2 3.86 3.24 3.86 5.49c0 1.12.3 1.99.9 2.59.6.6 1.47.9 2.59.9h5.58c2.25 0 3.49-1.24 3.49-3.49 0-1.12-.3-1.99-.9-2.59Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M10.6 15.02h-.93c-.95 0-2.09.36-2.09 2.09v2.79c0 1.73 1.14 2.09 2.09 2.09h.93c.95 0 2.09-.36 2.09-2.09v-2.79c.01-1.72-1.13-2.09-2.09-2.09Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M16.65 4.79h-.28c.03.22.05.45.05.7 0 .25-.02.48-.05.7h.28c2.09 0 2.09.28 2.09 2.09v1.86c0 1.81 0 2.09-2.09 2.09h-3.72c-2.99 0-3.42 1.42-3.48 2.8.07 0 .15-.01.22-.01h.93c.08 0 .16.01.25.01.05-1.01.34-1.41 2.08-1.41h3.72c3.25 0 3.49-1.32 3.49-3.49V8.28c0-2.17-.24-3.49-3.49-3.49Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M10 16c0-1.66 0-3 3-3h4c3 0 3-1 3-3V8c0-2 0-3-3-3h-1M12 2H8a9.475 9.475 0 000 6h4c.65-1.95.65-4.05 0-6z"
    ></path>
    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M8 2H7C5 2 4 3 4 5s1 3 3 3h1C7 6 7 4 8 2zM13 2h-1c1 2 1 4 0 6h1c2 0 3-1 3-3s-1-3-3-3zM9.5 22h1c1.5 0 1.5-1 1.5-1.5v-3c0-.5 0-1.5-1.5-1.5h-1C8 16 8 17 8 17.5v3C8 21 8 22 9.5 22z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M10 16.75c-.41 0-.75-.34-.75-.75 0-1.67 0-3.75 3.75-3.75h4c2.25 0 2.25-.3 2.25-2.25V8c0-1.95 0-2.25-2.25-2.25h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c3.5 0 3.75 1.42 3.75 3.75v2c0 2.33-.25 3.75-3.75 3.75h-4c-2.25 0-2.25.61-2.25 2.25 0 .41-.34.75-.75.75ZM12 8.75H8c-.32 0-.61-.21-.71-.51a10.37 10.37 0 0 1 0-6.47c.1-.31.39-.52.71-.52h4c.32 0 .61.21.71.51.7 2.09.7 4.39 0 6.47-.1.31-.38.52-.71.52Zm-3.44-1.5h2.89a8.8 8.8 0 0 0 0-4.5H8.56a8.8 8.8 0 0 0 0 4.5Z"
      :fill="color"
    ></path>
    <path
      d="M8 8.75H7C4.58 8.75 3.25 7.42 3.25 5S4.58 1.25 7 1.25h1c.26 0 .5.13.64.36.14.22.15.5.03.73-.9 1.79-.9 3.54 0 5.33.12.23.1.51-.03.73-.14.22-.38.35-.64.35Zm-1.12-6c-1.49.04-2.13.71-2.13 2.25 0 1.53.64 2.21 2.12 2.25-.5-1.5-.5-3 .01-4.5ZM13 8.75h-1c-.26 0-.5-.13-.64-.36a.733.733 0 0 1-.03-.73c.89-1.79.89-3.54 0-5.33-.12-.23-.1-.51.03-.73.14-.22.38-.35.64-.35h1c2.42 0 3.75 1.33 3.75 3.75S15.42 8.75 13 8.75Zm.12-6c.5 1.5.5 3 0 4.5 1.49-.04 2.12-.71 2.12-2.25.01-1.54-.63-2.21-2.12-2.25ZM10.5 22.75h-1c-1.03 0-2.25-.39-2.25-2.25v-3c0-1.86 1.22-2.25 2.25-2.25h1c1.03 0 2.25.39 2.25 2.25v3c0 1.86-1.22 2.25-2.25 2.25Zm-1-6c-.75 0-.75.22-.75.75v3c0 .53 0 .75.75.75h1c.75 0 .75-.22.75-.75v-3c0-.53 0-.75-.75-.75h-1Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      opacity=".4"
      d="M10 16c0-1.66 0-3 3-3h4c3 0 3-1 3-3V8c0-2 0-3-3-3h-1"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M12 2H8a9.475 9.475 0 0 0 0 6h4c.65-1.95.65-4.05 0-6Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M8 2H7C5 2 4 3 4 5s1 3 3 3h1C7 6 7 4 8 2ZM13 2h-1c1 2 1 4 0 6h1c2 0 3-1 3-3s-1-3-3-3ZM9.5 22h1c1.5 0 1.5-1 1.5-1.5v-3c0-.5 0-1.5-1.5-1.5h-1C8 16 8 17 8 17.5v3C8 21 8 22 9.5 22Z"
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