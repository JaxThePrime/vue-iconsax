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
			d="M9.541 16.67c-.41 0-.75-.34-.75-.75v-3.39l-.19.22c-.28.31-.75.33-1.06.06a.756.756 0 0 1-.06-1.06l1.5-1.67c.21-.23.54-.31.83-.2.29.11.48.39.48.7v5.35c0 .41-.33.74-.75.74Z"
			:fill="color"
		></path>
		<path
			d="M12.001 3.48c-.08 0-.16.01-.24.01l.82-1.02c.26-.32.21-.8-.12-1.05a.739.739 0 0 0-1.05.12L9.441 4c-.01.01-.01.02-.02.04-.03.04-.05.09-.07.13-.02.05-.04.09-.05.13-.01.05-.01.09-.01.14v.2c.01.03.03.05.04.09.02.05.03.09.06.13.03.04.06.08.1.12.02.02.04.05.06.07.01.01.03.01.04.02.03.02.06.04.1.05.05.03.1.05.15.06.04.02.07.02.11.02.03 0 .05.01.08.01.02 0 .05-.01.07-.02h.1c.64-.15 1.24-.22 1.81-.22 4.49 0 8.14 3.65 8.14 8.14s-3.65 8.14-8.14 8.14-8.14-3.65-8.14-8.14c0-1.74.57-3.42 1.65-4.86a.75.75 0 0 0-1.2-.9c-1.28 1.7-1.95 3.69-1.95 5.76 0 5.31 4.32 9.64 9.64 9.64s9.64-4.32 9.64-9.64-4.34-9.63-9.65-9.63Z"
			:fill="color"
		></path>
		<path
			d="M14 16.67c-1.52 0-2.75-1.23-2.75-2.75v-1.35c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75v1.35c0 1.52-1.23 2.75-2.75 2.75Zm0-5.34c-.69 0-1.25.56-1.25 1.25v1.35a1.25 1.25 0 0 0 2.5 0v-1.35c0-.69-.56-1.25-1.25-1.25Z"
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
			d="M10.02 4.47 12 2M3.988 16.959a8.89 8.89 0 0 0 16.9-3.85 8.89 8.89 0 0 0-8.89-8.89c-.68 0-1.34.09-1.98.24M4.91 7.8c-1.11 1.48-1.8 3.31-1.8 5.31"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M9.54 15.918v-5.34l-1.5 1.67M14 10.578c1.1 0 2 .9 2 2v1.35c0 1.1-.9 2-2 2s-2-.9-2-2v-1.35a2 2 0 0 1 2-2Z"
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
			d="M9.541 16.67c-.41 0-.75-.34-.75-.75v-3.39l-.19.21c-.28.31-.75.33-1.06.06a.756.756 0 0 1-.06-1.06l1.5-1.67c.21-.23.54-.31.83-.2.29.11.48.39.48.7v5.35c0 .42-.33.75-.75.75Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="M12.002 3.48c-.08 0-.16.01-.24.01l.82-1.02c.26-.32.21-.8-.12-1.05a.739.739 0 0 0-1.05.12l-1.98 2.47c-.01.01-.01.03-.02.04-.03.04-.05.09-.07.14-.02.04-.04.08-.05.13-.01.05-.01.09-.01.14v.2c.01.03.03.06.04.09.02.05.03.09.06.13.03.04.06.08.1.12.02.02.03.05.06.07.01.01.03.01.04.02.03.02.06.04.1.05.05.03.1.05.15.06.03.01.07.01.1.02.03 0 .05.01.08.01.02 0 .05-.01.07-.02h.1c.64-.15 1.24-.22 1.81-.22 4.49 0 8.14 3.65 8.14 8.14s-3.65 8.14-8.14 8.14-8.14-3.65-8.14-8.14c0-1.74.57-3.42 1.65-4.86a.75.75 0 0 0-1.2-.9c-1.28 1.7-1.95 3.69-1.95 5.76 0 5.31 4.32 9.64 9.64 9.64s9.64-4.32 9.64-9.64-4.32-9.65-9.63-9.65Z"
			:fill="color"
		></path>
		<path
			d="M14 16.67c-1.52 0-2.75-1.23-2.75-2.75v-1.35c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75v1.35c0 1.52-1.23 2.75-2.75 2.75Zm0-5.34c-.69 0-1.25.56-1.25 1.25v1.35a1.25 1.25 0 0 0 2.5 0v-1.35c0-.69-.56-1.25-1.25-1.25Z"
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
			d="M9.54 15.92v-5.34l-1.5 1.67M10.02 4.47 12 2"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M4.91 7.8c-1.11 1.48-1.8 3.31-1.8 5.31A8.89 8.89 0 0 0 12 22a8.89 8.89 0 0 0 8.89-8.89A8.89 8.89 0 0 0 12 4.22c-.68 0-1.34.09-1.98.24"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M14 10.58c1.1 0 2 .9 2 2v1.35c0 1.1-.9 2-2 2s-2-.9-2-2v-1.35a2 2 0 0 1 2-2Z"
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
			d="M9.541 16.67c-.41 0-.75-.34-.75-.75v-3.39l-.19.21c-.28.31-.75.33-1.06.06a.756.756 0 0 1-.06-1.06l1.5-1.67c.21-.23.54-.31.83-.2.29.11.48.39.48.7v5.35c0 .42-.33.75-.75.75ZM10.022 5.218a.7.7 0 0 1-.47-.17.757.757 0 0 1-.12-1.05l1.98-2.47c.26-.32.73-.37 1.05-.12.32.25.37.73.12 1.05l-1.98 2.47a.72.72 0 0 1-.58.29Z"
			:fill="color"
		></path>
		<path
			d="M12 22.749c-5.31 0-9.64-4.32-9.64-9.64 0-2.07.67-4.06 1.95-5.76a.75.75 0 0 1 1.2.9c-1.08 1.44-1.65 3.12-1.65 4.86 0 4.49 3.65 8.14 8.14 8.14s8.14-3.65 8.14-8.14-3.65-8.14-8.14-8.14c-.58 0-1.17.07-1.81.22-.4.09-.81-.16-.9-.56-.09-.4.16-.81.56-.9a9.7 9.7 0 0 1 2.15-.26c5.31 0 9.64 4.32 9.64 9.64s-4.33 9.64-9.64 9.64Z"
			:fill="color"
		></path>
		<path
			d="M14 16.67c-1.52 0-2.75-1.23-2.75-2.75v-1.35c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75v1.35c0 1.52-1.23 2.75-2.75 2.75Zm0-5.34c-.69 0-1.25.56-1.25 1.25v1.35a1.25 1.25 0 0 0 2.5 0v-1.35c0-.69-.56-1.25-1.25-1.25Z"
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
			d="M9.54 15.918v-5.34l-1.5 1.67"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M10.02 4.47 12 2M4.91 7.799c-1.11 1.48-1.8 3.31-1.8 5.31a8.89 8.89 0 0 0 8.89 8.89 8.89 8.89 0 0 0 8.89-8.89A8.89 8.89 0 0 0 12 4.219c-.68 0-1.34.09-1.98.24"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M14 10.578c1.1 0 2 .9 2 2v1.35c0 1.1-.9 2-2 2s-2-.9-2-2v-1.35a2 2 0 0 1 2-2Z"
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
