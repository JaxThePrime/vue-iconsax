<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M6 13c-2.76 0-5 2.23-5 5s2.24 5 5 5 5-2.24 5-5-2.23-5-5-5Zm-2.04 2.96H6a.68.68 0 0 1 0 1.36H3.96a.68.68 0 0 1 0-1.36Zm4.08 4.08H3.96a.68.68 0 0 1-.68-.68c0-.37.31-.68.68-.68h4.09c.38 0 .68.31.68.68 0 .37-.31.68-.69.68Z"
      :fill="color"
    ></path>
    <path
      d="M17 3H7C4 3 2 4.5 2 8v3.14c0 .73.75 1.19 1.42.9a6.51 6.51 0 0 1 3.66-.45c2.62.43 4.76 2.5 5.29 5.1.15.76.17 1.5.07 2.21-.08.59.4 1.11.99 1.11H17c3 0 5-1.5 5-5V8c0-3.5-2-5-5-5Zm.47 5.59-3.13 2.5c-.66.53-1.5.79-2.34.79-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.77.77 0 0 1-.12-1.06c.26-.32.73-.38 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.11 1.06Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M22 12.98v2.52c0 3.5-2 5-5 5H7M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5M17 9l-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9M2 16.5h6M2 12.5h3"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M6 13c-2.76 0-5 2.23-5 5s2.24 5 5 5 5-2.24 5-5-2.23-5-5-5Zm-2.04 2.96H6c.38 0 .68.31.68.68 0 .37-.31.68-.68.68H3.96a.68.68 0 0 1 0-1.36Zm4.08 4.08H3.95a.68.68 0 0 1-.68-.68c0-.37.31-.68.68-.68h4.09a.68.68 0 0 1 0 1.36Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M17 3H7C4 3 2 4.5 2 8v3.14c0 .73.75 1.19 1.42.9a6.51 6.51 0 0 1 3.66-.45c2.62.43 4.76 2.5 5.29 5.1.15.76.17 1.5.07 2.21-.08.59.4 1.11.99 1.11H17c3 0 5-1.5 5-5v-7C22 4.5 20 3 17 3Z"
      :fill="color"
    ></path>
    <path
      d="M11.999 11.872c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.12 1.05l-3.13 2.5c-.64.53-1.49.79-2.33.79Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5H7"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9M2 16.5h6M2 12.5h3"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M17 21.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c2.86 0 4.25-1.39 4.25-4.25v-7c0-2.86-1.39-4.25-4.25-4.25H7c-2.86 0-4.25 1.39-4.25 4.25 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-3.65 2.1-5.75 5.75-5.75h10c3.65 0 5.75 2.1 5.75 5.75v7c0 3.65-2.1 5.75-5.75 5.75Z"
      :fill="color"
    ></path>
    <path
      d="M11.999 12.868c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.12 1.05l-3.13 2.5c-.64.53-1.49.79-2.33.79ZM8 17.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM5 13.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5H7"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9M2 16.5h6M2 12.5h3"
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
            default: "#292D32",
        },
    },
})
</script>