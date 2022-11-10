<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M20.97 10.37v3.19a4.2 4.2 0 0 1-4.2 4.2h-3.56c-.55 0-1 .44-1 1v.82c0 .55.45 1 1 1h2.26c.39 0 .71.31.71.71 0 .39-.32.71-.71.71H7.53c-.39 0-.71-.32-.71-.71 0-.4.32-.71.71-.71h2.26c.55 0 1-.45 1-1v-.82c0-.56-.45-1-1-1h-3.6c-2.31 0-4.19-1.88-4.19-4.2V7.19C2 4.88 3.88 3 6.19 3h4.31c.55 0 1 .45 1 1v2.15c0 1.93 1.29 3.22 3.21 3.22h5.26c.55 0 1 .45 1 1Z"
      :fill="color"
    ></path>
    <path
      d="m21.99 2.36-1.13.79v-.42c0-.95-.77-1.71-1.71-1.71h-4.28C13.84 1.01 13 1.85 13 2.88v3.28c0 .86.43 1.71 1.71 1.71h4.43c.95 0 1.71-.77 1.71-1.71v-.43l1.13.79c.57.39 1.02.15 1.02-.53v-3.1c0-.68-.45-.91-1.01-.53Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M2 6.44C2 2.89 2.89 2 6.44 2H8M22 11.89v.89c0 3.56-.89 4.44-4.44 4.44H6.44c-3.55 0-4.44-.89-4.44-4.44v-1.99M12 17.219v4.78M2 13h20M7.5 22h9M17.86 9.372H13.1c-1.38 0-1.84-.92-1.84-1.84v-3.52c0-1.1.9-2 2-2h4.6c1.02 0 1.84.82 1.84 1.84v3.68c0 1.02-.82 1.84-1.84 1.84ZM20.91 7.919l-1.21-.85v-2.76l1.21-.85c.6-.41 1.09-.16 1.09.57v3.33c0 .73-.49.98-1.09.56Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M20.97 7.19v6.18H2V7.19C2 4.88 3.88 3 6.19 3h10.59c2.31 0 4.19 1.88 4.19 4.19Z"
      :fill="color"
    ></path>
    <path
      d="M2 13.371v.19c0 2.32 1.88 4.19 4.19 4.19h3.6c.55 0 1 .45 1 1v.82c0 .55-.45 1-1 1H7.53c-.39 0-.71.32-.71.71 0 .39.32.71.71.71h7.93c.39 0 .71-.32.71-.71 0-.39-.32-.71-.71-.71h-2.25c-.55 0-1-.45-1-1v-.82c0-.55.45-1 1-1h3.57c2.32 0 4.19-1.88 4.19-4.19v-.19H2ZM21.99 2.36l-1.13.79v-.42c0-.95-.77-1.71-1.71-1.71h-4.28C13.84 1.01 13 1.85 13 2.88v3.28c0 .86.43 1.71 1.71 1.71h4.43c.95 0 1.71-.77 1.71-1.71v-.43l1.13.79c.57.39 1.02.15 1.02-.53v-3.1c0-.68-.45-.91-1.01-.53Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M22 11.89v.89c0 3.56-.89 4.44-4.44 4.44H6.44c-3.55 0-4.44-.89-4.44-4.44V6.44C2 2.89 2.89 2 6.44 2H8M12 17.22V22M2 13h20M7.5 22h9"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17.86 9.37H13.1c-1.38 0-1.84-.92-1.84-1.84V4.01c0-1.1.9-2 2-2h4.6c1.02 0 1.84.82 1.84 1.84v3.68c0 1.02-.82 1.84-1.84 1.84ZM20.91 7.92l-1.21-.85V4.31l1.21-.85c.6-.41 1.09-.16 1.09.57v3.33c0 .73-.49.98-1.09.56Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M17.56 17.97H6.44c-3.98 0-5.19-1.21-5.19-5.19V6.44c0-3.98 1.21-5.19 5.19-5.19H8c.41 0 .75.34.75.75s-.34.75-.75.75H6.44c-3.14 0-3.69.55-3.69 3.69v6.33c0 3.14.55 3.69 3.69 3.69h11.11c3.14 0 3.69-.55 3.69-3.69v-.89c0-.41.34-.75.75-.75s.75.34.75.75v.89c.01 3.99-1.2 5.2-5.18 5.2Z"
      :fill="color"
    ></path>
    <path
      d="M12 22.749c-.41 0-.75-.34-.75-.75v-4.78c0-.41.34-.75.75-.75s.75.34.75.75v4.78c0 .41-.34.75-.75.75ZM22 13.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M16.5 22.75h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75ZM17.86 10.122H13.1c-1.57 0-2.59-1.02-2.59-2.59v-3.52c0-1.52 1.23-2.75 2.75-2.75h4.6a2.59 2.59 0 0 1 2.59 2.59v3.68a2.59 2.59 0 0 1-2.59 2.59Zm-4.6-7.36c-.69 0-1.25.56-1.25 1.25v3.52c0 .98.62 1.09 1.09 1.09h4.76c.6 0 1.09-.49 1.09-1.09v-3.68c0-.6-.49-1.09-1.09-1.09h-4.6Z"
      :fill="color"
    ></path>
    <path
      d="M21.45 8.872c-.32 0-.65-.11-.97-.34l-1.21-.85a.75.75 0 0 1-.32-.61v-2.76c0-.24.12-.47.32-.61l1.21-.85c.52-.37 1.08-.44 1.54-.2.46.24.72.74.72 1.38v3.33c0 .64-.26 1.14-.72 1.38-.17.09-.36.13-.57.13Zm-1-2.19.8.56v-3.1l-.8.56v1.98Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M22 11.89v.89c0 3.56-.89 4.44-4.44 4.44H6.44c-3.55 0-4.44-.89-4.44-4.44V6.44C2 2.89 2.89 2 6.44 2H8"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M12 17.219v4.78M2 13h20"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M7.5 22h9M17.86 9.372H13.1c-1.38 0-1.84-.92-1.84-1.84v-3.52c0-1.1.9-2 2-2h4.6c1.02 0 1.84.82 1.84 1.84v3.68c0 1.02-.82 1.84-1.84 1.84ZM20.91 7.919l-1.21-.85v-2.76l1.21-.85c.6-.41 1.09-.16 1.09.57v3.33c0 .73-.49.98-1.09.56Z"
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