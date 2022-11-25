<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M15.17 13.772c0 .56.46 1.02 1.02 1.02h1.02v-2.03h-1.02a1.01 1.01 0 00-1.02 1.01z"
    ></path>
    <path
      :fill="color"
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm-3.91 13.06c.26.32.21.8-.12 1.05-.14.11-.3.16-.47.16-.22 0-.44-.1-.59-.28l-2.24-2.8-2.24 2.8a.763.763 0 01-1.06.12.748.748 0 01-.12-1.05L7.89 12 5.44 8.94c-.26-.32-.21-.8.12-1.05.32-.26.8-.21 1.05.12l2.24 2.8 2.24-2.8a.748.748 0 011.17.93L9.81 12l2.47 3.06zm6.43.47c0 .41-.34.75-.75.75h-1.77c-1.39 0-2.52-1.13-2.52-2.52 0-1.39 1.13-2.52 2.52-2.52h1.02V8.46c0-.41.34-.75.75-.75s.75.34.75.75v7.07z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M17.96 8.469v7.06h-1.77c-.98 0-1.77-.79-1.77-1.77s.79-1.77 1.77-1.77h1.77M6.04 8.469l5.65 7.06M11.69 8.469l-5.65 7.06"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      :fill="color"
    ></path>
    <path
      d="M17.96 7.719c-.41 0-.75.34-.75.75v2.78h-1.02c-1.39 0-2.52 1.13-2.52 2.52 0 1.39 1.13 2.52 2.52 2.52h1.77c.41 0 .75-.34.75-.75v-7.06c0-.43-.34-.76-.75-.76Zm-.75 7.06h-1.02c-.56 0-1.02-.46-1.02-1.02s.46-1.02 1.02-1.02h1.02v2.04ZM12.16 7.88a.738.738 0 0 0-1.05.12l-2.24 2.8L6.63 8a.748.748 0 0 0-1.17.93l2.45 3.06-2.45 3.06c-.26.32-.21.8.12 1.05.14.11.3.16.47.16.22 0 .44-.1.59-.28l2.24-2.8 2.24 2.8a.763.763 0 0 0 1.06.12c.32-.26.38-.73.12-1.05l-2.45-3.06 2.45-3.06a.76.76 0 0 0-.14-1.05Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M18 8.5v7.1h-1.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8H18M6 8.5l5.7 7M11.7 8.5l-5.7 7"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      :fill="color"
    ></path>
    <path
      d="M17.96 16.28h-1.77c-1.39 0-2.52-1.129-2.52-2.519 0-1.39 1.13-2.52 2.52-2.52h1.02V8.46c0-.41.34-.75.75-.75s.75.34.75.75v7.06c0 .43-.34.76-.75.76Zm-1.77-3.53c-.56 0-1.02.46-1.02 1.02s.46 1.021 1.02 1.021h1.02v-2.03h-1.02v-.01ZM11.689 16.279c-.22 0-.44-.1-.59-.28l-5.65-7.06c-.26-.32-.21-.8.12-1.05.32-.26.8-.21 1.05.12l5.65 7.06c.26.32.21.8-.12 1.05-.13.11-.29.16-.46.16Z"
      :fill="color"
    ></path>
    <path
      d="M6.04 16.28c-.16 0-.33-.05-.47-.16a.748.748 0 0 1-.12-1.05l5.65-7.06a.748.748 0 0 1 1.17.93L6.62 16a.74.74 0 0 1-.58.28Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M17.96 8.469v7.06h-1.77c-.98 0-1.77-.79-1.77-1.77s.79-1.77 1.77-1.77h1.77"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <g
      opacity=".4"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6.04 8.469 5.65 7.06M11.69 8.469l-5.65 7.06"></path>
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
            default: 32,
        },
        color: {
            type: String,
            default: "currentColor",
        },
    },
})
</script>