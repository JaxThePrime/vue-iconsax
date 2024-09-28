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
			d="M5.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM5.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
			:fill="color"
		></path>
		<path
			d="m15.25 11.98 7.2-5.38a.75.75 0 0 0-.9-1.2L14 11.05 8.45 6.89a.76.76 0 0 0-1.05.15c-.25.33-.18.8.15 1.05l5.2 3.89-5.9 4.42a.75.75 0 0 0 .9 1.2L14 12.92l7.55 5.65c.13.1.29.15.45.15a.75.75 0 0 0 .45-1.35l-7.2-5.39Z"
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
			d="M5.5 3C7.43 3 9 4.57 9 6.5S7.43 10 5.5 10 2 8.43 2 6.5M5.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM22 6 8.65 15.98M22 17.97 8.65 7.98"
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
			d="M5.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM5.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="m15.25 11.98 7.2-5.38a.75.75 0 0 0-.9-1.2L14 11.05 8.45 6.9a.75.75 0 0 0-.9 1.2l5.2 3.89-5.9 4.42a.75.75 0 0 0 .9 1.2l6.26-4.68 7.55 5.65c.13.1.29.15.45.15a.75.75 0 0 0 .45-1.35l-7.21-5.4Z"
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
			d="M5.5 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM5.5 21a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM22 6L8.65 15.98M22 17.97L8.65 7.98"
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
			d="M5.5 10.75A4.26 4.26 0 0 1 1.25 6.5 4.26 4.26 0 0 1 5.5 2.25 4.26 4.26 0 0 1 9.75 6.5a4.26 4.26 0 0 1-4.25 4.25Zm0-7c-1.52 0-2.75 1.23-2.75 2.75S3.98 9.25 5.5 9.25 8.25 8.02 8.25 6.5 7.02 3.75 5.5 3.75ZM5.5 21.75a4.26 4.26 0 0 1-4.25-4.25 4.26 4.26 0 0 1 4.25-4.25 4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25Zm0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75Z"
			:fill="color"
		></path>
		<path
			d="M8.65 16.73a.75.75 0 0 1-.45-1.35L21.55 5.4a.75.75 0 0 1 .9 1.2L9.1 16.58c-.13.1-.29.15-.45.15Z"
			:fill="color"
		></path>
		<path
			d="M22 18.719a.76.76 0 0 1-.45-.15L8.2 8.589a.75.75 0 0 1 .9-1.2l13.35 9.98a.75.75 0 0 1-.45 1.35Z"
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
			d="M5.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM5.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
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
			<path d="M22 6 8.65 15.98M22 17.97 8.65 7.98"></path>
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
