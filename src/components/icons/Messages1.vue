<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M13.19 6h-6.4c-.26 0-.51.01-.75.04C3.35 6.27 2 7.86 2 10.79v4c0 4 1.6 4.79 4.79 4.79h.4c.22 0 .51.15.64.32l1.2 1.6c.53.71 1.39.71 1.92 0l1.2-1.6c.15-.2.39-.32.64-.32h.4c2.93 0 4.52-1.34 4.75-4.04.03-.24.04-.49.04-.75v-4c0-3.19-1.6-4.79-4.79-4.79ZM6.5 14c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm3.49 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Zm3.5 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z"
      :fill="color"
    ></path>
    <path
      d="M21.98 6.79v4c0 2-.62 3.36-1.86 4.11-.3.18-.65-.06-.65-.41l.01-3.7c0-4-2.29-6.29-6.29-6.29l-6.09.01c-.35 0-.59-.35-.41-.65C7.44 2.62 8.8 2 10.79 2h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M2 10.79c0-2.93 1.35-4.52 4.04-4.75.24-.03.49-.04.75-.04h6.4c3.19 0 4.79 1.6 4.79 4.79v4c0 .26-.01.51-.04.75-.23 2.7-1.82 4.04-4.75 4.04h-.4c-.25 0-.49.12-.64.32l-1.2 1.6c-.53.71-1.39.71-1.92 0l-1.2-1.6a.924.924 0 0 0-.64-.32h-.4C3.6 19.58 2 18.79 2 14.79"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M21.98 6.79c0-3.19-1.6-4.79-4.79-4.79h-6.4C7.86 2 6.27 3.35 6.04 6.04c.24-.03.49-.04.75-.04h6.4c3.19 0 4.79 1.6 4.79 4.79v4c0 .26-.01.51-.04.75 2.69-.23 4.04-1.81 4.04-4.75"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M13.495 13.25h.01M9.995 13.25h.01M6.495 13.25h.01"
      :stroke="color"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M17.98 10.79v4c0 .26-.01.51-.04.75-.23 2.7-1.82 4.04-4.75 4.04h-.4c-.25 0-.49.12-.64.32l-1.2 1.6c-.53.71-1.39.71-1.92 0l-1.2-1.6a.924.924 0 0 0-.64-.32h-.4C3.6 19.58 2 18.79 2 14.79v-4c0-2.93 1.35-4.52 4.04-4.75.24-.03.49-.04.75-.04h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
      :fill="color"
    ></path>
    <path
      d="M9.988 14c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1ZM13.488 14c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1ZM6.5 14c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z"
      :fill="color"
    ></path>
    <path
      d="M21.98 6.79v4c0 2.94-1.35 4.52-4.04 4.75.03-.24.04-.49.04-.75v-4c0-3.19-1.6-4.79-4.79-4.79h-6.4c-.26 0-.51.01-.75.04C6.27 3.35 7.86 2 10.79 2h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M17.98 10.79v4c0 .26-.01.51-.04.75-.23 2.7-1.82 4.04-4.75 4.04h-.4c-.25 0-.49.12-.64.32l-1.2 1.6c-.53.71-1.39.71-1.92 0l-1.2-1.6a.924.924 0 0 0-.64-.32h-.4C3.6 19.58 2 18.79 2 14.79v-4c0-2.93 1.35-4.52 4.04-4.75.24-.03.49-.04.75-.04h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M21.98 6.79v4c0 2.94-1.35 4.52-4.04 4.75.03-.24.04-.49.04-.75v-4c0-3.19-1.6-4.79-4.79-4.79h-6.4c-.26 0-.51.01-.75.04C6.27 3.35 7.86 2 10.79 2h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M13.495 13.25h.01M9.995 13.25h.01M6.495 13.25h.01"
      :stroke="color"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M7.26 18.892c-.08 0-.16-.01-.24-.02-.6-.08-1.11-.46-1.36-1l-1.26-2.77c-2-1.48-3.15-3.69-3.15-6.09 0-4.27 3.7-7.75 8.25-7.75 3.21 0 6.14 1.76 7.47 4.49.51 1.01.78 2.11.78 3.26 0 4.16-3.51 7.57-7.89 7.74l-1.26 1.52c-.34.39-.83.62-1.34.62ZM9.5 2.752c-3.72 0-6.75 2.8-6.75 6.25 0 1.97.98 3.79 2.68 4.99.11.08.2.18.25.3l1.34 2.95c.05.11.15.14.2.14.05.01.15 0 .22-.08l1.48-1.78c.14-.17.35-.27.58-.27 3.72 0 6.75-2.8 6.75-6.25 0-.91-.21-1.78-.62-2.59-1.08-2.23-3.49-3.66-6.13-3.66Z"
      :fill="color"
    ></path>
    <path
      d="M16.74 22.75c-.52 0-1-.23-1.34-.63l-1.26-1.51c-2.42-.1-4.7-1.21-6.16-3.01a.74.74 0 0 1 .01-.95l.93-1.12c.14-.17.35-.27.58-.27 3.72 0 6.75-2.8 6.75-6.25 0-.91-.21-1.78-.62-2.59a.75.75 0 0 1 .84-1.07c3.7.85 6.28 3.94 6.28 7.52 0 2.4-1.15 4.61-3.15 6.09l-1.26 2.77c-.26.56-.77.94-1.38 1.01-.07.01-.15.01-.22.01ZM9.56 17.1c1.25 1.27 3.05 2.01 4.94 2.01.22 0 .43.1.58.27l1.48 1.78c.07.09.16.1.22.09.04 0 .15-.03.21-.15l1.34-2.95c.06-.12.14-.23.25-.3 1.7-1.2 2.68-3.02 2.68-4.99 0-2.4-1.47-4.53-3.71-5.58.14.56.21 1.13.21 1.72 0 4.16-3.51 7.57-7.89 7.74l-.31.36ZM12 9.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M17.98 10.79v4c0 .26-.01.51-.04.75-.23 2.7-1.82 4.04-4.75 4.04h-.4c-.25 0-.49.12-.64.32l-1.2 1.6c-.53.71-1.39.71-1.92 0l-1.2-1.6a.924.924 0 0 0-.64-.32h-.4C3.6 19.58 2 18.79 2 14.79v-4c0-2.93 1.35-4.52 4.04-4.75.24-.03.49-.04.75-.04h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M21.98 6.79v4c0 2.94-1.35 4.52-4.04 4.75.03-.24.04-.49.04-.75v-4c0-3.19-1.6-4.79-4.79-4.79h-6.4c-.26 0-.51.01-.75.04C6.27 3.35 7.86 2 10.79 2h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M13.495 13.25h.01M9.995 13.25h.01M6.495 13.25h.01"
      :stroke="color"
      strokeWidth="2"
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