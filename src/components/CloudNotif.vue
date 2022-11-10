<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M21.272 8.762c0 1.02-.47 1.94-1.23 2.54a3.2 3.2 0 0 1-2.03.72c-1.79 0-3.25-1.46-3.25-3.25 0-.89.36-1.7.96-2.29v-.01c.59-.59 1.4-.96 2.29-.96 1.8 0 3.26 1.46 3.26 3.25Z"
      :fill="color"
    ></path>
    <path
      d="M20.182 18.729c-1.05.96-2.4 1.49-3.83 1.49H5.972c-2.74-.2-3.96-2.31-3.96-4.19 0-1.68.97-3.54 3.1-4.06-.93-3.58.85-6.08 2.93-7.27 2.06-1.17 4.96-1.36 7.14.25-.19.14-.36.29-.53.46l-.43.45v.06c-.62.81-.96 1.8-.96 2.84 0 2.62 2.14 4.75 4.76 4.75 1.08 0 2.13-.37 2.95-1.04.15-.12.3-.25.43-.39.99 2.08.85 4.84-1.22 6.65Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M6.922 5.728c1.68-1.59 4.25-2.19 6.46-1.48M21.901 13.961c.27 1.67-.2 3.46-1.63 4.72-.99.91-2.29 1.41-3.64 1.4H5.541c-4.67-.34-4.68-7.14 0-7.48h.05c-.39-1.08-.53-2.08-.48-2.98"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M7.26 13.012c-.52-.26-1.09-.4-1.67-.41M21.969 8.5c0 1.1-.51 2.09-1.32 2.73-.59.48-1.36.77-2.18.77-1.93 0-3.5-1.57-3.5-3.5 0-.96.39-1.83 1.03-2.46v-.01A3.46 3.46 0 0 1 18.469 5c1.93 0 3.5 1.57 3.5 3.5Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M20.57 11.012a5.197 5.197 0 0 0-2.9-1.77c-.25-1.15-.71-2.15-1.36-2.97a.555.555 0 0 0-.06-.08c-2.19-2.65-5.78-2.64-8.2-1.27-2.07 1.18-3.83 3.67-2.91 7.24-2.12.52-3.1 2.37-3.1 4.04 0 1.87 1.22 3.98 3.95 4.17h10.34c1.42 0 2.77-.52 3.81-1.48 2.52-2.2 2.19-5.81.43-7.88Z"
      :fill="color"
    ></path>
    <path
      d="M21.272 8.762c0 1.02-.47 1.94-1.23 2.54a3.2 3.2 0 0 1-2.03.72c-1.79 0-3.25-1.46-3.25-3.25 0-.89.36-1.7.96-2.29v-.01c.59-.59 1.4-.96 2.29-.96 1.8 0 3.26 1.46 3.26 3.25Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M21.9 13.96c.27 1.67-.2 3.46-1.63 4.72-.99.91-2.29 1.41-3.64 1.4H5.54c-4.67-.34-4.68-7.14 0-7.48h.05c-2.19-6.13 3.5-9.73 7.79-8.35"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M7.26 13.01c-.52-.26-1.09-.4-1.67-.41M21.97 8.5c0 1.1-.51 2.09-1.32 2.73-.59.48-1.36.77-2.18.77-1.93 0-3.5-1.57-3.5-3.5 0-.96.39-1.83 1.03-2.46v-.01A3.46 3.46 0 0 1 18.47 5c1.93 0 3.5 1.57 3.5 3.5Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M16.671 20.831H5.541c-2.94-.21-4.26-2.48-4.26-4.49 0-1.8 1.05-3.8 3.33-4.35-.63-2.52-.08-4.88 1.58-6.59 1.88-1.94 4.87-2.69 7.42-1.86.39.13.61.55.48.94-.13.39-.55.61-.94.48-2.03-.65-4.4-.06-5.89 1.49-1.45 1.5-1.79 3.59-.96 5.9.08.23.05.49-.09.68-.14.19-.37.32-.61.32-1.94.14-2.81 1.6-2.81 2.99 0 1.39.87 2.85 2.81 3h11.04a4.61 4.61 0 0 0 3.13-1.2c1.15-1.01 1.65-2.48 1.4-4.04-.07-.41.21-.79.62-.86.41-.07.79.21.86.62.34 2.06-.37 4.08-1.87 5.4-1.12 1-2.58 1.57-4.11 1.57Z"
      :fill="color"
    ></path>
    <path
      d="M7.26 13.762c-.11 0-.23-.03-.33-.08-.42-.21-.88-.32-1.35-.33a.762.762 0 0 1-.74-.76c.01-.41.4-.75.76-.74.69.01 1.38.18 1.99.49.37.18.52.64.34 1.01-.13.26-.39.41-.67.41ZM18.469 12.752a4.26 4.26 0 0 1-4.25-4.25c0-1.1.42-2.14 1.18-2.92.02-.03.04-.05.06-.07.8-.81 1.86-1.25 3-1.25a4.26 4.26 0 0 1 4.25 4.25c0 1.3-.58 2.51-1.6 3.32-.73.59-1.67.92-2.64.92Zm-1.87-6.25a.5.5 0 0 1-.07.08c-.52.51-.81 1.2-.81 1.93a2.748 2.748 0 0 0 4.46 2.15c.67-.53 1.04-1.31 1.04-2.15 0-1.52-1.23-2.75-2.75-2.75a2.63 2.63 0 0 0-1.87.74Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M21.901 13.96c.27 1.67-.2 3.46-1.63 4.72-.99.91-2.29 1.41-3.64 1.4H5.541c-4.67-.34-4.68-7.14 0-7.48h.05c-2.19-6.13 3.5-9.73 7.79-8.35"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M7.26 13.012c-.52-.26-1.09-.4-1.67-.41"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M21.969 8.5c0 1.1-.51 2.09-1.32 2.73-.59.48-1.36.77-2.18.77-1.93 0-3.5-1.57-3.5-3.5 0-.96.39-1.83 1.03-2.46v-.01A3.46 3.46 0 0 1 18.469 5c1.93 0 3.5 1.57 3.5 3.5Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
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