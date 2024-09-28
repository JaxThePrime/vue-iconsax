<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="size"
		:height="size"
		viewBox="0 0 24 24"
		fill="none"
		v-if="type === 'bold'"
	>
		<path
			d="M21.5 15.5c.28 0 .5.22.5.5v1c0 1.66-1.34 3-3 3 0-1.65-1.35-3-3-3s-3 1.35-3 3h-2c0-1.65-1.35-3-3-3s-3 1.35-3 3c-1.66 0-3-1.34-3-3v-2c0-.55.45-1 1-1h9.5a2.5 2.5 0 0 0 2.5-2.5V6c0-.55.45-1 1-1h.84c.72 0 1.38.39 1.74 1.01l.64 1.12c.09.16-.03.37-.22.37a2.5 2.5 0 0 0-2.5 2.5v3a2.5 2.5 0 0 0 2.5 2.5h2.5Z"
			:fill="color"
		></path>
		<path
			d="M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 12.53V14h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29l1.45 2.54c.17.3.26.64.26.99ZM13.08 2H5.69C3.65 2 2 3.65 2 5.69v6.39c0 .55.45 1 1 1h9.15c1.02 0 1.85-.83 1.85-1.85V2.92c0-.51-.41-.92-.92-.92Zm-3.7 5.91c0 .26-.14.51-.36.64l-1.25.75c-.13.08-.26.11-.39.11-.25 0-.5-.13-.64-.36-.22-.36-.1-.82.25-1.03l.89-.53V6.41c0-.41.34-.75.75-.75s.75.34.75.75v1.5Z"
			:fill="color"
		></path>
	</svg>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="size"
		:height="size"
		viewBox="0 0 24 24"
		fill="none"
		v-else-if="type === 'broken'"
	>
		<path
			d="M15 2v10c0 1.1-.9 2-2 2H2V7.62c.73.87 1.85 1.41 3.09 1.38 1.01-.02 1.92-.41 2.6-1.06.31-.26.57-.59.77-.95.36-.61.56-1.33.54-2.08-.03-1.17-.55-2.2-1.36-2.91H15Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M20.29 9H19c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v3c0 1.66-1.34 3-3 3h-1c0-1.1-.9-2-2-2s-2 .9-2 2h-4c0-1.1-.9-2-2-2s-2 .9-2 2H5c-1.06 0-1.99-.55-2.52-1.37"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M2 14h11c1.1 0 2-.9 2-2V5h1.84c.36 0 .71.1 1.01.27M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 12v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29L22 12Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M9 5c0 1.2-.53 2.27-1.36 3A4 4 0 0 1 5 9C2.79 9 1 7.21 1 5c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 9 5Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M5.25 3.75v1.5L4 6"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
	</svg>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="size"
		:height="size"
		viewBox="0 0 24 24"
		fill="none"
		v-else-if="type === 'bulk'"
	>
		<path
			d="M5 1c-.94 0-1.81.33-2.5.88A3.97 3.97 0 0 0 1 5c0 2.21 1.79 4 4 4a4 4 0 0 0 2.64-1C8.47 7.27 9 6.2 9 5c0-2.21-1.79-4-4-4Zm1 4.25c0 .26-.14.51-.36.64l-1.25.75c-.12.07-.25.11-.38.11-.25 0-.5-.13-.64-.36-.21-.36-.1-.82.26-1.03l.89-.53V3.75c0-.41.34-.75.75-.75s.75.34.75.75v1.5H6Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="M15 3v9c0 1.1-.9 2-2 2H2V7.62c.73.87 1.85 1.41 3.09 1.38 1.01-.02 1.92-.41 2.6-1.06.31-.26.57-.59.77-.95.36-.61.56-1.33.54-2.08-.03-1.17-.55-2.2-1.36-2.91H14c.55 0 1 .45 1 1Z"
			:fill="color"
		></path>
		<path
			d="M22 14v3c0 1.66-1.34 3-3 3h-1c0-1.1-.9-2-2-2s-2 .9-2 2h-4c0-1.1-.9-2-2-2s-2 .9-2 2H5c-1.66 0-3-1.34-3-3v-3h11c1.1 0 2-.9 2-2V5h1.84c.72 0 1.38.39 1.74 1.01L20.29 9H19c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 12.53V14h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29l1.45 2.54c.17.3.26.64.26.99Z"
			:fill="color"
		></path>
	</svg>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="size"
		:height="size"
		viewBox="0 0 24 24"
		fill="none"
		v-else-if="type === 'linear'"
	>
		<path
			d="M15 2v10c0 1.1-.9 2-2 2H2V7.62c.73.87 1.85 1.41 3.09 1.38 1.01-.02 1.92-.41 2.6-1.06.31-.26.57-.59.77-.95.36-.61.56-1.33.54-2.08-.03-1.17-.55-2.2-1.36-2.91H15Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M22 14v3c0 1.66-1.34 3-3 3h-1c0-1.1-.9-2-2-2s-2 .9-2 2h-4c0-1.1-.9-2-2-2s-2 .9-2 2H5c-1.66 0-3-1.34-3-3v-3h11c1.1 0 2-.9 2-2V5h1.84c.72 0 1.38.39 1.74 1.01L20.29 9H19c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 12v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29L22 12Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M9 5c0 1.2-.53 2.27-1.36 3A4 4 0 0 1 5 9C2.79 9 1 7.21 1 5c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 9 5Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M5.25 3.75v1.5L4 6"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
	</svg>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="size"
		:height="size"
		viewBox="0 0 24 24"
		fill="none"
		v-else-if="type === 'outline'"
	>
		<path
			d="M13 14.75H2c-.41 0-.75-.34-.75-.75V7.62c0-.32.2-.6.49-.71.3-.11.63-.02.83.22.61.73 1.56 1.14 2.5 1.11.8-.02 1.54-.32 2.1-.85.26-.22.47-.48.63-.77.31-.53.46-1.11.45-1.7-.02-.92-.42-1.76-1.1-2.37a.748.748 0 0 1-.21-.83c.11-.29.39-.49.7-.49H15c.41 0 .75.34.75.75v10c0 1.54-1.23 2.77-2.75 2.77Zm-10.25-1.5H13c.69 0 1.25-.56 1.25-1.25V2.75H9.19c.35.65.54 1.38.56 2.14.02.87-.2 1.73-.64 2.48-.24.43-.57.84-.93 1.14-.8.76-1.9 1.21-3.07 1.24-.83.03-1.65-.18-2.35-.56v4.06h-.01Z"
			:fill="color"
		></path>
		<path
			d="M19 20.75h-1c-.41 0-.75-.34-.75-.75a1.25 1.25 0 0 0-2.5 0c0 .41-.34.75-.75.75h-4c-.41 0-.75-.34-.75-.75a1.25 1.25 0 0 0-2.5 0c0 .41-.34.75-.75.75H5c-2.07 0-3.75-1.68-3.75-3.75v-3c0-.41.34-.75.75-.75h11c.69 0 1.25-.56 1.25-1.25V5c0-.41.34-.75.75-.75h1.84c.99 0 1.9.53 2.39 1.39l1.71 2.99c.13.23.13.52 0 .75-.13.23-.38.37-.65.37H19c-.14 0-.25.11-.25.25v3c0 .14.11.25.25.25h3c.41 0 .75.34.75.75v3c0 2.07-1.68 3.75-3.75 3.75Zm-.35-1.5H19c1.24 0 2.25-1.01 2.25-2.25v-2.25H19c-.96 0-1.75-.79-1.75-1.75v-3c0-.96.78-1.75 1.75-1.75l-1.07-1.87c-.22-.39-.64-.63-1.09-.63h-1.09V12c0 1.52-1.23 2.75-2.75 2.75H2.75V17c0 1.24 1.01 2.25 2.25 2.25h.35c.33-1.15 1.39-2 2.65-2s2.32.85 2.65 2h2.71c.33-1.15 1.39-2 2.65-2s2.31.85 2.64 2Z"
			:fill="color"
		></path>
		<path
			d="M8 22.75c-1.52 0-2.75-1.23-2.75-2.75S6.48 17.25 8 17.25s2.75 1.23 2.75 2.75S9.52 22.75 8 22.75Zm0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM16 22.75c-1.52 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75 2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75Zm0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM22 14.75h-3c-.96 0-1.75-.79-1.75-1.75v-3c0-.96.79-1.75 1.75-1.75h1.29c.27 0 .52.14.65.38l1.71 3c.06.11.1.24.1.37v2c0 .41-.34.75-.75.75Zm-3-5c-.14 0-.25.11-.25.25v3c0 .14.11.25.25.25h2.25V12.2l-1.4-2.45H19ZM5 9.75C2.38 9.75.25 7.62.25 5c0-1.46.65-2.81 1.78-3.71C2.87.62 3.93.25 5 .25 7.62.25 9.75 2.38 9.75 5c0 1.36-.59 2.66-1.62 3.56-.87.77-1.98 1.19-3.13 1.19Zm0-8c-.74 0-1.44.25-2.03.72C2.2 3.08 1.75 4.01 1.75 5c0 1.79 1.46 3.25 3.25 3.25.78 0 1.54-.29 2.15-.81.7-.62 1.1-1.5 1.1-2.44 0-1.79-1.46-3.25-3.25-3.25Z"
			:fill="color"
		></path>
		<path
			d="M4 6.75c-.25 0-.5-.13-.64-.36-.21-.36-.1-.82.26-1.03l.89-.53V3.75c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .26-.14.51-.36.64l-1.25.75c-.14.08-.27.11-.4.11Z"
			:fill="color"
		></path>
	</svg>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="size"
		:height="size"
		viewBox="0 0 24 24"
		fill="none"
		v-else-if="type === 'twotone'"
	>
		<path
			opacity=".4"
			d="M15 2v10c0 1.1-.9 2-2 2H2V7.62c.73.87 1.85 1.41 3.09 1.38 1.01-.02 1.92-.41 2.6-1.06.31-.26.57-.59.77-.95.36-.61.56-1.33.54-2.08-.03-1.17-.55-2.2-1.36-2.91H15Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M22 14v3c0 1.66-1.34 3-3 3h-1c0-1.1-.9-2-2-2s-2 .9-2 2h-4c0-1.1-.9-2-2-2s-2 .9-2 2H5c-1.66 0-3-1.34-3-3v-3h11c1.1 0 2-.9 2-2V5h1.84c.72 0 1.38.39 1.74 1.01L20.29 9H19c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 12v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29L22 12Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M9 5c0 1.2-.53 2.27-1.36 3A4 4 0 0 1 5 9C2.79 9 1 7.21 1 5c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 9 5Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M5.25 3.75v1.5L4 6"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
	</svg>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	props: {
		type: {
			type: String,
			default: "linear"
		},
		size: {
			type: [String, Number],
			default: 24
		},
		color: {
			type: String,
			default: "currentColor"
		},
		strokeWidth: {
			type: String,
			default: "1.5"
		}
	}
});
</script>
