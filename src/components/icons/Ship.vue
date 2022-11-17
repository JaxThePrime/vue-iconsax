<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="m21.63 14.66-.41 1.86C20.51 19.72 18 22 14.38 22H9.62C6 22 3.49 19.72 2.78 16.52l-.41-1.86c-.2-.91.34-1.94 1.21-2.29L5 11.8l5.51-2.21c.48-.19.99-.29 1.49-.29s1.01.1 1.49.29L19 11.8l1.42.57c.87.35 1.41 1.38 1.21 2.29Z"
      :fill="color"
    ></path>
    <path
      d="M19 8v1.44c0 .35-.36.6-.69.46l-4.27-1.71a5.607 5.607 0 0 0-4.09.01L5.69 9.91A.499.499 0 0 1 5 9.45V8c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3ZM14.5 5h-5V3c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v2Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M5.11 20.46c-1.17-.97-1.97-2.34-2.33-3.94l-.41-1.86c-.2-.91.34-1.94 1.21-2.29L5 11.8l5.51-2.21c.96-.38 2.02-.38 2.98 0L19 11.8l1.42.57c.87.35 1.41 1.38 1.21 2.29l-.41 1.86C20.51 19.72 18 22 14.38 22H9.62M12 22V10"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M19 8v3.8l-5.51-2.21c-.96-.38-2.02-.38-2.98 0L5 11.8V8c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3ZM14.5 5h-5V3c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v2Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'bulk'">

    <path
      d="m21.63 14.66-.41 1.86C20.51 19.72 18 22 14.38 22H9.62C6 22 3.49 19.72 2.78 16.52l-.41-1.86c-.2-.91.34-1.94 1.21-2.29L5 11.8l5.51-2.21c.48-.19.99-.29 1.49-.29s1.01.1 1.49.29L19 11.8l1.42.57c.87.35 1.41 1.38 1.21 2.29Z"
      :fill="color"
    ></path>
    <path
      opacity=".4"
      d="M19 8v3.8l-5.51-2.21c-.96-.38-2.02-.38-2.98 0L5 11.8V8c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3Z"
      :fill="color"
    ></path>
    <path d="M14.5 5h-5V3c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v2Z" :fill="color"></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M20.42 12.37c.87.35 1.41 1.38 1.21 2.29l-.41 1.86C20.51 19.72 18 22 14.38 22H9.62C6 22 3.49 19.72 2.78 16.52l-.41-1.86c-.2-.91.34-1.94 1.21-2.29L5 11.8l5.51-2.21c.96-.38 2.02-.38 2.98 0L19 11.8l1.42.57ZM12 22V10"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M19 8v3.8l-5.51-2.21c-.96-.38-2.02-.38-2.98 0L5 11.8V8c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3ZM14.5 5h-5V3c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v2Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M14.378 22.748h-4.76c-3.78 0-6.75-2.38-7.57-6.07l-.41-1.86c-.28-1.28.45-2.66 1.66-3.15l6.93-2.78a4.81 4.81 0 0 1 3.54 0l6.93 2.78c1.22.49 1.95 1.87 1.66 3.15l-.41 1.86c-.82 3.69-3.79 6.07-7.57 6.07Zm-2.38-12.7c-.41 0-.82.08-1.22.23l-6.93 2.78c-.53.21-.88.88-.76 1.43l.41 1.86c.67 3.02 3.01 4.89 6.11 4.89h4.76c3.1 0 5.44-1.87 6.11-4.89l.41-1.86c.12-.55-.23-1.22-.76-1.43l-6.93-2.78c-.38-.15-.79-.23-1.2-.23Z"
      :fill="color"
    ></path>
    <path
      d="M12 22.75c-.41 0-.75-.34-.75-.75V10c0-.41.34-.75.75-.75s.75.34.75.75v12c0 .41-.34.75-.75.75Z"
      :fill="color"
    ></path>
    <path
      d="M19.002 12.55c-.09 0-.19-.02-.28-.05l-5.51-2.21c-.78-.31-1.64-.31-2.43 0l-5.51 2.21a.76.76 0 0 1-.7-.08.738.738 0 0 1-.33-.62V8c0-2.07 1.68-3.75 3.75-3.75h8c2.07 0 3.75 1.68 3.75 3.75v3.8c0 .25-.12.48-.33.62-.12.09-.26.13-.41.13Zm-7-4c.6 0 1.2.11 1.77.34l4.48 1.8V8c0-1.24-1.01-2.25-2.25-2.25h-8c-1.24 0-2.25 1.01-2.25 2.25v2.69l4.48-1.8c.57-.22 1.17-.34 1.77-.34Z"
      :fill="color"
    ></path>
    <path
      d="M14.5 5.75h-5c-.41 0-.75-.34-.75-.75V3c0-.96.79-1.75 1.75-1.75h3c.96 0 1.75.79 1.75 1.75v2c0 .41-.34.75-.75.75Zm-4.25-1.5h3.5V3c0-.14-.11-.25-.25-.25h-3c-.14 0-.25.11-.25.25v1.25Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M20.42 12.37c.87.35 1.41 1.38 1.21 2.29l-.41 1.86C20.51 19.72 18 22 14.38 22H9.62C6 22 3.49 19.72 2.78 16.52l-.41-1.86c-.2-.91.34-1.94 1.21-2.29L5 11.8l5.51-2.21c.96-.38 2.02-.38 2.98 0L19 11.8l1.42.57ZM12 22V10"
      :stroke="color"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <g opacity=".4" :stroke="color" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 8v3.8l-5.51-2.21c-.96-.38-2.02-.38-2.98 0L5 11.8V8c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3ZM14.5 5h-5V3c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v2Z"></path>
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