<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M21.14 9.898h-8.39v5.48c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.48H2.86c-.48 0-.86.38-.86.86 0 5.89 4.11 10 10 10s10-4.11 10-10c0-.48-.38-.86-.86-.86z"
    ></path>
    <path
      :fill="color"
      d="M12.748 5.8l1.56 1.56c.29.29.77.29 1.06 0 .29-.29.29-.77 0-1.06l-2.85-2.84a.754.754 0 00-1.06 0l-2.84 2.85c-.14.15-.22.34-.22.53s.07.38.22.53c.29.29.77.29 1.06 0l1.56-1.56V9.9h1.5V5.8h.01z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M17.52 18.01C16.16 19.25 14.29 20 12 20c-5 0-8-3.58-8-8M20 12c0 1.05-.17 2.05-.49 2.97M9.44 6.47L12 3.91l2.56 2.56M12 9.15V3.98M12 14.15v-1.96"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      :fill="color"
      d="M22 10.76a.86.86 0 00-.86-.86H2.86c-.48 0-.86.38-.86.86 0 5.89 4.11 10 10 10s10-4.12 10-10z"
      opacity=".4"
    ></path>
    <path
      :fill="color"
      d="M12.53 3.46l2.85 2.84c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0L12.75 5.8v9.57c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.8L9.69 7.37c-.29.29-.77.29-1.06 0a.753.753 0 01-.23-.53c0-.19.07-.38.22-.53l2.85-2.84c.29-.3.77-.3 1.06-.01z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M9.32 6.5l2.56-2.56 2.56 2.56M11.88 14.18V4.01M4 12c0 4.42 3 8 8 8s8-3.58 8-8"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      :fill="color"
      d="M14.44 7.25c-.19 0-.38-.07-.53-.22L11.88 5 9.85 7.03c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l2.56-2.56c.29-.29.77-.29 1.06 0l2.56 2.56c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"
    ></path>
    <path
      :fill="color"
      d="M11.88 14.93c-.41 0-.75-.34-.75-.75V4.01c0-.41.34-.75.75-.75s.75.34.75.75v10.17c0 .42-.34.75-.75.75z"
    ></path>
    <path
      :fill="color"
      d="M12 20.75c-5.15 0-8.75-3.6-8.75-8.75 0-.41.34-.75.75-.75s.75.34.75.75c0 4.27 2.98 7.25 7.25 7.25s7.25-2.98 7.25-7.25c0-.41.34-.75.75-.75s.75.34.75.75c0 5.15-3.6 8.75-8.75 8.75z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <g opacity=".4">
      <path
        :stroke="color"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M9.32 6.5l2.56-2.56 2.56 2.56M11.88 14.18V4.01"
      ></path>
    </g>
    <path
      :stroke="color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M4 12c0 4.42 3 8 8 8s8-3.58 8-8"
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