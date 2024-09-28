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
			d="M19 9c0-3.87-3.13-7-7-7S5 5.13 5 9c0 3.62 2.74 6.59 6.25 6.96v2.29H9c-.41 0-.75.34-.75.75s.34.75.75.75h2.25V22c0 .41.34.75.75.75s.75-.34.75-.75v-2.25H15c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.25v-2.29A6.995 6.995 0 0 0 19 9Z"
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
			d="M5 9c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7c-1.93 0-3.68.78-4.95 2.05M12 16v6M15 19H9"
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
			d="M19 9a6.995 6.995 0 0 1-7.75 6.96A6.995 6.995 0 0 1 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7Z"
			:fill="color"
		></path>
		<path
			d="M15.75 19c0 .41-.34.75-.75.75h-2.25V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.25H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25v-2.29c.25.03.5.04.75.04s.5-.01.75-.04v2.29H15c.41 0 .75.34.75.75Z"
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
			d="M12 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM12 16v6M15 19H9"
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
			d="M12 16.75c-4.27 0-7.75-3.48-7.75-7.75S7.73 1.25 12 1.25 19.75 4.73 19.75 9s-3.48 7.75-7.75 7.75Zm0-14c-3.45 0-6.25 2.8-6.25 6.25s2.8 6.25 6.25 6.25 6.25-2.8 6.25-6.25-2.8-6.25-6.25-6.25Z"
			:fill="color"
		></path>
		<path
			d="M12 22.75c-.41 0-.75-.34-.75-.75v-6c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .41-.34.75-.75.75Z"
			:fill="color"
		></path>
		<path
			d="M15 19.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
			d="M12 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
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
			<path d="M12 16v6M15 19H9"></path>
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
