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
			:fill="color"
			d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM5.25 11.89c.03-1.76.73-3.42 1.97-4.66A6.718 6.718 0 0112 5.25c1.8 0 3.5.7 4.77 1.98.03.03.06.07.09.11v-.86c0-.41.34-.75.75-.75s.75.34.75.75v2.65c0 .41-.34.75-.75.75h-2.65c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.83c-.03-.03-.05-.06-.08-.09A5.22 5.22 0 0012 6.75c-1.4 0-2.72.55-3.71 1.54-.97.97-1.51 2.26-1.53 3.63a.76.76 0 01-.76.73h-.01c-.41 0-.74-.35-.74-.76zm11.52 4.88A6.719 6.719 0 0112 18.75c-1.8 0-3.5-.7-4.77-1.98-.03-.03-.06-.07-.09-.11v.85c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.65c0-.41.34-.75.75-.75h2.65c.41 0 .75.34.75.75s-.34.75-.75.75h-.83c.03.03.05.06.08.09A5.22 5.22 0 0012 17.24c1.4 0 2.72-.55 3.71-1.54.98-.98 1.53-2.29 1.53-3.69 0-.41.34-.75.75-.75s.75.34.75.75c0 1.81-.7 3.5-1.97 4.76z"
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
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M17.5 12c0 3.04-2.46 5.5-5.5 5.5s-4.89-3.06-4.89-3.06m0 0h2.48m-2.48 0v2.75M6.5 12c0-3.04 2.44-5.5 5.5-5.5 3.67 0 5.5 3.06 5.5 3.06m0 0V6.81m0 2.75h-2.44"
		></path>
		<path
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M2 14v1c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
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
			:fill="color"
			d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z"
			opacity=".4"
		></path>
		<path
			:fill="color"
			d="M18 11.27c-.42 0-.75.33-.75.75a5.23 5.23 0 01-1.53 3.69 5.22 5.22 0 01-3.71 1.54c-1.4 0-2.72-.55-3.71-1.54-.03-.03-.05-.06-.08-.09h.83c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H6.4c-.41 0-.75.34-.75.75v2.65c0 .41.34.75.75.75s.75-.34.75-.75v-.85c.03.03.06.07.09.11a6.719 6.719 0 004.77 1.98c1.8 0 3.5-.7 4.77-1.98a6.73 6.73 0 001.97-4.75c0-.42-.34-.75-.75-.76zM6 12.65c.41 0 .74-.33.75-.74.02-1.37.57-2.66 1.53-3.63a5.22 5.22 0 013.71-1.54c1.4 0 2.72.55 3.71 1.54.03.03.05.06.08.09h-.83c-.41 0-.75.34-.75.75s.34.75.75.75h2.65c.41 0 .75-.34.75-.75V6.48c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.86c-.03-.03-.06-.07-.09-.11a6.719 6.719 0 00-4.77-1.98c-1.8 0-3.5.7-4.77 1.98a6.64 6.64 0 00-1.97 4.66c-.01.41.32.75.74.76H6z"
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
			d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
		></path>
		<path
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M17.5 12c0 3.04-2.46 5.5-5.5 5.5s-4.89-3.06-4.89-3.06m0 0h2.48m-2.48 0v2.75M6.5 12c0-3.04 2.44-5.5 5.5-5.5 3.67 0 5.5 3.06 5.5 3.06m0 0V6.81m0 2.75h-2.44"
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
			:fill="color"
			d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"
		></path>
		<path
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M17.5 12c0 3.04-2.46 5.5-5.5 5.5s-4.89-3.06-4.89-3.06m0 0h2.48m-2.48 0v2.75M6.5 12c0-3.04 2.44-5.5 5.5-5.5 3.67 0 5.5 3.06 5.5 3.06m0 0V6.81m0 2.75h-2.44"
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
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
		></path>
		<path
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M17.5 12c0 3.04-2.46 5.5-5.5 5.5s-4.89-3.06-4.89-3.06m0 0h2.48m-2.48 0v2.75M6.5 12c0-3.04 2.44-5.5 5.5-5.5 3.67 0 5.5 3.06 5.5 3.06m0 0V6.81m0 2.75h-2.44"
			opacity=".4"
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
