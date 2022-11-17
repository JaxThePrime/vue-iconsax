<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M18 16.012c.55 0 1 .45 1 1v.99c0 2.2-1.5 4-4 4H9c-2.5 0-4-1.8-4-4v-.99c0-.55.45-1 1-1h12ZM19 6v7.5c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V6c0-2.2 1.5-4 4-4h6c2.5 0 4 1.8 4 4ZM3 20.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75ZM21 20.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M15 2c2.5 0 4 1.8 4 4v12c0 2.2-1.5 4-4 4H9c-2.5 0-4-1.8-4-4V6c0-2.2 1.5-4 4-4h1.98M5 16.012h14M2 4v16M22 4v16"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path d="M19 16.012v1.99c0 2.2-1.5 4-4 4H9c-2.5 0-4-1.8-4-4v-1.99h14Z" :fill="color"></path>
    <path opacity=".4" d="M19 6v10.01H5V6c0-2.2 1.5-4 4-4h6c2.5 0 4 1.8 4 4Z" :fill="color"></path>
    <path
      d="M3 20.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75ZM21 20.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M15 22H9c-2.5 0-4-1.8-4-4V6c0-2.2 1.5-4 4-4h6c2.5 0 4 1.8 4 4v12c0 2.2-1.5 4-4 4ZM5 16.01h14M2 4v16M22 4v16"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M15 22.75H9c-2.75 0-4.75-2-4.75-4.75V6c0-2.75 2-4.75 4.75-4.75h6c2.75 0 4.75 2 4.75 4.75v12c0 2.75-2 4.75-4.75 4.75Zm-6-20C6.75 2.75 5.75 4.38 5.75 6v12c0 1.62 1 3.25 3.25 3.25h6c2.25 0 3.25-1.63 3.25-3.25V6c0-1.62-1-3.25-3.25-3.25H9Z"
      :fill="color"
    ></path>
    <path
      d="M19 16.762H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14c.41 0 .75.34.75.75s-.34.75-.75.75ZM2 20.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75ZM22 20.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M15 22H9c-2.5 0-4-1.8-4-4V6c0-2.2 1.5-4 4-4h6c2.5 0 4 1.8 4 4v12c0 2.2-1.5 4-4 4Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M5 16.012h14M2 4v16M22 4v16"
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