<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M20 12v6c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4v-6c0-.55.45-1 1-1h1.97c.55 0 1 .45 1 1v3.14a2.014 2.014 0 0 0 2 2.01c.38 0 .76-.11 1.09-.33l.95-.62.88.59c.61.41 1.39.46 2.04.11.66-.35 1.07-1.02 1.07-1.77V12c0-.55.45-1 1-1h2c.55 0 1 .45 1 1ZM21.5 7v1c0 1.1-.53 2-2 2h-15c-1.53 0-2-.9-2-2V7c0-1.1.47-2 2-2h15c1.47 0 2 .9 2 2Z"
      :fill="color"
    ></path>
    <path
      d="M11.639 5.001h-5.52a.936.936 0 0 1 .03-1.3l1.42-1.42a.96.96 0 0 1 1.35 0l2.72 2.72ZM17.872 5.001h-5.52l2.72-2.72a.96.96 0 0 1 1.35 0l1.42 1.42c.36.36.37.93.03 1.3ZM13.971 11c.55 0 1 .45 1 1v3.13c0 .8-.89 1.28-1.55.83l-.9-.6a1 1 0 0 0-1.1 0l-.94.62c-.66.44-1.54-.04-1.54-.83V12c0-.55.45-1 1-1h4.03Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M3.969 18c0 3 1 4 4 4h8c3 0 4-1 4-4v-8h-16v3.84M21.5 7v1c0 1.1-.53 2-2 2h-15c-1.53 0-2-.9-2-2V7c0-1.1.47-2 2-2h15c1.47 0 2 .9 2 2Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M11.639 5.001h-5.52a.936.936 0 0 1 .03-1.3l1.42-1.42a.96.96 0 0 1 1.35 0l2.72 2.72ZM17.872 5.001h-5.52l2.72-2.72a.96.96 0 0 1 1.35 0l1.42 1.42c.36.36.37.93.03 1.3ZM8.941 10v5.14c0 .8.88 1.27 1.55.84l.94-.62a1 1 0 0 1 1.1 0l.89.6a.997.997 0 0 0 1.55-.83V10h-6.03Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path opacity=".4" d="M19.969 10v8c0 3-1 4-4 4h-8c-3 0-4-1-4-4v-8h16Z" :fill="color"></path>
    <path
      d="M21.5 7v1c0 1.1-.53 2-2 2h-15c-1.53 0-2-.9-2-2V7c0-1.1.47-2 2-2h15c1.47 0 2 .9 2 2Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M11.639 5.001h-5.52a.936.936 0 0 1 .03-1.3l1.42-1.42a.96.96 0 0 1 1.35 0l2.72 2.72ZM17.872 5.001h-5.52l2.72-2.72a.96.96 0 0 1 1.35 0l1.42 1.42c.36.36.37.93.03 1.3Z"
      :fill="color"
    ></path>
    <path
      opacity=".6"
      d="M8.941 10v5.14c0 .8.88 1.27 1.55.84l.94-.62a1 1 0 0 1 1.1 0l.89.6a.997.997 0 0 0 1.55-.83V10h-6.03Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M19.97 10h-16v8c0 3 1 4 4 4h8c3 0 4-1 4-4v-8ZM21.5 7v1c0 1.1-.53 2-2 2h-15c-1.53 0-2-.9-2-2V7c0-1.1.47-2 2-2h15c1.47 0 2 .9 2 2ZM11.64 5H6.12a.936.936 0 0 1 .03-1.3l1.42-1.42a.96.96 0 0 1 1.35 0L11.64 5ZM17.87 5h-5.52l2.72-2.72a.96.96 0 0 1 1.35 0l1.42 1.42c.36.36.37.93.03 1.3Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M8.94 10v5.14c0 .8.88 1.27 1.55.84l.94-.62a1 1 0 0 1 1.1 0l.89.6a.997.997 0 0 0 1.55-.83V10H8.94Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M15.969 22.75h-8c-3.42 0-4.75-1.33-4.75-4.75v-8c0-.41.34-.75.75-.75h16c.41 0 .75.34.75.75v8c0 3.42-1.33 4.75-4.75 4.75Zm-11.25-12V18c0 2.58.67 3.25 3.25 3.25h8c2.58 0 3.25-.67 3.25-3.25v-7.25h-14.5Z"
      :fill="color"
    ></path>
    <path
      d="M19.5 10.75h-15c-1.75 0-2.75-1-2.75-2.75V7c0-1.75 1-2.75 2.75-2.75h15c1.7 0 2.75 1.05 2.75 2.75v1c0 1.7-1.05 2.75-2.75 2.75Zm-15-5c-.91 0-1.25.34-1.25 1.25v1c0 .91.34 1.25 1.25 1.25h15c.88 0 1.25-.37 1.25-1.25V7c0-.88-.37-1.25-1.25-1.25h-15Z"
      :fill="color"
    ></path>
    <path
      d="M11.64 5.749H6.12c-.21 0-.41-.09-.55-.24-.61-.67-.59-1.7.05-2.34l1.42-1.42c.66-.66 1.75-.66 2.41 0l2.72 2.72c.21.21.28.54.16.82-.11.28-.38.46-.69.46Zm-4.97-1.5h3.17l-1.45-1.44a.205.205 0 0 0-.29 0l-1.42 1.42c0 .01-.01.01-.01.02Z"
      :fill="color"
    ></path>
    <path
      d="M17.87 5.749h-5.52a.74.74 0 0 1-.69-.46c-.12-.28-.05-.6.16-.82l2.72-2.72c.66-.66 1.75-.66 2.41 0l1.42 1.42c.64.64.67 1.67.05 2.34-.14.15-.34.24-.55.24Zm-3.7-1.5h3.17l-.02-.02-1.42-1.42a.205.205 0 0 0-.29 0l-1.44 1.44ZM9.941 16.9a1.752 1.752 0 0 1-1.75-1.75V10c0-.41.34-.75.75-.75h6.04c.41 0 .75.34.75.75v5.13c0 .65-.35 1.24-.92 1.54-.57.31-1.26.27-1.8-.09l-.89-.6a.24.24 0 0 0-.28 0l-.94.62c-.29.2-.63.3-.96.3Zm-.25-6.15v4.39c0 .13.08.19.13.22s.15.06.26-.01l.94-.62c.59-.39 1.35-.39 1.93 0l.89.6c.11.07.21.04.26.01.05-.03.13-.09.13-.22v-4.38h-4.54v.01Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M19.969 10h-16v8c0 3 1 4 4 4h8c3 0 4-1 4-4v-8ZM21.5 7v1c0 1.1-.53 2-2 2h-15c-1.53 0-2-.9-2-2V7c0-1.1.47-2 2-2h15c1.47 0 2 .9 2 2Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M11.639 5.001h-5.52a.936.936 0 0 1 .03-1.3l1.42-1.42a.96.96 0 0 1 1.35 0l2.72 2.72ZM17.872 5.001h-5.52l2.72-2.72a.96.96 0 0 1 1.35 0l1.42 1.42c.36.36.37.93.03 1.3ZM8.941 10v5.14c0 .8.88 1.27 1.55.84l.94-.62a1 1 0 0 1 1.1 0l.89.6a.997.997 0 0 0 1.55-.83V10h-6.03Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
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
    },
})
</script>