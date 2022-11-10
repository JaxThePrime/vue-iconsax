<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.28 13.41c-.33.53-.91.85-1.54.85H6.44a.45.45 0 01-.39-.68l5.61-9.61c.16-.28.56-.3.75-.04l1.56 2.09c.45.6.48 1.41.09 2.05l-3.34 5.34zm6.83.85h-3.84c-.35 0-.57-.38-.39-.69l1.92-3.2c.18-.29.6-.29.78 0l1.92 3.2c.18.3-.04.69-.39.69z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="m6.06 15.58 5.61-9.61c.16-.28.56-.3.75-.04l1.56 2.09c.45.6.48 1.41.09 2.05l-3.34 5.35c-.33.53-.91.85-1.54.85H6.45c-.35-.01-.57-.39-.39-.69ZM15.24 12.37l-1.92 3.2c-.18.3.04.69.39.69h3.84c.35 0 .57-.38.39-.69l-1.92-3.2c-.17-.29-.6-.29-.78 0Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="m6.06 15.58 5.61-9.61c.16-.28.56-.3.75-.04l1.56 2.09c.45.6.48 1.41.09 2.05l-3.34 5.35c-.33.53-.91.85-1.54.85H6.45c-.35-.01-.57-.39-.39-.69ZM15.24 12.37l-1.92 3.2c-.18.3.04.69.39.69h3.84c.35 0 .57-.38.39-.69l-1.92-3.2c-.17-.29-.6-.29-.78 0Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M6.1 15.6 11.7 6c.2-.3.6-.3.8 0L14 8c.4.6.5 1.4.1 2l-3.3 5.3c-.3.5-.9.9-1.5.9H6.4c-.3.1-.5-.3-.3-.6ZM15.2 12.4l-1.9 3.2c-.2.3 0 .7.4.7h3.8c.4 0 .6-.4.4-.7L16 12.4c-.2-.3-.6-.3-.8 0Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M9.19 17.011H6.45c-.43 0-.83-.23-1.04-.6a1.24 1.24 0 0 1 0-1.21l5.6-9.61c.2-.35.57-.57.97-.6.4-.03.79.16 1.03.48l1.57 2.09c.63.84.68 2 .12 2.9l-3.34 5.35c-.47.75-1.28 1.2-2.17 1.2Zm-2.23-1.5h2.22c.37 0 .71-.19.9-.5l3.34-5.35c.23-.37.21-.85-.05-1.2l-1.3-1.73-5.11 8.78ZM17.55 17.009h-3.84c-.43 0-.83-.23-1.05-.61-.21-.38-.21-.84.01-1.21l1.92-3.2c.44-.73 1.62-.73 2.06 0l1.92 3.2c.22.37.23.84.01 1.21-.19.37-.6.61-1.03.61Zm-3.31-1.5h2.79l-1.4-2.33-1.39 2.33Z"
      :fill="color"
    ></path>
    <path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      opacity=".4"
      d="m6.06 15.58 5.61-9.61c.16-.28.56-.3.75-.04l1.56 2.09c.45.6.48 1.41.09 2.05l-3.34 5.35c-.33.53-.91.85-1.54.85H6.45c-.35-.01-.57-.39-.39-.69ZM15.24 12.37l-1.92 3.2c-.18.3.04.69.39.69h3.84c.35 0 .57-.38.39-.69l-1.92-3.2c-.17-.29-.6-.29-.78 0Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
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