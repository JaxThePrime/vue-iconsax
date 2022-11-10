<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M16.65 5.719h-9.3c-2.95 0-5.35 2.4-5.35 5.35v5.58c0 2.95 2.4 5.35 5.35 5.35h9.3c2.95 0 5.35-2.4 5.35-5.35v-5.58c0-2.95-2.4-5.35-5.35-5.35Zm-2.15 6.3c0-.55.45-1 1-1s1 .45 1 1-.45 1.01-1 1.01-1-.44-1-.99v-.02Zm-4.37 4.05c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.03-1.03-.99.99c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.99-.99-.96-.96a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.96.96.99-.99c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.99.99 1.03 1.03c.29.29.29.77 0 1.06Zm3.41-1.07c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.44 1-1 1Zm1.96 1.97c-.55 0-1-.44-1-.99v-.02c0-.55.45-1 1-1s1 .45 1 1-.44 1.01-1 1.01Zm1.98-1.97c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.44 1-1 1Z"
      :fill="color"
    ></path>
    <path
      d="m13.64 2.71-.01.94A1.64 1.64 0 0 1 12 5.26c-.15 0-.24.1-.24.23s.1.23.23.23h-1.61c-.01-.07-.02-.15-.02-.23 0-.9.73-1.63 1.62-1.63.15 0 .25-.1.25-.23l.01-.94c.01-.38.32-.69.7-.69h.01c.39 0 .69.32.69.71Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="m9.57 12.46-3.05 3.05M6.55 12.488l3.05 3.05"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M13.53 14h.01M17.47 14h.01M15.5 15.98v-.02M15.5 12.04v-.02"
      :stroke="color"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M2 15c0 5 2 7 7 7h6c5 0 7-2 7-7v-2c0-5-2-7-7-7H9C5.25 6 3.19 7.12 2.39 9.8M13.01 2 13 3.01A1 1 0 0 1 12 4h-.03c-.55 0-.99.45-.99 1s.45 1 1 1h1"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="m10.13 15.008-1.03-1.03.99-.99c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-.99.99-.96-.96a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l.96.96-.99.99c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l.99-.99 1.03 1.03c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06ZM13.54 15c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.44 1-1 1ZM17.48 15c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.44 1-1 1ZM15.5 16.97c-.55 0-1-.44-1-.99v-.02c0-.55.45-1 1-1s1 .45 1 1-.44 1.01-1 1.01ZM15.5 13.03c-.55 0-1-.44-1-.99v-.02c0-.55.45-1 1-1s1 .45 1 1-.44 1.01-1 1.01Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M22 11.069v5.58c0 2.95-2.4 5.35-5.35 5.35h-9.3c-2.95 0-5.35-2.4-5.35-5.35v-5.58c0-2.95 2.4-5.35 5.35-5.35h9.3c2.95 0 5.35 2.4 5.35 5.35Z"
      :fill="color"
    ></path>
    <path
      d="m13.64 2.71-.01.94A1.64 1.64 0 0 1 12 5.26c-.15 0-.24.1-.24.23s.1.23.23.23h-1.61c-.01-.07-.02-.15-.02-.23 0-.9.73-1.63 1.62-1.63.15 0 .25-.1.25-.23l.01-.94c.01-.38.32-.69.7-.69h.01c.39 0 .69.32.69.71Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="m9.57 12.46-3.05 3.05M6.55 12.49l3.05 3.05"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M13.53 14h.01M17.47 14h.01M15.5 15.98v-.02M15.5 12.04v-.02"
      :stroke="color"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9 22h6c5 0 7-2 7-7v-2c0-5-2-7-7-7H9c-5 0-7 2-7 7v2c0 5 2 7 7 7ZM13.01 2 13 3.01A1 1 0 0 1 12 4h-.03c-.55 0-.99.45-.99 1s.45 1 1 1h1"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M6.52 16.258c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.05-3.05c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.05 3.05c-.15.14-.34.22-.53.22Z"
      :fill="color"
    ></path>
    <path
      d="M9.6 16.29c-.19 0-.38-.07-.53-.22l-3.05-3.05a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3.05 3.05c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM13.54 15c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.44 1-1 1ZM17.48 15c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.45 1-1 1ZM15.5 16.97c-.55 0-1-.44-1-.99v-.02c0-.55.45-1 1-1s1 .45 1 1-.44 1.01-1 1.01ZM15.5 13.03c-.55 0-1-.44-1-.99v-.02c0-.55.45-1 1-1s1 .45 1 1-.44 1.01-1 1.01Z"
      :fill="color"
    ></path>
    <path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75v-2c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v2c0 5.43-2.32 7.75-7.75 7.75Zm-6-16c-4.61 0-6.25 1.64-6.25 6.25v2c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-2c0-4.61-1.64-6.25-6.25-6.25H9Z"
      :fill="color"
    ></path>
    <path
      d="M12.99 6.75h-1c-.96 0-1.75-.79-1.75-1.75s.78-1.75 1.74-1.75c.16 0 .27-.11.28-.25l.01-1.01c.01-.41.34-.74.75-.74h.01c.41.01.75.35.74.76l-.01 1.01c-.01.95-.8 1.73-1.75 1.73-.16 0-.26.11-.26.25s.11.25.25.25h1c.41 0 .75.34.75.75s-.35.75-.76.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <g
      opacity=".4"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.57 12.46-3.05 3.05M6.55 12.492l3.05 3.05"></path>
    </g>
    <path
      opacity=".4"
      d="M13.53 14h.01M17.47 14h.01M15.5 15.98v-.02M15.5 12.04v-.02"
      :stroke="color"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9 22h6c5 0 7-2 7-7v-2c0-5-2-7-7-7H9c-5 0-7 2-7 7v2c0 5 2 7 7 7ZM13.01 2 13 3.01A1 1 0 0 1 12 4h-.03c-.55 0-.99.45-.99 1s.45 1 1 1h1"
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