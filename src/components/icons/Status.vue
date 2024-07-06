<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M9 14.219H3.92c-.61 0-1.17.31-1.49.83-.32.51-.35 1.12-.09 1.66a10.84 10.84 0 0 0 6.09 5.43c.18.06.38.1.57.1a1.764 1.764 0 0 0 1.75-1.76l.01-4.5c0-.47-.18-.91-.51-1.24a1.79 1.79 0 0 0-1.25-.52ZM22.48 9.6C21.36 4.68 17.05 1.25 12 1.25c-5.05 0-9.36 3.43-10.48 8.35-.12.52 0 1.05.34 1.47.34.42.84.66 1.38.66h17.53a1.735 1.735 0 0 0 1.71-2.13ZM20.06 14.272l-5.06-.01a1.739 1.739 0 0 0-1.75 1.75l.01 4.48a1.764 1.764 0 0 0 1.75 1.76c.19 0 .38-.03.56-.1 2.62-.92 4.84-2.89 6.07-5.38a1.7 1.7 0 0 0-.08-1.65c-.33-.54-.89-.85-1.5-.85Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M2.45 14.969c1.07 3.44 3.95 6.09 7.53 6.82M2.05 10.98A9.996 9.996 0 0 1 12 2c5.18 0 9.44 3.94 9.95 8.98M14.01 21.8c3.57-.73 6.44-3.35 7.53-6.78"
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
      d="M10.24 14.739c-.33-.33-.77-.52-1.24-.52H3.92c-.61 0-1.17.31-1.49.83-.32.51-.35 1.12-.09 1.66a10.84 10.84 0 0 0 6.09 5.43c.18.06.38.1.57.1a1.764 1.764 0 0 0 1.75-1.76l.01-4.5c-.01-.47-.19-.91-.52-1.24Z"
      :fill="color"
    ></path>
    <path
      d="M22.48 9.6C21.36 4.68 17.05 1.25 12 1.25c-5.05 0-9.36 3.43-10.48 8.35-.12.52 0 1.05.34 1.47.34.42.84.66 1.38.66h17.53a1.735 1.735 0 0 0 1.71-2.13Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M21.56 15.1c-.32-.52-.88-.84-1.5-.84L15 14.25A1.739 1.739 0 0 0 13.25 16l.01 4.48a1.764 1.764 0 0 0 1.75 1.76c.19 0 .38-.03.56-.1 2.62-.92 4.84-2.89 6.07-5.38.26-.53.23-1.15-.08-1.66Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M2.45 14.97c1.07 3.44 3.95 6.09 7.53 6.82M2.05 10.98A9.996 9.996 0 0 1 12 2c5.18 0 9.44 3.94 9.95 8.98M14.01 21.8c3.57-.73 6.44-3.35 7.53-6.78"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M9.99 22.552c-.05 0-.1 0-.15-.02-3.83-.78-6.94-3.6-8.1-7.34-.12-.4.1-.82.49-.94.4-.12.82.1.94.49 1 3.22 3.67 5.64 6.97 6.31.41.08.67.48.58.89-.07.36-.39.61-.73.61ZM21.95 11.73c-.38 0-.71-.29-.75-.67A9.22 9.22 0 0 0 12 2.75c-4.77 0-8.72 3.57-9.2 8.3-.04.41-.4.72-.82.67a.75.75 0 0 1-.67-.82C1.87 5.4 6.47 1.25 12 1.25c5.54 0 10.14 4.15 10.69 9.65a.75.75 0 0 1-.67.82c-.02.01-.05.01-.07.01ZM14.01 22.55c-.35 0-.66-.24-.73-.6-.08-.41.18-.8.58-.88a9.243 9.243 0 0 0 6.96-6.27c.12-.4.55-.62.94-.49.4.12.61.55.49.94a10.761 10.761 0 0 1-8.09 7.29c-.05 0-.1.01-.15.01Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      opacity=".4"
      d="M2.45 14.969c1.07 3.44 3.95 6.09 7.53 6.82"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M2.05 10.98A9.996 9.996 0 0 1 12 2c5.18 0 9.44 3.94 9.95 8.98M14.01 21.8c3.57-.73 6.44-3.35 7.53-6.78"
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