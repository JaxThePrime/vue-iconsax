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
			d="M18 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45C15.37 2.75 14.17 2 13.15 2h-2.29c-1.03 0-2.23.75-2.69 1.66l-.72 1.45C7.17 5.65 6.61 6 6 6 3.83 6 2.11 7.83 2.25 9.99l.52 8.26C2.89 20.31 4 22 6.76 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26A3.753 3.753 0 0 0 18 6Zm-7.5 1.25h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75ZM12 18.12c-1.86 0-3.38-1.51-3.38-3.38 0-1.87 1.51-3.38 3.38-3.38 1.87 0 3.38 1.51 3.38 3.38 0 1.87-1.52 3.38-3.38 3.38Z"
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
			d="M2.77 18.25C2.89 20.31 4 22 6.76 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26A3.753 3.753 0 0 0 18 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45C15.37 2.75 14.17 2 13.15 2h-2.29c-1.03 0-2.23.75-2.69 1.66l-.72 1.45C7.17 5.65 6.61 6 6 6 3.83 6 2.11 7.83 2.25 9.99l.26 4.07M10.5 8h3"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M12 18c1.79 0 3.25-1.46 3.25-3.25S13.79 11.5 12 11.5s-3.25 1.46-3.25 3.25S10.21 18 12 18Z"
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
			d="M6.76 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26A3.753 3.753 0 0 0 18 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45C15.37 2.75 14.17 2 13.15 2h-2.29c-1.03 0-2.23.75-2.69 1.66l-.72 1.45C7.17 5.65 6.61 6 6 6 3.83 6 2.11 7.83 2.25 9.99l.52 8.26C2.89 20.31 4 22 6.76 22Z"
			:fill="color"
		></path>
		<path
			d="M13.5 8.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM12.001 18.131a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76Z"
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
			d="M6.76 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26A3.753 3.753 0 0 0 18 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45C15.37 2.75 14.17 2 13.15 2h-2.29c-1.03 0-2.23.75-2.69 1.66l-.72 1.45C7.17 5.65 6.61 6 6 6 3.83 6 2.11 7.83 2.25 9.99l.52 8.26C2.89 20.31 4 22 6.76 22ZM10.5 8h3"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M12 18c1.79 0 3.25-1.46 3.25-3.25S13.79 11.5 12 11.5s-3.25 1.46-3.25 3.25S10.21 18 12 18Z"
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
			d="M17.242 22.75H6.762c-2.8 0-4.58-1.67-4.74-4.46l-.52-8.25a4.44 4.44 0 0 1 1.21-3.36c.85-.91 2.05-1.43 3.29-1.43.32 0 .63-.19.78-.49l.72-1.43c.59-1.17 2.07-2.08 3.36-2.08h2.29c1.29 0 2.76.91 3.35 2.07l.72 1.46c.15.28.45.47.78.47 1.24 0 2.44.52 3.29 1.43.86.92 1.29 2.11 1.21 3.36l-.52 8.26c-.18 2.83-1.91 4.45-4.74 4.45Zm-6.38-20c-.74 0-1.68.58-2.02 1.25l-.72 1.44c-.42.81-1.23 1.31-2.12 1.31-.84 0-1.62.34-2.2.95-.57.61-.86 1.41-.8 2.24l.52 8.26c.12 2.02 1.21 3.05 3.24 3.05h10.48c2.02 0 3.11-1.03 3.24-3.05l.52-8.26a2.99 2.99 0 0 0-.8-2.24c-.58-.61-1.36-.95-2.2-.95-.89 0-1.7-.5-2.12-1.29L15.152 4c-.33-.66-1.27-1.24-2.01-1.24h-2.28v-.01Z"
			:fill="color"
		></path>
		<path
			d="M13.5 8.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 18.75c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Zm0-6.5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5Z"
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
			d="M6.76 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26A3.753 3.753 0 0 0 18 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45C15.37 2.75 14.17 2 13.15 2h-2.29c-1.03 0-2.23.75-2.69 1.66l-.72 1.45C7.17 5.65 6.61 6 6 6 3.83 6 2.11 7.83 2.25 9.99l.52 8.26C2.89 20.31 4 22 6.76 22Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M10.5 8h3M12 18c1.79 0 3.25-1.46 3.25-3.25S13.79 11.5 12 11.5s-3.25 1.46-3.25 3.25S10.21 18 12 18Z"
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
