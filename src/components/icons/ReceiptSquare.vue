<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM17 15.71c0 1.57-.86 1.94-1.9.82-.48-.51-1.22-.47-1.64.09l-.59.79c-.47.63-1.25.63-1.72 0l-.6-.8c-.42-.56-1.16-.6-1.64-.09-1.05 1.12-1.91.75-1.91-.81V9.08c0-2.37.56-2.96 2.78-2.96h4.44c2.22 0 2.78.59 2.78 2.96v6.63Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M2 12.94V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M17 13.041v2.66c0 1.57-.86 1.94-1.9.82-.48-.51-1.22-.47-1.64.09l-.6.8c-.47.63-1.25.63-1.72 0l-.59-.79c-.42-.56-1.16-.6-1.64-.09-1.05 1.12-1.9.75-1.9-.82v-6.63c0-2.37.56-2.96 2.78-2.96h4.44c2.22 0 2.78.59 2.78 2.96"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M8.9 16.529c.48-.52 1.22-.48 1.64.09l.6.8c.47.63 1.25.63 1.72 0l.59-.79c.42-.56 1.16-.6 1.64-.09 1.05 1.12 1.9.75 1.9-.82v-6.63c0-2.37-.56-2.96-2.78-2.96H9.77c-2.22 0-2.78.59-2.78 2.96v6.63c.01 1.55.87 1.92 1.91.81Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M8.9 16.53c.48-.52 1.22-.48 1.64.09l.6.8c.47.63 1.25.63 1.72 0l.59-.79c.42-.56 1.16-.6 1.64-.09 1.05 1.12 1.9.75 1.9-.82V9.09c0-2.37-.56-2.96-2.78-2.96H9.77c-2.22 0-2.78.59-2.78 2.96v6.63c.01 1.55.87 1.92 1.91.81Z"
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
      d="M12 18.63c-.56 0-1.09-.28-1.46-.77l-.6-.8a.354.354 0 0 0-.24-.15c-.09 0-.17.04-.25.12l-.55-.51.55.51c-.97 1.04-1.76.94-2.15.79-.39-.16-1.05-.64-1.05-2.12V9.07c0-2.78.89-3.71 3.53-3.71h4.45c2.64 0 3.53.94 3.53 3.71v6.63c0 1.48-.66 1.97-1.05 2.12-.38.15-1.17.25-2.15-.79a.369.369 0 0 0-.26-.12c-.09 0-.17.06-.24.15l-.59.79c-.38.5-.91.78-1.47.78Zm-2.31-3.22h.09c.53.03 1.02.3 1.35.75l.6.8c.17.22.36.22.52 0l.59-.79c.33-.45.83-.72 1.36-.75.52-.04 1.05.19 1.43.6.28.3.46.38.53.4-.01-.05.08-.25.08-.71V9.08c0-2.05-.31-2.21-2.03-2.21H9.76c-1.72 0-2.03.16-2.03 2.21v6.63c0 .46.09.66.12.72.03-.04.21-.12.48-.42 0-.01.01-.01.02-.02.37-.36.85-.58 1.34-.58Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M8.9 16.529c.48-.52 1.22-.48 1.64.09l.6.8c.47.63 1.25.63 1.72 0l.59-.79c.42-.56 1.16-.6 1.64-.09 1.05 1.12 1.9.75 1.9-.82v-6.63c0-2.37-.56-2.96-2.78-2.96H9.77c-2.22 0-2.78.59-2.78 2.96v6.63c.01 1.55.87 1.92 1.91.81Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
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