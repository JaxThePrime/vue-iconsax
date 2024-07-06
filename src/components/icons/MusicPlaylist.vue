<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M18 5.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75ZM15 2.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM13.91 16.21c-.34 0-.62.28-.62.62 0 .34.28.62.62.62.34 0 .62-.28.62-.62 0-.34-.28-.62-.62-.62ZM9.51 17.739c0-.34-.28-.61-.62-.61-.34 0-.62.28-.62.62 0 .34.28.62.62.62.34-.01.62-.29.62-.63Z"
      :fill="color"
    ></path>
    <path
      d="M18 7H6c-2.2 0-4 1.8-4 4v7c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4v-7c0-2.2-1.8-4-4-4Zm-1.97 5.46v4.37c0 .02-.01.03-.01.05a2.122 2.122 0 0 1-2.11 2.07 2.121 2.121 0 0 1 0-4.24c.22 0 .42.04.62.1v-1.37l-3.52.96v3.34a2.121 2.121 0 0 1-4.24 0c0-1.17.95-2.12 2.12-2.12.22 0 .42.04.62.1v-3.5c0-.89.55-1.61 1.4-1.83l2.73-.75c.88-.23 1.42 0 1.73.24.3.23.66.7.66 1.59v.99Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M2 12c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v5c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-.83M16 4.5h2M6 4.5h7.17M9 2h6"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M8.89 19.111a1.37 1.37 0 1 0 0-2.74 1.37 1.37 0 0 0 0 2.74Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M15.278 16.832v-5.35c0-1.14-.71-1.3-1.44-1.1l-2.74.75c-.5.14-.84.53-.84 1.1v5.51"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M13.91 18.2a1.37 1.37 0 1 0 0-2.739 1.37 1.37 0 0 0 0 2.74ZM10.258 13.83l5.02-1.37"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M18 5.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75ZM15 2.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M18 7H6c-2.2 0-4 1.8-4 4v7c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4v-7c0-2.2-1.8-4-4-4Z"
      :fill="color"
    ></path>
    <path
      d="M15.37 9.89c-.3-.24-.85-.47-1.73-.24l-2.73.75c-.85.22-1.4.94-1.4 1.83v3.5c-.2-.06-.4-.1-.62-.1a2.121 2.121 0 0 0 0 4.24c1.17 0 2.12-.95 2.12-2.12v-3.34l3.52-.96v1.37c-.2-.06-.4-.1-.62-.1a2.121 2.121 0 0 0 0 4.24c1.15 0 2.09-.92 2.11-2.07 0-.02.01-.03.01-.05v-5.35c0-.9-.36-1.37-.66-1.6Zm-6.48 8.47c-.34 0-.62-.28-.62-.62a.621.621 0 0 1 1.24-.01c0 .35-.28.63-.62.63Zm5.02-.91c-.34 0-.62-.28-.62-.62 0-.34.28-.62.62-.62.34 0 .62.28.62.62 0 .34-.28.62-.62.62Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M17 22H7c-3 0-5-1.5-5-5v-5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v5c0 3.5-2 5-5 5ZM6 4.5h12M9 2h6"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M8.89 19.11a1.37 1.37 0 1 0 0-2.74 1.37 1.37 0 0 0 0 2.74Z"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M15.28 16.83v-5.35c0-1.14-.71-1.3-1.44-1.1l-2.74.75c-.5.14-.84.53-.84 1.1v5.51"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M13.91 18.2a1.37 1.37 0 1 0 0-2.74 1.37 1.37 0 0 0 0 2.74ZM10.26 13.83l5.02-1.37"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M17 22.75H7c-3.65 0-5.75-2.1-5.75-5.75v-5c0-3.65 2.1-5.75 5.75-5.75h10c3.65 0 5.75 2.1 5.75 5.75v5c0 3.65-2.1 5.75-5.75 5.75Zm-10-15c-2.86 0-4.25 1.39-4.25 4.25v5c0 2.86 1.39 4.25 4.25 4.25h10c2.86 0 4.25-1.39 4.25-4.25v-5c0-2.86-1.39-4.25-4.25-4.25H7ZM18 5.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75ZM15 2.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M8.89 19.861a2.121 2.121 0 0 1 0-4.24 2.121 2.121 0 0 1 0 4.24Zm0-2.74c-.34 0-.62.28-.62.62 0 .34.28.62.62.62.34 0 .62-.28.62-.62 0-.34-.28-.62-.62-.62Z"
      :fill="color"
    ></path>
    <path
      d="M10.258 18.49c-.41 0-.75-.34-.75-.75v-5.51c0-.88.55-1.59 1.39-1.82l2.74-.75c.87-.24 1.42-.01 1.72.23.3.23.66.7.66 1.59v5.35c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.35c0-.28-.06-.39-.08-.4-.02-.01-.14-.05-.42.03l-2.73.75c-.25.07-.29.24-.29.38v5.51c.01.4-.33.74-.74.74Z"
      :fill="color"
    ></path>
    <path
      d="M13.91 18.95a2.121 2.121 0 0 1 0-4.24 2.121 2.121 0 0 1 0 4.24Zm0-2.74c-.34 0-.62.28-.62.62 0 .34.28.62.62.62.34 0 .62-.28.62-.62 0-.34-.28-.62-.62-.62ZM10.258 14.582a.747.747 0 0 1-.19-1.47l5.01-1.37a.75.75 0 1 1 .39 1.45l-5.01 1.37c-.07.01-.13.02-.2.02Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M17 22H7c-3 0-5-1.5-5-5v-5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v5c0 3.5-2 5-5 5ZM6 4.5h12M9 2h6"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <g opacity=".4" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8.89 19.111a1.37 1.37 0 1 0 0-2.74 1.37 1.37 0 0 0 0 2.74Z"></path>
      <path d="M15.278 16.832v-5.35c0-1.14-.71-1.3-1.44-1.1l-2.74.75c-.5.14-.84.53-.84 1.1v5.51"></path>
      <path d="M13.91 18.2a1.37 1.37 0 1 0 0-2.739 1.37 1.37 0 0 0 0 2.74ZM10.258 13.83l5.02-1.37"></path>
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