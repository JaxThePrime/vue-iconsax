<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="m19.54 6.54-3.07-3.07A5.003 5.003 0 0 0 12.93 2H8C5 2 3 4 3 7v10c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93c0-1.33-.53-2.6-1.46-3.53ZM11.5 18a.5.5 0 0 1-.5.5h-1c-1.65 0-3-1.35-3-3V15a.5.5 0 0 1 .5-.5h3.75c.14 0 .25.11.25.25V18Zm0-4.75c0 .14-.11.25-.25.25H7.5A.5.5 0 0 1 7 13v-.5c0-1.65 1.35-3 3-3h1a.5.5 0 0 1 .5.5v3.25ZM17 15.5c0 1.65-1.35 3-3 3h-1a.5.5 0 0 1-.5-.5v-3.25c0-.14.11-.25.25-.25h3.75a.5.5 0 0 1 .5.5v.5Zm0-2.5a.5.5 0 0 1-.5.5h-3.75c-.14 0-.25-.11-.25-.25V10a.5.5 0 0 1 .5-.5h1c1.65 0 3 1.35 3 3v.5Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M3 17c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93c0-1.33-.53-2.6-1.46-3.54l-3.07-3.07A5.036 5.036 0 0 0 12.93 2H8C5 2 3 4 3 7v5.98"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M10 18.5h4c1.65 0 3-1.35 3-3v-3c0-1.65-1.35-3-3-3h-4c-1.65 0-3 1.35-3 3v3c0 1.65 1.35 3 3 3ZM12 9.5v9M7.5 14h9"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="m19.54 6.54-3.07-3.07A5.003 5.003 0 0 0 12.93 2H8C5 2 3 4 3 7v10c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93c0-1.33-.53-2.6-1.46-3.53Z"
      :fill="color"
    ></path>
    <path
      d="M11.5 13.25V9.5H10c-1.65 0-3 1.35-3 3v1h4.25c.14 0 .25-.11.25-.25ZM12.75 13.5H17v-1c0-1.65-1.35-3-3-3h-1.5v3.75c0 .14.11.25.25.25ZM11.25 14.5H7v1c0 1.65 1.35 3 3 3h1.5v-3.75c0-.14-.11-.25-.25-.25ZM12.5 14.75v3.75H14c1.65 0 3-1.35 3-3v-1h-4.25c-.14 0-.25.11-.25.25Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="m19.54 6.54-3.07-3.07A5.003 5.003 0 0 0 12.93 2H8C5 2 3 4 3 7v10c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93c0-1.33-.53-2.6-1.46-3.53Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M10 18.5h4c1.65 0 3-1.35 3-3v-3c0-1.65-1.35-3-3-3h-4c-1.65 0-3 1.35-3 3v3c0 1.65 1.35 3 3 3ZM12 9.5v9M7.5 14h9"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M16 22.75H8c-3.44 0-5.75-2.31-5.75-5.75V7c0-3.44 2.31-5.75 5.75-5.75h4.93c1.54 0 2.98.6 4.07 1.68L20.07 6a5.684 5.684 0 0 1 1.68 4.07V17c0 3.44-2.31 5.75-5.75 5.75Zm-8-20C5.42 2.75 3.75 4.42 3.75 7v10c0 2.58 1.67 4.25 4.25 4.25h8c2.58 0 4.25-1.67 4.25-4.25v-6.93c0-1.14-.44-2.2-1.25-3L15.93 4c-.8-.8-1.87-1.24-3.01-1.24H8v-.01Z"
      :fill="color"
    ></path>
    <path
      d="M9.5 18.751c-.19 0-.38-.07-.53-.22l-2-2a.755.755 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.47 1.47 1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM14.5 18.751c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l1.47-1.47-1.47-1.47a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="m19.54 6.54-3.07-3.07A5.003 5.003 0 0 0 12.93 2H8C5 2 3 4 3 7v10c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93c0-1.33-.53-2.6-1.46-3.53Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <g opacity=".4" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 18.5h4c1.65 0 3-1.35 3-3v-3c0-1.65-1.35-3-3-3h-4c-1.65 0-3 1.35-3 3v3c0 1.65 1.35 3 3 3ZM12 9.5v9M7.5 14h9"></path>
    </g>
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
    },
})
</script>