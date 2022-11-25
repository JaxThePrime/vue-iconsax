<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M17.71 2h-.95a.715.715 0 0 0 0 1.43h.95a3.1 3.1 0 0 1 3.1 3.09v5.88c-.36-.19-.76-.29-1.19-.29h-3.81c-1.44 0-2.62 1.17-2.62 2.62v1.56h-2.38v-1.56c0-1.45-1.18-2.62-2.62-2.62H4.38c-.43 0-.83.1-1.19.29V6.52a3.1 3.1 0 0 1 3.1-3.09h.95a.715.715 0 0 0 0-1.43h-.95a4.53 4.53 0 0 0-4.53 4.52V19.38c0 1.45 1.18 2.62 2.62 2.62h3.81c1.44 0 2.62-1.17 2.62-2.62v-1.67h2.38v1.67c0 1.45 1.18 2.62 2.62 2.62h3.81c1.44 0 2.62-1.17 2.62-2.62V6.52A4.53 4.53 0 0 0 17.71 2Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M10 17.5h4M2 17.5v-10c0-4 1-5 5-5M22 17.5v-10c0-4-1-5-5-5"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M10 15.91v3.29c0 2-.8 2.8-2.8 2.8H4.8c-2 0-2.8-.8-2.8-2.8v-3.29c0-2 .8-2.8 2.8-2.8h2.4M22 15.91v3.29c0 2-.8 2.8-2.8 2.8h-2.4c-2 0-2.8-.8-2.8-2.8v-3.29c0-2 .8-2.8 2.8-2.8h2.4c2 0 2.8.8 2.8 2.8Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M13.19 16.29h-2.38v1.42h2.38v-1.42ZM7.95 2.71c0 .4-.32.72-.71.72h-.95a3.1 3.1 0 0 0-3.1 3.09v5.88c-.85.43-1.43 1.31-1.43 2.33V6.52A4.53 4.53 0 0 1 6.29 2h.95c.39 0 .71.32.71.71ZM22.24 6.52v8.21c0-1.02-.58-1.9-1.43-2.33V6.52a3.1 3.1 0 0 0-3.1-3.09h-.95a.715.715 0 0 1 0-1.43h.95c2.5 0 4.53 2.03 4.53 4.52Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M10.81 14.73v4.65c0 1.45-1.18 2.62-2.62 2.62H4.38c-1.44 0-2.62-1.17-2.62-2.62v-4.65c0-1.02.58-1.9 1.43-2.33.36-.19.76-.29 1.19-.29h3.81c1.44 0 2.62 1.17 2.62 2.62ZM22.24 14.73v4.65c0 1.45-1.18 2.62-2.62 2.62h-3.81c-1.44 0-2.62-1.17-2.62-2.62v-4.65c0-1.45 1.18-2.62 2.62-2.62h3.81c.43 0 .83.1 1.19.29.85.43 1.43 1.31 1.43 2.33Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M10 17.5h4M2 17.5v-10c0-4 1-5 5-5M22 17.5v-10c0-4-1-5-5-5"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M10 15.91v3.29c0 2-.8 2.8-2.8 2.8H4.8c-2 0-2.8-.8-2.8-2.8v-3.29c0-2 .8-2.8 2.8-2.8h2.4c2 0 2.8.8 2.8 2.8ZM22 15.91v3.29c0 2-.8 2.8-2.8 2.8h-2.4c-2 0-2.8-.8-2.8-2.8v-3.29c0-2 .8-2.8 2.8-2.8h2.4c2 0 2.8.8 2.8 2.8Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M14 18.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM2 18.25c-.41 0-.75-.34-.75-.75v-10c0-4.41 1.34-5.75 5.75-5.75.41 0 .75.34.75.75s-.34.75-.75.75c-3.57 0-4.25.67-4.25 4.25v10c0 .41-.34.75-.75.75ZM22 18.25c-.41 0-.75-.34-.75-.75v-10c0-3.58-.68-4.25-4.25-4.25-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.41 0 5.75 1.34 5.75 5.75v10c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M7.2 22.75H4.8c-2.42 0-3.55-1.13-3.55-3.55v-3.29c0-2.42 1.13-3.55 3.55-3.55h2.4c2.42 0 3.55 1.13 3.55 3.55v3.29c0 2.42-1.13 3.55-3.55 3.55Zm-2.4-8.89c-1.59 0-2.05.46-2.05 2.05v3.29c0 1.59.46 2.05 2.05 2.05h2.4c1.59 0 2.05-.46 2.05-2.05v-3.29c0-1.59-.46-2.05-2.05-2.05H4.8ZM19.2 22.75h-2.4c-2.42 0-3.55-1.13-3.55-3.55v-3.29c0-2.42 1.13-3.55 3.55-3.55h2.4c2.42 0 3.55 1.13 3.55 3.55v3.29c0 2.42-1.13 3.55-3.55 3.55Zm-2.4-8.89c-1.59 0-2.05.46-2.05 2.05v3.29c0 1.59.46 2.05 2.05 2.05h2.4c1.59 0 2.05-.46 2.05-2.05v-3.29c0-1.59-.46-2.05-2.05-2.05h-2.4Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      opacity=".4"
      d="M10 17.5h4M2 17.5v-10c0-4 1-5 5-5M22 17.5v-10c0-4-1-5-5-5"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M10 15.91v3.29c0 2-.8 2.8-2.8 2.8H4.8c-2 0-2.8-.8-2.8-2.8v-3.29c0-2 .8-2.8 2.8-2.8h2.4c2 0 2.8.8 2.8 2.8ZM22 15.91v3.29c0 2-.8 2.8-2.8 2.8h-2.4c-2 0-2.8-.8-2.8-2.8v-3.29c0-2 .8-2.8 2.8-2.8h2.4c2 0 2.8.8 2.8 2.8Z"
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