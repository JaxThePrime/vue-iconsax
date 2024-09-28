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
			d="M17 4.75h-1V3.26c0-.83-.68-1.51-1.51-1.51H9.51C8.68 1.75 8 2.43 8 3.26v1.49H7c-1.1 0-2 .9-2 2v.13c.32-.09.65-.13 1-.13h12c.35 0 .68.04 1 .13v-.13c0-1.1-.9-2-2-2ZM13.93 16.93a.57.57 0 1 0-.001 1.14.57.57 0 0 0 0-1.14ZM9.07 17.809a.57.57 0 1 0 0 1.14.57.57 0 0 0 0-1.14Z"
			:fill="color"
		></path>
		<path
			d="M19 8.38c-.32-.09-.65-.13-1-.13H6c-.35 0-.68.04-1 .13-1.72.45-3 2.02-3 3.87v6c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4v-6c0-1.85-1.28-3.42-3-3.87Zm-3 4.9v4.22c0 1.14-.93 2.07-2.07 2.07-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.07 2.07-2.07.2 0 .39.04.57.09v-1.26l-3.35.91v3.21c0 .01 0 .02-.01.03a2.077 2.077 0 0 1-2.07 2.05c-1.14 0-2.07-.93-2.07-2.08s.93-2.07 2.07-2.07c.2 0 .39.04.58.09v-3.35c0-.86.54-1.56 1.36-1.78l2.65-.73c.85-.23 1.39-.01 1.69.22.3.23.65.68.65 1.57v.95Z"
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
			d="M2 13c0-2.65 1.15-4.15 3-4.72C5.6 8.09 6.27 8 7 8h10c.73 0 1.4.09 2 .28 1.85.57 3 2.07 3 4.72v4c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M19 7v1.28c-.6-.19-1.27-.28-2-.28H7c-.73 0-1.4.09-2 .28V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2ZM16 3.51V5H8V3.51C8 2.68 8.68 2 9.51 2h4.98c.83 0 1.51.68 1.51 1.51Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M9.07 19.449a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M15.248 17.25v-5.17c0-1.1-.69-1.26-1.39-1.06l-2.65.72c-.48.13-.81.51-.81 1.06v5.33"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M13.93 18.57a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64ZM10.398 14.347l4.85-1.32"
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
			d="M19 7v1.13c-.32-.09-.65-.13-1-.13H6c-.35 0-.68.04-1 .13V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="M16 3.51V5H8V3.51C8 2.68 8.68 2 9.51 2h4.98c.83 0 1.51.68 1.51 1.51ZM22 12v6c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4v-6c0-1.85 1.28-3.42 3-3.87.32-.09.65-.13 1-.13h12c.35 0 .68.04 1 .13 1.72.45 3 2.02 3 3.87Z"
			:fill="color"
		></path>
		<path
			d="M15.35 10.509c-.3-.23-.84-.45-1.69-.22l-2.65.73c-.83.22-1.36.92-1.36 1.78v3.35c-.18-.05-.38-.09-.58-.09-1.14 0-2.07.93-2.07 2.07a2.07 2.07 0 0 0 4.14.02c0-.01.01-.02.01-.03v-3.21l3.35-.91v1.26c-.18-.05-.37-.09-.57-.09-1.14 0-2.07.93-2.07 2.07 0 1.14.93 2.07 2.07 2.07 1.14 0 2.07-.93 2.07-2.07v-5.17c0-.87-.36-1.33-.65-1.56Zm-6.28 8.2a.57.57 0 1 1 0-1.14.57.57 0 0 1 0 1.14Zm4.86-.89a.57.57 0 1 1 0-1.14.57.57 0 0 1 0 1.14Z"
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
			d="M22 13v4c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-4c0-2.65 1.15-4.15 3-4.72C5.6 8.09 6.27 8 7 8h10c.73 0 1.4.09 2 .28 1.85.57 3 2.07 3 4.72Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M19 7v1.28c-.6-.19-1.27-.28-2-.28H7c-.73 0-1.4.09-2 .28V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2ZM16 3.51V5H8V3.51C8 2.68 8.68 2 9.51 2h4.98c.83 0 1.51.68 1.51 1.51Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M9.07 19.45a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M15.25 17.25v-5.17c0-1.1-.69-1.26-1.39-1.06l-2.65.72c-.48.13-.81.51-.81 1.06v5.33"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M13.93 18.57a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64ZM10.4 14.35l4.85-1.32"
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
			d="M17 22.75H7c-3.65 0-5.75-2.1-5.75-5.75v-4c0-3.6 1.92-4.94 3.53-5.44.65-.21 1.4-.31 2.22-.31h10c.82 0 1.57.11 2.23.32 1.6.49 3.52 1.84 3.52 5.43v4c0 3.65-2.1 5.75-5.75 5.75Zm-10-14c-.66 0-1.26.08-1.77.25-1.67.51-2.48 1.82-2.48 4v4c0 2.86 1.39 4.25 4.25 4.25h10c2.86 0 4.25-1.39 4.25-4.25v-4c0-2.18-.81-3.49-2.47-4-.52-.17-1.12-.25-1.78-.25H7Z"
			:fill="color"
		></path>
		<path
			d="M19 9.03a.62.62 0 0 1-.23-.04c-.51-.16-1.11-.25-1.77-.25H7c-.66 0-1.26.08-1.77.25a.76.76 0 0 1-.67-.11.767.767 0 0 1-.31-.61V7c0-1.52 1.23-2.75 2.75-2.75h10c1.52 0 2.75 1.23 2.75 2.75v1.28c0 .24-.11.46-.31.61-.13.09-.28.14-.44.14ZM7 5.75c-.69 0-1.25.56-1.25 1.25v.34c.39-.06.81-.09 1.25-.09h10c.44 0 .86.03 1.25.09V7c0-.69-.56-1.25-1.25-1.25H7Z"
			:fill="color"
		></path>
		<path
			d="M16 5.75H8c-.41 0-.75-.34-.75-.75V3.51c0-1.25 1.01-2.26 2.26-2.26h4.98c1.25 0 2.26 1.01 2.26 2.26V5c0 .41-.34.75-.75.75Zm-7.25-1.5h6.5v-.74a.76.76 0 0 0-.76-.76H9.51a.76.76 0 0 0-.76.76v.74ZM9.07 20.21c-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07 0 1.14-.92 2.07-2.07 2.07Zm0-2.65a.57.57 0 1 0 0 1.14.57.57 0 0 0 0-1.14Z"
			:fill="color"
		></path>
		<path
			d="M10.398 18.879c-.41 0-.75-.34-.75-.75v-5.33c0-.86.54-1.56 1.37-1.79l2.65-.72c.85-.23 1.39-.01 1.69.22.3.23.65.68.65 1.56v5.17c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.17c0-.25-.05-.35-.07-.37-.02-.01-.14-.03-.38.03l-2.65.72c-.23.06-.26.21-.26.34v5.33c0 .43-.34.76-.75.76Z"
			:fill="color"
		></path>
		<path
			d="M13.93 19.32c-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07 0 1.14-.93 2.07-2.07 2.07Zm0-2.64a.57.57 0 1 0-.001 1.14.57.57 0 0 0 0-1.14ZM10.4 15.098a.747.747 0 0 1-.19-1.47l4.85-1.32a.75.75 0 1 1 .39 1.45l-4.851 1.32a1.5 1.5 0 0 1-.2.02Z"
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
			d="M22 13v4c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-4c0-2.65 1.15-4.15 3-4.72C5.6 8.09 6.27 8 7 8h10c.73 0 1.4.09 2 .28 1.85.57 3 2.07 3 4.72Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M19 7v1.28c-.6-.19-1.27-.28-2-.28H7c-.73 0-1.4.09-2 .28V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2ZM16 3.51V5H8V3.51C8 2.68 8.68 2 9.51 2h4.98c.83 0 1.51.68 1.51 1.51Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
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
			<path
				d="M9.07 19.449a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64Z"
			></path>
			<path
				d="M15.248 17.25v-5.17c0-1.1-.69-1.26-1.39-1.06l-2.65.72c-.48.13-.81.51-.81 1.06v5.33"
			></path>
			<path
				d="M13.93 18.57a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64ZM10.398 14.347l4.85-1.32"
			></path>
		</g>
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
