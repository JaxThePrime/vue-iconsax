<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3.67 8.66l2.5-5a.76.76 0 01.67-.41h1c.28 0 .54.16.67.41l2.5 5c.19.37.04.82-.34 1.01a.8.8 0 01-.33.08c-.27 0-.54-.15-.67-.41l-2.29-4.59h-.07l-2.29 4.59a.757.757 0 11-1.35-.68zm9.06 4.98l-5 3c-.12.07-.25.11-.39.11s-.27-.04-.39-.11l-5-3a.755.755 0 01-.29-.98l1-2c.19-.37.64-.52 1.01-.34.37.19.52.64.34 1.01l-.69 1.38L12 17.12l4.02-2.41-.69-1.38a.745.745 0 01.34-1.01c.37-.18.82-.04 1.01.34l1 2c.17.35.04.78-.29.98z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="m9 11 2.5-5h1l2.5 5M8 13l-1 2 5 3 5-3-1-2"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      :fill="color"
    ></path>
    <path
      d="M15 11.752c-.27 0-.54-.15-.67-.41l-2.29-4.59h-.07l-2.29 4.59c-.18.37-.63.52-1.01.34a.763.763 0 0 1-.34-1.01l2.5-5a.76.76 0 0 1 .67-.41h1c.28 0 .54.16.67.41l2.5 5c.19.37.04.82-.34 1.01-.1.04-.22.07-.33.07ZM12 18.75c-.13 0-.27-.04-.39-.11l-5-3a.755.755 0 0 1-.29-.98l1-2c.19-.37.64-.52 1.01-.34.37.19.52.64.34 1.01l-.69 1.38L12 17.12l4.02-2.41-.69-1.38a.745.745 0 0 1 .34-1.01c.37-.18.82-.04 1.01.34l1 2c.18.35.05.78-.29.98l-5 3c-.12.07-.26.11-.39.11Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
    ></path>
    <path
      d="m9 11 2.5-5h1l2.5 5M8 13l-1 2 5 3 5-3-1-2"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
      :fill="color"
    ></path>
    <path
      d="M15 11.752c-.27 0-.54-.15-.67-.41l-2.29-4.59h-.07l-2.29 4.59c-.18.37-.63.52-1.01.34a.763.763 0 0 1-.34-1.01l2.5-5a.76.76 0 0 1 .67-.41h1c.28 0 .54.16.67.41l2.5 5c.19.37.04.82-.34 1.01-.1.04-.22.07-.33.07ZM12 18.75c-.13 0-.27-.04-.39-.11l-5-3a.755.755 0 0 1-.29-.98l1-2c.19-.37.64-.52 1.01-.34.37.19.52.64.34 1.01l-.69 1.38L12 17.12l4.02-2.41-.69-1.38a.745.745 0 0 1 .34-1.01c.37-.18.82-.04 1.01.34l1 2c.18.35.05.78-.29.98l-5 3c-.12.07-.26.11-.39.11Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
    ></path>
    <path
      opacity=".4"
      d="m9 11 2.5-5h1l2.5 5M8 13l-1 2 5 3 5-3-1-2"
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