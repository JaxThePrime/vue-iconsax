<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M19.73 16.1c0-.03.02-.06.02-.1V6.5c0-1.52-1.23-2.75-2.75-2.75h-3.93l1.41-1.17c.32-.27.36-.74.1-1.06a.758.758 0 0 0-1.06-.1l-3 2.5a.761.761 0 0 0 0 1.16l3 2.5c.14.12.31.17.48.17a.75.75 0 0 0 .48-1.33l-1.41-1.17H17c.69 0 1.25.56 1.25 1.25V16c0 .04.02.07.02.1-1.3.33-2.27 1.5-2.27 2.9 0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.4-.97-2.57-2.27-2.9ZM13.48 18.92l-3-2.5a.75.75 0 0 0-1.06.1.75.75 0 0 0 .1 1.06l1.41 1.17H7c-.69 0-1.25-.56-1.25-1.25V8c0-.04-.02-.07-.02-.1C7.03 7.57 8 6.4 8 5c0-1.66-1.34-3-3-3S2 3.34 2 5c0 1.4.97 2.57 2.27 2.9 0 .03-.02.06-.02.1v9.5c0 1.52 1.23 2.75 2.75 2.75h3.93l-1.41 1.17c-.32.27-.36.74-.1 1.06.15.18.36.27.58.27.17 0 .34-.06.48-.17l3-2.5a.761.761 0 0 0 0-1.16Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M19 16V6.5c0-1.1-.9-2-2-2h-5.5"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m14 2-3 2.5L14 7M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5 12v5.5c0 1.1.9 2 2 2h5.5"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m10 22 3-2.5-3-2.5M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M17 3.75h-3.93l1.41-1.17c.32-.27.36-.74.1-1.06a.758.758 0 0 0-1.06-.1l-3 2.5a.761.761 0 0 0 0 1.16l3 2.5c.14.12.31.17.48.17a.75.75 0 0 0 .48-1.33l-1.41-1.17H17c.69 0 1.25.56 1.25 1.25V16c0 .41.34.75.75.75s.75-.34.75-.75V6.5c0-1.52-1.23-2.75-2.75-2.75Z"
      :fill="color"
    ></path>
    <path d="M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" :fill="color"></path>
    <path
      opacity=".4"
      d="m13.48 18.92-3-2.5a.75.75 0 0 0-1.06.1.75.75 0 0 0 .1 1.06l1.41 1.17H7c-.69 0-1.25-.56-1.25-1.25V8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v9.5c0 1.52 1.23 2.75 2.75 2.75h3.93l-1.41 1.17c-.32.27-.36.74-.1 1.06.15.18.36.27.58.27.17 0 .34-.06.48-.17l3-2.5a.761.761 0 0 0 0-1.16Z"
      :fill="color"
    ></path>
    <path d="M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" :fill="color"></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M19 16V6.5c0-1.1-.9-2-2-2h-5.5"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m14 2-3 2.5L14 7M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5 8v9.5c0 1.1.9 2 2 2h5.5"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m10 22 3-2.5-3-2.5M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M19 16.75c-.41 0-.75-.34-.75-.75V6.5c0-.69-.56-1.25-1.25-1.25h-5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c1.52 0 2.75 1.23 2.75 2.75V16c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M14 7.75c-.17 0-.34-.06-.48-.17l-3-2.5a.761.761 0 0 1 0-1.16l3-2.5a.75.75 0 0 1 1.06.1c.27.32.22.79-.1 1.06L12.17 4.5l2.31 1.92c.32.27.36.74.1 1.06-.15.18-.37.27-.58.27ZM19 22.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25ZM12.5 20.25H7c-1.52 0-2.75-1.23-2.75-2.75V8c0-.41.34-.75.75-.75s.75.34.75.75v9.5c0 .69.56 1.25 1.25 1.25h5.5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M10 22.75a.75.75 0 0 1-.48-1.33l2.31-1.92-2.31-1.92a.758.758 0 0 1-.1-1.06c.27-.32.74-.36 1.06-.1l3 2.5a.761.761 0 0 1 0 1.16l-3 2.5c-.14.11-.31.17-.48.17ZM5 8.75C2.93 8.75 1.25 7.07 1.25 5c0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6C3.76 2.75 2.75 3.76 2.75 5S3.76 7.25 5 7.25 7.25 6.24 7.25 5 6.24 2.75 5 2.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <g opacity=".4" :stroke="color" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 16V6.5c0-1.1-.9-2-2-2h-5.5"></path>
      <path d="m14 2-3 2.5L14 7M5 8v9.5c0 1.1.9 2 2 2h5.5"></path>
      <path d="m10 22 3-2.5-3-2.5"></path>
    </g>
    <path
      d="M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
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