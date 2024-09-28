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
			d="M11.82 6.9a23 23 0 0 1 8.63-.24A9.98 9.98 0 0 0 12 2C8.89 2 6.11 3.42 4.27 5.65c.44 1.3 1 2.54 1.67 3.72.38.68 1.35.65 1.74-.02a5.004 5.004 0 0 1 4.14-2.45ZM7.72 14.721c-2-2.14-3.56-4.58-4.63-7.28a9.95 9.95 0 0 0 .34 9.64 9.984 9.984 0 0 0 7.1 4.76c.89-1.05 1.67-2.17 2.34-3.34.39-.68-.14-1.49-.92-1.49-1.67.01-3.28-.81-4.23-2.29Z"
			:fill="color"
		></path>
		<path
			d="M8.57 11.998c0 .61.15 1.18.46 1.72a3.435 3.435 0 0 0 2.96 1.71c1.22 0 2.36-.66 2.96-1.71.31-.54.47-1.11.47-1.72 0-1.89-1.54-3.42-3.43-3.42-1.88-.01-3.42 1.53-3.42 3.42Z"
			:fill="color"
		></path>
		<path
			d="M21.34 8.42a21.53 21.53 0 0 0-4.14-.47c-.79-.01-1.24.85-.85 1.54.4.71.63 1.53.63 2.4 0 .84-.22 1.67-.63 2.41-.94 2.88-2.34 5.44-4.19 7.7 5.45-.09 9.84-4.53 9.84-10 0-1.26-.23-2.47-.66-3.58Z"
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
			d="M3.13 16.62A9.99 9.99 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4ZM21.17 7.999c-3.02-.66-6.15-.66-9.17 0"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="m3.95 6.059.02.06c1.01 2.89 2.56 5.57 4.57 7.88M10.88 21.94c2.06-2.27 3.61-4.95 4.55-7.86l.03-.08"
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
			d="M22 12c0 5.47-4.39 9.91-9.84 10H12c-.61 0-1.21-.06-1.79-.16C5.54 20.99 2 16.91 2 12c0-1.71.43-3.32 1.19-4.73.31-.57.67-1.12 1.08-1.62A9.997 9.997 0 0 1 12 2a9.98 9.98 0 0 1 8.45 4.66A9.897 9.897 0 0 1 22 12Z"
			:fill="color"
		></path>
		<path
			d="M15.1 8.018a21.5 21.5 0 0 1 6.24.4c-.24-.62-.54-1.21-.89-1.76a23 23 0 0 0-8.63.24 5.005 5.005 0 0 0-4.78 4.23c-1.16-1.68-2.1-3.51-2.77-5.48-.41.5-.77 1.05-1.08 1.62a23.45 23.45 0 0 0 4.46 7.2c.02.02.05.03.07.05a5.014 5.014 0 0 0 4.25 2.38c.61 0 1.2-.12 1.75-.33-.91 1.91-2.07 3.68-3.51 5.27.58.1 1.18.16 1.79.16h.16c1.85-2.26 3.25-4.82 4.19-7.7.41-.74.63-1.57.63-2.41 0-1.57-.74-2.95-1.88-3.87Zm-.17 5.59a3.423 3.423 0 0 1-2.96 1.71c-1.22 0-2.35-.66-2.96-1.71-.31-.54-.46-1.11-.46-1.72 0-1.89 1.53-3.42 3.42-3.42s3.43 1.53 3.43 3.42c0 .61-.16 1.18-.47 1.72Z"
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
			d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4ZM21.17 8c-3.02-.66-6.15-.66-9.17 0"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="m3.95 6.06.02.06C4.98 9.01 6.53 11.69 8.54 14M10.88 21.94c2.06-2.27 3.61-4.95 4.55-7.86l.03-.08"
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
			d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
			:fill="color"
		></path>
		<path
			d="M12 16.75c-2.62 0-4.75-2.13-4.75-4.75S9.38 7.25 12 7.25s4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75Zm0-8c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25 3.25-1.46 3.25-3.25S13.79 8.75 12 8.75Z"
			:fill="color"
		></path>
		<path
			d="M21.17 8.751c-.05 0-.11-.01-.16-.02-2.94-.64-5.91-.64-8.85 0-.41.09-.8-.17-.89-.57-.09-.41.17-.8.57-.89 3.15-.69 6.34-.69 9.49 0 .4.09.66.49.57.89a.74.74 0 0 1-.73.59ZM8.54 14.75c-.21 0-.42-.09-.57-.26a24.762 24.762 0 0 1-4.71-8.12l.69-.31.71-.24.02.06a23.2 23.2 0 0 0 4.43 7.63c.27.31.24.79-.07 1.06-.15.12-.33.18-.5.18ZM10.88 22.689a.746.746 0 0 1-.55-1.25c2-2.2 3.48-4.75 4.4-7.58.13-.39.57-.65.96-.52s.62.51.5.9c-1.01 3.12-2.6 5.86-4.74 8.22-.16.15-.37.23-.57.23Z"
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
			d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10Z"
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
				d="M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4ZM21.17 7.999c-3.02-.66-6.15-.66-9.17 0"
			></path>
			<path
				d="m3.95 6.059.02.06c1.01 2.89 2.56 5.57 4.57 7.88M10.88 21.94c2.06-2.27 3.61-4.95 4.55-7.86l.03-.08"
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
