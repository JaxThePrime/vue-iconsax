<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="m16.24 9.52 4.71 4.71c.28.28.77.13.85-.26.13-.64.2-1.3.2-1.97 0-2.29-.78-4.4-2.07-6.08-.18-.24-.54-.25-.75-.04l-2.94 2.94c-.19.19-.19.51 0 .7ZM14.48 10.58l-1.77 1.77c-.2.2-.2.51 0 .71l5.82 5.82c.2.2.52.2.71 0 .62-.65 1.15-1.38 1.58-2.17.1-.19.06-.44-.09-.59l-5.54-5.54a.513.513 0 0 0-.71 0ZM10.94 14.12l-1.76 1.76c-.2.2-.2.51 0 .71l4.92 4.93a.5.5 0 0 0 .49.13c.93-.25 1.81-.63 2.61-1.13.27-.17.31-.55.08-.78l-5.63-5.63a.523.523 0 0 0-.71.01ZM18.08 4.07a9.942 9.942 0 0 0-7.31-2c-4.51.54-8.16 4.2-8.7 8.7-.33 2.76.47 5.32 2 7.31.18.24.54.25.75.04l13.3-13.3c.21-.21.2-.57-.04-.75ZM7.4 17.67l-1.52 1.52c-.21.21-.2.57.04.75a9.872 9.872 0 0 0 5.39 2.05c.43.03.64-.48.33-.79l-3.53-3.53c-.19-.2-.51-.2-.71 0Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M2 12c0 2.76 1.12 5.26 2.93 7.07L19.07 4.93A9.969 9.969 0 0 0 12 2C8.07 2 4.67 4.27 3.03 7.57"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M22 12c0 5.52-4.48 10-10 10-2.76 0-5.26-1.12-7.07-2.93L19.07 4.93A9.969 9.969 0 0 1 22 12ZM7.76 16.238l5.65 5.66M11.29 12.71l6.58 6.57M14.83 9.172l6.29 6.3"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M22 12c0 5.04-3.74 9.21-8.59 9.9-.46.07-.93.1-1.41.1-2.76 0-5.26-1.12-7.07-2.93A9.969 9.969 0 0 1 2 12C2 6.48 6.48 2 12 2c2.76 0 5.26 1.12 7.07 2.93A9.969 9.969 0 0 1 22 12Z"
      :fill="color"
    ></path>
    <path
      d="m14.83 10.232-2.48 2.48 6.53 6.53c-.36.35-.75.67-1.16.96l-6.43-6.43-2.47 2.47 5.12 5.13c.11.11.18.25.21.39v.01c-.24.05-.49.1-.74.13-.32.05-.64.08-.97.09l-4.68-4.69-2.28 2.28a8.74 8.74 0 0 1-.55-.51 8.74 8.74 0 0 1-.51-.55l14.1-14.1c.19.16.37.33.55.51.18.18.35.36.51.55l-3.69 3.69 5.69 5.69c-.16.53-.36 1.03-.6 1.52l-6.15-6.15Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M19.07 4.93L4.93 19.07A9.969 9.969 0 012 12C2 6.48 6.48 2 12 2c2.76 0 5.26 1.12 7.07 2.93z"
    ></path>
    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M22 12c0 5.52-4.48 10-10 10-2.76 0-5.26-1.12-7.07-2.93L19.07 4.93A9.969 9.969 0 0122 12zM7.76 16.24l5.65 5.66M11.29 12.71l6.58 6.57M14.83 9.17l6.29 6.3"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M4.93 19.82a.75.75 0 0 1-.53-.22A10.681 10.681 0 0 1 1.25 12C1.25 6.07 6.07 1.25 12 1.25c2.87 0 5.57 1.12 7.6 3.15a.75.75 0 0 1 0 1.06L5.46 19.6a.75.75 0 0 1-.53.22ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12a9.2 9.2 0 0 0 2.2 5.99L17.99 4.95A9.2 9.2 0 0 0 12 2.75Z"
      :fill="color"
    ></path>
    <path
      d="M12 22.751c-2.87 0-5.57-1.12-7.6-3.15a.75.75 0 0 1 0-1.06l14.14-14.14c.29-.29.77-.29 1.06 0 2.03 2.03 3.15 4.73 3.15 7.6 0 5.93-4.82 10.75-10.75 10.75Zm-5.99-3.7a9.2 9.2 0 0 0 5.99 2.2c5.1 0 9.25-4.15 9.25-9.25a9.2 9.2 0 0 0-2.2-5.99L6.01 19.051Z"
      :fill="color"
    ></path>
    <path
      d="M13.41 22.65c-.19 0-.38-.07-.53-.22l-5.66-5.66a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l5.66 5.66c.29.29.29.77 0 1.06a.71.71 0 0 1-.53.22ZM17.87 20.03c-.19 0-.38-.07-.53-.22l-6.58-6.58a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l6.58 6.58c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM21.12 16.221c-.19 0-.38-.07-.53-.22l-6.29-6.29a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l6.29 6.29a.75.75 0 0 1-.53 1.28Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M4.93 19.07A9.969 9.969 0 0 1 2 12C2 6.48 6.48 2 12 2c2.76 0 5.26 1.12 7.07 2.93"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M19.07 4.93A9.969 9.969 0 0 1 22 12c0 5.52-4.48 10-10 10-2.76 0-5.26-1.12-7.07-2.93"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <g opacity=".4" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19.07 4.93 4.93 19.07M7.76 16.238l5.65 5.66M11.29 12.71l6.58 6.57M14.83 9.168l6.29 6.3"></path>
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