<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M13.49 13.379H11c-.3 0-.54.24-.54.54 0 .3.24.54.54.54h2.49c.3 0 .54-.24.54-.54 0-.3-.24-.54-.54-.54ZM9.438 13.379h-1.25c-.3 0-.54.24-.54.54 0 .3.24.54.54.54h1.25c.3 0 .54-.24.54-.54 0-.3-.24-.54-.54-.54Z"
      :fill="color"
    ></path>
    <path
      d="m18.54 4.221-5.5-2.06c-.57-.21-1.5-.21-2.07 0l-5.5 2.06c-1.06.4-1.92 1.64-1.92 2.77v8.1c0 .81.53 1.88 1.18 2.36l5.5 4.11c.97.73 2.56.73 3.53 0l5.5-4.11c.65-.49 1.18-1.55 1.18-2.36v-8.1c.01-1.13-.85-2.37-1.9-2.77Zm-.37 9.43c-.02 2.07-.59 2.59-2.74 2.59H8.58c-2.19 0-2.74-.54-2.74-2.71v-2.33c0-.28.22-.5.5-.5h11.33c.28 0 .5.22.5.5v2.45Zm0-4.54c0 .28-.22.5-.5.5H6.34c-.28 0-.5-.22-.5-.5v-.64c0-1.96.46-2.59 2.17-2.7.18 0 .37-.01.57-.01h6.85c2.19 0 2.74.54 2.74 2.71v.64Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M1.998 7.142c0-1.22.93-2.57 2.07-3l4.98-1.87c.82-.31 2.18-.31 3 0l4.97 1.87c.95.36 1.76 1.36 2.01 2.38h-7.3c-.22 0-.42.01-.61.01-1.85.11-2.33.78-2.33 2.89v5.43c0 2.31.59 2.9 2.94 2.9h5.92c-.09.08-.18.15-.27.23l-4.27 3.2c-1.41 1.05-3.71 1.05-5.13 0l-4.28-3.2c-.94-.7-1.71-2.25-1.71-3.42v-3.32"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M8.797 11.223h13.2"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M21.997 9.422v5.55c-.02 2.22-.63 2.77-2.94 2.77h-7.32c-2.35 0-2.94-.59-2.94-2.9v-5.43c0-2.1.48-2.77 2.33-2.89.19 0 .39-.01.61-.01h7.32c2.35.01 2.94.59 2.94 2.91Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M11.316 15.262h1.33M14.75 15.262h3.27"
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
      d="m9.422 2.161-5.5 2.06c-1.05.39-1.91 1.64-1.91 2.76v8.1c0 .81.53 1.88 1.18 2.36l5.5 4.11c.97.73 2.56.73 3.53 0l5.5-4.11c.65-.49 1.18-1.55 1.18-2.36v-8.1c0-1.12-.86-2.37-1.91-2.76l-5.5-2.06c-.57-.21-1.5-.21-2.07 0Z"
      :fill="color"
    ></path>
    <path
      d="M19.26 6.762h-6.85c-.2 0-.39.01-.57.01-1.72.1-2.18.73-2.18 2.69v.39c0 .414.336.75.75.75h10.84a.75.75 0 0 0 .75-.75v-.39c0-2.16-.55-2.7-2.74-2.7ZM10.422 11.7a.75.75 0 0 0-.75.75v2.09c0 2.16.55 2.71 2.74 2.71h6.85c2.15 0 2.72-.52 2.74-2.59v-2.21a.75.75 0 0 0-.75-.75h-10.83Zm2.85 3.77h-1.25c-.3 0-.54-.24-.54-.54 0-.3.24-.54.54-.54h1.25c.3 0 .54.24.54.54 0 .3-.24.54-.54.54Zm4.05 0h-2.49c-.3 0-.54-.24-.54-.54 0-.3.24-.54.54-.54h2.49c.3 0 .54.24.54.54.01.3-.24.54-.54.54Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M11.74 17.75h5.92c-.09.08-.18.15-.27.23l-4.27 3.2c-1.41 1.05-3.71 1.05-5.13 0l-4.28-3.2C2.77 17.28 2 15.73 2 14.56V7.15c0-1.22.93-2.57 2.07-3l4.98-1.87c.82-.31 2.18-.31 3 0l4.97 1.87c.95.36 1.76 1.36 2.01 2.38h-7.3c-.22 0-.42.01-.61.01-1.85.11-2.33.78-2.33 2.89v5.43c.01 2.3.6 2.89 2.95 2.89Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M8.8 11.22H22"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M22 9.42v5.55c-.02 2.22-.63 2.77-2.94 2.77h-7.32c-2.35 0-2.94-.59-2.94-2.9V9.41c0-2.1.48-2.77 2.33-2.89.19 0 .39-.01.61-.01h7.32c2.35.01 2.94.59 2.94 2.91Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M11.32 15.26h1.33M14.75 15.26h3.27"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M10.558 22.709c-1.08 0-2.17-.31-3.01-.94l-4.28-3.2c-1.13-.84-2.01-2.61-2.01-4.03v-7.41c0-1.53 1.12-3.16 2.56-3.7l4.98-1.87c.99-.37 2.54-.37 3.53 0l4.97 1.87c1.17.44 2.16 1.61 2.48 2.91a.754.754 0 0 1-.73.93l-7.91.01c-1.27.08-1.58.29-1.58 2.14v5.43c0 1.91.25 2.15 2.19 2.15h5.92c.31 0 .59.19.7.48.11.29.03.62-.2.83-.11.09-.2.18-.31.26l-4.28 3.21c-.86.62-1.94.93-3.02.93Zm0-19.92c-.45 0-.91.06-1.24.19l-4.98 1.87c-.84.32-1.59 1.39-1.59 2.3v7.41c0 .94.66 2.26 1.41 2.82l4.28 3.2c1.15.85 3.08.85 4.23 0l2.77-2.07h-3.7c-2.76 0-3.69-.92-3.69-3.65v-5.43c0-2.13.51-3.48 3.04-3.64l.65-.01h6.15c-.3-.43-.7-.77-1.12-.93l-4.97-1.87c-.34-.13-.79-.19-1.24-.19Z"
      :fill="color"
    ></path>
    <path
      d="M22 11.969H8.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H22c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M19.06 18.5h-7.32c-2.76 0-3.69-.92-3.69-3.65V9.42c0-2.13.51-3.48 3.04-3.64l.65-.01h7.32c2.76 0 3.69.92 3.69 3.65v5.55c-.02 2.64-.95 3.53-3.69 3.53ZM11.74 7.27l-.61.01c-1.27.08-1.58.29-1.58 2.14v5.43c0 1.91.25 2.15 2.19 2.15h7.32c1.91 0 2.17-.25 2.19-2.03V9.43c0-1.91-.25-2.15-2.19-2.15h-7.32v-.01Z"
      :fill="color"
    ></path>
    <path
      d="M12.649 16.012h-1.34c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.34a.749.749 0 1 1 0 1.5ZM18.02 16.012h-3.27c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.27a.749.749 0 1 1 0 1.5Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      opacity=".4"
      d="M11.74 17.75h5.92c-.09.08-.18.15-.27.23l-4.27 3.2c-1.41 1.05-3.71 1.05-5.13 0l-4.28-3.2C2.77 17.28 2 15.73 2 14.56V7.15c0-1.22.93-2.57 2.07-3l4.98-1.87c.82-.31 2.18-.31 3 0l4.97 1.87c.95.36 1.76 1.36 2.01 2.38h-7.3c-.22 0-.42.01-.61.01-1.85.11-2.33.78-2.33 2.89v5.43c.01 2.3.6 2.89 2.95 2.89Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M8.8 11.219H22"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M22 9.422v5.55c-.02 2.22-.63 2.77-2.94 2.77h-7.32c-2.35 0-2.94-.59-2.94-2.9v-5.43c0-2.1.48-2.77 2.33-2.89.19 0 .39-.01.61-.01h7.32c2.35.01 2.94.59 2.94 2.91Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M11.32 15.262h1.33M14.75 15.262h3.27"
      :stroke="color"
      :stroke-width="strokeWidth"
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
        strokeWidth: {
          type: String,
          default: "1.5",
        },
    },
})
</script>