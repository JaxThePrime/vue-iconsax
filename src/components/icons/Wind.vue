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
			d="M18.5 22.75a4.26 4.26 0 0 1-4.25-4.25V18c0-.41.34-.75.75-.75s.75.34.75.75v.5c0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.5a4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25ZM18.5 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.5c1.52 0 2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75-2.75 1.23-2.75 2.75V9c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.5a4.26 4.26 0 0 1 4.25-4.25 4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25Z"
			:fill="color"
		></path>
		<path
			d="M9.31 9.751H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.31c1.07 0 1.94-.87 1.94-1.94 0-1.07-.87-1.94-1.94-1.94-1.07 0-1.94.87-1.94 1.94v.38a.749.749 0 1 1-1.5 0v-.38a3.44 3.44 0 1 1 3.44 3.44Z"
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
			d="M2 15h16.5c1.93 0 3.5 1.57 3.5 3.5S20.43 22 18.5 22 15 20.43 15 18.5V18M9.05 12h9.45c1.92 0 3.5-1.57 3.5-3.5C22 6.58 20.42 5 18.5 5A3.51 3.51 0 0 0 15 8.5V9M2 12h2.98M2 9.001h7.31a2.69 2.69 0 1 0-2.69-2.69v.38"
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
			d="M18.5 22.75a4.26 4.26 0 0 1-4.25-4.25V18c0-.41.34-.75.75-.75s.75.34.75.75v.5c0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.5a4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="M18.5 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.5c1.52 0 2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75-2.75 1.23-2.75 2.75V9c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.5a4.26 4.26 0 0 1 4.25-4.25 4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25Z"
			:fill="color"
		></path>
		<path
			d="M9.31 9.751H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.31c1.07 0 1.94-.87 1.94-1.94 0-1.07-.87-1.94-1.94-1.94-1.07 0-1.94.87-1.94 1.94v.38a.749.749 0 1 1-1.5 0v-.38a3.44 3.44 0 1 1 3.44 3.44Z"
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
			d="M2 15h16.5c1.93 0 3.5 1.57 3.5 3.5S20.43 22 18.5 22 15 20.43 15 18.5V18M2 12h16.5c1.92 0 3.5-1.57 3.5-3.5C22 6.58 20.42 5 18.5 5A3.51 3.51 0 0 0 15 8.5V9"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M2 9h7.31a2.69 2.69 0 1 0-2.69-2.69v.38"
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
			d="M18.5 22.75a4.26 4.26 0 0 1-4.25-4.25V18c0-.41.34-.75.75-.75s.75.34.75.75v.5c0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.5a4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25ZM18.5 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.5c1.52 0 2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75-2.75 1.23-2.75 2.75V9c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.5a4.26 4.26 0 0 1 4.25-4.25 4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25Z"
			:fill="color"
		></path>
		<path
			d="M9.31 9.751H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.31c1.07 0 1.94-.87 1.94-1.94 0-1.07-.87-1.94-1.94-1.94-1.07 0-1.94.87-1.94 1.94v.38c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.38a3.44 3.44 0 1 1 3.44 3.44Z"
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
			d="M2 15h16.5c1.93 0 3.5 1.57 3.5 3.5S20.43 22 18.5 22 15 20.43 15 18.5V18"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M2 12h16.5c1.92 0 3.5-1.57 3.5-3.5C22 6.58 20.42 5 18.5 5A3.51 3.51 0 0 0 15 8.5V9"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M2 9.001h7.31a2.69 2.69 0 1 0-2.69-2.69v.38"
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
