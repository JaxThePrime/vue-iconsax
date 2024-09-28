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
			d="M12.7 16.88h.7c1.15 0 2.09-.94 2.09-2.09v-.7H12.7v2.79ZM8.51 14.79c0 1.15.94 2.09 2.09 2.09h.7v-2.79H8.51v.7ZM8.51 12v.7h2.79V9.91h-.7c-1.15 0-2.09.94-2.09 2.09Z"
			:fill="color"
		></path>
		<path
			d="m20.03 6.822-5.75-4.03c-1.57-1.1-3.97-1.04-5.48.13l-5.01 3.91C2.78 7.612 2 9.212 2 10.472v6.9c0 2.55 2.07 4.63 4.61 4.63h10.77a4.62 4.62 0 0 0 4.61-4.62v-6.78c.01-1.35-.86-3.01-1.96-3.78Zm-3.15 7.97a3.5 3.5 0 0 1-3.49 3.49H10.6c-1.92 0-3.49-1.56-3.49-3.49v-2.79a3.5 3.5 0 0 1 3.49-3.49h2.79c1.92 0 3.49 1.56 3.49 3.49v2.79Z"
			:fill="color"
		></path>
		<path
			d="M13.4 9.91h-.7v2.79h2.79V12c0-1.15-.94-2.09-2.09-2.09Z"
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
			d="M13.5 9h-3c-1.65 0-3 1.35-3 3v3c0 1.65 1.35 3 3 3h3c1.65 0 3-1.35 3-3v-3M12 9v9M7.5 13.5h9"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M22 10.498c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12l-5.39 4.2c-.9.7-1.63 2.19-1.63 3.32v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21v-3.1"
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
			d="m20.03 6.822-5.75-4.03c-1.57-1.1-3.97-1.04-5.48.13l-5.01 3.91C2.78 7.612 2 9.212 2 10.472v6.9c0 2.55 2.07 4.63 4.61 4.63h10.77a4.62 4.62 0 0 0 4.61-4.62v-6.78c.01-1.35-.86-3.01-1.96-3.78Z"
			:fill="color"
		></path>
		<path
			d="M13.4 8.512h-2.8c-1.92 0-3.49 1.56-3.49 3.49v2.79a3.5 3.5 0 0 0 3.49 3.49h2.79c1.92 0 3.49-1.56 3.49-3.49v-2.79c0-1.92-1.56-3.49-3.48-3.49Zm2.09 3.49v.7H12.7v-2.79h.7c1.15 0 2.09.94 2.09 2.09Zm-4.89-2.09h.7v2.79H8.51v-.7c0-1.15.94-2.09 2.09-2.09Zm-2.09 4.88v-.7h2.79v2.79h-.7c-1.15 0-2.09-.94-2.09-2.09Zm4.89 2.09h-.7v-2.79h2.79v.7c0 1.15-.94 2.09-2.09 2.09Z"
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
			d="m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M10.5 18h3c1.65 0 3-1.35 3-3v-3c0-1.65-1.35-3-3-3h-3c-1.65 0-3 1.35-3 3v3c0 1.65 1.35 3 3 3ZM12 9v9M7.5 13.5h9"
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
			d="M17.79 22.738H6.21c-2.74 0-4.96-2.23-4.96-4.97v-7.41c0-1.36.84-3.07 1.92-3.91l5.39-4.2c1.62-1.26 4.21-1.32 5.89-.14l6.18 4.33c1.19.83 2.12 2.61 2.12 4.06v7.28c0 2.73-2.22 4.96-4.96 4.96ZM9.48 3.428l-5.39 4.2c-.71.56-1.34 1.83-1.34 2.73v7.41a3.47 3.47 0 0 0 3.46 3.47h11.58c1.91 0 3.46-1.55 3.46-3.46v-7.28c0-.96-.69-2.29-1.48-2.83l-6.18-4.33c-1.14-.8-3.02-.76-4.11.09Z"
			:fill="color"
		></path>
		<path
			d="M13.5 18.75h-3c-2.07 0-3.75-1.68-3.75-3.75v-3c0-2.07 1.68-3.75 3.75-3.75h3c2.07 0 3.75 1.68 3.75 3.75v3c0 2.07-1.68 3.75-3.75 3.75Zm-3-9c-1.24 0-2.25 1.01-2.25 2.25v3c0 1.24 1.01 2.25 2.25 2.25h3c1.24 0 2.25-1.01 2.25-2.25v-3c0-1.24-1.01-2.25-2.25-2.25h-3Z"
			:fill="color"
		></path>
		<path
			d="M12 18.75c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v9c0 .41-.34.75-.75.75Z"
			:fill="color"
		></path>
		<path
			d="M16.5 14.25h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
			d="m9.02 2.838-5.39 4.2c-.9.7-1.63 2.19-1.63 3.32v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21v-7.28c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12Z"
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
			<path
				d="M10.5 18h3c1.65 0 3-1.35 3-3v-3c0-1.65-1.35-3-3-3h-3c-1.65 0-3 1.35-3 3v3c0 1.65 1.35 3 3 3ZM12 9v9M7.5 13.5h9"
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
