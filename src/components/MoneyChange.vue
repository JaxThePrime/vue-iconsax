<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M17 4H7C4 4 2 5.5 2 9v3.56c0 .37.38.6.71.45.98-.45 2.11-.62 3.3-.41 2.63.47 4.56 2.91 4.49 5.58-.01.42-.07.83-.18 1.23-.08.31.17.6.49.6H17c3 0 5-1.5 5-5V9c0-3.5-2-5-5-5Zm-5 10.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Zm7.25-.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4Z"
      :fill="color"
    ></path>
    <path
      d="M5 14c-1.25 0-2.38.59-3.11 1.49A3.96 3.96 0 0 0 1 18c0 2.21 1.8 4 4 4 1.74 0 3.23-1.11 3.77-2.67.15-.41.23-.86.23-1.33 0-2.2-1.79-4-4-4Zm2.36 5.74c-.02.06-.06.12-.1.16l-.72.71c-.09.1-.21.14-.34.14a.46.46 0 0 1-.35-.14.471.471 0 0 1-.08-.57H3.76c-.64 0-1.16-.52-1.16-1.17v-.1c0-.28.22-.49.49-.49s.49.21.49.49v.1c0 .11.08.2.19.2h2.01c-.1-.19-.08-.42.08-.58.19-.19.5-.19.68 0l.72.72c.04.04.08.1.11.16.04.11.04.25-.01.37Zm.04-2.51c0 .28-.22.49-.49.49s-.49-.21-.49-.49v-.1c0-.11-.08-.2-.19-.2h-2a.483.483 0 0 1-.43.72c-.12 0-.25-.05-.34-.14l-.72-.72a.645.645 0 0 1-.11-.16.585.585 0 0 1 0-.37c.03-.05.06-.12.11-.16l.72-.71c.19-.2.5-.2.68 0 .16.15.18.39.08.57h2.01c.64 0 1.16.52 1.16 1.17v.1h.01Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M14.5 12a2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0 2.5 2.5M22 13.14V15c0 3.5-2 5-5 5h-5"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M2 11V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5M18.5 9.5v5M2 15.5h5.34c.64 0 1.16.52 1.16 1.16v1.28"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M3.22 14.281 2 15.501l1.22 1.22M8.5 20.78H3.16c-.64 0-1.16-.52-1.16-1.16v-1.28"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m7.281 22.003 1.22-1.22-1.22-1.22"
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
      d="M22 9v6c0 3.5-2 5-5 5H9.74c.17-.47.26-.97.26-1.5a4.495 4.495 0 0 0-8-2.82V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5Z"
      :fill="color"
    ></path>
    <path
      d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 14.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75ZM5.5 14c-1.41 0-2.68.66-3.5 1.68-.63.77-1 1.75-1 2.82A4.5 4.5 0 0 0 5.5 23c1.96 0 3.63-1.25 4.24-3 .17-.47.26-.97.26-1.5A4.5 4.5 0 0 0 5.5 14Zm2.66 6.46c-.03.06-.07.13-.12.18l-.81.8c-.1.11-.24.16-.38.16-.15 0-.29-.05-.39-.16a.532.532 0 0 1-.09-.64H4.11c-.72 0-1.31-.59-1.31-1.32v-.11c0-.31.25-.55.55-.55.3 0 .55.24.55.55v.11c0 .12.09.22.21.22h2.26a.547.547 0 0 1 .09-.65.55.55 0 0 1 .77 0l.81.81c.05.05.09.11.12.18.05.13.05.28 0 .42Zm.04-2.83c0 .31-.25.55-.55.55-.3 0-.55-.24-.55-.55v-.11c0-.12-.09-.22-.21-.22H4.63a.547.547 0 0 1-.48.81c-.14 0-.28-.06-.38-.16l-.81-.81a.567.567 0 0 1-.12-.18.607.607 0 0 1 0-.42c.03-.06.07-.13.12-.18l.81-.8c.21-.22.56-.22.77 0 .18.17.2.44.09.64h2.26c.72 0 1.31.59 1.31 1.32v.11Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M2 11V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v6c0 3.5-2 5-5 5h-5"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 9.5v5M2 15.5h5.34c.64 0 1.16.52 1.16 1.16v1.28"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M3.22 14.28 2 15.5l1.22 1.22M8.5 20.78H3.16c-.64 0-1.16-.52-1.16-1.16v-1.28"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m7.281 22 1.22-1.22-1.22-1.22"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M17 20.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c2.86 0 4.25-1.39 4.25-4.25V9c0-2.86-1.39-4.25-4.25-4.25H7C4.14 4.75 2.75 6.14 2.75 9v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-3.65 2.1-5.75 5.75-5.75h10c3.65 0 5.75 2.1 5.75 5.75v6c0 3.65-2.1 5.75-5.75 5.75Z"
      :fill="color"
    ></path>
    <path
      d="M12 15.25c-1.79 0-3.25-1.46-3.25-3.25S10.21 8.75 12 8.75s3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25Zm0-5c-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75 1.75-.79 1.75-1.75-.79-1.75-1.75-1.75ZM18.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM8.5 18.69c-.41 0-.75-.34-.75-.75v-1.28c0-.22-.18-.41-.41-.41H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.34c1.05 0 1.91.86 1.91 1.91v1.28c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M3.221 17.469c-.19 0-.38-.07-.53-.22l-1.22-1.22a.755.755 0 0 1 0-1.06l1.22-1.22c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.69.69.69.69c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM8.5 21.53H3.16c-1.05 0-1.91-.86-1.91-1.91v-1.28c0-.41.34-.75.75-.75s.75.34.75.75v1.28c0 .22.18.41.41.41H8.5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M7.279 22.75c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l.69-.69-.69-.69a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.22 1.22c.29.29.29.77 0 1.06l-1.22 1.22c-.14.15-.34.22-.53.22Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M2 11V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v6c0 3.5-2 5-5 5h-5"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 9.5v5"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M2 15.5h5.34c.64 0 1.16.52 1.16 1.16v1.28"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M3.22 14.281 2 15.501l1.22 1.22M8.5 20.78H3.16c-.64 0-1.16-.52-1.16-1.16v-1.28"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m7.281 22.003 1.22-1.22-1.22-1.22"
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