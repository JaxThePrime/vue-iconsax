<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M17.39 15.67 13.35 12h-2.71L6.6 15.67a3.602 3.602 0 0 0-.95 4.01A3.63 3.63 0 0 0 9.05 22h5.89c1.52 0 2.85-.91 3.4-2.32.55-1.42.18-2.99-.95-4.01Zm-3.57 2.47h-3.64a.68.68 0 0 1-.68-.68c0-.37.31-.68.68-.68h3.64c.38 0 .68.31.68.68 0 .37-.31.68-.68.68ZM18.35 4.32A3.63 3.63 0 0 0 14.95 2h-5.9a3.63 3.63 0 0 0-2.44 6.33L10.65 12h2.71l4.04-3.67a3.635 3.635 0 0 0 .95-4.01Zm-4.53 2.91h-3.64a.68.68 0 0 1-.68-.68c0-.37.31-.68.68-.68h3.64c.38 0 .68.31.68.68 0 .37-.31.68-.68.68Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="m9.61 9.83 7.65 6.95C19.29 18.62 19 22 15.24 22H8.76C5 22 4.71 18.62 6.74 16.78l10.52-9.56C19.29 5.38 19 2 15.24 2H8.76C5 2 4.71 5.38 6.74 7.22"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M18.35 19.68a3.63 3.63 0 0 1-3.4 2.32h-5.9a3.62 3.62 0 0 1-3.4-2.32c-.55-1.42-.17-2.99.95-4.01L10.65 12h2.71l4.04 3.67a3.635 3.635 0 0 1 .95 4.01Z"
      :fill="color"
    ></path>
    <path
      d="M13.82 18.141h-3.64a.68.68 0 0 1 0-1.36h3.64c.38 0 .68.31.68.68 0 .37-.31.68-.68.68ZM18.35 4.32A3.63 3.63 0 0 0 14.95 2h-5.9a3.63 3.63 0 0 0-2.44 6.33L10.65 12h2.71l4.04-3.67a3.635 3.635 0 0 0 .95-4.01Zm-4.53 2.91h-3.64a.68.68 0 0 1-.68-.68c0-.37.31-.68.68-.68h3.64c.38 0 .68.31.68.68 0 .37-.31.68-.68.68Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M15.24 2H8.76C5 2 4.71 5.38 6.74 7.22l10.52 9.56C19.29 18.62 19 22 15.24 22H8.76C5 22 4.71 18.62 6.74 16.78l10.52-9.56C19.29 5.38 19 2 15.24 2Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M15.24 22.75H8.76c-1.89 0-3.27-.79-3.8-2.15-.55-1.42-.04-3.18 1.28-4.37L10.88 12 6.24 7.77C4.92 6.58 4.41 4.82 4.96 3.4c.53-1.37 1.91-2.15 3.8-2.15h6.48c1.89 0 3.27.79 3.8 2.15.55 1.42.04 3.18-1.28 4.37L13.12 12l4.65 4.23c1.31 1.19 1.83 2.95 1.28 4.37-.54 1.36-1.92 2.15-3.81 2.15ZM12 13.01l-4.75 4.32c-.84.77-1.21 1.89-.89 2.72.3.77 1.15 1.2 2.4 1.2h6.48c1.25 0 2.1-.42 2.4-1.2.32-.83-.04-1.95-.89-2.72L12 13.01ZM8.76 2.75c-1.25 0-2.1.42-2.4 1.2-.32.83.04 1.95.89 2.72L12 10.99l4.75-4.32c.84-.77 1.21-1.89.89-2.72-.3-.77-1.15-1.2-2.4-1.2H8.76Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M15.24 2H8.76C5 2 4.71 5.38 6.74 7.22l10.52 9.56C19.29 18.62 19 22 15.24 22H8.76C5 22 4.71 18.62 6.74 16.78l10.52-9.56C19.29 5.38 19 2 15.24 2Z"
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