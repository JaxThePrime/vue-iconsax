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
			d="M15 22.748a.752.752 0 0 1-.64-1.14l1.05-1.75a.751.751 0 1 1 1.29.77l-.27.45c2.76-.65 4.83-3.13 4.83-6.09 0-.41.34-.75.75-.75s.75.34.75.75c-.01 4.28-3.49 7.76-7.76 7.76ZM2 9.75c-.41 0-.75-.34-.75-.75 0-4.27 3.48-7.75 7.75-7.75a.752.752 0 0 1 .64 1.14L8.59 4.14c-.21.35-.67.47-1.03.25a.746.746 0 0 1-.25-1.03l.27-.45A6.261 6.261 0 0 0 2.75 9c0 .41-.34.75-.75.75ZM14.8 12.63v2.94c0 2.45-.98 3.43-3.43 3.43H8.43C5.98 19 5 18.02 5 15.57v-2.94c0-2.45.98-3.43 3.43-3.43h2.94c2.45 0 3.43.98 3.43 3.43Z"
			:fill="color"
		></path>
		<path
			d="M15.57 5h-2.94c-2.41 0-3.39.96-3.42 3.32h2.16c2.94 0 4.3 1.37 4.3 4.3v2.16c2.37-.03 3.32-1.01 3.32-3.42V8.43C19 5.98 18.02 5 15.57 5Z"
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
			d="M5.53 15.978c.17 1.79 1.11 2.52 3.16 2.52h2.73c2.28 0 3.19-.91 3.19-3.19v-2.73c0-2.27-.91-3.18-3.19-3.18H8.69c-2.07 0-3.01.75-3.16 2.6"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M18.5 8.68v2.73c0 2.28-.91 3.19-3.19 3.19h-.71v-2.02c0-2.27-.91-3.18-3.19-3.18H9.4v-.72c0-2.28.91-3.18 3.19-3.18h2.73c2.27 0 3.18.91 3.18 3.18ZM22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75"
			:stroke="color"
			:stroke-width="strokeWidth"
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
			d="M15 22.748a.752.752 0 0 1-.64-1.14l1.05-1.75a.751.751 0 1 1 1.29.77l-.27.45c2.76-.65 4.83-3.13 4.83-6.09 0-.41.34-.75.75-.75s.75.34.75.75c-.01 4.28-3.49 7.76-7.76 7.76ZM2 9.75c-.41 0-.75-.34-.75-.75 0-4.27 3.48-7.75 7.75-7.75a.752.752 0 0 1 .64 1.14L8.59 4.14c-.21.35-.67.47-1.03.25a.746.746 0 0 1-.25-1.03l.27-.45A6.261 6.261 0 0 0 2.75 9c0 .41-.34.75-.75.75Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="M14.8 12.63v2.94c0 2.45-.98 3.43-3.43 3.43H8.43C5.98 19 5 18.02 5 15.57v-2.94c0-2.45.98-3.43 3.43-3.43h2.94c2.45 0 3.43.98 3.43 3.43Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="M15.57 5h-2.94c-2.41 0-3.39.96-3.42 3.32h2.16c2.94 0 4.3 1.37 4.3 4.3v2.16c2.37-.03 3.32-1.01 3.32-3.42V8.43C19 5.98 18.02 5 15.57 5Z"
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
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M13.6 11.58v2.73c0 2.28-.91 3.19-3.19 3.19H7.69c-2.27 0-3.19-.91-3.19-3.19v-2.73c0-2.27.91-3.18 3.19-3.18h2.73c2.27 0 3.18.91 3.18 3.18z"
		></path>
		<path
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M17.5 7.68v2.73c0 2.28-.91 3.19-3.19 3.19h-.71v-2.02c0-2.27-.91-3.18-3.19-3.18H8.4v-.72c0-2.28.91-3.18 3.19-3.18h2.73c2.27 0 3.18.91 3.18 3.18zM21 14c0 3.87-3.13 7-7 7l1.05-1.75M1 8c0-3.87 3.13-7 7-7L6.95 2.75"
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
			d="M11.42 19.248H8.69c-2.69 0-3.94-1.25-3.94-3.94v-2.73c0-2.68 1.25-3.93 3.94-3.93h2.73c2.68 0 3.94 1.25 3.94 3.94v2.73c-.01 2.68-1.26 3.93-3.94 3.93Zm-2.73-9.1c-1.87 0-2.44.57-2.44 2.44v2.73c0 1.87.57 2.44 2.44 2.44h2.73c1.87 0 2.44-.57 2.44-2.44v-2.73c0-1.87-.57-2.44-2.44-2.44H8.69Z"
			:fill="color"
		></path>
		<path
			d="M15.31 15.35h-.71c-.41 0-.75-.34-.75-.75v-2.02c0-1.87-.57-2.44-2.44-2.44H9.4c-.41 0-.75-.34-.75-.75v-.7c0-2.68 1.25-3.94 3.94-3.94h2.73c2.68 0 3.94 1.25 3.94 3.94v2.73c-.01 2.68-1.26 3.93-3.95 3.93Zm-5.16-6.7h1.27c2.68 0 3.94 1.25 3.94 3.94v1.27c1.84-.01 2.4-.58 2.4-2.44V8.69c0-1.87-.57-2.44-2.44-2.44h-2.73c-1.86 0-2.43.56-2.44 2.4ZM15 22.748a.752.752 0 0 1-.64-1.14l1.05-1.75c.21-.36.67-.47 1.03-.26.36.21.47.67.26 1.03l-.27.45c2.76-.65 4.83-3.13 4.83-6.09 0-.41.34-.75.75-.75s.75.34.75.75c-.01 4.28-3.49 7.76-7.76 7.76ZM2 9.75c-.41 0-.75-.34-.75-.75 0-4.27 3.48-7.75 7.75-7.75a.752.752 0 0 1 .64 1.14L8.59 4.14c-.21.35-.67.47-1.03.25a.746.746 0 0 1-.25-1.03l.27-.45A6.261 6.261 0 0 0 2.75 9c0 .41-.34.75-.75.75Z"
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
			d="M13.6 11.578v2.73c0 2.28-.91 3.19-3.19 3.19H7.69c-2.27 0-3.19-.91-3.19-3.19v-2.73c0-2.27.91-3.18 3.19-3.18h2.73c2.27 0 3.18.91 3.18 3.18Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M17.5 7.68v2.73c0 2.28-.91 3.19-3.19 3.19h-.71v-2.02c0-2.27-.91-3.18-3.19-3.18H8.4v-.72c0-2.28.91-3.18 3.19-3.18h2.73c2.27 0 3.18.91 3.18 3.18Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M21 14c0 3.87-3.13 7-7 7l1.05-1.75M1 8c0-3.87 3.13-7 7-7L6.95 2.75"
			:stroke="color"
			:stroke-width="strokeWidth"
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
