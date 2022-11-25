<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M5.94 16.771l-1.66 2.82c-.12.21-.43.21-.56 0l-1.69-2.82c-.13-.22.03-.49.28-.49h3.35c.25 0 .4.28.28.49zM11.69 8.408l-3.95 6.47c-.09.15-.25.23-.42.23H2.25c-.38 0-.62-.4-.43-.72l6.46-10.66c.19-.31.66-.32.85 0l2.56 4.21c.09.14.09.32 0 .47zM13.721 14.49h-3.48c-.2 0-.33-.22-.23-.4l1.74-2.95c.1-.17.35-.17.45 0l1.74 2.95c.11.18-.02.4-.22.4zM13.661 3.4l-1.45 2.47c-.1.17-.36.17-.46 0l-1.45-2.47c-.1-.18.02-.4.23-.4h2.9c.21 0 .33.22.23.4zM22.17 14.368c.2.33-.05.75-.43.75h-4.87c-.17 0-.32-.09-.41-.23l-3.81-6.47a.46.46 0 010-.48l2.47-4.21c.18-.31.64-.32.82 0 1.22 2.11 4.95 8.45 6.23 10.64zM21.93 16.77c-.55.93-1.14 1.93-1.68 2.84-.13.22-.44.21-.57-.01l-1.66-2.83c-.13-.22.03-.5.29-.5h3.33c.26.01.42.28.29.5zM18.02 21H5.94c-.36 0-.58-.39-.4-.7l2.33-3.96c.08-.14.23-.23.4-.23h7.42c.16 0 .32.09.4.23l2.33 3.96c.18.31-.04.7-.4.7z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M5.47 8.74 1.41 15.7l3.18 5.29h14.82s3.18-5.45 3.18-5.37C22.59 15.7 15.18 3 15.18 3H8.83L7.67 4.99M8.82 3l10.59 18M15.18 3 4.59 21M1.5 15.71H22"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path opacity=".4" d="M7.7 15.71 4.59 21l-3.18-5.29H7.7Z" :fill="color"></path>
    <path d="m12 8.41-4.3 7.3H1.41L8.82 3 12 8.41Z" :fill="color"></path>
    <path opacity=".4" d="M15.18 3 12 8.41 8.82 3h6.36Z" :fill="color"></path>
    <path
      d="M22.59 15.63s-.02.03-.06.08H16.3L12 8.41 15.18 3s7.36 12.63 7.41 12.63Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M22.53 15.71c-.42.66-3.12 5.29-3.12 5.29l-3.11-5.29h6.23Z"
      :fill="color"
    ></path>
    <path d="M19.41 21H4.59l3.11-5.29h8.6L19.41 21Z" :fill="color"></path>
    <path opacity=".4" d="M16.3 15.71H7.7l4.3-7.3 4.3 7.3Z" :fill="color"></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M15.2 3H8.8L1.4 15.7 4.6 21h14.8s3.2-5.5 3.2-5.4c0 .1-7.4-12.6-7.4-12.6ZM8.8 3l10.6 18M15.2 3 4.6 21M1.5 15.7H22"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M19.409 21.752H4.589c-.26 0-.51-.14-.64-.36l-3.18-5.29a.74.74 0 0 1 0-.76l7.41-12.71c.13-.23.38-.37.65-.37h6.35c.27 0 .51.14.65.37 2.79 4.78 7 11.99 7.36 12.55.1.13.15.28.15.45 0 .18-.06.34-.17.47-.26.39-2.02 3.42-3.11 5.28-.13.23-.38.37-.65.37Zm-14.4-1.5h13.97c1.49-2.56 2.29-3.92 2.78-4.64-.57-.84-1.57-2.54-3.54-5.91l-3.47-5.95h-5.49l-6.97 11.95 2.72 4.55Zm17.36-3.92v.02-.02Z"
      :fill="color"
    ></path>
    <path
      d="M19.41 21.75c-.26 0-.51-.13-.65-.37l-10.59-18a.752.752 0 1 1 1.3-.76l10.59 18a.752.752 0 0 1-.65 1.13Z"
      :fill="color"
    ></path>
    <path
      d="M4.59 21.75a.752.752 0 0 1-.65-1.13l10.59-18a.752.752 0 1 1 1.3.76l-10.59 18a.77.77 0 0 1-.65.37Z"
      :fill="color"
    ></path>
    <path
      d="M22 16.46H1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H22c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M15.18 3H8.83L1.42 15.71 4.6 21h14.82s3.18-5.45 3.18-5.37C22.6 15.71 15.18 3 15.18 3Z"
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
      <path d="m8.82 3 10.59 18M15.18 3 4.59 21M1.5 15.71H22"></path>
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
            default: "currentColor",
        },
    },
})
</script>