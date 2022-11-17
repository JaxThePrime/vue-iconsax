<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M19.88 2H4.11c-.6 0-1.06.52-.99 1.11l1.8 16.22c.04.4.33.74.72.85l6.08 1.74c.18.05.37.05.55 0l6.08-1.74c.39-.11.67-.45.72-.85l1.8-16.22A.993.993 0 0019.88 2zm-3.63 5.5H8.59l.33 3h6.83c.21 0 .41.09.56.25.14.16.21.37.19.58l-.5 5c-.03.31-.24.56-.54.65l-3.5 1a.762.762 0 01-.42 0l-3.5-1a.75.75 0 01-.54-.72v-2c0-.41.34-.75.75-.75s.75.34.75.75v1.43l2.75.79 2.8-.8.37-3.67H8.25c-.38 0-.7-.29-.75-.67L7 6.84c-.02-.21.04-.42.19-.58a.75.75 0 01.56-.25h8.5c.41 0 .75.34.75.75s-.34.74-.75.74z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="m3.32 4.91-.2-1.8c-.07-.59.4-1.11.99-1.11h15.77c.6 0 1.06.52.99 1.11l-1.8 16.22c-.04.4-.33.74-.72.85l-6.08 1.74c-.18.05-.37.05-.55 0l-6.08-1.74a1.01 1.01 0 0 1-.72-.85l-1.1-9.92"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M16.25 6.75h-8.5l.5 4.5h7.5l-.5 5-3.5 1-3.5-1v-2"
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
      d="M4.12 2h15.77c.6 0 1.06.52.99 1.11l-1.8 16.22c-.04.4-.33.74-.72.85l-6.08 1.74c-.18.05-.37.05-.55 0l-6.08-1.74a1.01 1.01 0 0 1-.72-.85L3.13 3.11A.993.993 0 0 1 4.12 2Z"
      :fill="color"
    ></path>
    <path
      d="M11.75 18c-.07 0-.14-.01-.21-.03l-3.5-1a.75.75 0 0 1-.54-.72v-2c0-.41.34-.75.75-.75s.75.34.75.75v1.43l2.75.79 2.8-.8.37-3.67H8.25c-.38 0-.7-.29-.75-.67L7 6.83c-.02-.21.04-.42.19-.58A.75.75 0 0 1 7.75 6h8.5c.41 0 .75.34.75.75s-.34.75-.75.75H8.59l.33 3h6.83c.21 0 .41.09.56.25.14.16.21.37.19.58l-.5 5c-.03.31-.24.56-.54.65l-3.5 1c-.07.01-.14.02-.21.02Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M4.1 2h15.8c.6 0 1.1.5 1 1.1l-1.8 16.2c0 .4-.3.7-.7.9l-6.1 1.7c-.2.1-.4.1-.5 0l-6.1-1.7c-.4-.1-.7-.4-.7-.9L3.1 3.1c0-.6.4-1.1 1-1.1Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M16.2 6.8H7.8l.4 4.4h7.6l-.6 5-3.4 1-3.6-1v-2"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M12 22.71c-.16 0-.32-.02-.48-.07L5.44 20.9c-.69-.2-1.18-.78-1.26-1.49L2.38 3.19a1.751 1.751 0 0 1 1.74-1.94h15.77c.5 0 .97.21 1.3.58.33.37.49.87.44 1.36l-1.8 16.22c-.08.71-.57 1.29-1.26 1.49l-6.08 1.74c-.17.05-.33.07-.49.07ZM4.12 2.75c-.1 0-.16.05-.19.08a.24.24 0 0 0-.06.19l1.8 16.22c.01.1.08.19.18.21l6.08 1.74c.04.01.09.01.14 0l6.08-1.74c.1-.03.17-.11.18-.21l1.8-16.22c.01-.1-.04-.16-.06-.19a.26.26 0 0 0-.19-.08H4.12Z"
      :fill="color"
    ></path>
    <path
      d="M11.75 18c-.07 0-.14-.01-.21-.03l-3.5-1a.75.75 0 0 1-.54-.72v-2c0-.41.34-.75.75-.75s.75.34.75.75v1.43l2.75.79 2.8-.8.37-3.67H8.25c-.38 0-.7-.29-.75-.67L7 6.83c-.02-.21.04-.42.19-.58A.75.75 0 0 1 7.75 6h8.5c.41 0 .75.34.75.75s-.34.75-.75.75H8.59l.33 3h6.83c.21 0 .41.09.56.25.14.16.21.37.19.58l-.5 5c-.03.31-.24.56-.54.65l-3.5 1c-.07.01-.14.02-.21.02Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M4.12 2h15.77c.6 0 1.06.52.99 1.11l-1.8 16.22c-.04.4-.33.74-.72.85l-6.08 1.74c-.18.05-.37.05-.55 0l-6.08-1.74a1.01 1.01 0 0 1-.72-.85L3.13 3.11A.993.993 0 0 1 4.12 2Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M16.25 6.75h-8.5l.5 4.5h7.5l-.5 5-3.5 1-3.5-1v-2"
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