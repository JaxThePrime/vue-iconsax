<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M18 9.33v5.34c0 3.32-2.35 4.67-5.22 3.02l-1.28-.74c-.31-.18-.5-.51-.5-.87V7.92c0-.36.19-.69.5-.87l1.28-.74C15.65 4.66 18 6.01 18 9.33zM9.999 8.792v6.43c0 .39-.42.63-.75.43l-1.1-.64c-2.87-1.65-2.87-4.37 0-6.02l1.1-.64c.33-.19.75.05.75.44z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      :stroke-width="strokeWidth"
      d="M12.78 6.31C15.65 4.66 18 6.01 18 9.33v5.34c0 3.31-2.35 4.67-5.22 3.01l-2.31-1.34L8.16 15c-2.87-1.66-2.87-4.37 0-6.03"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      :fill="color"
      d="M18 9.33v5.34c0 3.32-2.35 4.67-5.22 3.02l-1.28-.74c-.31-.18-.5-.51-.5-.87V7.92c0-.36.19-.69.5-.87l1.28-.74C15.65 4.66 18 6.01 18 9.33z"
    ></path>
    <path
      :fill="color"
      d="M10 8.79v6.43c0 .39-.42.63-.75.43l-1.1-.64c-2.87-1.65-2.87-4.37 0-6.02l1.1-.64c.33-.19.75.05.75.44z"
      opacity=".4"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      :stroke-width="strokeWidth"
      d="M18 12v2.67c0 3.31-2.35 4.67-5.22 3.01l-2.31-1.34L8.16 15c-2.87-1.66-2.87-4.37 0-6.03l2.31-1.34 2.31-1.34C15.65 4.66 18 6.01 18 9.33V12z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      :fill="color"
      d="M15.1 19.15c-.84 0-1.76-.27-2.69-.81l-4.63-2.67c-1.63-.95-2.53-2.25-2.53-3.67s.9-2.72 2.53-3.66l4.63-2.67c1.63-.94 3.2-1.07 4.44-.36 1.23.71 1.91 2.14 1.91 4.02v5.34c0 1.88-.68 3.31-1.91 4.02-.53.31-1.12.46-1.75.46zm0-12.79c-.58 0-1.24.2-1.94.61L8.53 9.64c-1.15.66-1.78 1.5-1.78 2.36 0 .86.63 1.7 1.78 2.36l4.63 2.67c1.15.66 2.19.79 2.94.36.75-.43 1.16-1.4 1.16-2.72V9.33c0-1.32-.41-2.29-1.16-2.72-.3-.17-.64-.25-1-.25z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      :stroke-width="strokeWidth"
      d="M18 12v2.67c0 3.31-2.35 4.67-5.22 3.01l-2.31-1.34L8.16 15c-2.87-1.66-2.87-4.37 0-6.03l2.31-1.34 2.31-1.34C15.65 4.66 18 6.01 18 9.33V12z"
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