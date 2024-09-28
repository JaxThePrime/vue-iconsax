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
			d="M19.48 7.09a.747.747 0 1 0-1.16.94c1.13 1.4 1.76 3.06 1.82 4.8.16 4.48-3.36 8.26-7.85 8.41-4.49.16-8.26-3.36-8.42-7.84-.16-4.48 3.36-8.26 7.85-8.41.57-.02 1.17.03 1.82.16.04.01.08 0 .12 0 .1.05.22.08.33.08a.7.7 0 0 0 .47-.17c.32-.26.37-.73.12-1.05L12.6 1.54a.748.748 0 0 0-1.05-.12c-.32.26-.37.73-.12 1.05l.83 1.03c-.19-.01-.39-.02-.58-.01-5.31.18-9.48 4.66-9.29 9.97.19 5.31 4.66 9.48 9.97 9.29 5.31-.19 9.48-4.66 9.29-9.97a9.629 9.629 0 0 0-2.17-5.69Z"
			:fill="color"
		></path>
		<path
			d="M12.38 16.92h-2.29c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.29a.781.781 0 0 0 0-1.56h-2.29c-.24 0-.47-.12-.61-.31a.746.746 0 0 1-.1-.68l.76-2.29c.1-.31.39-.51.71-.51h3.06c.41 0 .75.34.75.75s-.34.75-.75.75h-2.52l-.26.79h1.25a2.279 2.279 0 1 1 0 4.56Z"
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
			d="M13.98 4.47 12 2M20.01 16.959a8.89 8.89 0 0 1-16.9-3.85A8.89 8.89 0 0 1 12 4.219c.68 0 1.34.09 1.98.24M19.09 7.8c1.11 1.48 1.8 3.31 1.8 5.31"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M13.91 10.828h-3.06l-.76 2.29h2.29a1.53 1.53 0 1 1 0 3.06h-2.29"
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
			d="M19.48 7.089a.747.747 0 1 0-1.16.94c1.13 1.4 1.76 3.06 1.82 4.8.16 4.48-3.36 8.26-7.85 8.41-4.48.16-8.26-3.36-8.41-7.85-.15-4.49 3.36-8.26 7.85-8.41.57-.02 1.17.03 1.82.16.04.01.08 0 .12 0 .1.05.22.08.33.08a.7.7 0 0 0 .47-.17c.32-.26.37-.73.12-1.05l-1.98-2.47a.748.748 0 0 0-1.05-.12c-.32.26-.37.73-.12 1.05l.83 1.03c-.19-.01-.39-.02-.58-.01-5.31.18-9.48 4.66-9.29 9.97.19 5.31 4.66 9.48 9.97 9.29 5.31-.19 9.48-4.66 9.29-9.97-.1-2.06-.84-4.03-2.18-5.68Z"
			:fill="color"
		></path>
		<path
			d="M12.38 16.92h-2.29c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.29a.781.781 0 0 0 0-1.56h-2.29c-.24 0-.47-.12-.61-.31a.746.746 0 0 1-.1-.68l.76-2.29c.1-.31.39-.51.71-.51h3.06c.41 0 .75.34.75.75s-.34.75-.75.75h-2.52l-.26.79h1.25a2.279 2.279 0 1 1 0 4.56Z"
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
			d="M13.98 4.47 12 2M19.09 7.8c1.11 1.48 1.8 3.31 1.8 5.31A8.89 8.89 0 0 1 12 22a8.89 8.89 0 0 1-8.89-8.89A8.89 8.89 0 0 1 12 4.22c.68 0 1.34.09 1.98.24"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M13.91 10.83h-3.06l-.76 2.29h2.29a1.53 1.53 0 0 1 0 3.06h-2.29"
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
			d="M13.98 5.22c-.22 0-.44-.1-.58-.28l-1.98-2.47c-.26-.32-.21-.8.12-1.05.33-.25.79-.21 1.05.12l1.98 2.47c.26.32.21.8-.12 1.05-.14.1-.31.16-.47.16Z"
			:fill="color"
		></path>
		<path
			d="M12 22.749c-5.31 0-9.64-4.32-9.64-9.64s4.32-9.64 9.64-9.64c.69 0 1.39.08 2.15.26.4.09.66.5.56.9-.09.4-.49.66-.9.56-.64-.15-1.24-.22-1.81-.22-4.49 0-8.14 3.65-8.14 8.14s3.65 8.14 8.14 8.14 8.14-3.65 8.14-8.14c0-1.74-.57-3.42-1.65-4.86a.75.75 0 0 1 1.2-.9c1.28 1.7 1.95 3.69 1.95 5.76 0 5.32-4.33 9.64-9.64 9.64Z"
			:fill="color"
		></path>
		<path
			d="M12.38 16.92h-2.29c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.29a.781.781 0 0 0 0-1.56h-2.29c-.24 0-.47-.12-.61-.31a.746.746 0 0 1-.1-.68l.76-2.29c.1-.31.39-.51.71-.51h3.06c.41 0 .75.34.75.75s-.34.75-.75.75h-2.52l-.26.79h1.25a2.279 2.279 0 1 1 0 4.56Z"
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
			d="M13.98 4.47 12 2M19.09 7.799c1.11 1.48 1.8 3.31 1.8 5.31a8.89 8.89 0 0 1-8.89 8.89 8.89 8.89 0 0 1-8.89-8.89A8.89 8.89 0 0 1 12 4.219c.68 0 1.34.09 1.98.24"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M13.91 10.828h-3.06l-.76 2.29h2.29a1.53 1.53 0 1 1 0 3.06h-2.29"
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
