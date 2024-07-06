<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M13.63 15.72c0 .9-.73 1.63-1.63 1.63-.64 0-1.19-.37-1.45-.9l2.18-2.18c.53.26.9.81.9 1.45ZM21.771 2.23c-.3-.3-.79-.3-1.09 0l-2.81 2.81c-.77-2.02-2.74-3.04-5.87-3.04-5.63 0-6.28 3.58-6.28 6.28v1.25h.03c-2.83.34-3.75 1.75-3.75 5.26v1.86c0 1.6.19 2.76.67 3.59l-.45.45c-.3.3-.3.79 0 1.09.16.14.35.22.55.22.2 0 .39-.08.54-.23l18.46-18.46c.31-.3.31-.78 0-1.08ZM7.351 9.44h-.23V8.28c0-2.93.83-4.88 4.88-4.88 3.4 0 4.47 1.3 4.77 2.75l-3.29 3.29h-6.13Z"
      :fill="color"
    ></path>
    <path
      d="M22 14.789v1.86c0 4.1-1.25 5.35-5.35 5.35H7.41c-.89 0-1.33-1.08-.7-1.71l2.82-2.82c.07.1.15.19.23.28.7.76 1.74 1.16 2.89.92.09-.02.18-.04.27-.08.09-.02.17-.05.25-.09.2-.07.39-.18.57-.31.07-.04.13-.09.18-.14.15-.12.29-.26.41-.41.05-.05.1-.11.14-.18.13-.18.24-.37.31-.57.04-.08.07-.16.09-.25.04-.09.06-.18.08-.27.24-1.15-.16-2.19-.92-2.89-.08-.08-.18-.16-.28-.23l3.12-3.12c.05-.05.09-.09.14-.13.4-.33.91-.49 1.42-.45.09.01.19.02.28.04a6.178 6.178 0 0 1 .96.25c.29.11.54.24.77.39.23.15.42.33.6.54.09.11.18.23.25.36.07.11.13.23.19.36.06.13.11.27.16.41.06.17.11.36.15.56.04.14.06.29.09.45.02.15.04.31.06.48.04.42.06.89.06 1.4Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M10.02 17.52c.46.59 1.18.98 1.98.98a2.505 2.505 0 0 0 1.99-4.02M20.69 21.262c-.76.55-1.94.74-3.69.74H7c-.36 0-.69-.01-1-.03"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M2.82 20.8C2.21 20.04 2 18.83 2 17v-2c0-4 1-5 5-5h10c.36 0 .69.01 1 .03 3.17.18 4 1.33 4 4.97v2M6 10V8c0-3.31 1-6 6-6 4.15 0 5.54 1.38 5.9 3.56M22 2 2 22"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M13.63 15.72c0 .9-.73 1.63-1.63 1.63-.64 0-1.19-.37-1.45-.9l2.18-2.18c.53.26.9.81.9 1.45Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M7.35 9.441c-4.1 0-5.35 1.25-5.35 5.35v1.86c0 2.05.31 3.39 1.14 4.21l5.96-5.96c.28-1.01 1.07-1.8 2.08-2.08l3.38-3.38H7.35Z"
      :fill="color"
    ></path>
    <path
      d="m18.129 5.87-1.26 1.26c-.04-1.78-.71-3.73-4.87-3.73-4.05 0-4.88 1.95-4.88 4.88v1.17c-.51 0-.98.03-1.4.08V8.28c0-2.7.65-6.28 6.28-6.28 3.54 0 5.6 1.3 6.13 3.87Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M22.002 14.79v1.86c0 4.1-1.25 5.35-5.35 5.35h-9.3c-.84 0-1.57-.05-2.18-.17l4.36-4.36a3.04 3.04 0 0 0 2.47 1.27c1.67 0 3.02-1.35 3.02-3.02 0-1.02-.5-1.91-1.27-2.47l3.79-3.79c3.39.19 4.46 1.54 4.46 5.33Z"
      :fill="color"
    ></path>
    <path
      d="M21.769 2.229c-.3-.3-.79-.3-1.09 0l-18.45 18.46c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M10.02 17.52c.46.59 1.18.98 1.98.98a2.505 2.505 0 0 0 1.99-4.02"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M2.82 20.8C2.21 20.04 2 18.83 2 17v-2c0-4 1-5 5-5h10c.36 0 .69.01 1 .03 3.17.18 4 1.33 4 4.97v2c0 4-1 5-5 5H7c-.36 0-.69-.01-1-.03M6 10V8c0-3.31 1-6 6-6 4.15 0 5.54 1.38 5.9 3.56M22 2 2 22"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M12 19.248a3.22 3.22 0 0 1-2.58-1.27.749.749 0 1 1 1.19-.91c.33.44.84.68 1.39.68.96 0 1.75-.79 1.75-1.75 0-.39-.12-.76-.36-1.06a.749.749 0 1 1 1.19-.91c.44.57.67 1.25.67 1.97 0 1.79-1.46 3.25-3.25 3.25Z"
      :fill="color"
    ></path>
    <path
      d="M17 22.75H7c-.37 0-.72-.01-1.05-.03a.757.757 0 0 1-.71-.79c.02-.41.37-.71.79-.71.3.02.62.02.96.02h10c3.57 0 4.25-.68 4.25-4.25v-2c0-3.51-.74-4.08-3.29-4.23-.3-.02-.62-.02-.96-.02H7c-3.57 0-4.25.68-4.25 4.25v2c0 1.74.2 2.77.66 3.33.26.32.21.8-.12 1.05-.32.26-.79.21-1.05-.12-.7-.85-.99-2.09-.99-4.25v-2c0-4.41 1.34-5.75 5.75-5.75h10c.37 0 .72.01 1.04.03 3.96.22 4.71 2.18 4.71 5.72v2c0 4.41-1.34 5.75-5.75 5.75Z"
      :fill="color"
    ></path>
    <path
      d="M6 10.75c-.41 0-.75-.34-.75-.75V8c0-2.9.7-6.75 6.75-6.75 4.07 0 6.18 1.33 6.64 4.19.07.41-.21.79-.62.86a.747.747 0 0 1-.86-.62c-.25-1.52-1.04-2.93-5.16-2.93-4.36 0-5.25 2.1-5.25 5.25v2c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M2.001 22.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l20-20c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-20 20c-.15.15-.34.22-.53.22Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      opacity=".4"
      d="M10.02 17.52c.46.59 1.18.98 1.98.98a2.505 2.505 0 0 0 1.99-4.02"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M2.82 20.8C2.21 20.04 2 18.83 2 17v-2c0-4 1-5 5-5h10c.36 0 .69.01 1 .03 3.17.18 4 1.33 4 4.97v2c0 4-1 5-5 5H7c-.36 0-.69-.01-1-.03"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M6 10V8c0-3.31 1-6 6-6 4.15 0 5.54 1.38 5.9 3.56"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M22 2 2 22"
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