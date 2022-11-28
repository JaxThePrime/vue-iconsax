<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M23 15.219c-.41 0-.75.34-.75.75a6.26 6.26 0 01-4.83 6.09l.27-.45a.751.751 0 10-1.29-.77l-1.05 1.75c-.14.23-.14.52-.01.75.13.24.38.38.65.38 4.27 0 7.75-3.48 7.75-7.75a.74.74 0 00-.74-.75zM8 .219C3.73.219.25 3.699.25 7.969c0 .41.34.75.75.75s.75-.34.75-.75c0-2.96 2.06-5.44 4.83-6.09l-.27.45a.751.751 0 101.29.77l1.05-1.75c.13-.23.14-.51 0-.75A.752.752 0 008 .219zM21.5 8.67c0 3.08-2.24 5.62-5.17 6.09v-.02c-.29-3.73-3.31-6.77-7.09-7.07a6.158 6.158 0 016.09-5.17c3.41 0 6.17 2.76 6.17 6.17zM9.81 14.2c0-.15-.17-.38-.38-.38H7.37v.75h2.06c.21.01.38-.16.38-.37zM9.83 16.078H7.37v.75h2.47c.32 0 .54-.2.54-.38s-.23-.37-.55-.37z"
    ></path>
    <path
      :fill="color"
      d="M14.83 14.848a6.174 6.174 0 00-5.68-5.68c-.16-.01-.31-.02-.48-.02-3.41 0-6.17 2.76-6.17 6.18 0 3.41 2.76 6.17 6.17 6.17s6.18-2.76 6.18-6.17c0-.17-.01-.32-.02-.48zm-5 3.48h-.66v.38c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.38H6.62c-.41 0-.75-.34-.75-.75v-4.5c0-.41.34-.75.75-.75h1.05v-.38c0-.41.34-.75.75-.75s.75.34.75.75v.38h.26c1 0 1.88.88 1.88 1.88 0 .29-.07.56-.19.81.46.34.75.86.75 1.44 0 1.03-.91 1.87-2.04 1.87z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M23 15.969c0 3.87-3.13 7-7 7l1.05-1.75M1 7.969c0-3.87 3.13-7 7-7l-1.05 1.75"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M6.62 13.07h2.81c.62 0 1.13.56 1.13 1.13 0 .62-.5 1.13-1.13 1.13H6.62v-2.26Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M6.62 15.328h3.22c.71 0 1.29.5 1.29 1.13 0 .62-.58 1.13-1.29 1.13H6.62v-2.26ZM8.42 17.578v1.12M8.42 11.95v1.12"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M2.5 15.33c0-3.41 2.76-6.17 6.17-6.17.16 0 .31.01.48.02 3.03.23 5.45 2.65 5.68 5.68.01.16.02.31.02.48 0 3.41-2.76 6.17-6.17 6.17-2.13 0-4.01-1.08-5.12-2.72"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M21.5 8.67c0 3.41-2.76 6.17-6.17 6.17h-.49a6.174 6.174 0 0 0-5.68-5.68v-.49c0-3.41 2.76-6.17 6.17-6.17 1.8 0 3.42.77 4.55 2"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 15.219a.75.75 0 0 1 .75.75 7.745 7.745 0 0 1-7.75 7.75.75.75 0 0 1-.643-1.136l1.05-1.75a.75.75 0 1 1 1.286.772l-.271.452a6.246 6.246 0 0 0 4.828-6.088.75.75 0 0 1 .75-.75ZM6.578 1.88A6.246 6.246 0 0 0 1.75 7.97a.75.75 0 0 1-1.5 0A7.745 7.745 0 0 1 8 .219a.75.75 0 0 1 .643 1.136l-1.05 1.75a.75.75 0 1 1-1.286-.772l.271-.452Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M14.85 15.33c0 3.41-2.76 6.17-6.17 6.17s-6.17-2.76-6.17-6.17 2.76-6.17 6.17-6.17c.16 0 .31.01.48.02 3.03.23 5.45 2.65 5.68 5.68 0 .15.01.3.01.47Z"
      :fill="color"
    ></path>
    <path
      d="M21.5 8.67c0 3.41-2.76 6.17-6.17 6.17h-.49a6.174 6.174 0 0 0-5.68-5.68v-.49c0-3.41 2.76-6.17 6.17-6.17s6.17 2.76 6.17 6.17ZM11.12 15.011c.12-.25.19-.52.19-.81 0-1-.88-1.88-1.88-1.88h-.26v-.38c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.38H6.62c-.41 0-.75.34-.75.75v4.5c0 .41.34.75.75.75h1.05v.38c0 .41.34.75.75.75s.75-.34.75-.75v-.38h.66c1.12 0 2.04-.84 2.04-1.88 0-.57-.3-1.09-.75-1.43Zm-3.75-1.19h2.06c.21 0 .38.23.38.38 0 .21-.17.38-.38.38H7.37v-.76Zm2.46 3.01H7.36v-.75h2.46c.32 0 .54.2.54.38s-.21.37-.53.37Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M23 15.97c0 3.87-3.13 7-7 7l1.05-1.75M1 7.97c0-3.87 3.13-7 7-7L6.95 2.72"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M6.62 13.07h2.81c.62 0 1.13.56 1.13 1.13 0 .62-.5 1.13-1.13 1.13H6.62v-2.26ZM6.62 15.33h3.22c.71 0 1.29.5 1.29 1.13 0 .62-.58 1.13-1.29 1.13H6.62v-2.26ZM8.42 17.58v1.12M8.42 11.95v1.12"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M14.85 15.33c0 3.41-2.76 6.17-6.17 6.17s-6.17-2.76-6.17-6.17 2.76-6.17 6.17-6.17c.16 0 .31.01.48.02 3.03.23 5.45 2.65 5.68 5.68 0 .15.01.3.01.47Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M21.5 8.67c0 3.41-2.76 6.17-6.17 6.17h-.49a6.174 6.174 0 0 0-5.68-5.68v-.49c0-3.41 2.76-6.17 6.17-6.17s6.17 2.76 6.17 6.17Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M16 23.719a.745.745 0 0 1-.64-1.13l1.05-1.75c.21-.36.67-.47 1.03-.26.36.21.47.67.26 1.03l-.27.45c2.76-.65 4.83-3.13 4.83-6.09 0-.41.34-.75.75-.75s.75.34.75.75c-.01 4.27-3.49 7.75-7.76 7.75ZM1 8.719c-.41 0-.75-.34-.75-.75C.25 3.699 3.73.219 8 .219a.745.745 0 0 1 .64 1.13l-1.05 1.75c-.21.36-.67.47-1.03.26a.749.749 0 0 1-.26-1.03l.27-.45c-2.76.65-4.83 3.13-4.83 6.09a.74.74 0 0 1-.74.75ZM9.431 16.078h-2.81c-.41 0-.75-.34-.75-.75v-2.25c0-.41.34-.75.75-.75h2.81c1 0 1.88.88 1.88 1.88 0 1.02-.85 1.87-1.88 1.87Zm-2.06-1.5h2.06c.21 0 .38-.17.38-.38 0-.15-.17-.38-.38-.38h-2.06v.76Z"
      :fill="color"
    ></path>
    <path
      d="M9.83 18.328H6.61c-.41 0-.75-.34-.75-.75v-2.25c0-.41.34-.75.75-.75h3.22c1.12 0 2.04.84 2.04 1.88s-.91 1.87-2.04 1.87Zm-2.46-1.5h2.47c.32 0 .54-.2.54-.38s-.22-.38-.54-.38H7.37v.76Z"
      :fill="color"
    ></path>
    <path
      d="M8.42 19.45c-.41 0-.75-.34-.75-.75v-1.13c0-.41.34-.75.75-.75s.75.34.75.75v1.13c0 .42-.34.75-.75.75ZM8.42 13.821c-.41 0-.75-.34-.75-.75v-1.13c0-.41.34-.75.75-.75s.75.34.75.75v1.13c0 .42-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M8.67 22.25c-3.82 0-6.92-3.11-6.92-6.92s3.11-6.92 6.92-6.92c.18 0 .34.01.52.02 3.39.26 6.13 3 6.38 6.37.01.22.02.37.02.53.01 3.81-3.1 6.92-6.92 6.92Zm0-12.35c-2.99 0-5.42 2.43-5.42 5.42 0 2.99 2.43 5.42 5.42 5.42 2.99 0 5.43-2.43 5.43-5.42 0-.13-.01-.26-.02-.39-.2-2.68-2.35-4.82-4.99-5.02-.13 0-.27-.01-.42-.01Z"
      :fill="color"
    ></path>
    <path
      d="M15.33 15.602h-.49c-.39 0-.72-.3-.75-.69a5.44 5.44 0 0 0-4.99-4.99.752.752 0 0 1-.69-.75v-.49c0-3.82 3.11-6.92 6.93-6.92s6.92 3.11 6.92 6.92-3.12 6.92-6.93 6.92ZM9.9 8.512c2.82.51 5.08 2.76 5.59 5.59a5.432 5.432 0 0 0 5.26-5.42c0-2.99-2.43-5.42-5.42-5.42a5.419 5.419 0 0 0-5.43 5.25Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      opacity=".4"
      d="M23 15.969c0 3.87-3.13 7-7 7l1.05-1.75M1 7.969c0-3.87 3.13-7 7-7l-1.05 1.75"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M6.62 13.07h2.81c.62 0 1.13.56 1.13 1.13 0 .62-.5 1.13-1.13 1.13H6.62v-2.26Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M6.62 15.328h3.22c.71 0 1.29.5 1.29 1.13 0 .62-.58 1.13-1.29 1.13H6.62v-2.26ZM8.42 17.578v1.12M8.42 11.95v1.12"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M14.85 15.33c0 3.41-2.76 6.17-6.17 6.17s-6.17-2.76-6.17-6.17 2.76-6.17 6.17-6.17c.16 0 .31.01.48.02 3.03.23 5.45 2.65 5.68 5.68 0 .15.01.3.01.47Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M21.5 8.67c0 3.41-2.76 6.17-6.17 6.17h-.49a6.174 6.174 0 0 0-5.68-5.68v-.49c0-3.41 2.76-6.17 6.17-6.17s6.17 2.76 6.17 6.17Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
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