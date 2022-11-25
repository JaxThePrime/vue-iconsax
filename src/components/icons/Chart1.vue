<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.38C2 19.83 4.17 22 7.81 22h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM7.75 13.6c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.2c0-.41.34-.75.75-.75s.75.34.75.75v3.2Zm5 1.74c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.66c0-.41.34-.75.75-.75s.75.34.75.75v6.68Zm5-1.74c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.2c0-.41.34-.75.75-.75s.75.34.75.75v3.2Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M2 22h20"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9.75 4v18h4.5V4c0-1.1-.45-2-1.8-2h-.9c-1.35 0-1.8.9-1.8 2ZM7 10c0-1.1-.4-2-1.6-2h-.8C3.4 8 3 8.9 3 10v12h4v-8.01M17 15v7h4v-7c0-1.1-.4-2-1.6-2h-.8c-1.2 0-1.6.9-1.6 2Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M21 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M5.6 8.379H4c-.55 0-1 .45-1 1v8.62c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1v-8.62c0-.56-.45-1-1-1ZM12.8 5.191h-1.6c-.55 0-1 .45-1 1v11.81c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V6.191c0-.55-.45-1-1-1ZM20 2h-1.6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1H20c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M2 22h20"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9.75 4v18h4.5V4c0-1.1-.45-2-1.8-2h-.9c-1.35 0-1.8.9-1.8 2ZM3 10v12h4V10c0-1.1-.4-2-1.6-2h-.8C3.4 8 3 8.9 3 10ZM17 15v7h4v-7c0-1.1-.4-2-1.6-2h-.8c-1.2 0-1.6.9-1.6 2Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M14.25 22.75h-4.5c-.41 0-.75-.34-.75-.75V4c0-1.72.95-2.75 2.55-2.75h.9C14.05 1.25 15 2.28 15 4v18c0 .41-.34.75-.75.75Zm-3.75-1.5h3V4c0-1.15-.54-1.25-1.05-1.25h-.9c-.51 0-1.05.1-1.05 1.25v17.25ZM7 22.75H3c-.41 0-.75-.34-.75-.75V10c0-1.72.88-2.75 2.35-2.75h.8c1.47 0 2.35 1.03 2.35 2.75v12c0 .41-.34.75-.75.75Zm-3.25-1.5h2.5V10c0-1.25-.55-1.25-.85-1.25h-.8c-.3 0-.85 0-.85 1.25v11.25ZM21 22.75h-4c-.41 0-.75-.34-.75-.75v-7c0-1.72.88-2.75 2.35-2.75h.8c1.47 0 2.35 1.03 2.35 2.75v7c0 .41-.34.75-.75.75Zm-3.25-1.5h2.5V15c0-1.25-.55-1.25-.85-1.25h-.8c-.3 0-.85 0-.85 1.25v6.25Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <g opacity=".4" :stroke="color" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 10.742v3.2M12 9v6.68M17 10.742v3.2"></path>
    </g>
    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
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
            default: 32,
        },
        color: {
            type: String,
            default: "currentColor",
        },
    },
})
</script>