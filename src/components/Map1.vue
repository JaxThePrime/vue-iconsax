<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M7.63 3.57c.178-.098.37.052.37.257v13.556c0 .223-.153.412-.35.516a1.448 1.448 0 0 0-.02.01l-2.35 1.34c-1.64.94-2.99.16-2.99-1.74V7.78c0-.63.45-1.41 1.01-1.73l4.33-2.48ZM14.722 6.103A.5.5 0 0 1 15 6.55v13.153a.5.5 0 0 1-.717.45l-4.25-2.047a.5.5 0 0 1-.283-.45V4.447a.5.5 0 0 1 .722-.449l4.25 2.105ZM22 6.49v9.73c0 .63-.45 1.41-1.01 1.73l-3.491 2.001a.5.5 0 0 1-.749-.434V6.33a.5.5 0 0 1 .252-.434L19.01 4.75C20.65 3.81 22 4.59 22 6.49Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="m4.27 5.492-.97.56c-.55.32-1.01 1.1-1.01 1.74v9.73c0 1.9 1.35 2.68 2.99 1.74l2.35-1.34c.51-.29 1.36-.32 1.89-.05l5.25 2.63c.53.26 1.38.24 1.89-.05l4.33-2.48c.55-.32 1.01-1.1 1.01-1.74v-9.74c0-1.9-1.35-2.68-2.99-1.74l-2.35 1.34c-.51.29-1.36.32-1.89.05l-5.25-2.62c-.53-.26-1.38-.24-1.89.05M8.559 4v13M15.73 6.621v13.38"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M8.56 3.34v14.33c-.34.01-.68.09-.93.24l-2.35 1.34c-1.64.94-2.99.16-2.99-1.74V7.78c0-.63.45-1.41 1.01-1.73l4.33-2.48c.25-.14.59-.22.93-.23Z"
      :fill="color"
    ></path>
    <path
      d="M15.729 6.33v14.33c-.35.01-.69-.05-.96-.18l-5.25-2.63c-.27-.13-.61-.19-.96-.18V3.34c.35-.01.69.05.96.18l5.25 2.63c.27.13.61.19.96.18Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M22 6.49v9.73c0 .63-.45 1.41-1.01 1.73l-4.33 2.48c-.25.14-.59.22-.93.23V6.33c.34-.01.68-.09.93-.24l2.35-1.34C20.65 3.81 22 4.59 22 6.49Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M2.29 7.78v9.73c0 1.9 1.35 2.68 2.99 1.74l2.35-1.34c.51-.29 1.36-.32 1.89-.05l5.25 2.63c.53.26 1.38.24 1.89-.05l4.33-2.48c.55-.32 1.01-1.1 1.01-1.74V6.49c0-1.9-1.35-2.68-2.99-1.74l-2.35 1.34c-.51.29-1.36.32-1.89.05L9.52 3.52c-.53-.26-1.38-.24-1.89.05L3.3 6.05c-.56.32-1.01 1.1-1.01 1.73ZM8.56 4v13M15.73 6.62V20"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M20.381 21.13a.75.75 0 0 1-.53-.22l-6.38-6.38a.754.754 0 0 1 0-1.06l7.73-7.73c.19-.19.48-.26.74-.19.26.08.46.29.52.55.19.85.29 1.8.29 2.9v6c0 2.77-.58 4.64-1.84 5.91-.14.14-.35.17-.53.22ZM15.061 14l5.26 5.26c.63-.97.93-2.35.93-4.26V9c0-.41-.01-.79-.04-1.15L15.061 14Z"
      :fill="color"
    ></path>
    <path
      d="M6.27 22.48c-.06 0-.11-.01-.17-.02-3.31-.76-4.85-3.13-4.85-7.46V9c0-5.43 2.32-7.75 7.75-7.75h6c4.33 0 6.7 1.54 7.46 4.85.06.25-.02.52-.2.7L6.8 22.26a.75.75 0 0 1-.53.22ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9v6c0 3.47.96 5.21 3.29 5.9L20.89 6.05c-.68-2.33-2.43-3.29-5.9-3.29H9v-.01Z"
      :fill="color"
    ></path>
    <path
      d="M15 22.751H9c-1.1 0-2.04-.09-2.9-.29a.728.728 0 0 1-.55-.52c-.08-.26 0-.54.19-.74l7.73-7.73c.29-.29.77-.29 1.06 0l6.38 6.38a.75.75 0 0 1 0 1.06c-1.27 1.26-3.14 1.84-5.91 1.84Zm-7.15-1.54c.36.03.74.04 1.15.04h6c1.92 0 3.29-.3 4.26-.93L14 15.061l-6.15 6.15ZM9.119 13.31c-.63 0-1.26-.23-1.76-.7-1.59-1.51-2.23-3.17-1.85-4.79.38-1.66 1.83-2.78 3.61-2.78 1.78 0 3.23 1.12 3.61 2.78.37 1.63-.27 3.28-1.86 4.79-.49.46-1.12.7-1.75.7Zm-2.15-5.16c-.32 1.36.6 2.58 1.43 3.37.41.39 1.04.39 1.44 0 .82-.78 1.74-2 1.43-3.37-.27-1.19-1.33-1.62-2.15-1.62-.82 0-1.87.43-2.15 1.62Z"
      :fill="color"
    ></path>
    <path
      d="M9.148 9.488c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.46 1-1.01 1Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M22 9v6c0 2.5-.5 4.25-1.62 5.38L14 14l7.73-7.73c.18.79.27 1.69.27 2.73z"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M21.73 6.27L6.27 21.73C3.26 21.04 2 18.96 2 15V9c0-5 2-7 7-7h6c3.96 0 6.04 1.26 6.73 4.27z"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M20.38 20.38C19.25 21.5 17.5 22 15 22H9c-1.04 0-1.94-.09-2.73-.27L14 14l6.38 6.38z"
    ></path>
    <path
      :stroke="color"
      strokeWidth="1.5"
      d="M6.24 7.98c.68-2.93 5.08-2.93 5.76 0 .39 1.72-.69 3.18-1.64 4.08a1.8 1.8 0 01-2.48 0c-.95-.9-2.04-2.36-1.64-4.08z"
      opacity=".4"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9.094 8.7h.01"
      opacity=".4"
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