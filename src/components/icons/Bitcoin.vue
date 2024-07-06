<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M14.97 12.75H9.53v2.83H14.97c.95 0 1.73-.64 1.73-1.42 0-.78-.78-1.41-1.73-1.41z"
    ></path>
    <path
      :fill="color"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.97 15.08h-1.65v1.42c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.42h-1.21v1.42c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.42H7.05c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.98V8.42h-.98c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.06V5.5c0-.41.34-.75.75-.75s.75.34.75.75v1.42h1.21V5.5c0-.41.34-.75.75-.75s.75.34.75.75v1.42h.88c1.55 0 2.92 1.36 2.92 2.92 0 .67-.24 1.28-.62 1.78 1.01.49 1.7 1.45 1.7 2.56 0 1.59-1.45 2.9-3.23 2.9z"
    ></path>
    <path
      :fill="color"
      d="M15.62 9.83c0-.66-.62-1.42-1.42-1.42H9.53v2.83h4.67c.78.01 1.42-.63 1.42-1.41z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M8.78 7.672h5.42c1.2 0 2.17 1.08 2.17 2.17 0 1.2-.97 2.17-2.17 2.17H8.78v-4.34Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M8.78 12h6.19c1.37 0 2.48.97 2.48 2.17s-1.11 2.17-2.48 2.17H8.78V12ZM12.57 16.328v2.17M9.87 16.328v2.17M12.57 5.5v2.17M9.87 5.5v2.17M10.84 7.672H7.05M10.84 16.328H7.05"
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
      d="M16.49 11.61c.38-.49.62-1.11.62-1.78 0-1.55-1.36-2.92-2.92-2.92h-.88V5.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.42H10.6V5.5c0-.41-.34-.75-.75-.75s-.73.34-.73.75v1.42H7.05c-.41 0-.75.34-.75.75s.34.75.75.75h.98v7.16h-.98c-.41 0-.75.34-.75.75s.34.75.75.75h2.06v1.42c0 .41.34.75.75.75s.75-.34.75-.75v-1.42h1.21v1.42c0 .41.34.75.75.75s.75-.34.75-.75v-1.42h1.65c1.78 0 3.23-1.31 3.23-2.92 0-1.1-.7-2.06-1.71-2.55Zm-5.65-3.19h3.36c.8 0 1.42.76 1.42 1.42 0 .78-.64 1.42-1.42 1.42H9.53V8.42h1.31Zm4.13 7.16H9.53v-2.83H14.97c.95 0 1.73.64 1.73 1.42 0 .78-.78 1.41-1.73 1.41Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M9 8.38h4.685c1.038 0 1.88.935 1.88 1.882 0 1.038-.842 1.88-1.88 1.88H9V8.381Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M9 12.13h5.354c1.188 0 2.146.843 2.146 1.882 0 1.038-.958 1.88-2.146 1.88H9v-3.761ZM12.277 15.88v1.882M9.935 15.88v1.882M12.277 6.5v1.88M9.935 6.5v1.88M10.777 8.38H7.5M10.777 15.88H7.5"
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
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
      :fill="color"
    ></path>
    <path
      d="M14.2 12.752H8.78c-.41 0-.75-.34-.75-.75v-4.33c0-.41.34-.75.75-.75h5.42c1.55 0 2.92 1.36 2.92 2.92 0 1.6-1.31 2.91-2.92 2.91Zm-4.67-1.5h4.67c.78 0 1.42-.64 1.42-1.42 0-.66-.62-1.42-1.42-1.42H9.53v2.84Z"
      :fill="color"
    ></path>
    <path
      d="M14.97 17.08H8.78c-.41 0-.75-.34-.75-.75V12c0-.41.34-.75.75-.75h6.19c1.78 0 3.23 1.31 3.23 2.92 0 1.61-1.45 2.91-3.23 2.91Zm-5.44-1.5h5.44c.95 0 1.73-.64 1.73-1.42 0-.78-.77-1.42-1.73-1.42H9.53v2.84Z"
      :fill="color"
    ></path>
    <path
      d="M12.57 19.248c-.41 0-.75-.34-.75-.75v-2.17c0-.41.34-.75.75-.75s.75.34.75.75v2.17c0 .41-.33.75-.75.75ZM9.87 19.248c-.41 0-.75-.34-.75-.75v-2.17c0-.41.34-.75.75-.75s.75.34.75.75v2.17c0 .41-.34.75-.75.75ZM12.57 8.42c-.41 0-.75-.34-.75-.75V5.5c0-.41.34-.75.75-.75s.75.34.75.75v2.17c0 .41-.33.75-.75.75ZM9.87 8.42c-.41 0-.75-.34-.75-.75V5.5c0-.41.34-.75.75-.75s.75.34.75.75v2.17c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M10.84 8.422H7.05c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.79a.749.749 0 1 1 0 1.5ZM10.84 17.078H7.05c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.79a.749.749 0 1 1 0 1.5Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
    ></path>
    <g
      opacity=".4"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M8.781 7.672h5.42c1.2 0 2.17 1.08 2.17 2.17 0 1.2-.97 2.17-2.17 2.17h-5.42v-4.34Z"></path>
      <path d="M8.781 12h6.19c1.37 0 2.48.97 2.48 2.17s-1.11 2.17-2.48 2.17h-6.19V12ZM12.57 16.328v2.17M9.871 16.328v2.17M12.57 5.5v2.17M9.871 5.5v2.17M10.84 7.672H7.05M10.84 16.328H7.05"></path>
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