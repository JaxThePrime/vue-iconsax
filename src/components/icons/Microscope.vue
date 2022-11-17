<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="m14.84 10.899 5.66-3.79c.57-.38.72-1.16.34-1.72l-1.82-2.71c-.38-.57-1.16-.72-1.72-.34l-5.66 3.79 3.2 4.77Z"
      :fill="color"
    ></path>
    <path
      d="m14.52 10.422-1.76 1.18-2.67 1.79-.35.23-.16-.24-2.24-3.34-.16-.24 4.78-3.2 2.56 3.82Z"
      :fill="color"
    ></path>
    <path
      d="m5.64 16.02 3.95-2.64-2.24-3.34-3.95 2.64c-.46.31-.58.93-.27 1.39l1.13 1.68c.3.46.92.58 1.38.27ZM16.56 21.812a.87.87 0 0 1-.31.07c-.29 0-.56-.17-.69-.45l-3.73-8.24-3.78 8.25a.77.77 0 0 1-.69.44.87.87 0 0 1-.31-.07.766.766 0 0 1-.37-1l3.41-7.42 2.67-1.79 4.17 9.22c.17.37 0 .82-.37.99Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="m14.04 4.521-2.21 1.48 3.2 4.78 5.66-3.79c.57-.38.72-1.16.34-1.72l-1.82-2.71c-.38-.57-1.16-.72-1.72-.34"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m12.174 6.48-4.778 3.2 2.56 3.822 4.778-3.2-2.56-3.822ZM5.83 15.902l3.95-2.64-2.24-3.34-3.95 2.64c-.46.31-.58.93-.27 1.39l1.13 1.68c.3.45.92.57 1.38.27ZM12.05 12.2 7.56 22M12 12.2l4.44 9.8"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="m14.839 10.899 5.66-3.79c.57-.38.72-1.16.34-1.72l-1.82-2.71c-.38-.57-1.16-.72-1.72-.34l-5.66 3.79 3.2 4.77ZM14.52 10.418l-1.76 1.18-2.67 1.79-.35.23-.16-.24-2.24-3.34-.16-.24 4.78-3.2 2.56 3.82Z"
      :fill="color"
    ></path>
    <path
      d="m5.64 16.019 3.95-2.64-2.24-3.34-3.95 2.64a1 1 0 0 0-.27 1.39l1.13 1.68c.3.46.92.58 1.38.27Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M16.56 21.812a.87.87 0 0 1-.31.07c-.29 0-.56-.17-.69-.45l-3.73-8.24-3.78 8.25a.77.77 0 0 1-.69.44.87.87 0 0 1-.31-.07.766.766 0 0 1-.37-1l3.41-7.42 2.67-1.79 4.17 9.22c.17.37 0 .82-.37.99Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="m15.03 10.77 5.66-3.79c.57-.38.72-1.16.34-1.72l-1.82-2.71c-.38-.57-1.16-.72-1.72-.34L11.83 6l3.2 4.77Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m12.174 6.48-4.778 3.2 2.56 3.821 4.778-3.2-2.56-3.822ZM5.83 15.9l3.95-2.64-2.24-3.34-3.95 2.64c-.46.31-.58.93-.27 1.39l1.13 1.68c.3.45.92.57 1.38.27ZM12.05 12.2 7.56 22M12 12.2l4.44 9.8"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M15.031 11.52c-.24 0-.48-.12-.62-.33l-3.2-4.78c-.11-.17-.15-.37-.11-.56.04-.19.15-.37.32-.48l5.66-3.79c.44-.3.97-.4 1.49-.3.52.1.97.4 1.27.84l1.82 2.71c.61.91.37 2.15-.55 2.76l-5.65 3.79c-.14.1-.28.14-.43.14Zm-2.15-5.32 2.36 3.53 5.03-3.37c.23-.15.29-.46.13-.68l-1.82-2.71a.487.487 0 0 0-.31-.21c-.13-.03-.26 0-.37.07l-5.02 3.37Z"
      :fill="color"
    ></path>
    <path
      d="M9.94 14.242c-.24 0-.48-.12-.62-.33l-2.56-3.82a.746.746 0 0 1 .21-1.04l4.78-3.2c.17-.11.37-.15.56-.11.2.04.37.15.48.32l2.56 3.82c.23.34.14.81-.21 1.04l-4.78 3.2c-.13.08-.28.12-.42.12Zm-1.52-4.36 1.72 2.57 3.53-2.36-1.72-2.58-3.53 2.37Z"
      :fill="color"
    ></path>
    <path
      d="M5.28 16.819c-.56 0-1.12-.27-1.46-.78l-1.13-1.68c-.26-.39-.35-.85-.26-1.31.09-.46.35-.85.74-1.11l3.95-2.64c.34-.23.81-.14 1.04.21l2.24 3.34c.23.34.14.81-.21 1.04l-3.95 2.64c-.29.19-.63.29-.96.29Zm2.05-5.87-3.32 2.22c-.11.08-.15.23-.07.35l1.13 1.68c.08.11.23.15.35.07l3.32-2.22-1.41-2.1ZM7.56 22.75c-.1 0-.21-.02-.31-.07a.746.746 0 0 1-.37-.99l4.49-9.8c.17-.38.62-.54.99-.37.38.17.54.62.37.99l-4.49 9.8a.75.75 0 0 1-.68.44Z"
      :fill="color"
    ></path>
    <path
      d="M16.44 22.75a.73.73 0 0 1-.68-.44l-4.44-9.8c-.17-.38 0-.82.37-.99.37-.17.82 0 .99.37l4.44 9.8a.751.751 0 0 1-.68 1.06Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="m15.03 10.77 5.66-3.79c.57-.38.72-1.16.34-1.72l-1.82-2.71c-.38-.57-1.16-.72-1.72-.34L11.83 6l3.2 4.77Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m12.174 6.48-4.778 3.2 2.56 3.822 4.778-3.2-2.56-3.822ZM5.83 15.898l3.95-2.64-2.24-3.34-3.95 2.64c-.46.31-.58.93-.27 1.39l1.13 1.68c.3.45.92.57 1.38.27Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M12.05 12.2 7.56 22M12 12.2l4.44 9.8"
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