<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M9.67 13.922c-.74 0-1.33.6-1.33 1.34 0 .74.6 1.33 1.33 1.33.74 0 1.34-.6 1.34-1.33 0-.74-.6-1.34-1.34-1.34Z"
      :fill="color"
    ></path>
    <path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm.93 7.8c0 .61-.26 1.15-.7 1.47-.28.2-.62.31-.98.31a2.1 2.1 0 0 1-.64-.11l-2.29-.76c-.01 0-.03-.01-.04-.02v4.56c0 1.54-1.26 2.8-2.8 2.8-1.54 0-2.8-1.26-2.8-2.8 0-1.54 1.26-2.8 2.8-2.8.49 0 .94.14 1.34.35V8.02c0-.61.26-1.15.7-1.47.45-.32 1.04-.4 1.62-.2l2.29.76c.86.29 1.51 1.19 1.51 2.09v.6h-.01Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9.62 17.299a2.12 2.12 0 1 0 0-4.24 2.12 2.12 0 0 0 0 4.24ZM11.738 15.18V7.77M13.128 6.768l2.34.78c.57.19 1.03.83 1.03 1.43v.62c0 .81-.63 1.26-1.39 1l-2.34-.78c-.57-.19-1.03-.83-1.03-1.43v-.62c0-.8.62-1.26 1.39-1Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M16.192 2h-8.37c-3.64 0-5.81 2.17-5.81 5.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81c0-3.64-2.17-5.81-5.81-5.81Z"
      :fill="color"
    ></path>
    <path
      d="m15.621 7.1-2.29-.76c-.58-.2-1.17-.12-1.62.2-.45.32-.7.86-.7 1.47v4.79c-.4-.22-.85-.35-1.34-.35-1.54 0-2.8 1.26-2.8 2.8 0 1.54 1.26 2.8 2.8 2.8 1.54 0 2.8-1.26 2.8-2.8V10.7c.01.01.03.01.04.02l2.29.76c.21.07.43.11.64.11.36 0 .7-.1.98-.31.45-.32.7-.86.7-1.47V9.2c0-.91-.64-1.81-1.5-2.1Zm-5.95 9.49c-.74 0-1.33-.6-1.33-1.33 0-.74.6-1.34 1.33-1.34.74 0 1.34.6 1.34 1.34 0 .73-.6 1.33-1.34 1.33Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9.62 17.3a2.12 2.12 0 1 0 0-4.24 2.12 2.12 0 0 0 0 4.24ZM11.74 15.18V7.77M13.13 6.77l2.34.78c.57.19 1.03.83 1.03 1.43v.62c0 .81-.63 1.26-1.39 1l-2.34-.78c-.57-.19-1.03-.83-1.03-1.43v-.62c0-.8.62-1.26 1.39-1Z"
      :stroke="color"
      strokeWidth="1.5"
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
      d="M9.62 18.049c-1.58 0-2.87-1.29-2.87-2.87s1.29-2.87 2.87-2.87 2.87 1.29 2.87 2.87-1.29 2.87-2.87 2.87Zm0-4.23c-.75 0-1.37.61-1.37 1.37 0 .75.61 1.37 1.37 1.37.75 0 1.37-.61 1.37-1.37 0-.76-.62-1.37-1.37-1.37Z"
      :fill="color"
    ></path>
    <path
      d="M11.742 15.93c-.41 0-.75-.34-.75-.75V7.77c0-.41.34-.75.75-.75s.75.34.75.75v7.41c0 .42-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M15.522 11.432c-.21 0-.43-.04-.65-.11l-2.34-.78c-.88-.29-1.54-1.21-1.54-2.14v-.62c0-.63.26-1.18.72-1.51.46-.33 1.06-.41 1.66-.21l2.34.78c.88.29 1.54 1.21 1.54 2.14v.62c0 .63-.26 1.18-.72 1.51-.29.21-.64.32-1.01.32Zm-2.81-3.98c-.05 0-.1.01-.13.03-.06.04-.1.15-.1.29v.62c0 .28.26.63.52.72l2.34.78c.13.04.25.04.31 0s.1-.15.1-.29v-.62c0-.28-.26-.63-.52-.72l-2.34-.78a.615.615 0 0 0-.18-.03Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <g opacity=".4" :stroke="color" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.62 17.299a2.12 2.12 0 1 0 0-4.24 2.12 2.12 0 0 0 0 4.24ZM11.742 15.18V7.77M13.132 6.768l2.34.78c.57.19 1.03.83 1.03 1.43v.62c0 .81-.63 1.26-1.39 1l-2.34-.78c-.57-.19-1.03-.83-1.03-1.43v-.62c0-.8.62-1.26 1.39-1Z"></path>
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