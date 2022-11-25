<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M21.4 12.95l-2.78 1.39c-.19.1-.42.06-.58-.09l-1.87-1.87c-.2-.2-.2-.51 0-.71l1.9-1.9c.15-.15.39-.19.58-.09l2.75 1.38c.79.38.79 1.5 0 1.89zM16.3 8.491c.31.15.37.56.13.8l-1.67 1.67-.71.71c-.2.2-.51.2-.71 0L6.2 4.532c-.399-.4.07-1.05.58-.8l9.52 4.76zM2 20.15V3.48c0-.44.53-.67.85-.36l8.77 8.51c.21.2.2.53-.01.73l-8.77 8.16a.5.5 0 01-.84-.37zM16.27 15.519l-9.39 4.7c-.51.25-.98-.4-.58-.8l7.05-7.05c.2-.2.51-.2.71 0l2.35 2.35c.23.24.16.65-.14.8z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="m21.4 12.95-4.52 2.26-3.19-3.19 3.22-3.22 4.49 2.25c.79.39.79 1.51 0 1.9Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M2 9.058v-5.99c0-.8.83-1.31 1.55-.96l13.37 6.69-3.22 3.22-9.58 9.58-.58.29c-.71.35-1.54-.16-1.54-.96v-7.36M16.89 15.21 4.12 21.6l9.58-9.58 3.19 3.19ZM13.7 12.02 4.09 2.41M16.92 15.24l-.03-.03"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="m21.4 12.95-4.51 2.26-3.19-3.19 3.22-3.22 4.48 2.25c.79.39.79 1.51 0 1.9Z"
      :fill="color"
    ></path>
    <path d="m16.92 8.802-3.22 3.22-9.67-9.67 12.89 6.45Z" :fill="color"></path>
    <path
      opacity=".4"
      d="m13.7 12.018-9.58 9.58-.57.29c-.72.35-1.55-.16-1.55-.96V3.068c0-.8.83-1.31 1.55-.96l.48.24 9.67 9.67Z"
      :fill="color"
    ></path>
    <path d="M16.89 15.21 4.12 21.6l9.58-9.58 3.19 3.19Z" :fill="color"></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="m21.4 12.9-4.5 2.3-3.2-3.2 3.2-3.2 4.5 2.2c.8.4.8 1.6 0 1.9Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M16.9 8.8 13.7 12l-9.6 9.6-.6.3c-.7.4-1.5-.2-1.5-1V3.1c0-.8.8-1.3 1.5-1l13.4 6.7Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M16.9 15.2 4.1 21.6l9.6-9.6 3.2 3.2ZM13.7 12 4.1 2.4"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M16.89 15.959c-.19 0-.39-.08-.53-.22l-3.19-3.19a.754.754 0 0 1 0-1.06l3.22-3.22a.76.76 0 0 1 .87-.14l4.49 2.25c.62.3 1.01.92 1.01 1.62 0 .7-.39 1.32-1.01 1.62l-4.51 2.26a.93.93 0 0 1-.35.08Zm-2.13-3.94 2.27 2.27 4.03-2.02h.01c.15-.07.17-.2.17-.27s-.02-.2-.17-.27l-4.01-2.01-2.3 2.3Z"
      :fill="color"
    ></path>
    <path
      d="M3.07 22.749c-.33 0-.67-.09-.96-.28-.54-.33-.86-.91-.86-1.55V3.06c0-.63.32-1.21.86-1.55.54-.33 1.2-.37 1.77-.08l13.37 6.69c.22.11.37.31.4.55.03.24-.04.48-.21.65l-12.8 12.8c-.06.06-.12.1-.2.14l-.58.29c-.24.14-.52.2-.79.2Zm0-20a.38.38 0 0 0-.17.05.3.3 0 0 0-.15.27v17.86c0 .16.09.24.15.27.06.04.17.08.32.01l.46-.23L15.65 9.01 3.21 2.79a.273.273 0 0 0-.14-.04Z"
      :fill="color"
    ></path>
    <path
      d="M4.12 22.35c-.23 0-.46-.11-.61-.31-.22-.3-.18-.71.08-.97l9.58-9.58a.75.75 0 0 1 1.06 0l3.19 3.19c.17.17.25.41.21.65a.76.76 0 0 1-.4.55L4.47 22.27a.89.89 0 0 1-.35.08Zm9.58-9.27-5.77 5.77L15.62 15l-1.92-1.92Z"
      :fill="color"
    ></path>
    <path
      d="M13.7 12.771c-.19 0-.38-.07-.53-.22l-9.61-9.61a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l9.61 9.61c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22ZM16.9 15.98c-.18 0-.37-.07-.51-.22l-.03-.03a.746.746 0 0 1 .01-1.06c.3-.29.77-.29 1.06.01.29.29.3.79.01 1.08-.16.15-.35.22-.54.22Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="m16.92 8.798-3.22 3.22-9.58 9.58-.58.29c-.71.35-1.54-.16-1.54-.96V3.068c0-.8.83-1.31 1.55-.96l13.37 6.69Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <g
      opacity=".4"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.4 12.95-4.52 2.26-3.19-3.19 3.22-3.22 4.49 2.25c.79.39.79 1.51 0 1.9Z"></path>
      <path d="M16.89 15.21 4.12 21.6l9.58-9.58 3.19 3.19ZM13.7 12.02 4.09 2.41"></path>
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
            default: 32,
        },
        color: {
            type: String,
            default: "currentColor",
        },
    },
})
</script>