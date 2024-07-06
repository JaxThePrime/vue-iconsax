<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M4.71 18.191c.1.04.19.06.29.06h10.27c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H6.81l12.72-12.72c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0L5.75 15.691v-8.46c0-.41-.34-.75-.75-.75s-.75.34-.75.75v10.27c0 .1.02.19.06.29.07.18.22.33.4.4zM20.5 21.25h-17c-.41 0-.75.34-.75.75s.34.75.75.75h17c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      :stroke-width="strokeWidth"
      d="M16.59 5.91L19 3.5M5 17.5l8.38-8.38M5 7.23V17.5h10.27M3.5 22h17"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      :fill="color"
      d="M4.998 18.2c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l14-14c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-14 14c-.2.2-.4.2-.6.2z"
    ></path>
    <path
      :fill="color"
      d="M15.3 18.2H5c-.4 0-.8-.3-.8-.8V7.2c0-.4.3-.8.8-.8s.8.3.8.8v9.5h9.5c.4 0 .8.3.8.8s-.4.7-.8.7z"
    ></path>
    <path
      :fill="color"
      d="M20.5 22.8h-17c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h17c.4 0 .8.3.8.8s-.4.8-.8.8z"
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
      d="M5 17.5l14-14M5 7.23V17.5h10.27M3.5 22h17"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      :fill="color"
      d="M5 18.25c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l14-14c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-14 14c-.15.15-.34.22-.53.22z"
    ></path>
    <path
      :fill="color"
      d="M15.27 18.25H5c-.41 0-.75-.34-.75-.75V7.23c0-.41.34-.75.75-.75s.75.34.75.75v9.52h9.52c.41 0 .75.34.75.75s-.34.75-.75.75zM20.5 22.75h-17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      :stroke-width="strokeWidth"
      d="M5 17.5l14-14M5 7.23V17.5h10.27"
    ></path>
    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      :stroke-width="strokeWidth"
      d="M3.5 22h17"
      opacity=".4"
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