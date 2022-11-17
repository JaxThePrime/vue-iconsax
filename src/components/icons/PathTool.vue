<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="m20.02 10.7-2.12 1.34c-.4.25-.91.19-1.24-.14l-4.53-4.53a.998.998 0 0 1-.14-1.24l1.34-2.12c.82-1.29 2.46-1.35 3.67-.15l3.18 3.18c1.12 1.13 1.05 2.89-.16 3.66ZM14.71 19.95l-8.72 1.02c-.077.01-.154.017-.23.022-.684.04-.854-.767-.369-1.253l2.59-2.59c.32-.31.32-.8 0-1.11a.779.779 0 0 0-1.11 0l-2.59 2.59c-.485.486-1.285.315-1.249-.37a3.47 3.47 0 0 1 .019-.22l1.03-8.72c.26-2.18 1.06-2.9 3.36-2.76l1.5.09c.49.03.95.24 1.3.59l6.55 6.55c.35.35.56.81.58 1.3l.09 1.5c.23 2.31-.56 3.11-2.75 3.36Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="m19.79 7.268-3.03-3.03c-1.15-1.15-2.72-1.09-3.49.14l-1.69 2.67 5.4 5.4 2.67-1.69c1.15-.73 1.22-2.41.14-3.49Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M7.65 6.808c-2.19-.13-2.96.54-3.2 2.63l-.98 8.32c-.21 1.75 1.06 3.01 2.8 2.8l8.32-.98c2.09-.25 2.85-1.01 2.63-3.2l-.23-3.93M4.61 19.419l3.03-3.04"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="m20.02 10.7-2.8 1.77-5.66-5.66 1.76-2.8c.82-1.29 2.46-1.35 3.67-.15l3.18 3.18c1.13 1.13 1.06 2.89-.15 3.66Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M14.71 19.95 6 20.98c-.6.07-1.14-.02-1.59-.24a2.39 2.39 0 0 1-1.11-1.11c-.22-.45-.3-.99-.24-1.58L4.1 9.33c.25-2.18 1.06-2.89 3.36-2.76l4.12.25 5.66 5.66.24 4.12c.21 2.3-.58 3.1-2.77 3.35Z"
      :fill="color"
    ></path>
    <path
      d="M7.98 17.15 4.4 20.73a2.39 2.39 0 0 1-1.11-1.11l3.59-3.59c.31-.3.81-.3 1.11 0 .31.32.31.81-.01 1.12Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M19.79 7.27l-3.03-3.03c-1.15-1.15-2.72-1.09-3.49.14l-1.69 2.67 5.4 5.4 2.67-1.69c1.15-.73 1.22-2.41.14-3.49z"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M11.58 7.05l-3.93-.24c-2.19-.13-2.96.54-3.2 2.63l-.98 8.32c-.21 1.75 1.06 3.01 2.8 2.8l8.32-.98c2.09-.25 2.85-1.01 2.63-3.2l-.23-3.93M4.61 19.42l3.03-3.04"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M16.98 13.201c-.19 0-.39-.08-.53-.22l-5.4-5.41a.742.742 0 0 1-.1-.93l1.69-2.67c.47-.74 1.18-1.2 2.01-1.29.93-.09 1.89.27 2.64 1.02l3.03 3.03c.72.72 1.08 1.69.97 2.65-.09.84-.54 1.57-1.24 2.01l-2.67 1.69c-.12.08-.26.12-.4.12Zm-4.45-6.26 4.56 4.56 2.17-1.37c.31-.2.51-.52.55-.91.06-.5-.15-1.03-.54-1.42l-3.03-3.03c-.43-.43-.95-.66-1.42-.59-.38.04-.69.25-.91.6l-1.38 2.16Z"
      :fill="color"
    ></path>
    <path
      d="M5.89 21.339c-.89 0-1.69-.32-2.29-.91-.7-.7-1.01-1.67-.88-2.75l.98-8.33c.3-2.52 1.41-3.44 4-3.29l3.92.23c.41.03.73.38.7.79-.03.41-.38.73-.79.7l-3.92-.22c-1.78-.11-2.22.24-2.42 1.97l-.98 8.32c-.07.61.09 1.15.45 1.51.37.36.91.53 1.52.45l8.32-.98c1.75-.21 2.14-.67 1.97-2.39l-.24-3.95c-.02-.41.29-.77.7-.79.41-.03.77.29.79.7l.23 3.92c.24 2.49-.74 3.69-3.29 4l-8.32.98c-.14.03-.3.04-.45.04Z"
      :fill="color"
    ></path>
    <path
      d="M4.61 20.17c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.04-3.04c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.04 3.04c-.15.15-.34.22-.53.22Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="m19.79 7.268-3.03-3.03c-1.15-1.15-2.72-1.09-3.49.14l-1.69 2.67 5.4 5.4 2.67-1.69c1.15-.73 1.22-2.41.14-3.49Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m11.58 7.052-3.93-.24c-2.19-.13-2.96.54-3.2 2.63l-.98 8.32c-.21 1.75 1.06 3.01 2.8 2.8l8.32-.98c2.09-.25 2.85-1.01 2.63-3.2l-.23-3.93"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="m4.61 19.419 3.03-3.04"
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