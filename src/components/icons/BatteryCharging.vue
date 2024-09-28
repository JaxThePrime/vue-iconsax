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
			d="M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07ZM12.93 4.79H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35Zm-.4 8.89c-.02.04-.05.08-.08.11l-1.87 2.19c-.15.17-.36.26-.57.26-.17 0-.35-.06-.49-.18A.756.756 0 0 1 9.44 15l1.8-2.11c.01-.03 0-.06-.02-.09-.02-.04-.06-.06-.11-.06H9.12c-.59 0-1.11-.3-1.41-.81-.29-.51-.29-1.11 0-1.62l1.71-2.26a.75.75 0 0 1 1.2.9l-1.65 2.19c.03-.04.03 0 .05.05.02.04.06.06.11.06h2.01c.59 0 1.11.3 1.41.81.27.51.27 1.11-.02 1.62Z"
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
			d="M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M11.27 12c.77 0 1.25.83.87 1.5L10 16M10 8l-1.89 2.5c-.39.67.09 1.5.86 1.5M2 10c0-4 1-5 5-5M7 19c-4 0-5-1-5-5M13 5c4 0 5 1 5 5v4c0 4-1 5-5 5"
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
			d="M12.93 4.79H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35Z"
			:fill="color"
		></path>
		<path
			d="M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07ZM10.01 16.24c-.17 0-.35-.06-.49-.18A.756.756 0 0 1 9.44 15l1.8-2.11c.01-.03 0-.06-.02-.09-.02-.04-.06-.06-.11-.06H9.12c-.59 0-1.11-.3-1.41-.81-.29-.51-.29-1.11 0-1.62l1.71-2.26a.75.75 0 0 1 1.2.9l-1.65 2.19c.03-.04.03 0 .05.05.02.04.06.06.11.06h2.01c.59 0 1.11.3 1.41.81.29.51.29 1.11 0 1.62-.02.04-.05.08-.08.11l-1.87 2.19c-.16.18-.37.26-.59.26Z"
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
			d="M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M10 8l-1.89 2.5c-.39.67.09 1.5.86 1.5h2.3c.77 0 1.25.83.87 1.5L10 16M7 19c-4 0-5-1-5-5v-4c0-4 1-5 5-5M13 5c4 0 5 1 5 5v4c0 4-1 5-5 5"
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
			d="M20.5 15.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.59 0 .72-.09.73-.09.02-.06.02-.41.02-.66v-2c0-.25 0-.59-.04-.68-.01.01-.16-.07-.71-.07-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.08 0 2.25 1.02 2.25 2.25v2c0 1.23-.17 2.25-2.25 2.25ZM10 16.75c-.17 0-.35-.06-.49-.18a.756.756 0 0 1-.08-1.06l2.08-2.43c.03-.09 0-.17-.02-.21a.238.238 0 0 0-.22-.12h-2.3c-.63 0-1.2-.33-1.52-.87-.32-.54-.32-1.2 0-1.75L9.4 7.55a.75.75 0 0 1 1.2.9l-1.89 2.5c-.01.03.03.12.05.17.03.05.09.12.22.12h2.3c.63 0 1.2.33 1.52.87.32.54.32 1.2 0 1.75-.02.04-.05.08-.08.11l-2.14 2.5c-.16.19-.37.28-.58.28Z"
			:fill="color"
		></path>
		<path
			d="M7 19.75c-4.41 0-5.75-1.34-5.75-5.75v-4c0-4.41 1.34-5.75 5.75-5.75.41 0 .75.34.75.75s-.34.75-.75.75c-3.57 0-4.25.68-4.25 4.25v4c0 3.57.68 4.25 4.25 4.25.41 0 .75.34.75.75s-.34.75-.75.75ZM13 19.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c3.57 0 4.25-.68 4.25-4.25v-4c0-3.57-.68-4.25-4.25-4.25-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.41 0 5.75 1.34 5.75 5.75v4c0 4.41-1.34 5.75-5.75 5.75Z"
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
			opacity=".34"
			d="M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M10 8l-1.89 2.5c-.39.67.09 1.5.86 1.5h2.3c.77 0 1.25.83.87 1.5L10 16"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M7 19c-4 0-5-1-5-5v-4c0-4 1-5 5-5M13 5c4 0 5 1 5 5v4c0 4-1 5-5 5"
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
