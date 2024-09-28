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
			d="M14.718 18.997c.398-.155.858.184.773.602C15 21.5 13.9 22 12.55 22h-1.09c-1.35 0-2.46-.5-2.94-2.41-.083-.418.375-.755.772-.599.855.335 1.768.51 2.708.51.943 0 1.861-.17 2.717-.503ZM15.49 4.4c.09.423-.377.767-.779.609a7.38 7.38 0 0 0-2.71-.509c-.958 0-1.87.181-2.709.511-.397.157-.857-.182-.771-.601C9 2.5 10.11 2 11.46 2h1.09c1.35 0 2.45.5 2.94 2.4ZM12 5.5A6.5 6.5 0 0 0 5.5 12c0 2.1.99 3.96 2.53 5.15h.01c1.1.85 2.47 1.35 3.96 1.35 1.51 0 2.89-.51 3.99-1.37H16A6.509 6.509 0 0 0 18.5 12 6.5 6.5 0 0 0 12 5.5Zm1.93 8.88c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.4-1.4a.75.75 0 0 1-.22-.53V9.66c0-.41.34-.75.75-.75s.75.34.75.75v2.48l1.18 1.18c.29.29.29.77 0 1.06Z"
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
			d="M12 9.66v2.79l1.4 1.4"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M6.96 7.89A6.505 6.505 0 0 1 12 5.5a6.5 6.5 0 0 1 6.5 6.5c0 2.08-.98 3.94-2.5 5.13h-.01c-1.1.86-2.48 1.37-3.99 1.37-1.49 0-2.86-.5-3.96-1.35h-.01A6.486 6.486 0 0 1 5.5 12"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M8.03 17.149h.01c1.1.85 2.47 1.35 3.96 1.35 1.51 0 2.89-.51 3.99-1.37H16l-.51 2.47c-.49 1.9-1.59 2.4-2.94 2.4h-1.09c-1.35 0-2.46-.5-2.94-2.41l-.49-2.44ZM8.03 6.85h.01C9.14 6 10.51 5.5 12 5.5c1.51 0 2.89.51 3.99 1.37H16l-.51-2.47C15 2.5 13.9 2 12.55 2h-1.09C10.11 2 9 2.5 8.52 4.41l-.49 2.44Z"
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
			d="M5.5 12a6.5 6.5 0 1 1 13 0c0 2.08-.98 3.94-2.5 5.13h-.01c-1.1.86-2.48 1.37-3.99 1.37-1.49 0-2.86-.5-3.96-1.35h-.01A6.486 6.486 0 0 1 5.5 12Z"
			:fill="color"
		></path>
		<path
			d="M8.03 17.149h.01c1.1.85 2.47 1.35 3.96 1.35 1.51 0 2.89-.51 3.99-1.37H16l-.51 2.47c-.49 1.9-1.59 2.4-2.94 2.4h-1.09c-1.35 0-2.46-.5-2.94-2.41l-.49-2.44ZM8.03 6.85h.01C9.14 6 10.51 5.5 12 5.5c1.51 0 2.89.51 3.99 1.37H16l-.51-2.47C15 2.5 13.9 2 12.55 2h-1.09C10.11 2 9 2.5 8.52 4.41l-.49 2.44ZM13.4 14.6c-.19 0-.38-.07-.53-.22l-1.4-1.4a.75.75 0 0 1-.22-.53V9.66c0-.41.34-.75.75-.75s.75.34.75.75v2.48l1.18 1.18c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
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
			d="M12 9.66v2.79l1.4 1.4"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M5.5 12a6.5 6.5 0 1 1 13 0c0 2.08-.98 3.94-2.5 5.13h-.01c-1.1.86-2.48 1.37-3.99 1.37-1.49 0-2.86-.5-3.96-1.35h-.01A6.486 6.486 0 0 1 5.5 12Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M8.03 17.15h.01c1.1.85 2.47 1.35 3.96 1.35 1.51 0 2.89-.51 3.99-1.37H16l-.51 2.47C15 21.5 13.9 22 12.55 22h-1.09c-1.35 0-2.46-.5-2.94-2.41l-.49-2.44ZM8.03 6.85h.01C9.14 6 10.51 5.5 12 5.5c1.51 0 2.89.51 3.99 1.37H16l-.51-2.47C15 2.5 13.9 2 12.55 2h-1.09C10.11 2 9 2.5 8.52 4.41l-.49 2.44Z"
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
			d="M13.4 14.6c-.19 0-.38-.07-.53-.22l-1.4-1.4a.75.75 0 0 1-.22-.53V9.66c0-.41.34-.75.75-.75s.75.34.75.75v2.48l1.18 1.18c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
			:fill="color"
		></path>
		<path
			d="M12 19.25c-1.59 0-3.09-.5-4.35-1.45-.03-.02-.05-.03-.08-.05A7.243 7.243 0 0 1 4.75 12C4.75 8 8 4.75 12 4.75S19.25 8 19.25 12a7.23 7.23 0 0 1-2.79 5.72c-.03.02-.05.04-.08.06A7.2 7.2 0 0 1 12 19.25Zm-3.57-2.74c.03.02.05.03.07.05 2.03 1.57 5.01 1.56 7.03-.02.02-.02.05-.04.07-.05A5.717 5.717 0 0 0 17.75 12c0-3.17-2.58-5.75-5.75-5.75S6.25 8.83 6.25 12c0 1.77.79 3.41 2.18 4.51Z"
			:fill="color"
		></path>
		<path
			d="M12.55 22.75h-1.09c-1.96 0-3.16-.97-3.67-2.98l-.5-2.47c-.04-.22.01-.45.16-.62.15-.17.36-.27.58-.27h.01c.17 0 .33.05.46.16 2.03 1.57 5.01 1.56 7.03-.02.31-.24.8-.19 1.05.12.14.17.2.4.16.62l-.51 2.47c-.53 2.02-1.73 2.99-3.68 2.99Zm-3.46-4.11.16.8c.38 1.5 1.16 1.81 2.21 1.81h1.09c1.04 0 1.82-.31 2.21-1.83l.16-.78c-1.81.8-4.01.81-5.83 0ZM16 7.62c-.17 0-.34-.06-.47-.16-2.02-1.58-5-1.59-7.03-.02-.31.24-.8.19-1.04-.11-.14-.17-.2-.4-.16-.62l.49-2.44c.51-2.05 1.71-3.02 3.67-3.02h1.09c1.95 0 3.15.97 3.66 2.96l.52 2.51c.05.22-.01.45-.15.62-.14.18-.35.28-.58.28Zm-4-2.87c1.03 0 2.01.21 2.92.61l-.17-.81c-.39-1.48-1.16-1.8-2.2-1.8h-1.09c-1.05 0-1.83.31-2.21 1.85l-.16.76c.91-.4 1.89-.61 2.91-.61Z"
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
			d="M12 9.66v2.79l1.4 1.4"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M5.5 12a6.5 6.5 0 1 1 13 0c0 2.08-.98 3.94-2.5 5.13h-.01c-1.1.86-2.48 1.37-3.99 1.37-1.49 0-2.86-.5-3.96-1.35h-.01A6.486 6.486 0 0 1 5.5 12Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M8.03 17.149h.01c1.1.85 2.47 1.35 3.96 1.35 1.51 0 2.89-.51 3.99-1.37H16l-.51 2.47c-.49 1.9-1.59 2.4-2.94 2.4h-1.09c-1.35 0-2.46-.5-2.94-2.41l-.49-2.44ZM8.03 6.85h.01C9.14 6 10.51 5.5 12 5.5c1.51 0 2.89.51 3.99 1.37H16l-.51-2.47C15 2.5 13.9 2 12.55 2h-1.09C10.11 2 9 2.5 8.52 4.41l-.49 2.44Z"
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
