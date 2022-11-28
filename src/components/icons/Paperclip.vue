<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm.56 11.71c0 1.52-1.23 2.75-2.75 2.75s-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2a1.25 1.25 0 0 0 2.5 0v-3.14c0-1.79-1.46-3.25-3.25-3.25s-3.25 1.46-3.25 3.25V14c0 1.48 1.2 2.68 2.68 2.68.41 0 .75.34.75.75s-.34.75-.75.75c-2.3 0-4.18-1.88-4.18-4.18v-3.43c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75v3.14Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M4.969 14v2c0 3.31 2.69 6 6 6M11.969 12v3.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5V10c0-3.87-3.13-7-7-7s-7 3.13-7 7"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      :fill="color"
    ></path>
    <path
      d="M11.43 18.18c-2.3 0-4.18-1.88-4.18-4.18v-3.43c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75v3.14c0 1.52-1.23 2.75-2.75 2.75s-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2a1.25 1.25 0 0 0 2.5 0v-3.14c0-1.79-1.46-3.25-3.25-3.25s-3.25 1.46-3.25 3.25V14c0 1.48 1.2 2.68 2.68 2.68.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M11.97 12v3.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5V10c0-3.87-3.13-7-7-7s-7 3.13-7 7v6c0 3.31 2.69 6 6 6"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M10.969 22.75c-3.72 0-6.75-3.03-6.75-6.75v-6c0-4.27 3.48-7.75 7.75-7.75s7.75 3.48 7.75 7.75v5.5a4.26 4.26 0 0 1-4.25 4.25 4.26 4.26 0 0 1-4.25-4.25V12c0-.41.34-.75.75-.75s.75.34.75.75v3.5c0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75V10c0-3.45-2.8-6.25-6.25-6.25s-6.25 2.8-6.25 6.25v6c0 2.89 2.35 5.25 5.25 5.25a.749.749 0 1 1 0 1.5Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M11.969 12v3.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5V10c0-3.87-3.13-7-7-7s-7 3.13-7 7v6c0 3.31 2.69 6 6 6"
      :stroke="color"
      stroke-width="1.5"
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
    },
})
</script>