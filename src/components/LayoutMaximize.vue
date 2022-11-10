<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M20.95 4.13c-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2H7.81c-.2 0-.4.01-.59.03C3.94 2.24 2 4.37 2 7.81v8.38c0 1.49.36 2.73 1.05 3.68.29.42.66.79 1.08 1.08.82.6 1.86.95 3.09 1.03.19.01.39.02.59.02h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-1.49-.36-2.73-1.05-3.68ZM18.75 10c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.81L13.06 12l4.19 4.19V14c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .1-.02.19-.06.29-.08.18-.22.33-.41.41-.09.04-.19.06-.29.06h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.19L12 13.06l-4.19 4.19H10c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.1 0-.2-.02-.29-.06a.782.782 0 0 1-.41-.41.868.868 0 0 1-.05-.28v-4c0-.41.34-.75.75-.75s.75.34.75.75v2.19L10.94 12 6.75 7.81V10c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6c0-.1.02-.19.06-.29.08-.18.22-.33.41-.41.09-.03.18-.05.28-.05h4c.41 0 .75.34.75.75s-.34.75-.75.75H7.81L12 10.94l4.19-4.19H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.1 0 .19.02.29.06.18.08.33.22.41.41.03.09.05.18.05.28v4Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M2 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9M18 6 6 18"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M18 10V6h-4M6 14v4h4M6 6l12 12M6 10V6h4M18 14v4h-4"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M22 7.81v8.38c0 3.64-2.17 5.81-5.81 5.81H7.81c-.2 0-.4-.01-.59-.02-1.23-.08-2.27-.43-3.09-1.03-.42-.29-.79-.66-1.08-1.08C2.36 18.92 2 17.68 2 16.19V7.81c0-3.44 1.94-5.57 5.22-5.78.19-.02.39-.03.59-.03h8.38c1.49 0 2.73.36 3.68 1.05.42.29.79.66 1.08 1.08.69.95 1.05 2.19 1.05 3.68Z"
      :fill="color"
    ></path>
    <path
      d="M18 10.75c.41 0 .75-.34.75-.75V6c0-.1-.02-.19-.06-.29a.782.782 0 0 0-.41-.41.868.868 0 0 0-.28-.05h-4c-.41 0-.75.34-.75.75s.34.75.75.75h2.19L12 10.94 7.81 6.75H10c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H6c-.1 0-.19.02-.29.06-.18.07-.33.22-.4.4-.04.1-.06.19-.06.29v4c0 .41.34.75.75.75s.75-.34.75-.75V7.81L10.94 12l-4.19 4.19V14c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4c0 .1.02.19.06.29.08.18.22.33.41.41.08.03.18.05.28.05h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H7.81L12 13.06l4.19 4.19H14c-.41 0-.75.34-.75.75s.34.75.75.75h4c.1 0 .2-.02.29-.06.18-.08.33-.22.41-.41.04-.09.06-.19.06-.29v-4c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.19L13.06 12l4.19-4.19V10c0 .41.34.75.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM18 6 6 18"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M18 10V6h-4M6 14v4h4M6 6l12 12M6 10V6h4M18 14v4h-4"
      :stroke="color"
      strokeWidth="1.5"
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
      d="M6.001 18.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l12-12c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-12 12c-.15.15-.34.22-.53.22Z"
      :fill="color"
    ></path>
    <path
      d="M18 10.75c-.41 0-.75-.34-.75-.75V6.75H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75ZM10 18.75H6c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v3.25H10c.41 0 .75.34.75.75s-.34.75-.75.75ZM18.001 18.751c-.19 0-.38-.07-.53-.22l-12-12a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l12 12c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
      :fill="color"
    ></path>
    <path
      d="M6 10.75c-.41 0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75H6.75V10c0 .41-.34.75-.75.75ZM18 18.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V14c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <g opacity=".4" :stroke="color" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M18 10V6h-4M6 14v4h4M6 6l12 12M6 10V6h4M18 14v4h-4"></path>
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
            default: "#292D32",
        },
    },
})
</script>