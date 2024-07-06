<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      fillRule="evenodd"
      d="M20.8 2.241l-8 1.6c-.47.09-.8.5-.8.98v5.18c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-6.78c0-.63-.58-1.1-1.2-.98zM20.8 21.76l-8-1.6c-.47-.09-.8-.5-.8-.98V14c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v6.78c0 .63-.58 1.1-1.2.98zM8.79 4.56l-6 1.27c-.46.1-.79.51-.79.98V10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5.53c0-.63-.59-1.11-1.21-.97zM8.79 19.44l-6-1.27c-.46-.1-.79-.51-.79-.98V14c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v4.47c0 .63-.59 1.11-1.21.97z"
      clipRule="evenodd"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M22 6.03V2L12 4v7h10"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      clipRule="evenodd"
      d="m22 22-10-2v-7h10v9ZM10 4.3 2 6v5h8V4.3ZM10 19.7 2 18v-5h8v6.7Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="m20.8 2.241-8 1.6c-.47.09-.8.5-.8.98v5.18c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-6.78c0-.63-.58-1.1-1.2-.98Z"
      :fill="color"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m20.8 21.76-8-1.6c-.47-.09-.8-.5-.8-.98V14c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v6.78c0 .63-.58 1.1-1.2.98ZM8.79 4.56l-6 1.28c-.46.1-.79.51-.79.98V10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5.53c0-.63-.59-1.11-1.21-.97Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="m8.79 19.44-6-1.28c-.46-.1-.79-.51-.79-.98V14c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v4.47c0 .63-.59 1.11-1.21.97Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      clipRule="evenodd"
      d="M22 2 12 4v7h10V2ZM22 22l-10-2v-7h10v9ZM10 4.3 2 6v5h8V4.3ZM10 19.7 2 18v-5h8v6.7Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M22 11.75H12c-.41 0-.75-.34-.75-.75V4c0-.36.25-.67.6-.74l10-2c.22-.04.45.01.62.16.17.14.27.36.27.58v9a.74.74 0 0 1-.74.75Zm-9.25-1.5h8.5V2.92l-8.5 1.7v5.63ZM22 22.75c-.05 0-.1 0-.15-.01l-10-2a.75.75 0 0 1-.6-.74v-7c0-.41.34-.75.75-.75h10c.41 0 .75.34.75.75v9c0 .22-.1.44-.27.58-.14.11-.31.17-.48.17Zm-9.25-3.37 8.5 1.7v-7.33h-8.5v5.63ZM10 11.748H2c-.41 0-.75-.34-.75-.75v-5c0-.35.25-.66.59-.73l8-1.7c.22-.05.45.01.63.15.18.14.28.36.28.58v6.7c0 .41-.34.75-.75.75Zm-7.25-1.5h6.5v-5.02l-6.5 1.38v3.64ZM10 20.45c-.05 0-.1-.01-.16-.02l-8-1.7a.74.74 0 0 1-.59-.73v-5c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v6.7c0 .23-.1.44-.28.58-.13.11-.3.17-.47.17Zm-7.25-3.06 6.5 1.38v-5.02h-6.5v3.64Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      opacity=".4"
      clipRule="evenodd"
      d="M22 2 12 4v7h10V2Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    ></path>
    <path
      clipRule="evenodd"
      d="m22 22-10-2v-7h10v9ZM10 4.3 2 6v5h8V4.3Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    ></path>
    <path
      opacity=".4"
      clipRule="evenodd"
      d="M10 19.7 2 18v-5h8v6.7Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
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