<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M21.67 6.95c-.64-2.17-2.45-3.98-4.62-4.62-1.65-.48-2.79-.44-3.58.15-.95.71-1.06 1.99-1.06 2.9v2.49c0 2.46 1.12 3.71 3.32 3.71h2.87c.9 0 2.19-.11 2.9-1.06.61-.78.66-1.92.17-3.57Z"
      :fill="color"
    ></path>
    <path
      d="M18.91 13.361c-.26-.3-.64-.47-1.03-.47H14.3c-1.76 0-3.19-1.43-3.19-3.19v-3.58c0-.39-.17-.77-.47-1.03-.29-.26-.69-.38-1.07-.33-2.35.3-4.51 1.59-5.92 3.53-1.42 1.95-1.94 4.33-1.49 6.71.65 3.44 3.4 6.19 6.85 6.84.55.11 1.1.16 1.65.16 1.81 0 3.56-.56 5.05-1.65 1.94-1.41 3.23-3.57 3.53-5.92.05-.39-.07-.78-.33-1.07Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M16.28 2.96C13 2 12 3.08 12 5.68v2.88C12 11 13 12 15 12h3.32c2.6 0 3.68-1 2.72-4.28A7.05 7.05 0 0 0 20 5.63M2.12 14.432a9.105 9.105 0 0 1 7.14-10.42M20 14.7a9.091 9.091 0 0 1-10.42 7.17c-2.23-.35-4.21-1.56-5.58-3.26"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M21.67 6.95c-.64-2.17-2.45-3.98-4.62-4.62-1.65-.48-2.79-.44-3.58.15-.95.71-1.06 1.99-1.06 2.9v2.49c0 2.46 1.12 3.71 3.32 3.71h2.87c.9 0 2.19-.11 2.9-1.06.61-.78.66-1.92.17-3.57Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M18.91 13.361c-.26-.3-.64-.47-1.03-.47H14.3c-1.76 0-3.19-1.43-3.19-3.19v-3.58c0-.39-.17-.77-.47-1.03-.29-.26-.69-.38-1.07-.33-2.35.3-4.51 1.59-5.92 3.53-1.42 1.95-1.94 4.33-1.49 6.71.65 3.44 3.4 6.19 6.85 6.84.55.11 1.1.16 1.65.16 1.81 0 3.56-.56 5.05-1.65 1.94-1.41 3.23-3.57 3.53-5.92.05-.39-.07-.78-.33-1.07Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M18.32 12c2.6 0 3.68-1 2.72-4.28-.65-2.21-2.55-4.11-4.76-4.76C13 2 12 3.08 12 5.68v2.88C12 11 13 12 15 12h3.32Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M20 14.7a9.091 9.091 0 0 1-10.42 7.17c-3.79-.61-6.84-3.66-7.46-7.45A9.1 9.1 0 0 1 9.26 4.01"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M18.32 12.75H15c-2.49 0-3.75-1.41-3.75-4.2V5.68c0-1.02.12-2.48 1.18-3.28.89-.66 2.17-.71 4.06-.16 2.48.72 4.55 2.79 5.27 5.27.55 1.88.5 3.17-.16 4.05-.8 1.07-2.26 1.19-3.28 1.19Zm-4.04-9.39c-.41 0-.73.08-.94.24-.39.29-.58.97-.58 2.08v2.88c0 2.24.86 2.7 2.25 2.7h3.32c1.1 0 1.78-.19 2.08-.58.35-.46.32-1.38-.07-2.73-.58-1.97-2.28-3.68-4.25-4.25-.74-.23-1.34-.34-1.81-.34Z"
      :fill="color"
    ></path>
    <path
      d="M11.07 22.748c-.53 0-1.07-.04-1.61-.13-4.09-.66-7.42-3.98-8.08-8.07-.85-5.26 2.54-10.22 7.73-11.28.41-.08.8.18.89.58.08.41-.18.8-.58.89-4.39.9-7.27 5.1-6.54 9.57.56 3.46 3.37 6.27 6.83 6.83 4.49.72 8.68-2.17 9.57-6.58a.75.75 0 1 1 1.47.29 9.852 9.852 0 0 1-9.68 7.9Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      opacity=".4"
      d="M18.32 12c2.6 0 3.68-1 2.72-4.28-.65-2.21-2.55-4.11-4.76-4.76C13 2 12 3.08 12 5.68v2.88C12 11 13 12 15 12h3.32Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M20 14.702a9.091 9.091 0 0 1-10.42 7.17c-3.79-.61-6.84-3.66-7.46-7.45a9.1 9.1 0 0 1 7.14-10.41"
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