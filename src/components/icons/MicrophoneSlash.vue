<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M16.418 6.422v1.16l-7.28 7.28a4.776 4.776 0 0 1-1.56-3.52v-4.92c0-2.06 1.4-3.77 3.3-4.26.19-.05.37.11.37.3v1.54c0 .41.34.75.75.75s.75-.34.75-.75v-1.54c0-.19.18-.35.37-.3 1.9.49 3.3 2.2 3.3 4.26ZM19.812 9.811v1.59c0 4.07-3.13 7.42-7.11 7.77v2.13c0 .39-.31.7-.7.7-.39 0-.7-.31-.7-.7v-2.13c-1.09-.1-2.12-.42-3.04-.93l1.03-1.03c.82.38 1.74.6 2.71.6 3.54 0 6.42-2.88 6.42-6.41v-1.59c0-.38.31-.69.7-.69.38 0 .69.31.69.69Z"
      :fill="color"
    ></path>
    <path
      d="M16.418 10.078v1.45c0 2.58-2.22 4.65-4.86 4.4-.28-.03-.56-.08-.82-.17l5.68-5.68ZM21.771 2.229c-.3-.3-.79-.3-1.09 0l-13.45 13.45a6.322 6.322 0 0 1-1.65-4.28v-1.59c0-.38-.31-.69-.7-.69-.38 0-.69.31-.69.69v1.59c0 2.03.78 3.88 2.05 5.27l-4.02 4.02c-.3.3-.3.79 0 1.09.16.14.35.22.55.22.2 0 .39-.08.54-.23l18.46-18.46c.31-.3.31-.78 0-1.08Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M6 12v1c0 1.46.52 2.8 1.39 3.84M17.82 6.53A6.008 6.008 0 0 0 12 2C8.69 2 6 4.69 6 8M18.002 9.98V13a6.005 6.005 0 0 1-8.08 5.63"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M5.86 19.58A9 9 0 0 0 21 13v-2M21.5 2.988l-19 19M11.55 5.502v-3.24M8.5 3.5v4"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M16.418 6.422v1.16l-7.28 7.28a4.776 4.776 0 0 1-1.56-3.52v-4.92c0-2.06 1.4-3.77 3.3-4.26.19-.05.37.11.37.3v1.54c0 .41.34.75.75.75s.75-.34.75-.75v-1.54c0-.19.18-.35.37-.3 1.9.49 3.3 2.2 3.3 4.26Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="m7.781 16.221-.99.99a7.796 7.796 0 0 1-2.6-5.81v-1.59c0-.38.31-.69.69-.69.39 0 .7.31.7.69v1.59c0 1.92.85 3.65 2.2 4.82ZM19.812 9.811v1.59c0 4.07-3.13 7.42-7.11 7.77v2.13c0 .39-.31.7-.7.7-.39 0-.7-.31-.7-.7v-2.13c-1.09-.1-2.12-.42-3.04-.93l1.03-1.03c.82.38 1.74.6 2.71.6 3.54 0 6.42-2.88 6.42-6.41v-1.59c0-.38.31-.69.7-.69.38 0 .69.31.69.69Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M16.418 10.078v1.45c0 2.58-2.22 4.65-4.86 4.4-.28-.03-.56-.08-.82-.17l5.68-5.68Z"
      :fill="color"
    ></path>
    <path
      d="M21.769 2.229c-.3-.3-.79-.3-1.09 0l-18.45 18.46c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M16 6.3V6c0-2.21-1.79-4-4-4S8 3.79 8 6v5M9.04 14.19c.73.81 1.79 1.31 2.96 1.31 2.21 0 4-1.79 4-4V11"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M6.78 16.95a7.656 7.656 0 0 0 12.87-5.6v-1.7M4.35 9.65v1.7c0 1.06.21 2.06.6 2.98M20.07 2.84 3.93 18.99M11 3v3M12 19v3"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M7.39 17.59c-.21 0-.43-.09-.58-.27A6.74 6.74 0 0 1 5.25 13V8c0-3.72 3.03-6.75 6.75-6.75 3.1 0 5.79 2.1 6.55 5.1.1.4-.14.81-.54.91-.39.1-.81-.14-.91-.54A5.261 5.261 0 0 0 12 2.75C9.11 2.75 6.75 5.1 6.75 8v5c0 1.23.43 2.42 1.21 3.36a.75.75 0 0 1-.57 1.23ZM12.002 19.75c-.81 0-1.6-.14-2.34-.42a.74.74 0 0 1-.44-.96.74.74 0 0 1 .96-.44c.58.22 1.2.33 1.82.33 2.89 0 5.25-2.35 5.25-5.25V9.98c0-.41.34-.75.75-.75s.75.34.75.75V13c0 3.72-3.03 6.75-6.75 6.75Z"
      :fill="color"
    ></path>
    <path
      d="M12.001 22.748c-2.48 0-4.84-.93-6.65-2.62a.755.755 0 0 1-.04-1.06c.28-.3.76-.32 1.06-.04a8.203 8.203 0 0 0 5.62 2.21c4.55 0 8.25-3.7 8.25-8.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c.01 5.39-4.36 9.76-9.74 9.76Z"
      :fill="color"
    ></path>
    <path
      d="M2.501 22.74c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l19-19c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-19 19c-.15.15-.34.22-.53.22ZM11.55 6.252c-.41 0-.75-.34-.75-.75v-3.24c0-.41.34-.75.75-.75s.75.34.75.75v3.24c0 .42-.34.75-.75.75ZM8.5 8.25c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M16 6.3V6c0-2.21-1.79-4-4-4S8 3.79 8 6v5M4.352 9.648v1.7c0 1.06.21 2.06.6 2.98M20.07 2.84 3.93 18.99M11 3v3"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <g opacity=".4" :stroke="color" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.04 14.19c.73.81 1.79 1.31 2.96 1.31 2.21 0 4-1.79 4-4V11"></path>
      <path d="M6.781 16.948a7.656 7.656 0 0 0 12.87-5.6v-1.7M12 19v3"></path>
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