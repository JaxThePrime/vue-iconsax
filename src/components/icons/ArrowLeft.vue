<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM18 12.75H7.81l3.01 3.01c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-4.29-4.29a.75.75 0 010-1.06l4.29-4.29c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.01 3.01H18c.41 0 .75.34.75.75s-.34.75-.75.75z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      :stroke-width="strokeWidth"
      d="M9.57 5.93L3.5 12l6.07 6.07M12.82 12H3.5M20.33 12h-3.48"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      :fill="color"
      d="M7.81 2h8.37C19.83 2 22 4.17 22 7.81v8.37c0 3.64-2.17 5.81-5.81 5.81H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2z"
      opacity=".4"
    ></path>
    <path
      :fill="color"
      d="M5.47 11.47l4.29-4.29c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.01 3.01H18c.41 0 .75.34.75.75s-.34.75-.75.75H7.81l3.01 3.01c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-4.29-4.29a.75.75 0 010-1.06z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      :stroke-width="strokeWidth"
      d="M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      :fill="color"
      d="M9.57 18.82c-.19 0-.38-.07-.53-.22l-6.07-6.07a.754.754 0 010-1.06L9.04 5.4c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L4.56 12l5.54 5.54c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22z"
    ></path>
    <path
      :fill="color"
      d="M20.5 12.75H3.67c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H20.5c.41 0 .75.34.75.75s-.34.75-.75.75z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      :stroke-width="strokeWidth"
      d="M9.57 5.93L3.5 12l6.07 6.07"
    ></path>
    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      :stroke-width="strokeWidth"
      d="M20.5 12H3.67"
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