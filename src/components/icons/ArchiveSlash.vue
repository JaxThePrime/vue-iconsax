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
			d="M20.12 3.88 3.39 20.61c-.05-.2-.07-.42-.07-.66V5.86C3.32 3.74 5.05 2 7.18 2h9.64c1.4 0 2.63.75 3.3 1.88Z"
			:fill="color"
		></path>
		<path
			d="M21.77 2.229c-.3-.3-.79-.3-1.09 0L2.23 20.689c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08ZM19.29 7.71 11.9 15.1a.993.993 0 0 0 .19 1.56l7.39 4.43c.67.4 1.51-.08 1.51-.86V8.41c.01-.89-1.07-1.33-1.7-.7Z"
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
			d="M22 2 2 22M20.68 8.71v11c0 2.01-1.44 2.86-3.2 1.88L11 17.54M3.32 5.86C3.32 3.74 5.05 2 7.18 2h9.65c1.21 0 2.29.56 3 1.44M3.32 19.952v-9.94"
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
			d="M20.68 6.32v13.63c0 1.8-1.29 2.56-2.86 1.69l-4.88-2.72c-.52-.28-1.36-.28-1.88 0l-4.88 2.72c-.42.23-.82.35-1.18.36L20.68 6.32Z"
			:fill="color"
		></path>
		<path
			d="M20.12 3.88 3.39 20.61c-.05-.2-.07-.42-.07-.66V5.86C3.32 3.74 5.05 2 7.18 2h9.64c1.4 0 2.63.75 3.3 1.88Z"
			:fill="color"
		></path>
		<path
			d="M21.77 2.229c-.3-.3-.79-.3-1.09 0L2.23 20.689c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z"
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
			d="M22 2 2 22M20.68 8.71v11c0 2.01-1.44 2.86-3.2 1.88L11 17.54M3.32 19.95V5.86C3.32 3.74 5.05 2 7.18 2h9.65c1.21 0 2.29.56 3 1.44"
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
			d="M2 22.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l20-20c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-20 20c-.15.15-.34.22-.53.22ZM18.88 22.75c-.56 0-1.16-.17-1.76-.5l-6.52-4.07a.747.747 0 1 1 .79-1.27l6.49 4.05c.56.31 1.12.38 1.48.17.36-.21.57-.73.57-1.42v-11c0-.41.34-.75.75-.75s.75.34.75.75v11c0 1.23-.48 2.22-1.31 2.71-.37.22-.79.33-1.24.33Z"
			:fill="color"
		></path>
		<path
			d="M3.32 20.7c-.41 0-.75-.34-.75-.75V5.86c0-2.54 2.07-4.61 4.61-4.61h9.65c1.39 0 2.7.62 3.58 1.71.26.32.21.79-.11 1.06-.32.26-.79.21-1.05-.11a3.1 3.1 0 0 0-2.42-1.16H7.18a3.12 3.12 0 0 0-3.11 3.11v14.09c0 .41-.34.75-.75.75Z"
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
			d="M22 2 2 22"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M20.68 8.71v11c0 2.01-1.44 2.86-3.2 1.88L11 17.54"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M3.32 19.95V5.86C3.32 3.74 5.05 2 7.18 2h9.65c1.21 0 2.29.56 3 1.44"
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
