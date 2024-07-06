<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M8.39 18.49V8.33c0-.4.12-.79.34-1.12l2.73-4.06c.43-.65 1.5-1.11 2.41-.77.98.33 1.63 1.43 1.42 2.41l-.52 3.27c-.04.3.04.57.21.78.17.19.42.31.69.31h4.11c.79 0 1.47.32 1.87.88.38.54.45 1.24.2 1.95l-2.46 7.49c-.31 1.24-1.66 2.25-3 2.25h-3.9c-.67 0-1.61-.23-2.04-.66l-1.28-.99c-.49-.37-.78-.96-.78-1.58ZM5.21 6.379H4.18c-1.55 0-2.18.6-2.18 2.08v10.06c0 1.48.63 2.08 2.18 2.08h1.03c1.55 0 2.18-.6 2.18-2.08V8.459c0-1.48-.63-2.08-2.18-2.08Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M21.48 11.95c.5-1.4-.4-2.6-1.9-2.6h-4c-.6 0-1.1-.5-1-1.2l.5-3.2c.2-.9-.4-1.9-1.3-2.2-.8-.3-1.8.1-2.2.7l-4.1 6.1M7.48 18.35l3.1 2.4c.4.4 1.3.6 1.9.6h3.8c1.2 0 2.5-.9 2.8-2.1l1.24-3.77"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M2.38 18.348v-9.8c0-1.4.6-1.9 2-1.9h1c1.4 0 2 .5 2 1.9v9.8c0 1.4-.6 1.9-2 1.9h-1c-1.4 0-2-.5-2-1.9Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M21.65 10.03c-.39-.56-1.08-.88-1.87-.88h-4.1c-.27 0-.52-.11-.69-.31-.18-.2-.25-.48-.21-.77l.51-3.28c.22-.98-.43-2.08-1.41-2.41-.91-.34-1.98.12-2.41.77L7.25 9.42l-.12.2v8.84l.15.15 3.17 2.45c.42.42 1.37.65 2.04.65h3.9c1.34 0 2.69-1.01 2.99-2.24l2.46-7.49c.26-.71.19-1.4-.19-1.95Z"
      :fill="color"
    ></path>
    <path
      d="M5.21 6.379H4.18c-1.55 0-2.18.6-2.18 2.08v10.06c0 1.48.63 2.08 2.18 2.08h1.03c1.55 0 2.18-.6 2.18-2.08V8.459c0-1.48-.63-2.08-2.18-2.08Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="m7.48 18.35 3.1 2.4c.4.4 1.3.6 1.9.6h3.8c1.2 0 2.5-.9 2.8-2.1l2.4-7.3c.5-1.4-.4-2.6-1.9-2.6h-4c-.6 0-1.1-.5-1-1.2l.5-3.2c.2-.9-.4-1.9-1.3-2.2-.8-.3-1.8.1-2.2.7l-4.1 6.1"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M2.38 18.35v-9.8c0-1.4.6-1.9 2-1.9h1c1.4 0 2 .5 2 1.9v9.8c0 1.4-.6 1.9-2 1.9h-1c-1.4 0-2-.5-2-1.9Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M16.28 22.1h-3.8c-.56 0-1.78-.17-2.43-.82l-3.03-2.34.92-1.19 3.1 2.4c.25.24.88.44 1.44.44h3.8c.9 0 1.87-.72 2.07-1.53l2.42-7.35c.16-.44.13-.84-.08-1.13-.22-.31-.62-.49-1.11-.49h-4c-.52 0-1-.22-1.33-.6-.34-.39-.49-.91-.41-1.45l.5-3.21c.12-.56-.26-1.19-.8-1.37-.49-.18-1.12.08-1.34.4l-4.1 6.1-1.24-.83 4.1-6.1c.63-.94 2.01-1.39 3.09-.98 1.25.41 2.05 1.79 1.77 3.07l-.49 3.15c-.01.07-.01.17.06.25.05.05.12.08.2.08h4c.98 0 1.83.41 2.33 1.12.49.69.59 1.6.27 2.48l-2.39 7.28c-.37 1.45-1.91 2.62-3.52 2.62Z"
      :fill="color"
    ></path>
    <path
      d="M5.38 20.998h-1c-1.85 0-2.75-.87-2.75-2.65v-9.8c0-1.78.9-2.65 2.75-2.65h1c1.85 0 2.75.87 2.75 2.65v9.8c0 1.78-.9 2.65-2.75 2.65Zm-1-13.6c-1.09 0-1.25.26-1.25 1.15v9.8c0 .89.16 1.15 1.25 1.15h1c1.09 0 1.25-.26 1.25-1.15v-9.8c0-.89-.16-1.15-1.25-1.15h-1Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      opacity=".4"
      d="m7.48 18.35 3.1 2.4c.4.4 1.3.6 1.9.6h3.8c1.2 0 2.5-.9 2.8-2.1l2.4-7.3c.5-1.4-.4-2.6-1.9-2.6h-4c-.6 0-1.1-.5-1-1.2l.5-3.2c.2-.9-.4-1.9-1.3-2.2-.8-.3-1.8.1-2.2.7l-4.1 6.1"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M2.38 18.348v-9.8c0-1.4.6-1.9 2-1.9h1c1.4 0 2 .5 2 1.9v9.8c0 1.4-.6 1.9-2 1.9h-1c-1.4 0-2-.5-2-1.9Z"
      :stroke="color"
      :stroke-width="strokeWidth"
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
        strokeWidth: {
          type: String,
          default: "1.5",
        },
    },
})
</script>