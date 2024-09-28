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
			d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM12 6c1.99 0 3.6 1.61 3.6 3.6 0 .47-.09.92-.25 1.33A3.61 3.61 0 0 1 12 13.21c-.33 0-.65-.04-.95-.13A3.587 3.587 0 0 1 8.4 9.6C8.4 7.61 10.01 6 12 6ZM9.6 18a3.598 3.598 0 0 1-2.256-6.404c.237-.191.575-.07.723.195a4.47 4.47 0 0 0 2.743 2.139c.38.11.77.16 1.19.16.249 0 .487-.018.718-.055.237-.038.482.115.482.355 0 1.06-.46 2.02-1.2 2.68-.64.58-1.48.93-2.4.93Zm4.8 0c-.348 0-.69-.049-1.012-.142-.327-.095-.386-.502-.182-.774A4.47 4.47 0 0 0 14.1 14.4c0-.2-.02-.41-.05-.6a.274.274 0 0 1 .14-.28 4.464 4.464 0 0 0 1.734-1.726c.148-.267.487-.39.725-.199A3.592 3.592 0 0 1 18 14.4c0 1.99-1.61 3.6-3.6 3.6Z"
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
			d="M13.2 14.4c0 1.06-.46 2.02-1.2 2.68-.64.58-1.48.92-2.4.92a3.598 3.598 0 0 1-.95-7.07A3.61 3.61 0 0 0 12 13.21c.33 0 .65-.04.95-.13.16.4.25.85.25 1.32Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M15.6 9.6c0 .47-.09.92-.25 1.33A3.61 3.61 0 0 1 12 13.21c-.33 0-.65-.04-.95-.13A3.587 3.587 0 0 1 8.4 9.6C8.4 7.61 10.01 6 12 6s3.6 1.61 3.6 3.6Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M18 14.402a3.598 3.598 0 0 1-6 2.68 3.55 3.55 0 0 0 1.2-2.68c0-.47-.09-.92-.25-1.33 1.1-.3 1.99-1.1 2.4-2.15a3.62 3.62 0 0 1 2.65 3.48Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M2 13.2V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
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
			d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
			:fill="color"
		></path>
		<path
			opacity=".6"
			d="M13.2 14.4c0 1.06-.46 2.02-1.2 2.68-.64.58-1.48.92-2.4.92a3.598 3.598 0 0 1-.95-7.07A3.61 3.61 0 0 0 12 13.21c.33 0 .65-.04.95-.13.16.4.25.85.25 1.32Z"
			:fill="color"
		></path>
		<path
			d="M15.6 9.6c0 .47-.09.92-.25 1.33A3.61 3.61 0 0 1 12 13.21c-.33 0-.65-.04-.95-.13A3.587 3.587 0 0 1 8.4 9.6C8.4 7.61 10.01 6 12 6s3.6 1.61 3.6 3.6Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="M18 14.402a3.598 3.598 0 0 1-6 2.68 3.55 3.55 0 0 0 1.2-2.68c0-.47-.09-.92-.25-1.33 1.1-.3 1.99-1.1 2.4-2.15a3.62 3.62 0 0 1 2.65 3.48Z"
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
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M13.2 14.4c0 1.06-.46 2.02-1.2 2.68-.64.58-1.48.92-2.4.92a3.598 3.598 0 01-.95-7.07A3.61 3.61 0 0012 13.21c.33 0 .65-.04.95-.13.16.4.25.85.25 1.32z"
		></path>
		<path
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M15.6 9.6c0 .47-.09.92-.25 1.33A3.61 3.61 0 0112 13.21c-.33 0-.65-.04-.95-.13A3.587 3.587 0 018.4 9.6C8.4 7.61 10.01 6 12 6s3.6 1.61 3.6 3.6z"
		></path>
		<path
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M18 14.4a3.598 3.598 0 01-6 2.68 3.55 3.55 0 001.2-2.68c0-.47-.09-.92-.25-1.33 1.1-.3 1.99-1.1 2.4-2.15A3.62 3.62 0 0118 14.4z"
		></path>
		<path
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
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
			d="M9.6 18.748c-2.4 0-4.35-1.95-4.35-4.35 0-1.96 1.32-3.69 3.21-4.2.37-.1.75.09.89.45.33.83 1.04 1.47 1.9 1.7.47.13 1.03.13 1.5 0 .37-.1.76.09.9.44a4.37 4.37 0 0 1-1.15 4.84c-.79.72-1.82 1.12-2.9 1.12Zm-1.31-6.88a2.85 2.85 0 0 0-1.54 2.53c0 1.57 1.28 2.85 2.85 2.85.7 0 1.38-.26 1.9-.73a2.822 2.822 0 0 0 .91-2.59c-.53.05-1.07 0-1.56-.14a4.356 4.356 0 0 1-2.56-1.92Z"
			:fill="color"
		></path>
		<path
			d="M12 13.952c-.4 0-.79-.05-1.15-.15a4.373 4.373 0 0 1-2.89-2.59c-.2-.51-.3-1.05-.3-1.6 0-2.4 1.95-4.35 4.35-4.35 2.4 0 4.35 1.95 4.35 4.35 0 .55-.1 1.09-.3 1.6a4.341 4.341 0 0 1-4.06 2.74Zm0-7.2a2.855 2.855 0 0 0-2.65 3.9c.33.83 1.04 1.47 1.9 1.7.47.13 1.03.13 1.5 0 .87-.24 1.58-.87 1.9-1.7a2.855 2.855 0 0 0-2.65-3.9Z"
			:fill="color"
		></path>
		<path
			d="M14.4 18.752c-1.08 0-2.11-.4-2.9-1.12a.75.75 0 0 1 0-1.12 2.82 2.82 0 0 0 .75-3.16.762.762 0 0 1 .5-1 2.88 2.88 0 0 0 1.9-1.7.75.75 0 0 1 .89-.45c1.89.51 3.21 2.24 3.21 4.2 0 2.4-1.95 4.35-4.35 4.35Zm-1.28-1.8a2.855 2.855 0 0 0 4.13-2.55c0-1.08-.61-2.05-1.54-2.53-.44.72-1.09 1.3-1.85 1.66a4.318 4.318 0 0 1-.74 3.42Z"
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
				d="M13.2 14.4c0 1.06-.46 2.02-1.2 2.68-.64.58-1.48.92-2.4.92a3.598 3.598 0 0 1-.95-7.07A3.61 3.61 0 0 0 12 13.21c.33 0 .65-.04.95-.13.16.4.25.85.25 1.32Z"
			></path>
			<path
				d="M15.6 9.6c0 .47-.09.92-.25 1.33A3.61 3.61 0 0 1 12 13.21c-.33 0-.65-.04-.95-.13A3.587 3.587 0 0 1 8.4 9.6C8.4 7.61 10.01 6 12 6s3.6 1.61 3.6 3.6Z"
			></path>
			<path
				d="M18 14.402a3.598 3.598 0 0 1-6 2.68 3.55 3.55 0 0 0 1.2-2.68c0-.47-.09-.92-.25-1.33 1.1-.3 1.99-1.1 2.4-2.15a3.62 3.62 0 0 1 2.65 3.48Z"
			></path>
		</g>
		<path
			d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
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
