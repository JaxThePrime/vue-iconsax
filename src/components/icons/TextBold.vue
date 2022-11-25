<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M13.75 12.75H8.5v3.99c0 .28.23.51.51.51h4.74c1.24 0 2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25ZM14.5 9c0-1.24-1.01-2.25-2.25-2.25H9.01c-.28 0-.51.23-.51.51v3.99h3.75c1.24 0 2.25-1.01 2.25-2.25Z"
      :fill="color"
    ></path>
    <path
      d="M20.95 4.13c-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2H7.81c-.2 0-.4.01-.59.03C3.94 2.24 2 4.37 2 7.81v8.38c0 1.49.36 2.73 1.05 3.68.29.42.66.79 1.08 1.08.82.6 1.86.95 3.09 1.03.19.01.39.02.59.02h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-1.49-.36-2.73-1.05-3.68Zm-7.2 14.62H9.01c-1.11 0-2.01-.9-2.01-2.01V7.26c0-1.11.9-2.01 2.01-2.01h3.24C14.32 5.25 16 6.93 16 9c0 .96-.37 1.83-.97 2.49 1.43.53 2.47 1.89 2.47 3.51 0 2.07-1.68 3.75-3.75 3.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M4.879 4.5c0-1.1.9-2 2-2h5.12c2.62 0 4.75 2.13 4.75 4.75S14.619 12 11.999 12h-7.12V4.5ZM4.879 13.98V12h9.5c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75h-7.5c-1.1 0-2-.9-2-2v-1.54"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M22 7.81v8.38c0 3.64-2.17 5.81-5.81 5.81H7.81c-.2 0-.4-.01-.59-.02-1.23-.08-2.27-.43-3.09-1.03-.42-.29-.79-.66-1.08-1.08C2.36 18.92 2 17.68 2 16.19V7.81c0-3.44 1.94-5.57 5.22-5.78.19-.02.39-.03.59-.03h8.38c1.49 0 2.73.36 3.68 1.05.42.29.79.66 1.08 1.08.69.95 1.05 2.19 1.05 3.68Z"
      :fill="color"
    ></path>
    <path
      d="M15.03 11.49c.6-.66.97-1.53.97-2.49 0-2.07-1.68-3.75-3.75-3.75H9.01C7.9 5.25 7 6.15 7 7.26v9.48c0 1.11.9 2.01 2.01 2.01h4.74c2.07 0 3.75-1.68 3.75-3.75 0-1.62-1.03-2.98-2.47-3.51ZM8.5 7.26c0-.28.23-.51.51-.51h3.24c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25H8.5V7.26Zm5.25 9.99H9.01c-.28 0-.51-.23-.51-.51v-3.99h5.25c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M4.88 4.5c0-1.1.9-2 2-2H12c2.62 0 4.75 2.13 4.75 4.75S14.62 12 12 12H4.88V4.5ZM4.88 12h9.5c2.62 0 4.75 2.13 4.75 4.75S17 21.5 14.38 21.5h-7.5c-1.1 0-2-.9-2-2V12v0Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M11.999 12.75h-7.12c-.41 0-.75-.34-.75-.75V4.5c0-1.52 1.23-2.75 2.75-2.75h5.12c3.03 0 5.5 2.47 5.5 5.5s-2.47 5.5-5.5 5.5Zm-6.38-1.5h6.38c2.21 0 4-1.79 4-4s-1.79-4-4-4h-5.12c-.69 0-1.25.56-1.25 1.25v6.75h-.01Z"
      :fill="color"
    ></path>
    <path
      d="M14.379 22.25h-7.5c-1.52 0-2.75-1.23-2.75-2.75V12c0-.41.34-.75.75-.75h9.5c3.03 0 5.5 2.47 5.5 5.5s-2.47 5.5-5.5 5.5Zm-8.76-9.5v6.75c0 .69.56 1.25 1.25 1.25h7.5c2.21 0 4-1.79 4-4s-1.79-4-4-4h-8.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      opacity=".4"
      d="M4.879 4.5c0-1.1.9-2 2-2h5.12c2.62 0 4.75 2.13 4.75 4.75S14.619 12 11.999 12h-7.12V4.5Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M4.879 12h9.5c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75h-7.5c-1.1 0-2-.9-2-2V12v0Z"
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
            default: "currentColor",
        },
    },
})
</script>