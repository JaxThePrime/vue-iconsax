<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-if="type === 'bold'">
    <path
      d="M19.17 6.64c-.43-2.17-2.04-3.12-4.28-3.12H6.11c-2.64 0-4.4 1.32-4.4 4.4v5.15c0 2.22.91 3.52 2.41 4.08.22.08.46.15.71.19.4.09.83.13 1.28.13h8.79c2.64 0 4.4-1.32 4.4-4.4V7.92c0-.47-.04-.89-.13-1.28ZM5.53 12c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v3Zm4.97 1.14c-1.46 0-2.64-1.18-2.64-2.64 0-1.46 1.18-2.64 2.64-2.64 1.46 0 2.64 1.18 2.64 2.64 0 1.46-1.18 2.64-2.64 2.64ZM16.96 12c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v3Z"
      :fill="color"
    ></path>
    <path
      d="M22.302 10.918v5.15c0 3.08-1.76 4.41-4.41 4.41h-8.78c-.75 0-1.42-.11-2-.33-.47-.17-.88-.42-1.21-.74-.18-.17-.04-.44.21-.44h8.78c3.7 0 5.9-2.2 5.9-5.89v-5.16c0-.24.27-.39.44-.21.68.72 1.07 1.77 1.07 3.21Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'broken'">

    <path
      d="M1.7 7.92c0-3.08 1.76-4.4 4.4-4.4h8.79c2.24 0 3.85.95 4.28 3.12.08.39.12.81.12 1.28v5.15c0 3.08-1.76 4.4-4.4 4.4H6.1c-.45 0-.88-.04-1.28-.13-.25-.04-.49-.11-.71-.19-1.5-.56-2.41-1.86-2.41-4.08V12"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M22.298 15.01v1.06c0 3.08-1.76 4.4-4.4 4.4h-8.79c-.74 0-1.41-.1-1.99-.32-1.19-.44-2-1.35-2.29-2.81.4.09.83.13 1.28.13h8.79c2.64 0 4.4-1.32 4.4-4.4V7.92c0-.47-.04-.89-.12-1.28 1.91.39 3.12 1.73 3.12 4.28"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M13.14 10.5c0-1.46-1.18-2.64-2.64-2.64-1.46 0-2.64 1.18-2.64 2.64 0 1.46 1.18 2.64 2.64 2.64M4.777 8.3v4.4M16.219 8.3v4.4"
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
      d="M19.3 7.92v5.15c0 3.08-1.76 4.4-4.4 4.4H6.11c-.45 0-.88-.04-1.28-.13-.25-.04-.49-.11-.71-.19-1.5-.56-2.41-1.86-2.41-4.08V7.92c0-3.08 1.76-4.4 4.4-4.4h8.79c2.24 0 3.85.95 4.28 3.12.07.4.12.81.12 1.28Z"
      :fill="color"
    ></path>
    <path
      d="M22.298 10.92v5.15c0 3.08-1.76 4.4-4.4 4.4h-8.79c-.74 0-1.41-.1-1.99-.32-1.19-.44-2-1.35-2.29-2.81.4.09.83.13 1.28.13h8.79c2.64 0 4.4-1.32 4.4-4.4V7.92c0-.47-.04-.89-.12-1.28 1.9.4 3.12 1.74 3.12 4.28Z"
      :fill="color"
    ></path>
    <path
      d="M10.5 13.14a2.64 2.64 0 1 0 0-5.28 2.64 2.64 0 0 0 0 5.28ZM4.781 8.25c-.41 0-.75.34-.75.75v3c0 .41.34.75.75.75s.75-.34.75-.75V9c0-.41-.33-.75-.75-.75ZM16.21 8.25c-.41 0-.75.34-.75.75v3c0 .41.34.75.75.75s.75-.34.75-.75V9c0-.41-.33-.75-.75-.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'linear'">

    <path
      d="M19.3 7.92v5.15c0 3.08-1.76 4.4-4.4 4.4H6.11c-.45 0-.88-.04-1.28-.13-.25-.04-.49-.11-.71-.19-1.5-.56-2.41-1.86-2.41-4.08V7.92c0-3.08 1.76-4.4 4.4-4.4h8.79c2.24 0 3.85.95 4.28 3.12.07.4.12.81.12 1.28Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M22.301 10.92v5.15c0 3.08-1.76 4.4-4.4 4.4h-8.79c-.74 0-1.41-.1-1.99-.32-1.19-.44-2-1.35-2.29-2.81.4.09.83.13 1.28.13h8.79c2.64 0 4.4-1.32 4.4-4.4V7.92c0-.47-.04-.89-.12-1.28 1.9.4 3.12 1.74 3.12 4.28Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M10.498 13.14a2.64 2.64 0 1 0 0-5.28 2.64 2.64 0 0 0 0 5.28ZM4.78 8.3v4.4M16.222 8.3v4.4"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'outline'">

    <path
      d="M14.89 18.222H6.1c-.52 0-1.01-.05-1.45-.15a3.74 3.74 0 0 1-.8-.22c-1.33-.5-2.9-1.73-2.9-4.79v-5.15c0-3.27 1.88-5.15 5.15-5.15h8.79c2.76 0 4.54 1.32 5.02 3.72.09.44.13.91.13 1.43v5.15c0 3.29-1.87 5.16-5.15 5.16ZM6.11 4.282c-2.46 0-3.65 1.19-3.65 3.65v5.15c0 1.79.63 2.89 1.92 3.38.2.07.39.12.57.15.38.08.75.12 1.16.12h8.79c2.46 0 3.65-1.19 3.65-3.65v-5.15c0-.42-.03-.79-.1-1.13-.34-1.7-1.5-2.52-3.55-2.52H6.11Z"
      :fill="color"
    ></path>
    <path
      d="M17.891 21.22h-8.79c-.85 0-1.61-.12-2.26-.37-1.47-.55-2.43-1.71-2.76-3.37a.74.74 0 0 1 .21-.68.73.73 0 0 1 .69-.19c.33.07.7.11 1.12.11h8.79c2.46 0 3.65-1.19 3.65-3.65V7.92c0-.42-.03-.79-.1-1.13-.05-.25.03-.5.2-.68.18-.18.43-.26.68-.2 2.4.49 3.72 2.27 3.72 5.01v5.15c0 3.28-1.87 5.15-5.15 5.15Zm-11.97-3c.32.58.8.99 1.46 1.23.48.18 1.06.27 1.73.27h8.79c2.46 0 3.65-1.19 3.65-3.65v-5.15c0-1.58-.49-2.63-1.5-3.18v5.33c0 3.27-1.88 5.15-5.15 5.15H5.921Z"
      :fill="color"
    ></path>
    <path
      d="M10.5 13.89c-1.87 0-3.39-1.52-3.39-3.39s1.52-3.39 3.39-3.39 3.39 1.52 3.39 3.39-1.52 3.39-3.39 3.39Zm0-5.28c-1.04 0-1.89.85-1.89 1.89s.85 1.89 1.89 1.89 1.89-.85 1.89-1.89-.85-1.89-1.89-1.89ZM4.781 13.45c-.41 0-.75-.34-.75-.75V8.3c0-.41.34-.75.75-.75s.75.34.75.75v4.4c0 .41-.33.75-.75.75ZM16.21 13.45c-.41 0-.75-.34-.75-.75V8.3c0-.41.34-.75.75-.75s.75.34.75.75v4.4c0 .41-.33.75-.75.75Z"
      :fill="color"
    ></path>
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" v-else-if="type === 'twotone'">

    <path
      d="M19.3 7.92v5.15c0 3.08-1.76 4.4-4.4 4.4H6.11c-.45 0-.88-.04-1.28-.13-.25-.04-.49-.11-.71-.19-1.5-.56-2.41-1.86-2.41-4.08V7.92c0-3.08 1.76-4.4 4.4-4.4h8.79c2.24 0 3.85.95 4.28 3.12.07.4.12.81.12 1.28Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M22.298 10.92v5.15c0 3.08-1.76 4.4-4.4 4.4h-8.79c-.74 0-1.41-.1-1.99-.32-1.19-.44-2-1.35-2.29-2.81.4.09.83.13 1.28.13h8.79c2.64 0 4.4-1.32 4.4-4.4V7.92c0-.47-.04-.89-.12-1.28 1.9.4 3.12 1.74 3.12 4.28Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M10.5 13.14a2.64 2.64 0 1 0 0-5.28 2.64 2.64 0 0 0 0 5.28Z"
      :stroke="color"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M4.781 8.3v4.4M16.219 8.3v4.4"
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