<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M22 7.811v3.44h-5.25v-9.22c3.3.2 5.25 2.33 5.25 5.78ZM22 12.75v3.44c0 3.45-1.95 5.58-5.25 5.78v-9.22H22ZM7.25 12.75v9.22C3.95 21.77 2 19.64 2 16.19v-3.44h5.25ZM7.25 2.031v9.22H2v-3.44c0-3.45 1.95-5.58 5.25-5.78ZM15.25 2h-6.5v9.25h6.5V2ZM15.25 12.75h-6.5V22h6.5v-9.25Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M2.52 5.41C2.16 6.38 2 7.57 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9c-1.18 0-2.18.11-3.04.34M2 12h20M8.25 12v6M15.75 22V12M8.25 12V2M15.75 12V2.54"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path opacity=".4" d="M22 7.81V12h-6.25V2h.44C19.83 2 22 4.17 22 7.81Z" :fill="color"></path>
    <path
      d="M22 12v4.19c0 3.64-2.17 5.81-5.81 5.81h-.44V12H22ZM8.25 12v10h-.44C4.17 22 2 19.83 2 16.19V12h6.25Z"
      :fill="color"
    ></path>
    <path opacity=".4" d="M7.81 2C4.17 2 2 4.17 2 7.81V12h6.25V2h-.44Z" :fill="color"></path>
    <path d="M15.75 2h-7.5v10h7.5V2Z" :fill="color"></path>
    <path opacity=".4" d="M15.75 12h-7.5v10h7.5V12Z" :fill="color"></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM2 12h20M8.25 12v9.5M15.75 22V12M8.25 12V2M15.75 12V2.54"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      :fill="color"
    ></path>
    <path
      d="M22 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M8.25 22.25c-.41 0-.75-.34-.75-.75V12c0-.41.34-.75.75-.75s.75.34.75.75v9.5c0 .41-.34.75-.75.75ZM15.75 22.75c-.41 0-.75-.34-.75-.75V12c0-.41.34-.75.75-.75s.75.34.75.75v10c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M8.25 12.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75S9 1.59 9 2v10c0 .41-.34.75-.75.75ZM15.75 12.75c-.41 0-.75-.34-.75-.75V2.54c0-.41.34-.75.75-.75s.75.34.75.75V12c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <g opacity=".4" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 12h20M8.25 12v9.5M15.75 22V12M8.25 12V2M15.75 12V2.54"></path>
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
    },
})
</script>