<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="m21.12 6.98-4.1-4.1C16.54 2.4 15.58 2 14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1v5.8c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12Zm-5.09 7.99c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22L12 13.06l-2.97 2.97c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L10.94 12 7.97 9.03a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0L12 10.94l2.97-2.97c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L13.06 12l2.97 2.97Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M2 13.02v1.88c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12l-4.1-4.1C16.54 2.4 15.58 2 14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1M8.5 15.5l7-7M15.5 15.5l-7-7"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1v5.8c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12l-4.1-4.1C16.54 2.4 15.58 2 14.9 2Z"
      :fill="color"
    ></path>
    <path
      d="m13.06 12.001 2.97-2.97c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0L12 10.941l-2.97-2.97a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l2.97 2.97-2.97 2.97c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2.97-2.97 2.97 2.97c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-2.97-2.97Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1v5.8c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12l-4.1-4.1C16.54 2.4 15.58 2 14.9 2ZM8.5 15.5l7-7M15.5 15.5l-7-7"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M14.9 22.75H9.1c-.89 0-2.03-.47-2.65-1.1l-4.1-4.1c-.63-.63-1.1-1.77-1.1-2.65V9.1c0-.89.47-2.03 1.1-2.65l4.1-4.1c.63-.63 1.77-1.1 2.65-1.1h5.8c.89 0 2.03.47 2.65 1.1l4.1 4.1c.63.63 1.1 1.77 1.1 2.65v5.8c0 .89-.47 2.03-1.1 2.65l-4.1 4.1c-.63.63-1.76 1.1-2.65 1.1Zm-5.8-20c-.49 0-1.25.31-1.59.66l-4.1 4.1c-.34.35-.66 1.1-.66 1.59v5.8c0 .49.31 1.25.66 1.59l4.1 4.1c.35.34 1.1.66 1.59.66h5.8c.49 0 1.25-.31 1.59-.66l4.1-4.1c.34-.35.66-1.1.66-1.59V9.1c0-.49-.31-1.25-.66-1.59l-4.1-4.1c-.35-.34-1.1-.66-1.59-.66H9.1Z"
      :fill="color"
    ></path>
    <path
      d="M8.5 16.251c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l7-7c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-7 7c-.15.15-.34.22-.53.22Z"
      :fill="color"
    ></path>
    <path
      d="M15.5 16.251c-.19 0-.38-.07-.53-.22l-7-7a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l7 7c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1v5.8c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12l-4.1-4.1C16.54 2.4 15.58 2 14.9 2Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <g opacity=".4" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round">
      <path d="m8.5 15.5 7-7M15.5 15.5l-7-7"></path>
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