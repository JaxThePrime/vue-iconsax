<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path :fill="color" d="M9.5 8.75H8.25v2.5H9.5a1.25 1.25 0 000-2.5z"></path>
    <path
      :fill="color"
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM9.5 12.75H8.25V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8c0-.41.34-.75.75-.75h2c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75zm5.75 0c1.1 0 2 .9 2 2s-.9 2-2 2H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25c.28 0 .5-.22.5-.5s-.22-.5-.5-.5c-1.1 0-2-.9-2-2s.9-2 2-2h1.25c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25c-.28 0-.5.22-.5.5s.22.5.5.5z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M7.5 16V8h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2M16.5 11h-1.25a1.25 1.25 0 0 0 0 2.5 1.25 1.25 0 0 1 0 2.5H14"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      :fill="color"
    ></path>
    <path
      d="M7.5 16.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75h2c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75H8.25V16c0 .41-.34.75-.75.75Zm.75-5.5H9.5a1.25 1.25 0 0 0 0-2.5H8.25v2.5ZM15.25 16.75H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25c.28 0 .5-.22.5-.5s-.22-.5-.5-.5c-1.1 0-2-.9-2-2s.9-2 2-2h1.25c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25c-.28 0-.5.22-.5.5s.22.5.5.5c1.1 0 2 .9 2 2s-.9 2-2 2Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M7.5 16V8h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2M16.5 11h-1.3c-.7 0-1.2.6-1.2 1.2 0 .7.6 1.2 1.2 1.2.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2H14"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      :fill="color"
    ></path>
    <path
      d="M7.5 16.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75h2c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75H8.25V16c0 .41-.34.75-.75.75Zm.75-5.5H9.5a1.25 1.25 0 0 0 0-2.5H8.25v2.5ZM15.25 16.75H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25c.28 0 .5-.22.5-.5s-.22-.5-.5-.5c-1.1 0-2-.9-2-2s.9-2 2-2h1.25c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25c-.28 0-.5.22-.5.5s.22.5.5.5c1.1 0 2 .9 2 2s-.9 2-2 2Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M7.5 16V8h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2M16.5 11h-1.25a1.25 1.25 0 0 0 0 2.5 1.25 1.25 0 0 1 0 2.5H14"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
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