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
			d="M19.071 14.242c-.29.29-.75.29-1.03 0a.718.718 0 0 1 0-1.03c2-2 2-5.25 0-7.24-2-1.99-5.25-2-7.24 0-1.99 2-2 5.25 0 7.24.29.29.29.75 0 1.03-.29.29-.75.29-1.03 0-2.57-2.57-2.57-6.75 0-9.31 2.57-2.56 6.75-2.57 9.31 0a6.594 6.594 0 0 1-.01 9.31Z"
			:fill="color"
		></path>
		<path
			d="M4.929 9.76c.29-.29.75-.29 1.03 0 .29.29.29.75 0 1.03-2 2-2 5.25 0 7.24 2 1.99 5.25 2 7.24 0 1.99-2 2-5.25 0-7.24a.718.718 0 0 1 0-1.03c.29-.29.75-.29 1.03 0 2.57 2.57 2.57 6.75 0 9.31-2.57 2.56-6.75 2.57-9.31 0a6.594 6.594 0 0 1 .01-9.31Z"
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
			d="M13.06 10.941a5.74 5.74 0 0 1 0 8.13c-2.25 2.24-5.89 2.25-8.13 0-2.24-2.25-2.25-5.89 0-8.13M14.969 3.172c1.49.03 2.97.62 4.1 1.76 2.34 2.34 2.34 6.14 0 8.49"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M10.59 13.412c-2.34-2.34-2.34-6.14 0-8.49"
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
			d="M19.071 14.242c-.29.29-.75.29-1.03 0a.718.718 0 0 1 0-1.03c2-2 2-5.25 0-7.24-2-1.99-5.25-2-7.24 0-1.99 2-2 5.25 0 7.24.29.29.29.75 0 1.03-.29.29-.75.29-1.03 0-2.57-2.57-2.57-6.75 0-9.31 2.57-2.56 6.75-2.57 9.31 0a6.594 6.594 0 0 1-.01 9.31Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="M19.07 4.931a6.585 6.585 0 0 1-3.09 11.05c.53-2.16-.05-4.53-1.74-6.22a6.564 6.564 0 0 0-6.22-1.74c.28-1.13.85-2.21 1.74-3.09a6.585 6.585 0 0 1 9.31 0Z"
			:fill="color"
		></path>
		<path
			d="M4.929 9.76c.29-.29.75-.29 1.03 0 .29.29.29.75 0 1.03-2 2-2 5.25 0 7.24 2 1.99 5.25 2 7.24 0 1.99-2 2-5.25 0-7.24a.718.718 0 0 1 0-1.03c.29-.29.75-.29 1.03 0 2.57 2.57 2.57 6.75 0 9.31-2.57 2.56-6.75 2.57-9.31 0a6.594 6.594 0 0 1 .01-9.31Z"
			:fill="color"
		></path>
		<path
			opacity=".5"
			d="M14.241 9.762a6.563 6.563 0 0 1 1.74 6.22 6.585 6.585 0 0 1-11.05 3.09 6.585 6.585 0 0 1 0-9.31c.88-.89 1.96-1.46 3.09-1.74 2.16-.53 4.53.05 6.22 1.74Z"
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
			d="M13.06 10.94a5.74 5.74 0 0 1 0 8.13c-2.25 2.24-5.89 2.25-8.13 0-2.24-2.25-2.25-5.89 0-8.13"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M10.59 13.41c-2.34-2.34-2.34-6.14 0-8.49 2.34-2.35 6.14-2.34 8.49 0 2.35 2.34 2.34 6.14 0 8.49"
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
			d="M16.498 18.25h-1.51c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.51c2.62 0 4.75-2.13 4.75-4.75s-2.13-4.75-4.75-4.75h-1.5a.749.749 0 1 1 0-1.5h1.5c3.45 0 6.25 2.8 6.25 6.25s-2.8 6.25-6.25 6.25ZM9 18.25H7.5c-3.45 0-6.25-2.8-6.25-6.25s2.8-6.25 6.25-6.25H9c.41 0 .75.34.75.75s-.34.75-.75.75H7.5c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75H9c.41 0 .75.34.75.75s-.34.75-.75.75Z"
			:fill="color"
		></path>
		<path
			d="M16 12.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
			d="M13.06 10.941a5.74 5.74 0 0 1 0 8.13c-2.25 2.24-5.89 2.25-8.13 0-2.24-2.25-2.25-5.89 0-8.13"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M10.59 13.409c-2.34-2.34-2.34-6.14 0-8.49 2.34-2.35 6.14-2.34 8.49 0 2.35 2.34 2.34 6.14 0 8.49"
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
