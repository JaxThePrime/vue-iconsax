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
			d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM20.34 12.72h-3.31c-.93 0-1.76.52-2.18 1.34l-.8 1.58c-.19.38-.57.61-.99.61H9.95c-.29 0-.72-.06-.99-.62l-.79-1.57a2.432 2.432 0 0 0-2.18-1.35H2.66c-.36.01-.66.31-.66.67v3.09C2 19.94 4.07 22 7.53 22h7.96c3.26 0 5.27-1.79 5.51-4.96v-3.66c0-.36-.3-.66-.66-.66Z"
			:fill="color"
		></path>
		<path
			d="M21 10.4v.93c-.21-.07-.43-.11-.66-.11h-3.31c-1.5 0-2.85.83-3.51 2.17l-.7 1.37h-2.63l-.68-1.36a3.914 3.914 0 0 0-3.52-2.18H2.66c-.23 0-.45.04-.66.11V8.52C2 5.47 4.47 3 7.52 3h6.08a1 1 0 0 1 .98 1.2c-.16.8-.09 1.67.3 2.59a4.494 4.494 0 0 0 2.33 2.33c.92.39 1.79.46 2.59.3a1 1 0 0 1 1.2.98Z"
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
			d="M1.98 12.998h3.79a2 2 0 0 1 1.79 1.11l.89 1.79c.55 1.1 1.55 1.1 1.79 1.1h3.53a2 2 0 0 0 1.79-1.11l.89-1.79a2 2 0 0 1 1.79-1.11h3.74M19 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3c0-.34-.06-.68-.16-.98"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M2.691 19c.96 2.1 2.96 3 6.31 3h6c5 0 7-2 7-7v-5M14 2H9C4 2 2 4 2 9v6"
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
			d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM20.34 12.72h-3.31c-.93 0-1.76.52-2.18 1.34l-.8 1.58c-.19.38-.57.61-.99.61H9.95c-.29 0-.72-.06-.99-.62l-.79-1.57a2.432 2.432 0 0 0-2.18-1.35H2.66c-.36.01-.66.31-.66.67v3.09C2 19.94 4.07 22 7.53 22h7.96c3.26 0 5.27-1.79 5.51-4.96v-3.66c0-.36-.3-.66-.66-.66Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="M19 9.5c-2.48 0-4.5-2.02-4.5-4.5 0-.72.19-1.39.49-2H7.52C4.07 3 2 5.06 2 8.52v7.95C2 19.94 4.07 22 7.52 22h7.95c3.46 0 5.52-2.06 5.52-5.52V9.01c-.6.3-1.27.49-1.99.49Z"
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
			d="M1.98 13h3.79a2 2 0 0 1 1.79 1.11l.89 1.79C9 17 10 17 10.24 17h3.53a2 2 0 0 0 1.79-1.11l.89-1.79a2 2 0 0 1 1.79-1.11h3.74M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M14 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5"
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
			d="M13.76 17.75h-3.53c-1.1 0-1.97-.54-2.46-1.52l-.89-1.79c-.21-.43-.64-.69-1.12-.69H1.98c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.79c1.05 0 1.99.58 2.46 1.52l.89 1.79c.23.46.6.69 1.12.69h3.53c.48 0 .91-.26 1.12-.69l.89-1.79a2.73 2.73 0 0 1 2.46-1.52h3.74c.41 0 .75.34.75.75s-.34.75-.75.75h-3.74c-.48 0-.91.26-1.12.69l-.89 1.79c-.48.94-1.42 1.52-2.47 1.52ZM19 8.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25S17.76 7.25 19 7.25 21.25 6.24 21.25 5 20.24 2.75 19 2.75Z"
			:fill="color"
		></path>
		<path
			d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h5c.41 0 .75.34.75.75s-.34.75-.75.75H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 5.43-2.32 7.75-7.75 7.75Z"
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
			d="M1.98 12.998h3.79a2 2 0 0 1 1.79 1.11l.89 1.79c.55 1.1 1.55 1.1 1.79 1.1h3.53a2 2 0 0 0 1.79-1.11l.89-1.79a2 2 0 0 1 1.79-1.11h3.74M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M14 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5"
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
