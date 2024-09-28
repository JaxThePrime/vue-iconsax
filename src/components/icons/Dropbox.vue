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
			d="M12 6.001l-5.56 4-3.25-2.2a.995.995 0 01-.02-1.64L7 3.401c.34-.24.8-.25 1.14-.02L12 6.001zM20.81 7.799l-3.25 2.2-5.56-4 3.86-2.61c.35-.23.8-.23 1.14.02l3.83 2.76c.57.4.56 1.24-.02 1.63zM12 14l-4.44 3L5 15.16l-1.84-1.32c-.56-.41-.55-1.25.02-1.64L6.43 10 12 14z"
		></path>
		<path
			:fill="color"
			d="M20.81 12.2c.58.39.59 1.23.02 1.64l-1.84 1.32L16.43 17l-4.44-3 5.56-4 3.26 2.2z"
		></path>
		<path
			:fill="color"
			d="M18.68 17.338c.13-.1.32 0 .32.16v.73c0 .39-.23.74-.58.91l-6 2.77c-.27.12-.57.12-.84 0l-6-2.77c-.35-.17-.58-.52-.58-.91v-.73a.2.2 0 01.32-.16l1.93 1.39c.17.12.4.13.57.01l3.9-2.64c.17-.11.39-.11.56 0l3.9 2.64c.17.12.4.11.57-.01l1.93-1.39z"
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
			d="M12 5 7.56 2 2 6l4.44 3L12 5ZM12 5l4.44-3L22 6l-4.44 3L12 5ZM12 14l-4.44 3L2 13l4.44-3 2.08 1.5 1.62 1.16L12 14ZM12 14l4.44 3L22 13l-4.44-3L12 14ZM5 18.77V15.5"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M19 15.5v3.27l-6.58 3.04c-.27.12-.57.12-.84 0l-1.9-.88"
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
			opacity=".4"
			d="m12 6.001-5.56 4-3.25-2.2a.995.995 0 0 1-.02-1.64L7 3.401c.34-.24.8-.25 1.14-.02L12 6.001ZM20.81 7.799l-3.25 2.2-5.56-4 3.86-2.61c.35-.23.8-.23 1.14.02l3.83 2.76c.57.4.56 1.24-.02 1.63ZM12 14l-4.44 3L5 15.16l-1.84-1.32c-.56-.41-.55-1.25.02-1.64L6.43 10 12 14ZM20.81 12.2c.58.39.59 1.23.02 1.64L19 15.16 16.44 17 12 14l5.56-4 3.25 2.2Z"
			:fill="color"
		></path>
		<path
			d="M19 15.16v2.97c0 .39-.23.74-.58.91l-6 2.77c-.27.12-.57.12-.84 0l-6-2.77c-.35-.16-.58-.52-.58-.91v-2.97L7.56 17 12 14l4.44 3L19 15.16Z"
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
			d="M12 5 7.6 2 2 6l4.4 3L12 5ZM12 5l4.4-3L22 6l-4.4 3L12 5ZM12 14l-4.4 3L2 13l4.4-3 5.6 4ZM12 14l4.4 3 5.6-4-4.4-3-5.6 4Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M19 15.5v3.3l-6.6 3c-.3.1-.6.1-.8 0l-6.6-3v-3.3"
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
			d="M6.44 9.75c-.15 0-.29-.04-.42-.13l-4.44-3a.76.76 0 0 1-.33-.61c0-.25.11-.48.31-.62l5.56-4c.26-.18.6-.19.86-.01l4.44 3c.2.14.33.37.33.61 0 .25-.11.48-.31.62l-5.56 4c-.13.09-.28.14-.44.14ZM3.31 5.98l3.12 2.11 4.26-3.07-3.12-2.11-4.26 3.07Z"
			:fill="color"
		></path>
		<path
			d="M17.56 9.75c-.15 0-.31-.05-.44-.14l-5.56-4a.732.732 0 0 1-.31-.62c0-.25.13-.47.33-.61l4.44-3c.26-.17.6-.17.86.01l5.56 4c.2.14.32.38.31.62 0 .25-.13.47-.33.61l-4.44 3a.74.74 0 0 1-.42.13Zm-4.25-4.73 4.26 3.07 3.12-2.11-4.26-3.07-3.12 2.11ZM7.56 17.75c-.15 0-.31-.05-.44-.14l-5.56-4a.732.732 0 0 1-.31-.62c0-.25.13-.47.33-.61l4.44-3c.26-.17.6-.17.86.01l5.56 4c.2.14.32.38.31.62 0 .25-.13.47-.33.61l-4.44 3a.74.74 0 0 1-.42.13Zm-4.25-4.73 4.26 3.07 3.12-2.11-4.26-3.07-3.12 2.11Z"
			:fill="color"
		></path>
		<path
			d="M16.44 17.75c-.15 0-.29-.04-.42-.13l-4.44-3a.76.76 0 0 1-.33-.61c0-.25.11-.48.31-.62l5.56-4c.25-.18.6-.19.86-.01l4.44 3c.2.14.33.37.33.61 0 .25-.11.48-.31.62l-5.56 4c-.13.09-.28.14-.44.14Zm-3.13-3.77 3.12 2.11 4.26-3.07-3.12-2.11-4.26 3.07Z"
			:fill="color"
		></path>
		<path
			d="M12 22.65c-.25 0-.5-.05-.73-.16l-6.58-3.04a.745.745 0 0 1-.44-.68V15.5c0-.41.34-.75.75-.75s.75.34.75.75v2.79l6.15 2.84c.07.03.14.03.21 0l6.15-2.84V15.5c0-.41.34-.75.75-.75s.75.34.75.75v3.27c0 .29-.17.56-.44.68l-6.58 3.04c-.24.11-.49.16-.74.16Z"
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
			d="M12 5 7.56 2 2 6l4.44 3L12 5ZM12 5l4.44-3L22 6l-4.44 3L12 5ZM12 14l-4.44 3L2 13l4.44-3L12 14ZM12 14l4.44 3L22 13l-4.44-3L12 14Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M19 15.5v3.27l-6.58 3.04c-.27.12-.57.12-.84 0L5 18.77V15.5"
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
