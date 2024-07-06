<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 12.25h-3.05l1.99 2.82c.24.34.16.81-.18 1.04a.76.76 0 01-.43.14c-.24 0-.47-.11-.61-.32l-2.3-3.26-2.3 3.26a.75.75 0 01-.61.32c-.15 0-.3-.04-.43-.14a.743.743 0 01-.18-1.04l1.99-2.82H7.52c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.36.75-.77.75zm0-3h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.87L8.38 6.93a.74.74 0 01.18-1.04.74.74 0 011.04.18l2.3 3.26 2.3-3.26c.24-.34.71-.42 1.04-.18.34.24.42.71.18 1.04l-1.99 2.82h3.05c.41 0 .75.34.75.75s-.32.75-.73.75z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M7.5 10.5h9M9 6.5l2.82 4M14.82 6.5l-2.82 4M7.5 13.5h9M9 17.5l2.82-4M14.82 17.5l-2.82-4"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      :fill="color"
    ></path>
    <path
      d="M7.5 11.248h9c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-3.05l1.99-2.82a.74.74 0 0 0-.18-1.04.74.74 0 0 0-1.04.18l-2.3 3.26-2.3-3.26a.743.743 0 0 0-1.04-.18c-.34.24-.42.71-.18 1.04l1.99 2.82H7.52c-.41 0-.75.34-.75.75s.32.75.73.75ZM16.5 12.75h-9c-.41 0-.75.34-.75.75s.34.75.75.75h2.87l-1.99 2.82a.74.74 0 0 0 .18 1.04c.13.09.28.14.43.14.24 0 .47-.11.61-.32l2.3-3.26 2.3 3.26c.15.21.38.32.61.32.15 0 .3-.04.43-.14.34-.24.42-.71.18-1.04l-1.99-2.82h3.05c.41 0 .75-.34.75-.75s-.32-.75-.73-.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M7.5 10.5h9M9 6.5l2.8 4M14.8 6.5l-2.8 4M7.5 13.5h9M9 17.5l2.8-4M14.8 17.5l-2.8-4"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M16.5 11.25h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M11.82 11.248c-.24 0-.47-.11-.61-.32l-2.82-4a.74.74 0 0 1 .18-1.04.74.74 0 0 1 1.04.18l2.82 4c.24.34.16.81-.18 1.04-.13.1-.28.14-.43.14Z"
      :fill="color"
    ></path>
    <path
      d="M12 11.248c-.15 0-.3-.04-.43-.14a.743.743 0 0 1-.18-1.04l2.82-4c.24-.34.71-.42 1.04-.18.34.24.42.71.18 1.04l-2.82 4c-.14.21-.38.32-.61.32ZM16.5 14.25h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M9 18.248c-.15 0-.3-.04-.43-.14a.743.743 0 0 1-.18-1.04l2.82-4c.24-.34.71-.42 1.04-.18.34.24.42.71.18 1.04l-2.82 4c-.14.21-.38.32-.61.32Z"
      :fill="color"
    ></path>
    <path
      d="M14.82 18.248c-.24 0-.47-.11-.61-.32l-2.82-4a.74.74 0 0 1 .18-1.04.74.74 0 0 1 1.04.18l2.82 4c.24.34.16.81-.18 1.04-.13.1-.28.14-.43.14Z"
      :fill="color"
    ></path>
    <path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <g
      opacity=".4"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M7.5 10.5h9M9 6.5l2.82 4M14.82 6.5l-2.82 4M7.5 13.5h9M9 17.5l2.82-4M14.82 17.5l-2.82-4"></path>
    </g>
    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
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