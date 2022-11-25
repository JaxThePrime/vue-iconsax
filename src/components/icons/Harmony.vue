<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M22 5.738v12.52c0 2.06-1.68 3.74-3.74 3.74h-.52c-2.06 0-3.74-1.68-3.74-3.74v-6.38c.35-.04.69-.09 1.01-.16 2.04-.37 3.59-1.07 4.71-1.78 1.44-.9 2.28-2.5 2.28-4.2z"
    ></path>
    <path
      :fill="color"
      d="M22 5.74c0 1.7-.84 3.3-2.28 4.2-1.12.71-2.67 1.41-4.71 1.78-.32.07-.66.12-1.01.16v.75c-1.19.15-2.46.07-3.93.22l-.07.01v5.4C10 20.32 8.32 22 6.26 22h-.52C3.68 22 2 20.32 2 18.26c0-.09 0-.19.02-.28.08-1.6.9-3.07 2.26-3.92 1.12-.71 2.67-1.41 4.7-1.78.32-.07.67-.12 1.02-.16v-.77c1.56-.14 2.75-.06 3.91-.21l.09-.01V5.74C14 3.68 15.68 2 17.74 2h.52A3.747 3.747 0 0122 5.74z"
    ></path>
    <path
      :fill="color"
      d="M10 5.74v6.38c-.35.04-.7.09-1.02.16-2.03.37-3.58 1.07-4.7 1.78-1.36.85-2.18 2.32-2.26 3.92L2 18V5.74C2 3.68 3.68 2 5.74 2h.52C8.32 2 10 3.68 10 5.74z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M22 5.74c0 1.7-.84 3.3-2.28 4.2-1.3.82-3.18 1.65-5.72 1.94V5.74C14 3.68 15.68 2 17.74 2h.52C20.32 2 22 3.68 22 5.74Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M22 8v10.26c0 2.06-1.68 3.74-3.74 3.74h-.52C15.68 22 14 20.32 14 18.26v-6.38C19.58 11.23 22 8 22 8ZM2 18.261c0-1.7.84-3.3 2.28-4.2 1.3-.82 3.18-1.65 5.72-1.94v6.14c0 2.06-1.68 3.74-3.74 3.74h-.52c-2.06 0-3.74-1.68-3.74-3.74Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M2 5.74C2 3.68 3.68 2 5.74 2h.52C8.32 2 10 3.68 10 5.74v6.38C4.42 12.77 2 16 2 16V9.68"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M10 12.099c.63-.06 1.29-.1 2-.1s1.37-.04 2-.12"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M2 18v-2.77"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M22 5.738v12.52c0 2.06-1.68 3.74-3.74 3.74h-.52c-2.06 0-3.74-1.68-3.74-3.74v-6.38c.35-.04.69-.09 1.01-.16 2.04-.37 3.59-1.07 4.71-1.78 1.44-.9 2.28-2.5 2.28-4.2Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M22 5.74c0 1.7-.84 3.3-2.28 4.2-1.12.71-2.67 1.41-4.71 1.78-.32.07-.66.12-1.01.16v.75c-1.19.15-2.46.07-3.93.22l-.07.01v5.4C10 20.32 8.32 22 6.26 22h-.52C3.68 22 2 20.32 2 18.26c0-.09 0-.19.02-.28.08-1.6.9-3.07 2.26-3.92 1.12-.71 2.67-1.41 4.7-1.78.32-.07.67-.12 1.02-.16v-.77c1.56-.14 2.75-.06 3.91-.21l.09-.01V5.74C14 3.68 15.68 2 17.74 2h.52A3.747 3.747 0 0 1 22 5.74Z"
      :fill="color"
    ></path>
    <path
      d="M10 5.74v6.38c-.35.04-.7.09-1.02.16-2.03.37-3.58 1.07-4.7 1.78-1.36.85-2.18 2.32-2.26 3.92L2 18V5.74C2 3.68 3.68 2 5.74 2h.52C8.32 2 10 3.68 10 5.74Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M22 5.7c0 1.7-.8 3.3-2.3 4.2-1.3.8-3.2 1.6-5.7 1.9V5.7c0-2 1.7-3.7 3.7-3.7h.5C20.3 2 22 3.7 22 5.7Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M22 8v10.3c0 2.1-1.7 3.7-3.7 3.7h-.5c-2.1 0-3.7-1.7-3.7-3.7v-6.4C19.6 11.2 22 8 22 8ZM2 18.3c0-1.7.8-3.3 2.3-4.2 1.3-.8 3.2-1.6 5.7-1.9v6.1c0 2.1-1.7 3.7-3.7 3.7h-.6c-2 0-3.7-1.7-3.7-3.7Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M2 16V5.7C2 3.7 3.7 2 5.7 2h.5C8.3 2 10 3.7 10 5.7v6.4c-5.6.7-8 3.9-8 3.9ZM10 12.1c.6-.1 1.3-.1 2-.1s1.4 0 2-.1"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M13.25 12.72V5.74a4.49 4.49 0 0 1 4.49-4.49h.52a4.49 4.49 0 0 1 4.49 4.49c0 1.99-.98 3.8-2.63 4.83-1.75 1.1-3.78 1.79-6.03 2.05l-.84.1Zm4.49-9.97c-1.65 0-2.99 1.34-2.99 2.99v5.27c1.7-.29 3.23-.87 4.57-1.71 1.19-.75 1.93-2.11 1.93-3.56 0-1.65-1.34-2.99-2.99-2.99h-.52Z"
      :fill="color"
    ></path>
    <path
      d="M18.26 22.75h-.52a4.49 4.49 0 0 1-4.49-4.49v-7.05l.66-.08c5.16-.6 7.47-3.56 7.49-3.59l1.35-1.77v12.48c0 2.49-2.01 4.5-4.49 4.5Zm-3.51-10.22v5.73c0 1.65 1.34 2.99 2.99 2.99h.52c1.65 0 2.99-1.34 2.99-2.99V9.78c-1.24.99-3.36 2.26-6.5 2.75ZM6.26 22.751h-.52a4.49 4.49 0 0 1-4.49-4.49c0-1.99.98-3.8 2.63-4.83 1.75-1.1 3.78-1.79 6.03-2.05l.84-.1v6.98a4.49 4.49 0 0 1-4.49 4.49Zm2.99-9.76c-1.7.29-3.23.87-4.57 1.71-1.19.75-1.93 2.11-1.93 3.56 0 1.65 1.34 2.99 2.99 2.99h.52c1.65 0 2.99-1.34 2.99-2.99v-5.27Z"
      :fill="color"
    ></path>
    <path
      d="M1.25 18.22V5.74a4.49 4.49 0 0 1 4.49-4.49h.52a4.49 4.49 0 0 1 4.49 4.49v7.05l-.66.08c-5.16.6-7.47 3.56-7.49 3.59l-1.35 1.76ZM5.74 2.75c-1.65 0-2.99 1.34-2.99 2.99v8.48c1.24-.99 3.36-2.27 6.5-2.76V5.73c0-1.65-1.34-2.99-2.99-2.99h-.52v.01Z"
      :fill="color"
    ></path>
    <path
      d="m10.07 12.85-.14-1.49c1.48-.14 2.78-.06 3.98-.22l.19 1.49c-1.23.15-2.52.07-4.03.22Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M22 5.74c0 1.7-.84 3.3-2.28 4.2-1.3.82-3.18 1.65-5.72 1.94V5.74C14 3.68 15.68 2 17.74 2h.52C20.32 2 22 3.68 22 5.74Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      opacity=".4"
      d="M22 8v10.26c0 2.06-1.68 3.74-3.74 3.74h-.52C15.68 22 14 20.32 14 18.26v-6.38C19.58 11.23 22 8 22 8Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M2 18.261c0-1.7.84-3.3 2.28-4.2 1.3-.82 3.18-1.65 5.72-1.94v6.14c0 2.06-1.68 3.74-3.74 3.74h-.52c-2.06 0-3.74-1.68-3.74-3.74Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      opacity=".4"
      d="M2 16V5.74C2 3.68 3.68 2 5.74 2h.52C8.32 2 10 3.68 10 5.74v6.38C4.42 12.77 2 16 2 16Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M10 12.099c.63-.06 1.29-.1 2-.1s1.37-.04 2-.12"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
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