<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM12 18.25c-1.79 0-3.19-.89-4.14-1.77v.71c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.75c0-.41.34-.75.75-.75h2.48c.41 0 .75.34.75.75s-.34.75-.75.75h-.9c.74.74 1.89 1.56 3.31 1.56 2.62 0 4.75-2.13 4.75-4.75 0-.41.34-.75.75-.75s.75.34.75.75c0 3.45-2.8 6.25-6.25 6.25zm6.25-8.71v.08a.75.75 0 01-.3.54c-.07.05-.15.09-.24.12-.07.02-.14.03-.21.03h-2.43c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.83c-.8-.74-2.09-1.56-3.88-1.56-2.62 0-4.75 2.13-4.75 4.75 0 .41-.34.75-.75.75s-.77-.34-.77-.75c0-3.45 2.8-6.25 6.25-6.25 2.15 0 3.73.93 4.75 1.82v-.76c0-.41.34-.75.75-.75s.75.34.75.75v2.73z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M18.01 19.99A9.964 9.964 0 0112 22c-5.52 0-8.89-5.56-8.89-5.56m0 0h4.52m-4.52 0v5M22 12c0 1.82-.49 3.53-1.34 5M6.03 3.97A9.921 9.921 0 0112 2c6.67 0 10 5.56 10 5.56m0 0v-5m0 5h-4.44M2 12c0-1.82.48-3.53 1.33-5"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      :fill="color"
      d="M22 7.81v8.37c0 3.64-2.17 5.81-5.81 5.81H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2h8.37C19.83 2 22 4.17 22 7.81z"
      opacity=".4"
    ></path>
    <path
      :fill="color"
      d="M12 18.25c-1.79 0-3.19-.89-4.14-1.77v.71c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.75c0-.41.34-.75.75-.75h2.48c.41 0 .75.34.75.75s-.34.75-.75.75h-.9c.74.74 1.89 1.56 3.31 1.56 2.62 0 4.75-2.13 4.75-4.75 0-.41.34-.75.75-.75s.75.34.75.75c0 3.45-2.8 6.25-6.25 6.25zm-5.5-5.5c-.41 0-.75-.34-.75-.75 0-3.45 2.8-6.25 6.25-6.25 2.15 0 3.73.93 4.75 1.82v-.76c0-.41.34-.75.75-.75s.75.34.75.75V9.63a.75.75 0 01-.3.54c-.07.05-.15.09-.24.12-.07.02-.14.03-.21.03h-2.43c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.83c-.8-.74-2.09-1.56-3.88-1.56-2.62 0-4.75 2.13-4.75 4.75-.02.4-.36.74-.77.74z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M22 12c0 5.52-4.48 10-10 10s-8.89-5.56-8.89-5.56m0 0h4.52m-4.52 0v5M2 12C2 6.48 6.44 2 12 2c6.67 0 10 5.56 10 5.56m0 0v-5m0 5h-4.44"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M22 12c0 5.52-4.48 10-10 10s-8.89-5.56-8.89-5.56m0 0h4.52m-4.52 0v5M2 12C2 6.48 6.44 2 12 2c6.67 0 10 5.56 10 5.56m0 0v-5m0 5h-4.44"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M2 12C2 6.48 6.44 2 12 2c6.67 0 10 5.56 10 5.56m0 0v-5m0 5h-4.44"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M21.89 12c0 5.52-4.48 10-10 10S3 16.44 3 16.44m0 0h4.52m-4.52 0v5"
      opacity=".4"
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