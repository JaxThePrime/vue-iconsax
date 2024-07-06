<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.67 14.43l-2.25 1.5c-.13.08-.27.13-.42.13-.15 0-.29-.04-.42-.13l-2.25-1.5a.755.755 0 01-.21-1.04c.23-.35.7-.44 1.04-.21l1.83 1.22 1.83-1.22c.34-.23.81-.14 1.04.21.24.35.15.81-.19 1.04zm1.83-3.44c0 .78-.85 1.26-1.51.86l-2.47-1.48c-.32-.19-.71-.19-1.03 0l-2.47 1.48a.996.996 0 01-1.51-.86V9.16c0-.34.18-.66.46-.84l3.5-2.22c.33-.21.74-.21 1.07 0l3.5 2.22c.29.18.46.5.46.84v3.83z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="m16.5 8.848-4.5-2.7-4.5 2.7M16.5 11.19V9M7.5 9v6.15l4.5-2.7 4.5 2.7M14.25 16.2 12 17.7l-2.25-1.5"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M11.75 9.43 8.5 15l-.63 1.09-2.47 4.22c-.18.32-.64.33-.84.02l-3.38-5.05a.516.516 0 0 1 0-.56l3.67-5.5c.09-.14.25-.22.42-.22h6.23l.25.43Z"
      :fill="color"
    ></path>
    <path
      d="m22.84 14.73-6.7-11.48a.473.473 0 0 0-.43-.25H8.87c-.39 0-.63.42-.43.75L11.5 9l.25.43 2.81 4.82c.2.33-.04.75-.43.75H8.5l-.63 1.09c.18-.32.64-.33.84-.02l3.14 4.71c.09.14.25.22.42.22h6.46c.17 0 .33-.08.42-.22l3.68-5.52c.1-.16.11-.36.01-.53Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M15.7 3H8.9c-.4 0-.7.4-.5.8L11.5 9H5.3c-.2 0-.4.1-.4.2l-3.7 5.5c-.1.2-.1.4 0 .6l3.4 5.1c.2.3.7.3.8 0l2.5-4.2c.2-.3.6-.3.8 0l3.1 4.7c.1.1.2.2.4.2h6.5c.2 0 .3-.1.4-.2l3.7-5.5c.1-.2.1-.4 0-.5L16.1 3.2c0-.1-.2-.2-.4-.2ZM8.5 15l3.2-5.6 2.8 4.8c.2.3 0 .8-.4.8H8.5Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M18.73 21.75h-6.46c-.42 0-.81-.21-1.04-.56l-2.92-4.38-2.26 3.87c-.22.38-.61.61-1.04.62-.42.04-.84-.19-1.08-.56L.56 15.68c-.28-.42-.28-.97 0-1.39l3.67-5.5c.23-.35.62-.56 1.04-.56h4.93L7.8 4.11c-.22-.39-.23-.87 0-1.25.22-.39.64-.63 1.08-.63h6.84c.44 0 .86.24 1.08.62l6.7 11.48c.24.42.23.92-.04 1.32l-3.68 5.52c-.24.37-.63.58-1.05.58Zm-6.33-1.5h6.2l3.52-5.28-6.55-11.22H9.31l3.5 6 2.4 4.12c.22.38.23.86 0 1.25-.22.39-.64.63-1.08.63H9.4l3 4.5ZM1.9 15l3.06 4.58 2.24-3.83 3.5-6H5.41L1.9 15Zm7.91-.75h3.89l-1.94-3.33-1.95 3.33Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M11.75 9.43 8.5 15l-.63 1.09-2.47 4.22c-.18.32-.64.33-.84.02l-3.38-5.05a.516.516 0 0 1 0-.56l3.67-5.5c.09-.14.25-.22.42-.22h6.23l.25.43Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M8.5 15h5.63c.39 0 .63-.42.43-.75l-2.81-4.82L11.5 9 8.44 3.75c-.2-.33.04-.75.43-.75h6.84c.18 0 .35.09.43.25l6.7 11.48c.1.17.09.37-.01.53l-3.68 5.52c-.09.14-.25.22-.42.22h-6.46c-.17 0-.33-.08-.42-.22l-3.14-4.71-.44-.67.23-.4Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
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
            default: 24,
        },
        color: {
            type: String,
            default: "currentColor",
        },
        strokeWidth: {
          type: String,
          default: "1.5",
        },
    },
})
</script>