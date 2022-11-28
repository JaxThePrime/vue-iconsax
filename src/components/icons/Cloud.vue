<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M21.74 12.909c-.26-.86-.69-1.61-1.26-2.22a5.26 5.26 0 0 0-2.79-1.65c-.55-2.5-2.09-4.3-4.28-4.97-2.38-.74-5.14-.02-6.87 1.79-1.52 1.59-2.02 3.78-1.43 6.11-2 .49-2.99 2.16-3.1 3.75-.01.11-.01.21-.01.31 0 1.88 1.23 3.99 3.97 4.19h10.38c1.42 0 2.78-.53 3.82-1.48 1.63-1.43 2.23-3.66 1.57-5.83Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M15.852 9.922c.52-.26 1.09-.4 1.67-.41M11.99 3.9c-4.01-.33-8.37 3.13-6.4 8.62"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M7.261 12.93a3.79 3.79 0 0 0-1.72-.41c-4.68.33-4.68 7.14 0 7.47h11.09c1.35.01 2.65-.49 3.64-1.4 3.29-2.87 1.53-8.64-2.8-9.19-.24-1.46-.78-2.61-1.49-3.47"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M15.84 9.84c.52-.26 1.09-.4 1.67-.41"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="m20.482 10.689-18.47 5.03c.11-1.59 1.1-3.26 3.1-3.75-.59-2.33-.09-4.52 1.43-6.11 1.73-1.81 4.49-2.53 6.87-1.79 2.19.67 3.73 2.47 4.28 4.97 1.09.25 2.06.82 2.79 1.65Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M20.17 18.741a5.66 5.66 0 0 1-3.82 1.48H5.97c-2.74-.2-3.97-2.31-3.97-4.19 0-.1 0-.2.01-.31l18.47-5.03c.57.61 1 1.36 1.26 2.22.66 2.17.06 4.4-1.57 5.83Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M7.27 13.01a3.79 3.79 0 0 0-1.72-.41c-4.68.33-4.68 7.14 0 7.47h11.09c1.35.01 2.65-.49 3.64-1.4 3.29-2.87 1.53-8.64-2.8-9.19C15.92.11 2.39 3.67 5.6 12.6"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M15.85 9.92c.52-.26 1.09-.4 1.67-.41"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M16.68 20.831H5.55c-2.94-.21-4.26-2.47-4.26-4.49 0-1.8 1.05-3.8 3.34-4.35-.64-2.5-.1-4.85 1.53-6.55 1.85-1.94 4.82-2.71 7.37-1.92 2.34.72 3.99 2.65 4.59 5.33 2.05.46 3.68 2.01 4.34 4.15.71 2.33.07 4.72-1.68 6.25a6.128 6.128 0 0 1-4.1 1.58Zm-11.11-7.48h-.02c-1.9.14-2.77 1.6-2.77 2.99 0 1.39.87 2.85 2.81 2.99h11.04c1.16-.02 2.27-.42 3.13-1.2 1.56-1.37 1.67-3.32 1.25-4.69-.42-1.38-1.59-2.94-3.63-3.2a.753.753 0 0 1-.65-.62c-.4-2.4-1.7-4.06-3.65-4.66-2.03-.62-4.37-.01-5.84 1.52-1.33 1.39-1.71 3.31-1.09 5.42.51.07 1 .22 1.45.45.37.19.52.64.33 1.01a.75.75 0 0 1-1.01.33 2.88 2.88 0 0 0-1.31-.32c-.01-.02-.02-.02-.04-.02Z"
      :fill="color"
    ></path>
    <path
      d="M15.848 10.67c-.28 0-.54-.15-.67-.42a.754.754 0 0 1 .34-1.01c.62-.31 1.31-.48 1.99-.49.4-.01.76.32.76.74.01.41-.32.76-.74.76-.46.01-.93.12-1.35.33-.11.06-.22.09-.33.09Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M7.27 13.009a3.79 3.79 0 0 0-1.72-.41c-4.68.33-4.68 7.14 0 7.47h11.09c1.35.01 2.65-.49 3.64-1.4 3.29-2.87 1.53-8.64-2.8-9.19-1.56-9.37-15.09-5.81-11.88 3.12"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M15.852 9.922c.52-.26 1.09-.4 1.67-.41"
      :stroke="color"
      stroke-width="1.5"
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
    },
})
</script>