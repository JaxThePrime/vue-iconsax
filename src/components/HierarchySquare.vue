<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM9.85 16.45c0 1.13-.92 2.05-2.05 2.05s-2.05-.92-2.05-2.05c0-.87.54-1.6 1.3-1.9v-4.29A2.202 2.202 0 0 1 5.6 8.2c0-1.21.99-2.2 2.2-2.2 1.21 0 2.2.99 2.2 2.2 0 .95-.61 1.75-1.45 2.06v4.29c.76.3 1.3 1.04 1.3 1.9Zm6.9 2.05c-1.13 0-2.05-.92-2.05-2.05 0-.87.54-1.6 1.3-1.9v-5.8c0-.14-.11-.25-.25-.25h-1.13l.21.17c.32.27.36.74.1 1.06a.759.759 0 0 1-1.06.1l-1.8-1.5a.777.777 0 0 1-.27-.58c0-.22.1-.43.27-.58l1.8-1.5c.32-.26.79-.22 1.06.1s.22.79-.1 1.06l-.21.17h1.13c.96 0 1.75.79 1.75 1.75v5.8c.76.3 1.3 1.04 1.3 1.9 0 1.13-.92 2.05-2.05 2.05Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M2 13.02V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M16.45 14.4V8.5c0-.55-.45-1-1-1h-2.9"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m14.05 6-1.8 1.5 1.8 1.5M7.55 10.2v4.2M7.7 9.9a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9ZM7.55 17.998a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM16.45 17.998a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"
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
      d="M8.55 14.55v-4.29C9.39 9.95 10 9.15 10 8.2 10 6.99 9.01 6 7.8 6c-1.21 0-2.2.99-2.2 2.2 0 .95.61 1.75 1.45 2.06v4.29c-.76.3-1.3 1.04-1.3 1.9 0 1.13.92 2.05 2.05 2.05s2.05-.92 2.05-2.05c0-.86-.54-1.6-1.3-1.9ZM17.499 14.55v-5.8c0-.96-.79-1.75-1.75-1.75h-1.13l.21-.17c.32-.27.36-.74.1-1.06a.758.758 0 0 0-1.06-.1l-1.8 1.5a.761.761 0 0 0 0 1.16l1.8 1.5c.14.12.31.17.48.17a.75.75 0 0 0 .48-1.33l-.21-.17h1.13c.14 0 .25.11.25.25v5.8c-.76.3-1.3 1.04-1.3 1.9 0 1.13.92 2.05 2.05 2.05s2.05-.92 2.05-2.05c0-.86-.54-1.6-1.3-1.9Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M16.45 14.4V8.5c0-.55-.45-1-1-1h-2.9"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m14.05 6-1.8 1.5 1.8 1.5M7.55 10.2v4.2M7.7 9.9a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9ZM7.55 18a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM16.45 18a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M16.45 15.15c-.41 0-.75-.34-.75-.75V8.5c0-.14-.11-.25-.25-.25h-2.9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.9c.96 0 1.75.79 1.75 1.75v5.9c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M14.05 9.75c-.17 0-.34-.06-.48-.17l-1.8-1.5a.761.761 0 0 1 0-1.16l1.8-1.5c.32-.26.79-.22 1.06.1s.22.79-.1 1.06l-1.11.92 1.11.92c.32.27.36.74.1 1.06-.15.18-.37.27-.58.27ZM7.55 15.15c-.41 0-.75-.34-.75-.75v-4.2c0-.41.34-.75.75-.75s.75.34.75.75v4.2c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M7.7 10.65c-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7Zm0-3.9c-.66 0-1.2.54-1.2 1.2 0 .66.54 1.2 1.2 1.2.66 0 1.2-.54 1.2-1.2 0-.66-.54-1.2-1.2-1.2ZM7.55 18.748c-1.41 0-2.55-1.14-2.55-2.55s1.14-2.55 2.55-2.55 2.55 1.14 2.55 2.55-1.14 2.55-2.55 2.55Zm0-3.6a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1ZM16.45 18.748c-1.41 0-2.55-1.14-2.55-2.55s1.14-2.55 2.55-2.55 2.55 1.14 2.55 2.55-1.14 2.55-2.55 2.55Zm0-3.6a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1Z"
      :fill="color"
    ></path>
    <path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <g opacity=".4" :stroke="color" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.45 14.4V8.5c0-.55-.45-1-1-1h-2.9"></path>
      <path d="m14.05 6-1.8 1.5 1.8 1.5M7.55 10.2v4.2M7.7 9.9a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9ZM7.55 17.998a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM16.45 17.998a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"></path>
    </g>
    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
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
            default: "#292D32",
        },
    },
})
</script>