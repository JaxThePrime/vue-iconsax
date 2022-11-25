<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm.47 9.25-1.62 1.02.14 2.4c.13 1.34-.33 1.8-1.6 1.95l-5.07.6c-.278.038-.373-.277-.174-.476L9.88 15.2c.29-.29.29-.77 0-1.06a.767.767 0 0 0-1.07 0l-1.535 1.543c-.198.199-.513.105-.475-.173l.59-5.07c.16-1.27.62-1.68 1.96-1.6l2.39.14 1.03-1.63c.47-.74 1.43-.78 2.13-.08l1.85 1.85c.66.65.62 1.68-.09 2.13Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M16.75 9.12 14.9 7.27c-.7-.7-1.66-.66-2.13.08l-1.03 1.63 3.29 3.29 1.63-1.03c.71-.44.75-1.47.09-2.12ZM11.74 8.982l-2.39-.14c-1.34-.08-1.8.33-1.95 1.6l-.6 5.07c-.13 1.07.64 1.83 1.71 1.71l5.07-.6c1.27-.15 1.73-.61 1.6-1.95l-.14-2.39M7.49 16.522l1.85-1.85"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M2 13.03V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      :fill="color"
    ></path>
    <path
      d="m16.66 11.25-1.62 1.02-3.3-3.29 1.03-1.63c.47-.74 1.43-.78 2.13-.08l1.85 1.85c.66.65.62 1.68-.09 2.13Z"
      :fill="color"
    ></path>
    <path
      opacity=".6"
      d="m13.58 16.622-5.07.6c-.22.03-.42.02-.61-.04-.55-.12-.94-.51-1.06-1.06-.06-.19-.07-.39-.04-.61l.59-5.07c.16-1.27.62-1.68 1.96-1.6l2.39.14 3.3 3.29.14 2.4c.13 1.34-.33 1.8-1.6 1.95Z"
      :fill="color"
    ></path>
    <path
      d="M9.88 15.2 7.9 17.18c-.55-.12-.94-.51-1.06-1.06l1.97-1.98c.3-.29.77-.29 1.07 0 .29.29.29.77 0 1.06Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M16.75 9.12L14.9 7.27c-.7-.7-1.66-.66-2.13.08l-1.03 1.63 3.29 3.29 1.63-1.03c.71-.44.75-1.47.09-2.12z"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M11.74 8.98l-2.39-.14c-1.34-.08-1.8.33-1.95 1.6l-.6 5.07c-.13 1.07.64 1.83 1.71 1.71l5.07-.6c1.27-.15 1.73-.61 1.6-1.95l-.14-2.39M7.49 16.52l1.85-1.85"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M15.04 13.02c-.19 0-.39-.08-.53-.22l-3.29-3.29a.742.742 0 0 1-.1-.93l1.03-1.63c.33-.53.85-.86 1.44-.92.65-.07 1.33.19 1.85.71l1.85 1.85c.5.5.75 1.18.68 1.85-.07.6-.39 1.12-.89 1.44l-1.63 1.03c-.14.08-.28.11-.41.11ZM12.7 8.87l2.45 2.45 1.12-.71c.14-.09.19-.23.2-.34a.813.813 0 0 0-.25-.63L14.37 7.8c-.2-.2-.43-.3-.62-.28-.14.02-.25.09-.34.23l-.71 1.12Z"
      :fill="color"
    ></path>
    <path
      d="M8.29 17.98c-.62 0-1.2-.23-1.61-.64-.48-.48-.71-1.18-.62-1.92l.6-5.07c.2-1.69 1.02-2.37 2.74-2.26l2.39.14c.41.03.73.38.7.79-.03.41-.38.73-.79.7l-2.4-.13c-.97-.06-1.06.09-1.16.94l-.6 5.07c-.03.28.04.53.19.68.16.16.4.23.68.19l5.07-.6c.92-.11 1.03-.25.95-1.13l-.15-2.42c-.02-.41.29-.77.7-.79.41-.03.77.29.79.7l.14 2.39c.17 1.68-.53 2.54-2.26 2.74l-5.07.6c-.09.02-.19.02-.29.02Z"
      :fill="color"
    ></path>
    <path
      d="M7.49 17.27c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.85-1.85c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.85 1.85a.71.71 0 0 1-.53.22Z"
      :fill="color"
    ></path>
    <path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <g opacity=".4" :stroke="color" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.75 9.12 14.9 7.27c-.7-.7-1.66-.66-2.13.08l-1.03 1.63 3.29 3.29 1.63-1.03c.71-.44.75-1.47.09-2.12ZM11.74 8.982l-2.39-.14c-1.34-.08-1.8.33-1.95 1.6l-.6 5.07c-.13 1.07.64 1.83 1.71 1.71l5.07-.6c1.27-.15 1.73-.61 1.6-1.95l-.14-2.39M7.49 16.522l1.85-1.85"></path>
    </g>
    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
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