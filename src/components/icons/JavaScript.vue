<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      :fill="color"
      d="M19.88 2H4.11c-.6 0-1.06.52-.99 1.11l1.8 16.22c.04.4.33.74.72.85l6.08 1.74c.18.05.37.05.55 0l6.08-1.74c.39-.11.67-.45.72-.85l1.8-16.22A.993.993 0 0019.88 2zm-8.51 13.99c0 .24-.11.46-.3.6a.738.738 0 01-.66.12l-3.12-.9a.746.746 0 01-.51-.93c.11-.4.53-.62.93-.51l2.16.62V7.01c0-.41.34-.75.75-.75s.75.34.75.75v8.98zm5.88-.89c0 .34-.23.64-.57.73l-3.6.9c-.06.02-.12.02-.18.02-.34 0-.64-.23-.73-.57-.1-.4.14-.81.55-.91l3.03-.76v-1.7l-2.29.33a.736.736 0 01-.6-.18.765.765 0 01-.26-.57V7.44c0-.37.27-.69.64-.74l3.15-.45c.41-.06.79.23.85.64.06.41-.23.79-.64.85l-2.51.36v3.43l2.29-.33c.22-.03.43.03.6.18.16.14.26.35.26.57v3.15h.01z"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M10.62 7.012v8.98l-3.12-.9M16.5 7l-3.15.45v4.95l3.15-.45v3.15l-3.6.9"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m3.32 4.91-.2-1.8c-.07-.59.4-1.11.99-1.11h15.77c.6 0 1.06.52.99 1.11l-1.8 16.22c-.04.4-.33.74-.72.85l-6.08 1.74c-.18.05-.37.05-.55 0l-6.08-1.74a1.01 1.01 0 0 1-.72-.85l-1.1-9.92"
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
      d="M4.12 2h15.77c.6 0 1.06.52.99 1.11l-1.8 16.22c-.04.4-.33.74-.72.85l-6.08 1.74c-.18.05-.37.05-.55 0l-6.08-1.74a1.01 1.01 0 0 1-.72-.85L3.13 3.11A.993.993 0 0 1 4.12 2Z"
      :fill="color"
    ></path>
    <path
      d="M10.62 16.742c-.07 0-.14-.01-.21-.03l-3.12-.9a.746.746 0 0 1-.51-.93c.11-.4.53-.62.93-.51l2.16.62v-7.98c0-.41.34-.75.75-.75s.75.34.75.75v8.97c0 .24-.11.46-.3.6-.13.1-.29.16-.45.16ZM12.9 16.752c-.34 0-.64-.23-.73-.57-.1-.4.14-.81.55-.91l3.03-.76v-1.7l-2.29.33a.736.736 0 0 1-.6-.18.765.765 0 0 1-.26-.57v-4.94c0-.37.27-.69.64-.74l3.15-.45c.41-.06.79.23.85.64.06.41-.23.79-.64.85l-2.5.35v3.43l2.29-.33c.22-.03.43.03.6.18.16.14.26.35.26.57v3.15c0 .34-.23.64-.57.73l-3.6.9c-.06.01-.12.02-.18.02Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M4.1 2h15.8c.6 0 1.1.5 1 1.1l-1.8 16.2c0 .4-.3.7-.7.9l-6.1 1.7c-.2.1-.4.1-.5 0l-6.1-1.7c-.4-.1-.7-.4-.7-.9L3.1 3.1c0-.6.4-1.1 1-1.1Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M10.6 7v9l-3.1-.9M16.5 7l-3.1.4v5l3.1-.5v3.2l-3.6.9"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M12 22.71c-.16 0-.32-.02-.48-.07L5.44 20.9c-.69-.2-1.18-.78-1.26-1.49L2.38 3.19a1.751 1.751 0 0 1 1.74-1.94h15.77c.5 0 .97.21 1.3.58.33.37.49.87.44 1.36l-1.8 16.22c-.08.71-.57 1.29-1.26 1.49l-6.08 1.74c-.17.05-.33.07-.49.07ZM4.12 2.75c-.1 0-.16.05-.19.08a.24.24 0 0 0-.06.19l1.8 16.22c.01.1.08.19.18.21l6.08 1.74c.05.01.09.01.14 0l6.08-1.74c.1-.03.17-.11.18-.21l1.8-16.22c.01-.1-.04-.16-.06-.19a.26.26 0 0 0-.19-.08H4.12Z"
      :fill="color"
    ></path>
    <path
      d="M10.62 16.742c-.07 0-.14-.01-.21-.03l-3.12-.9a.746.746 0 0 1-.51-.93c.11-.4.53-.62.93-.51l2.16.62v-7.98c0-.41.34-.75.75-.75s.75.34.75.75v8.97c0 .24-.11.46-.3.6-.13.1-.29.16-.45.16ZM12.9 16.75c-.34 0-.64-.23-.73-.57-.1-.4.14-.81.55-.91l3.03-.76v-1.7l-2.29.33a.736.736 0 0 1-.6-.18.765.765 0 0 1-.26-.57V7.44c0-.37.27-.69.64-.74l3.15-.45c.41-.06.79.23.85.64.06.41-.23.79-.64.85l-2.51.36v3.43l2.29-.33c.22-.03.43.03.6.18.16.14.26.35.26.57v3.15c0 .34-.23.64-.57.73l-3.6.9a.88.88 0 0 1-.17.02Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M4.12 2h15.77c.6 0 1.06.52.99 1.11l-1.8 16.22c-.04.4-.33.74-.72.85l-6.08 1.74c-.18.05-.37.05-.55 0l-6.08-1.74a1.01 1.01 0 0 1-.72-.85L3.13 3.11A.993.993 0 0 1 4.12 2Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M10.62 7.012v8.98l-3.12-.9M16.5 7l-3.15.45v4.95l3.15-.45v3.15l-3.6.9"
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