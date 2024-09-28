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
			d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM7.75 9.14c0-.81.66-1.48 1.48-1.48.81 0 1.48.66 1.48 1.48 0 .81-.66 1.48-1.48 1.48a1.49 1.49 0 0 1-1.48-1.48Zm1.07 6.88c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6.55-6.55c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L9.35 15.8c-.15.15-.34.22-.53.22Zm6.95.32c-.81 0-1.48-.66-1.48-1.48 0-.81.66-1.48 1.48-1.48.81 0 1.48.66 1.48 1.48s-.66 1.48-1.48 1.48Z"
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
			d="M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9M8.32 15.27l6.54-6.54"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M8.73 10.37a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46ZM15.269 16.089a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46Z"
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
			d="M16.192 2h-8.37c-3.64 0-5.81 2.17-5.81 5.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81c0-3.64-2.17-5.81-5.81-5.81Z"
			:fill="color"
		></path>
		<path
			d="M8.822 16.02c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6.55-6.55c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.55 6.55c-.15.15-.34.22-.53.22ZM9.23 7.66c-.81 0-1.48.66-1.48 1.48 0 .81.66 1.48 1.48 1.48.81 0 1.48-.66 1.48-1.48a1.49 1.49 0 0 0-1.48-1.48ZM15.769 13.39c-.81 0-1.48.66-1.48 1.48 0 .81.66 1.48 1.48 1.48.81 0 1.48-.66 1.48-1.48s-.66-1.48-1.48-1.48Z"
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
			d="M9 2h6c5 0 7 2 7 7v6c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7ZM8.57 15.27l6.54-6.54"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M8.98 10.37a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46ZM15.52 16.09a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46Z"
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
			d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
			:fill="color"
		></path>
		<path
			d="M8.568 16.02c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6.55-6.55c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.55 6.55c-.15.15-.34.22-.53.22ZM8.98 11.108c-1.09 0-1.98-.89-1.98-1.98 0-1.09.89-1.98 1.98-1.98 1.09 0 1.98.89 1.98 1.98 0 1.09-.89 1.98-1.98 1.98Zm0-2.45a.48.48 0 0 0-.48.48c0 .27.21.48.48.48s.48-.21.48-.48a.48.48 0 0 0-.48-.48ZM15.519 16.839c-1.09 0-1.98-.89-1.98-1.98 0-1.09.89-1.98 1.98-1.98 1.09 0 1.98.89 1.98 1.98 0 1.09-.89 1.98-1.98 1.98Zm0-2.45a.48.48 0 0 0-.48.48c0 .27.21.48.48.48s.48-.21.48-.48-.21-.48-.48-.48Z"
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
			d="M9 2h6c5 0 7 2 7 7v6c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="m8.32 15.27 6.54-6.54M8.73 10.37a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46ZM15.269 16.089a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46Z"
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
