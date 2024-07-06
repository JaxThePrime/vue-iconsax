<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M22.66 4.64c-.2-.36-.66-.5-1.02-.3L4.7 13.66c-.12-.54-.2-1.1-.2-1.66a7.503 7.503 0 0111.46-6.37.747.747 0 10.79-1.27A8.925 8.925 0 0012 3c-4.96 0-9 4.04-9 9 0 .81.11 1.61.32 2.39 0 .01.01.01.01.02l-1.69.93c-.36.2-.5.66-.3 1.02.14.25.39.39.66.39.12 0 .25-.03.36-.09l20-11c.36-.2.5-.66.3-1.02zM22.66 8.142c-.2-.36-.66-.5-1.02-.3l-2.11 1.16c-.03.02-.07.03-.1.06l-17.79 9.78c-.36.2-.5.66-.3 1.02.14.25.39.39.66.39.12 0 .25-.03.36-.09l17.03-9.37c.06.4.11.8.11 1.21a7.503 7.503 0 01-11.48 6.36.747.747 0 00-1.03.24c-.22.35-.12.81.24 1.03 1.43.9 3.08 1.37 4.78 1.37 4.96 0 9-4.04 9-9 0-.67-.1-1.32-.24-1.96l1.6-.88c.35-.2.49-.66.29-1.02z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M16.36 4.99A8.188 8.188 0 0 0 12 3.75c-4.56 0-8.25 3.69-8.25 8.25 0 .76.1 1.49.29 2.19M7.62 18.99c1.27.8 2.77 1.26 4.38 1.26 4.56 0 8.25-3.69 8.25-8.25 0-.82-.12-1.62-.34-2.36M13.93 9.44 22 5M2 16l8.05-4.43M22 8.5l-20 11"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M22.66 4.64c-.2-.36-.66-.5-1.02-.3L4.7 13.66c-.12-.54-.2-1.1-.2-1.66a7.503 7.503 0 0 1 11.46-6.37.747.747 0 1 0 .79-1.27A8.925 8.925 0 0 0 12 3c-4.96 0-9 4.04-9 9 0 .81.11 1.61.32 2.39 0 .01.01.01.01.02l-1.69.93c-.36.2-.5.66-.3 1.02.14.25.39.39.66.39.12 0 .25-.03.36-.09l20-11c.36-.2.5-.66.3-1.02Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M22.66 8.142c-.2-.36-.66-.5-1.02-.3l-2.11 1.16c-.03.02-.07.03-.1.06l-17.79 9.78c-.36.2-.5.66-.3 1.02.14.25.39.39.66.39.12 0 .25-.03.36-.09l17.03-9.37c.06.4.11.8.11 1.21a7.503 7.503 0 0 1-11.48 6.36.747.747 0 0 0-1.03.24c-.22.35-.12.81.24 1.03 1.43.9 3.08 1.37 4.78 1.37 4.96 0 9-4.04 9-9 0-.67-.1-1.32-.24-1.96l1.6-.88c.35-.2.49-.66.29-1.02Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M16.4 5c-1.3-.8-2.8-1.2-4.4-1.2-4.6 0-8.2 3.7-8.2 8.2 0 .8.1 1.5.3 2.2M7.6 19c1.3.8 2.8 1.3 4.4 1.3 4.6 0 8.2-3.7 8.2-8.2 0-.8-.1-1.6-.3-2.4M2 16 22 5M22 8.5l-20 11"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M4.04 14.94c-.33 0-.63-.22-.72-.55C3.11 13.61 3 12.81 3 12c0-4.96 4.04-9 9-9 1.69 0 3.33.47 4.75 1.36a.747.747 0 1 1-.79 1.27 7.503 7.503 0 0 0-11.19 8.36c.11.4-.13.81-.53.92-.06.02-.13.03-.2.03ZM12 20.999c-1.7 0-3.35-.48-4.78-1.37a.747.747 0 1 1 .79-1.27c1.19.75 2.57 1.14 3.98 1.14 4.14 0 7.5-3.36 7.5-7.5 0-.73-.11-1.46-.31-2.15a.748.748 0 0 1 1.43-.43c.25.83.38 1.7.38 2.58.01 4.96-4.03 9-8.99 9Z"
      :fill="color"
    ></path>
    <path
      d="M2 16.75a.76.76 0 0 1-.66-.39c-.2-.36-.07-.82.3-1.02l20-11c.36-.2.82-.07 1.02.3.2.36.07.82-.3 1.02l-20 11c-.11.06-.24.09-.36.09ZM2 20.25a.76.76 0 0 1-.66-.39c-.2-.36-.07-.82.3-1.02l20-11c.36-.2.82-.07 1.02.3.2.36.07.82-.3 1.02l-20 11c-.11.06-.24.09-.36.09Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M16.36 4.99A8.188 8.188 0 0 0 12 3.75c-4.56 0-8.25 3.69-8.25 8.25 0 .76.1 1.49.29 2.19M2 16 22 5"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <g
      opacity=".4"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M7.621 18.99c1.27.8 2.77 1.26 4.38 1.26 4.56 0 8.25-3.69 8.25-8.25 0-.82-.12-1.62-.34-2.36M22 8.5l-20 11"></path>
    </g>
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