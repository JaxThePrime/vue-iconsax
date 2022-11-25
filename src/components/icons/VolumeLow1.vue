<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M19.328 16.75a.75.75 0 0 1-.6-1.2 5.94 5.94 0 0 0 0-7.1.75.75 0 0 1 1.2-.9 7.44 7.44 0 0 1 0 8.9c-.14.2-.37.3-.6.3ZM15.348 3.782c-1.12-.62-2.55-.46-4.01.45l-2.92 1.83c-.2.12-.43.19-.66.19H6.328c-2.42 0-3.75 1.33-3.75 3.75v4c0 2.42 1.33 3.75 3.75 3.75H7.758c.23 0 .46.07.66.19l2.92 1.83c.88.55 1.74.82 2.54.82a3 3 0 0 0 1.47-.37c1.11-.62 1.73-1.91 1.73-3.63v-9.18c0-1.72-.62-3.01-1.73-3.63Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M16.328 7.412c0-2.98-2.07-4.12-4.59-2.54l-2.92 1.83c-.32.19-.69.3-1.06.3h-1.43c-2 0-3 1-3 3v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54v-4.94M19.328 8a6.66 6.66 0 0 1 0 8"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M19.328 16.75a.75.75 0 0 1-.6-1.2 5.94 5.94 0 0 0 0-7.1.75.75 0 0 1 1.2-.9 7.44 7.44 0 0 1 0 8.9c-.14.2-.37.3-.6.3Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M17.078 7.412v9.18c0 1.72-.62 3.01-1.73 3.63a3 3 0 0 1-1.47.37c-.8 0-1.66-.27-2.54-.82l-2.92-1.83c-.2-.12-.43-.19-.66-.19h-.93v-11.5h.93c.23 0 .46-.07.66-.19l2.92-1.83c1.46-.91 2.89-1.07 4.01-.45 1.11.62 1.73 1.91 1.73 3.63Z"
      :fill="color"
    ></path>
    <path
      d="M6.828 6.25v11.5h-.5c-2.42 0-3.75-1.33-3.75-3.75v-4c0-2.42 1.33-3.75 3.75-3.75h.5Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M3.33 10v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.41c0-2.98-2.07-4.12-4.59-2.54L8.82 6.7c-.32.19-.69.3-1.06.3H6.33c-2 0-3 1-3 3Z"
      :stroke="color"
      strokeWidth="1.5"
    ></path>
    <path
      d="M19.33 8a6.66 6.66 0 0 1 0 8"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M12.76 20.748c-.81 0-1.68-.28-2.58-.84l-2.98-1.86c-.21-.13-.44-.2-.68-.2H5.06c-2.46 0-3.81-1.35-3.81-3.81v-4.08c0-2.46 1.35-3.81 3.81-3.81h1.46c.24 0 .48-.07.68-.2l2.98-1.86c1.49-.93 2.93-1.1 4.07-.46 1.14.63 1.76 1.94 1.76 3.7v9.36c0 1.75-.63 3.07-1.76 3.7-.45.24-.95.36-1.49.36Zm-7.7-13.1c-1.62 0-2.31.69-2.31 2.31v4.08c0 1.62.69 2.31 2.31 2.31h1.46c.52 0 1.03.15 1.48.42l2.98 1.86c.99.62 1.92.77 2.55.43.63-.35.99-1.22.99-2.38v-9.36c0-1.17-.36-2.04-.99-2.38-.63-.35-1.56-.19-2.55.43L8 7.218a2.8 2.8 0 0 1-1.48.43H5.06ZM22 12.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M3.328 10.002v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54v-9.18c0-2.98-2.07-4.12-4.59-2.54l-2.92 1.83c-.32.19-.69.3-1.06.3h-1.43c-2 0-3 1-3 3Z"
      :stroke="color"
      strokeWidth="1.5"
    ></path>
    <path
      opacity=".4"
      d="M19.328 8a6.66 6.66 0 0 1 0 8"
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