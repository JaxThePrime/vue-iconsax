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
			d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM7 12.75H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75Zm5 1.5c-1.24 0-2.25-1.01-2.25-2.25S10.76 9.75 12 9.75s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25Zm7-1.5h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
			d="M2.2 14.02A9.992 9.992 0 0 0 12 22c4.82 0 8.84-3.41 9.79-7.95M7.49 3.07C4.81 4.43 2.82 6.96 2.21 9.98M21.81 10.06C20.91 5.46 16.86 2 12 2M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
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
			d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
			:fill="color"
		></path>
		<path
			d="M12 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM7 12.75H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM19 12.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
			d="M2.2 14.02A9.992 9.992 0 0 0 12 22c4.82 0 8.84-3.41 9.79-7.95M21.81 10.06C20.91 5.46 16.86 2 12 2 7.17 2 3.14 5.43 2.2 9.98M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
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
			d="M12 22.75c-5.08 0-9.51-3.61-10.53-8.58a.76.76 0 0 1 .58-.89c.41-.08.8.18.89.58.88 4.28 4.69 7.39 9.06 7.39 4.36 0 8.17-3.09 9.06-7.35a.74.74 0 0 1 .89-.58c.41.08.67.48.58.89-1.04 4.94-5.46 8.54-10.53 8.54ZM21.81 10.808c-.35 0-.66-.25-.73-.61-.85-4.32-4.67-7.46-9.08-7.46-4.38 0-8.19 3.11-9.06 7.39-.08.41-.48.66-.89.58a.74.74 0 0 1-.58-.89c1.02-4.97 5.45-8.58 10.53-8.58 5.13 0 9.56 3.65 10.55 8.67.08.41-.19.8-.59.88-.05.02-.1.02-.15.02Z"
			:fill="color"
		></path>
		<path
			d="M12 14.25c-1.24 0-2.25-1.01-2.25-2.25S10.76 9.75 12 9.75s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25Zm0-3c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75Z"
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
			d="M2.2 14.02A9.992 9.992 0 0 0 12 22c4.82 0 8.84-3.41 9.79-7.95M21.81 10.06C20.91 5.46 16.86 2 12 2 7.17 2 3.14 5.43 2.2 9.98"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
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
