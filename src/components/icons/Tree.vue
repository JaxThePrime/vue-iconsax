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
			d="M16.17 10.06H7.83c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.8 0l4.17 5.84c.69.96.28 1.75-.9 1.75Z"
			:fill="color"
		></path>
		<path
			d="M17.59 17.999H6.41c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.58l3.99 5.61c.93 1.28.39 2.33-1.19 2.33ZM12.75 18v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4h1.5Z"
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
			d="M16.17 10.06H7.83c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.79 0l4.17 5.84c.7.96.29 1.75-.89 1.75Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M18.78 15.669c.93 1.28.39 2.33-1.19 2.33H6.42c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.57l1.38 1.94M12 22v-4"
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
			d="M16.17 10.06H7.83c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.8 0l4.17 5.84c.69.96.28 1.75-.9 1.75Z"
			:fill="color"
		></path>
		<path
			d="M17.59 17.999H6.41c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.58l3.99 5.61c.93 1.28.39 2.33-1.19 2.33ZM12.75 18v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4h1.5Z"
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
			d="M16.17 10.06H7.83c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.79 0l4.17 5.84c.7.96.29 1.75-.89 1.75Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M17.59 18H6.42c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.57l3.99 5.61c.93 1.28.39 2.33-1.19 2.33ZM12 22v-4"
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
			d="M16.17 10.81H7.83c-.86 0-1.52-.34-1.82-.92-.3-.59-.18-1.32.32-2.01l4.17-5.84a1.827 1.827 0 0 1 3.02.01l4.17 5.83c.5.69.62 1.42.32 2.01-.32.58-.98.92-1.84.92ZM12 2.7c-.09 0-.19.08-.28.2L7.55 8.75c-.2.27-.21.43-.2.46.01.02.15.1.49.1h8.34c.33 0 .47-.09.49-.11 0-.02-.01-.18-.2-.45L12.3 2.91c-.11-.14-.21-.21-.3-.21Z"
			:fill="color"
		></path>
		<path
			d="M17.59 18.749H6.42c-1.43 0-2-.69-2.21-1.1-.21-.41-.43-1.27.41-2.43l3.99-5.6c.14-.2.37-.31.61-.31h5.57c.24 0 .47.12.61.31l3.99 5.61c.84 1.15.61 2.01.4 2.42-.21.41-.77 1.1-2.2 1.1Zm-7.99-7.94-3.77 5.29c-.32.44-.35.74-.29.87.07.13.33.28.87.28h11.17c.54 0 .81-.15.87-.28.07-.13.03-.43-.29-.87l-3.77-5.3H9.6v.01Z"
			:fill="color"
		></path>
		<path
			d="M12 22.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75Z"
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
			d="M16.17 10.06H7.83c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.79 0l4.17 5.84c.7.96.29 1.75-.89 1.75Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M17.59 17.999H6.42c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.57l3.99 5.61c.93 1.28.39 2.33-1.19 2.33Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M12 22v-4"
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
