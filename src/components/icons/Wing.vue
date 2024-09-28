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
			d="M16.86 5h2.35c.18 0 .34.1.43.25l2.41 4.2c.09.15.09.34 0 .49l-4.64 8.3c-.19.34-.67.34-.87.01l-1.26-2.11a.497.497 0 010-.5l3.26-5.7c.09-.15.09-.34 0-.5l-2.13-3.7c-.17-.32.07-.74.45-.74zM9.86 5h2.35c.18 0 .34.1.43.25l2.41 4.2c.09.15.09.34 0 .49l-4.64 8.3c-.19.34-.67.34-.87.01l-1.26-2.11a.497.497 0 010-.5l3.26-5.7c.09-.15.09-.34 0-.5l-2.13-3.7c-.17-.32.07-.74.45-.74zM1.8 5h3.21c.18 0 .35.1.44.25l2.42 4.29c.09.15.09.34 0 .5l-1.12 1.92c-.19.33-.67.33-.86 0L1.8 5z"
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
			d="M16 5h3.5l2.7 4.7L17 19l-1.85-3.1 3.55-6.2L16 5ZM10.84 17.49 10 19l-1.85-3.1 3.55-6.2L9 5h3.5l2.7 4.7-2.27 4.07M1.8 5h3.5L8 9.8l-1.7 2.9L1.8 5Z"
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
			d="M16.86 5h2.35c.18 0 .34.1.43.25l2.41 4.2c.09.15.09.34 0 .49l-4.64 8.3c-.19.34-.67.34-.87.01l-1.26-2.11a.497.497 0 0 1 0-.5l3.26-5.7c.09-.15.09-.34 0-.5l-2.13-3.7c-.17-.32.07-.74.45-.74Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="M9.86 5h2.35c.18 0 .34.1.43.25l2.41 4.2c.09.15.09.34 0 .49l-4.64 8.3c-.19.34-.67.34-.87.01l-1.26-2.11a.497.497 0 0 1 0-.5l3.26-5.7c.09-.15.09-.34 0-.5l-2.13-3.7c-.17-.32.07-.74.45-.74Z"
			:fill="color"
		></path>
		<path
			d="M1.8 5h3.21c.18 0 .35.1.44.25l2.42 4.29c.09.15.09.34 0 .5l-1.12 1.92c-.19.33-.67.33-.86 0L1.8 5Z"
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
			d="M16 5h3.5l2.7 4.7L17 19l-1.9-3.1 3.6-6.2L16 5ZM9 5h3.5l2.7 4.7L10 19l-1.9-3.1 3.6-6.2L9 5ZM1.8 5h3.5L8 9.8l-1.7 2.9L1.8 5Z"
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
			d="M17 19.748a.74.74 0 0 1-.64-.37l-1.85-3.1a.764.764 0 0 1-.01-.76l3.34-5.83-2.49-4.33a.77.77 0 0 1 0-.75c.13-.23.38-.37.65-.37h3.5c.27 0 .52.14.65.38l2.7 4.7c.13.23.13.51 0 .74l-5.2 9.3c-.13.23-.38.38-.64.38 0 .01-.01.01-.01.01Zm-.98-3.86.96 1.61 4.36-7.8-2.27-3.96H17.3l2.05 3.58c.13.23.13.52 0 .75l-3.33 5.82Z"
			:fill="color"
		></path>
		<path
			d="M10 19.748a.74.74 0 0 1-.64-.37l-1.85-3.1a.764.764 0 0 1-.01-.76l3.34-5.83-2.49-4.33a.77.77 0 0 1 0-.75c.13-.23.38-.37.65-.37h3.5c.27 0 .52.14.65.38l2.7 4.7c.13.23.13.51 0 .74l-5.2 9.3c-.13.23-.38.38-.64.38 0 .01-.01.01-.01.01Zm-.98-3.86.96 1.61 4.36-7.8-2.27-3.96H10.3l2.05 3.58c.13.23.13.52 0 .75l-3.33 5.82Z"
			:fill="color"
		></path>
		<path
			d="M6.3 13.45c-.27 0-.51-.14-.65-.37l-4.5-7.7a.722.722 0 0 1 0-.75c.13-.23.38-.38.65-.38h3.5c.27 0 .52.15.65.38l2.7 4.8c.13.23.13.52-.01.75l-1.7 2.9c-.13.23-.37.37-.64.37Zm-3.19-7.7 3.19 5.47.83-1.42-2.27-4.04H3.11v-.01Z"
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
			d="M16 5h3.5l2.7 4.7L17 19l-1.85-3.1 3.55-6.2L16 5Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M9 5h3.5l2.7 4.7L10 19l-1.85-3.1 3.55-6.2L9 5Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M1.8 5h3.5L8 9.8l-1.7 2.9L1.8 5Z"
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
