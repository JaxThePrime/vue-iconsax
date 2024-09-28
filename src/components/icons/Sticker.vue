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
			d="M21.96 11.66a7.484 7.484 0 0 0-3.99-1.16c-4.14 0-7.5 3.36-7.5 7.5 0 1.42.4 2.79 1.15 3.98-.46-.01-.93-.06-1.41-.13-4.11-.7-7.42-4.03-8.1-8.15A10.01 10.01 0 0 1 13.67 2.14c4.12.68 7.45 3.99 8.15 8.1.08.48.13.96.14 1.42Z"
			:fill="color"
		></path>
		<path
			d="M13.38 21.86A5.96 5.96 0 0 1 11.97 18c0-3.31 2.69-6 6-6 1.47 0 2.82.53 3.86 1.41"
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
			d="M21.82 10.24c.15.9.19 1.77.11 2.62-.02.19-.05.37-.1.55A5.96 5.96 0 0 0 17.97 12c-3.31 0-6 2.69-6 6 0 1.47.53 2.82 1.41 3.86-.18.05-.36.08-.55.1-.85.08-1.72.04-2.62-.11-4.11-.7-7.42-4.03-8.1-8.15A10.01 10.01 0 0 1 13.67 2.14c2.29.38 4.34 1.57 5.83 3.27"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M21.83 13.41c-.14.49-.4.93-.77 1.3l-6.38 6.38c-.37.37-.81.63-1.3.77A5.96 5.96 0 0 1 11.97 18c0-3.31 2.69-6 6-6 1.47 0 2.82.53 3.86 1.41Z"
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
			d="M21.93 12.86c-.02.19-.05.37-.1.55A5.96 5.96 0 0 0 17.97 12c-3.31 0-6 2.69-6 6 0 1.47.53 2.82 1.41 3.86-.18.05-.36.08-.55.1-.85.08-1.72.04-2.62-.11-4.11-.7-7.42-4.03-8.1-8.15A10.01 10.01 0 0 1 13.67 2.14c4.12.68 7.45 3.99 8.15 8.1.15.9.19 1.77.11 2.62Z"
			:fill="color"
		></path>
		<path
			d="M21.83 13.41c-.14.49-.4.93-.77 1.3l-6.38 6.38c-.37.37-.81.63-1.3.77A5.96 5.96 0 0 1 11.97 18c0-3.31 2.69-6 6-6 1.47 0 2.82.53 3.86 1.41Z"
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
			d="M21.93 12.86c-.02.19-.05.37-.1.55A5.96 5.96 0 0 0 17.97 12c-3.31 0-6 2.69-6 6 0 1.47.53 2.82 1.41 3.86-.18.05-.36.08-.55.1-.85.08-1.72.04-2.62-.11-4.11-.7-7.42-4.03-8.1-8.15A10.01 10.01 0 0 1 13.67 2.14c4.12.68 7.45 3.99 8.15 8.1.15.9.19 1.77.11 2.62Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M21.83 13.41c-.14.49-.4.93-.77 1.3l-6.38 6.38c-.37.37-.81.63-1.3.77A5.96 5.96 0 0 1 11.97 18c0-3.31 2.69-6 6-6 1.47 0 2.82.53 3.86 1.41Z"
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
			d="M11.97 22.751c-.61 0-1.24-.05-1.88-.16-4.4-.75-7.99-4.35-8.72-8.77-.58-3.51.51-6.94 3-9.43 2.49-2.49 5.92-3.57 9.42-3 4.41.73 8.02 4.31 8.77 8.71.16.97.2 1.92.12 2.82v.01c-.02.23-.06.45-.12.67-.07.25-.26.44-.5.52-.24.08-.51.02-.71-.14a5.262 5.262 0 0 0-3.38-1.23c-2.9 0-5.25 2.36-5.25 5.25 0 1.24.44 2.44 1.23 3.38.17.2.22.46.14.71-.08.25-.27.43-.52.5-.22.06-.44.1-.67.12-.3.03-.61.04-.93.04Zm0-20c-2.45 0-4.77.95-6.53 2.71-2.14 2.14-3.08 5.1-2.58 8.12.63 3.79 3.7 6.89 7.49 7.53.6.1 1.17.16 1.72.14-.54-.99-.83-2.11-.83-3.25 0-3.72 3.03-6.75 6.75-6.75 1.14 0 2.26.29 3.25.83.01-.55-.04-1.12-.14-1.72-.64-3.78-3.74-6.86-7.53-7.48-.55-.09-1.08-.13-1.6-.13Z"
			:fill="color"
		></path>
		<path
			d="M13.38 22.61a.71.71 0 0 1-.57-.27A6.747 6.747 0 0 1 11.22 18c0-3.72 3.03-6.75 6.75-6.75 1.59 0 3.13.56 4.34 1.59.23.19.32.5.24.78-.18.62-.5 1.16-.96 1.62l-6.38 6.38c-.46.46-1.01.78-1.62.96-.07.02-.14.03-.21.03Zm4.59-9.86c-2.9 0-5.25 2.36-5.25 5.25 0 1.06.32 2.09.91 2.95.19-.1.36-.23.52-.39l6.38-6.38c.16-.16.29-.33.39-.52-.86-.59-1.89-.91-2.95-.91Z"
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
			d="M21.93 12.86c-.02.19-.05.37-.1.55A5.96 5.96 0 0 0 17.97 12c-3.31 0-6 2.69-6 6 0 1.47.53 2.82 1.41 3.86-.18.05-.36.08-.55.1-.85.08-1.72.04-2.62-.11-4.11-.7-7.42-4.03-8.1-8.15A10.01 10.01 0 0 1 13.67 2.14c4.12.68 7.45 3.99 8.15 8.1.15.9.19 1.77.11 2.62Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M21.83 13.41c-.14.49-.4.93-.77 1.3l-6.38 6.38c-.37.37-.81.63-1.3.77A5.96 5.96 0 0 1 11.97 18c0-3.31 2.69-6 6-6 1.47 0 2.82.53 3.86 1.41Z"
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
