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
			d="M20.97 8h-2.94C16.76 8 16 7.24 16 5.97V3.03C16 1.76 16.76 1 18.03 1h2.94C22.24 1 23 1.76 23 3.03v2.94C23 7.24 22.24 8 20.97 8Zm.22-3.31a.62.62 0 0 0-.44-.18.62.62 0 0 0-.44.18l-.18.18V2.63c0-.35-.28-.63-.63-.63s-.63.28-.63.63v2.24l-.18-.18a.628.628 0 0 0-.88 0c-.24.24-.24.64 0 .88l1.25 1.25c.05.05.12.09.19.12.02.01.04.01.06.02.05.02.1.03.16.03h.06c.07 0 .13-.01.2-.04h.02c.07-.03.13-.07.18-.12.01-.01.01-.01.02-.01l1.25-1.25c.24-.24.24-.64-.01-.88ZM9.001 10.381a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76Z"
			:fill="color"
		></path>
		<path
			d="M20.97 8h-.47v4.61l-.13-.11c-.78-.67-2.04-.67-2.82 0l-4.16 3.57c-.78.67-2.04.67-2.82 0l-.34-.28c-.71-.62-1.84-.68-2.64-.14l-3.74 2.51c-.22-.56-.35-1.21-.35-1.97V7.81c0-2.82 1.49-4.31 4.31-4.31H16v-.47c0-.4.07-.74.23-1.03H7.81C4.17 2 2 4.17 2 7.81v8.38c0 1.09.19 2.04.56 2.84.86 1.9 2.7 2.97 5.25 2.97h8.38c3.64 0 5.81-2.17 5.81-5.81V7.77c-.29.16-.63.23-1.03.23Z"
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
			d="M9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2M2 13.04V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-5M13 2H9C4 2 2 4 2 9M18 2v6l2-2M18 8l-2-2"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="m2.672 18.949 4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0l1.63 1.4"
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
			d="M21.999 13.899v2.29c0 3.64-2.17 5.81-5.81 5.81h-8.38c-2.55 0-4.39-1.07-5.25-2.97l.11-.08 4.92-3.3c.8-.54 1.93-.48 2.64.14l.34.28c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0l1.63 1.4Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="M20.97 8h-2.94C16.76 8 16 7.24 16 5.97V3.03c0-.4.08-.74.22-1.03H7.81C4.17 2 2 4.17 2 7.81v8.38c0 1.09.19 2.04.56 2.84l.11-.08 4.92-3.3c.8-.54 1.93-.48 2.64.14l.34.28c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9V7.78c-.29.14-.63.22-1.03.22Z"
			:fill="color"
		></path>
		<path
			d="M9.001 10.381a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76ZM20.97 8h-2.94C16.76 8 16 7.24 16 5.97V3.03C16 1.76 16.76 1 18.03 1h2.94C22.24 1 23 1.76 23 3.03v2.94C23 7.24 22.24 8 20.97 8Zm.22-3.31a.62.62 0 0 0-.44-.18.62.62 0 0 0-.44.18l-.18.18V2.63c0-.35-.28-.63-.63-.63s-.63.28-.63.63v2.24l-.18-.18a.628.628 0 0 0-.88 0c-.24.24-.24.64 0 .88l1.25 1.25c.05.05.12.09.19.12.02.01.04.01.06.02.05.02.1.03.16.03h.06c.07 0 .13-.01.2-.04h.02c.07-.03.13-.07.18-.12.01-.01.01-.01.02-.01l1.25-1.25c.24-.24.24-.64-.01-.88Z"
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
			d="M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M13 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M18 2v6l2-2M18 8l-2-2M2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9"
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
			d="M9 10.75c-1.52 0-2.75-1.23-2.75-2.75S7.48 5.25 9 5.25 11.75 6.48 11.75 8 10.52 10.75 9 10.75Zm0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
			:fill="color"
		></path>
		<path
			d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h4c.41 0 .75.34.75.75s-.34.75-.75.75H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 5.43-2.32 7.75-7.75 7.75Z"
			:fill="color"
		></path>
		<path
			d="M18 8.75c-.1 0-.19-.02-.29-.06a.74.74 0 0 1-.46-.69V2c0-.41.34-.75.75-.75s.75.34.75.75v4.19l.72-.72c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2 2a.75.75 0 0 1-.53.22Z"
			:fill="color"
		></path>
		<path
			d="M18.001 8.751c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM2.669 19.699a.746.746 0 0 1-.41-1.37l4.93-3.31c1.08-.73 2.57-.64 3.55.19l.33.29c.5.43 1.35.43 1.84 0l4.16-3.57c1.06-.91 2.73-.91 3.8 0l1.63 1.4c.31.27.35.74.08 1.06-.27.31-.74.35-1.06.08l-1.63-1.4c-.5-.43-1.35-.43-1.85 0l-4.16 3.57c-1.06.91-2.73.91-3.8 0l-.33-.29c-.46-.39-1.22-.43-1.73-.08l-4.93 3.31c-.13.08-.28.12-.42.12Z"
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
			d="M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M13 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5"
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
			<path d="M18 2v6l2-2M18 8l-2-2"></path>
		</g>
		<path
			opacity=".4"
			d="m2.672 18.949 4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0l1.63 1.4"
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
