<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M2.77 10C2.34 10 2 9.66 2 9.23V6.92A4.93 4.93 0 0 1 6.92 2h2.31c.43 0 .77.34.77.77s-.34.77-.77.77H6.92c-1.87 0-3.38 1.52-3.38 3.38v2.31c0 .43-.35.77-.77.77ZM21.23 10a.77.77 0 0 1-.77-.77V6.92c0-1.87-1.52-3.38-3.38-3.38h-2.31a.77.77 0 0 1 0-1.54h2.31A4.93 4.93 0 0 1 22 6.92v2.31c0 .43-.34.77-.77.77ZM17.082 22h-1.39a.77.77 0 0 1 0-1.54h1.39c1.87 0 3.38-1.52 3.38-3.38V15.7a.77.77 0 0 1 1.54 0v1.38a4.93 4.93 0 0 1-4.92 4.92ZM9.23 22H6.92A4.93 4.93 0 0 1 2 17.08v-2.31c0-.43.34-.77.77-.77s.77.34.77.77v2.31c0 1.87 1.52 3.38 3.38 3.38h2.31a.77.77 0 0 1 0 1.54ZM18.46 11.23H5.54a.77.77 0 0 0 0 1.54H18.46a.77.77 0 0 0 0-1.54ZM6.898 13.94v.33c0 1.66 1.34 3 3 3h4.2c1.66 0 3-1.34 3-3v-.33c0-.12-.09-.21-.21-.21h-9.78c-.12 0-.21.09-.21.21ZM6.898 10.06v-.33c0-1.66 1.34-3 3-3h4.2c1.66 0 3 1.34 3 3v.33c0 .12-.09.21-.21.21h-9.78c-.12 0-.21-.09-.21-.21Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9M15 2h2.5C19.99 2 22 4.01 22 6.5V9M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16M9 22H6.5C4.01 22 2 19.99 2 17.5V15M17 9.5v5c0 2-1 3-3 3h-4c-2 0-3-1-3-3v-5c0-2 1-3 3-3h4M19 12H5"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M2.77 10C2.34 10 2 9.66 2 9.23V6.92A4.93 4.93 0 0 1 6.92 2h2.31c.43 0 .77.34.77.77s-.34.77-.77.77H6.92c-1.87 0-3.38 1.52-3.38 3.38v2.31c0 .43-.35.77-.77.77ZM21.23 10a.77.77 0 0 1-.77-.77V6.92c0-1.87-1.52-3.38-3.38-3.38h-2.31a.77.77 0 0 1 0-1.54h2.31A4.93 4.93 0 0 1 22 6.92v2.31c0 .43-.34.77-.77.77Z"
      :fill="color"
    ></path>
    <path
      d="M17.082 22h-1.39a.77.77 0 0 1 0-1.54h1.39c1.87 0 3.38-1.52 3.38-3.38V15.7a.77.77 0 0 1 1.54 0v1.38a4.93 4.93 0 0 1-4.92 4.92ZM9.23 22H6.92A4.93 4.93 0 0 1 2 17.08v-2.31c0-.43.34-.77.77-.77s.77.34.77.77v2.31c0 1.87 1.52 3.38 3.38 3.38h2.31a.77.77 0 0 1 0 1.54ZM18.46 11.23H5.54a.77.77 0 0 0 0 1.54H18.46a.77.77 0 0 0 0-1.54ZM6.898 13.94v.33c0 1.66 1.34 3 3 3h4.2c1.66 0 3-1.34 3-3v-.33c0-.12-.09-.21-.21-.21h-9.78c-.12 0-.21.09-.21.21Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M6.898 10.06v-.33c0-1.66 1.34-3 3-3h4.2c1.66 0 3 1.34 3 3v.33c0 .12-.09.21-.21.21h-9.78c-.12 0-.21-.09-.21-.21Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9M15 2h2.5C19.99 2 22 4.01 22 6.5V9M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16M9 22H6.5C4.01 22 2 19.99 2 17.5V15M17 9.5v5c0 2-1 3-3 3h-4c-2 0-3-1-3-3v-5c0-2 1-3 3-3h4c2 0 3 1 3 3ZM19 12H5"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M2 9.75c-.41 0-.75-.34-.75-.75V6.5c0-2.9 2.36-5.25 5.25-5.25H9c.41 0 .75.34.75.75s-.34.75-.75.75H6.5c-2.07 0-3.75 1.68-3.75 3.75V9c0 .41-.34.75-.75.75ZM22 9.75c-.41 0-.75-.34-.75-.75V6.5c0-2.07-1.68-3.75-3.75-3.75H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c2.89 0 5.25 2.35 5.25 5.25V9c0 .41-.34.75-.75.75ZM17.5 22.75H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.5c2.07 0 3.75-1.68 3.75-3.75V16c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 2.9-2.36 5.25-5.25 5.25ZM9 22.75H6.5c-2.89 0-5.25-2.35-5.25-5.25V15c0-.41.34-.75.75-.75s.75.34.75.75v2.5c0 2.07 1.68 3.75 3.75 3.75H9c.41 0 .75.34.75.75s-.34.75-.75.75ZM14 18.25h-4c-2.42 0-3.75-1.33-3.75-3.75v-5c0-2.42 1.33-3.75 3.75-3.75h4c2.42 0 3.75 1.33 3.75 3.75v5c0 2.42-1.33 3.75-3.75 3.75Zm-4-11c-1.58 0-2.25.67-2.25 2.25v5c0 1.58.67 2.25 2.25 2.25h4c1.58 0 2.25-.67 2.25-2.25v-5c0-1.58-.67-2.25-2.25-2.25h-4Z"
      :fill="color"
    ></path>
    <path
      d="M19 12.75H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9M15 2h2.5C19.99 2 22 4.01 22 6.5V9M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <g opacity=".4" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 9.5v5c0 2-1 3-3 3h-4c-2 0-3-1-3-3v-5c0-2 1-3 3-3h4c2 0 3 1 3 3ZM19 12H5"></path>
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
        strokeWidth: {
          type: String,
          default: "1.5",
        },
    },
})
</script>