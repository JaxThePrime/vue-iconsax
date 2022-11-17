<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M15.84 21.998H8.16c-4.19 0-5.02-2.53-3.66-5.61l1.44-3.27s3.06-.12 6.06.88c3 1 5.83-.89 5.83-.89l.19-.12 1.49 3.41c1.34 3.08.46 5.6-3.67 5.6ZM15.44 6.74h-.16l2.13 4.86-.41.26c-.02.01-2.28 1.46-4.53.72-2.35-.79-4.71-.93-5.87-.95l2.14-4.89h-.3c-.65 0-1.25-.26-1.68-.69A2.375 2.375 0 0 1 8.44 2h7.11c.66 0 1.25.27 1.68.7.56.56.85 1.38.63 2.25-.26 1.08-1.3 1.79-2.42 1.79Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="m8.36 7.62.39-.88h-.3a2.374 2.374 0 0 1-2.38-2.37C6.07 3.07 7.13 2 8.44 2h7.11c.66 0 1.25.27 1.68.7.56.56.84 1.38.63 2.25-.27 1.08-1.31 1.79-2.42 1.79h-.16l4.22 9.66c1.35 3.08.47 5.6-3.67 5.6H8.16c-4.18 0-5.02-2.53-3.66-5.61l2.07-4.7"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M5.94 13.12S9 13 12 14c3 1 5.83-.89 5.83-.89"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M15.84 21.998H8.16c-4.19 0-5.02-2.53-3.66-5.61l1.44-3.27s3.06-.12 6.06.88c3 1 5.83-.89 5.83-.89l.19-.12 1.49 3.41c1.34 3.08.46 5.6-3.67 5.6Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="m18.02 12.99-.19.12S15 15 12 14c-3-1-6.06-.88-6.06-.88l2.8-6.38h-.3c-.65 0-1.25-.26-1.68-.69A2.375 2.375 0 0 1 8.44 2h7.11c.66 0 1.25.27 1.68.7.56.56.85 1.38.63 2.25-.26 1.08-1.3 1.79-2.42 1.79h-.16l2.74 6.25Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8.16 22c-4.18 0-5.02-2.53-3.66-5.61l4.25-9.65h-.3a2.374 2.374 0 01-2.38-2.37C6.07 3.07 7.13 2 8.44 2h7.11c.66 0 1.25.27 1.68.7.56.56.84 1.38.63 2.25-.27 1.08-1.31 1.79-2.42 1.79h-.16l4.22 9.66c1.35 3.08.47 5.6-3.67 5.6H8.16z"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M5.94 13.12S9 13 12 14c3 1 5.83-.89 5.83-.89"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M15.84 22.75H8.16c-2.68 0-3.9-1-4.44-1.83-.79-1.22-.76-2.89.09-4.83l3.83-8.7a3.13 3.13 0 0 1-1.41-.81C5.66 6 5.32 5.2 5.32 4.37c0-1.72 1.4-3.12 3.12-3.12h7.11c.83 0 1.62.33 2.21.92.78.78 1.09 1.89.83 2.96-.26 1.07-1.14 1.92-2.22 2.23l3.82 8.74c.84 1.93.87 3.6.07 4.82-.54.83-1.76 1.83-4.42 1.83Zm-7.4-20c-.89 0-1.62.73-1.62 1.62 0 .43.18.85.47 1.15.3.3.72.47 1.15.47h.3c.25 0 .49.13.63.34.14.21.16.48.06.71l-4.25 9.65c-.63 1.44-.71 2.65-.21 3.41.62.95 2.07 1.15 3.18 1.15h7.68c1.1 0 2.54-.2 3.17-1.15.5-.77.43-1.97-.19-3.4L14.6 7.04a.752.752 0 0 1 .69-1.05h.16c.8 0 1.52-.51 1.69-1.22.14-.57-.02-1.13-.43-1.54a1.62 1.62 0 0 0-1.15-.48H8.44Z"
      :fill="color"
    ></path>
    <path
      d="M13.84 15.039c-.66 0-1.37-.09-2.08-.33-2.84-.95-5.77-.85-5.8-.85-.4.06-.76-.31-.78-.72-.02-.41.31-.76.72-.78.13-.01 3.24-.11 6.33.92 2.6.87 5.15-.78 5.18-.8.34-.23.81-.13 1.04.21.23.34.14.81-.21 1.04-.09.07-1.99 1.31-4.4 1.31Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M8.16 22c-4.18 0-5.02-2.53-3.66-5.61l4.25-9.65h-.3a2.374 2.374 0 0 1-2.38-2.37C6.07 3.07 7.13 2 8.44 2h7.11c.66 0 1.25.27 1.68.7.56.56.84 1.38.63 2.25-.27 1.08-1.31 1.79-2.42 1.79h-.16l4.22 9.66c1.35 3.08.47 5.6-3.67 5.6H8.16Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M5.94 13.12S9 13 12 14c3 1 5.83-.89 5.83-.89"
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