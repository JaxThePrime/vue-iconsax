<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM12 18.01c-3.17 0-5.75-2.58-5.75-5.75 0-1.14.33-2.25.97-3.19a.746.746 0 111.24.83 4.3 4.3 0 00-.71 2.36A4.26 4.26 0 0012 16.51a4.26 4.26 0 004.25-4.25A4.26 4.26 0 0012 8.01c-.19 0-.37.02-.56.04l.56.41c.33.24.41.71.16 1.05-.15.2-.38.31-.61.31-.15 0-.31-.05-.44-.14L9.17 8.25l-.02-.02c-.01-.01-.02-.01-.03-.02-.03-.02-.04-.06-.07-.09-.03-.04-.06-.07-.09-.12-.02-.04-.03-.09-.05-.13-.01-.05-.03-.09-.03-.14 0-.05 0-.09.01-.14 0-.05 0-.09.02-.14 0-.05.03-.09.05-.14.02-.03.02-.07.05-.11.01 0 .02-.01.03-.02.01-.01.01-.02.02-.03l1.67-1.91c.27-.31.75-.35 1.06-.07.31.27.34.75.07 1.06l-.28.32c.14-.01.28-.03.43-.03 3.17 0 5.75 2.58 5.75 5.75s-2.59 5.74-5.76 5.74z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M10.33 7.51c.5-.15 1.05-.25 1.67-.25 2.76 0 5 2.24 5 5s-2.24 5-5 5a5.002 5.002 0 01-4.16-7.78M9.62 7.65l1.66-1.91M9.62 7.65l1.94 1.42"
    ></path>
    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M2 14v1c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      :fill="color"
      d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z"
      opacity=".4"
    ></path>
    <path
      :fill="color"
      d="M12 6.51c-.14 0-.29.02-.43.03l.28-.32c.27-.31.24-.79-.07-1.06a.756.756 0 00-1.06.07L9.05 7.14c-.01.01-.01.02-.02.03-.01.01-.02.01-.02.02-.02.03-.03.07-.05.11-.02.05-.05.09-.06.14-.01.05-.01.09-.02.14 0 .05-.01.09-.01.14 0 .05.02.09.04.14.01.05.03.09.05.13.02.04.06.08.09.12.03.03.04.07.07.09.01.01.02.01.03.02.01.01.01.02.02.02l1.94 1.42c.13.1.29.14.44.14.23 0 .46-.11.61-.31.24-.33.17-.8-.16-1.05l-.56-.41c.18-.02.37-.04.56-.04a4.26 4.26 0 014.25 4.25A4.26 4.26 0 0112 16.49a4.26 4.26 0 01-4.25-4.25c0-.85.25-1.66.71-2.36.23-.34.14-.81-.21-1.04a.746.746 0 00-1.04.21c-.63.95-.97 2.05-.97 3.19 0 3.17 2.58 5.75 5.75 5.75s5.75-2.58 5.75-5.75S15.17 6.51 12 6.51z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M10.33 7.51c.5-.15 1.05-.25 1.67-.25 2.76 0 5 2.24 5 5s-2.24 5-5 5a5.002 5.002 0 01-4.16-7.78M9.62 7.65l1.66-1.91M9.62 7.65l1.94 1.42"
    ></path>
    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      :fill="color"
      d="M12 18.01c-3.17 0-5.75-2.58-5.75-5.75 0-1.14.33-2.25.97-3.19.23-.34.7-.44 1.04-.21.34.23.44.7.21 1.04a4.26 4.26 0 003.54 6.61 4.26 4.26 0 004.25-4.25 4.26 4.26 0 00-4.25-4.25c-.5 0-.98.07-1.45.21a.76.76 0 01-.94-.5c-.12-.4.1-.82.5-.94.61-.19 1.24-.28 1.89-.28 3.17 0 5.75 2.58 5.75 5.75s-2.59 5.76-5.76 5.76z"
    ></path>
    <path
      :fill="color"
      d="M9.62 8.4c-.17 0-.35-.06-.49-.18a.756.756 0 01-.07-1.06l1.67-1.91c.27-.31.75-.35 1.06-.07.31.27.34.75.07 1.06l-1.67 1.91c-.16.16-.36.25-.57.25z"
    ></path>
    <path
      :fill="color"
      d="M11.56 9.82c-.15 0-.31-.05-.44-.14L9.18 8.26a.75.75 0 01-.16-1.05.75.75 0 011.05-.16l1.94 1.42c.33.24.41.71.16 1.05-.15.19-.38.3-.61.3z"
    ></path>
    <path
      :fill="color"
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <g opacity=".4">
      <path
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke-width="strokeWidth"
        d="M10.33 7.51c.5-.15 1.05-.25 1.67-.25 2.76 0 5 2.24 5 5s-2.24 5-5 5a5.002 5.002 0 01-4.16-7.78M9.621 7.65l1.66-1.91M9.621 7.65l1.94 1.42"
      ></path>
    </g>
    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
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