<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm1.5 12.05c-.04.09-.09.17-.16.24l-2.95 2.95c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l1.67-1.67H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.1 0 .19.02.29.06.18.08.33.22.41.41.07.18.07.38-.01.57zM17 10.99H7c-.1 0-.19-.02-.29-.06a.782.782 0 01-.41-.41.707.707 0 010-.57c.05-.09.1-.17.17-.24l2.95-2.95c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L8.81 9.49H17c.41 0 .75.34.75.75s-.34.75-.75.75z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="M3.5 9.01l5.01-5.02M13.01 9.01H3.5M20.5 9.01H17M20.5 14.99l-5.01 5.02M10.99 14.99h9.51M3.5 14.99H7"
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
      d="M17.69 13.48a.782.782 0 00-.41-.41.717.717 0 00-.29-.06H7c-.41 0-.75.34-.75.75s.34.75.75.75h8.19l-1.67 1.67c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2.95-2.95c.07-.07.12-.15.16-.24.08-.19.08-.39 0-.57zM6.31 10.52c.08.18.22.33.41.41.09.04.18.06.28.06h10c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H8.81l1.67-1.67c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0L6.47 9.71c-.07.07-.12.15-.16.24-.08.19-.08.39 0 .57z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="M20.5 14.99l-5.01 5.02M3.5 14.99h17M3.5 9.01l5.01-5.02M20.5 9.01h-17"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      :fill="color"
      d="M15.49 20.76c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l5.01-5.01c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-5.01 5.01c-.15.14-.34.22-.53.22z"
    ></path>
    <path
      :fill="color"
      d="M20.5 15.74h-17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75zM3.5 9.76c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l5.01-5.01c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L4.03 9.54c-.14.14-.34.22-.53.22z"
    ></path>
    <path
      :fill="color"
      d="M20.5 9.76h-17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <g opacity=".4">
      <path
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1.5"
        d="M20.5 14.99l-5.01 5.02M3.5 14.99h17"
      ></path>
    </g>
    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="M3.5 9.01l5.01-5.02M20.5 9.01h-17"
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
    },
})
</script>