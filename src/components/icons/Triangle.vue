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
			d="M11.25 3.899v9.02c0 .33-.16.63-.43.82l-7.21 5.05c-.59.41-1.43.09-1.56-.62-.15-.86.05-1.87.65-2.96l3.12-5.61 2.94-5.29c.23-.41.48-.77.74-1.08.6-.7 1.75-.25 1.75.67ZM20.39 18.789l-7.21-5.05a.997.997 0 0 1-.43-.82v-9.02c0-.92 1.15-1.37 1.75-.67.26.31.51.67.74 1.08l2.94 5.29 3.12 5.61c.6 1.09.8 2.1.65 2.96-.13.71-.97 1.03-1.56.62ZM5.26 19.14l6.15-4.1c.33-.22.87-.22 1.2 0l6.15 4.1c1.63 1.09 1.36 1.98-.6 1.98H5.85c-1.95-.01-2.22-.9-.59-1.98Z"
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
			d="M8.76 5.001c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29 3.12 5.62c1.68 3.03.22 5.51-3.24 5.51H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62.59-1.05"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M21.44 20 12 13.39 2.56 20M12 3v10.39"
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
			d="M12 2.59v11.02l-9.35 6.54c-.85-1.01-.9-2.54.05-4.25l3.12-5.61L8.76 5c.89-1.6 2.06-2.41 3.24-2.41Z"
			:fill="color"
		></path>
		<path
			opacity=".6"
			d="M21.35 20.15c-.65.79-1.78 1.26-3.29 1.26H5.94c-1.51 0-2.64-.47-3.29-1.26L12 13.61l9.35 6.54Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="M21.35 20.15 12 13.61V2.59c1.18 0 2.35.81 3.24 2.41l2.94 5.29 3.12 5.61c.95 1.71.9 3.24.05 4.25Z"
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
			d="M12 21.41H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62L8.76 5c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29 3.12 5.62c1.68 3.03.22 5.51-3.24 5.51H12v-.01Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M21.44 20 12 13.39 2.56 20M12 3v10.39"
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
			d="M18.06 22.16H5.94c-1.95 0-3.44-.71-4.2-1.99-.75-1.28-.65-2.93.3-4.63L8.1 4.63c1-1.8 2.38-2.79 3.9-2.79s2.9.99 3.9 2.79l6.06 10.91c.95 1.71 1.06 3.35.3 4.63-.76 1.28-2.25 1.99-4.2 1.99ZM12 3.34c-.94 0-1.86.72-2.59 2.02L3.36 16.27c-.68 1.22-.79 2.34-.32 3.15.47.8 1.51 1.25 2.91 1.25h12.12c1.4 0 2.43-.44 2.91-1.25.47-.81.36-1.92-.32-3.15L14.59 5.36c-.73-1.3-1.65-2.02-2.59-2.02Z"
			:fill="color"
		></path>
		<path
			d="M21.44 20.75c-.15 0-.3-.04-.43-.14L12 14.3l-9.01 6.31a.74.74 0 0 1-1.04-.18.74.74 0 0 1 .18-1.04l9.44-6.61c.26-.18.6-.18.86 0l9.44 6.61c.34.24.42.71.18 1.04-.14.21-.37.32-.61.32Z"
			:fill="color"
		></path>
		<path
			d="M12 14.14c-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75s.75.34.75.75v10.39c0 .41-.34.75-.75.75Z"
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
			d="M12 21.411H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62 2.94-5.28c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29 3.12 5.62c1.68 3.03.22 5.51-3.24 5.51H12v-.01Z"
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
			<path d="M21.44 20 12 13.39 2.56 20M12 3v10.39"></path>
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
