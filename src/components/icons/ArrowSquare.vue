<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm3.16 6.84c-.04.09-.09.17-.16.24l-1.8 1.8c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.52-.52h-.15c-2.1 0-3.82 1.71-3.82 3.81v4.13c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.13c0-2.1-1.71-3.81-3.81-3.81h-.42l.52.52c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.8-1.8a.754.754 0 0 1 0-1.06l1.8-1.8c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.52.52h.43c1.95 0 3.64 1.07 4.56 2.64.92-1.57 2.61-2.64 4.57-2.64h.15l-.52-.52a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.8 1.8c.07.07.12.15.16.24.07.19.07.4-.01.58Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M12.14 15.07v-1.96c0-2.52 2.04-4.57 4.57-4.57h1.96"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M5.621 8.55h1.96c2.52 0 4.57 2.04 4.57 4.57v4.13"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m7.14 6.75-1.8 1.8 1.8 1.8M16.86 6.75l1.8 1.8-1.8 1.8"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M2 9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7H9c-5 0-7-2-7-7v-1.98"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M16.192 2h-8.37c-3.64 0-5.81 2.17-5.81 5.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81c0-3.64-2.17-5.81-5.81-5.81Z"
      :fill="color"
    ></path>
    <path
      d="M19.35 8.27a.776.776 0 0 0-.16-.24l-1.8-1.8a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l.52.52h-.15c-1.95 0-3.64 1.07-4.57 2.64-.92-1.57-2.61-2.64-4.56-2.64h-.43l.52-.52c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1.8 1.8c-.29.29-.29.77 0 1.06l1.8 1.8c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-.52-.52h.42c2.1 0 3.81 1.71 3.81 3.81v4.13c0 .41.34.75.75.75s.75-.34.75-.75v-4.13c0-2.1 1.71-3.81 3.82-3.81h.15l-.52.52c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.8-1.8c.07-.07.12-.15.16-.24.09-.19.09-.4.01-.58Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M12.14 15.07v-1.96c0-2.52 2.04-4.57 4.57-4.57h1.96"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M5.62 8.55h1.96c2.52 0 4.57 2.04 4.57 4.57v4.13"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m7.14 6.75-1.8 1.8 1.8 1.8M16.86 6.75l1.8 1.8-1.8 1.8"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M12.14 15.82c-.41 0-.75-.34-.75-.75v-1.96c0-2.93 2.38-5.31 5.32-5.31h1.96c.41 0 .75.34.75.75s-.34.75-.75.75h-1.96c-2.1 0-3.82 1.71-3.82 3.81v1.96c0 .42-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M12.141 17.999c-.41 0-.75-.34-.75-.75v-4.13c0-2.1-1.71-3.81-3.81-3.81h-1.96c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.96c2.93 0 5.31 2.38 5.31 5.31v4.13c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M7.141 11.101c-.19 0-.38-.07-.53-.22l-1.8-1.8a.754.754 0 0 1 0-1.06l1.8-1.8c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.27 1.27 1.27 1.27c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM16.86 11.101c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.27-1.27-1.27-1.27a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.8 1.8c.29.29.29.77 0 1.06l-1.8 1.8c-.14.15-.34.22-.53.22Z"
      :fill="color"
    ></path>
    <path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <g opacity=".4">
      <path
        :stroke="color"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12.14 15.07v-1.96c0-2.52 2.04-4.57 4.57-4.57h1.96"
      ></path>
      <path
        :stroke="color"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.621 8.55h1.96c2.52 0 4.57 2.04 4.57 4.57v4.13"
      ></path>
      <path
        :stroke="color"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.14 6.75l-1.8 1.8 1.8 1.8M16.86 6.75l1.8 1.8-1.8 1.8"
      ></path>
    </g>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
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