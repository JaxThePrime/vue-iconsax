<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M21 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 2.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.3 15.358l-1.55 1.55V6.698l1.55 1.55c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-2.83-2.83a.774.774 0 0 0-1.06 0l-2.83 2.83c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l1.55-1.55v10.21l-1.55-1.55a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l2.83 2.83a.75.75 0 0 0 1.06 0l2.83-2.83c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M3 2h18M12 6v12M14.832 7.72l-2.83-2.83-2.83 2.83M14.832 15.89l-2.83 2.83-2.83-2.83M10.05 22H21M3 22h2.98"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      opacity=".4"
      d="M21 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 2.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="m14.3 15.358-1.55 1.55V6.698l1.55 1.55c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-2.83-2.83a.774.774 0 0 0-1.06 0l-2.83 2.83c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l1.55-1.55v10.21l-1.55-1.55a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l2.83 2.83a.75.75 0 0 0 1.06 0l2.83-2.83c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M3 22h18M3 2h18M12 6v12M14.83 7.72 12 4.89 9.17 7.72M14.83 15.89 12 18.72l-2.83-2.83"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M21 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 2.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 18.75c-.41 0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75s.75.34.75.75v12c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M14.83 8.468c-.19 0-.38-.07-.53-.22l-2.3-2.3-2.3 2.3c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l2.83-2.83c.28-.28.78-.28 1.06 0l2.83 2.83c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM12 19.468a.75.75 0 0 1-.53-.22l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 2.3-2.3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.83 2.83a.75.75 0 0 1-.53.22Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M3 22h18M3 2h18"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <g opacity=".4" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 6v12M14.832 7.72l-2.83-2.83-2.83 2.83M14.832 15.89l-2.83 2.83-2.83-2.83"></path>
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