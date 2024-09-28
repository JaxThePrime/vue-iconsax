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
			d="M20.97 1h-2.94C16.76 1 16 1.76 16 3.03v2.94C16 7.24 16.76 8 18.03 8h2.94C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1Zm.64 3.68c-.37 1.18-1.66 1.82-2.11 1.82-.45 0-1.73-.62-2.11-1.82-.06-.18-.09-.38-.09-.57 0-.65.33-1.32 1.02-1.54.41-.13.85-.06 1.16.2.32-.25.76-.33 1.18-.2.92.29 1.21 1.32.95 2.11Z"
			:fill="color"
		></path>
		<path
			d="M18.03 9.5a3.53 3.53 0 0 1-3.53-3.53V3c0-.55-.45-1-1-1H7C4.24 2 2 4.23 2 6.98v6.97c0 2.76 2.24 5 5 5h1.5c.28 0 .64.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99c.19-.25.49-.4.8-.4h1.51c2.76 0 4.99-2.23 4.99-4.99V10.5c0-.55-.45-1-1-1h-2.97ZM8 12c-.56 0-1-.45-1-1s.44-1 1-1c.55 0 1 .45 1 1s-.44 1-1 1Zm4 0c-.56 0-1-.45-1-1s.44-1 1-1c.55 0 1 .45 1 1s-.44 1-1 1Z"
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
			d="M2 8c0-4 2-6 6-6h4M22 8v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-1"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M18 7.002c-.5 0-2.27-.8-2.8-2.38-.33-.99.06-2.21 1.14-2.55.56-.17 1.26-.03 1.66.5.38-.55 1.1-.67 1.66-.5 1.08.33 1.47 1.56 1.14 2.55"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M15.996 11h.01M11.995 11h.009M7.995 11h.008"
			:stroke="color"
			stroke-width="2"
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
			d="M20.97 1h-2.94C16.76 1 16 1.76 16 3.03v2.94C16 7.24 16.76 8 18.03 8h2.94C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1Zm.64 3.68c-.37 1.18-1.66 1.82-2.11 1.82-.45 0-1.73-.62-2.11-1.82-.06-.18-.09-.38-.09-.57 0-.65.33-1.32 1.02-1.54.41-.13.85-.06 1.16.2.32-.25.76-.33 1.18-.2.92.29 1.21 1.32.95 2.11Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="M20.97 8h-2.94C16.76 8 16 7.24 16 5.97V3.03c0-.4.08-.74.22-1.03H7C4.24 2 2 4.23 2 6.98v6.98c0 2.75 2.24 4.98 5 4.98h1.5c.27 0 .63.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99c.19-.25.49-.4.8-.4H17c2.76 0 5-2.23 5-4.98V7.77c-.29.15-.63.23-1.03.23Z"
			:fill="color"
		></path>
		<path
			d="M12 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1ZM16 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1ZM8 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Z"
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
			d="M22 8v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h4"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M15.2 4.62c-.33-.99.06-2.21 1.14-2.55.56-.17 1.26-.03 1.66.5.38-.55 1.1-.67 1.66-.5 1.08.33 1.47 1.56 1.14 2.55C20.29 6.19 18.5 7 18 7s-2.27-.8-2.8-2.38Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
			:stroke="color"
			stroke-width="2"
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
			d="M12 22.81c-.69 0-1.34-.35-1.8-.96l-1.5-2a.377.377 0 0 0-.21-.1H8c-4.17 0-6.75-1.13-6.75-6.75V8c0-4.42 2.33-6.75 6.75-6.75h4c.41 0 .75.34.75.75s-.34.75-.75.75H8C4.42 2.75 2.75 4.42 2.75 8v5c0 4.52 1.55 5.25 5.25 5.25h.5c.51 0 1.09.29 1.4.7l1.5 2c.35.46.85.46 1.2 0l1.5-2c.33-.44.85-.7 1.4-.7h.5c3.58 0 5.25-1.67 5.25-5.25V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 4.42-2.33 6.75-6.75 6.75h-.5c-.08 0-.15.04-.2.1l-1.5 2c-.46.61-1.11.96-1.8.96Z"
			:fill="color"
		></path>
		<path
			d="M12 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1ZM16 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1ZM8 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1ZM18 7.75c-.86 0-2.89-1.02-3.51-2.89-.25-.74-.19-1.59.16-2.26.31-.6.83-1.04 1.47-1.24.65-.2 1.34-.11 1.88.22.54-.33 1.23-.42 1.89-.22.64.2 1.16.64 1.47 1.24.35.67.41 1.52.16 2.26-.63 1.9-2.75 2.89-3.52 2.89Zm-2.09-3.37c.42 1.26 1.85 1.84 2.11 1.87.29-.03 1.69-.68 2.08-1.86.12-.36.09-.79-.07-1.1a.939.939 0 0 0-.58-.49c-.28-.1-.66-.05-.83.2-.14.2-.36.32-.6.33-.24 0-.47-.11-.62-.3-.21-.27-.58-.31-.85-.23-.26.08-.45.24-.58.49-.15.31-.18.73-.06 1.09Z"
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
			d="M22 8v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h4"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M15.2 4.622c-.33-.99.06-2.21 1.14-2.55.56-.17 1.26-.03 1.66.5.38-.55 1.1-.67 1.66-.5 1.08.33 1.47 1.56 1.14 2.55-.51 1.57-2.3 2.38-2.8 2.38s-2.27-.8-2.8-2.38Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M15.996 11h.01M11.995 11h.009M7.995 11h.008"
			:stroke="color"
			stroke-width="2"
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
