<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M21.97 5.5v4c0 1.761-1.299 3.223-3 3.465-.274.039-.5-.189-.5-.465v-.25c0-3.72-3.02-6.75-6.75-6.75h-.25c-.275 0-.503-.225-.464-.498A3.505 3.505 0 0 1 14.471 2h4c1.94 0 3.5 1.57 3.5 3.5Z"
      :fill="color"
    ></path>
    <path
      d="M11.72 7H6.97c-2.76 0-5 2.24-5 5v5c0 2.76 2.24 5 5 5h5c2.76 0 5-2.24 5-5v-4.75c0-2.9-2.35-5.25-5.25-5.25Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M21.97 5.85v3.3c0 2.75-1.1 3.85-3.85 3.85h-1.15v-.75c0-3.75-1.5-5.25-5.25-5.25h-.75V5.85c0-2.75 1.1-3.85 3.85-3.85h3.3c2.75 0 3.85 1.1 3.85 3.85Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M1.97 12.25C1.97 8.5 3.47 7 7.22 7h4.5c3.75 0 5.25 1.5 5.25 5.25v4.5c0 3.75-1.5 5.25-5.25 5.25h-4.5c-3.75 0-5.25-1.5-5.25-5.25v-.74"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M21.97 5.5v4c0 1.93-1.57 3.5-3.5 3.5h-1.5v-.75c0-2.9-2.35-5.25-5.25-5.25h-.75V5.5c0-1.93 1.57-3.5 3.5-3.5h4c1.94 0 3.5 1.57 3.5 3.5Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M11.72 7H6.97c-2.76 0-5 2.24-5 5v5c0 2.76 2.24 5 5 5h5c2.76 0 5-2.24 5-5v-4.75c0-2.9-2.35-5.25-5.25-5.25Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M16.97 12.25v4.5c0 3.75-1.5 5.25-5.25 5.25h-4.5c-3.75 0-5.25-1.5-5.25-5.25v-4.5C1.97 8.5 3.47 7 7.22 7h4.5c3.75 0 5.25 1.5 5.25 5.25z"
    ></path>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M21.97 5.85v3.3c0 2.75-1.1 3.85-3.85 3.85h-1.15v-.75c0-3.75-1.5-5.25-5.25-5.25h-.75V5.85c0-2.75 1.1-3.85 3.85-3.85h3.3c2.75 0 3.85 1.1 3.85 3.85z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M11.72 22.75h-4.5c-4.15 0-6-1.85-6-6v-4.5c0-4.15 1.85-6 6-6h4.5c4.15 0 6 1.85 6 6v4.5c0 4.15-1.85 6-6 6Zm-4.5-15c-3.32 0-4.5 1.18-4.5 4.5v4.5c0 3.32 1.18 4.5 4.5 4.5h4.5c3.32 0 4.5-1.18 4.5-4.5v-4.5c0-3.32-1.18-4.5-4.5-4.5h-4.5Z"
      :fill="color"
    ></path>
    <path
      d="M18.12 13.75h-1.15c-.41 0-.75-.34-.75-.75v-.75c0-3.32-1.18-4.5-4.5-4.5h-.75c-.41 0-.75-.34-.75-.75V5.85c0-3.18 1.42-4.6 4.6-4.6h3.3c3.18 0 4.6 1.42 4.6 4.6v3.3c0 3.18-1.42 4.6-4.6 4.6Zm-.4-1.5h.4c2.35 0 3.1-.75 3.1-3.1v-3.3c0-2.35-.75-3.1-3.1-3.1h-3.3c-2.35 0-3.1.75-3.1 3.1v.4c4.15 0 6 1.85 6 6Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M16.97 12.25v4.5c0 3.75-1.5 5.25-5.25 5.25h-4.5c-3.75 0-5.25-1.5-5.25-5.25v-4.5C1.97 8.5 3.47 7 7.22 7h4.5c3.75 0 5.25 1.5 5.25 5.25Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M21.97 5.85v3.3c0 2.75-1.1 3.85-3.85 3.85h-1.15v-.75c0-3.75-1.5-5.25-5.25-5.25h-.75V5.85c0-2.75 1.1-3.85 3.85-3.85h3.3c2.75 0 3.85 1.1 3.85 3.85Z"
      :stroke="color"
      strokeWidth="1.5"
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
            default: "currentColor",
        },
    },
})
</script>