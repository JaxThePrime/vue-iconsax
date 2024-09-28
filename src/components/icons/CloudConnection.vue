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
			d="M19.2 14.781c-.86.79-2 1.23-3.17 1.22H6.37c-4.07-.29-4.08-6.2 0-6.49h.04c-2.79-7.76 9-10.85 10.35-2.71 3.77.48 5.3 5.49 2.44 7.98Z"
			:fill="color"
		></path>
		<path
			d="M18.75 21c0 .41-.34.75-.75.75h-4c-.05 0-.09 0-.14-.02-.29.74-1.02 1.27-1.86 1.27-.84 0-1.57-.53-1.86-1.27-.05.02-.09.02-.14.02H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.05 0 .09 0 .14.02.2-.52.61-.93 1.13-1.13-.02-.05-.02-.09-.02-.14v-3h1.5v3c0 .05 0 .09-.02.14.52.2.93.61 1.13 1.13.05-.02.09-.02.14-.02h4c.41 0 .75.34.75.75Z"
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
			d="M6.41 9.511c-2.79-7.76 9-10.85 10.35-2.71 3.42.43 5 4.59 3.12 7.22M6.37 9.512c-4.08.29-4.07 6.2 0 6.49h9.66M12 16v3M10 21c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2M18 21h-4M10 21H6"
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
			d="M19.2 14.781c-.86.79-2 1.23-3.17 1.22H6.37c-4.07-.29-4.08-6.2 0-6.49h.04c-2.79-7.76 9-10.85 10.35-2.71 3.77.48 5.3 5.49 2.44 7.98Z"
			:fill="color"
		></path>
		<path
			d="M18.75 21c0 .41-.34.75-.75.75h-4c-.05 0-.09 0-.14-.02-.29.74-1.02 1.27-1.86 1.27-.84 0-1.57-.53-1.86-1.27-.05.02-.09.02-.14.02H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.05 0 .09 0 .14.02.2-.52.61-.93 1.13-1.13-.02-.05-.02-.09-.02-.14v-3h1.5v3c0 .05 0 .09-.02.14.52.2.93.61 1.13 1.13.05-.02.09-.02.14-.02h4c.41 0 .75.34.75.75Z"
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
			d="M6.37 9.51c-4.08.29-4.07 6.2 0 6.49h9.66c1.17.01 2.3-.43 3.17-1.22 2.86-2.5 1.33-7.5-2.44-7.98C15.41-1.34 3.62 1.75 6.41 9.51M12 16v3M12 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 21h-4M10 21H6"
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
		v-else-if="type === 'outline'"
	>
		<path
			d="M16.06 16.748h-9.7c-2.63-.18-3.81-2.2-3.81-4 0-1.58.91-3.33 2.89-3.85-.52-2.17-.04-4.2 1.37-5.68 1.64-1.72 4.26-2.4 6.53-1.7 2.06.63 3.51 2.31 4.05 4.64 1.79.43 3.22 1.79 3.79 3.67.63 2.06.05 4.17-1.5 5.52-.97.9-2.26 1.4-3.62 1.4Zm-9.66-6.49c-1.61.13-2.33 1.34-2.33 2.49 0 1.16.73 2.38 2.36 2.5H16.07c.98 0 1.92-.36 2.63-1.02 1.32-1.15 1.41-2.8 1.06-3.97-.36-1.17-1.35-2.49-3.09-2.71a.753.753 0 0 1-.65-.62c-.34-2.05-1.45-3.46-3.11-3.97-1.71-.52-3.76.01-5 1.31-1.21 1.27-1.49 3.04-.79 5a.75.75 0 0 1-.45.96c-.09.02-.17.04-.27.03Z"
			:fill="color"
		></path>
		<path
			d="M12 19.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z"
			:fill="color"
		></path>
		<path
			d="M12 23.75c-1.52 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75 2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75Zm0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
			:fill="color"
		></path>
		<path
			d="M18 21.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM10 21.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
			d="M6.37 9.511c-4.08.29-4.07 6.2 0 6.49h9.66c1.17.01 2.3-.43 3.17-1.22 2.86-2.5 1.33-7.5-2.44-7.98-1.35-8.14-13.14-5.05-10.35 2.71"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M12 16v3"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M12 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M18 21h-4M10 21H6"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
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
