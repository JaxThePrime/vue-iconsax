<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M14.5 18h-11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11c3.45 0 6.25-2.8 6.25-6.25S17.95 4 14.5 4h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c4.27 0 7.75 3.48 7.75 7.75S18.77 18 14.5 18z"
    ></path>
    <path
      :fill="color"
      d="M13.81 14.892H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.81c1.62 0 2.94-1.32 2.94-2.94 0-1.62-1.32-2.94-2.94-2.94H3.17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.64c2.45 0 4.44 1.99 4.44 4.44s-1.99 4.44-4.44 4.44z"
    ></path>
    <path
      :fill="color"
      d="M8.5 11.5h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75zM6.5 21.5h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M19.72 14.898a6.977 6.977 0 0 1-5.22 2.35h-11M9.5 3.25h5c3.85 0 7 3.15 7 7M3.17 6.75h10.64a3.7 3.7 0 0 1 3.69 3.69 3.7 3.7 0 0 1-3.69 3.69H8M8.5 10.75h-3M6.5 20.75h-4"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M14.5 18h-11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11c3.45 0 6.25-2.8 6.25-6.25S17.95 4 14.5 4h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c4.27 0 7.75 3.48 7.75 7.75S18.77 18 14.5 18Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M13.81 14.89H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.81c1.62 0 2.94-1.32 2.94-2.94 0-1.62-1.32-2.94-2.94-2.94H3.17a.755.755 0 0 1 0-1.51h10.64c2.45 0 4.44 1.99 4.44 4.44s-1.99 4.45-4.44 4.45Z"
      :fill="color"
    ></path>
    <path
      d="M8.5 11.5h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M6.5 21.5h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M9.5 3.2h5c3.8 0 7 3.1 7 7 0 3.8-3.1 7-7 7h-11"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M3.2 6.8h10.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H8M8.5 10.8h-3M6.5 20.8h-4"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M14.5 18h-11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11c3.45 0 6.25-2.8 6.25-6.25S17.95 4 14.5 4h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c4.27 0 7.75 3.48 7.75 7.75S18.77 18 14.5 18Z"
      :fill="color"
    ></path>
    <path
      d="M13.81 14.892H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.81c1.62 0 2.94-1.32 2.94-2.94 0-1.62-1.32-2.94-2.94-2.94H3.17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.64c2.45 0 4.44 1.99 4.44 4.44s-1.99 4.44-4.44 4.44Z"
      :fill="color"
    ></path>
    <path
      d="M8.5 11.5h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM6.5 21.5h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M9.5 3.25h5c3.85 0 7 3.15 7 7s-3.15 7-7 7h-11"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M3.17 6.75h10.64a3.7 3.7 0 0 1 3.69 3.69 3.7 3.7 0 0 1-3.69 3.69H8M8.5 10.75h-3M6.5 20.75h-4"
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