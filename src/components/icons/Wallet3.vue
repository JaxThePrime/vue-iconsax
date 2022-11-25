<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M22 12.622v2.06c0 .56-.46 1.02-1.03 1.02h-1.93c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.05c.57 0 1.03.46 1.03 1.02Z"
      :fill="color"
    ></path>
    <path
      d="M15.38 13.958c-.09-1.05.29-2.08 1.05-2.83.64-.65 1.53-1.03 2.49-1.03h.57c.28 0 .51-.23.47-.51A4.008 4.008 0 0 0 16 6.148H6c-2.21 0-4 1.79-4 4v7c0 2.21 1.79 4 4 4h10a4 4 0 0 0 3.96-3.44c.04-.28-.19-.51-.47-.51h-.45c-1.9 0-3.5-1.42-3.66-3.24ZM13 11.898H7a.749.749 0 1 1 0-1.5h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.21 3.982c.26.27.03.67-.35.67H6.03c-1.09 0-2.11.32-2.96.87-.39.25-.92-.02-.73-.45a3.675 3.675 0 0 1 3.38-2.22h5.62c1.16 0 2.19.41 2.87 1.13Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M13 11.148H7M11.309 2.852c2.04 0 3.69 1.27 3.69 3.31M2 10.15V6.53c0-2.04 1.65-3.69 3.69-3.69h1.93"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M2 10.148c0-2.21 1.79-4 4-4h10c2.2 0 4 1.8 4 4v1.45h-1.08c-.56 0-1.07.22-1.44.6-.5.48-.74 1.22-.54 1.98.25.93 1.17 1.52 2.13 1.52H20v1.45c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4v-2.63"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M22 12.622v2.06c0 .56-.46 1.02-1.03 1.02h-1.93c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.05c.57 0 1.03.46 1.03 1.02Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M15 6.152H6c-2.21 0-4 1.79-4 4v-3.61c0-2.04 1.65-3.69 3.69-3.69h5.62c2.04 0 3.69 1.26 3.69 3.3Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M17.48 12.198c-.5.49-.74 1.23-.54 1.98.25.93 1.17 1.52 2.13 1.52H20v1.45c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4v-7c0-2.21 1.79-4 4-4h10c2.2 0 4 1.8 4 4v1.45h-1.08c-.56 0-1.07.22-1.44.6Z"
      :fill="color"
    ></path>
    <path
      d="M22 12.622v2.06c0 .56-.46 1.02-1.03 1.02h-1.93c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.05c.57 0 1.03.46 1.03 1.02ZM13 11.898H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M13 11.15H7M2 11.15V6.53c0-2.04 1.65-3.69 3.69-3.69h5.62c2.04 0 3.69 1.27 3.69 3.31"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17.48 12.2c-.5.48-.74 1.22-.54 1.98.25.93 1.17 1.52 2.13 1.52H20v1.45c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4v-7c0-2.21 1.79-4 4-4h10c2.2 0 4 1.8 4 4v1.45h-1.08c-.56 0-1.07.22-1.44.6Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M22 12.62v2.06c0 .56-.46 1.02-1.03 1.02h-1.93c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.05c.57 0 1.03.46 1.03 1.02Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M13 11.898H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM2 11.9c-.41 0-.75-.34-.75-.75V6.53c0-2.45 1.99-4.44 4.44-4.44h5.62c2.57 0 4.44 1.71 4.44 4.06 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.76-1.53-2.56-2.94-2.56H5.69c-1.62 0-2.94 1.32-2.94 2.94v4.62c0 .42-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M16 21.898H6c-2.62 0-4.75-2.13-4.75-4.75v-7c0-2.62 2.13-4.75 4.75-4.75h10c2.62 0 4.75 2.13 4.75 4.75v1.45c0 .41-.34.75-.75.75h-1.08c-.35 0-.67.13-.9.37l-.01.01c-.33.33-.46.79-.34 1.24.15.56.74.97 1.4.97H20c.41 0 .75.34.75.75v1.45c0 2.63-2.13 4.76-4.75 4.76Zm-10-15c-1.79 0-3.25 1.46-3.25 3.25v7c0 1.79 1.46 3.25 3.25 3.25h10c1.79 0 3.25-1.46 3.25-3.25v-.7h-.18c-1.35 0-2.52-.85-2.85-2.08-.26-.97.02-2 .73-2.7.52-.53 1.22-.82 1.97-.82h.33v-.7c0-1.79-1.46-3.25-3.25-3.25H6Z"
      :fill="color"
    ></path>
    <path
      d="M20.97 16.452h-1.93c-1.51 0-2.79-1.12-2.91-2.56-.08-.83.22-1.64.82-2.23.5-.52 1.21-.81 1.96-.81h2.05c.98 0 1.78.79 1.78 1.77v2.06c.01.98-.79 1.77-1.77 1.77Zm-2.05-4.1c-.35 0-.67.13-.9.37-.29.28-.43.66-.39 1.04.05.66.69 1.19 1.41 1.19h1.93c.15 0 .28-.12.28-.27v-2.06c0-.15-.13-.27-.28-.27h-2.05Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      opacity=".4"
      d="M13 11.148H7M2 11.15V6.53c0-2.04 1.65-3.69 3.69-3.69h5.62c2.04 0 3.69 1.27 3.69 3.31"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17.48 12.198c-.5.48-.74 1.22-.54 1.98.25.93 1.17 1.52 2.13 1.52H20v1.45c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4v-7c0-2.21 1.79-4 4-4h10c2.2 0 4 1.8 4 4v1.45h-1.08c-.56 0-1.07.22-1.44.6Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M22 12.622v2.06c0 .56-.46 1.02-1.03 1.02h-1.93c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.05c.57 0 1.03.46 1.03 1.02Z"
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