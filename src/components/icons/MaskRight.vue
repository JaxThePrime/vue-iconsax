<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Z"
      :fill="color"
    ></path>
    <path d="M12 7v10c-2.76 0-5-2.24-5-5s2.24-5 5-5Z" :fill="color"></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M17 12c0 2.76-2.24 5-5 5V7c1.32 0 2.52.51 3.42 1.35M12 7v10c-2.76 0-5-2.24-5-5s2.24-5 5-5ZM12 22v-5M12 7V2"
      :stroke="color"
      strokeWidth="1.5"
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
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Z"
      :fill="color"
    ></path>
    <path d="M12 7v10c-2.76 0-5-2.24-5-5s2.24-5 5-5Z" :fill="color"></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M17 12c0 2.76-2.24 5-5 5V7c2.76 0 5 2.24 5 5zM12 7v10c-2.76 0-5-2.24-5-5s2.24-5 5-5zM12 22v-5M12 7V2"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
      :fill="color"
    ></path>
    <path
      d="M12 17.75c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75 3.17 0 5.75 2.58 5.75 5.75s-2.58 5.75-5.75 5.75Zm.75-9.93v8.37c1.99-.35 3.5-2.1 3.5-4.18 0-2.08-1.51-3.84-3.5-4.19Z"
      :fill="color"
    ></path>
    <path
      d="M12 17.75c-3.17 0-5.75-2.58-5.75-5.75S8.83 6.25 12 6.25c.41 0 .75.34.75.75v10c0 .41-.34.75-.75.75Zm-.75-9.93c-1.99.35-3.5 2.1-3.5 4.18 0 2.08 1.51 3.83 3.5 4.18V7.82Z"
      :fill="color"
    ></path>
    <path
      d="M12 22.75c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM12 7.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <g opacity=".4" :stroke="color" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 12c0 2.76-2.24 5-5 5V7c2.76 0 5 2.24 5 5ZM12 7v10c-2.76 0-5-2.24-5-5s2.24-5 5-5ZM12 22v-5M12 7V2"></path>
    </g>
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