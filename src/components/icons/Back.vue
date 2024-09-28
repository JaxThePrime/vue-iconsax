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
			:fill="color"
			d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm-2.27 14.63H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.92c1.28 0 2.33-1.04 2.33-2.33s-1.04-2.33-2.33-2.33H8.85l.26.26c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.57-1.57a.754.754 0 010-1.06l1.57-1.57c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.34.33h5.15c2.11 0 3.83 1.72 3.83 3.83 0 2.11-1.72 3.82-3.83 3.82z"
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
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-miterlimit="10"
			:stroke-width="strokeWidth"
			d="M10.98 8.31H4.13M7.13 18.31h8c2.76 0 5-2.24 5-5s-2.24-5-5-5"
		></path>
		<path
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M6.43 10.81L3.87 8.25l2.56-2.56"
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
			:fill="color"
			d="M7.81 2h8.37C19.83 2 22 4.17 22 7.81v8.37c0 3.64-2.17 5.81-5.81 5.81H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2z"
			opacity=".4"
		></path>
		<path
			:fill="color"
			d="M13.92 8.98H8.77l.33-.33c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0L6.47 9.16c-.29.29-.29.77 0 1.06l1.57 1.57c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-.26-.26h5.08c1.28 0 2.33 1.04 2.33 2.33s-1.04 2.33-2.33 2.33H9c-.41 0-.75.34-.75.75s.34.75.75.75h4.92c2.11 0 3.83-1.72 3.83-3.83 0-2.11-1.72-3.82-3.83-3.82z"
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
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-miterlimit="10"
			:stroke-width="strokeWidth"
			d="M7.13 18.31h8c2.76 0 5-2.24 5-5s-2.24-5-5-5h-11"
		></path>
		<path
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M6.43 10.81L3.87 8.25l2.56-2.56"
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
			:fill="color"
			d="M15.13 19.06h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8a4.26 4.26 0 004.25-4.25 4.26 4.26 0 00-4.25-4.25h-11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11c3.17 0 5.75 2.58 5.75 5.75s-2.58 5.75-5.75 5.75z"
		></path>
		<path
			:fill="color"
			d="M6.43 11.56c-.19 0-.38-.07-.53-.22L3.34 8.78a.754.754 0 010-1.06L5.9 5.16c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L4.93 8.25l2.03 2.03c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22z"
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
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-miterlimit="10"
			:stroke-width="strokeWidth"
			d="M7.13 18.31h8c2.76 0 5-2.24 5-5s-2.24-5-5-5h-11"
			opacity=".4"
		></path>
		<path
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M6.43 10.81L3.87 8.25l2.56-2.56"
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
