<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3c0 2.66 1.46 3.29 3.23 1.39l.01-.01c.82-.87 2.07-.8 2.78.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35c.72-.96 1.97-1.03 2.79-.15 1.78 1.9 3.23 1.27 3.23-1.39V7.04C20.5 3.01 19.56 2 15.78 2ZM9 7c.55 0 1 .45 1 1s-.44 1-1 1-1-.45-1-1 .44-1 1-1Zm6 7c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Zm.9-6.41-6.73 6.73c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6.73-6.73c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M20.5 7.04c0-4.03-.94-5.04-4.72-5.04H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3c0 2.66 1.46 3.29 3.23 1.39l.01-.01c.82-.87 2.07-.8 2.78.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35c.72-.96 1.97-1.03 2.79-.15 1.78 1.9 3.23 1.27 3.23-1.39v-7.27M8.629 13.8l6.73-6.73M9 13l6-6"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M14.995 13h.009M8.995 7.5h.008"
      :stroke="color"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M6.73 19.7c.82-.88 2.07-.81 2.79.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35c.72-.96 1.97-1.03 2.79-.15 1.78 1.9 3.23 1.27 3.23-1.39V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3c0 2.67 1.46 3.29 3.23 1.4Z"
      :fill="color"
    ></path>
    <path
      d="M15 14c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1ZM9 9c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1ZM8.63 14.552c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6.73-6.73c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.73 6.73c-.14.15-.34.22-.53.22Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M6.73 19.7c.82-.88 2.07-.81 2.79.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35c.72-.96 1.97-1.03 2.79-.15 1.78 1.9 3.23 1.27 3.23-1.39V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3c0 2.67 1.46 3.29 3.23 1.4ZM9 13l6-6"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M14.995 13h.009M8.995 7.5h.008"
      :stroke="color"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M12 22.75c-.79 0-1.54-.4-2.06-1.11l-1.01-1.35c-.21-.28-.49-.44-.79-.46-.3-.02-.6.12-.84.37l-.57-.5.55.51c-1.45 1.54-2.55 1.42-3.08 1.21-.54-.21-1.45-.9-1.45-3.12V7.04c0-4.44 1.28-5.79 5.47-5.79h7.55c4.19 0 5.47 1.35 5.47 5.79V18.3c0 2.21-.91 2.9-1.45 3.12-.53.21-1.63.33-3.08-1.21-.24-.26-.55-.39-.85-.37-.3.02-.59.18-.8.46l-1.01 1.35c-.51.7-1.26 1.1-2.05 1.1Zm-3.92-4.42h.13c.74.04 1.44.43 1.91 1.06l1.02 1.35c.49.65 1.24.65 1.73 0l1.01-1.35c.47-.63 1.17-1.02 1.92-1.06.75-.04 1.48.27 2.02.85.76.81 1.25.91 1.43.84.24-.1.5-.68.5-1.72V7.04c0-3.61-.63-4.29-3.97-4.29H8.22c-3.34 0-3.97.68-3.97 4.29V18.3c0 1.05.26 1.63.5 1.72.18.07.67-.03 1.43-.84.52-.55 1.2-.85 1.9-.85Z"
      :fill="color"
    ></path>
    <path
      d="M15 14c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1ZM9 9c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1ZM8.63 14.552c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6.73-6.73c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.73 6.73a.71.71 0 0 1-.53.22Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M6.73 19.7c.82-.88 2.07-.81 2.79.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35c.72-.96 1.97-1.03 2.79-.15 1.78 1.9 3.23 1.27 3.23-1.39V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3c0 2.67 1.46 3.29 3.23 1.4Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="m9 13 6-6"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M14.995 13h.009M8.995 7.5h.008"
      :stroke="color"
      strokeWidth="2"
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