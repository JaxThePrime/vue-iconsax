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
			d="M3.05 19.871c.29.42.66.79 1.08 1.08.95.69 2.19 1.05 3.68 1.05h8.38c3.44 0 5.57-1.94 5.78-5.22H2.02c.08 1.23.43 2.27 1.03 3.09ZM20.95 4.13c-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81v7.47h20V7.81c0-1.49-.36-2.73-1.05-3.68Zm-5.86 5.43-2.56 2.56c-.29.29-.77.29-1.06 0L8.91 9.56a.742.742 0 0 1-.22-.53c0-.19.07-.39.22-.53.29-.3.77-.3 1.06 0L12 10.52l2.03-2.03c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.07Z"
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
			d="M22 15.5H2M14.56 8.5 12 11.06 9.44 8.5M22 15.5H2"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M1.97 11.02V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7h-6c-5 0-7-2-7-7"
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
			d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.38c0 .2.01.4.02.59.08 1.23.43 2.27 1.03 3.09.29.42.66.79 1.08 1.08.95.69 2.19 1.05 3.68 1.05h8.38c3.44 0 5.57-1.94 5.78-5.22.02-.19.03-.39.03-.59V7.81c0-1.49-.36-2.73-1.05-3.68-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2Z"
			:fill="color"
		></path>
		<path
			d="M22 15.281H2v.91c0 .2.01.4.02.59h19.95c.02-.19.03-.39.03-.59v-.91ZM8.69 9.028c0 .19.07.38.22.53l2.56 2.56c.29.29.77.29 1.06 0l2.56-2.56c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0L12 10.518l-2.03-2.02c-.29-.3-.77-.3-1.06 0a.71.71 0 0 0-.22.53Z"
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
			d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7ZM22 15.5H2"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M14.56 8.5 12 11.06 9.44 8.5"
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
			d="M14.97 22.75h-6c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.31 7.75-7.75 7.75Zm-6-20C4.36 2.75 2.72 4.39 2.72 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25h-6Z"
			:fill="color"
		></path>
		<path
			d="M22 16.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 11.811c-.19 0-.38-.07-.53-.22l-2.56-2.56a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.03 2.03 2.03-2.03c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.56 2.56c-.15.15-.34.22-.53.22Z"
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
			d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M22 15.5H2M14.56 8.5 12 11.06 9.44 8.5"
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
