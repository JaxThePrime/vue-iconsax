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
			d="M8.77 14.43l1.61.72a4 4 0 003.25 0l1.61-.72c1.44-.64 2.77 1.1 1.77 2.32l-3.46 4.23c-.85 1.04-2.24 1.04-3.1 0L7 16.75c-1.01-1.22.32-2.96 1.77-2.32zM8.57 11.672c-.3.22-.26.68.08.85l2.35 1.17c.55.28 1.44.28 1.98 0l2.35-1.17c.33-.17.37-.62.08-.85l-3.11-2.34a.51.51 0 00-.6 0l-3.13 2.34zM17.88 8.241l-4.17-5.2c-.08-.1-.17-.19-.26-.28-.26-.25-.63-.02-.63.34v4.3c0 .16.07.31.2.4l4.15 3.12.18.13c.18.13.43.13.58-.03.7-.76.69-1.86-.05-2.78zM6.11 8.33l4.15-5.28c.08-.1.16-.19.25-.28.26-.25.63-.03.63.34v4.37c0 .16-.07.3-.2.4l-4.13 3.17-.17.13c-.18.13-.43.13-.59-.04-.68-.77-.67-1.87.06-2.81z"
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
			d="m10.45 3.049-3.73 4.66c-.85 1.06-.55 2.42.66 3.02l3.73 1.87c.49.24 1.29.24 1.78 0l3.73-1.87c1.21-.61 1.51-1.97.66-3.02l-3.73-4.66c-.85-1.07-2.25-1.07-3.1 0ZM12 2.3v5.26"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="m7.8 10.709 4.2-3.15 4.2 3.15M7.8 17.73l-.8-.98c-1-1.22.33-2.96 1.77-2.32l1.61.72a4 4 0 0 0 3.25 0l1.61-.72c1.44-.64 2.77 1.1 1.77 2.32l-3.46 4.23c-.85 1.04-2.24 1.04-3.1 0"
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
			d="M17.5 11.49c-.11.09-.22.16-.35.22l-1.09.55-3.07 1.53c-.55.28-1.44.28-1.98 0l-3.07-1.53-1.09-.55c-.12-.07-.23-.13-.35-.22-1.06-.74-1.25-2.09-.4-3.16l4.17-5.2c.26-.32.57-.56.89-.7.54-.26 1.14-.26 1.67 0 .32.14.64.38.89.7l4.17 5.2c.86 1.08.67 2.43-.39 3.16Z"
			:fill="color"
		></path>
		<path
			d="M17.5 11.491c-.11.09-.22.16-.35.22l-1.09.55L12 9.211l-4.06 3.06-1.09-.55c-.12-.07-.23-.13-.35-.22.04-.19.14-.36.31-.48l4.35-3.27v-5.31c.54-.26 1.14-.26 1.67 0v5.31l4.35 3.27c.17.12.27.28.32.47ZM8.77 14.43l1.61.72a4 4 0 0 0 3.25 0l1.61-.72c1.44-.64 2.77 1.1 1.77 2.32l-3.46 4.23c-.85 1.04-2.24 1.04-3.1 0L7 16.75c-1.01-1.22.32-2.96 1.77-2.32Z"
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
			d="M10.45 3.05 6.71 7.71c-.85 1.06-.55 2.42.66 3.02l3.73 1.87c.49.24 1.29.24 1.78 0l3.73-1.87c1.21-.61 1.51-1.97.66-3.02l-3.73-4.66c-.84-1.07-2.24-1.07-3.09 0ZM12 2.3v5.26"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M7.8 10.71 12 7.56l4.2 3.15M8.77 14.43l1.61.72a4 4 0 0 0 3.25 0l1.61-.72c1.44-.64 2.77 1.1 1.77 2.32l-3.46 4.23c-.85 1.04-2.24 1.04-3.1 0L7 16.75c-1.01-1.22.32-2.96 1.77-2.32Z"
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
			d="M12 13.53c-.44 0-.88-.09-1.23-.26L7.04 11.4c-.78-.39-1.33-1.07-1.5-1.85-.17-.79.04-1.63.59-2.31l3.73-4.66c.55-.69 1.33-1.08 2.14-1.08s1.59.39 2.14 1.08l3.73 4.67c.55.68.76 1.52.59 2.31-.17.79-.72 1.46-1.5 1.85l-3.73 1.87c-.35.17-.79.25-1.23.25Zm-.97-10.01L7.3 8.18c-.26.33-.37.7-.29 1.05.08.35.33.64.71.83l3.73 1.87c.28.14.83.14 1.11 0l3.73-1.87c.38-.19.63-.49.71-.83.08-.34-.03-.72-.29-1.05l-3.73-4.66c-.55-.67-1.41-.67-1.95 0Z"
			:fill="color"
		></path>
		<path
			d="M12 8.31c-.41 0-.75-.34-.75-.75V2.3c0-.41.34-.75.75-.75s.75.34.75.75v5.26c0 .41-.34.75-.75.75Z"
			:fill="color"
		></path>
		<path
			d="M16.2 11.459a.76.76 0 0 1-.45-.15L12 8.489l-3.75 2.82a.75.75 0 0 1-.9-1.2l4.2-3.15c.27-.2.63-.2.9 0l4.2 3.15c.33.25.4.72.15 1.05-.14.2-.37.3-.6.3ZM12 22.5c-.8 0-1.58-.38-2.13-1.06l-3.46-4.23c-.67-.82-.69-1.94-.05-2.79.64-.85 1.73-1.12 2.7-.69l1.61.72c.84.37 1.8.37 2.64 0l1.61-.72c.97-.43 2.06-.15 2.7.69.65.85.63 1.97-.05 2.79l-3.46 4.23c-.53.68-1.31 1.06-2.11 1.06Zm-3.86-7.46c-.31 0-.51.22-.58.3-.08.11-.33.5.02.93l3.46 4.23c.53.65 1.4.65 1.93 0l3.46-4.23c.35-.43.1-.82.02-.93a.722.722 0 0 0-.9-.23l-1.61.72c-1.23.54-2.63.54-3.86 0l-1.61-.72a.93.93 0 0 0-.33-.07Z"
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
			d="m10.45 3.049-3.73 4.66c-.85 1.06-.55 2.42.66 3.02l3.73 1.87c.49.24 1.29.24 1.78 0l3.73-1.87c1.21-.61 1.51-1.97.66-3.02l-3.73-4.66c-.85-1.07-2.25-1.07-3.1 0ZM12 2.3v5.26"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="m7.8 10.709 4.2-3.15 4.2 3.15"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="m8.77 14.43 1.61.72a4 4 0 0 0 3.25 0l1.61-.72c1.44-.64 2.77 1.1 1.77 2.32l-3.46 4.23c-.85 1.04-2.24 1.04-3.1 0L7 16.75c-1.01-1.22.32-2.96 1.77-2.32Z"
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
