<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M20.98 3.02a3.43 3.43 0 0 0-3.29-.91l-9.8 2.45a4.56 4.56 0 0 0-3.33 3.33L2.11 17.7c-.3 1.19.04 2.42.91 3.29.66.65 1.53 1.01 2.43 1.01.28 0 .57-.03.85-.11l9.81-2.45a4.56 4.56 0 0 0 3.33-3.33l2.45-9.81c.3-1.19-.04-2.42-.91-3.28ZM12 15.88c-2.14 0-3.88-1.74-3.88-3.88 0-2.14 1.74-3.88 3.88-3.88 2.14 0 3.88 1.74 3.88 3.88 0 2.14-1.74 3.88-3.88 3.88Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M7.87 4.59c-1.45.36-2.92 1.83-3.28 3.28L2.1 17.8c-.75 3 1.09 4.85 4.1 4.1l9.93-2.48c1.44-.36 2.92-1.84 3.28-3.28L21.9 6.2c.75-3-1.09-4.85-4.1-4.1l-4.79 1.2"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M20.98 3.02a3.43 3.43 0 0 0-3.29-.91l-9.8 2.45a4.56 4.56 0 0 0-3.33 3.33L2.11 17.7c-.3 1.19.04 2.42.91 3.29.66.65 1.53 1.01 2.43 1.01.28 0 .57-.03.85-.11l9.81-2.45a4.56 4.56 0 0 0 3.33-3.33l2.45-9.81c.3-1.19-.04-2.42-.91-3.28Z"
      :fill="color"
    ></path>
    <path d="M12 15.881a3.88 3.88 0 1 0 0-7.76 3.88 3.88 0 0 0 0 7.76Z" :fill="color"></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M17.8 2.1 7.87 4.59c-1.45.36-2.92 1.83-3.28 3.28L2.1 17.8c-.75 3 1.09 4.85 4.1 4.1l9.93-2.48c1.44-.36 2.92-1.84 3.28-3.28L21.9 6.2c.75-3-1.1-4.85-4.1-4.1Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M4.91 22.82c-1.09 0-2.02-.35-2.7-1.03-.97-.97-1.27-2.45-.84-4.17l2.48-9.93c.43-1.72 2.11-3.39 3.82-3.82l9.93-2.48c1.72-.43 3.2-.13 4.17.84.97.97 1.27 2.45.84 4.17l-2.48 9.93c-.43 1.72-2.11 3.39-3.82 3.82l-9.93 2.48c-.51.12-1 .19-1.47.19ZM17.98 2.83 8.05 5.32c-1.17.29-2.44 1.56-2.74 2.73l-2.48 9.93c-.3 1.19-.14 2.16.44 2.75.58.58 1.56.74 2.75.44l9.93-2.48c1.17-.29 2.44-1.57 2.73-2.73l2.48-9.93c.3-1.19.14-2.16-.44-2.75-.58-.59-1.55-.74-2.74-.45Z"
      :fill="color"
    ></path>
    <path
      d="M12 16.25A4.26 4.26 0 0 1 7.75 12 4.26 4.26 0 0 1 12 7.75 4.26 4.26 0 0 1 16.25 12 4.26 4.26 0 0 1 12 16.25Zm0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75S13.52 9.25 12 9.25Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M17.8 2.1 7.87 4.59c-1.45.36-2.92 1.83-3.28 3.28L2.1 17.8c-.75 3 1.09 4.85 4.1 4.1l9.93-2.48c1.44-.36 2.92-1.84 3.28-3.28L21.9 6.2c.75-3-1.1-4.85-4.1-4.1Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
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