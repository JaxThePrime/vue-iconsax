<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M12.75 16h2.75c2.8 0 3.5-.7 3.5-3.5V8.3c0-2.8-.7-3.5-3.5-3.5h-2.1c-.7 0-.85-.21-1.12-.56l-1.05-1.4c-.4-.53-.63-.84-1.68-.84H8.5C5.7 2 5 2.7 5 5.5v7c0 2.8.7 3.5 3.5 3.5h2.75v3c0 .05.02.09.03.14a2 2 0 0 0-1.14 1.14c-.05-.01-.09-.03-.14-.03H6c-.41 0-.75.34-.75.75s.34.75.75.75h4c.05 0 .09-.02.14-.03a1.992 1.992 0 0 0 3.72 0c.05.01.09.03.14.03h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-4c-.05 0-.09.02-.14.03a2 2 0 0 0-1.14-1.14c.01-.05.03-.09.03-.14v-3Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M12 16v3M10 21c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2M18 21h-4M10 21H6M5 5.5C5 2.7 5.7 2 8.5 2h1.05c1.05 0 1.28.31 1.68.84l1.05 1.4c.27.35.42.56 1.12.56h2.1c2.8 0 3.5.7 3.5 3.5v4.2c0 2.8-.7 3.5-3.5 3.5h-7C5.7 16 5 15.3 5 12.5V9.34"
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
      d="M18.75 21c0 .41-.34.75-.75.75h-4c-.05 0-.09-.02-.14-.03a1.992 1.992 0 0 1-3.72 0c-.05.01-.09.03-.14.03H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.05 0 .09.02.14.03a2 2 0 0 1 1.14-1.14c-.01-.05-.03-.09-.03-.14v-3h1.5v3c0 .05-.02.09-.03.14a2 2 0 0 1 1.14 1.14c.05-.01.09-.03.14-.03h4c.41 0 .75.34.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M19 8.3v4.2c0 2.8-.7 3.5-3.5 3.5h-7C5.7 16 5 15.3 5 12.5v-7C5 2.7 5.7 2 8.5 2h1.05c1.05 0 1.28.31 1.68.84l1.05 1.4c.27.35.42.56 1.12.56h2.1c2.8 0 3.5.7 3.5 3.5Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M12 16v3M12 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 21h-4M10 21H6"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M19 8.3v4.2c0 2.8-.7 3.5-3.5 3.5h-7C5.7 16 5 15.3 5 12.5v-7C5 2.7 5.7 2 8.5 2h1.05c1.05 0 1.28.31 1.68.84l1.05 1.4c.27.35.42.56 1.12.56h2.1c2.8 0 3.5.7 3.5 3.5Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M12 19.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M12 23.75c-1.52 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75 2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75Zm0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
      :fill="color"
    ></path>
    <path
      d="M18 21.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM10 21.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM15.5 16.75h-7c-3.22 0-4.25-1.03-4.25-4.25v-7c0-3.22 1.03-4.25 4.25-4.25h1.05c1.33 0 1.76.45 2.28 1.14l1.05 1.4c.2.26.2.26.52.26h2.1c3.22 0 4.25 1.03 4.25 4.25v4.2c0 3.22-1.03 4.25-4.25 4.25Zm-7-14c-2.39 0-2.75.36-2.75 2.75v7c0 2.39.36 2.75 2.75 2.75h7c2.39 0 2.75-.36 2.75-2.75V8.3c0-2.39-.36-2.75-2.75-2.75h-2.1c-.99 0-1.35-.37-1.71-.85l-1.06-1.41c-.35-.47-.4-.54-1.08-.54H8.5Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      opacity=".4"
      d="M12 16v3"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M18 21h-4M10 21H6"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M19 8.3v4.2c0 2.8-.7 3.5-3.5 3.5h-7C5.7 16 5 15.3 5 12.5v-7C5 2.7 5.7 2 8.5 2h1.05c1.05 0 1.28.31 1.68.84l1.05 1.4c.27.35.42.56 1.12.56h2.1c2.8 0 3.5.7 3.5 3.5Z"
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
            default: "#292D32",
        },
    },
})
</script>