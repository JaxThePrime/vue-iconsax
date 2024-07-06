<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M22 4.85v11.89c0 .97-.79 1.86-1.76 1.98l-.31.04c-1.64.22-3.95.9-5.81 1.68-.65.27-1.37-.22-1.37-.93V5.6c0-.37.21-.71.54-.89 1.83-.99 4.6-1.87 6.48-2.03h.06c1.2 0 2.17.97 2.17 2.17ZM10.708 4.71c-1.83-.99-4.6-1.87-6.48-2.03h-.07c-1.2 0-2.17.97-2.17 2.17v11.89c0 .97.79 1.86 1.76 1.98l.31.04c1.64.22 3.95.9 5.81 1.68.65.27 1.37-.22 1.37-.93V5.6a1 1 0 0 0-.53-.89Zm-5.71 3.03h2.25a.749.749 0 1 1 0 1.5h-2.25a.749.749 0 1 1 0-1.5Zm3 4.5h-3a.749.749 0 1 1 0-1.5h3a.749.749 0 1 1 0 1.5Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M20.498 11v6c0 .14 0 .28-.01.42M3.5 18V7c0-4 1-5 5-5h7c4 0 5 1 5 5"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M6.35 15H20.5v3.5c0 1.93-1.57 3.5-3.5 3.5H7c-1.93 0-3.5-1.57-3.5-3.5v-.65C3.5 16.28 4.78 15 6.35 15ZM8 7h8M8 10.5h5"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M20.5 7v8H6.35c-1.57 0-2.85 1.28-2.85 2.85V7c0-4 1-5 5-5h7c4 0 5 1 5 5Z"
      :fill="color"
    ></path>
    <path
      d="M20.5 15v3.5c0 1.93-1.57 3.5-3.5 3.5H7c-1.93 0-3.5-1.57-3.5-3.5v-.65C3.5 16.28 4.78 15 6.35 15H20.5ZM16 7.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75ZM13 11.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M22 16.74V4.67c0-1.2-.98-2.09-2.17-1.99h-.06c-2.1.18-5.29 1.25-7.07 2.37l-.17.11c-.29.18-.77.18-1.06 0l-.25-.15C9.44 3.9 6.26 2.84 4.16 2.67 2.97 2.57 2 3.47 2 4.66v12.08c0 .96.78 1.86 1.74 1.98l.29.04c2.17.29 5.52 1.39 7.44 2.44l.04.02c.27.15.7.15.96 0 1.92-1.06 5.28-2.17 7.46-2.46l.33-.04c.96-.12 1.74-1.02 1.74-1.98ZM12 5.49v15M7.75 8.49H5.5M8.5 11.49h-3"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M12 22.08c-.3 0-.6-.07-.85-.21-1.87-1.02-5.16-2.1-7.22-2.37l-.29-.04c-1.31-.16-2.39-1.39-2.39-2.72V4.66c0-.79.31-1.51.88-2.03.57-.52 1.31-.77 2.09-.7 2.2.17 5.52 1.27 7.4 2.45l.24.14c.07.04.22.04.28.01l.16-.1c1.88-1.18 5.2-2.3 7.41-2.49h.12c.73-.07 1.48.19 2.04.71.57.52.88 1.24.88 2.03v12.07c0 1.34-1.08 2.56-2.4 2.72l-.33.04c-2.06.27-5.36 1.36-7.19 2.37-.24.14-.53.2-.83.2ZM3.98 3.42c-.32 0-.61.11-.84.32-.25.23-.39.56-.39.92v12.08c0 .59.51 1.16 1.08 1.24l.3.04c2.25.3 5.7 1.43 7.7 2.52.09.04.22.05.27.03 2-1.11 5.47-2.25 7.73-2.55l.34-.04c.57-.07 1.08-.65 1.08-1.24V4.67c0-.37-.14-.69-.39-.93-.26-.23-.59-.34-.96-.32h-.12c-1.91.17-4.99 1.2-6.67 2.25l-.16.11c-.55.34-1.33.34-1.86.01l-.24-.14C9.14 4.6 6.06 3.58 4.1 3.42h-.12Z"
      :fill="color"
    ></path>
    <path
      d="M12 21.238c-.41 0-.75-.34-.75-.75v-15c0-.41.34-.75.75-.75s.75.34.75.75v15c0 .42-.34.75-.75.75ZM7.75 9.238H5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25c.41 0 .75.34.75.75s-.34.75-.75.75ZM8.5 12.238h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M22 16.742V4.672c0-1.2-.98-2.09-2.17-1.99h-.06c-2.1.18-5.29 1.25-7.07 2.37l-.17.11c-.29.18-.77.18-1.06 0l-.25-.15c-1.78-1.11-4.96-2.17-7.06-2.34-1.19-.1-2.16.8-2.16 1.99v12.08c0 .96.78 1.86 1.74 1.98l.29.04c2.17.29 5.52 1.39 7.44 2.44l.04.02c.27.15.7.15.96 0 1.92-1.06 5.28-2.17 7.46-2.46l.33-.04c.96-.12 1.74-1.02 1.74-1.98Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M12 5.488v15M7.75 8.488H5.5M8.5 11.488h-3"
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