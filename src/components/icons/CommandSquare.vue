<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM9.6 16.2c0 .99-.81 1.8-1.8 1.8S6 17.19 6 16.2s.81-1.8 1.8-1.8h.8c.55 0 1 .45 1 1v.8Zm0-7.6c0 .55-.45 1-1 1h-.8C6.81 9.6 6 8.79 6 7.8S6.81 6 7.8 6s1.8.81 1.8 1.8v.8Zm4.55 4.65c0 .49-.4.9-.9.9h-2.51c-.49 0-.9-.4-.9-.9v-2.51c0-.49.4-.9.9-.9h2.51c.49 0 .9.4.9.9v2.51ZM16.2 18c-.99 0-1.8-.81-1.8-1.8v-.8c0-.55.45-1 1-1h.8c.99 0 1.8.81 1.8 1.8s-.81 1.8-1.8 1.8Zm0-8.4h-.8c-.55 0-1-.45-1-1v-.8c0-.99.81-1.8 1.8-1.8s1.8.81 1.8 1.8-.81 1.8-1.8 1.8Z"
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
      d="M14.4 9.602H9.6v4.8h4.8v-4.8ZM7.8 17.998c.99 0 1.8-.81 1.8-1.8v-1.8H7.8c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8ZM7.8 9.6h1.8V7.8c0-.99-.81-1.8-1.8-1.8S6 6.81 6 7.8s.81 1.8 1.8 1.8ZM14.4 9.6h1.8c.99 0 1.8-.81 1.8-1.8S17.19 6 16.2 6s-1.8.81-1.8 1.8v1.8Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M16.2 17.998c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8h-1.8v1.8c0 .99.81 1.8 1.8 1.8Z"
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
      d="M10.75 14.15h2.51c.49 0 .9-.4.9-.9v-2.51c0-.49-.4-.9-.9-.9h-2.51c-.49 0-.9.4-.9.9v2.51c0 .5.4.9.9.9ZM7.8 17.998c.99 0 1.8-.81 1.8-1.8v-.8c0-.55-.45-1-1-1h-.8c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8ZM7.8 9.6h.8c.55 0 1-.45 1-1v-.8c0-.99-.81-1.8-1.8-1.8S6 6.81 6 7.8s.81 1.8 1.8 1.8ZM15.4 9.6h.8c.99 0 1.8-.81 1.8-1.8S17.19 6 16.2 6s-1.8.81-1.8 1.8v.8c0 .55.45 1 1 1ZM16.2 17.998c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8h-.8c-.55 0-1 .45-1 1v.8c0 .99.81 1.8 1.8 1.8Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M14.4 9.6H9.6v4.8h4.8V9.6ZM7.8 18c.99 0 1.8-.81 1.8-1.8v-1.8H7.8c-.99 0-1.8.81-1.8 1.8S6.81 18 7.8 18ZM7.8 9.6h1.8V7.8c0-.99-.81-1.8-1.8-1.8S6 6.81 6 7.8s.81 1.8 1.8 1.8ZM14.4 9.6h1.8c.99 0 1.8-.81 1.8-1.8S17.19 6 16.2 6s-1.8.81-1.8 1.8v1.8ZM16.2 18c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8h-1.8v1.8c0 .99.81 1.8 1.8 1.8Z"
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
      d="M14.4 15.152H9.6c-.41 0-.75-.34-.75-.75v-4.8c0-.41.34-.75.75-.75h4.8c.41 0 .75.34.75.75v4.8c0 .41-.34.75-.75.75Zm-4.05-1.5h3.3v-3.3h-3.3v3.3Z"
      :fill="color"
    ></path>
    <path
      d="M7.8 18.748c-1.41 0-2.55-1.14-2.55-2.55s1.14-2.55 2.55-2.55h1.8c.41 0 .75.34.75.75v1.8c0 1.41-1.14 2.55-2.55 2.55Zm0-3.6a1.05 1.05 0 1 0 1.05 1.05v-1.05H7.8ZM9.6 10.35H7.8c-1.41 0-2.55-1.14-2.55-2.55S6.39 5.25 7.8 5.25s2.55 1.14 2.55 2.55v1.8c0 .41-.34.75-.75.75Zm-1.8-3.6a1.05 1.05 0 1 0 0 2.1h1.05V7.8c0-.58-.47-1.05-1.05-1.05ZM16.2 10.35h-1.8c-.41 0-.75-.34-.75-.75V7.8c0-1.41 1.14-2.55 2.55-2.55s2.55 1.14 2.55 2.55-1.14 2.55-2.55 2.55Zm-1.05-1.5h1.05a1.05 1.05 0 1 0-1.05-1.05v1.05ZM16.2 18.748c-1.41 0-2.55-1.14-2.55-2.55v-1.8c0-.41.34-.75.75-.75h1.8c1.41 0 2.55 1.14 2.55 2.55s-1.14 2.55-2.55 2.55Zm-1.05-3.6v1.05a1.05 1.05 0 1 0 1.05-1.05h-1.05Z"
      :fill="color"
    ></path>
    <path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <g opacity=".4" :stroke="color" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.4 9.602H9.6v4.8h4.8v-4.8ZM7.8 17.998c.99 0 1.8-.81 1.8-1.8v-1.8H7.8c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8ZM7.8 9.6h1.8V7.8c0-.99-.81-1.8-1.8-1.8S6 6.81 6 7.8s.81 1.8 1.8 1.8ZM14.4 9.6h1.8c.99 0 1.8-.81 1.8-1.8S17.19 6 16.2 6s-1.8.81-1.8 1.8v1.8Z"></path>
      <path d="M16.2 17.998c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8h-1.8v1.8c0 .99.81 1.8 1.8 1.8Z"></path>
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
            default: "currentColor",
        },
    },
})
</script>