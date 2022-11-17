<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      opacity=".97"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM8.31 16.31C7.59 16.31 7 15.72 7 15c0-.72.59-1.31 1.31-1.31.72 0 1.31.59 1.31 1.31 0 .72-.59 1.31-1.31 1.31Zm3.69-6c-.72 0-1.31-.59-1.31-1.31 0-.72.59-1.31 1.31-1.31.72 0 1.31.59 1.31 1.31 0 .72-.59 1.31-1.31 1.31Zm3.69 6c-.72 0-1.31-.59-1.31-1.31 0-.72.59-1.31 1.31-1.31.72 0 1.31.59 1.31 1.31 0 .72-.59 1.31-1.31 1.31Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M9.84 7.16c0 1.19.97 2.16 2.16 2.16 1.19 0 2.16-.97 2.16-2.16C14.16 5.97 13.19 5 12 5M6.79 19c1.19 0 2.16-.97 2.16-2.16 0-1.19-.97-2.16-2.16-2.16-1.19 0-2.16.97-2.16 2.16 0 1.19.96 2.16 2.16 2.16ZM17.21 19c1.19 0 2.16-.97 2.16-2.16 0-1.19-.97-2.16-2.16-2.16-1.19 0-2.16.97-2.16 2.16 0 1.19.97 2.16 2.16 2.16Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      :fill="color"
    ></path>
    <path
      opacity=".97"
      d="M12 10.311a1.31 1.31 0 1 0 0-2.62 1.31 1.31 0 0 0 0 2.62ZM8.31 13.691c-.72 0-1.31.59-1.31 1.31 0 .72.59 1.31 1.31 1.31.72 0 1.31-.59 1.31-1.31 0-.72-.59-1.31-1.31-1.31ZM15.69 13.691c-.72 0-1.31.59-1.31 1.31 0 .72.59 1.31 1.31 1.31.72 0 1.31-.59 1.31-1.31 0-.72-.59-1.31-1.31-1.31Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M12 9.32c1.19 0 2.16-.97 2.16-2.16C14.16 5.97 13.19 5 12 5c-1.19 0-2.16.97-2.16 2.16 0 1.19.97 2.16 2.16 2.16ZM6.79 19c1.19 0 2.16-.97 2.16-2.16 0-1.19-.97-2.16-2.16-2.16-1.19 0-2.16.97-2.16 2.16 0 1.19.96 2.16 2.16 2.16ZM17.21 19c1.19 0 2.16-.97 2.16-2.16 0-1.19-.97-2.16-2.16-2.16-1.19 0-2.16.97-2.16 2.16 0 1.19.97 2.16 2.16 2.16Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M12 10.07a2.92 2.92 0 0 1-2.91-2.91c0-1.6 1.31-2.91 2.91-2.91s2.91 1.31 2.91 2.91-1.31 2.91-2.91 2.91Zm0-4.32c-.78 0-1.41.63-1.41 1.41 0 .78.63 1.41 1.41 1.41.78 0 1.41-.63 1.41-1.41 0-.78-.63-1.41-1.41-1.41ZM6.79 19.75a2.92 2.92 0 0 1-2.91-2.91c0-1.6 1.31-2.91 2.91-2.91s2.91 1.31 2.91 2.91-1.31 2.91-2.91 2.91Zm0-4.32c-.78 0-1.41.63-1.41 1.41 0 .78.63 1.41 1.41 1.41.78 0 1.41-.63 1.41-1.41 0-.78-.64-1.41-1.41-1.41ZM17.21 19.75a2.92 2.92 0 0 1-2.91-2.91c0-1.6 1.31-2.91 2.91-2.91s2.91 1.31 2.91 2.91-1.3 2.91-2.91 2.91Zm0-4.32c-.78 0-1.41.63-1.41 1.41 0 .78.63 1.41 1.41 1.41.78 0 1.41-.63 1.41-1.41 0-.78-.63-1.41-1.41-1.41Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M12 9.32c1.19 0 2.16-.97 2.16-2.16C14.16 5.97 13.19 5 12 5c-1.19 0-2.16.97-2.16 2.16 0 1.19.97 2.16 2.16 2.16Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M6.79 19c1.19 0 2.16-.97 2.16-2.16 0-1.19-.97-2.16-2.16-2.16-1.19 0-2.16.97-2.16 2.16 0 1.19.96 2.16 2.16 2.16Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17.21 19c1.19 0 2.16-.97 2.16-2.16 0-1.19-.97-2.16-2.16-2.16-1.19 0-2.16.97-2.16 2.16 0 1.19.97 2.16 2.16 2.16Z"
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