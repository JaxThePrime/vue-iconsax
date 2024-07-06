<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M17.92 6.37a4.42 4.42 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53.74.49 1.62.77 2.56.77 1.74 0 3.25-.93 4.07-2.3.44-.72.68-1.56.68-2.45a4.74 4.74 0 0 0-3.71-4.63Zm.91 4.2L16.4 13c-.09.09-.28.18-.41.2l-.93.13c-.34.05-.57-.19-.52-.52l.13-.93c.02-.13.11-.31.2-.41l2.08-2.08.35-.35c.42-.42.91-.62 1.52 0s.43 1.11.01 1.53Z"
      :fill="color"
    ></path>
    <path
      d="M20.58 4.02v.96c0 .41-.47.66-.84.47-.46-.24-.95-.42-1.47-.54-.44-.11-.91-.16-1.39-.16-3.45 0-6.25 2.8-6.25 6.25 0 1.14.31 2.26.9 3.22.5.84 1.2 1.54 1.96 2.01.17.11.35.21.52.31.17.09.29.27.29.46v2.07c0 .61-.4 1.42-.9 1.72l-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.32 8.47c-.5-.51-.9-1.42-.9-2.02V4.12c0-1.21.9-2.12 1.99-2.12h13.18c1.09 0 1.99.91 1.99 2.02Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M5.33 2h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32M13.41 20.79 12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12L4.22 8.47c-.51-.51-.91-1.41-.91-2.02M17.08 11.89l-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M16.58 12.39c.3 1.08 1.14 1.92 2.22 2.22"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M20.58 4.02v1.95c-.68-.5-1.46-.87-2.31-1.06-.44-.11-.91-.16-1.39-.16-3.45 0-6.25 2.8-6.25 6.25 0 1.14.31 2.26.9 3.22.5.84 1.2 1.54 1.96 2.01.26.17.53.32.81.45v2.39c0 .61-.4 1.42-.9 1.72l-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.32 8.47c-.5-.51-.9-1.42-.9-2.02V4.12c0-1.21.9-2.12 1.99-2.12h13.18c1.09 0 1.99.91 1.99 2.02Z"
      :fill="color"
    ></path>
    <path
      d="M17.92 6.37a4.42 4.42 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53.74.49 1.62.77 2.56.77 1.74 0 3.25-.93 4.07-2.3.44-.72.68-1.56.68-2.45a4.74 4.74 0 0 0-3.71-4.63Zm.91 4.2L16.4 13c-.09.09-.28.18-.41.2l-.93.13c-.34.05-.57-.19-.52-.52l.13-.93c.02-.13.11-.31.2-.41l2.08-2.08.35-.35c.42-.42.91-.62 1.52 0s.43 1.11.01 1.53Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M13.41 20.79 12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12L4.22 8.47c-.51-.51-.91-1.41-.91-2.02V4.13c0-1.21.91-2.12 2.02-2.12h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="m17.08 11.89-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M16.58 12.39c.3 1.08 1.14 1.92 2.22 2.22"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M10.93 22.75c-.48 0-.96-.12-1.4-.36-.89-.5-1.42-1.39-1.42-2.4v-5.35c0-.51-.33-1.26-.64-1.65L3.67 9c-.63-.63-1.12-1.73-1.12-2.54V4.14c0-1.61 1.22-2.87 2.77-2.87h13.34a2.77 2.77 0 0 1 2.77 2.77v2.22c0 1.05-.63 2.26-1.23 2.85-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06c.37-.37.79-1.2.79-1.79V4.04c0-.7-.57-1.27-1.27-1.27H5.32c-.71 0-1.27.6-1.27 1.37v2.32c0 .37.3 1.1.69 1.49L8.59 12c.51.63 1.01 1.69 1.01 2.64v5.35c0 .66.45.98.65 1.09.43.24.94.23 1.34-.01l1.4-.9c.35-.22.81-.12 1.04.23.22.35.12.81-.22 1.04l-1.41.91c-.45.26-.96.4-1.47.4Z"
      :fill="color"
    ></path>
    <path
      d="M13.69 18.889c-.38 0-.74-.14-1-.4-.31-.31-.45-.76-.38-1.23l.19-1.35c.05-.35.26-.76.51-1.01l3.54-3.54c.48-.48.95-.73 1.46-.78.62-.06 1.24.2 1.82.78.58.58.84 1.19.78 1.82-.05.5-.31.98-.78 1.46l-3.54 3.54c-.25.25-.67.46-1.02.51l-1.35.19c-.08.01-.15.01-.23.01Zm4.49-6.83h-.03c-.14.01-.33.13-.54.35l-3.54 3.54a.38.38 0 0 0-.08.17l-.18 1.25 1.25-.18c.04-.01.14-.06.17-.09l3.54-3.54c.21-.21.34-.4.35-.54.02-.2-.18-.44-.35-.61-.16-.16-.39-.35-.59-.35Z"
      :fill="color"
    ></path>
    <path
      d="M18.79 15.36c-.07 0-.14-.01-.2-.03a3.977 3.977 0 0 1-2.74-2.74.76.76 0 0 1 .52-.93c.4-.11.81.12.92.52.23.82.88 1.47 1.7 1.7.4.11.63.53.52.93-.09.34-.39.55-.72.55Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      opacity=".4"
      d="m13.41 20.792-1.41.91c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12l-3.84-4.04c-.51-.51-.91-1.41-.91-2.02v-2.32c0-1.21.91-2.12 2.02-2.12h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="m17.08 11.89-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M16.58 12.39c.3 1.08 1.14 1.92 2.22 2.22"
      :stroke="color"
      :stroke-width="strokeWidth"
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
        strokeWidth: {
          type: String,
          default: "1.5",
        },
    },
})
</script>