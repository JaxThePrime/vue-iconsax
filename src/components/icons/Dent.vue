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
			d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.38 10.43l1.46.84c.63.36.84 1.17.48 1.8-.36.63-1.17.84-1.8.48l-1.46-.84a.502.502 0 00-.75.43v1.68c0 .72-.59 1.32-1.32 1.32-.73 0-1.32-.59-1.32-1.32v-1.68c0-.38-.42-.63-.75-.43l-1.46.84c-.63.36-1.44.15-1.8-.48a1.32 1.32 0 01.48-1.8l1.46-.84c.33-.19.33-.67 0-.87l-1.46-.84a1.32 1.32 0 01-.48-1.8 1.32 1.32 0 011.8-.48l1.46.84c.33.19.75-.05.75-.43V7.17c0-.72.59-1.32 1.32-1.32.73 0 1.32.59 1.32 1.32v1.68c0 .38.42.63.75.43l1.46-.84a1.32 1.32 0 011.8.48c.36.63.15 1.44-.48 1.8l-1.46.84c-.33.2-.33.68 0 .87z"
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
			d="M12 18.152c-.72 0-1.32-.59-1.32-1.32v-9.66c0-.72.59-1.32 1.32-1.32.72 0 1.32.59 1.32 1.32v9.66c0 .73-.6 1.32-1.32 1.32Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
		></path>
		<path
			d="M6.68 8.929a1.32 1.32 0 0 1 1.8-.48l8.37 4.83c.63.36.84 1.17.48 1.8-.36.63-1.17.84-1.8.48l-8.37-4.83c-.63-.37-.85-1.18-.48-1.8Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
		></path>
		<path
			d="M6.68 15.071a1.32 1.32 0 0 1 .48-1.8l8.37-4.83a1.32 1.32 0 0 1 1.8.48c.36.63.15 1.44-.48 1.8l-8.37 4.83c-.63.37-1.44.15-1.8-.48Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
		></path>
		<path
			d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
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
			d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
			:fill="color"
		></path>
		<path
			d="m16.84 13.272-1.46-.84a.506.506 0 0 1 0-.87l1.46-.84c.63-.36.84-1.17.48-1.8a1.32 1.32 0 0 0-1.8-.48l-1.46.84a.502.502 0 0 1-.75-.43v-1.68c0-.72-.59-1.32-1.32-1.32-.73 0-1.32.59-1.32 1.32v1.68c0 .38-.42.63-.75.43l-1.46-.84a1.32 1.32 0 0 0-1.8.48c-.36.63-.15 1.44.48 1.8l1.46.84c.33.19.33.67 0 .87l-1.46.84a1.32 1.32 0 0 0-.48 1.8c.36.63 1.17.84 1.8.48l1.46-.84c.33-.19.75.05.75.43v1.68c0 .72.59 1.32 1.32 1.32.73 0 1.32-.59 1.32-1.32v-1.68c0-.38.42-.63.75-.43l1.46.84c.63.36 1.44.15 1.8-.48.37-.62.15-1.43-.48-1.8Z"
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
			d="M12 18.1c-.7 0-1.3-.6-1.3-1.3V7.2c0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3v9.7c0 .7-.6 1.2-1.3 1.2Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
		></path>
		<path
			d="M6.7 8.9c.3-.6 1.1-.8 1.8-.5l8.4 4.8c.6.4.8 1.2.5 1.8-.4.6-1.2.8-1.8.5l-8.4-4.8c-.7-.3-.9-1.1-.5-1.8Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
		></path>
		<path
			d="M6.7 15.1c-.4-.6-.1-1.4.5-1.8l8.4-4.8c.6-.4 1.4-.1 1.8.5.4.6.1 1.4-.5 1.8l-8.4 4.8c-.7.3-1.5.1-1.8-.5Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
		></path>
		<path
			d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
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
			d="M12 18.902c-1.14 0-2.07-.93-2.07-2.07v-9.66c0-1.14.93-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07v9.66c0 1.14-.93 2.07-2.07 2.07Zm0-12.3a.57.57 0 0 0-.57.57v9.66c0 .31.25.57.57.57.32 0 .57-.25.57-.57v-9.66c0-.31-.26-.57-.57-.57Z"
			:fill="color"
		></path>
		<path
			d="M16.18 16.48c-.35 0-.71-.09-1.03-.28l-8.37-4.83c-.48-.28-.82-.72-.96-1.26-.14-.53-.07-1.09.21-1.57.57-.99 1.84-1.33 2.82-.76l8.37 4.83c.99.57 1.33 1.84.76 2.82-.39.68-1.09 1.05-1.8 1.05ZM7.82 9.02c-.05 0-.1.01-.15.02-.15.04-.27.13-.35.26-.07.13-.09.28-.06.43.04.15.13.27.26.35l8.37 4.83c.27.15.62.06.78-.21.16-.27.06-.62-.21-.78L8.09 9.09a.495.495 0 0 0-.27-.07Z"
			:fill="color"
		></path>
		<path
			d="M7.82 16.48a2.063 2.063 0 0 1-1.03-3.85l8.37-4.83c.99-.57 2.25-.23 2.82.76.28.48.35 1.03.21 1.57-.14.53-.48.98-.96 1.26l-8.37 4.83c-.33.17-.69.26-1.04.26Zm-.5-1.78c.15.27.51.36.78.21l8.37-4.83a.577.577 0 0 0 .2-.78.577.577 0 0 0-.78-.2l-8.37 4.83c-.26.15-.35.5-.2.77Z"
			:fill="color"
		></path>
		<path
			d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
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
			stroke-miterlimit="10"
		>
			<path
				d="M12 18.152c-.72 0-1.32-.59-1.32-1.32v-9.66c0-.72.59-1.32 1.32-1.32.72 0 1.32.59 1.32 1.32v9.66c0 .73-.6 1.32-1.32 1.32Z"
			></path>
			<path
				d="M6.68 8.933a1.32 1.32 0 0 1 1.8-.48l8.37 4.83c.63.36.84 1.17.48 1.8-.36.63-1.17.84-1.8.48l-8.37-4.83c-.63-.37-.85-1.18-.48-1.8Z"
			></path>
			<path
				d="M6.68 15.071a1.32 1.32 0 0 1 .48-1.8l8.37-4.83a1.32 1.32 0 0 1 1.8.48c.36.63.15 1.44-.48 1.8l-8.37 4.83c-.63.37-1.44.15-1.8-.48Z"
			></path>
		</g>
		<path
			d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
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
