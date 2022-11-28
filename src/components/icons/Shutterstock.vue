<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM11 7.5c0 .28-.22.5-.5.5H9c-.55 0-1 .45-1 1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V9c0-2.21 1.79-4 4-4h1.5c.28 0 .5.22.5.5v2zm8 7.5c0 2.21-1.79 4-4 4h-1.5c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5H15c.55 0 1-.45 1-1v-1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V15z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M11 5v3H9c-.55 0-1 .45-1 1v2H5V9c0-2.21 1.79-4 4-4h2ZM13 19v-3h2c.55 0 1-.45 1-1v-2h3v2c0 2.21-1.79 4-4 4h-2Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      :stroke="color"
      stroke-width="1.5"
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
      d="M11 5.5v2c0 .28-.22.5-.5.5H9c-.55 0-1 .45-1 1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V9c0-2.21 1.79-4 4-4h1.5c.28 0 .5.22.5.5ZM13 18.5v-2c0-.28.22-.5.5-.5H15c.55 0 1-.45 1-1v-1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V15c0 2.21-1.79 4-4 4h-1.5c-.28 0-.5-.22-.5-.5Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M11 5v3H9c-.6 0-1 .4-1 1v2H5V9c0-2.2 1.8-4 4-4h2ZM13 19v-3h2c.6 0 1-.4 1-1v-2h3v2c0 2.2-1.8 4-4 4h-2Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M8 11.75H5c-.41 0-.75-.34-.75-.75V9c0-2.62 2.13-4.75 4.75-4.75h2c.41 0 .75.34.75.75v3c0 .41-.34.75-.75.75H9c-.14 0-.25.11-.25.25v2c0 .41-.34.75-.75.75Zm-2.25-1.5h1.5V9c0-.96.79-1.75 1.75-1.75h1.25v-1.5H9C7.21 5.75 5.75 7.21 5.75 9v1.25ZM15 19.75h-2c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75h2c.14 0 .25-.11.25-.25v-2c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75v2c0 2.62-2.13 4.75-4.75 4.75Zm-1.25-1.5H15c1.79 0 3.25-1.46 3.25-3.25v-1.25h-1.5V15c0 .96-.79 1.75-1.75 1.75h-1.25v1.5Z"
      :fill="color"
    ></path>
    <path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      opacity=".4"
      d="M11 5v3H9c-.55 0-1 .45-1 1v2H5V9c0-2.21 1.79-4 4-4h2ZM13 19v-3h2c.55 0 1-.45 1-1v-2h3v2c0 2.21-1.79 4-4 4h-2Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
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
    },
})
</script>