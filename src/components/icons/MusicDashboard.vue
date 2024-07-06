<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M7 3.252v17.5c0 .64-.61 1.15-1.23.98-2.4-.68-3.77-2.64-3.77-5.54v-8.38c0-2.9 1.37-4.86 3.77-5.54.62-.17 1.23.33 1.23.98ZM12.47 14.371a.68.68 0 0 0-.68.68c0 .37.31.68.68.68.38 0 .69-.31.69-.68a.69.69 0 0 0-.69-.68ZM17.518 13.45c-.38 0-.69.31-.69.69 0 .38.31.68.69.68.38 0 .69-.31.69-.68 0-.37-.31-.69-.69-.69Z"
      :fill="color"
    ></path>
    <path
      d="M16.19 2H9.5c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h6.69C19.4 22 22 19.4 22 16.19V7.81C22 4.6 19.4 2 16.19 2Zm3.41 7.74v4.4c0 .01-.01.02-.01.03a2.074 2.074 0 0 1-2.07 2.04c-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.07 2.07-2.07.24 0 .47.05.69.13v-1.55l-3.67 1v3.42c0 .01-.01.02-.01.03a2.074 2.074 0 0 1-2.07 2.04c-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.07 2.07-2.07.24 0 .47.05.69.13V9.5c0-.86.53-1.56 1.36-1.77l2.75-.76c.86-.23 1.39 0 1.69.23.43.33.64.85.64 1.55v.99h.01Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M2 9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7H9c-5 0-7-2-7-7v-1.41M7 2.5v19"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M11.47 16.8a1.49 1.49 0 1 0 0-2.98 1.49 1.49 0 0 0 0 2.98Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M18.43 14.31V8.48c0-1.24-.78-1.41-1.57-1.2l-2.98.81c-.54.15-.92.58-.92 1.2v6.01"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M16.931 15.8a1.49 1.49 0 1 0 0-2.98 1.49 1.49 0 0 0 0 2.98ZM12.96 11.04l5.47-1.49"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path d="M7 2.05v19.9c-3.15-.29-5-2.4-5-5.76V7.81c0-3.36 1.85-5.47 5-5.76Z" :fill="color"></path>
    <path
      opacity=".4"
      d="M22 7.81v8.38c0 3.64-2.17 5.81-5.81 5.81H7.81c-.28 0-.55-.01-.81-.05V2.05c.26-.04.53-.05.81-.05h8.38C19.83 2 22 4.17 22 7.81Z"
      :fill="color"
    ></path>
    <path
      d="M18.488 6.799c-.32-.25-.9-.49-1.82-.24l-2.98.82c-.89.23-1.47.98-1.47 1.92v3.91c-.23-.08-.48-.14-.74-.14-1.24 0-2.24 1.01-2.24 2.24a2.25 2.25 0 0 0 2.24 2.24c1.22 0 2.22-.99 2.24-2.2 0-.01.01-.02.01-.03v-3.7l3.97-1.08v1.68c-.23-.08-.48-.14-.75-.14-1.24 0-2.24 1.01-2.24 2.24 0 1.24 1.01 2.24 2.24 2.24 1.22 0 2.22-.99 2.24-2.21 0-.01.01-.02.01-.04v-5.83c-.02-.76-.25-1.32-.71-1.68Zm-7.02 9.25c-.41 0-.74-.33-.74-.74s.33-.74.74-.74.74.33.74.74-.34.74-.74.74Zm5.46-1c-.41 0-.74-.33-.74-.74s.33-.74.74-.74.74.33.74.74-.33.74-.74.74Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7ZM7 2.5v19"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M11.47 16.8a1.49 1.49 0 1 0 0-2.98 1.49 1.49 0 0 0 0 2.98Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M18.43 14.31V8.48c0-1.24-.78-1.41-1.57-1.2l-2.98.81c-.54.15-.92.58-.92 1.2v6.01"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M16.93 15.8a1.49 1.49 0 1 0 0-2.98 1.49 1.49 0 0 0 0 2.98ZM12.96 11.04l5.47-1.49"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      :fill="color"
    ></path>
    <path
      d="M7 22.25c-.41 0-.75-.34-.75-.75v-19c0-.41.34-.75.75-.75s.75.34.75.75v19c0 .41-.34.75-.75.75ZM11.47 17.55c-1.24 0-2.24-1.01-2.24-2.24a2.25 2.25 0 0 1 2.24-2.24 2.25 2.25 0 0 1 2.24 2.24 2.25 2.25 0 0 1-2.24 2.24Zm0-2.99c-.41 0-.74.33-.74.74s.33.74.74.74.74-.33.74-.74-.34-.74-.74-.74Z"
      :fill="color"
    ></path>
    <path
      d="M12.96 16.06c-.41 0-.75-.34-.75-.75V9.3c0-.92.58-1.68 1.47-1.92l2.98-.81c.92-.25 1.5-.01 1.82.24.46.35.7.92.7 1.69v5.83c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.5c0-.33-.07-.47-.11-.49-.05-.04-.22-.06-.51.02l-2.98.81c-.24.07-.36.22-.36.48v6.01c-.01.39-.35.73-.76.73Z"
      :fill="color"
    ></path>
    <path
      d="M16.931 16.55c-1.24 0-2.24-1.01-2.24-2.24 0-1.24 1.01-2.24 2.24-2.24a2.25 2.25 0 0 1 2.24 2.24c.01 1.24-1 2.24-2.24 2.24Zm0-2.98c-.41 0-.74.33-.74.74s.33.74.74.74.74-.33.74-.74-.33-.74-.74-.74ZM12.962 11.791a.747.747 0 0 1-.19-1.47l5.47-1.49a.75.75 0 1 1 .39 1.45l-5.47 1.49c-.07.01-.14.02-.2.02Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M7 2.5v19"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <g opacity=".4" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11.47 16.8a1.49 1.49 0 1 0 0-2.98 1.49 1.49 0 0 0 0 2.98Z"></path>
      <path d="M18.43 14.31V8.48c0-1.24-.78-1.41-1.57-1.2l-2.98.81c-.54.15-.92.58-.92 1.2v6.01"></path>
      <path d="M16.931 15.8a1.49 1.49 0 1 0 0-2.98 1.49 1.49 0 0 0 0 2.98ZM12.96 11.04l5.47-1.49"></path>
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