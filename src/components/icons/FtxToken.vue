<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M21 2H9c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM11 17H8c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zM6 9.5H3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zM17 9.64h-6.5c-.55 0-1 .45-1 1v2.72c0 .55.45 1 1 1H17c.55 0 1-.45 1-1v-2.72c0-.55-.45-1-1-1z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M21 2H9c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1ZM12 17H7v5h5v-5ZM7 9.5H2v5h5v-5ZM17 14.36h1V9.64H9.5v4.72h3.42"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M21 2H9c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1ZM11 17H8c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M6 9.5H3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1ZM17 9.64h-6.5c-.55 0-1 .45-1 1v2.72c0 .55.45 1 1 1H17c.55 0 1-.45 1-1v-2.72c0-.55-.45-1-1-1Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M21 2H9c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1ZM12 17H7v5h5v-5ZM7 9.5H2v5h5v-5ZM18 9.6H9.5v4.7H18V9.6Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M21 7.75H9c-.96 0-1.75-.79-1.75-1.75V3c0-.96.79-1.75 1.75-1.75h12c.96 0 1.75.79 1.75 1.75v3c0 .96-.79 1.75-1.75 1.75Zm-12-5c-.14 0-.25.11-.25.25v3c0 .14.11.25.25.25h12c.14 0 .25-.11.25-.25V3c0-.14-.11-.25-.25-.25H9ZM12 22.75H7c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75Zm-4.25-1.5h3.5v-3.5h-3.5v3.5ZM7 15.25H2c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75Zm-4.25-1.5h3.5v-3.5h-3.5v3.5ZM18 15.11H9.5c-.41 0-.75-.34-.75-.75V9.64c0-.41.34-.75.75-.75H18c.41 0 .75.34.75.75v4.72c0 .42-.34.75-.75.75Zm-7.75-1.5h7v-3.22h-7v3.22Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M21 2H9c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1ZM12 17H7v5h5v-5Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M7 9.5H2v5h5v-5ZM18 9.64H9.5v4.72H18V9.64Z"
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