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
			d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm.22 7.83a4.341 4.341 0 0 1-4.09 2.91h-.02l-2.06-.01h-.01c-.76 0-1.42.51-1.62 1.24.89.28 1.54 1.11 1.54 2.09 0 1.21-.99 2.2-2.2 2.2-1.21 0-2.2-.99-2.2-2.2 0-.89.54-1.66 1.3-2V9.7a2.05 2.05 0 0 1-1.3-1.9c0-1.13.92-2.05 2.05-2.05s2.05.92 2.05 2.05c0 .87-.54 1.6-1.3 1.9v2.02c.49-.31 1.07-.49 1.68-.49h.01l2.06.01c1.18.04 2.23-.72 2.65-1.82-.49-.38-.81-.96-.81-1.62 0-1.13.92-2.05 2.05-2.05s2.05.92 2.05 2.05c.01 1.06-.8 1.92-1.83 2.03Z"
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
			d="M2 13.02V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9M7.8 13.802v-4.2"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M7.95 18.002a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9ZM7.8 9.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM16.2 9.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM7.88 13.798a2.425 2.425 0 0 1 2.36-1.82l2.06.01c1.57.01 2.91-1 3.4-2.41"
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
			d="M16.19 22.002H7.82c-3.64 0-5.81-2.17-5.81-5.81v-8.37c0-3.64 2.17-5.81 5.81-5.81h8.37c3.64 0 5.81 2.17 5.81 5.81v8.37c0 3.64-2.17 5.81-5.81 5.81Z"
			:fill="color"
		></path>
		<path
			d="M16.41 9.83a4.341 4.341 0 0 1-4.09 2.91h-.02l-2.06-.01h-.01c-.76 0-1.42.51-1.62 1.24.89.28 1.54 1.11 1.54 2.09 0 1.21-.99 2.2-2.2 2.2-1.21 0-2.2-.99-2.2-2.2 0-.89.54-1.66 1.3-2V9.72a2.05 2.05 0 0 1-1.3-1.9c0-1.13.92-2.05 2.05-2.05s2.05.92 2.05 2.05c0 .87-.54 1.6-1.3 1.9v2.02c.49-.31 1.07-.49 1.68-.49h.01l2.06.01c1.18.04 2.23-.72 2.65-1.82-.49-.38-.81-.96-.81-1.62 0-1.13.92-2.05 2.05-2.05s2.05.92 2.05 2.05c.01 1.04-.8 1.9-1.83 2.01Z"
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
			d="M7.8 13.8V9.6M7.95 18a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9ZM7.8 9.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM16.2 9.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM7.88 13.8a2.425 2.425 0 0 1 2.36-1.82l2.06.01c1.57.01 2.91-1 3.4-2.41"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M9 2h6c5 0 7 2 7 7v6c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7Z"
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
			d="M7.8 14.552c-.41 0-.75-.34-.75-.75v-4.2c0-.41.34-.75.75-.75s.75.34.75.75v4.2c0 .41-.34.75-.75.75Z"
			:fill="color"
		></path>
		<path
			d="M7.95 18.752c-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7Zm0-3.9c-.66 0-1.2.54-1.2 1.2 0 .66.54 1.2 1.2 1.2.66 0 1.2-.54 1.2-1.2 0-.66-.54-1.2-1.2-1.2ZM7.8 10.35c-1.41 0-2.55-1.14-2.55-2.55S6.39 5.25 7.8 5.25s2.55 1.14 2.55 2.55-1.14 2.55-2.55 2.55Zm0-3.6a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1ZM16.2 10.35c-1.41 0-2.55-1.14-2.55-2.55s1.14-2.55 2.55-2.55 2.55 1.14 2.55 2.55-1.14 2.55-2.55 2.55Zm0-3.6a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1Z"
			:fill="color"
		></path>
		<path
			d="M7.88 14.551c-.06 0-.13-.01-.19-.02a.75.75 0 0 1-.54-.91 3.168 3.168 0 0 1 3.08-2.38h.01l2.06.01h.01c1.21 0 2.28-.76 2.68-1.9a.748.748 0 1 1 1.41.5 4.32 4.32 0 0 1-4.11 2.91l-2.06-.01h-.01c-.77 0-1.44.52-1.63 1.26-.07.32-.38.54-.71.54Z"
			:fill="color"
		></path>
		<path
			d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
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
		<g
			opacity=".4"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path
				d="M7.8 13.802v-4.2M7.95 18.002a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9ZM7.8 9.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM16.2 9.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM7.879 13.798a2.425 2.425 0 0 1 2.36-1.82l2.06.01c1.57.01 2.91-1 3.4-2.41"
			></path>
		</g>
		<path
			d="M9 2h6c5 0 7 2 7 7v6c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7Z"
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
