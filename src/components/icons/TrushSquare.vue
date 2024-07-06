<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-.43 13.76c-.06.85-.13 1.91-2.05 1.91h-3.42c-1.91 0-1.99-1.06-2.05-1.91l-.31-3.96a.94.94 0 0 1 .24-.7.9.9 0 0 1 .67-.29h6.32c.25 0 .5.11.67.29.17.19.26.44.24.69l-.31 3.97Zm1.04-5.94h-.06c-1.04-.1-1.99-.17-2.9-.21a40.81 40.81 0 0 0-3.67-.03c-.6.03-1.21.07-1.81.13l-1.09.11H7.2c-.35 0-.65-.26-.68-.62-.04-.37.24-.71.61-.74l1.09-.11c.43-.04.85-.07 1.28-.09l.08-.47c.08-.5.23-1.46 1.73-1.46h1.39c1.51 0 1.66.99 1.73 1.47l.08.48c.75.04 1.52.1 2.36.18.38.04.65.37.62.75-.04.35-.34.61-.69.61Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M17.9 9.053a65.54 65.54 0 0 0-6.57-.33c-1.3 0-2.6.07-3.89.2l-1.34.13M9.709 8.391l.14-.86c.1-.62.18-1.09 1.29-1.09h1.72c1.11 0 1.19.49 1.29 1.09l.14.85M16.49 9.133l-.43 6.6c-.07 1.03-.13 1.83-1.96 1.83H9.89c-1.83 0-1.89-.8-1.96-1.83l-.43-6.6"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      :fill="color"
    ></path>
    <path
      d="M16.86 8.458c-.84-.08-1.61-.13-2.36-.18l-.08-.48c-.07-.48-.22-1.47-1.73-1.47H11.3c-1.49 0-1.65.95-1.73 1.46l-.08.47c-.43.03-.85.05-1.28.09l-1.09.11c-.38.04-.65.37-.61.75.04.35.33.62.68.62h.07l1.08-.11c.6-.05 1.21-.1 1.81-.13 1.22-.05 2.44-.03 3.67.03.91.04 1.86.11 2.9.21h.06c.35 0 .65-.27.68-.62a.659.659 0 0 0-.6-.75ZM15.83 11.099a.9.9 0 0 0-.67-.29H8.84c-.25 0-.5.11-.67.29a.93.93 0 0 0-.24.69l.31 3.96c.06.85.13 1.91 2.05 1.91h3.42c1.92 0 1.99-1.06 2.05-1.91l.31-3.96a.93.93 0 0 0-.24-.69Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M17.9 9.05a65.54 65.54 0 0 0-6.57-.33c-1.3 0-2.6.07-3.89.2l-1.34.13M9.71 8.39l.14-.86c.1-.62.18-1.09 1.29-1.09h1.72c1.11 0 1.19.49 1.29 1.09l.14.85M16.49 9.13l-.43 6.6c-.07 1.03-.13 1.83-1.96 1.83H9.89c-1.83 0-1.89-.8-1.96-1.83l-.43-6.6"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      :fill="color"
    ></path>
    <path
      d="M17.899 9.799h-.07c-3.46-.34-6.9-.48-10.31-.13l-1.34.13a.745.745 0 0 1-.82-.67.75.75 0 0 1 .67-.82l1.34-.13c3.51-.35 7.05-.22 10.61.13.41.04.71.41.67.82-.04.38-.37.67-.75.67Z"
      :fill="color"
    ></path>
    <path
      d="M14.29 9.14a.75.75 0 0 1-.74-.62l-.14-.85c-.02-.14-.06-.36-.1-.41 0 0-.1-.06-.46-.06h-1.72c-.37 0-.47.06-.47.06-.02.04-.06.26-.08.4l-.14.86a.76.76 0 0 1-.86.62.76.76 0 0 1-.62-.86l.14-.86c.11-.64.29-1.71 2.03-1.71h1.72c1.75 0 1.93 1.12 2.03 1.72l.14.85c.07.41-.21.8-.61.86h-.12Z"
      :fill="color"
    ></path>
    <path
      d="M14.1 18.31H9.89c-2.53 0-2.64-1.52-2.71-2.53l-.43-6.61a.75.75 0 1 1 1.5-.1l.43 6.6c.07.98.08 1.13 1.21 1.13h4.21c1.13 0 1.14-.15 1.21-1.13l.43-6.6c.03-.41.37-.73.8-.7.41.03.73.38.7.8l-.43 6.6c-.07 1.02-.17 2.54-2.71 2.54Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <g opacity=".4" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17.9 9.053a65.54 65.54 0 0 0-6.57-.33c-1.3 0-2.6.07-3.89.2l-1.34.13M9.709 8.391l.14-.86c.1-.62.18-1.09 1.29-1.09h1.72c1.11 0 1.19.49 1.29 1.09l.14.85M16.49 9.133l-.43 6.6c-.07 1.03-.13 1.83-1.96 1.83H9.89c-1.83 0-1.89-.8-1.96-1.83l-.43-6.6"></path>
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