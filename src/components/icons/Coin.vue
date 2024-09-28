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
			d="M12 22.748c-4 0-7.25-2.87-7.25-6.4v-3.7c0-.41.34-.75.75-.75s.75.34.75.75c0 2.62 2.47 4.6 5.75 4.6s5.75-1.98 5.75-4.6c0-.41.34-.75.75-.75s.75.34.75.75v3.7c0 3.53-3.25 6.4-7.25 6.4Zm-5.75-6.29c.07 2.65 2.62 4.79 5.75 4.79s5.68-2.14 5.75-4.79c-1.3 1.41-3.36 2.29-5.75 2.29s-4.44-.88-5.75-2.29Z"
			:fill="color"
		></path>
		<path
			d="M12 13.75c-2.76 0-5.24-1.24-6.45-3.24-.52-.85-.8-1.84-.8-2.86 0-1.72.77-3.34 2.16-4.56C8.27 1.9 10.08 1.25 12 1.25s3.72.65 5.09 1.83c1.39 1.23 2.16 2.85 2.16 4.57 0 1.02-.28 2-.8 2.86-1.21 2-3.69 3.24-6.45 3.24Zm0-11c-1.56 0-3.02.52-4.11 1.48-1.06.92-1.64 2.14-1.64 3.42 0 .75.2 1.45.58 2.08.95 1.56 2.93 2.52 5.17 2.52 2.24 0 4.22-.97 5.17-2.52.39-.63.58-1.33.58-2.08 0-1.28-.58-2.5-1.65-3.44-1.09-.94-2.54-1.46-4.1-1.46Z"
			:fill="color"
		></path>
		<path
			d="M12 18.75c-4.13 0-7.25-2.62-7.25-6.1v-5c0-3.53 3.25-6.4 7.25-6.4 1.92 0 3.72.65 5.09 1.83 1.39 1.23 2.16 2.85 2.16 4.57v5c0 3.48-3.12 6.1-7.25 6.1Zm0-16c-3.17 0-5.75 2.2-5.75 4.9v5c0 2.62 2.47 4.6 5.75 4.6s5.75-1.98 5.75-4.6v-5c0-1.28-.58-2.5-1.65-3.44-1.09-.94-2.54-1.46-4.1-1.46Z"
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
			d="M12 21.998c3.59 0 6.5-2.53 6.5-5.65v-3.7c0 3.12-2.91 5.35-6.5 5.35s-6.5-2.23-6.5-5.35v3.7c0 1.71.87 3.24 2.25 4.27"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M18.5 7.65c0 .91-.25 1.75-.69 2.47C16.74 11.88 14.54 13 12 13c-2.54 0-4.74-1.12-5.81-2.88-.44-.72-.69-1.56-.69-2.47 0-1.56.73-2.97 1.9-3.99C8.58 2.63 10.2 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M18.5 7.65v5c0 3.12-2.91 5.35-6.5 5.35s-6.5-2.23-6.5-5.35v-5C5.5 4.53 8.41 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4Z"
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
			d="M18.5 12.648v3.7c0 3.12-2.91 5.65-6.5 5.65s-6.5-2.53-6.5-5.65v-3.7c0 3.12 2.91 5.35 6.5 5.35s6.5-2.23 6.5-5.35Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="M18.5 7.648v5c0 3.12-2.91 5.35-6.5 5.35s-6.5-2.23-6.5-5.35v-5c0 .91.25 1.75.69 2.47 1.07 1.76 3.27 2.88 5.81 2.88 2.54 0 4.74-1.12 5.81-2.88.44-.72.69-1.56.69-2.47Z"
			:fill="color"
		></path>
		<path
			d="M18.5 7.65c0 .91-.25 1.75-.69 2.47C16.74 11.88 14.54 13 12 13c-2.54 0-4.74-1.12-5.81-2.88-.44-.72-.69-1.56-.69-2.47C5.5 4.53 8.41 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4Z"
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
			d="M18.5 12.65v3.7c0 3.12-2.91 5.65-6.5 5.65s-6.5-2.53-6.5-5.65v-3.7C5.5 15.77 8.41 18 12 18s6.5-2.23 6.5-5.35Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M18.5 7.65c0 .91-.25 1.75-.69 2.47C16.74 11.88 14.54 13 12 13c-2.54 0-4.74-1.12-5.81-2.88-.44-.72-.69-1.56-.69-2.47 0-1.56.73-2.97 1.9-3.99C8.58 2.63 10.2 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M18.5 7.65v5c0 3.12-2.91 5.35-6.5 5.35s-6.5-2.23-6.5-5.35v-5C5.5 4.53 8.41 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4Z"
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
			d="M10.84 13.54h-1.5c-1.15 0-2.08-.96-2.08-2.15 0-.41.34-.75.75-.75s.75.34.75.75c0 .36.26.65.58.65h1.5c.23 0 .41-.21.41-.47 0-.35-.06-.37-.29-.45l-2.41-.84c-.87-.3-1.3-.91-1.3-1.86 0-1.08.86-1.97 1.91-1.97h1.5c1.15 0 2.08.96 2.08 2.15 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.36-.26-.65-.58-.65h-1.5c-.23 0-.41.21-.41.47 0 .35.06.37.29.45l2.41.84c.87.31 1.29.92 1.29 1.86.01 1.09-.85 1.97-1.9 1.97Z"
			:fill="color"
		></path>
		<path
			d="M10 14.342c-.41 0-.75-.34-.75-.75v-.74c0-.41.34-.75.75-.75s.75.34.75.75v.74c0 .42-.34.75-.75.75ZM10 7.94c-.41 0-.75-.34-.75-.75v-.78c0-.41.34-.75.75-.75s.75.34.75.75v.78c0 .41-.34.75-.75.75Z"
			:fill="color"
		></path>
		<path
			d="M9.99 18.718c-4.82 0-8.74-3.92-8.74-8.74s3.92-8.74 8.74-8.74 8.74 3.92 8.74 8.74-3.93 8.74-8.74 8.74Zm0-15.97c-3.99 0-7.24 3.25-7.24 7.24s3.25 7.23 7.24 7.23 7.24-3.25 7.24-7.24-3.25-7.23-7.24-7.23Z"
			:fill="color"
		></path>
		<path
			d="M17.021 22.718a5.7 5.7 0 0 1-4.66-2.42.753.753 0 1 1 1.23-.87 4.197 4.197 0 0 0 7.63-2.42c0-1.35-.66-2.63-1.76-3.42a.751.751 0 1 1 .88-1.22 5.72 5.72 0 0 1 2.38 4.64 5.7 5.7 0 0 1-5.7 5.71Z"
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
			d="M18.5 12.648v3.7c0 3.12-2.91 5.65-6.5 5.65s-6.5-2.53-6.5-5.65v-3.7c0 3.12 2.91 5.35 6.5 5.35s6.5-2.23 6.5-5.35Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M18.5 7.65c0 .91-.25 1.75-.69 2.47C16.74 11.88 14.54 13 12 13c-2.54 0-4.74-1.12-5.81-2.88-.44-.72-.69-1.56-.69-2.47 0-1.56.73-2.97 1.9-3.99C8.58 2.63 10.2 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M18.5 7.65v5c0 3.12-2.91 5.35-6.5 5.35s-6.5-2.23-6.5-5.35v-5C5.5 4.53 8.41 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4Z"
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
