<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M19.402 10.53c.52-.1.88.49.56.91l-6.95 8.85c-.35.45-1.07.16-1.01-.4l.7-7.6c.02-.25.21-.46.46-.51l6.24-1.25zM21.64 7.691c.22.24.1.63-.21.7l-8.44 1.69c-.55.11-.91-.56-.51-.96l5.02-5.02c.23-.23.6-.22.82.01l3.32 3.58zM14.691 3.191c.47.06.66.63.33.97l-3.56 3.56c-.21.21-.55.22-.78.02l-5.34-4.75c-.42-.37-.1-1.06.45-.99l8.9 1.19zM10.72 10.073c.27.24.4.59.38.94l-.86 10.46c-.05.6-.88.72-1.1.16L2.29 3.963c-.22-.56.46-1.03.91-.63l7.52 6.74z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="m6.19 12.48 3.16 7.91c.35.89 1.13 1 1.71.25L20.44 8.7c.3-.38.27-.98-.08-1.32l-3.13-3.13c-.13-.13-.39-.26-.57-.28L3.7 2.23c-.93-.12-1.41.49-1.06 1.36L4.4 8"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="m10 20.998 1-11-7.99-7.1M17 4l-6 6 9.04-1.81"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M20.66 8.04c0 .23-.06.47-.21.66l-9.38 11.94c-.34.43-.74.58-1.08.46L10 21l1-11 9.04-1.81.62-.15Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="m20.66 8.04-.62.15L11 10l5.95-5.95c.12.05.22.12.29.19l3.13 3.13c.18.18.28.42.29.67Z"
      :fill="color"
    ></path>
    <path
      d="M16.95 4.05 11 10 3.01 2.9l-.35-.34v-.01c.2-.26.56-.39 1.04-.32l12.96 1.73c.09.01.19.04.29.09Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="m11 9.999-1 11-.01.1c-.25-.09-.48-.33-.63-.71l-6.72-16.8c-.17-.42-.15-.78.02-1.03l.35.34 7.99 7.1Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="m2.6 3.6 6.7 16.8c.4.9 1.1 1 1.7.2l9.4-11.9c.3-.4.3-1-.1-1.3l-3.1-3.1c-.1-.2-.4-.3-.5-.3l-13-1.7c-.9-.2-1.4.4-1.1 1.3Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="m10 21 1-11-8-7.1M17 4l-6 6 9-1.8"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M10.23 21.88c-.07 0-.14 0-.21-.02-.59-.08-1.09-.52-1.36-1.2L1.94 3.86c-.27-.67-.21-1.32.15-1.79.37-.47.98-.69 1.7-.59l12.97 1.73c.35.05.76.25 1.01.5l3.13 3.13c.61.62.68 1.63.14 2.32L11.66 21.1c-.4.51-.91.78-1.43.78ZM3.46 2.96c-.12 0-.18.03-.19.04 0 .01-.02.12.06.31l6.72 16.8c.08.2.17.27.18.27.01 0 .11-.04.24-.21l9.38-11.94c.07-.08.06-.26-.02-.33L16.7 4.77a.523.523 0 0 0-.15-.07L3.6 2.97c-.05-.01-.1-.01-.14-.01Z"
      :fill="color"
    ></path>
    <path
      d="M10 21.749h-.07a.75.75 0 0 1-.68-.81l.97-10.62-7.71-6.85a.747.747 0 0 1-.06-1.06c.28-.31.75-.34 1.06-.06l7.99 7.1c.18.16.27.39.25.63l-1 11c-.04.38-.37.67-.75.67Z"
      :fill="color"
    ></path>
    <path
      d="M11 10.751c-.27 0-.53-.15-.66-.4-.16-.29-.1-.65.13-.88l6-6c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-4.25 4.25 6.61-1.32c.41-.08.8.18.88.59.08.41-.18.8-.59.88l-9.04 1.81c-.04.01-.09.01-.14.01Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="m2.64 3.588 6.72 16.8c.35.89 1.13 1 1.71.25l9.38-11.94c.3-.38.27-.98-.08-1.32l-3.13-3.13c-.13-.13-.39-.26-.57-.28L3.7 2.228c-.94-.13-1.41.48-1.06 1.36Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <g
      opacity=".4"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m10 20.998 1-11-7.99-7.1M17 4l-6 6 9.04-1.81"></path>
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
    },
})
</script>