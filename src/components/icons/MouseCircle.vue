<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="m20.96 17.838-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03l-1.85-5.95c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9Z"
      :fill="color"
    ></path>
    <path
      d="M21 11.5c0 .43-.03.86-.08 1.28-.04.3-.35.48-.64.39l-4.85-1.51a3.025 3.025 0 0 0-3.03.74c-.8.8-1.09 1.97-.75 3.05l1.5 4.83c.09.29-.1.6-.4.64-.42.05-.83.08-1.25.08-5.34 0-9.64-4.39-9.5-9.77.14-4.96 4.27-9.09 9.23-9.23C16.61 1.86 21 6.16 21 11.5Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="m20.96 17.838-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03l-1.85-5.95c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9ZM3.98 6.031A9.974 9.974 0 0 0 2 12.001c0 5.52 4.48 10 10 10M22 12c0-5.52-4.48-10-10-10-1.52 0-2.95.34-4.24.94"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="m20.96 17.838-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03l-1.85-5.95c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9Z"
      :fill="color"
    ></path>
    <path opacity=".4" d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z" :fill="color"></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="m20.96 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L13.08 15c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M16.37 22.771h-.02a2.229 2.229 0 0 1-2.15-1.6l-1.85-5.95c-.25-.82-.04-1.7.57-2.29.6-.59 1.47-.81 2.27-.56l5.96 1.85c.96.3 1.59 1.14 1.6 2.15.01 1-.6 1.85-1.56 2.17l-1.63.55c-.23.08-.41.25-.48.48l-.56 1.64c-.31.95-1.15 1.56-2.15 1.56Zm-1.86-9c-.27 0-.45.15-.53.22-.21.21-.28.5-.19.79l1.85 5.95c.16.51.6.53.74.54.14 0 .57-.04.73-.53l.56-1.64c.22-.67.76-1.2 1.43-1.43l1.63-.55c.5-.16.53-.6.53-.73s-.04-.57-.54-.73l-5.96-1.85a.855.855 0 0 0-.25-.04Z"
      :fill="color"
    ></path>
    <path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-5.1-4.15-9.25-9.25-9.25S2.75 6.9 2.75 12 6.9 21.25 12 21.25c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      opacity=".4"
      d="m20.96 17.838-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03l-1.85-5.95c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10"
      :stroke="color"
      :stroke-width="strokeWidth"
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
        strokeWidth: {
          type: String,
          default: "1.5",
        },
    },
})
</script>