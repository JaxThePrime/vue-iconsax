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
			d="M8.29 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM15.71 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76Z"
			:fill="color"
		></path>
		<path
			d="M19.57 4.5c-.66-.49-1.61-.02-1.61.81v.1c0 1.17-.84 2.25-2.01 2.37-1.35.14-2.49-.92-2.49-2.24V4.5c0-.55-.45-1-1-1h-.92c-.55 0-1 .45-1 1v1.04c0 .79-.41 1.49-1.03 1.88-.09.06-.19.11-.29.16-.09.05-.19.09-.3.12-.12.04-.25.07-.39.08-.16.02-.32.02-.48 0-.14-.01-.27-.04-.39-.08a2.694 2.694 0 0 1-.59-.28c-.63-.44-1.03-1.2-1.03-2.01v-.1c0-.77-.82-1.23-1.47-.9-.01.01-.02.01-.03.02-.04.02-.07.04-.11.07-.03.03-.07.05-.1.08-.28.22-.53.47-.74.74-.11.12-.2.25-.28.38a3.498 3.498 0 0 0-.27.46c-.02.02-.03.03-.03.05-.06.12-.12.24-.16.37-.03.05-.04.09-.06.14-.06.15-.1.3-.14.45-.04.14-.07.29-.09.44a5.902 5.902 0 0 0-.06.76v8.76A4.87 4.87 0 0 0 7.37 22h9.26a4.87 4.87 0 0 0 4.87-4.87V8.37c0-1.59-.76-2.98-1.93-3.87ZM12 17.42H7.36a.755.755 0 0 1 0-1.51H12c.42 0 .75.34.75.76 0 .41-.33.75-.75.75Zm2.78-3.71H7.36a.755.755 0 0 1 0-1.51h7.42c.42 0 .76.34.76.76 0 .41-.34.75-.76.75Z"
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
			d="M8 2v3M16 2v3M7 13h8M7 17h5M3 9.65c0-4.7 1.67-5.96 5-6.15h8c3.33.18 5 1.45 5 6.15v6.18c0 4.12-1 6.18-6 6.18H9c-5 0-6-2.06-6-6.18v-2.02"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
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
			d="M20 8.25V18c0 3-1.79 4-4 4H8c-2.21 0-4-1-4-4V8.25c0-3.25 1.79-4 4-4 0 .62.25 1.18.66 1.59.41.41.97.66 1.59.66h3.5C14.99 6.5 16 5.49 16 4.25c2.21 0 4 .75 4 4Z"
			:fill="color"
		></path>
		<path
			d="M16 4.25c0 1.24-1.01 2.25-2.25 2.25h-3.5c-.62 0-1.18-.25-1.59-.66C8.25 5.43 8 4.87 8 4.25 8 3.01 9.01 2 10.25 2h3.5c.62 0 1.18.25 1.59.66.41.41.66.97.66 1.59ZM12 13.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM16 17.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
			d="M20 8.25V18c0 3-1.79 4-4 4H8c-2.21 0-4-1-4-4V8.25c0-3.25 1.79-4 4-4 0 .62.25 1.18.66 1.59.41.41.97.66 1.59.66h3.5C14.99 6.5 16 5.49 16 4.25c2.21 0 4 .75 4 4Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M16 4.25c0 1.24-1.01 2.25-2.25 2.25h-3.5c-.62 0-1.18-.25-1.59-.66C8.25 5.43 8 4.87 8 4.25 8 3.01 9.01 2 10.25 2h3.5c.62 0 1.18.25 1.59.66.41.41.66.97.66 1.59ZM8 13h4M8 17h8"
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
			d="M8 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM16 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM15 13.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 17.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
			:fill="color"
		></path>
		<path
			d="M15 22.75H9c-5.62 0-6.75-2.65-6.75-6.93V9.65c0-4.74 1.6-6.67 5.71-6.9H16.04c4.11.23 5.71 2.16 5.71 6.9v6.17c0 4.28-1.13 6.93-6.75 6.93ZM8 4.25c-2.8.16-4.25 1.04-4.25 5.4v6.17c0 3.83.73 5.43 5.25 5.43h6c4.52 0 5.25-1.6 5.25-5.43V9.65c0-4.35-1.44-5.24-4.27-5.4H8Z"
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
			d="M20 8.25V18c0 3-1.79 4-4 4H8c-2.21 0-4-1-4-4V8.25c0-3.25 1.79-4 4-4 0 .62.25 1.18.66 1.59.41.41.97.66 1.59.66h3.5C14.99 6.5 16 5.49 16 4.25c2.21 0 4 .75 4 4Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M16 4.25c0 1.24-1.01 2.25-2.25 2.25h-3.5c-.62 0-1.18-.25-1.59-.66C8.25 5.43 8 4.87 8 4.25 8 3.01 9.01 2 10.25 2h3.5c.62 0 1.18.25 1.59.66.41.41.66.97.66 1.59Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M8 13h4M8 17h8"
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
