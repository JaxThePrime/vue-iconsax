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
			d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.38c0 2.81 1.29 4.74 3.56 5.47.66.23 1.42.34 2.25.34h8.38c.83 0 1.59-.11 2.25-.34C20.71 20.93 22 19 22 16.19V7.81C22 4.17 19.83 2 16.19 2Zm4.31 14.19c0 2.14-.84 3.49-2.53 4.05-.97-1.91-3.27-3.27-5.97-3.27-2.7 0-4.99 1.35-5.97 3.27h-.01c-1.67-.54-2.52-1.9-2.52-4.04V7.81c0-2.82 1.49-4.31 4.31-4.31h8.38c2.82 0 4.31 1.49 4.31 4.31v8.38Z"
			:fill="color"
		></path>
		<path
			d="M12.002 8c-1.98 0-3.58 1.6-3.58 3.58s1.6 3.59 3.58 3.59 3.58-1.61 3.58-3.59c0-1.98-1.6-3.58-3.58-3.58Z"
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
			d="M18.14 21.619c-.88.26-1.92.38-3.14.38H9c-1.22 0-2.26-.12-3.14-.38.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M2 12.94V15c0 3.78 1.14 5.85 3.86 6.62.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65C20.86 20.85 22 18.78 22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v3.94Zm10 1.23c-1.98 0-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58-1.6 3.59-3.58 3.59Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M15.582 10.58c0 1.98-1.6 3.59-3.58 3.59s-3.58-1.61-3.58-3.59c0-1.98 1.6-3.58 3.58-3.58s3.58 1.6 3.58 3.58Z"
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
			d="M22 7.81v8.38c0 2.81-1.29 4.74-3.56 5.47-.66.23-1.42.34-2.25.34H7.81c-.83 0-1.59-.11-2.25-.34C3.29 20.93 2 19 2 16.19V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81Z"
			:fill="color"
		></path>
		<path
			d="M18.439 21.659c-.66.23-1.42.34-2.25.34h-8.38c-.83 0-1.59-.11-2.25-.34.35-2.64 3.11-4.69 6.44-4.69 3.33 0 6.09 2.05 6.44 4.69ZM15.582 11.58c0 1.98-1.6 3.59-3.58 3.59s-3.58-1.61-3.58-3.59c0-1.98 1.6-3.58 3.58-3.58s3.58 1.6 3.58 3.58Z"
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
			d="M18.14 21.62c-.88.26-1.92.38-3.14.38H9c-1.22 0-2.26-.12-3.14-.38.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M15 2H9C4 2 2 4 2 9v6c0 3.78 1.14 5.85 3.86 6.62.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65C20.86 20.85 22 18.78 22 15V9c0-5-2-7-7-7Zm-3 12.17c-1.98 0-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58-1.6 3.59-3.58 3.59Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M15.58 10.58c0 1.98-1.6 3.59-3.58 3.59s-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58Z"
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
			d="M15 22.749H9c-1.32 0-2.42-.13-3.35-.41a.767.767 0 0 1-.54-.78c.25-2.99 3.28-5.34 6.89-5.34s6.63 2.34 6.89 5.34c.03.36-.19.68-.54.78-.93.28-2.03.41-3.35.41Zm-8.28-1.69c.66.13 1.41.19 2.28.19h6c.87 0 1.62-.06 2.28-.19-.53-1.92-2.72-3.34-5.28-3.34s-4.75 1.42-5.28 3.34Z"
			:fill="color"
		></path>
		<path
			d="M15 2H9C4 2 2 4 2 9v6c0 3.78 1.14 5.85 3.86 6.62.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65C20.86 20.85 22 18.78 22 15V9c0-5-2-7-7-7Zm-3 12.17c-1.98 0-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58-1.6 3.59-3.58 3.59Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M12.002 14.92a4.34 4.34 0 0 1-4.33-4.34c0-2.39 1.94-4.33 4.33-4.33s4.33 1.94 4.33 4.33a4.34 4.34 0 0 1-4.33 4.34Zm0-7.17a2.836 2.836 0 0 0 0 5.67 2.836 2.836 0 0 0 0-5.67Z"
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
			d="M18.14 21.619c-.88.26-1.92.38-3.14.38H9c-1.22 0-2.26-.12-3.14-.38.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M22 9v6c0 3.78-1.14 5.85-3.86 6.62-.88.26-1.92.38-3.14.38H9c-1.22 0-2.26-.12-3.14-.38C3.14 20.85 2 18.78 2 15V9c0-5 2-7 7-7h6c5 0 7 2 7 7Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M15.582 10.58c0 1.98-1.6 3.59-3.58 3.59s-3.58-1.61-3.58-3.59c0-1.98 1.6-3.58 3.58-3.58s3.58 1.6 3.58 3.58Z"
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
