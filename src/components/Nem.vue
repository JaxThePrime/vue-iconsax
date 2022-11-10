<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M15.07 17.88l-1.01 2.22c-.26.56-.64 1.05-1.15 1.39-.52.35-1.2.38-1.74.04-1.64-1.04-5.22-3.71-7.39-8.34-.08-.16.14-.32.28-.22.57.4 1.18.68 1.85.84.41.09.83.13 1.23.13 1.86 0 3.54-.95 4.66-1.77.33-.24.77-.29 1.11-.08 1.12.7 1.87 1.54 2.24 2.49.64 1.68-.06 3.23-.08 3.3z"
    ></path>
    <path
      :fill="color"
      d="M16.85 18.05c-.08.09-.24-.01-.2-.12.44-1.46 1.01-5.31-4.09-7.75-.31-.15-.54-.43-.58-.77-.62-5.56 4.17-6.56 4.17-6.56.39-.08.8-.08 1.18.03 1.08.29 2.18.69 3.29 1.23.95.46 1.5 1.46 1.36 2.51-.33 2.48-1.43 7.26-5.13 11.43z"
    ></path>
    <path
      :fill="color"
      d="M10.56 10.21l.03.2c.07.38-.09.77-.41.97-2.15 1.35-5.67 2.37-7.82-3.54-.2-.54-.32-.94-.36-1.52-.05-.76.38-1.63 1.06-1.95 1.76-.82 5.48-2.25 9.97-2.12.2.01.27.27.11.38-1.73 1.32-3.22 3.7-2.58 7.58z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M4.03 13.709C2.84 11.359 2 8.469 2 4.999c0 0 10-6 20 0 0 0 0 11-10 17 0 0-2.73-1.37-5.34-4.38"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M2.1 7.068c3.11 10.08 9.9 2.93 9.9 2.93-1-6 4.07-7.06 4.07-7.06l.59-.11M16.35 18.51S19 13 12 10"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".6"
      d="M16.36 18.488c-.01.01-.01.02-.01.02a20.414 20.414 0 0 1-4.35 3.49s-8.84-4.42-9.9-14.92c3.11 10.07 9.9 2.92 9.9 2.92 6.76 2.9 4.52 8.14 4.36 8.49Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M16.36 18.49c.16-.35 2.4-5.59-4.36-8.49-1-6 4.07-7.06 4.07-7.06l.59-.12h.01C18.41 3.23 20.2 3.92 22 5c0 0 0 7.5-5.64 13.49Z"
      :fill="color"
    ></path>
    <path
      d="m16.66 2.822-.59.12S11 4.002 12 10.002c0 0-6.79 7.15-9.9-2.92v-.01c-.06-.66-.1-1.36-.1-2.07 0 0 6.72-4.03 14.66-2.18Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M2 5s10-6 20 0c0 0 0 11-10 17 0 0-10-5-10-17Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M2.1 7.1C5.2 17.1 12 10 12 10c-1-6 4.1-7.1 4.1-7.1l.6-.1M16.4 18.5S19 13 12 10"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="m12.03 22.85-.37-.18C11.56 22.62 1.24 17.32 1.24 5v-.42l.36-.22c.1-.06 10.51-6.16 20.77 0l.36.22V5c0 .47-.12 11.5-10.36 17.64l-.34.21ZM2.75 5.44c.21 9.84 7.52 14.69 9.23 15.69 8.08-5.08 9.12-13.71 9.25-15.71C12.92.7 4.59 4.49 2.75 5.44Z"
      :fill="color"
    ></path>
    <path
      d="M7.1 13.21c-.34 0-.68-.04-1.03-.12-2.08-.49-3.65-2.44-4.69-5.8-.12-.4.1-.82.5-.94s.82.1.94.5c.87 2.81 2.08 4.42 3.6 4.78 1.81.42 3.87-1.05 4.78-1.9-.82-6.29 4.66-7.52 4.72-7.53l.6-.12c.4-.08.8.19.88.59.08.4-.19.8-.59.88l-.59.11c-.16.04-4.34 1.01-3.48 6.2.04.23-.03.47-.2.64-.11.14-2.59 2.71-5.44 2.71Z"
      :fill="color"
    ></path>
    <path
      d="M16.35 19.258c-.11 0-.22-.02-.32-.07a.75.75 0 0 1-.35-1c.01-.02.86-1.86.11-3.83-.58-1.52-1.95-2.75-4.08-3.67a.737.737 0 0 1-.39-.98c.17-.38.6-.56.99-.39 2.53 1.08 4.17 2.61 4.9 4.54.97 2.58-.12 4.89-.17 4.99-.14.25-.41.41-.69.41Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M2 4.999s10-6 20 0c0 0 0 11-10 17 0 0-10-5-10-17Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <g
      opacity=".4"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.1 7.068c3.11 10.08 9.9 2.93 9.9 2.93-1-6 4.07-7.06 4.07-7.06l.59-.11M16.35 18.51S19 13 12 10"></path>
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
            default: "#292D32",
        },
    },
})
</script>