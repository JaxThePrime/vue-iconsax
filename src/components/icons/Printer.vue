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
			d="M7 5c0-1.66 1.34-3 3-3h4c1.66 0 3 1.34 3 3 0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1ZM17.75 15c0 .41-.34.75-.75.75h-1V19c0 1.66-1.34 3-3 3h-2c-1.66 0-3-1.34-3-3v-3.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75Z"
			:fill="color"
		></path>
		<path
			d="M18 7H6c-2 0-3 1-3 3v5c0 2 1 3 3 3h.375c.345 0 .625-.28.625-.625s-.289-.615-.612-.737A1.76 1.76 0 0 1 5.25 15c0-.96.79-1.75 1.75-1.75h10c.96 0 1.75.79 1.75 1.75a1.76 1.76 0 0 1-1.138 1.638c-.323.122-.612.392-.612.737s.28.625.625.625H18c2 0 3-1 3-3v-5c0-2-1-3-3-3Zm-8 4.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
			d="M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3v2ZM16 15v4c0 2-1 3-3 3h-2c-2 0-3-1-3-3v-4h8Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M21 10v5c0 2-1 3-3 3h-2v-3H8v3H6c-2 0-3-1-3-3v-5c0-2 1-3 3-3h12c2 0 3 1 3 3ZM17 15H7M7 11h3"
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
			d="M16 15v4c0 1.66-1.34 3-3 3h-2c-1.66 0-3-1.34-3-3v-4h8ZM7 7V5c0-1.66 1.34-3 3-3h4c1.66 0 3 1.34 3 3v2H7Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="M18 7H6c-2 0-3 1-3 3v5c0 2 1 3 3 3h2v-3h8v3h2c2 0 3-1 3-3v-5c0-2-1-3-3-3Zm-8 4.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z"
			:fill="color"
		></path>
		<path
			d="M10.75 11c0 .41-.34.75-.75.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75ZM17 15.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
			d="M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3v2ZM16 15v4c0 2-1 3-3 3h-2c-2 0-3-1-3-3v-4h8Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M21 10v5c0 2-1 3-3 3h-2v-3H8v3H6c-2 0-3-1-3-3v-5c0-2 1-3 3-3h12c2 0 3 1 3 3ZM17 15H7M7 11h3"
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
			d="M16.75 7.75h-9.5c-.41 0-.75-.34-.75-.75V5c0-2.56 1.19-3.75 3.75-3.75h3.5c2.56 0 3.75 1.19 3.75 3.75v2c0 .41-.34.75-.75.75ZM8 6.25h8V5c0-1.7-.55-2.25-2.25-2.25h-3.5C8.55 2.75 8 3.3 8 5v1.25ZM13 22.75h-2c-2.42 0-3.75-1.33-3.75-3.75v-4c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v4c0 2.42-1.33 3.75-3.75 3.75Zm-4.25-7V19c0 1.58.67 2.25 2.25 2.25h2c1.58 0 2.25-.67 2.25-2.25v-3.25h-6.5Z"
			:fill="color"
		></path>
		<path
			d="M18 18.75h-2c-.41 0-.75-.34-.75-.75v-2.25h-6.5V18c0 .41-.34.75-.75.75H6c-2.42 0-3.75-1.33-3.75-3.75v-5c0-2.42 1.33-3.75 3.75-3.75h12c2.42 0 3.75 1.33 3.75 3.75v5c0 2.42-1.33 3.75-3.75 3.75Zm-1.25-1.5H18c1.58 0 2.25-.67 2.25-2.25v-5c0-1.58-.67-2.25-2.25-2.25H6c-1.58 0-2.25.67-2.25 2.25v5c0 1.58.67 2.25 2.25 2.25h1.25V15c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v2.25Z"
			:fill="color"
		></path>
		<path
			d="M17 15.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75ZM10 11.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
			d="M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3v2Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M16 15v4c0 2-1 3-3 3h-2c-2 0-3-1-3-3v-4h8Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M21 10v5c0 2-1 3-3 3h-2v-3H8v3H6c-2 0-3-1-3-3v-5c0-2 1-3 3-3h12c2 0 3 1 3 3ZM17 15H7"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M7 11h3"
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
