<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-.5 12.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.08l-2.67-1.6v3.68c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5a.745.745 0 011.13-.64l4.17 2.5c.23.14.36.38.36.64v2.5h.01zm6.67 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.68L14 12.42v2.08c0 .41-.34.75-.75.75s-.75-.34-.75-.75V12c0-.26.14-.51.36-.64l4.17-2.5c.23-.14.52-.14.75-.01.24.13.38.38.38.65v5h.01z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M6.58 14.5v-5l4.17 2.5v2.5M17.42 14.5v-5L13.25 12v2.5"
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
      opacity=".4"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      :fill="color"
    ></path>
    <path
      d="M10.75 15.25c-.41 0-.75-.34-.75-.75v-2.08l-2.67-1.6v3.68c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5a.745.745 0 0 1 1.13-.64l4.17 2.5c.23.14.36.38.36.64v2.5a.74.74 0 0 1-.74.75ZM17.42 15.25c-.41 0-.75-.34-.75-.75v-3.68L14 12.42v2.08c0 .41-.34.75-.75.75s-.75-.34-.75-.75V12c0-.26.14-.51.36-.64l4.17-2.5c.23-.14.52-.14.75-.01.24.13.38.38.38.65v5a.74.74 0 0 1-.74.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M6.6 14.5v-5l4.2 2.5v2.5M17.4 14.5v-5L13.2 12v2.5"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
      :fill="color"
    ></path>
    <path
      d="M10.75 15.25c-.41 0-.75-.34-.75-.75v-2.08l-2.67-1.6v3.68c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5a.745.745 0 0 1 1.13-.64l4.17 2.5c.23.14.36.38.36.64v2.5a.74.74 0 0 1-.74.75ZM17.42 15.25c-.41 0-.75-.34-.75-.75v-3.68L14 12.42v2.08c0 .41-.34.75-.75.75s-.75-.34-.75-.75V12c0-.26.14-.51.36-.64l4.17-2.5c.23-.14.52-.14.75-.01.24.13.38.38.38.65v5a.74.74 0 0 1-.74.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M6.58 14.5v-5l4.17 2.5v2.5M17.42 14.5v-5L13.25 12v2.5"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
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