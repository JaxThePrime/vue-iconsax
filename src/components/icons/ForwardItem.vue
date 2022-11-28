<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M21.25 5.77V9c0 2.115-.707 2.899-2.619 3.007a.48.48 0 0 1-.5-.487v-1.14c0-3.12-1.39-4.51-4.51-4.51h-1.14a.48.48 0 0 1-.487-.5c.107-1.912.892-2.62 3.007-2.62h3.23c2.29 0 3.02.73 3.02 3.02Z"
      :fill="color"
    ></path>
    <path
      d="M16.63 10.381v3.24c0 2.28-.73 3.01-3.01 3.01h-3.24c-2.28 0-3.01-.73-3.01-3.01v-3.24c0-2.28.73-3.01 3.01-3.01h3.24c2.28 0 3.01.73 3.01 3.01Z"
      :fill="color"
    ></path>
    <path
      d="M11.52 18.13a.48.48 0 0 1 .487.501c-.108 1.912-.892 2.62-3.007 2.62H5.77c-2.29 0-3.02-.73-3.02-3.02V15c0-2.115.708-2.9 2.62-3.007a.48.48 0 0 1 .5.486v1.14c0 3.12 1.39 4.51 4.51 4.51h1.14Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M6.73 14.97c-.08-.4-.12-.85-.12-1.36v-3.23c0-2.69 1.08-3.77 3.77-3.77h3.23c2.69 0 3.77 1.08 3.77 3.77v3.23c0 2.69-1.08 3.77-3.77 3.77h-3.23"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M22 5.77V9c0 2.69-1.08 3.77-3.77 3.77h-.85v-2.38c0-2.69-1.08-3.77-3.77-3.77h-2.38v-.85C11.23 3.08 12.31 2 15 2h3.23C20.92 2 22 3.08 22 5.77ZM12.77 17.38v.85C12.77 20.92 11.69 22 9 22H5.77C3.08 22 2 20.92 2 18.23V15c0-2.69 1.08-3.77 3.77-3.77h.85"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M21.25 5.77V9c0 2.29-.73 3.02-3.02 3.02h-.1v-1.64c0-3.12-1.39-4.51-4.51-4.51h-1.64v-.1c0-2.29.73-3.02 3.02-3.02h3.23c2.29 0 3.02.73 3.02 3.02Z"
      :fill="color"
    ></path>
    <path
      d="M16.63 10.381v3.24c0 2.28-.73 3.01-3.01 3.01h-3.24c-2.28 0-3.01-.73-3.01-3.01v-3.24c0-2.28.73-3.01 3.01-3.01h3.24c2.28 0 3.01.73 3.01 3.01Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M12.02 18.13v.1c0 2.29-.73 3.02-3.02 3.02H5.77c-2.29 0-3.02-.73-3.02-3.02V15c0-2.29.73-3.02 3.02-3.02h.1v1.64c0 3.12 1.39 4.51 4.51 4.51h1.64Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M17.38 10.38v3.23c0 2.69-1.08 3.77-3.77 3.77h-3.23c-2.69 0-3.77-1.08-3.77-3.77v-3.23c0-2.69 1.08-3.77 3.77-3.77h3.23c2.7.01 3.77 1.08 3.77 3.77z"
    ></path>
    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M22 5.77V9c0 2.69-1.08 3.77-3.77 3.77h-.85v-2.38c0-2.69-1.08-3.77-3.77-3.77h-2.38v-.85C11.23 3.08 12.31 2 15 2h3.23C20.92 2 22 3.08 22 5.77zM2 18.23V15c0-2.69 1.08-3.77 3.77-3.77h.85v2.38c0 2.69 1.08 3.77 3.77 3.77h2.38v.85C12.77 20.92 11.69 22 9 22H5.77C3.08 22 2 20.92 2 18.23z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M13.621 18.13h-3.23c-3.13 0-4.52-1.39-4.52-4.52v-3.23c0-3.13 1.39-4.52 4.52-4.52h3.23c3.13 0 4.52 1.39 4.52 4.52v3.23c-.01 3.13-1.4 4.52-4.52 4.52Zm-3.24-10.76c-2.29 0-3.02.73-3.02 3.02v3.23c0 2.29.73 3.02 3.02 3.02h3.23c2.29 0 3.02-.73 3.02-3.02v-3.23c0-2.29-.73-3.02-3.02-3.02h-3.23Z"
      :fill="color"
    ></path>
    <path
      d="M18.23 13.52h-.85c-.41 0-.75-.34-.75-.75v-2.38c0-2.29-.73-3.02-3.02-3.02h-2.38c-.41 0-.75-.34-.75-.75v-.85c0-3.13 1.39-4.52 4.52-4.52h3.23c3.13 0 4.52 1.39 4.52 4.52V9c0 3.13-1.39 4.52-4.52 4.52Zm-.1-1.5h.1c2.29 0 3.02-.73 3.02-3.02V5.77c0-2.29-.73-3.02-3.02-3.02H15c-2.29 0-3.02.73-3.02 3.02v.1h1.63c3.13 0 4.52 1.39 4.52 4.52v1.63ZM9 22.75H5.77c-3.13 0-4.52-1.39-4.52-4.52V15c0-3.13 1.39-4.52 4.52-4.52h.85c.41 0 .75.34.75.75v2.38c0 2.29.73 3.02 3.02 3.02h2.38c.41 0 .75.34.75.75v.85c0 3.13-1.39 4.52-4.52 4.52ZM5.77 11.98c-2.29 0-3.02.73-3.02 3.02v3.23c0 2.29.73 3.02 3.02 3.02H9c2.29 0 3.02-.73 3.02-3.02v-.1h-1.63c-3.13 0-4.52-1.39-4.52-4.52v-1.63h-.1Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M17.38 10.38v3.23c0 2.69-1.08 3.77-3.77 3.77h-3.23c-2.69 0-3.77-1.08-3.77-3.77v-3.23c0-2.69 1.08-3.77 3.77-3.77h3.23c2.7.01 3.77 1.08 3.77 3.77Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M22 5.77V9c0 2.69-1.08 3.77-3.77 3.77h-.85v-2.38c0-2.69-1.08-3.77-3.77-3.77h-2.38v-.85C11.23 3.08 12.31 2 15 2h3.23C20.92 2 22 3.08 22 5.77ZM2 18.23V15c0-2.69 1.08-3.77 3.77-3.77h.85v2.38c0 2.69 1.08 3.77 3.77 3.77h2.38v.85C12.77 20.92 11.69 22 9 22H5.77C3.08 22 2 20.92 2 18.23Z"
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