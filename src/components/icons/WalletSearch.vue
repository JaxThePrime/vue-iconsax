<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="m1.23 21.682.76-.76c-.4-.6-.63-1.32-.63-2.09a3.82 3.82 0 0 1 3.82-3.82c2.11 0 3.82 1.7 3.82 3.81a3.82 3.82 0 0 1-3.82 3.82c-.77 0-1.49-.23-2.09-.63l-.76.76a.78.78 0 0 1-1.11 0c-.3-.3-.3-.79.01-1.09ZM21.5 12.5H19c-1.1 0-2 .9-2 2s.9 2 2 2h2.5c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5ZM16.53 5.4c.3.29.05.74-.37.74l-8.28-.01c-.48 0-.72-.58-.38-.92l1.75-1.76a3.796 3.796 0 0 1 5.35 0l1.89 1.91.04.04Z"
      :fill="color"
    ></path>
    <path
      d="M21.87 18.66C21.26 20.72 19.5 22 17.1 22h-6.5c-.39 0-.64-.43-.48-.79.3-.7.49-1.49.49-2.21 0-3.03-2.47-5.5-5.5-5.5-.76 0-1.5.16-2.18.46-.37.16-.82-.09-.82-.49V12c0-2.72 1.64-4.62 4.19-4.94.25-.04.52-.06.8-.06h10c.26 0 .51.01.75.05 2.02.23 3.48 1.46 4.02 3.29.1.33-.14.66-.48.66H19.1c-2.17 0-3.89 1.98-3.42 4.23.33 1.64 1.85 2.77 3.52 2.77h2.19c.35 0 .58.34.48.66Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M12 22h5c3 0 5-2 5-5v-5c0-2.7-1.7-4.7-4.2-5H7c-.3 0-.5 0-.8.1C3.6 7.4 2 9.3 2 12v1"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M16.8 4.8c.6.6.9 1.4 1 2.2H7c-.3 0-.5 0-.8.1.1-.3.3-.5.6-.8L10 3c.82-.82 1.91-1.16 2.96-1.02M22 12.5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3M5.802 21.4c1.77 0 3.2-1.43 3.2-3.2 0-1.77-1.43-3.2-3.2-3.2-1.77 0-3.2 1.43-3.2 3.2 0 1.77 1.43 3.2 3.2 3.2ZM2 22l1-1"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M17.751 7.05c-.24-.04-.49-.05-.75-.05h-10c-.28 0-.55.02-.81.06.14-.28.34-.54.58-.78l3.25-3.26a3.525 3.525 0 0 1 4.96 0l1.75 1.77c.64.63.98 1.43 1.02 2.26Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M2 16.36V12c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h10c.26 0 .51.01.75.05C20.33 7.35 22 9.26 22 12v5c0 2.76-2.24 5-5 5H7c-2.76 0-5-2.24-5-5v-.64Z"
      :fill="color"
    ></path>
    <path
      d="M22 12.5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3M1.229 21.682l.76-.76c-.4-.6-.63-1.32-.63-2.09a3.82 3.82 0 1 1 3.82 3.82c-.77 0-1.49-.23-2.09-.63l-.76.76a.78.78 0 0 1-.55.23c-.2 0-.4-.08-.55-.23a.767.767 0 0 1 0-1.1Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M12 22h5c3 0 5-2 5-5v-5c0-2.7-1.7-4.7-4.2-5H7c-.3 0-.5 0-.8.1C3.6 7.4 2 9.3 2 12v1"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17.8 7H7c-.3 0-.5 0-.8.1.1-.3.3-.5.6-.8L10 3c1.4-1.4 3.6-1.4 5 0l1.8 1.8c.6.6.9 1.4 1 2.2ZM22 12.5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3M5.802 21.4c1.77 0 3.2-1.43 3.2-3.2 0-1.77-1.43-3.2-3.2-3.2-1.77 0-3.2 1.43-3.2 3.2 0 1.77 1.43 3.2 3.2 3.2ZM2 22l1-1"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M17 22.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c2.58 0 4.25-1.67 4.25-4.25v-5c0-2.29-1.42-4-3.54-4.25H7c-.28 0-.38 0-.56.06-.05.02-.1.03-.15.03C4.08 8.1 2.75 9.65 2.75 12v1c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1c0-3.06 1.88-5.27 4.79-5.64.38-.11.66-.11.96-.11h10.8c3 .35 4.95 2.66 4.95 5.75v5c0 3.44-2.31 5.75-5.75 5.75Z"
      :fill="color"
    ></path>
    <path
      d="M6.202 7.85a.75.75 0 0 1-.71-.989c.16-.47.45-.76.78-1.09l3.19-3.29c1.65-1.65 4.43-1.65 6.07-.01l1.8 1.8c.66.66 1.08 1.57 1.21 2.64a.75.75 0 0 1-.18.59.75.75 0 0 1-.56.25h-10.8c-.28 0-.38 0-.56.06-.08.03-.16.04-.24.04Zm1.69-1.599h8.96c-.12-.32-.31-.64-.58-.92l-1.8-1.8c-1.07-1.07-2.87-1.07-3.94 0l-2.64 2.72ZM22 17.25h-3c-1.52 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3a1.25 1.25 0 0 0 0 2.5h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM5.802 22.15c-2.18 0-3.95-1.77-3.95-3.95s1.77-3.95 3.95-3.95 3.95 1.77 3.95 3.95-1.77 3.95-3.95 3.95Zm0-6.4c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.45 2.45 2.45 2.45-1.1 2.45-2.45-1.1-2.45-2.45-2.45Z"
      :fill="color"
    ></path>
    <path
      d="M2.001 22.751c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l1-1c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1 1c-.15.15-.34.22-.53.22Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M12 22h5c3 0 5-2 5-5v-5c0-2.7-1.7-4.7-4.2-5H7c-.3 0-.5 0-.8.1C3.6 7.4 2 9.3 2 12v1"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M17.8 7H7c-.3 0-.5 0-.8.1.1-.3.3-.5.6-.8L10 3c1.4-1.4 3.6-1.4 5 0l1.8 1.8c.6.6.9 1.4 1 2.2ZM22 12.5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M5.802 21.4c1.77 0 3.2-1.43 3.2-3.2 0-1.77-1.43-3.2-3.2-3.2-1.77 0-3.2 1.43-3.2 3.2 0 1.77 1.43 3.2 3.2 3.2ZM2 22l1-1"
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
            default: "currentColor",
        },
    },
})
</script>