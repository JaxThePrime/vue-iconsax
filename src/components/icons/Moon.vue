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
			d="M21.529 15.93c-.16-.27-.61-.69-1.73-.49-.62.11-1.25.16-1.88.13a8.41 8.41 0 0 1-5.91-2.82c-1.3-1.45-2.1-3.34-2.11-5.38 0-1.14.22-2.24.67-3.28.44-1.01.13-1.54-.09-1.76-.23-.23-.77-.55-1.83-.11-4.09 1.72-6.62 5.82-6.32 10.21.3 4.13 3.2 7.66 7.04 8.99a10 10 0 0 0 2.89.55c.16.01.32.02.48.02 3.35 0 6.49-1.58 8.47-4.27.67-.93.49-1.52.32-1.79Z"
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
			d="M4.18 5.38a10.146 10.146 0 0 0-2.15 7.04c.36 5.15 4.73 9.34 9.96 9.57 3.69.16 6.99-1.56 8.97-4.27.82-1.11.38-1.85-.99-1.6-.67.12-1.36.17-2.08.14C13 16.06 9 11.97 8.98 7.14c-.01-1.3.26-2.53.75-3.65.54-1.24-.11-1.83-1.36-1.3"
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
			d="M8.999 19c0 .84.13 1.66.37 2.42-3.84-1.33-6.74-4.86-7.04-8.99-.3-4.39 2.23-8.49 6.32-10.21 1.06-.44 1.6-.12 1.83.11.22.22.53.75.09 1.76a8.192 8.192 0 0 0-.67 3.28c.01 2.04.81 3.93 2.11 5.38A7.985 7.985 0 0 0 8.999 19Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="M21.21 17.72a10.501 10.501 0 0 1-8.47 4.27c-.16 0-.32-.01-.48-.02-1-.04-1.97-.23-2.89-.55C9.13 20.66 9 19.84 9 19c0-2.53 1.18-4.79 3.01-6.25a8.41 8.41 0 0 0 5.91 2.82c.63.03 1.26-.02 1.88-.13 1.12-.2 1.57.22 1.73.49.17.27.35.86-.32 1.79Z"
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
			d="M2.03 12.42c.36 5.15 4.73 9.34 9.96 9.57 3.69.16 6.99-1.56 8.97-4.27.82-1.11.38-1.85-.99-1.6-.67.12-1.36.17-2.08.14C13 16.06 9 11.97 8.98 7.14c-.01-1.3.26-2.53.75-3.65.54-1.24-.11-1.83-1.36-1.3C4.41 3.86 1.7 7.85 2.03 12.42Z"
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
		v-else-if="type === 'outline'"
	>
		<path
			d="M12.459 22.748c-.17 0-.34 0-.51-.01-5.6-.25-10.28-4.76-10.67-10.26-.34-4.72 2.39-9.13 6.79-10.98 1.25-.52 1.91-.12 2.19.17.28.28.67.93.15 2.12a8.196 8.196 0 0 0-.68 3.35c.02 4.43 3.7 8.19 8.19 8.37.65.03 1.29-.02 1.91-.13 1.32-.24 1.87.29 2.08.63.21.34.45 1.07-.35 2.15-2.12 2.9-5.49 4.59-9.1 4.59Zm-9.69-10.38c.34 4.76 4.4 8.66 9.24 8.87 3.29.16 6.41-1.34 8.33-3.96.15-.21.22-.36.25-.44-.09-.01-.25-.02-.5.03-.73.13-1.49.18-2.24.15-5.28-.21-9.6-4.64-9.63-9.86 0-1.38.27-2.71.82-3.96.1-.22.12-.37.13-.45-.09 0-.25.02-.51.13-3.81 1.6-6.17 5.42-5.89 9.49Z"
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
			d="M2.031 12.42c.36 5.15 4.73 9.34 9.96 9.57 3.69.16 6.99-1.56 8.97-4.27.82-1.11.38-1.85-.99-1.6-.67.12-1.36.17-2.08.14-4.89-.2-8.89-4.29-8.91-9.12-.01-1.3.26-2.53.75-3.65.54-1.24-.11-1.83-1.36-1.3-3.96 1.67-6.67 5.66-6.34 10.23Z"
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
