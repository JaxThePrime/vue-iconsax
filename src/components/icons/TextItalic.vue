<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M20.95 4.13c-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2H7.81c-.2 0-.4.01-.59.03C3.94 2.24 2 4.37 2 7.81v8.38c0 1.49.36 2.73 1.05 3.68.29.42.66.79 1.08 1.08.82.6 1.86.95 3.09 1.03.19.01.39.02.59.02h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-1.49-.36-2.73-1.05-3.68Zm-5.08 3.38h-1.95l-2.24 8.97h1.84c.41 0 .75.34.75.75s-.34.75-.75.75H8.13c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2l2.24-8.97h-1.89c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.38c.41 0 .75.34.75.75s-.33.75-.74.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M9.621 3h9.25M5.121 21h9.25M10.5 17.988l-.75 3.01M14.25 3 11.5 14.01"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M22 7.81v8.38c0 3.64-2.17 5.81-5.81 5.81H7.81c-.2 0-.4-.01-.59-.02-1.23-.08-2.27-.43-3.09-1.03-.42-.29-.79-.66-1.08-1.08C2.36 18.92 2 17.68 2 16.19V7.81c0-3.44 1.94-5.57 5.22-5.78.19-.02.39-.03.59-.03h8.38c1.49 0 2.73.36 3.68 1.05.42.29.79.66 1.08 1.08.69.95 1.05 2.19 1.05 3.68Z"
      :fill="color"
    ></path>
    <path
      d="M15.87 6.012h-5.38c-.41 0-.75.34-.75.75s.34.75.75.75h1.89l-2.24 8.97h-2c-.41 0-.75.34-.75.75s.34.75.75.75h5.38c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.84l2.24-8.97h1.95c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M9.62 3h9.25M5.12 21h9.25M14.25 3l-4.5 18"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M18.879 3.75h-9.26c-.41 0-.74-.34-.74-.75s.34-.75.75-.75h9.25c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.381 21.75h-9.26c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.25c.41 0 .75.34.75.75s-.33.75-.74.75Z"
      :fill="color"
    ></path>
    <path
      d="M9.748 21.748c-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91l4.5-18a.75.75 0 1 1 1.46.36l-4.5 18c-.09.34-.39.57-.73.57Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M9.621 3h9.25M5.121 21h9.25"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="m14.25 3-4.5 18"
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