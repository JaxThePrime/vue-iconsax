<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="m22.34 9.33-2-1c-.37-.18-.83-.04-1.01.33-.19.38-.04.83.33 1.01l1.59.79v4.79l-3.75.01V5c0-2-1.34-3-3-3h-8c-1.66 0-3 1-3 3v16.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h17c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.5v-4.49l4.5-.01c.42 0 .75-.34.75-.75v-6a.76.76 0 0 0-.41-.67ZM6 6.89C6 5.5 6.85 5 7.89 5h5.23C14.15 5 15 5.5 15 6.89v1.23C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89Zm.5 5.36h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M3.5 5c0-2 1.34-3 3-3h8c1.66 0 3 1 3 3v17h-14V9M2 22h17"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M8.39 9.998h4.23c1.04 0 1.89-.5 1.89-1.89v-1.23c0-1.39-.85-1.89-1.89-1.89H8.39c-1.04 0-1.89.5-1.89 1.89v1.23c0 1.39.85 1.89 1.89 1.89ZM6.5 13h3M17.5 16.01 22 16v-6l-2-1"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path opacity=".4" d="M3.5 22V5c0-2 1.34-3 3-3h8c1.66 0 3 1 3 3v17h-14Z" :fill="color"></path>
    <path
      d="M19 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75ZM7.89 10h5.23c1.04 0 1.89-.5 1.89-1.89V6.88C15 5.5 14.15 5 13.11 5H7.88C6.85 5 6 5.5 6 6.89v1.23C6 9.5 6.85 10 7.89 10ZM9.5 13.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM22.75 9.998v6c0 .41-.33.75-.75.75l-4.5.01v-1.5l3.75-.01v-4.79l-1.59-.79a.745.745 0 0 1-.33-1.01c.18-.37.64-.51 1.01-.33l2 1c.25.13.41.39.41.67Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M3.5 22V5c0-2 1.34-3 3-3h8c1.66 0 3 1 3 3v17h-14ZM2 22h17"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M8.39 10h4.23c1.04 0 1.89-.5 1.89-1.89V6.88c0-1.39-.85-1.89-1.89-1.89H8.39c-1.04 0-1.89.5-1.89 1.89v1.23C6.5 9.5 7.35 10 8.39 10ZM6.5 13h3M17.5 16.01 22 16v-6l-2-1"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M17.5 22.75h-14c-.41 0-.75-.34-.75-.75V5c0-2.24 1.51-3.75 3.75-3.75h8c2.24 0 3.75 1.51 3.75 3.75v17c0 .41-.34.75-.75.75Zm-13.25-1.5h12.5V5c0-1.41-.84-2.25-2.25-2.25h-8c-1.41 0-2.25.84-2.25 2.25v16.25Z"
      :fill="color"
    ></path>
    <path
      d="M19 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75ZM12.612 10.748h-4.23c-1.63 0-2.64-1.01-2.64-2.64v-1.23c0-1.63 1.01-2.64 2.64-2.64h4.23c1.63 0 2.64 1.01 2.64 2.64v1.23c0 1.63-1.01 2.64-2.64 2.64Zm-4.22-5c-.81 0-1.14.33-1.14 1.14v1.23c0 .81.33 1.14 1.14 1.14h4.23c.81 0 1.14-.33 1.14-1.14v-1.23c0-.81-.33-1.14-1.14-1.14h-4.23ZM9.5 13.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM17.5 16.758a.749.749 0 1 1 0-1.5l3.75-.01v-4.79l-1.59-.79a.763.763 0 0 1-.34-1.01c.19-.37.64-.52 1.01-.34l2 1c.25.13.41.39.41.67v6c0 .41-.33.75-.75.75l-4.49.02Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M17.5 22.75h-14c-.41 0-.75-.34-.75-.75V5c0-2.24 1.51-3.75 3.75-3.75h8c2.24 0 3.75 1.51 3.75 3.75v17c0 .41-.34.75-.75.75Zm-13.25-1.5h12.5V5c0-1.41-.84-2.25-2.25-2.25h-8c-1.41 0-2.25.84-2.25 2.25v16.25Z"
      :fill="color"
    ></path>
    <path
      d="M19 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75ZM12.612 10.748h-4.23c-1.63 0-2.64-1.01-2.64-2.64v-1.23c0-1.63 1.01-2.64 2.64-2.64h4.23c1.63 0 2.64 1.01 2.64 2.64v1.23c0 1.63-1.01 2.64-2.64 2.64Zm-4.22-5c-.81 0-1.14.33-1.14 1.14v1.23c0 .81.33 1.14 1.14 1.14h4.23c.81 0 1.14-.33 1.14-1.14v-1.23c0-.81-.33-1.14-1.14-1.14h-4.23ZM9.5 13.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM17.5 16.758a.749.749 0 1 1 0-1.5l3.75-.01v-4.79l-1.59-.79a.763.763 0 0 1-.34-1.01c.19-.37.64-.52 1.01-.34l2 1c.25.13.41.39.41.67v6c0 .41-.33.75-.75.75l-4.49.02Z"
      :fill="color"
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