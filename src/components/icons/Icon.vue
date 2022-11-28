<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M20.26 5.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5zM3.76 21.75c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5zM6.03 16.4c-.25 0-.5-.13-.64-.36A7.754 7.754 0 014.25 12c0-4.27 3.48-7.75 7.75-7.75 1.41 0 2.79.38 3.99 1.1.35.21.47.67.26 1.03-.21.35-.67.47-1.03.26a6.26 6.26 0 00-3.21-.89c-3.45 0-6.25 2.8-6.25 6.25 0 1.15.32 2.28.92 3.26.22.35.11.81-.25 1.03-.13.08-.27.11-.4.11zM12 19.75c-1.44 0-2.84-.4-4.05-1.14a.76.76 0 01-.25-1.03.76.76 0 011.03-.25A6.252 6.252 0 0018.25 12c0-1.15-.32-2.28-.92-3.26a.742.742 0 01.25-1.03.75.75 0 011.03.25 7.789 7.789 0 011.14 4.05c0 4.26-3.48 7.74-7.75 7.74z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      opacity=".4"
      d="M20.2 3.8h.1M3.7 20.2h.1"
      :stroke="color"
      stroke-width="3"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M15.6 6a6.995 6.995 0 0 0-9.57 9.65M17.97 8.352a6.963 6.963 0 0 1 1.03 3.65c0 1.24-.32 2.4-.89 3.41M8.34 17.969a7.025 7.025 0 0 0 6.61.38"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M20.26 5.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5ZM3.76 21.75c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5Z"
      :fill="color"
    ></path>
    <path
      d="M6.03 16.4c-.25 0-.5-.13-.64-.36A7.754 7.754 0 0 1 4.25 12c0-4.27 3.48-7.75 7.75-7.75 1.41 0 2.79.38 3.99 1.1.35.21.47.67.26 1.03-.21.35-.67.47-1.03.26a6.26 6.26 0 0 0-3.21-.89c-3.45 0-6.25 2.8-6.25 6.25 0 1.15.32 2.28.92 3.26.22.35.11.81-.25 1.03-.13.08-.27.11-.4.11ZM12 19.75c-1.44 0-2.84-.4-4.05-1.14a.76.76 0 0 1-.25-1.03.76.76 0 0 1 1.03-.25A6.252 6.252 0 0 0 18.25 12c0-1.15-.32-2.28-.92-3.26a.742.742 0 0 1 .25-1.03.75.75 0 0 1 1.03.25 7.789 7.789 0 0 1 1.14 4.05c0 4.26-3.48 7.74-7.75 7.74Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M20.2 3.8h.1M3.7 20.2h.1"
      :stroke="color"
      stroke-width="3"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M15.6 6c-1.1-.6-2.3-1-3.6-1-3.9 0-7 3.1-7 7 0 1.3.4 2.6 1 3.7M8.3 18c1.1.7 2.3 1 3.7 1 3.9 0 7-3.1 7-7 0-1.3-.4-2.6-1-3.7"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M20.26 5.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5ZM3.76 21.75c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5ZM6.03 16.4c-.25 0-.5-.13-.64-.36A7.754 7.754 0 0 1 4.25 12c0-4.27 3.48-7.75 7.75-7.75 1.41 0 2.79.38 3.99 1.1.35.21.47.67.26 1.03-.21.35-.67.47-1.03.26a6.26 6.26 0 0 0-3.21-.89c-3.45 0-6.25 2.8-6.25 6.25 0 1.15.32 2.28.92 3.26.22.35.11.81-.25 1.03-.13.08-.27.11-.4.11ZM12 19.75c-1.44 0-2.84-.4-4.05-1.14a.76.76 0 0 1-.25-1.03.76.76 0 0 1 1.03-.25A6.252 6.252 0 0 0 18.25 12c0-1.15-.32-2.28-.92-3.26a.742.742 0 0 1 .25-1.03.75.75 0 0 1 1.03.25 7.789 7.789 0 0 1 1.14 4.05c0 4.26-3.48 7.74-7.75 7.74Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M15.6 6a6.995 6.995 0 0 0-9.57 9.65M8.34 17.972c1.07.65 2.32 1.03 3.66 1.03a6.995 6.995 0 0 0 5.97-10.65"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M20.2 3.8h.1M3.7 20.2h.1"
      :stroke="color"
      stroke-width="3"
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
    },
})
</script>