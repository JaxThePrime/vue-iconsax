<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M7.81 2c-1.49 0-2.73.36-3.68 1.05-.42.29-.79.66-1.08 1.08C2.36 5.08 2 6.32 2 7.81v8.38C2 19.83 4.17 22 7.81 22h7.47V2H7.81Zm4.31 10.53-2.56 2.56c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L10.52 12 8.5 9.97c-.3-.29-.3-.77 0-1.06.3-.29.77-.29 1.06 0l2.56 2.56c.29.29.29.77 0 1.06ZM16.78 2.031v19.95c1.23-.08 2.27-.43 3.09-1.03.42-.29.79-.66 1.08-1.08.69-.95 1.05-2.19 1.05-3.68v-8.38c0-3.44-1.94-5.57-5.22-5.78Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M1.97 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7M14.97 2v20"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="m7.97 9.441 2.56 2.56-2.56 2.56"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M2 7.81v8.38C2 19.83 4.17 22 7.81 22h8.38c.2 0 .4-.01.59-.02 1.23-.08 2.27-.43 3.09-1.03.42-.29.79-.66 1.08-1.08.69-.95 1.05-2.19 1.05-3.68V7.81c0-3.44-1.94-5.57-5.22-5.78-.19-.02-.39-.03-.59-.03H7.81c-1.49 0-2.73.36-3.68 1.05-.42.29-.79.66-1.08 1.08C2.36 5.08 2 6.32 2 7.81Z"
      :fill="color"
    ></path>
    <path
      d="M15.28 2v20h.91c.2 0 .4-.01.59-.02V2.03c-.19-.02-.39-.03-.59-.03h-.91ZM9.03 15.309c.19 0 .38-.07.53-.22l2.56-2.56c.29-.29.29-.77 0-1.06l-2.56-2.56a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l2.02 2.03-2.02 2.03c-.29.29-.29.77 0 1.06.14.15.33.22.53.22Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7ZM14.97 2v20"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M7.97 9.44 10.53 12l-2.56 2.56"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M14.97 22.75h-6c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.31 7.75-7.75 7.75Zm-6-20C4.36 2.75 2.72 4.39 2.72 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25h-6Z"
      :fill="color"
    ></path>
    <path
      d="M14.97 22.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v20c0 .41-.33.75-.75.75ZM7.97 15.309c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.03-2.03-2.03-2.03a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.56 2.56c.29.29.29.77 0 1.06l-2.56 2.56a.71.71 0 0 1-.53.22Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M14.97 2v20M7.97 9.441l2.56 2.56-2.56 2.56"
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