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
			d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM12 18.58c-3.17 0-5.75-2.58-5.75-5.75 0-1.14.33-2.25.97-3.19.23-.34.7-.44 1.04-.21.34.23.44.7.21 1.04a4.26 4.26 0 003.54 6.61 4.26 4.26 0 004.25-4.25c0-2.24-1.74-4.08-3.94-4.24l.41.3c.33.24.41.71.16 1.05a.75.75 0 01-1.05.16L9.9 8.69a.769.769 0 01-.18-.18c-.01-.01-.02-.02-.03-.04a.917.917 0 01-.09-.23.942.942 0 01-.01-.29l.03-.12c.02-.07.06-.13.1-.2.02-.01.04-.03.06-.05l1.66-1.9c.27-.31.75-.34 1.06-.07.31.27.34.75.07 1.06l-.37.43a5.76 5.76 0 015.56 5.75c-.01 3.15-2.59 5.73-5.76 5.73z"
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
			d="M20.67 13.33c0 4.79-3.88 8.67-8.67 8.67s-8.67-3.88-8.67-8.67c0-1.78.54-3.44 1.46-4.82m4.32-3.43c.87-.26 1.83-.43 2.89-.43 3.21 0 6.02 1.75 7.51 4.34M7.87 5.32L10.76 2M7.87 5.32l3.37 2.46"
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
			d="M7.81 2h8.37C19.83 2 22 4.17 22 7.81v8.37c0 3.64-2.17 5.81-5.81 5.81H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2z"
			opacity=".4"
		></path>
		<path
			:fill="color"
			d="M12 18.58c-3.17 0-5.75-2.58-5.75-5.75 0-1.14.33-2.25.97-3.19.23-.34.7-.44 1.04-.21.34.23.44.7.21 1.04a4.26 4.26 0 003.54 6.61 4.26 4.26 0 004.25-4.25c0-2.24-1.74-4.08-3.94-4.24l.41.3c.33.24.41.71.16 1.05a.75.75 0 01-1.05.16L9.9 8.69a.769.769 0 01-.18-.18c-.01-.01-.02-.02-.03-.04a.917.917 0 01-.09-.23.942.942 0 01-.01-.29l.03-.12c.02-.07.06-.13.1-.2.02-.01.04-.03.06-.05l1.66-1.9c.27-.31.75-.34 1.06-.07.31.27.34.75.07 1.06l-.37.43a5.76 5.76 0 015.56 5.75c-.01 3.15-2.59 5.73-5.76 5.73z"
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
			d="M9.11 5.08c.87-.26 1.83-.43 2.89-.43 4.79 0 8.67 3.88 8.67 8.67s-3.88 8.67-8.67 8.67-8.67-3.88-8.67-8.67c0-1.78.54-3.44 1.46-4.82M7.87 5.32L10.76 2M7.87 5.32l3.37 2.46"
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
			d="M12 22.75c-5.2 0-9.42-4.23-9.42-9.42 0-1.87.55-3.68 1.59-5.24.23-.34.7-.44 1.04-.21.34.23.44.7.21 1.04a7.925 7.925 0 006.59 12.32c4.37 0 7.92-3.55 7.92-7.92S16.37 5.4 12 5.4c-.92 0-1.82.13-2.67.39a.75.75 0 01-.94-.5c-.12-.4.1-.82.5-.94 1-.3 2.04-.46 3.11-.46 5.2 0 9.42 4.23 9.42 9.42 0 5.19-4.22 9.44-9.42 9.44z"
		></path>
		<path
			:fill="color"
			d="M7.87 6.07a.748.748 0 01-.57-1.24l2.89-3.32c.27-.31.75-.35 1.06-.07.31.27.34.75.07 1.06L8.43 5.81c-.15.17-.36.26-.56.26z"
		></path>
		<path
			:fill="color"
			d="M11.24 8.53c-.15 0-.31-.05-.44-.14L7.42 5.92a.751.751 0 01.89-1.21l3.37 2.46c.33.24.41.71.16 1.05a.71.71 0 01-.6.31z"
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
			d="M9.11 5.08c.87-.26 1.83-.43 2.89-.43 4.79 0 8.67 3.88 8.67 8.67s-3.88 8.67-8.67 8.67-8.67-3.88-8.67-8.67c0-1.78.54-3.44 1.46-4.82"
			opacity=".4"
		></path>
		<path
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M7.87 5.32L10.76 2M7.87 5.32l3.37 2.46"
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
