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
			d="M19.83 8.7 15.3 4.17a4.75 4.75 0 0 0-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.34.44 2.65 1.39 3.6l4.53 4.53a4.78 4.78 0 0 0 6.75 0l4.39-4.39a4.738 4.738 0 0 0 0-6.73ZM9.5 12.38a2.88 2.88 0 1 1 .002-5.762A2.88 2.88 0 0 1 9.5 12.38Z"
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
			d="M19.83 15.45a4.78 4.78 0 0 0 0-6.75L15.3 4.17a4.75 4.75 0 0 0-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.34.44 2.65 1.39 3.6l4.53 4.53a4.78 4.78 0 0 0 6.75 0l1.52-1.52"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M7 9.5a2.5 2.5 0 0 0 5 0A2.5 2.5 0 0 0 9.5 7"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
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
			d="m4.17 15.3 4.53 4.53a4.78 4.78 0 0 0 6.75 0l4.39-4.39a4.78 4.78 0 0 0 0-6.75L15.3 4.17a4.75 4.75 0 0 0-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.35.45 2.66 1.4 3.61Z"
			:fill="color"
		></path>
		<path
			d="M9.501 12.381a2.88 2.88 0 1 0 0-5.76 2.88 2.88 0 0 0 0 5.76Z"
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
			d="m4.17 15.3 4.53 4.53a4.78 4.78 0 0 0 6.75 0l4.39-4.39a4.78 4.78 0 0 0 0-6.75L15.3 4.17a4.75 4.75 0 0 0-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.35.45 2.66 1.4 3.61Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M9.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
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
			d="M12.07 21.982c-1.41 0-2.83-.54-3.9-1.61l-4.53-4.53a5.548 5.548 0 0 1-1.61-4.17l.24-5c.11-2.39 2-4.28 4.4-4.4l5-.24c1.55-.06 3.07.51 4.17 1.61l4.53 4.53a5.535 5.535 0 0 1 0 7.81l-4.39 4.39a5.535 5.535 0 0 1-3.91 1.61Zm-7.37-7.21 4.53 4.53c.76.76 1.77 1.18 2.84 1.18 1.07 0 2.08-.42 2.84-1.18l4.39-4.39c.76-.76 1.18-1.77 1.18-2.84 0-1.07-.42-2.08-1.18-2.84l-4.53-4.53c-.8-.8-1.91-1.23-3.03-1.17l-5 .24c-1.63.07-2.9 1.34-2.98 2.96l-.24 5c-.05 1.13.38 2.24 1.18 3.04Z"
			:fill="color"
		></path>
		<path
			d="M9.5 12.75c-1.79 0-3.25-1.46-3.25-3.25S7.71 6.25 9.5 6.25s3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25Zm0-5c-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75 1.75-.79 1.75-1.75-.79-1.75-1.75-1.75Z"
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
			d="m4.17 15.3 4.53 4.53a4.78 4.78 0 0 0 6.75 0l4.39-4.39a4.78 4.78 0 0 0 0-6.75L15.3 4.17a4.75 4.75 0 0 0-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.35.45 2.66 1.4 3.61Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M9.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
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
