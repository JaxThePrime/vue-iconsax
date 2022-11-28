<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M20 3.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6zM4 10h14.5c.31 0 .61.15.8.4l1.5 2c.49.66.02 1.6-.8 1.6H5.5c-.31 0-.61-.15-.8-.4l-1.5-2c-.49-.66-.02-1.6.8-1.6zM20 16.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M20 3.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M6.94 14H5.5c-.31 0-.61-.15-.8-.4l-1.5-2c-.49-.66-.02-1.6.8-1.6h14.5c.31 0 .61.15.8.4l1.5 2c.49.66.02 1.6-.8 1.6h-8.64"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M20 16.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M20 3.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M4 10h14.5c.31 0 .61.15.8.4l1.5 2c.49.66.02 1.6-.8 1.6H5.5c-.31 0-.61-.15-.8-.4l-1.5-2c-.49-.66-.02-1.6.8-1.6Z"
      :fill="color"
    ></path>
    <path
      d="M20 16.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M20 3.5H5.5c-.3 0-.6.1-.8.4l-1.5 2A1 1 0 0 0 4 7.5h14.5c.3 0 .6-.1.8-.4l1.5-2a1 1 0 0 0-.8-1.6ZM4 10h14.5c.3 0 .6.1.8.4l1.5 2A1 1 0 0 1 20 14H5.5c-.3 0-.6-.1-.8-.4l-1.5-2A1 1 0 0 1 4 10ZM20 16.5H5.5c-.3 0-.6.1-.8.4l-1.5 2a1 1 0 0 0 .8 1.6h14.5c.3 0 .6-.1.8-.4l1.5-2a1 1 0 0 0-.8-1.6Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M18.5 8.25H4c-.67 0-1.27-.37-1.56-.97-.3-.6-.24-1.3.16-1.83l1.5-2c.33-.44.85-.7 1.4-.7H20c.67 0 1.27.37 1.56.97.3.6.241 1.3-.159 1.83l-1.5 2c-.33.44-.85.7-1.4.7Zm-13-4c-.08 0-.15.04-.2.1l-1.5 2c-.08.11-.049.21-.019.26.03.05.09.14.22.14h14.5c.08 0 .15-.04.2-.1l1.5-2c.08-.11.05-.21.02-.26-.03-.05-.09-.14-.22-.14H5.5ZM20 14.75H5.5c-.55 0-1.07-.26-1.4-.7l-1.5-2c-.4-.53-.46-1.24-.17-1.83.3-.6.9-.97 1.56-.97h14.5c.55 0 1.071.26 1.401.7l1.5 2c.4.53.46 1.24.17 1.83-.29.6-.89.97-1.56.97Zm-16-4c-.129 0-.199.09-.219.14-.03.05-.06.15.02.26l1.5 2c.05.06.12.1.2.1H20c.13 0 .2-.09.22-.14.03-.05.06-.15-.02-.26l-1.5-2a.261.261 0 0 0-.2-.1H4ZM18.5 21.25H4c-.67 0-1.27-.37-1.56-.97-.3-.6-.24-1.3.16-1.83l1.5-2c.33-.44.85-.7 1.4-.7H20c.67 0 1.27.37 1.56.97.3.6.241 1.3-.159 1.83l-1.5 2c-.33.44-.85.7-1.4.7Zm-13-4c-.08 0-.15.04-.2.1l-1.5 2c-.08.11-.049.21-.019.26.03.05.09.14.22.14h14.5c.08 0 .15-.04.2-.1l1.5-2c.08-.11.05-.21.02-.26-.03-.05-.09-.14-.22-.14H5.5Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M20 3.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
    ></path>
    <path
      opacity=".4"
      d="M4 10h14.5c.31 0 .61.15.8.4l1.5 2c.49.66.02 1.6-.8 1.6H5.5c-.31 0-.61-.15-.8-.4l-1.5-2c-.49-.66-.02-1.6.8-1.6Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M20 16.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6Z"
      :stroke="color"
      stroke-width="1.5"
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
    },
})
</script>