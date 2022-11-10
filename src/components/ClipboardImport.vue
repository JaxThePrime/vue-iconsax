<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M14.35 2h-4.7c-1.04 0-1.89.84-1.89 1.88v.94c0 1.04.84 1.88 1.88 1.88h4.71c1.04 0 1.88-.84 1.88-1.88v-.94C16.24 2.84 15.39 2 14.35 2Z"
      :fill="color"
    ></path>
    <path
      d="M17.24 4.82c0 1.59-1.3 2.89-2.89 2.89h-4.7c-1.59 0-2.89-1.3-2.89-2.89 0-.56-.6-.91-1.1-.65a4.472 4.472 0 0 0-2.37 3.95v9.41C3.29 19.99 5.3 22 7.76 22h8.48c2.46 0 4.47-2.01 4.47-4.47V8.12c0-1.71-.96-3.2-2.37-3.95-.5-.26-1.1.09-1.1.65ZM15.75 17c0 .41-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.19l-4.72-4.72a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l4.72 4.72V14c0-.41.34-.75.75-.75s.75.34.75.75v3Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M3 10c0-4.56 1.67-5.8 5-5.98M14 22.002H9c-5 0-6-2-6-6v-1.99M16 4.02c3.33.18 5 1.41 5 5.98v5M10.96 2H10C9 2 8 2 8 4s1 2 2 2h4c2 0 2-1 2-2 0-2-1-2-2-2M21 19v3h-3M15 16l5.96 5.96"
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
      d="M16.24 3.648H7.76c-2.47 0-4.47 2.01-4.47 4.47v9.41c0 2.46 2.01 4.47 4.47 4.47h8.47c2.47 0 4.47-2.01 4.47-4.47v-9.41c.01-2.47-2-4.47-4.46-4.47Z"
      :fill="color"
    ></path>
    <path
      d="M14.35 2h-4.7c-1.04 0-1.89.84-1.89 1.88v.94c0 1.04.84 1.88 1.88 1.88h4.71c1.04 0 1.88-.84 1.88-1.88v-.94C16.24 2.84 15.39 2 14.35 2ZM15 13.251c-.41 0-.75.34-.75.75v1.19l-4.72-4.72a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l4.72 4.72H12c-.41 0-.75.34-.75.75s.34.75.75.75h3c.41 0 .75-.34.75-.75v-3c0-.41-.34-.75-.75-.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M10 6h4c2 0 2-1 2-2 0-2-1-2-2-2h-4C9 2 8 2 8 4s1 2 2 2Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M14 22H9c-5 0-6-2-6-6v-6c0-4.56 1.67-5.8 5-5.98M16 4.02c3.33.18 5 1.41 5 5.98v5M21 19v3h-3M15 16l5.96 5.96"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M14 6.75h-4c-.96 0-2.75 0-2.75-2.75S9.04 1.25 10 1.25h4c.96 0 2.75 0 2.75 2.75 0 .96 0 2.75-2.75 2.75Zm-4-4c-.99 0-1.25 0-1.25 1.25S9.01 5.25 10 5.25h4c1.25 0 1.25-.26 1.25-1.25 0-1.25-.26-1.25-1.25-1.25h-4Z"
      :fill="color"
    ></path>
    <path
      d="M14 22.748H9c-5.62 0-6.75-2.58-6.75-6.75v-6c0-4.56 1.65-6.51 5.71-6.72.4-.02.77.29.79.71.02.42-.3.76-.71.78-2.84.16-4.29 1.01-4.29 5.23v6c0 3.7.73 5.25 5.25 5.25h5c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 15.75c-.41 0-.75-.34-.75-.75v-5c0-4.22-1.45-5.07-4.29-5.23a.757.757 0 0 1-.71-.79c.02-.41.39-.73.79-.71 4.06.22 5.71 2.17 5.71 6.72v5c0 .42-.34.76-.75.76ZM21 22.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25V19c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M20.96 22.711c-.19 0-.38-.07-.53-.22l-5.96-5.96a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l5.96 5.96c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M10 6h4c2 0 2-1 2-2 0-2-1-2-2-2h-4C9 2 8 2 8 4s1 2 2 2Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M14 22H9c-5 0-6-2-6-6v-6c0-4.56 1.67-5.8 5-5.98M16 4.02c3.33.18 5 1.41 5 5.98v5"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <g
      opacity=".4"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 19v3h-3M15 16l5.96 5.96"></path>
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
            default: 32,
        },
        color: {
            type: String,
            default: "#292D32",
        },
    },
})
</script>