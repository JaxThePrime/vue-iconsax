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
			d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm-5.26 15.15c0 .1-.02.19-.06.29-.08.18-.22.33-.41.41a.717.717 0 01-.58 0 .776.776 0 01-.24-.16L6.6 14.65a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1.76 1.76v-8.5c0-.41.34-.75.75-.75s.75.34.75.75v10.3h.01zm6.46-6.73c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.76-1.76v8.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.85c0-.1.02-.19.06-.29.08-.18.22-.33.41-.41.18-.08.39-.08.57 0 .09.04.17.09.24.16l3.04 3.04c.29.3.29.77 0 1.07z"
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
			d="M10.18 17.15l-3.04-3.04M10.18 6.85v10.3M13.82 6.85l3.04 3.04M13.82 17.15V6.85"
		></path>
		<path
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M2 14v1c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
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
			d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z"
			opacity=".4"
		></path>
		<path
			:fill="color"
			d="M10.18 6.1c-.41 0-.75.34-.75.75v8.5l-1.76-1.76a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l3.04 3.04a.776.776 0 00.53.22c.1 0 .19-.02.29-.06.18-.08.33-.22.41-.41.04-.09.06-.19.06-.29V6.85a.758.758 0 00-.76-.75zM17.39 9.36l-3.04-3.04a.776.776 0 00-.24-.16.707.707 0 00-.57 0c-.18.08-.33.22-.41.41-.04.09-.06.19-.06.29v10.31c0 .41.34.75.75.75s.75-.34.75-.75v-8.5l1.76 1.76c.15.15.34.22.53.22s.38-.07.53-.22c.29-.31.29-.78 0-1.07z"
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
			:stroke-width="strokeWidth"
			d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
		></path>
		<path
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-miterlimit="10"
			:stroke-width="strokeWidth"
			d="M10.18 17.15l-3.04-3.04M10.18 6.85v10.3"
		></path>
		<g>
			<path
				:stroke="color"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-miterlimit="10"
				:stroke-width="strokeWidth"
				d="M13.82 6.85l3.04 3.04M13.82 17.15V6.85"
			></path>
		</g>
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
			d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"
		></path>
		<path
			:fill="color"
			d="M10.18 17.9c-.19 0-.38-.07-.53-.22l-3.04-3.04a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.04 3.04c.29.29.29.77 0 1.06a.71.71 0 01-.53.22z"
		></path>
		<path
			:fill="color"
			d="M10.18 17.9c-.41 0-.75-.34-.75-.75V6.85c0-.41.34-.75.75-.75s.75.34.75.75v10.31c0 .41-.33.74-.75.74zM16.86 10.64c-.19 0-.38-.07-.53-.22l-3.04-3.04a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.04 3.04c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22z"
		></path>
		<path
			:fill="color"
			d="M13.82 17.9c-.41 0-.75-.34-.75-.75V6.85c0-.41.34-.75.75-.75s.75.34.75.75v10.31c0 .41-.34.74-.75.74z"
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
			:stroke-width="strokeWidth"
			d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
		></path>
		<g opacity=".4">
			<path
				:stroke="color"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-miterlimit="10"
				:stroke-width="strokeWidth"
				d="M10.18 17.15l-3.04-3.04M10.18 6.85v10.3M13.82 6.85l3.04 3.04M13.82 17.15V6.85"
			></path>
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
