<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="m20.9 9.85.59 9.89c.02.27-.11.45-.18.53-.08.09-.25.23-.53.23h-2.73l2.16-10.65h.69ZM22 6l-.01.02c.02.24 0 .49-.06.74l-7.37 13.53A2.228 2.228 0 0 1 12.38 22h8.4a2.21 2.21 0 0 0 2.21-2.38L22 6ZM11.45 2.241c.1-.4-.15-.81-.55-.91-.4-.09-.81.15-.91.55l-.5 2.07h1.54l.42-1.71ZM18.05 2.209c.09-.41-.17-.8-.58-.89a.75.75 0 0 0-.89.58l-.45 2.07h1.54l.38-1.76Z"
      :fill="color"
    ></path>
    <path
      d="M21.82 5.331c-.33-.8-1.11-1.37-2.07-1.37h-2.08l-.56 2.59c-.08.35-.39.59-.73.59-.05 0-.11 0-.16-.02a.765.765 0 0 1-.58-.89l.49-2.28h-5.1l-.63 2.6c-.08.34-.39.57-.73.57-.06 0-.12-.01-.18-.02a.75.75 0 0 1-.55-.91l.54-2.25H7.45c-.98 0-1.85.64-2.14 1.58L1.1 19.071c-.44 1.45.63 2.93 2.14 2.93h13.14c1.04 0 1.94-.7 2.18-1.71l3.37-13.53c.06-.25.08-.5.06-.74a2 2 0 0 0-.17-.69Zm-7.12 11.42h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Zm1-4h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M1.1 19.07c-.44 1.46.63 2.931 2.14 2.931h13.14c1.04 0 1.93-.7 2.18-1.71l3.37-13.53c.12-.5.08-.99-.11-1.42-.33-.8-1.12-1.38-2.07-1.38H7.45c-.98 0-1.86.64-2.14 1.59l-2.63 8.46"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M16 22h4.78c1.29 0 2.3-1.09 2.21-2.38L22 6M9.68 6.379l1.04-4.32M16.38 6.39l.94-4.34M7.7 12h8M14.7 16H14M6.7 16H11"
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
      d="M21.99 6.02c.02.24 0 .49-.06.74l-3.37 13.53A2.227 2.227 0 0 1 16.38 22H3.24c-1.51 0-2.58-1.48-2.14-2.93L5.31 5.54c.29-.94 1.16-1.58 2.14-1.58h12.3c.96 0 1.74.57 2.07 1.37a2 2 0 0 1 .17.69Z"
      :fill="color"
    ></path>
    <path
      d="M22.99 19.62A2.21 2.21 0 0 1 20.78 22h-4.4c1.04 0 1.94-.7 2.18-1.71l3.37-13.53c.06-.25.08-.5.06-.74L22 6l.99 13.62ZM9.68 7.131c-.06 0-.12-.01-.18-.02a.75.75 0 0 1-.55-.91l1.04-4.32c.1-.4.5-.64.91-.55.4.1.65.5.55.91l-1.04 4.32c-.08.34-.39.57-.73.57ZM16.38 7.142c-.05 0-.11 0-.16-.02a.765.765 0 0 1-.58-.89l.94-4.34c.09-.41.49-.66.89-.58.4.09.66.49.58.89l-.94 4.34c-.07.36-.38.6-.73.6ZM15.7 12.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.7 16.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="m21.93 6.76-3.37 13.53A2.228 2.228 0 0 1 16.38 22H3.24c-1.51 0-2.59-1.48-2.14-2.93L5.31 5.55a2.25 2.25 0 0 1 2.14-1.59h12.3c.95 0 1.74.58 2.07 1.38.19.43.23.92.11 1.42Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M16 22h4.78c1.29 0 2.3-1.09 2.21-2.38L22 6M9.68 6.38l1.04-4.32M16.38 6.39l.94-4.34M7.7 12h8M6.7 16h8"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M16.38 22.75H3.24c-.95 0-1.83-.44-2.4-1.21-.58-.78-.75-1.76-.46-2.69L4.59 5.32A2.982 2.982 0 0 1 7.45 3.2h12.3c1.21 0 2.3.72 2.76 1.84.25.58.3 1.24.15 1.89l-3.37 13.53a2.976 2.976 0 0 1-2.91 2.29ZM7.46 4.71a1.5 1.5 0 0 0-1.43 1.06L1.82 19.3c-.14.47-.06.96.24 1.36.28.38.72.6 1.19.6h13.14c.69 0 1.29-.47 1.45-1.14l3.37-13.54c.08-.33.06-.66-.07-.95-.24-.57-.77-.93-1.38-.93H7.46v.01Z"
      :fill="color"
    ></path>
    <path
      d="M20.78 22.75H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.78c.41 0 .79-.169 1.07-.469.28-.3.42-.7.39-1.11l-.99-13.62c-.03-.41.28-.77.69-.8.41-.02.77.28.8.69l.99 13.62c.06.82-.23 1.64-.79 2.24-.55.61-1.34.95-2.16.95ZM9.68 7.13c-.06 0-.12-.01-.18-.02a.75.75 0 0 1-.55-.91l1.04-4.32a.751.751 0 1 1 1.46.36l-1.04 4.32c-.08.34-.39.57-.73.57ZM16.38 7.142c-.05 0-.11 0-.16-.02a.765.765 0 0 1-.58-.89l.94-4.34c.09-.41.49-.66.89-.58.4.08.66.49.58.89l-.94 4.34c-.07.36-.38.6-.73.6ZM15.7 12.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.7 16.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="m21.93 6.761-3.37 13.53a2.228 2.228 0 0 1-2.18 1.71H3.24c-1.51 0-2.59-1.48-2.14-2.93L5.31 5.55a2.25 2.25 0 0 1 2.14-1.59h12.3c.95 0 1.74.58 2.07 1.38.19.43.23.92.11 1.42Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      opacity=".4"
      d="M16 22h4.78c1.29 0 2.3-1.09 2.21-2.38L22 6"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m9.68 6.379 1.04-4.32M16.38 6.39l.94-4.34"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M7.7 12h8M6.7 16h8"
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