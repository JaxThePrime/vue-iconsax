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
			d="M18.65 4.591A9.836 9.836 0 0 0 12 2.031c-5.5 0-9.97 4.47-9.97 9.97 0 5.5 4.47 9.97 9.97 9.97 2.56 0 4.89-.96 6.65-2.56a9.89 9.89 0 0 0 3.32-7.41c0-2.94-1.28-5.6-3.32-7.41Zm-6.68 11.8c-.02 1.65-1.25 2.05-2.4 1.59a6.439 6.439 0 0 1-4.04-5.98c0-2.71 1.67-5.03 4.04-5.99 1.15-.46 2.38-.05 2.4 1.59v8.79Z"
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
			d="M11.97 11.858v4.53c-.02 1.65-1.25 2.05-2.4 1.59a6.439 6.439 0 0 1-4.04-5.98c0-2.71 1.67-5.03 4.04-5.99 1.15-.46 2.38-.05 2.4 1.59"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
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
			opacity=".4"
			d="M21.97 12.001c0 2.94-1.28 5.6-3.32 7.41a9.836 9.836 0 0 1-6.65 2.56c-5.5 0-9.97-4.47-9.97-9.97 0-5.5 4.47-9.97 9.97-9.97 2.56 0 4.89.96 6.65 2.56a9.89 9.89 0 0 1 3.32 7.41Z"
			:fill="color"
		></path>
		<path
			d="M11.97 16.388c-.02 1.65-1.25 2.05-2.4 1.59a6.439 6.439 0 0 1-4.04-5.98c0-2.71 1.67-5.03 4.04-5.99 1.15-.46 2.38-.05 2.4 1.59v8.79Z"
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
			d="M21.97 12c0 2.94-1.28 5.6-3.32 7.41A9.836 9.836 0 0112 21.97c-5.5 0-9.97-4.47-9.97-9.97 0-5.5 4.47-9.97 9.97-9.97 2.56 0 4.89.96 6.65 2.56A9.89 9.89 0 0121.97 12z"
		></path>
		<path
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M11.97 16.39c-.02 1.65-1.25 2.05-2.4 1.59A6.439 6.439 0 015.53 12c0-2.71 1.67-5.03 4.04-5.99 1.15-.46 2.38-.05 2.4 1.59v8.79z"
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
			d="M12 22.721c-5.91 0-10.72-4.81-10.72-10.72 0-5.91 4.81-10.72 10.72-10.72 2.65 0 5.19.98 7.15 2.75a10.65 10.65 0 0 1 3.57 7.97c0 3.05-1.3 5.96-3.58 7.98a10.6 10.6 0 0 1-7.14 2.74Zm0-19.94c-5.09 0-9.22 4.14-9.22 9.22 0 5.08 4.14 9.22 9.22 9.22 2.28 0 4.46-.84 6.15-2.37a9.16 9.16 0 0 0 3.08-6.86c0-2.63-1.12-5.12-3.07-6.85A9.22 9.22 0 0 0 12 2.781Z"
			:fill="color"
		></path>
		<path
			d="M10.44 18.91c-.37 0-.76-.08-1.14-.23A7.179 7.179 0 0 1 4.78 12c0-2.95 1.77-5.58 4.52-6.68.87-.35 1.75-.3 2.41.14.64.43 1 1.19 1.02 2.14V16.4c-.01.95-.37 1.72-1.02 2.14-.37.25-.81.37-1.27.37Zm0-12.32c-.18 0-.38.04-.58.12A5.666 5.666 0 0 0 6.28 12c0 2.34 1.4 4.42 3.58 5.29.4.16.78.16 1.02.01.28-.19.34-.6.35-.91V7.61c0-.3-.07-.72-.35-.91a.87.87 0 0 0-.44-.11Z"
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
			d="M21.97 12.001c0 2.94-1.28 5.6-3.32 7.41a9.836 9.836 0 0 1-6.65 2.56c-5.5 0-9.97-4.47-9.97-9.97 0-5.5 4.47-9.97 9.97-9.97 2.56 0 4.89.96 6.65 2.56a9.89 9.89 0 0 1 3.32 7.41Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M11.97 16.388c-.02 1.65-1.25 2.05-2.4 1.59a6.439 6.439 0 0 1-4.04-5.98c0-2.71 1.67-5.03 4.04-5.99 1.15-.46 2.38-.05 2.4 1.59v8.79Z"
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
