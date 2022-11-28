<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M14 13.25h-4c-.41 0-.75.34-.75.75s.34.75.75.75h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM10 10.75h2c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2c-.41 0-.75.34-.75.75s.34.75.75.75z"
    ></path>
    <path
      :fill="color"
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM18 15c0 2-1 3-3 3H9c-2 0-3-1-3-3V9c0-2 1-3 3-3h4c2 0 3 1 3 3v1c0 .55.45 1 1 1s1 .45 1 1v3z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M6 9v6c0 2 1 3 3 3h6c2 0 3-1 3-3v-3c0-.55-.45-1-1-1s-1-.45-1-1V9c0-2-1-3-3-3H9C7 6 6 7 6 9Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M10 10h2M10 14h4"
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
      d="M17 11c-.55 0-1-.45-1-1V9c0-2-1-3-3-3H9C7 6 6 7 6 9v6c0 2 1 3 3 3h6c2 0 3-1 3-3v-3c0-.55-.45-1-1-1Zm-7-1.75h2c.41 0 .75.34.75.75s-.34.75-.75.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75Zm4 5.5h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M6 9v6c0 2 1 3 3 3h6c2 0 3-1 3-3v-3c0-.6-.4-1-1-1s-1-.4-1-1V9c0-2-1-3-3-3H9C7 6 6 7 6 9Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M10 10h2M10 14h4"
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
      d="M15 18.75H9c-2.42 0-3.75-1.33-3.75-3.75V9c0-2.42 1.33-3.75 3.75-3.75h4c2.42 0 3.75 1.33 3.75 3.75v1c0 .14.11.25.25.25.96 0 1.75.79 1.75 1.75v3c0 2.42-1.33 3.75-3.75 3.75Zm-6-12c-1.58 0-2.25.67-2.25 2.25v6c0 1.58.67 2.25 2.25 2.25h6c1.58 0 2.25-.67 2.25-2.25v-3c0-.14-.11-.25-.25-.25-.96 0-1.75-.79-1.75-1.75V9c0-1.58-.67-2.25-2.25-2.25H9Z"
      :fill="color"
    ></path>
    <path
      d="M12 10.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM14 14.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
      d="M6 9v6c0 2 1 3 3 3h6c2 0 3-1 3-3v-3c0-.55-.45-1-1-1s-1-.45-1-1V9c0-2-1-3-3-3H9C7 6 6 7 6 9Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
    ></path>
    <path
      opacity=".4"
      d="M10 10h2M10 14h4"
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