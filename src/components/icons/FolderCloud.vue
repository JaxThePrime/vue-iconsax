<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M15.579 19.699c-2.11.15-2.11 3.21 0 3.36h5.01c.61 0 1.19-.22 1.64-.63 1.48-1.29.69-3.89-1.26-4.13-.7-4.22-6.81-2.62-5.36 1.4"
      :fill="color"
    ></path>
    <path
      d="M15.579 19.699c-2.11.15-2.11 3.21 0 3.36h5.01c.61 0 1.19-.22 1.64-.63 1.48-1.29.69-3.89-1.26-4.13-.7-4.22-6.81-2.62-5.36 1.4"
      :fill="color"
    ></path>
    <path
      d="M22 11.07v4.27c0 .32-.51.46-.73.23-.47-.49-1.06-.86-1.74-1.07-1.57-.49-3.38-.01-4.52 1.17-.72.77-1.11 1.73-1.13 2.77 0 .18-.09.34-.23.45-.72.57-1.16 1.46-1.16 2.48v.01c0 .32-.23.61-.55.61h-4.6C4.4 22 2 19.6 2 16.65V6.42C2 3.98 3.98 2 6.42 2h2.32c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.46.93.46h2.79c2.38 0 4.4 1.56 5.09 3.72.15.45.23.91.25 1.4.01.07.01.16.01.23Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M2 7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5v2M9 22.001H7c-4 0-5-1-5-5v-4.97M13.759 18.32c-2.35.17-2.35 3.57 0 3.74h5.56c.67 0 1.33-.25 1.82-.7 1.65-1.44.77-4.32-1.4-4.59-.78-4.69-7.56-2.91-5.96 1.56"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M21.988 10.838c-.02-.48-.1-.95-.25-1.4a5.347 5.347 0 0 0-5.09-3.72h-2.79c-.58 0-.62-.06-.93-.47l-1.4-1.86c-.65-.87-1.16-1.4-2.79-1.4h-2.33c-2.44 0-4.42 1.98-4.42 4.42v10.23c0 2.95 2.4 5.35 5.35 5.35h9.3c2.95 0 5.35-2.4 5.35-5.35v-5.58a.81.81 0 0 0 0-.22Z"
      :fill="color"
    ></path>
    <path
      d="M15.579 19.699c-2.11.15-2.11 3.21 0 3.36h5.01c.61 0 1.19-.22 1.64-.63 1.48-1.29.69-3.89-1.26-4.13-.7-4.22-6.81-2.62-5.36 1.4"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M9 22H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5v2"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M13.76 18.32c-2.35.17-2.35 3.57 0 3.74h5.56c.67 0 1.33-.25 1.82-.7 1.65-1.44.77-4.32-1.4-4.59-.78-4.69-7.56-2.91-5.96 1.56"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M9 22.75H7c-4.41 0-5.75-1.34-5.75-5.75V7c0-4.41 1.34-5.75 5.75-5.75h1.5c1.75 0 2.3.57 3 1.5l1.5 2c.33.44.38.5 1 .5h3c4.41 0 5.75 1.34 5.75 5.75v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2c0-3.57-.67-4.25-4.25-4.25h-3c-1.28 0-1.7-.44-2.2-1.1l-1.5-2c-.52-.69-.68-.9-1.8-.9H7c-3.58 0-4.25.68-4.25 4.25v10c0 3.57.67 4.25 4.25 4.25h2c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M19.342 22.811h-5.59c-1.67-.12-2.51-1.4-2.51-2.62 0-.98.55-2.01 1.61-2.43-.22-1.25.1-2.41.93-3.28 1.02-1.07 2.66-1.5 4.08-1.07 1.24.38 2.13 1.36 2.5 2.72 1.05.32 1.88 1.15 2.22 2.28.4 1.31.03 2.65-.96 3.51-.6.57-1.42.89-2.28.89Zm-5.55-3.74c-.76.07-1.04.64-1.04 1.12 0 .48.28 1.06 1.06 1.12h5.51c.48.04.96-.18 1.32-.5.65-.57.69-1.38.52-1.96-.17-.58-.67-1.23-1.51-1.34a.753.753 0 0 1-.65-.62c-.22-1.35-.98-1.85-1.57-2.04-.88-.27-1.92.01-2.55.67-.43.45-.85 1.26-.38 2.55a.75.75 0 0 1-.45.96c-.09.03-.18.04-.26.04Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M9 22H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5v2"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M13.759 18.32c-2.35.17-2.35 3.57 0 3.74h5.56c.67 0 1.33-.25 1.82-.7 1.65-1.44.77-4.32-1.4-4.59-.78-4.69-7.56-2.91-5.96 1.56"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
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