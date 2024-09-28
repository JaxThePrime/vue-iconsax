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
			d="M6.67 14H4c-1.1 0-2 .9-2 2v5c0 .55.45 1 1 1h3.67c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1ZM13.33 10h-2.67c-1.1 0-2 .9-2 2v9c0 .55.45 1 1 1h4.67c.55 0 1-.45 1-1v-9a2 2 0 0 0-2-2ZM20 17h-2.67c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1H21c.55 0 1-.45 1-1v-2c0-1.1-.9-2-2-2ZM15.01 4.85c.31-.31.43-.68.33-1-.1-.32-.41-.55-.85-.62l-.96-.16c-.04 0-.13-.07-.15-.11l-.53-1.06c-.4-.81-1.31-.81-1.71 0l-.53 1.06c-.01.04-.1.11-.14.11l-.96.16c-.44.07-.74.3-.85.62-.1.32.02.69.33 1l.74.75c.04.03.07.15.06.19l-.21.92c-.16.69.1 1 .27 1.12.17.12.54.28 1.15-.08l.9-.53c.04-.03.17-.03.21 0l.89.53c.28.17.51.22.69.22.21 0 .36-.08.45-.14.17-.12.43-.43.27-1.12l-.21-.92c-.01-.05.02-.16.06-.19l.75-.75Z"
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
			d="M8.67 14H4c-1.1 0-2 .9-2 2v6h6.67v-8Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M15.33 12c0-1.1-.9-2-2-2h-2.67c-1.1 0-2 .9-2 2v10h6.67v-6M20 17h-4.67v5H22v-3c0-1.1-.9-2-2-2Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="m12.52 2.07.53 1.06c.07.15.26.29.42.31l.96.16c.61.1.76.55.32.98l-.75.75c-.13.13-.2.37-.16.54l.21.92c.17.73-.22 1.01-.86.63l-.9-.53c-.16-.1-.43-.1-.59 0l-.9.53c-.64.38-1.03.1-.86-.63l.21-.92a.63.63 0 0 0-.16-.54l-.74-.74c-.44-.44-.3-.88.32-.98l.96-.16c.16-.03.35-.17.42-.31l.53-1.06c.29-.58.75-.58 1.04-.01Z"
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
			d="M8.67 14H4c-1.1 0-2 .9-2 2v6h6.67v-8Z"
			:fill="color"
		></path>
		<path
			d="M13.33 10h-2.67c-1.1 0-2 .9-2 2v10h6.67V12a2 2 0 0 0-2-2Z"
			:fill="color"
		></path>
		<path
			opacity=".4"
			d="M20 17h-4.67v5H22v-3c0-1.1-.9-2-2-2Z"
			:fill="color"
		></path>
		<path
			d="M15.01 4.85c.31-.31.43-.68.33-1-.1-.32-.41-.55-.85-.62l-.96-.16a.327.327 0 0 1-.15-.11l-.53-1.06c-.4-.81-1.31-.81-1.71 0l-.53 1.06c-.02.04-.11.1-.15.11l-.96.16c-.44.07-.74.3-.85.62-.1.32.02.69.33 1l.74.75c.03.03.07.15.06.19l-.21.92c-.16.68.1.99.27 1.12.17.12.54.28 1.15-.08l.9-.53c.04-.03.17-.03.21 0l.9.53c.28.17.51.22.69.22.21 0 .36-.08.45-.14.17-.12.43-.43.27-1.12l-.21-.92c-.01-.05.02-.16.06-.19l.75-.75Z"
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
			d="M8.67 14H4c-1.1 0-2 .9-2 2v6h6.67v-8Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M13.33 10h-2.67c-1.1 0-2 .9-2 2v10h6.67V12a2 2 0 0 0-2-2ZM20 17h-4.67v5H22v-3c0-1.1-.9-2-2-2Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="m12.52 2.07.53 1.06c.07.15.26.29.42.31l.96.16c.61.1.76.55.32.98l-.75.75c-.13.13-.2.37-.16.54l.21.92c.17.73-.22 1.01-.86.63l-.9-.53c-.16-.1-.43-.1-.59 0l-.9.53c-.64.38-1.03.1-.86-.63l.21-.92a.63.63 0 0 0-.16-.54l-.74-.74c-.44-.44-.3-.88.32-.98l.96-.16c.16-.03.35-.17.42-.31l.53-1.06c.29-.58.75-.58 1.04-.01Z"
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
			d="M8.67 22.75H2c-.41 0-.75-.34-.75-.75v-6c0-1.52 1.23-2.75 2.75-2.75h4.67c.41 0 .75.34.75.75v8c0 .41-.34.75-.75.75Zm-5.92-1.5h5.17v-6.5H4c-.69 0-1.25.56-1.25 1.25v5.25Z"
			:fill="color"
		></path>
		<path
			d="M15.33 22.75H8.66c-.41 0-.75-.34-.75-.75V12c0-1.52 1.23-2.75 2.75-2.75h2.67c1.52 0 2.75 1.23 2.75 2.75v10c0 .41-.33.75-.75.75Zm-5.91-1.5h5.17V12c0-.69-.56-1.25-1.25-1.25h-2.67c-.69 0-1.25.56-1.25 1.25v9.25Z"
			:fill="color"
		></path>
		<path
			d="M22 22.75h-6.67c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75H20c1.52 0 2.75 1.23 2.75 2.75v3c0 .41-.34.75-.75.75Zm-5.92-1.5h5.17V19c0-.69-.56-1.25-1.25-1.25h-3.92v3.5ZM13.699 8.348c-.24 0-.54-.07-.88-.27l-.82-.49-.81.48c-.82.49-1.36.2-1.56.06-.2-.14-.63-.58-.42-1.5l.19-.83-.68-.68c-.42-.42-.57-.92-.42-1.38.15-.46.56-.78 1.14-.88l.87-.15.49-.98c.54-1.07 1.85-1.07 2.38 0l.49.98.87.15c.58.1 1 .42 1.14.88.15.46-.01.96-.42 1.38l-.68.68.19.83c.21.93-.22 1.36-.42 1.51-.09.08-.32.21-.65.21Zm-1.7-2.27c.24 0 .48.06.68.18l.56.33-.12-.54c-.1-.42.05-.93.36-1.24l.51-.51-.63-.11c-.4-.07-.79-.36-.97-.72l-.39-.75-.38.75c-.18.36-.57.65-.97.72l-.63.1.51.51c.31.31.45.82.36 1.24l-.12.54.56-.33c.19-.12.43-.17.67-.17Z"
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
			d="M8.67 14H4c-1.1 0-2 .9-2 2v6h6.67v-8Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M13.33 10h-2.67c-1.1 0-2 .9-2 2v10h6.67V12a2 2 0 0 0-2-2ZM20 17h-4.67v5H22v-3c0-1.1-.9-2-2-2Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="m12.52 2.07.53 1.06c.07.15.26.29.42.31l.96.16c.61.1.76.55.32.98l-.75.75c-.13.13-.2.37-.16.54l.21.92c.17.73-.22 1.01-.86.63l-.9-.53c-.16-.1-.43-.1-.59 0l-.9.53c-.64.38-1.03.1-.86-.63l.21-.92a.63.63 0 0 0-.16-.54l-.74-.74c-.44-.44-.3-.88.32-.98l.96-.16c.16-.03.35-.17.42-.31l.53-1.06c.29-.58.75-.58 1.04-.01Z"
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
