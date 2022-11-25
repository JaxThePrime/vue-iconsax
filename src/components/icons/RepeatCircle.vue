<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.19 13.94c-.04.09-.09.17-.16.24l-1.69 1.69c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l.41-.41H9.1c-1.3 0-2.35-1.06-2.35-2.35v-1.77c0-.41.34-.75.75-.75s.75.34.75.75v1.77c0 .47.38.85.85.85h5.59l-.41-.41a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1.69 1.69c.07.07.12.15.16.24.08.19.08.4 0 .58zm.06-4.22c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.95a.85.85 0 00-.85-.85H9.31l.41.4c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22L6.97 8.87a.776.776 0 01-.16-.24.707.707 0 010-.57c.04-.09.09-.18.16-.25l1.69-1.69c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.41.41h5.59c1.3 0 2.35 1.06 2.35 2.35v1.78z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M7.5 8.34h7.4c.89 0 1.6.72 1.6 1.6v1.77"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M9.19 6.66L7.5 8.34l1.69 1.69M16.5 15.66H9.1c-.89 0-1.6-.72-1.6-1.6v-1.77"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M14.81 17.34l1.69-1.68-1.69-1.69"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      :fill="color"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      opacity=".4"
    ></path>
    <path
      :fill="color"
      d="M14.9 7.59H9.31l.41-.41c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0L6.97 7.81c-.07.07-.12.15-.16.24-.08.18-.08.39 0 .57.04.09.09.17.16.24l1.69 1.69c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-.41-.41h5.59c.47 0 .85.38.85.85v1.77c0 .41.34.75.75.75s.75-.34.75-.75V9.93c0-1.28-1.06-2.34-2.35-2.34zM17.19 15.37a.776.776 0 00-.16-.24l-1.69-1.69a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l.41.41H9.1a.85.85 0 01-.85-.85v-1.77c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.77c0 1.3 1.06 2.35 2.35 2.35h5.59l-.41.41c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.69-1.69c.07-.07.12-.15.16-.24a.73.73 0 000-.58z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M7.5 8.34h7.4c.89 0 1.6.72 1.6 1.6v1.77"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M9.19 6.66L7.5 8.34l1.69 1.69M16.5 15.66H9.1c-.89 0-1.6-.72-1.6-1.6v-1.77"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M14.81 17.34l1.69-1.68-1.69-1.69"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      :fill="color"
      d="M16.5 12.47c-.41 0-.75-.34-.75-.75V9.95a.85.85 0 00-.85-.85H7.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.4c1.3 0 2.35 1.06 2.35 2.35v1.77c0 .41-.34.75-.75.75z"
    ></path>
    <path
      :fill="color"
      d="M9.19 10.78c-.19 0-.38-.07-.53-.22L6.97 8.87a.754.754 0 010-1.06l1.69-1.69c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L8.56 8.34 9.72 9.5c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM16.5 16.41H9.1c-1.3 0-2.35-1.06-2.35-2.35v-1.77c0-.41.34-.75.75-.75s.75.34.75.75v1.77c0 .47.38.85.85.85h7.4c.41 0 .75.34.75.75s-.34.75-.75.75z"
    ></path>
    <path
      :fill="color"
      d="M14.81 18.09c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l1.16-1.16-1.16-1.16a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1.69 1.69c.29.29.29.77 0 1.06l-1.69 1.69c-.14.15-.34.22-.53.22z"
    ></path>
    <path
      :fill="color"
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <g opacity=".4">
      <path
        :stroke="color"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M7.5 8.34h7.4c.89 0 1.6.72 1.6 1.6v1.77"
      ></path>
      <path
        :stroke="color"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M9.19 6.66L7.5 8.34l1.69 1.69M16.5 15.66H9.1c-.89 0-1.6-.72-1.6-1.6v-1.77"
      ></path>
      <path
        :stroke="color"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M14.81 17.34l1.69-1.68-1.69-1.69"
      ></path>
    </g>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
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