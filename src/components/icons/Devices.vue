<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M20 6v.24h-5.13c-2.97 0-4.35 1.38-4.35 4.35v5.11h-.77v3.55h.77v1.5H4.95c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.3V15.7H6c-3.13 0-3.97-.77-4-3.8V6c0-3.2.8-4 4-4h10c3.2 0 4 .8 4 4Z"
      :fill="color"
    ></path>
    <path
      d="M20 7.788c-.25-.03-.54-.05-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v8.66c.01.62.08 1.11.23 1.5.35.91 1.14 1.25 2.62 1.25h4.28c2.14 0 2.85-.71 2.85-2.85v-8.56c0-1.83-.52-2.61-2-2.8Zm-2.99 2.3c.87 0 1.57.7 1.57 1.57 0 .87-.7 1.57-1.57 1.57-.87 0-1.57-.7-1.57-1.57 0-.87.7-1.57 1.57-1.57Zm0 9.06c-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62 0 1.18-.96 2.14-2.14 2.14Z"
      :fill="color"
    ></path>
    <path
      d="M20 7.788c-.25-.03-.54-.05-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v8.66c.01.62.08 1.11.23 1.5.35.91 1.14 1.25 2.62 1.25h4.28c2.14 0 2.85-.71 2.85-2.85v-8.56c0-1.83-.52-2.61-2-2.8Zm-2.99 2.3c.87 0 1.57.7 1.57 1.57 0 .87-.7 1.57-1.57 1.57-.87 0-1.57-.7-1.57-1.57 0-.87.7-1.57 1.57-1.57Zm0 9.06c-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62 0 1.18-.96 2.14-2.14 2.14Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M2 6c0-3.2.8-4 4-4h10c3.2 0 4 .8 4 4v1.79c-.25-.03-.54-.05-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v5.11H6c-3.2 0-4-.8-4-4v-1.65M9 15.7V20M2 11.898h10M5.95 20H12"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M20 7.788c-.25-.03-.54-.05-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v8.56c0 2.14.71 2.85 2.85 2.85h4.28c2.14 0 2.85-.71 2.85-2.85v-8.56c0-1.83-.52-2.61-2-2.8Zm-2.99 2.8a1.071 1.071 0 0 1 0 2.14c-.59 0-1.07-.48-1.07-1.07 0-.59.48-1.07 1.07-1.07Zm0 8.56c-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62 0 1.18-.96 2.14-2.14 2.14Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M19.15 17.007c0 1.18-.96 2.14-2.14 2.14-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62ZM17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14Z"
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
      d="M16 2H6c-3.2 0-4 .8-4 4v5.9c.03 3.03.87 3.8 4 3.8h2.25v3.55h-3.3c-.41 0-.75.34-.75.75s.34.75.75.75h7.3c-.15-.39-.22-.88-.23-1.5H9.75V15.7h2.27V10.59c0-2.14.71-2.85 2.85-2.85h4.28c.31 0 .6.02.85.05V6c0-3.2-.8-4-4-4Z"
      :fill="color"
    ></path>
    <path
      d="M20 7.788c-.25-.03-.54-.05-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v8.66c.01.62.08 1.11.23 1.5.35.91 1.14 1.25 2.62 1.25h4.28c2.14 0 2.85-.71 2.85-2.85v-8.56c0-1.83-.52-2.61-2-2.8Zm-2.99 2.3c.87 0 1.57.7 1.57 1.57 0 .87-.7 1.57-1.57 1.57-.87 0-1.57-.7-1.57-1.57 0-.87.7-1.57 1.57-1.57Zm0 9.06c-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62 0 1.18-.96 2.14-2.14 2.14Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M19.15 17.011c0 1.18-.96 2.14-2.14 2.14-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62ZM17.01 13.23a1.57 1.57 0 1 0 0-3.14 1.57 1.57 0 0 0 0 3.14Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M20 6v1.79c-.25-.03-.54-.05-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v5.11H6c-3.2 0-4-.8-4-4V6c0-3.2.8-4 4-4h10c3.2 0 4 .8 4 4ZM9 15.7V20M2 11.9h10M5.95 20H12"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M20 7.79c-.25-.03-.54-.05-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v8.56c0 2.14.71 2.85 2.85 2.85h4.28c2.14 0 2.85-.71 2.85-2.85v-8.56c0-1.83-.52-2.61-2-2.8Zm-2.99 2.8a1.071 1.071 0 0 1 0 2.14 1.071 1.071 0 0 1 0-2.14Zm0 8.56c-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62 0 1.18-.96 2.14-2.14 2.14Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M19.15 17.01c0 1.18-.96 2.14-2.14 2.14-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62ZM17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M17.01 13.48c-1 0-1.82-.82-1.82-1.82s.82-1.82 1.82-1.82 1.82.82 1.82 1.82-.82 1.82-1.82 1.82Zm0-2.14c-.18 0-.32.14-.32.32s.14.32.32.32.32-.14.32-.32-.14-.32-.32-.32Z"
      :fill="color"
    ></path>
    <path
      d="M12.02 16.45H6c-3.6 0-4.75-1.15-4.75-4.75V6C1.25 2.4 2.4 1.25 6 1.25h10c3.6 0 4.75 1.15 4.75 4.75v1.79c0 .21-.09.42-.25.56-.16.14-.37.21-.59.18-.22-.03-.48-.04-.76-.04h-4.28c-1.73 0-2.1.37-2.1 2.1v5.11c0 .41-.34.75-.75.75ZM6 2.75c-2.79 0-3.25.46-3.25 3.25v5.7c0 2.79.46 3.25 3.25 3.25h5.27v-4.36c0-2.56 1.04-3.6 3.6-3.6h4.38V6c0-2.79-.46-3.25-3.25-3.25H6Z"
      :fill="color"
    ></path>
    <path
      d="M9 20.75c-.41 0-.75-.34-.75-.75v-4.3c0-.41.34-.75.75-.75s.75.34.75.75V20c0 .41-.34.75-.75.75ZM12 12.648H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M12 20.75H5.95c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H12c.41 0 .75.34.75.75s-.34.75-.75.75ZM17.01 13.48c-1 0-1.82-.82-1.82-1.82s.82-1.82 1.82-1.82 1.82.82 1.82 1.82-.82 1.82-1.82 1.82Zm0-2.14c-.18 0-.32.14-.32.32s.14.32.32.32.32-.14.32-.32-.14-.32-.32-.32Z"
      :fill="color"
    ></path>
    <path
      d="M20 7.788c-.25-.03-.54-.05-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v8.56c0 2.14.71 2.85 2.85 2.85h4.28c2.14 0 2.85-.71 2.85-2.85v-8.56c0-1.83-.52-2.61-2-2.8Zm-2.99 2.8a1.071 1.071 0 0 1 0 2.14c-.59 0-1.07-.48-1.07-1.07 0-.59.48-1.07 1.07-1.07Zm0 8.56c-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62 0 1.18-.96 2.14-2.14 2.14Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17.011 19.901c-1.59 0-2.89-1.3-2.89-2.89 0-.64.22-1.27.61-1.77a2.88 2.88 0 0 1 2.28-1.12c.69 0 1.37.25 1.89.7.64.57 1 1.36 1 2.19 0 1.59-1.3 2.89-2.89 2.89Zm0-4.28c-.43 0-.83.2-1.1.54-.19.24-.29.54-.29.85 0 .77.62 1.39 1.39 1.39.77 0 1.39-.62 1.39-1.39 0-.4-.18-.78-.49-1.06-.24-.21-.57-.33-.9-.33ZM17.01 13.48c-1 0-1.82-.82-1.82-1.82s.82-1.82 1.82-1.82 1.82.82 1.82 1.82-.82 1.82-1.82 1.82Zm0-2.14c-.18 0-.32.14-.32.32s.14.32.32.32.32-.14.32-.32-.14-.32-.32-.32Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M20 6v1.79c-.25-.03-.54-.05-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v5.11H6c-3.2 0-4-.8-4-4V6c0-3.2.8-4 4-4h10c3.2 0 4 .8 4 4Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M2 11.898h10"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <g opacity=".4" :stroke="color" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 15.7V20M5.95 20H12"></path>
    </g>
    <path
      d="M17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M22 10.588v8.56c0 2.14-.71 2.85-2.85 2.85h-4.28c-2.14 0-2.85-.71-2.85-2.85v-8.56c0-2.14.71-2.85 2.85-2.85h4.28c.31 0 .6.02.85.05 1.48.19 2 .97 2 2.8Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M19.15 17.011c0 1.18-.96 2.14-2.14 2.14-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62ZM17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
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