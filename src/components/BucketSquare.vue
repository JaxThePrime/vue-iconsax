<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM9.06 16.25 6.5 13.68c-.44-.44-.65-.88-.64-1.33.01-.42.23-.83.64-1.24l3.6-3.6-.56-.55a.477.477 0 0 1 0-.68c.19-.19.49-.19.68 0l.55.55 4.7 4.7c.1.1.17.25.17.39a.6.6 0 0 1-.17.47l-3.85 3.85c-.84.86-1.7.86-2.56.01Zm7.58 1.61c-.83 0-1.5-.67-1.5-1.5 0-.84.99-1.95 1.19-2.17.16-.18.47-.18.64 0 .2.21 1.19 1.33 1.19 2.17-.02.83-.69 1.5-1.52 1.5Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M8.94 16.93 6.11 14.1c-.94-.94-.94-1.89 0-2.83l4.72-4.72 5.19 5.19c.26.26.26.68 0 .94l-4.25 4.25c-.94.94-1.89.94-2.83 0ZM9.879 5.602l.95.94M5.44 12.642l10.69-.47"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17.3 14.813s-1.31 1.42-1.31 2.29c0 .72.59 1.31 1.31 1.31.72 0 1.31-.59 1.31-1.31-.01-.87-1.31-2.29-1.31-2.29Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M2 12.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
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
      d="M15.66 11.931a.631.631 0 0 0-.17-.39l-4.7-4.7-.55-.55a.477.477 0 0 0-.68 0c-.19.19-.19.49 0 .68l.55.55-3.6 3.6c-.41.41-.63.83-.64 1.24-.01.44.2.88.64 1.33l2.57 2.57c.86.85 1.72.85 2.57 0l3.85-3.85c.11-.14.17-.32.16-.48ZM16.959 14.19c-.16-.18-.47-.18-.64 0-.2.21-1.19 1.33-1.19 2.17 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c.01-.84-.97-1.95-1.17-2.17Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M8.94 16.93L6.11 14.1c-.94-.94-.94-1.89 0-2.83l4.72-4.72 5.19 5.19c.26.26.26.68 0 .94l-4.25 4.25c-.94.94-1.89.94-2.83 0zM9.88 5.6l.95.94M5.44 12.64l10.69-.47"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M17.3 14.81s-1.31 1.42-1.31 2.29c0 .72.59 1.31 1.31 1.31.72 0 1.31-.59 1.31-1.31-.01-.87-1.31-2.29-1.31-2.29z"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M10.35 18.388c-.68 0-1.33-.31-1.95-.93l-2.83-2.83c-1.24-1.24-1.24-2.66 0-3.89l4.72-4.72c.29-.29.77-.29 1.06 0l5.19 5.19c.27.27.41.62.41 1s-.15.74-.41 1l-4.25 4.25c-.6.62-1.26.93-1.94.93Zm.48-10.79-4.19 4.19c-.32.32-.49.62-.49.89 0 .26.16.56.49.89l2.83 2.83c.65.65 1.12.65 1.77 0l4.19-4.19-4.6-4.61Z"
      :fill="color"
    ></path>
    <path
      d="M10.83 7.289c-.19 0-.38-.07-.53-.22l-.94-.94a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.94.94c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM5.44 13.391a.75.75 0 0 1-.03-1.5l10.68-.47c.41-.04.76.3.78.72.02.41-.3.76-.72.78l-10.68.47h-.03ZM17.3 19.149c-1.13 0-2.06-.92-2.06-2.06 0-1.08 1.15-2.41 1.5-2.79.28-.31.82-.31 1.1 0 .35.38 1.5 1.72 1.5 2.79a2.04 2.04 0 0 1-2.04 2.06Zm0-3.15c-.31.44-.56.88-.56 1.09a.56.56 0 1 0 1.12 0c-.01-.21-.25-.65-.56-1.09Z"
      :fill="color"
    ></path>
    <path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <g opacity=".4" :stroke="color" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M8.94 16.93 6.11 14.1c-.94-.94-.94-1.89 0-2.83l4.72-4.72 5.19 5.19c.26.26.26.68 0 .94l-4.25 4.25c-.94.94-1.89.94-2.83 0ZM9.879 5.602l.95.94M5.44 12.642l10.69-.47"
        strokeMiterlimit="10"
      ></path>
      <path d="M17.3 14.813s-1.31 1.42-1.31 2.29c0 .72.59 1.31 1.31 1.31.72 0 1.31-.59 1.31-1.31-.01-.87-1.31-2.29-1.31-2.29Z"></path>
    </g>
    <path
      d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7Z"
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