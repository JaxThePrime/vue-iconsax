<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M12 2C6.48 2 2 6.15 2 11.26c0 2.9 1.44 5.48 3.68 7.18v1.85c0 .77.82 1.25 1.49.87l1.86-1.05c.94.27 1.93.41 2.96.41 5.52 0 10-4.15 10-9.26C22 6.15 17.52 2 12 2zm3.51 8.44l-2.5 2.99c-.16.19-.42.23-.63.11l-1.01-.59a.523.523 0 00-.37-.05l-2.01.49a.502.502 0 01-.5-.81l2.54-3.02c.15-.18.41-.23.62-.12l1.18.62a.5.5 0 00.36.04l1.82-.47c.46-.12.81.44.5.81z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M4.13 5.55C2.8 7.12 2 9.11 2 11.26c0 2.9 1.44 5.48 3.68 7.18V22l3.36-1.89c.94.27 1.93.41 2.96.41 5.52 0 10-4.15 10-9.26C22 6.15 17.52 2 12 2c-1.38 0-2.7.26-3.89.73"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="m11.28 9.25-3.78 4.5 3.69-.9 1.55.9 3.76-4.5-3.51.9-1.71-.9Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M5.68 18.44v1.85c0 .77.82 1.25 1.49.87l1.86-1.05c.94.27 1.93.41 2.96.41 5.52 0 10-4.15 10-9.26 0-5.11-4.48-9.26-10-9.26s-10 4.15-10 9.26c.01 2.89 1.45 5.48 3.69 7.18Z"
      :fill="color"
    ></path>
    <path
      d="m11.02 9.558-2.54 3.02c-.31.37.03.92.5.81l2.01-.49c.13-.03.26-.01.37.05l1.01.59c.21.12.48.08.63-.11l2.5-2.99c.31-.37-.04-.93-.51-.8l-1.82.47a.5.5 0 0 1-.36-.04l-1.18-.62a.478.478 0 0 0-.61.11Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M5.7 18.4V22L9 20.1c.9.3 1.9.4 3 .4 5.5 0 10-4.1 10-9.3C22 6.1 17.5 2 12 2S2 6.1 2 11.3c0 2.9 1.4 5.4 3.7 7.1Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="m11.3 9.2-3.8 4.5 3.7-.9 1.5.9 3.8-4.5-3.5.9-1.7-.9Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M5.68 22.75a.743.743 0 0 1-.75-.75v-3.2c-2.35-1.91-3.68-4.63-3.68-7.54C1.25 5.74 6.07 1.25 12 1.25s10.75 4.49 10.75 10.01S17.93 21.27 12 21.27c-.97 0-1.93-.12-2.86-.36l-3.09 1.74c-.11.07-.24.1-.37.1Zm6.32-20c-5.1 0-9.25 3.82-9.25 8.51 0 2.56 1.23 4.96 3.39 6.58.19.14.3.36.3.6v2.28l2.24-1.26c.17-.1.38-.12.57-.07.89.25 1.82.38 2.75.38 5.1 0 9.25-3.82 9.25-8.51 0-4.69-4.15-8.51-9.25-8.51Z"
      :fill="color"
    ></path>
    <path
      d="M7.5 14.5c-.25 0-.5-.13-.64-.35a.752.752 0 0 1 .06-.88l3.78-4.5c.23-.27.61-.35.92-.18l1.45.77 3.23-.83a.752.752 0 0 1 .76 1.21l-3.76 4.5c-.23.28-.64.35-.95.17l-1.29-.75-3.4.83c-.04 0-.1.01-.16.01Zm3.69-2.4c.13 0 .26.03.38.1l1 .58 1.86-2.23-1.26.32a.78.78 0 0 1-.54-.06l-1.17-.62-1.92 2.28 1.46-.36c.07 0 .13-.01.19-.01Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M5.68 18.44V22l3.36-1.89c.94.27 1.93.41 2.96.41 5.52 0 10-4.15 10-9.26C22 6.15 17.52 2 12 2S2 6.15 2 11.26c0 2.89 1.44 5.48 3.68 7.18Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      opacity=".4"
      d="m11.28 9.25-3.78 4.5 3.69-.9 1.55.9 3.76-4.5-3.51.9-1.71-.9Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
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