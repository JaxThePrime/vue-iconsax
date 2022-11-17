<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M22 21.25c0 .41-.34.75-.75.75H2.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18.5c.41 0 .75.34.75.75ZM15.391 4.522l-10.74 10.74c-.41.41-1.07.41-1.47 0h-.01a3.58 3.58 0 0 1 0-5.05l7.15-7.15c1.4-1.4 3.66-1.4 5.06 0 .41.39.41 1.06.01 1.46Z"
      :fill="color"
    ></path>
    <path
      d="m20.821 8.49-3.05-3.05c-.41-.41-1.07-.41-1.47 0L5.561 16.18c-.41.4-.41 1.06 0 1.47l3.05 3.06a3.591 3.591 0 0 0 5.06 0l7.14-7.15c1.42-1.4 1.42-3.67.01-5.07Zm-8.06 9.03-1.21 1.22c-.25.25-.66.25-.92 0a.658.658 0 0 1 0-.92l1.22-1.22c.24-.24.66-.24.91 0 .25.25.25.68 0 .92Zm3.97-3.97L14.291 16c-.25.24-.66.24-.92 0a.658.658 0 0 1 0-.92l2.45-2.45c.24-.24.66-.24.91 0 .25.26.25.67 0 .92Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M3.93 15.88 15.88 3.93M11.102 18.278l1.2-1.2M13.79 15.59l2.39-2.39"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M20.431 8.481c2.1 2.1 2.09 3.16-.03 5.28l-6.64 6.64c-2.12 2.12-3.18 2.13-5.28.03l-4.91-4.91c-2.1-2.1-2.09-3.16.03-5.28l6.64-6.64c2.12-2.12 3.18-2.13 5.28-.03l1.9 1.9M2 22h20"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="M21.25 22H2.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18.5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="m20.589 13.699-7.23 7.23a3.618 3.618 0 0 1-5.12.01l-4.61-4.61 12.36-12.36 4.61 4.61a3.618 3.618 0 0 1-.01 5.12Z"
      :fill="color"
    ></path>
    <path
      d="M15.989 3.97 3.619 16.33l-.91-.91a3.618 3.618 0 0 1 .01-5.12l7.23-7.23a3.618 3.618 0 0 1 5.12-.01l.92.91ZM12.89 17.599l-1.35 1.35c-.28.28-.73.28-1.01 0a.712.712 0 0 1 0-1.01l1.35-1.35c.28-.28.73-.28 1.01 0s.28.73 0 1.01ZM17.27 13.22l-2.69 2.69c-.28.28-.73.28-1.01 0a.712.712 0 0 1 0-1.01l2.69-2.69c.28-.28.73-.28 1.01 0 .27.28.27.73 0 1.01Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M3.93 15.88 15.88 3.93M11.101 18.28l1.2-1.2M13.793 15.589l2.39-2.39"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m3.601 10.239 6.64-6.64c2.12-2.12 3.18-2.13 5.28-.03l4.91 4.91c2.1 2.1 2.09 3.16-.03 5.28l-6.64 6.64c-2.12 2.12-3.18 2.13-5.28.03l-4.91-4.91c-2.1-2.1-2.1-3.15.03-5.28ZM2 21.998h20"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M3.931 16.631c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l11.95-11.95c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-11.95 11.96c-.14.14-.34.21-.53.21ZM11.1 19.03c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.2-1.2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.2 1.2a.75.75 0 0 1-.53.22ZM13.79 16.34c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.39-2.39c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.39 2.39c-.14.14-.34.22-.53.22Z"
      :fill="color"
    ></path>
    <path
      d="M11.099 22.749c-.98 0-1.96-.6-3.15-1.79l-4.91-4.91c-2.39-2.39-2.38-3.93.03-6.34l6.64-6.64c2.41-2.41 3.95-2.42 6.34-.03l4.91 4.91c2.39 2.39 2.38 3.93-.03 6.34l-6.64 6.64c-1.21 1.21-2.2 1.82-3.19 1.82Zm1.8-20c-.52 0-1.18.43-2.13 1.38l-6.64 6.64c-.95.95-1.38 1.61-1.38 2.12 0 .52.4 1.15 1.35 2.1l4.91 4.91c.95.95 1.57 1.35 2.09 1.35h.01c.52 0 1.17-.43 2.12-1.38l6.64-6.64c.95-.95 1.38-1.61 1.38-2.12 0-.52-.4-1.15-1.35-2.1l-4.91-4.91c-.94-.95-1.57-1.35-2.09-1.35Z"
      :fill="color"
    ></path>
    <path
      d="M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      opacity=".4"
      d="M3.93 15.88 15.88 3.93M11.102 18.278l1.2-1.2M13.793 15.59l2.39-2.39"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m3.601 10.238 6.64-6.64c2.12-2.12 3.18-2.13 5.28-.03l4.91 4.91c2.1 2.1 2.09 3.16-.03 5.28l-6.64 6.64c-2.12 2.12-3.18 2.13-5.28.03l-4.91-4.91c-2.1-2.1-2.1-3.15.03-5.28ZM2 22h20"
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
            default: "#292D32",
        },
    },
})
</script>