<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M16.38 17.57l-10.3 4.34c-1.07.45-2-.88-1.21-1.73l7.81-8.48 4.05 4.12c.54.54.36 1.46-.35 1.75zM19.171 3.771l-6.49 7.93-4.05-4.1c-.54-.55-.36-1.47.35-1.76l8.94-3.75c1.04-.44 1.97.81 1.25 1.68z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="m12.68 11.701 6.49-7.93c.71-.87-.22-2.12-1.26-1.68l-8.94 3.75c-.71.3-.89 1.21-.35 1.76l1.28 1.3m-3.82 13.01 10.3-4.34c.71-.3.89-1.21.35-1.76l-4.06-4.11-7.81 8.48c-.78.85.15 2.18 1.22 1.73Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="m16.38 17.57-10.3 4.34c-1.07.45-2-.88-1.21-1.73l7.81-8.48 4.05 4.12c.54.54.36 1.46-.35 1.75Z"
      :fill="color"
    ></path>
    <path
      d="m19.17 3.771-6.491 7.93-4.05-4.1c-.54-.55-.36-1.47.35-1.76l8.94-3.75c1.04-.44 1.97.81 1.25 1.68Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="m12.7 11.7 4.1 4.1c.5.6.3 1.5-.4 1.8L6.1 21.9c-1.1.5-2-.9-1.2-1.7l7.8-8.5Zm0 0L8.6 7.6c-.5-.5-.3-1.5.4-1.8l8.9-3.7c1.1-.4 2 .8 1.3 1.7l-6.5 7.9Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M5.64 22.749c-.58 0-1.12-.28-1.48-.79-.51-.72-.45-1.65.15-2.29l7.33-7.96-3.55-3.59c-.43-.43-.61-1.05-.49-1.65.12-.6.53-1.09 1.09-1.33l8.94-3.75c.79-.33 1.66-.09 2.18.59.51.69.49 1.59-.05 2.26l-6.07 7.41 3.58 3.63c.43.43.61 1.05.49 1.65-.12.6-.53 1.09-1.09 1.33l-10.3 4.34c-.24.1-.48.15-.73.15Zm7.05-9.96-7.27 7.9c-.16.17-.08.33-.03.42.06.08.19.21.4.11l10.3-4.34c.14-.06.18-.18.2-.24.01-.06.02-.19-.09-.3l-3.51-3.55Zm-3.53-5.72 3.47 3.51 5.96-7.28c.14-.17.07-.33.01-.41-.06-.08-.18-.2-.4-.11l-8.94 3.75a.36.36 0 0 0-.2.24c-.02.06 0 .19.1.3Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="m6.08 21.911 10.3-4.34c.71-.3.89-1.21.35-1.76l-4.06-4.11-7.81 8.48c-.78.85.15 2.18 1.22 1.73Zm2.55-14.31 4.05 4.1 6.49-7.93c.71-.87-.22-2.12-1.26-1.68l-8.94 3.75c-.7.29-.88 1.21-.34 1.76Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
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