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
			d="M5.25 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
			:fill="color"
		></path>
		<path
			d="M19.17 15.98a6.929 6.929 0 0 0-6.54-4.65h-.03l-3.53.01c-1.52.02-2.88-1.01-3.29-2.49V7.01c0-.42-.34-.76-.77-.76s-.76.34-.76.76v11.22c0 .42.34.76.76.76s.77-.34.77-.76v-6.62c.88.78 2.03 1.26 3.28 1.26h.02l3.53-.01h.02c2.29 0 4.34 1.45 5.09 3.62a.781.781 0 0 0 .98.48c.4-.14.61-.58.47-.98Z"
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
			d="M5 9v7M5.25 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.13 9a4.058 4.058 0 0 0 3.94 3.04l3.43-.01c.84 0 1.63.17 2.36.47"
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
			d="M5.25 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="M19.17 15.978a6.929 6.929 0 0 0-6.54-4.65h-.03l-3.53.01c-1.52.02-2.88-1.01-3.29-2.49v-1.85c0-.42-.34-.76-.77-.76s-.76.34-.76.76v11.22c0 .42.34.76.76.76s.77-.34.77-.76v-6.62c.88.78 2.03 1.26 3.28 1.26h.02l3.53-.01h.02c2.29 0 4.34 1.45 5.09 3.62.11.32.41.51.72.51.08 0 .17-.01.25-.04.41-.12.62-.56.48-.96Z"
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
			d="M5 9v7M5.25 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M5.13 9a4.058 4.058 0 0 0 3.94 3.04l3.43-.01a5.989 5.989 0 0 1 5.67 4.01"
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
			d="M5 16.75c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75Z"
			:fill="color"
		></path>
		<path
			d="M5.25 9.25c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Zm0-6.5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5ZM5 22.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25S3.76 21.25 5 21.25 7.25 20.24 7.25 19 6.24 16.75 5 16.75ZM19 22.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25Z"
			:fill="color"
		></path>
		<path
			d="M18.17 16.79a.75.75 0 0 1-.71-.5 5.227 5.227 0 0 0-4.94-3.51h-.02l-3.43.01h-.02c-2.19 0-4.1-1.48-4.65-3.6a.75.75 0 0 1 1.45-.37 3.305 3.305 0 0 0 3.2 2.48h.01l3.43-.01h.03a6.72 6.72 0 0 1 6.35 4.52.74.74 0 0 1-.46.95c-.08.01-.16.03-.24.03Z"
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
			d="M5.25 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<g
			opacity=".4"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path
				d="M5 9v7M5.129 9a4.058 4.058 0 0 0 3.94 3.04l3.43-.01a5.989 5.989 0 0 1 5.67 4.01"
			></path>
		</g>
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
