<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M19.789 4.22c-2.96-2.95-7.76-2.95-10.7 0-2.07 2.05-2.69 5-1.89 7.6l-4.7 4.7c-.33.34-.56 1.01-.49 1.49l.3 2.18c.11.72.78 1.4 1.5 1.5l2.18.3c.48.07 1.15-.15 1.49-.5l.82-.82c.2-.19.2-.51 0-.71l-1.94-1.94a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.95 1.95c.19.19.51.19.7 0l2.12-2.11c2.59.81 5.54.18 7.6-1.87 2.95-2.95 2.95-7.76 0-10.71ZM14.499 12a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M12.989 2.15c2.38-.46 4.95.23 6.8 2.07 2.95 2.95 2.95 7.76 0 10.7a7.575 7.575 0 0 1-7.6 1.87l-4.71 4.7c-.34.35-1.01.56-1.49.49l-2.18-.3c-.72-.1-1.39-.78-1.5-1.5l-.3-2.18c-.07-.48.16-1.15.49-1.49l1.12-1.12 3.57-3.57c-.8-2.6-.18-5.55 1.88-7.6M6.89 17.488l2.3 2.3"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M14.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M19.789 4.22c-2.96-2.95-7.76-2.95-10.7 0-2.07 2.05-2.69 5-1.89 7.6l-4.7 4.7c-.33.34-.56 1.01-.49 1.49l.3 2.18c.11.72.78 1.4 1.5 1.5l2.18.3c.48.07 1.15-.15 1.49-.5l.82-.82c.2-.19.2-.51 0-.71l-1.94-1.94a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.95 1.95c.19.19.51.19.7 0l2.12-2.11c2.59.81 5.54.18 7.6-1.87 2.95-2.95 2.95-7.76 0-10.71ZM14.499 12a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z"
      :fill="color"
    ></path>
    <path d="M14.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" :fill="color"></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M19.79 14.93a7.575 7.575 0 0 1-7.6 1.87l-4.71 4.7c-.34.35-1.01.56-1.49.49l-2.18-.3c-.72-.1-1.39-.78-1.5-1.5l-.3-2.18c-.07-.48.16-1.15.49-1.49l4.7-4.7c-.8-2.6-.18-5.55 1.88-7.6 2.95-2.95 7.74-2.95 10.7 0 2.96 2.95 2.96 7.76.01 10.71ZM6.89 17.49l2.3 2.3"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M14.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M6.18 22.752c-.1 0-.21-.01-.3-.02l-2.17-.3c-1.04-.14-1.98-1.07-2.14-2.13l-.3-2.19c-.1-.7.2-1.61.7-2.12l4.39-4.39c-.71-2.84.11-5.84 2.2-7.91 3.24-3.23 8.51-3.24 11.76 0a8.26 8.26 0 0 1 2.43 5.88c0 2.22-.86 4.31-2.43 5.88-2.1 2.08-5.09 2.9-7.91 2.18l-4.4 4.39c-.42.44-1.17.73-1.83.73Zm8.25-19.99c-1.75 0-3.49.66-4.82 1.99a6.803 6.803 0 0 0-1.7 6.85c.08.27.01.55-.19.75l-4.7 4.7c-.17.17-.31.61-.28.84l.3 2.19c.06.38.47.81.85.86l2.18.3c.24.04.68-.1.85-.27l4.72-4.71c.2-.2.49-.26.75-.18 2.41.76 5.04.11 6.84-1.69 1.28-1.28 1.99-3 1.99-4.82 0-1.83-.71-3.54-1.99-4.82a6.727 6.727 0 0 0-4.8-1.99Z"
      :fill="color"
    ></path>
    <path
      d="M9.188 20.54c-.19 0-.38-.07-.53-.22l-2.3-2.3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM14.5 11.75c-1.24 0-2.25-1.01-2.25-2.25s1.01-2.25 2.25-2.25 2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25Zm0-3c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M19.789 14.93a7.575 7.575 0 0 1-7.6 1.87l-4.71 4.7c-.34.35-1.01.56-1.49.49l-2.18-.3c-.72-.1-1.39-.78-1.5-1.5l-.3-2.18c-.07-.48.16-1.15.49-1.49l4.7-4.7c-.8-2.6-.18-5.55 1.88-7.6 2.95-2.95 7.74-2.95 10.7 0 2.96 2.95 2.96 7.76.01 10.71Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      opacity=".4"
      d="m6.89 17.488 2.3 2.3"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M14.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      :stroke="color"
      stroke-width="1.5"
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
    },
})
</script>