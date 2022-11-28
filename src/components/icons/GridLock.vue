<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M21.53 17.31v-.16c0-1.93-.98-2.9-2.9-2.9s-2.9.98-2.9 2.9v.16c-1.05.26-1.47.98-1.47 2.42v.74c0 1.85.69 2.53 2.53 2.53h3.68c1.85 0 2.53-.69 2.53-2.53v-.74c0-1.43-.42-2.16-1.47-2.42Zm-2.91-1.68c1.29 0 1.52.49 1.52 1.52v.05H17.1v-.05c0-1.03.23-1.52 1.52-1.52ZM6.747 2.065c.55-.07 1.003.386 1.003.94V6.8a1 1 0 0 1-1 1H3c-.552 0-1.008-.45-.941-.998.327-2.687 2.013-4.39 4.688-4.737ZM20.93 7.8h-3.68a1 1 0 0 1-1-1V3.006c0-.554.454-1.011 1.004-.94 2.634.344 4.31 2.002 4.676 4.614.08.59-.4 1.12-1 1.12ZM6.75 16.3a1 1 0 0 1 1 1v3.62c0 .6-.53 1.08-1.13 1-2.57-.382-4.19-2.028-4.546-4.61-.076-.551.381-1.01.939-1.01H6.75ZM7.75 10.3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.75a1 1 0 0 0 1-1v-3.5ZM14.75 10.3a1 1 0 0 0-1-1h-3.5a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.5c.55 0 1-.45 1-1v-3.5ZM14.75 3a1 1 0 0 0-1-1h-3.5a1 1 0 0 0-1 1v3.8a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V3Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M22 11V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h1M5.03 8.5H22M2.03 15.5H12M8.51 21.992V2.012M15.51 11.992v-9.98"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M15.6 17.2v-.8c0-1.33.4-2.4 2.4-2.4s2.4 1.07 2.4 2.4v.8M20 22h-4c-1.6 0-2-.4-2-2v-.8c0-1.6.4-2 2-2h4c1.6 0 2 .4 2 2v.8c0 1.6-.4 2-2 2Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M21.53 17.31v-.16c0-1.93-.98-2.9-2.9-2.9s-2.9.98-2.9 2.9v.16c-1.05.26-1.47.98-1.47 2.42v.74c0 1.85.69 2.53 2.53 2.53h3.68c1.85 0 2.53-.69 2.53-2.53v-.74c0-1.43-.42-2.16-1.47-2.42Zm-2.91-1.68c1.29 0 1.52.49 1.52 1.52v.05H17.1v-.05c0-1.03.23-1.52 1.52-1.52ZM8.39 2.172v6.45H1.93v-.68c0-3.61 2.15-5.76 5.76-5.76h.7v-.01ZM21.77 7.93c0 .38-.31.68-.68.68h-5.75V2.16h.67c3.18.01 5.76 2.59 5.76 5.77ZM8.39 15.55v5.76c0 .38-.31.68-.68.68H7.7c-3.18 0-5.76-2.58-5.76-5.76v-.68h6.45Z"
      :fill="color"
    ></path>
    <path opacity=".4" d="M8.4 8.61H1.94v6.94H8.4V8.61Z" :fill="color"></path>
    <path d="M15.33 8.61v5.94c0 .55-.45 1-1 1H8.39V8.61h6.94Z" :fill="color"></path>
    <path opacity=".4" d="M15.33 2.172H8.39v6.45h6.94v-6.45Z" :fill="color"></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M22 11V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h1M2.03 8.5H22M2.03 15.5H12M8.51 21.99V2.01M15.51 11.99V2.01"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M15.6 17.2v-.8c0-1.33.4-2.4 2.4-2.4s2.4 1.07 2.4 2.4v.8M20 22h-4c-1.6 0-2-.4-2-2v-.8c0-1.6.4-2 2-2h4c1.6 0 2 .4 2 2v.8c0 1.6-.4 2-2 2Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M10 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-4.61-1.64-6.25-6.25-6.25H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h1c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M22.001 9.25H2.031c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h19.97c.41 0 .75.34.75.75s-.34.75-.75.75ZM12.001 16.25h-9.97c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.97c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M8.51 22.74c-.41 0-.75-.34-.75-.75V2.02c0-.41.34-.75.75-.75s.75.34.75.75v19.97c0 .41-.33.75-.75.75ZM15.51 12.74c-.41 0-.75-.34-.75-.75V2.02c0-.41.34-.75.75-.75s.75.34.75.75v9.97c0 .41-.33.75-.75.75ZM20.4 17.95c-.41 0-.75-.34-.75-.75v-.8c0-1.12-.25-1.65-1.65-1.65s-1.65.53-1.65 1.65v.8c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.8c0-2.09 1.06-3.15 3.15-3.15s3.15 1.06 3.15 3.15v.8c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M20 22.75h-4c-2 0-2.75-.75-2.75-2.75v-.8c0-2 .75-2.75 2.75-2.75h4c2 0 2.75.75 2.75 2.75v.8c0 2-.75 2.75-2.75 2.75Zm-4-4.8c-1.19 0-1.25.06-1.25 1.25v.8c0 1.18.07 1.25 1.25 1.25h4c1.18 0 1.25-.07 1.25-1.25v-.8c0-1.19-.06-1.25-1.25-1.25h-4Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M22 11V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h1"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <g opacity=".4" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2.03 8.5H22M2.03 15.5H12M8.51 21.988V2.008M15.51 11.988v-9.98"></path>
    </g>
    <path
      d="M15.6 17.2v-.8c0-1.33.4-2.4 2.4-2.4s2.4 1.07 2.4 2.4v.8M20 22h-4c-1.6 0-2-.4-2-2v-.8c0-1.6.4-2 2-2h4c1.6 0 2 .4 2 2v.8c0 1.6-.4 2-2 2Z"
      :stroke="color"
      stroke-width="1.5"
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