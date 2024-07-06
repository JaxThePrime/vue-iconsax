<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M17 3.5H7c-3 0-5 1.5-5 5v7c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-7c0-3.5-2-5-5-5Zm-13.25 5c0-1.79 1.46-3.25 3.25-3.25h1.5c.41 0 .75.34.75.75s-.34.75-.75.75H7c-.96 0-1.75.79-1.75 1.75V10c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.5ZM8.5 18.75H7c-1.79 0-3.25-1.46-3.25-3.25V14c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .96.79 1.75 1.75 1.75h1.5c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Zm8.25.5c0 1.79-1.46 3.25-3.25 3.25h-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c.96 0 1.75-.79 1.75-1.75V14c0-.41.34-.75.75-.75s.75.34.75.75v1.5Zm0-5.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.5c0-.96-.79-1.75-1.75-1.75h-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c1.79 0 3.25 1.46 3.25 3.25V10Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-2.97"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3M8.5 6H7a2.5 2.5 0 0 0-2.5 2.5V10M15.5 6H17a2.5 2.5 0 0 1 2.5 2.5V10M8.5 18H7a2.5 2.5 0 0 1-2.5-2.5V14M15.5 18H17a2.5 2.5 0 0 0 2.5-2.5V14"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
      :fill="color"
    ></path>
    <path
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.5 10.75c-.41 0-.75-.34-.75-.75V8.5c0-1.79 1.46-3.25 3.25-3.25h1.5c.41 0 .75.34.75.75s-.34.75-.75.75H7c-.96 0-1.75.79-1.75 1.75V10c0 .41-.34.75-.75.75ZM19.5 10.75c-.41 0-.75-.34-.75-.75V8.5c0-.96-.79-1.75-1.75-1.75h-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c1.79 0 3.25 1.46 3.25 3.25V10c0 .41-.34.75-.75.75ZM8.5 18.75H7c-1.79 0-3.25-1.46-3.25-3.25V14c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .96.79 1.75 1.75 1.75h1.5c.41 0 .75.34.75.75s-.34.75-.75.75ZM17 18.75h-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c.96 0 1.75-.79 1.75-1.75V14c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 1.79-1.46 3.25-3.25 3.25Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.5 6H7a2.5 2.5 0 0 0-2.5 2.5V10M15.5 6H17a2.5 2.5 0 0 1 2.5 2.5V10M8.5 18H7a2.5 2.5 0 0 1-2.5-2.5V14M15.5 18H17a2.5 2.5 0 0 0 2.5-2.5V14"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M17 21.25H7c-3.65 0-5.75-2.1-5.75-5.75v-7c0-3.65 2.1-5.75 5.75-5.75h10c3.65 0 5.75 2.1 5.75 5.75v7c0 3.65-2.1 5.75-5.75 5.75Zm-10-17c-2.86 0-4.25 1.39-4.25 4.25v7c0 2.86 1.39 4.25 4.25 4.25h10c2.86 0 4.25-1.39 4.25-4.25v-7c0-2.86-1.39-4.25-4.25-4.25H7Z"
      :fill="color"
    ></path>
    <path
      d="M12 15.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25S13.24 9.75 12 9.75ZM4.5 10.75c-.41 0-.75-.34-.75-.75V8.5c0-1.79 1.46-3.25 3.25-3.25h1.5c.41 0 .75.34.75.75s-.34.75-.75.75H7c-.96 0-1.75.79-1.75 1.75V10c0 .41-.34.75-.75.75ZM19.5 10.75c-.41 0-.75-.34-.75-.75V8.5c0-.96-.79-1.75-1.75-1.75h-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c1.79 0 3.25 1.46 3.25 3.25V10c0 .41-.34.75-.75.75ZM8.5 18.75H7c-1.79 0-3.25-1.46-3.25-3.25V14c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .96.79 1.75 1.75 1.75h1.5c.41 0 .75.34.75.75s-.34.75-.75.75ZM17 18.75h-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c.96 0 1.75-.79 1.75-1.75V14c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 1.79-1.46 3.25-3.25 3.25Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M8.5 6H7a2.5 2.5 0 0 0-2.5 2.5V10M15.5 6H17a2.5 2.5 0 0 1 2.5 2.5V10M8.5 18H7a2.5 2.5 0 0 1-2.5-2.5V14M15.5 18H17a2.5 2.5 0 0 0 2.5-2.5V14"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
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
        strokeWidth: {
          type: String,
          default: "1.5",
        },
    },
})
</script>