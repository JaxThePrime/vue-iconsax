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
			d="M12.031 2.031c-1.95 0-3.77.56-5.3 1.52l6.86 6.87.01-2.74a.749.749 0 111.5 0l-.01 4.55c0 .31-.19.58-.47.69-.09.04-.19.06-.28.06a.75.75 0 01-.53-.22l-8.19-8.2a1.06 1.06 0 01-.1-.12 9.984 9.984 0 00-3.49 7.59c0 5.52 4.48 10 10 10 1.95 0 3.77-.56 5.3-1.52l-6.86-6.87-.01 2.74a.749.749 0 11-1.5 0l.01-4.55c0-.31.19-.58.47-.69.27-.12.6-.06.81.16l8.19 8.2c.04.04.07.08.1.12a9.984 9.984 0 003.49-7.59c0-5.52-4.48-10-10-10z"
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
			:stroke-width="strokeWidth"
			d="M6.12 4l8.19 8.2.01-4.55M17.88 20l-8.19-8.2-.01 4.55"
		></path>
		<path
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M20 6c1.25 1.67 2 3.75 2 6 0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2c1.43 0 2.8.3 4.03.85"
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
			d="M22.03 12.03a9.984 9.984 0 01-4.7 8.48 9.948 9.948 0 01-5.3 1.52c-5.52 0-10-4.48-10-10a9.984 9.984 0 014.7-8.48 9.948 9.948 0 015.3-1.52c5.52 0 10 4.48 10 10z"
			opacity=".4"
		></path>
		<path
			:fill="color"
			d="M15.1 7.68l-.01 4.55c0 .31-.19.58-.47.69-.09.04-.19.06-.28.06a.75.75 0 01-.53-.22l-8.19-8.2a1.06 1.06 0 01-.1-.12c.38-.32.78-.62 1.21-.89l6.86 6.87.01-2.74a.749.749 0 111.5 0zM18.54 19.62c-.38.32-.78.62-1.21.89l-6.86-6.87-.01 2.74a.749.749 0 11-1.5 0l.01-4.55c0-.31.19-.58.47-.69.27-.12.6-.06.81.16l8.19 8.2c.04.04.07.08.1.12z"
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
			d="M12.005 21.984c5.511 0 9.98-4.468 9.98-9.979 0-5.511-4.468-9.98-9.98-9.98-5.511 0-9.98 4.469-9.98 9.98s4.469 9.98 9.98 9.98z"
		></path>
		<path
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M6.137 4.022l8.163 8.183.02-4.54M17.863 19.978L9.7 11.805l-.02 4.531"
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
			d="M12.005 22.733c-5.918 0-10.728-4.81-10.728-10.728S6.087 1.277 12.005 1.277s10.728 4.81 10.728 10.728-4.82 10.728-10.728 10.728zm0-19.959c-5.09 0-9.23 4.142-9.23 9.231 0 5.09 4.14 9.23 9.23 9.23 5.09 0 9.23-4.14 9.23-9.23 0-5.09-4.14-9.23-9.23-9.23z"
		></path>
		<path
			:fill="color"
			d="M14.3 12.953c-.2 0-.39-.08-.53-.22L5.609 4.552a.753.753 0 010-1.058.753.753 0 011.057 0l6.896 6.906.01-2.735c0-.409.34-.748.748-.748.41-.03.749.34.749.748l-.01 4.54c0 .3-.18.58-.46.69-.099.04-.199.06-.298.06zM17.863 20.727a.74.74 0 01-.529-.22l-6.896-6.906-.01 2.735c0 .409-.339.748-.748.748a.754.754 0 01-.748-.748l.01-4.54c0-.3.18-.58.459-.69.28-.119.598-.05.818.16l8.163 8.183c.29.29.29.769 0 1.058-.13.15-.33.22-.519.22z"
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
			d="M12.005 21.984c5.511 0 9.979-4.468 9.979-9.979 0-5.511-4.468-9.98-9.98-9.98-5.51 0-9.979 4.469-9.979 9.98s4.468 9.98 9.98 9.98z"
		></path>
		<path
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M6.137 4.021l8.163 8.183.02-4.54M17.863 19.979L9.7 11.806l-.02 4.53"
			opacity=".4"
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
