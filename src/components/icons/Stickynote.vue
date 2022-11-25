<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M8.29 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM15.71 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM21.5 15.82c0 .15-.05.3-.18.43l-5.51 5.55c-.13.14-.3.2-.47.2-.33 0-.65-.26-.65-.64v-3.5c0-1.46 1.24-2.67 2.76-2.67.95-.01 2.27-.01 3.4-.01.39 0 .65.31.65.64Z"
      :fill="color"
    ></path>
    <path
      d="M21.5 15.82c0 .15-.05.3-.18.43l-5.51 5.55c-.13.14-.3.2-.47.2-.33 0-.65-.26-.65-.64v-3.5c0-1.46 1.24-2.67 2.76-2.67.95-.01 2.27-.01 3.4-.01.39 0 .65.31.65.64Z"
      :fill="color"
    ></path>
    <path
      d="M19.57 4.5c-.66-.49-1.61-.02-1.61.81v.1c0 1.17-.84 2.25-2.01 2.37-1.35.14-2.49-.92-2.49-2.24V4.5c0-.55-.45-1-1-1h-.92c-.55 0-1 .45-1 1v.91c0 .88-.47 1.7-1.2 2.1-.04.03-.08.05-.12.07-.01 0-.01.01-.02.01-.07.03-.14.06-.22.09-.02.01-.04.01-.06.02-.12.04-.25.07-.39.08h-.01c-.15.02-.31.02-.46 0h-.01c-.14-.01-.27-.04-.39-.08-.1-.03-.2-.07-.3-.12a2.231 2.231 0 0 1-1.32-2.04v-.23c0-.77-.82-1.23-1.47-.9-.01.01-.02.01-.03.02h-.01c-.07.05-.13.1-.2.15a4.274 4.274 0 0 0-.52.49c-.08.08-.15.16-.22.25-.05.06-.11.12-.15.19-.05.06-.09.13-.13.19a3.498 3.498 0 0 0-.27.46c-.02.02-.03.03-.03.05-.06.12-.12.24-.16.37-.03.05-.04.09-.06.14-.02.04-.03.09-.05.13-.03.1-.06.21-.09.32-.04.14-.07.29-.09.44a5.902 5.902 0 0 0-.06.76v8.76A4.87 4.87 0 0 0 7.37 22h4.82c.55 0 1-.45 1-1v-3.14c0-2.3 1.91-4.17 4.26-4.17.53-.01 1.82-.01 3.05-.01.55 0 1-.45 1-1V8.37c0-1.59-.76-2.98-1.93-3.87Zm-8.44 11.41c-.09.3-.37.51-.7.51H6.79c-.05 0-.09 0-.13-.02a.725.725 0 0 1-.62-.73c0-.42.33-.76.75-.76h3.64c.41 0 .75.34.75.76 0 .08-.01.17-.05.24Zm2.78-3.71c-.09.3-.37.51-.7.51H6.79c-.05 0-.09 0-.13-.02a.725.725 0 0 1-.62-.73c0-.42.33-.76.75-.76h6.42c.42 0 .75.34.75.76 0 .08-.01.17-.05.24Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M8 2v3M16 2v3M7 11h8M7 15h5M3 9.65c0-4.7 1.67-5.96 5-6.15h8c3.33.18 5 1.45 5 6.15V16M15 22H9c-5 0-6-2.06-6-6.18v-2.09"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m21 16-6 6v-3c0-2 1-3 3-3h3Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M21.5 8.37v7.45c0 .15-.05.3-.18.43l-5.51 5.55c-.13.14-.3.2-.47.2H7.37a4.87 4.87 0 0 1-4.87-4.87V8.37A4.87 4.87 0 0 1 7.37 3.5h9.26a4.87 4.87 0 0 1 4.87 4.87Z"
      :fill="color"
    ></path>
    <path
      d="M8.29 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM15.71 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM14.78 12.71H7.36a.749.749 0 1 1 0-1.5h7.42a.749.749 0 1 1 0 1.5ZM12 16.422H7.36a.749.749 0 1 1 0-1.5H12a.749.749 0 1 1 0 1.5ZM21.5 15.82c0 .15-.05.3-.18.43l-5.51 5.55c-.13.14-.3.2-.47.2-.33 0-.65-.26-.65-.64v-3.5c0-1.46 1.24-2.67 2.76-2.67.95-.01 2.27-.01 3.4-.01.39 0 .65.31.65.64Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M8 2v3M16 2v3M7 11h8M7 15h5M15 22H9c-5 0-6-2.06-6-6.18V9.65c0-4.7 1.67-5.96 5-6.15h8c3.33.18 5 1.45 5 6.15V16"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m21 16-6 6v-3c0-2 1-3 3-3h3Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M8 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM16 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM15 11.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 15.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M15 22.75H9c-5.62 0-6.75-2.65-6.75-6.93V9.65c0-4.74 1.6-6.67 5.71-6.9H16c4.15.23 5.75 2.16 5.75 6.9V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.65c0-4.36-1.45-5.24-4.29-5.4H8c-2.8.16-4.25 1.04-4.25 5.4v6.17c0 3.83.73 5.43 5.25 5.43h6c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M15 22.75a.753.753 0 0 1-.75-.75v-3c0-2.42 1.33-3.75 3.75-3.75h3c.3 0 .58.18.69.46.12.28.05.6-.16.82l-6 6a.75.75 0 0 1-.53.22Zm3-6c-1.58 0-2.25.67-2.25 2.25v1.19l3.44-3.44H18Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M8 2v3M16 2v3"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M7 11h8M7 15h5"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M15 22H9c-5 0-6-2.06-6-6.18V9.65c0-4.7 1.67-5.96 5-6.15h8c3.33.18 5 1.45 5 6.15V16"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m21 16-6 6v-3c0-2 1-3 3-3h3Z"
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