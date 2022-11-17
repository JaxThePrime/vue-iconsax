<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M16 12.692v5.39c0 2.34-1.56 3.89-3.89 3.89H5.89c-2.33 0-3.89-1.55-3.89-3.89v-7.77c0-2.34 1.56-3.89 3.89-3.89h3.83c1.03 0 2.02.41 2.75 1.14l2.39 2.38c.73.73 1.14 1.72 1.14 2.75Z"
      :fill="color"
    ></path>
    <path
      d="M22 8.249v5.39c0 2.33-1.56 3.89-3.89 3.89H17v-4.84c0-1.29-.52-2.55-1.43-3.46l-2.39-2.38a4.923 4.923 0 0 0-3.46-1.43h-1.7c.18-2.08 1.69-3.45 3.87-3.45h3.83c1.03 0 2.02.41 2.75 1.14l2.39 2.39A3.89 3.89 0 0 1 22 8.249Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M2 14.032v-3.72c0-2.34 1.56-3.89 3.89-3.89h3.83c1.03 0 2.02.41 2.75 1.14l2.39 2.38c.73.73 1.14 1.72 1.14 2.75v5.39c0 2.34-1.56 3.89-3.89 3.89H5.89c-2.33 0-3.89-1.55-3.89-3.89"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M22 8.249v5.39c0 2.33-1.56 3.89-3.89 3.89H16v-4.84c0-1.03-.41-2.02-1.14-2.75l-2.39-2.38a3.89 3.89 0 0 0-2.75-1.14H8v-.56c0-2.33 1.56-3.89 3.89-3.89h3.83c1.03 0 2.02.41 2.75 1.14l2.39 2.39A3.89 3.89 0 0 1 22 8.249Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M16 12.692v5.39c0 2.34-1.56 3.89-3.89 3.89H5.89c-2.33 0-3.89-1.55-3.89-3.89v-7.77c0-2.34 1.56-3.89 3.89-3.89h3.83c1.03 0 2.02.41 2.75 1.14l2.39 2.38c.73.73 1.14 1.72 1.14 2.75Z"
      :fill="color"
    ></path>
    <path
      d="M22 8.249v5.39c0 2.33-1.56 3.89-3.89 3.89H16v-4.84c0-1.03-.41-2.02-1.14-2.75l-2.39-2.38a3.89 3.89 0 0 0-2.75-1.14H8v-.56c0-2.33 1.56-3.89 3.89-3.89h3.83c1.03 0 2.02.41 2.75 1.14l2.39 2.39A3.89 3.89 0 0 1 22 8.249Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M16 12.69v5.39c0 2.34-1.56 3.89-3.89 3.89H5.89C3.56 21.97 2 20.42 2 18.08v-7.77c0-2.34 1.56-3.89 3.89-3.89h3.83c1.03 0 2.02.41 2.75 1.14l2.39 2.38A3.89 3.89 0 0 1 16 12.69Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M22 8.25v5.39c0 2.33-1.56 3.89-3.89 3.89H16v-4.84c0-1.03-.41-2.02-1.14-2.75l-2.39-2.38a3.89 3.89 0 0 0-2.75-1.14H8v-.56c0-2.33 1.56-3.89 3.89-3.89h3.83c1.03 0 2.02.41 2.75 1.14l2.39 2.39A3.89 3.89 0 0 1 22 8.25Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M12.11 22.722H5.89c-2.73 0-4.64-1.91-4.64-4.64v-7.77c0-2.73 1.91-4.64 4.64-4.64h3.83c1.22 0 2.42.5 3.28 1.36l2.39 2.38c.87.87 1.36 2.06 1.36 3.28v5.39c0 2.73-1.91 4.64-4.64 4.64ZM5.89 7.172c-1.91 0-3.14 1.23-3.14 3.14v7.77c0 1.91 1.23 3.14 3.14 3.14h6.22c1.91 0 3.14-1.23 3.14-3.14v-5.39c0-.83-.34-1.63-.92-2.22l-2.39-2.38a3.16 3.16 0 0 0-2.22-.92H5.89Z"
      :fill="color"
    ></path>
    <path
      d="M18.11 18.279H16c-.41 0-.75-.34-.75-.75v-4.84c0-.83-.34-1.63-.92-2.22l-2.39-2.38a3.16 3.16 0 0 0-2.22-.92H8c-.41 0-.75-.34-.75-.75v-.56c0-2.73 1.91-4.64 4.64-4.64h3.83c1.22 0 2.42.5 3.28 1.36l2.39 2.39c.88.88 1.36 2.04 1.36 3.28v5.39c0 2.73-1.91 4.64-4.64 4.64Zm-1.36-1.5h1.36c1.91 0 3.14-1.23 3.14-3.14v-5.39c0-.84-.33-1.63-.92-2.22l-2.39-2.39c-.58-.58-1.39-.92-2.22-.92h-3.83c-1.84 0-3.06 1.15-3.14 2.95h.97c1.22 0 2.42.5 3.28 1.36l2.39 2.38c.87.87 1.36 2.06 1.36 3.28v4.09Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M16 12.692v5.39c0 2.34-1.56 3.89-3.89 3.89H5.89c-2.33 0-3.89-1.55-3.89-3.89v-7.77c0-2.34 1.56-3.89 3.89-3.89h3.83c1.03 0 2.02.41 2.75 1.14l2.39 2.38c.73.73 1.14 1.72 1.14 2.75Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M22 8.249v5.39c0 2.33-1.56 3.89-3.89 3.89H16v-4.84c0-1.03-.41-2.02-1.14-2.75l-2.39-2.38a3.89 3.89 0 0 0-2.75-1.14H8v-.56c0-2.33 1.56-3.89 3.89-3.89h3.83c1.03 0 2.02.41 2.75 1.14l2.39 2.39A3.89 3.89 0 0 1 22 8.249Z"
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