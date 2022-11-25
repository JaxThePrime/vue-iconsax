<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M10.87 14l1.93 3.33-1.92 3.33H7l-1.91-3.31L7.03 14h3.84z"
      opacity=".13"
    ></path>
    <path
      :fill="color"
      d="M10.54 14.078H7.12c-.18 0-.34.1-.43.25l-1.71 2.96c-.09.15-.09.35 0 .5l1.71 2.96c.09.15.25.25.43.25h3.42c.18 0 .34-.1.43-.25l1.71-2.96c.09-.15.09-.35 0-.5l-1.71-2.96a.484.484 0 00-.43-.25z"
    ></path>
    <path
      :fill="color"
      d="M22.24 11.738c.09.16.09.36 0 .52l-4.93 8.53a.414.414 0 11-.72-.41l3.29-5.7c.09-.16.09-.36 0-.52l-4.4-7.62a.513.513 0 00-.45-.26H6.22c-.19 0-.35.1-.45.26l-3.27 5.68a.45.45 0 01-.78-.45l4.92-8.52c.08-.16.26-.26.45-.26h9.79c.19 0 .35.1.45.26l4.91 8.49z"
    ></path>
    <path
      :fill="color"
      d="M18.089 14.682l-3.5 6.06c-.09.16-.26.26-.45.26h-.6a.52.52 0 01-.45-.78l1.4-2.42c.09-.16.09-.36 0-.52l-2.6-4.5a.558.558 0 00-.47-.26h-5.2c-.19 0-.35.1-.45.26l-1.4 2.42c-.2.35-.7.35-.9 0l-.3-.51a.534.534 0 010-.52l3.49-6.06c.09-.16.26-.26.45-.26h6.99c.19 0 .35.1.45.26l3.5 6.06c.12.15.12.36.04.51z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M4.51 7.65 2 12l5 8.66h10L22 12l-5-8.66H7l-.37.64"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M10.87 14H7.03L5.1 17.33l1.93 3.33h3.84l1.93-3.33L10.87 14Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    ></path>
    <path
      d="M14.34 8H7.03l-3.65 6.33 3.65 6.33h7.31L18 14.33 14.34 8Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path opacity=".4" d="M17 3.34H7L2 12l5 8.66h10L22 12l-5-8.66Z" :fill="color"></path>
    <path d="M10.87 14H7.03L5.1 17.33l1.93 3.33h3.84l1.93-3.33L10.87 14Z" :fill="color"></path>
    <path
      opacity=".6"
      d="M14.34 8H7.03l-3.65 6.33 3.65 6.33h7.31L18 14.33 14.34 8Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M17 3.3H7L2 12l5 8.7h10l5-8.7-5-8.7Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M10.9 14H7l-1.9 3.3L7 20.7h3.9l1.9-3.4-1.9-3.3Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M14.3 8H7l-3.6 6.3L7 20.7h7.3l3.7-6.4L14.3 8Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M17.43 21.41H6.56L1.13 12l5.43-9.41h10.87L22.86 12l-5.43 9.41Zm-10-1.5h9.13L21.13 12l-4.57-7.91H7.43L2.87 12l4.56 7.91Z"
      :fill="color"
    ></path>
    <path
      d="M11.31 21.41H6.6l-2.36-4.08 2.36-4.08h4.71l2.36 4.08-2.36 4.08Zm-3.85-1.5h2.98l1.49-2.58-1.49-2.58H7.46l-1.49 2.58 1.49 2.58Z"
      :fill="color"
    ></path>
    <path
      d="M14.78 21.41H6.6l-4.09-7.08L6.6 7.25h8.18l4.09 7.08-4.09 7.08Zm-7.31-1.5h6.44l3.22-5.58-3.22-5.58H7.47l-3.22 5.58 3.22 5.58Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M17 3.34H7L2 12l5 8.66h10L22 12l-5-8.66Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      opacity=".4"
      d="M10.87 14H7.03L5.1 17.33l1.93 3.33h3.84l1.93-3.33L10.87 14Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      opacity=".4"
      d="M14.34 8H7.03l-3.65 6.33 3.65 6.33h7.31L18 14.33 14.34 8Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
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
            default: "currentColor",
        },
    },
})
</script>