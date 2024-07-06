<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM8.64 12.81l4.38-4.38h-2.43c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.24c.1 0 .19.02.29.06.18.08.33.22.41.41.04.09.06.19.06.29v4.24c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.5L9.7 13.87c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06zm9.6 4.41c-2.01.67-4.12 1.01-6.24 1.01s-4.23-.34-6.24-1.01a.753.753 0 01-.47-.95c.13-.39.55-.61.95-.47 3.72 1.24 7.81 1.24 11.53 0 .39-.13.82.08.95.47.12.4-.09.82-.48.95z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
    ></path>
    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M10.59 7.68h4.24v4.25M14.83 7.68l-5.66 5.66M6 16.51c3.89 1.3 8.11 1.3 12 0"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      :fill="color"
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z"
      opacity=".4"
    ></path>
    <path
      :fill="color"
      d="M9.172 14.09c.19 0 .38-.07.53-.22l4.38-4.38v2.43c0 .41.34.75.75.75s.75-.34.75-.75V7.68c0-.1-.02-.19-.06-.29a.782.782 0 00-.41-.41.717.717 0 00-.29-.06h-4.24c-.41 0-.75.34-.75.75s.34.75.75.75h2.43l-4.38 4.38c-.29.29-.29.77 0 1.06.16.16.35.23.54.23zM18.71 16.28a.749.749 0 00-.95-.47 18.334 18.334 0 01-11.53 0 .753.753 0 00-.95.47c-.13.39.08.82.47.95 2.01.67 4.12 1.01 6.24 1.01s4.23-.34 6.24-1.01c.4-.14.61-.56.48-.95z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
    ></path>
    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M10.59 7.68h4.24v4.25M14.83 7.68l-5.66 5.66M6 16.51c3.89 1.3 8.11 1.3 12 0"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      :fill="color"
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"
    ></path>
    <path
      :fill="color"
      d="M14.83 12.68c-.41 0-.75-.34-.75-.75V8.44h-3.49c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.24c.41 0 .75.34.75.75v4.24c0 .41-.34.75-.75.75z"
    ></path>
    <path
      :fill="color"
      d="M9.17 14.09c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l5.66-5.66c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L9.7 13.87c-.14.15-.34.22-.53.22zM12 18.23c-2.11 0-4.23-.34-6.24-1.01a.753.753 0 01-.47-.95c.13-.39.56-.61.95-.47 3.72 1.24 7.81 1.24 11.53 0 .39-.13.82.08.95.47.13.39-.08.82-.47.95-2.02.68-4.14 1.01-6.25 1.01z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
    ></path>
    <g opacity=".4">
      <path
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke-width="strokeWidth"
        d="M10.59 7.68h4.24v4.25M14.83 7.68l-5.66 5.66"
      ></path>
    </g>
    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M6 16.51c3.89 1.3 8.11 1.3 12 0"
      opacity=".4"
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