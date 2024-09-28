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
			d="M22.19 2.21a.715.715 0 0 0-.4-.4.753.753 0 0 0-.29-.06H15c-.41 0-.75.34-.75.75s.34.75.75.75h4.69l-4.51 4.52h-.01A7.673 7.673 0 0 0 10.25 6 7.75 7.75 0 1 0 18 13.75c0-1.87-.66-3.58-1.77-4.92l4.52-4.52V9c0 .41.34.75.75.75s.75-.34.75-.75V2.5c0-.1-.02-.19-.06-.29Z"
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
			d="M4.27 18.68a7.75 7.75 0 1 0-1.77-4.93M21.5 2.5 16 8M15 2.5h6.5V9"
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
			d="M18 13.75A7.75 7.75 0 1 1 10.25 6c1.87 0 3.58.66 4.92 1.77h.01c.39.32.74.67 1.05 1.06A7.673 7.673 0 0 1 18 13.75Z"
			:fill="color"
		></path>
		<path
			d="M22.25 2.5V9c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.31l-4.52 4.52c-.31-.39-.66-.74-1.05-1.06l4.51-4.52H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.5c.1 0 .19.02.29.06.18.07.33.22.4.4.04.1.06.19.06.29Z"
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
			d="M10.25 21.5a7.75 7.75 0 1 0 0-15.5 7.75 7.75 0 0 0 0 15.5ZM21.5 2.5 16 8M15 2.5h6.5V9"
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
			d="M10.25 22.25c-4.69 0-8.5-3.81-8.5-8.5 0-4.69 3.81-8.5 8.5-8.5 4.69 0 8.5 3.81 8.5 8.5 0 4.69-3.81 8.5-8.5 8.5Zm0-15.5c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Z"
			:fill="color"
		></path>
		<path
			d="M16 8.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l5.5-5.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-5.5 5.5c-.15.15-.34.22-.53.22Z"
			:fill="color"
		></path>
		<path
			d="M21.5 9.75c-.41 0-.75-.34-.75-.75V3.25H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.5c.41 0 .75.34.75.75V9c0 .41-.34.75-.75.75Z"
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
			d="M10.25 21.5a7.75 7.75 0 1 0 0-15.5 7.75 7.75 0 0 0 0 15.5Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<g
			opacity=".4"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M21.5 2.5 16 8M15 2.5h6.5V9"></path>
		</g>
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
