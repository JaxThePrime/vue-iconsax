<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M3.18 15.029c-.35 0-.6.35-.47.67 1.47 3.7 5.08 6.3 9.29 6.3 4.22 0 7.83-2.62 9.3-6.33.13-.32-.13-.67-.47-.67H17.5c-.28 0-.5-.22-.5-.5v-2.74c0-.92-1.15-1.35-1.75-.65l-2.87 3.43c-.2.24-.57.24-.77 0l-2.87-3.43c-.59-.7-1.74-.27-1.74.65v2.74c0 .28-.22.5-.5.5l-3.32.03z"
    ></path>
    <path
      :fill="color"
      d="M22 12.14c0 .31-.02.62-.06.92-.03.25-.25.44-.51.44H19c-.28 0-.5-.22-.5-.5v-1.1c0-1.01-.54-1.99-1.46-2.41-1.03-.47-2.2-.21-2.94.66l-1.72 2.05c-.2.24-.57.24-.77 0l-1.73-2.07C9.16 9.28 8 9.02 6.96 9.49c-.92.42-1.46 1.4-1.46 2.41v.98c0 .42-.22.64-.5.64l-2.44.01c-.25 0-.48-.19-.51-.44C2.02 12.73 2 12.37 2 12 2 5.95 7.39 1.14 13.63 2.13c4.83.76 8.44 5.11 8.37 10.01z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M21.54 15c-1.28 4.06-5.07 7-9.54 7-4.46 0-8.24-2.92-9.53-6.96L7 15V9l5 6 5-6v6h4.54Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M21.54 15H17V9l-5 6-5-6v6l-4.53.04"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M21.54 14.999c-1.28 4.06-5.07 7-9.54 7-4.46 0-8.24-2.92-9.53-6.96h.58l3.95-.04v-3.24c0-.92 1.15-1.35 1.75-.65l3.25 3.89 3.25-3.89c.6-.7 1.75-.27 1.75.65v3.24h4.54Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M22 12c0 1.05-.16 2.05-.46 3H17v-3.24c0-.92-1.15-1.35-1.75-.65L12 15l-3.25-3.89c-.6-.7-1.75-.27-1.75.65V15l-3.95.04h-.58C2.17 14.08 2 13.06 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M3.1 15H7V9l5 6 5-6v6h3.9"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M12 22.748c-4.7 0-8.82-3.01-10.24-7.48a.764.764 0 0 1 .11-.67c.14-.19.36-.31.6-.31l3.79-.03v-5.26c0-.32.2-.6.49-.71.3-.11.63-.02.83.23l4.42 5.31 4.42-5.31c.2-.24.54-.33.83-.23.3.11.49.39.49.71v5.25h3.79c.24 0 .46.11.6.31.14.19.18.44.11.67-1.4 4.5-5.53 7.52-10.24 7.52Zm-8.45-6.97a9.222 9.222 0 0 0 8.45 5.47 9.21 9.21 0 0 0 8.46-5.5H17c-.41 0-.75-.34-.75-.75v-3.93l-3.67 4.41c-.29.34-.87.34-1.15 0l-3.67-4.41v3.93c0 .41-.33.75-.74.75l-3.47.03Z"
      :fill="color"
    ></path>
    <path
      d="M2.47 15.79a.75.75 0 0 1-.72-.53c-.33-1.07-.5-2.17-.5-3.26C1.25 6.07 6.07 1.25 12 1.25S22.75 6.07 22.75 12c0 1.1-.17 2.19-.49 3.23-.1.31-.39.52-.72.52H17c-.41 0-.75-.34-.75-.75v-3.93l-3.67 4.41c-.29.34-.87.34-1.15 0l-3.67-4.41V15c0 .41-.33.75-.74.75l-4.55.04ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12c0 .76.1 1.53.29 2.29l3.21-.03V9c0-.32.2-.6.49-.71.3-.11.63-.02.83.23L12 13.83l4.42-5.31c.2-.24.54-.33.83-.23.3.11.49.39.49.71v5.25h3.22c.18-.73.28-1.49.28-2.25.01-5.1-4.14-9.25-9.24-9.25Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M21.54 15c-1.28 4.06-5.07 7-9.54 7-4.46 0-8.24-2.92-9.53-6.96L7 15V9l5 6 5-6v6h4.54Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M22 12c0 1.05-.16 2.05-.46 3H17V9l-5 6-5-6v6l-4.53.04C2.17 14.08 2 13.06 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10Z"
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
            default: "currentColor",
        },
    },
})
</script>