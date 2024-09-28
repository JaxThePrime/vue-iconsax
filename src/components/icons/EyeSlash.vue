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
			d="M21.271 9.178c-.29-.46-.6-.89-.92-1.29a1 1 0 0 0-1.49-.09l-3 3c.22.66.26 1.42.06 2.21a4.021 4.021 0 0 1-2.9 2.9c-.79.2-1.55.16-2.21-.06l-2.46 2.46c-.5.5-.34 1.38.33 1.64 1.07.41 2.18.62 3.32.62 1.78 0 3.51-.52 5.09-1.49 1.61-1 3.06-2.47 4.23-4.34.95-1.51.9-4.05-.05-5.56ZM14.02 9.98l-4.04 4.04c-.51-.52-.84-1.24-.84-2.02 0-1.57 1.28-2.86 2.86-2.86.78 0 1.5.33 2.02.84Z"
			:fill="color"
		></path>
		<path
			d="m18.25 5.75-3.39 3.39A3.986 3.986 0 0 0 12 7.96c-2.24 0-4.04 1.81-4.04 4.04 0 1.12.45 2.13 1.18 2.86l-3.38 3.39h-.01c-1.11-.9-2.13-2.05-3-3.41-1-1.57-1-4.12 0-5.69C3.91 7.33 5.33 5.9 6.91 4.92c1.58-.96 3.31-1.49 5.09-1.49 2.23 0 4.39.82 6.25 2.32ZM14.858 11.998c0 1.57-1.28 2.86-2.86 2.86-.06 0-.11 0-.17-.02l3.01-3.01c.02.06.02.11.02.17Z"
			:fill="color"
		></path>
		<path
			d="M21.769 2.229c-.3-.3-.79-.3-1.09 0l-18.45 18.46c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z"
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
			d="m14.532 9.472-5.06 5.06a3.576 3.576 0 1 1 5.06-5.06ZM5.6 17.759c-1-.86-1.91-1.92-2.71-3.17-.9-1.41-.9-3.78 0-5.19 1.18-1.85 2.62-3.3 4.23-4.27M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73M8.422 19.53c1.14.48 2.35.74 3.58.74 3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-.33-.52-.69-1.01-1.06-1.47"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M15.511 12.7a3.565 3.565 0 0 1-2.82 2.82M9.47 14.531 2 22.001M22.001 2l-7.47 7.47"
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
			d="M21.252 9.15a14.57 14.57 0 0 0-1.63-2.11l-3.77 3.77c.12.37.19.77.19 1.19 0 2.24-1.81 4.04-4.04 4.04-.42 0-.82-.07-1.19-.19l-3.46 3.46c1.46.82 3.04 1.25 4.65 1.25 1.78 0 3.51-.52 5.09-1.49 1.58-.98 3-2.41 4.16-4.23 1-1.56 1-4.12 0-5.69Z"
			:fill="color"
		></path>
		<path
			d="m14.02 9.98-4.04 4.04c-.51-.52-.84-1.24-.84-2.02 0-1.57 1.28-2.86 2.86-2.86.78 0 1.5.33 2.02.84Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="m18.25 5.75-3.39 3.39A3.986 3.986 0 0 0 12 7.96c-2.24 0-4.04 1.81-4.04 4.04 0 1.12.45 2.13 1.18 2.86l-3.38 3.39h-.01c-1.11-.9-2.13-2.05-3-3.41-1-1.57-1-4.12 0-5.69C3.91 7.33 5.33 5.9 6.91 4.92c1.58-.96 3.31-1.49 5.09-1.49 2.23 0 4.39.82 6.25 2.32Z"
			:fill="color"
		></path>
		<path
			d="M14.858 11.998c0 1.57-1.28 2.86-2.86 2.86-.06 0-.11 0-.17-.02l3.01-3.01c.02.06.02.11.02.17ZM21.769 2.229c-.3-.3-.79-.3-1.09 0l-18.45 18.46c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z"
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
			d="m14.53 9.47-5.06 5.06a3.576 3.576 0 1 1 5.06-5.06Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73c-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19.79 1.24 1.71 2.31 2.71 3.17M8.42 19.53c1.14.48 2.35.74 3.58.74 3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-.33-.52-.69-1.01-1.06-1.47"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M15.51 12.7a3.565 3.565 0 0 1-2.82 2.82M9.47 14.53 2 22M22 2l-7.47 7.47"
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
			d="M9.472 15.282c-.19 0-.38-.07-.53-.22a4.305 4.305 0 0 1-1.27-3.06c0-2.39 1.94-4.33 4.33-4.33 1.15 0 2.24.45 3.06 1.27a.75.75 0 0 1 0 1.06l-5.06 5.06c-.15.15-.34.22-.53.22Zm2.53-6.11a2.834 2.834 0 0 0-2.46 4.23l3.86-3.86c-.42-.24-.9-.37-1.4-.37Z"
			:fill="color"
		></path>
		<path
			d="M5.6 18.51c-.17 0-.35-.06-.49-.18-1.07-.91-2.03-2.03-2.85-3.33-1.06-1.65-1.06-4.34 0-6C4.7 5.18 8.25 2.98 12 2.98c2.2 0 4.37.76 6.27 2.19a.75.75 0 0 1-.9 1.2c-1.64-1.24-3.5-1.89-5.37-1.89-3.23 0-6.32 1.94-8.48 5.33-.75 1.17-.75 3.21 0 4.38s1.61 2.18 2.56 3c.31.27.35.74.08 1.06-.14.17-.35.26-.56.26ZM11.999 21.02c-1.33 0-2.63-.27-3.88-.8a.75.75 0 0 1-.4-.98c.16-.38.6-.56.98-.4 1.06.45 2.17.68 3.29.68 3.23 0 6.32-1.94 8.48-5.33.75-1.17.75-3.21 0-4.38-.31-.49-.65-.96-1.01-1.4a.76.76 0 0 1 .11-1.06.75.75 0 0 1 1.06.11c.39.48.77 1 1.11 1.54 1.06 1.65 1.06 4.34 0 6-2.44 3.82-5.99 6.02-9.74 6.02Z"
			:fill="color"
		></path>
		<path
			d="M12.691 16.268c-.35 0-.67-.25-.74-.61-.08-.41.19-.8.6-.87 1.1-.2 2.02-1.12 2.22-2.22.08-.41.47-.67.88-.6.41.08.68.47.6.88-.32 1.73-1.7 3.1-3.42 3.42-.05-.01-.09 0-.14 0ZM2.001 22.749c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l7.47-7.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-7.47 7.47c-.15.15-.34.22-.53.22ZM14.529 10.221c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l7.47-7.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-7.47 7.47c-.15.15-.34.22-.53.22Z"
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
			d="m14.532 9.472-5.06 5.06a3.576 3.576 0 1 1 5.06-5.06Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73c-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19.79 1.24 1.71 2.31 2.71 3.17"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M8.422 19.53c1.14.48 2.35.74 3.58.74 3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-.33-.52-.69-1.01-1.06-1.47"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M15.511 12.7a3.565 3.565 0 0 1-2.82 2.82"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M9.47 14.531 2 22.001M22.001 2l-7.47 7.47"
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
