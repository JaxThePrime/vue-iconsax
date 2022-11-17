<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm5 15.47c-1.71 0-3.31-.74-4.59-2.11-1.45 1.31-3.34 2.11-5.41 2.11-.41 0-.75-.34-.75-.75s.34-.75.75-.75c3.47 0 6.34-2.75 6.71-6.27h-6.7c-.41 0-.75-.34-.75-.75s.34-.74.75-.74h4.24v-.93c0-.41.34-.75.75-.75s.75.34.75.75v.93h1.69c.02 0 .04-.01.06-.01.02 0 .04.01.06.01h2.43c.41 0 .75.34.75.75s-.34.75-.75.75h-1.78a8.754 8.754 0 0 1-1.77 4.56c1 1.11 2.25 1.71 3.56 1.71.41 0 .75.34.75.75s-.34.74-.75.74Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M16.992 8.96h-9.98M12 7.281v1.68M14.5 8.941c0 4.3-3.36 7.78-7.5 7.78"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17 16.72c-1.8 0-3.4-.96-4.55-2.47"
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      :fill="color"
    ></path>
    <path
      d="M16.998 15.97c-1.31 0-2.56-.6-3.56-1.71a8.526 8.526 0 0 0 1.77-4.56h1.78c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.43c-.02 0-.04-.01-.06-.01-.02 0-.04.01-.06.01h-1.69v-.93c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.93h-4.24c-.41 0-.75.34-.75.75s.34.75.75.75h6.69c-.37 3.52-3.23 6.27-6.71 6.27-.41 0-.75.34-.75.75s.34.75.75.75c2.07 0 3.96-.8 5.41-2.11 1.27 1.36 2.88 2.11 4.59 2.11.41 0 .75-.34.75-.75s-.33-.75-.74-.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M16.99 8.96H7.01M12 7.28v1.68M14.5 8.94c0 4.3-3.36 7.78-7.5 7.78"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17 16.72c-1.8 0-3.4-.96-4.55-2.47"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M16.988 9.71h-9.98c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.98c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M12 9.711c-.41 0-.75-.34-.75-.75v-1.68c0-.41.34-.75.75-.75s.75.34.75.75v1.68c0 .41-.34.75-.75.75ZM7 17.471c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c3.72 0 6.75-3.15 6.75-7.03 0-.41.34-.75.75-.75s.75.34.75.75c0 4.71-3.7 8.53-8.25 8.53Z"
      :fill="color"
    ></path>
    <path
      d="M17.001 17.47c-1.97 0-3.8-.98-5.14-2.77a.75.75 0 0 1 1.2-.9c1.06 1.4 2.46 2.17 3.95 2.17.41 0 .75.34.75.75s-.35.75-.76.75Z"
      :fill="color"
    ></path>
    <path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <g opacity=".4" :stroke="color" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.988 8.96h-9.98M12 7.281v1.68M14.5 8.941c0 4.3-3.36 7.78-7.5 7.78"></path>
      <path d="M17 16.72c-1.8 0-3.4-.96-4.55-2.47"></path>
    </g>
    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
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