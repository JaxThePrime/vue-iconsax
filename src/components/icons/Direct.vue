<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M21.3 12.23h-3.48c-.98 0-1.85.54-2.29 1.42l-.84 1.66c-.2.4-.6.65-1.04.65h-3.28c-.31 0-.75-.07-1.04-.65l-.84-1.65a2.567 2.567 0 0 0-2.29-1.42H2.7c-.39 0-.7.31-.7.7v3.26C2 19.83 4.18 22 7.82 22h8.38c3.43 0 5.54-1.88 5.8-5.22v-3.85c0-.38-.31-.7-.7-.7Z"
      :fill="color"
    ></path>
    <path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v3.04c.22-.08.46-.12.7-.12h3.5c1.55 0 2.94.86 3.63 2.25l.75 1.47h2.86l.75-1.48a4.035 4.035 0 0 1 3.63-2.24h3.48c.24 0 .48.04.7.12V7.81C22 4.17 19.83 2 16.19 2Zm-5.74 3.41h3.1c.38 0 .7.31.7.69 0 .39-.32.7-.7.7h-3.1c-.38 0-.7-.31-.7-.7a.7.7 0 0 1 .7-.69Zm3.88 4.18H9.67c-.38 0-.69-.31-.69-.69 0-.39.31-.7.69-.7h4.66c.38 0 .69.31.69.7 0 .38-.31.69-.69.69Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M2.69 19.01C3.65 21.1 5.65 22 9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M2 12.998h3.76a2 2 0 0 1 1.79 1.11l.89 1.79c.56 1.1 1.56 1.1 1.8 1.1h3.53a2 2 0 0 0 1.79-1.11l.89-1.79a2 2 0 0 1 1.79-1.11h3.74M13.66 10h.84M9.5 10h1.58M10.34 7h3.33"
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
      d="M21.3 12.23h-3.48c-.98 0-1.85.54-2.29 1.42l-.84 1.66c-.2.4-.6.65-1.04.65h-3.28c-.31 0-.75-.07-1.04-.65l-.84-1.65a2.567 2.567 0 0 0-2.29-1.42H2.7c-.39 0-.7.31-.7.7v3.26C2 19.83 4.18 22 7.82 22h8.38c3.43 0 5.54-1.88 5.8-5.22v-3.85c0-.38-.31-.7-.7-.7ZM13.55 7.798h-3.1c-.39 0-.7-.31-.7-.7 0-.39.31-.7.7-.7h3.1c.39 0 .7.31.7.7 0 .39-.32.7-.7.7ZM14.329 10.591h-4.66c-.39 0-.7-.31-.7-.7 0-.39.31-.7.7-.7h4.65c.39 0 .7.31.7.7 0 .39-.31.7-.69.7Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M2 13h3.76a2 2 0 0 1 1.79 1.11l.89 1.79C9 17 10 17 10.24 17h3.53a2 2 0 0 0 1.79-1.11l.89-1.79a2 2 0 0 1 1.79-1.11h3.74M10.34 7h3.33M9.5 10h5"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      :fill="color"
    ></path>
    <path
      d="M13.758 17.75h-3.53c-1.1 0-1.97-.54-2.46-1.52l-.89-1.79c-.21-.43-.64-.69-1.12-.69h-3.77c-.41 0-.75-.34-.75-.75s.35-.75.76-.75h3.76c1.05 0 1.99.58 2.46 1.52l.89 1.79c.23.46.6.69 1.12.69h3.53c.48 0 .91-.26 1.12-.69l.89-1.79a2.73 2.73 0 0 1 2.46-1.52h3.74c.41 0 .75.34.75.75s-.34.75-.75.75h-3.74c-.48 0-.91.26-1.12.69l-.89 1.79a2.73 2.73 0 0 1-2.46 1.52ZM13.668 7.75h-3.33c-.42 0-.76-.34-.76-.75s.34-.75.75-.75h3.33c.41 0 .75.34.75.75s-.33.75-.74.75ZM14.5 10.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M2 12.998h3.76a2 2 0 0 1 1.79 1.11l.89 1.79c.56 1.1 1.56 1.1 1.8 1.1h3.53a2 2 0 0 0 1.79-1.11l.89-1.79a2 2 0 0 1 1.79-1.11h3.74M10.34 7h3.33M9.5 10h5"
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