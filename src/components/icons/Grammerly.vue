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
			d="M19.11 4.96c-3.91-3.91-10.26-3.91-14.17 0-3.98 3.98-3.91 10.47.2 14.37 3.8 3.59 9.96 3.59 13.76 0 4.12-3.9 4.19-10.39.21-14.37Zm-2.73 11.69c-1.2 1.14-2.78 1.71-4.36 1.71-1.58 0-3.16-.57-4.36-1.71a.755.755 0 0 1-.03-1.06c.29-.3.76-.31 1.06-.03 1.83 1.73 4.82 1.74 6.66 0 .3-.28.78-.27 1.06.03.29.3.27.77-.03 1.06Z"
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
			d="M15.84 16.07c-2.12 2-5.56 2-7.67 0"
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
			d="M19.07 4.948c3.97 3.97 3.9 10.45-.2 14.34-3.79 3.59-9.94 3.59-13.74 0-4.11-3.89-4.18-10.37-.2-14.34 3.9-3.91 10.24-3.91 14.14 0Z"
			:fill="color"
		></path>
		<path
			d="M12 18.32c-1.58 0-3.15-.57-4.35-1.7a.755.755 0 0 1-.03-1.06c.29-.3.76-.31 1.06-.03 1.83 1.73 4.81 1.73 6.64 0 .3-.28.78-.27 1.06.03.28.3.27.78-.03 1.06-1.2 1.13-2.77 1.7-4.35 1.7Z"
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
			d="M19.07 4.95c3.97 3.97 3.9 10.45-.2 14.34-3.79 3.59-9.94 3.59-13.74 0C1.02 15.4.95 8.92 4.93 4.95c3.9-3.91 10.24-3.91 14.14 0Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M15.84 16.07c-2.12 2-5.56 2-7.67 0"
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
			d="M12.001 22.72c-2.67 0-5.35-.96-7.38-2.89-2.13-2.02-3.33-4.74-3.37-7.66-.04-2.93 1.08-5.68 3.15-7.75 4.19-4.19 11.01-4.19 15.2 0 2.07 2.07 3.19 4.82 3.15 7.75-.04 2.93-1.24 5.65-3.37 7.66-2.03 1.93-4.71 2.89-7.38 2.89Zm0-19.94c-2.37 0-4.74.9-6.54 2.7a9.203 9.203 0 0 0-2.71 6.67 9.12 9.12 0 0 0 2.9 6.59c3.5 3.32 9.2 3.31 12.7 0a9.216 9.216 0 0 0 2.9-6.59c.04-2.51-.93-4.89-2.71-6.67a9.22 9.22 0 0 0-6.54-2.7Z"
			:fill="color"
		></path>
		<path
			d="M12 18.32c-1.58 0-3.15-.57-4.35-1.7a.755.755 0 0 1-.03-1.06c.29-.3.76-.31 1.06-.03 1.83 1.73 4.81 1.73 6.64 0 .3-.28.78-.27 1.06.03.28.3.27.78-.03 1.06-1.2 1.13-2.77 1.7-4.35 1.7Z"
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
			d="M19.07 4.948c3.97 3.97 3.9 10.45-.2 14.34-3.79 3.59-9.94 3.59-13.74 0-4.11-3.89-4.18-10.37-.2-14.34 3.9-3.91 10.24-3.91 14.14 0Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M15.84 16.07c-2.12 2-5.56 2-7.67 0"
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
