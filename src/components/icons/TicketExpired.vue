<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M19.85 12.94c0 .8.65 1.46 1.45 1.46.38 0 .7.31.7.69 0 3.84-1.16 5-5 5h-5.25V18.5c0-.39-.3-.71-.68-.74-.02-.01-.05-.01-.07-.01-.41 0-.75.34-.75.75v1.59H8.49c-1.88 0-2.85-1.41-3.73-3.54l-.17-.42a.7.7 0 0 1 .39-.91c.37-.14.66-.43.81-.81.16-.37.16-.78.01-1.15-.32-.77-1.2-1.14-1.98-.83-.17.08-.37.08-.54 0a.726.726 0 0 1-.38-.39l-.15-.4c-1.49-3.62-.84-5.17 2.78-6.67l2.45-1.01c.36-.15.77.02.91.38l2.18 4.75c-.41 0-.82.33-.82.74v4.34c0 .41.34.75.75.75.02 0 .05 0 .07-.01.38-.03.68-.35.68-.74V9.83c0-.39-.3-.71-.68-.74V4.93H17c3.84 0 5 1.16 5 5v.85c0 .39-.32.7-.7.7-.8 0-1.45.65-1.45 1.46Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M22 10.75v-.92c0-3.7-.92-4.62-4.62-4.62H11V12M10.91 20h6.47c3.7 0 4.62-.92 4.62-4.62-1.28 0-2.31-1.04-2.31-2.31"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M11.001 16.999v3h-2.77c-1.48 0-2.35-1.01-3.31-3.33l-.18-.45a2.35 2.35 0 0 0 1.29-3.09 2.37 2.37 0 0 0-3.1-1.29l-.17-.43c-1.44-3.52-.94-4.75 2.58-6.2l2.64-1.08 3.02 7.32v2.55M8.17 20H8"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M19.85 12.94c0 .8.65 1.46 1.45 1.46.38 0 .7.31.7.69 0 3.84-1.16 5-5 5h-5.25V18.5c0-.39-.3-.71-.68-.74v-2.85c.38-.03.68-.35.68-.74V9.83c0-.39-.3-.71-.68-.74V4.93H17c3.84 0 5 1.16 5 5v.85c0 .39-.32.7-.7.7-.8 0-1.45.65-1.45 1.46Z"
      :fill="color"
    ></path>
    <path
      d="M11.07 9.09c-.41 0-.82.33-.82.74v4.34c0 .41.34.75.75.75.02 0 .05 0 .07-.01v2.85c-.02-.01-.05-.01-.07-.01-.41 0-.75.34-.75.75v1.59H8.49c-1.88 0-2.85-1.41-3.73-3.54l-.17-.42a.7.7 0 0 1 .39-.91c.37-.14.66-.43.81-.81.16-.37.16-.78.01-1.15-.32-.77-1.2-1.14-1.98-.83-.17.08-.37.08-.54 0a.726.726 0 0 1-.38-.39l-.15-.4c-1.49-3.62-.84-5.17 2.78-6.67l2.45-1.01c.36-.15.77.02.91.38l2.18 4.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M10.902 19.87h6.47c3.7 0 4.62-.92 4.62-4.62-1.28 0-2.31-1.04-2.31-2.31 0-1.28 1.03-2.32 2.31-2.32V9.7c0-3.7-.92-4.62-4.62-4.62h-6.38v6.79"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M10.994 16.87v3h-2.77c-1.48 0-2.35-1.01-3.31-3.33l-.18-.45A2.35 2.35 0 0 0 6.024 13a2.37 2.37 0 0 0-3.1-1.29l-.17-.43c-1.44-3.52-.94-4.75 2.58-6.2L7.974 4l3.02 7.32v2.55M8.162 19.87h-.17"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M17.38 20.75h-6.47c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.47c3.06 0 3.78-.5 3.86-3.22a3.067 3.067 0 0 1-2.3-2.96c0-1.43.98-2.64 2.31-2.98v-.26c0-3.29-.58-3.87-3.87-3.87h-5.63V12c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.21c0-.41.34-.75.75-.75h6.38c4.12 0 5.37 1.25 5.37 5.37v.92c0 .41-.34.75-.75.75-.86 0-1.56.7-1.56 1.57 0 .86.7 1.56 1.56 1.56.41 0 .75.34.75.75 0 4.12-1.25 5.37-5.37 5.37Z"
      :fill="color"
    ></path>
    <path
      d="M10.998 20.75h-2.77c-2.02 0-3.06-1.52-4.01-3.8l-.19-.46a.75.75 0 0 1 .42-.97c.4-.16.71-.47.88-.86.17-.4.17-.84 0-1.24-.33-.84-1.28-1.23-2.12-.9-.19.08-.39.07-.58-.01a.764.764 0 0 1-.4-.41l-.17-.43c-1.6-3.89-.9-5.56 2.99-7.17l2.64-1.08c.38-.16.82.03.98.41l3.03 7.34c.04.09.06.19.06.29V14c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.4l-2.7-6.51-1.94.8c-3.08 1.27-3.45 2.05-2.24 5.05 1.39-.2 2.79.55 3.34 1.9.32.77.32 1.62-.01 2.39-.22.53-.58.98-1.04 1.31.96 2.26 1.66 2.71 2.55 2.71h2.02V17c0-.41.34-.75.75-.75s.75.34.75.75v3a.74.74 0 0 1-.74.75Z"
      :fill="color"
    ></path>
    <path
      d="M8.17 20.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.17c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M10.902 19.868h6.47c3.7 0 4.62-.92 4.62-4.62-1.28 0-2.31-1.04-2.31-2.31 0-1.28 1.03-2.32 2.31-2.32v-.92c0-3.7-.92-4.62-4.62-4.62h-6.38v6.79"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M10.994 16.87v3h-2.77c-1.48 0-2.35-1.01-3.31-3.33l-.18-.45A2.35 2.35 0 0 0 6.024 13a2.37 2.37 0 0 0-3.1-1.29l-.17-.43c-1.44-3.52-.94-4.75 2.58-6.2L7.974 4l3.02 7.32v2.55"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M8.162 19.871h-.17"
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