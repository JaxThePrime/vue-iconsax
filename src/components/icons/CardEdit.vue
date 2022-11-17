<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M13.5 4.608v2.93c0 .67-.54 1.21-1.21 1.21H3.21c-.68 0-1.21-.56-1.21-1.23.01-1.13.46-2.16 1.21-2.91S5 3.398 6.14 3.398h6.15c.67 0 1.21.54 1.21 1.21ZM2 11.46v5c0 2.29 1.85 4.14 4.14 4.14h11.71c2.29 0 4.15-1.86 4.15-4.15v-4.99c0-.67-.54-1.21-1.21-1.21H3.21c-.67 0-1.21.54-1.21 1.21Zm6 5.79H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75Zm6.5 0h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM19.97 1.75h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03V3.78c0-1.27-.76-2.03-2.03-2.03Zm-1.96 5.57c-.03.03-.1.07-.15.07l-1.04.15c-.03.01-.07.01-.1.01-.15 0-.28-.05-.37-.15a.528.528 0 0 1-.14-.47l.15-1.04c.01-.05.04-.12.07-.15l1.7-1.7c.03.07.06.15.09.23.04.08.08.15.12.22.03.06.07.12.11.16.04.06.08.12.11.15a1.848 1.848 0 0 0 .32.33c.02.02.04.04.05.04.05.04.11.09.15.12.06.04.11.08.17.11.07.04.15.08.23.12.08.04.16.07.23.09l-1.7 1.71Zm2.39-2.39-.33.33c-.01.02-.04.03-.07.03h-.03c-.72-.21-1.29-.78-1.5-1.5-.01-.04 0-.08.03-.11l.33-.33c.54-.54 1.05-.53 1.58 0 .27.27.4.53.4.79-.01.26-.14.52-.41.79Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M2 8.5h9.5M6 16.5h2M10.5 16.5h4"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M2 11.03V7.89c0-3.51.89-4.39 4.44-4.39h8.06M22 12.031v4.08c0 3.51-.89 4.39-4.44 4.39H6.44c-3.55 0-4.44-.88-4.44-4.39v-1.11"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m19.08 4.131-3.71 3.71c-.14.14-.28.42-.31.62l-.2 1.42c-.07.51.29.87.8.8l1.42-.2c.2-.03.48-.17.62-.31l3.71-3.71c.64-.64.94-1.38 0-2.32-.95-.95-1.69-.65-2.33-.01Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M18.55 4.66c.32 1.13 1.2 2.01 2.32 2.32"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M22 7.768v1.23H2v-1.46c0-2.29 1.86-4.14 4.15-4.14H16v2.57c0 1.27.76 2.03 2.03 2.03h2.94c.4 0 .74-.07 1.03-.23Z"
      :fill="color"
    ></path>
    <path
      d="M2 9v7.46c0 2.29 1.86 4.14 4.15 4.14h11.7c2.29 0 4.15-1.85 4.15-4.14V9H2Zm6 8.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75Zm6.5 0h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM20.97 1h-2.94C16.76 1 16 1.76 16 3.03v2.94C16 7.24 16.76 8 18.03 8h2.94C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1Zm-1.96 5.57c-.03.03-.1.07-.15.07l-1.04.15c-.03.01-.07.01-.1.01-.15 0-.28-.05-.37-.15a.528.528 0 0 1-.14-.47l.15-1.04c.01-.05.04-.12.07-.15l1.7-1.7c.03.07.06.15.09.23.04.08.08.15.12.22.03.06.07.12.11.16.04.06.08.12.11.15a1.848 1.848 0 0 0 .32.33c.02.02.04.04.05.04.05.04.11.09.15.12.06.04.11.08.17.11.07.04.15.08.23.12.08.04.16.07.23.09l-1.7 1.71Zm2.39-2.39-.32.32a.09.09 0 0 1-.08.04h-.03c-.72-.21-1.29-.78-1.5-1.5-.01-.04 0-.08.03-.11l.33-.33c.54-.54 1.05-.53 1.58 0 .27.27.4.53.4.79-.01.26-.14.52-.41.79Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M1.996 8.5h9.5M5.996 16.5h2M10.496 16.5h4"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M21.996 12.03v4.08c0 3.51-.89 4.39-4.44 4.39H6.436c-3.55 0-4.44-.88-4.44-4.39V7.89c0-3.51.89-4.39 4.44-4.39h8.06"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m19.076 4.13-3.71 3.71c-.14.14-.28.42-.31.62l-.2 1.42c-.07.51.29.87.8.8l1.42-.2c.2-.03.48-.17.62-.31l3.71-3.71c.64-.64.94-1.38 0-2.32-.95-.95-1.69-.65-2.33-.01Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M18.546 4.66c.32 1.13 1.2 2.01 2.32 2.32"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M11.5 9.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 17.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.5 17.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M17.56 21.25H6.44c-3.98 0-5.19-1.2-5.19-5.14V7.89c0-3.94 1.21-5.14 5.19-5.14h8.06c.41 0 .75.34.75.75s-.34.75-.75.75H6.44c-3.14 0-3.69.54-3.69 3.64v8.21c0 3.1.55 3.64 3.69 3.64h11.11c3.14 0 3.69-.54 3.69-3.64v-4.08c0-.41.34-.75.75-.75s.75.34.75.75v4.08c.01 3.95-1.2 5.15-5.18 5.15Z"
      :fill="color"
    ></path>
    <path
      d="M15.521 11.438c-.39 0-.76-.14-1.02-.41-.32-.32-.46-.78-.39-1.26l.2-1.42c.05-.36.27-.79.52-1.04l3.71-3.71c1.47-1.47 2.75-.63 3.39 0 .63.63 1.47 1.91 0 3.39l-3.71 3.71c-.26.26-.69.47-1.04.52l-1.42.2c-.08.01-.16.02-.24.02Zm4.71-7.16c-.2 0-.38.14-.63.38l-3.7 3.71a.75.75 0 0 0-.1.2l-.2 1.35 1.36-.19a.75.75 0 0 0 .2-.1l3.71-3.71c.47-.47.54-.73 0-1.26-.26-.26-.45-.38-.64-.38Z"
      :fill="color"
    ></path>
    <path
      d="M20.868 7.742c-.07 0-.14-.01-.2-.03a4.121 4.121 0 0 1-2.84-2.84.76.76 0 0 1 .52-.93c.4-.11.81.12.93.52.25.87.94 1.56 1.81 1.81.4.11.63.53.52.92a.79.79 0 0 1-.74.55Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M1.996 8.5h9.5"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M5.996 16.5h2M10.496 16.5h4"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M21.996 12.03v4.08c0 3.51-.89 4.39-4.44 4.39H6.436c-3.55 0-4.44-.88-4.44-4.39V7.89c0-3.51.89-4.39 4.44-4.39h8.06"
      :stroke="color"
      strokeWidth="1.5"
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
      <path d="m19.076 4.131-3.71 3.71c-.14.14-.28.42-.31.62l-.2 1.42c-.07.51.29.87.8.8l1.42-.2c.2-.03.48-.17.62-.31l3.71-3.71c.64-.64.94-1.38 0-2.32-.95-.95-1.69-.65-2.33-.01Z"></path>
      <path d="M18.547 4.66c.32 1.13 1.2 2.01 2.32 2.32"></path>
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