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
			d="M13.43 5.43v1.34c-2.62.21-4.11 1.89-4.11 4.66V16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10c2.29 0 3.43 1.14 3.43 3.43Z"
			:fill="color"
		></path>
		<path
			d="M18.57 8H14c-2.29 0-3.43 1.14-3.43 3.43v7.14c0 2.29 1.14 3.43 3.43 3.43h4.57c2.29 0 3.43-1.14 3.43-3.43v-7.14C22 9.14 20.86 8 18.57 8Zm-.44 7.75h-.88v.88c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.88h-.88c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.88v-.88c0-.41.34-.75.75-.75s.75.34.75.75v.88h.88c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
			d="M2 5.43C2 3.14 3.14 2 5.43 2H10c2.29 0 3.43 1.14 3.43 3.43M8 16H5.43C3.14 16 2 14.86 2 12.57V9.98M18.57 22H14c-2.29 0-3.43-1.14-3.43-3.43v-7.14C10.57 9.14 11.71 8 14 8h4.57C20.86 8 22 9.14 22 11.43v7.14c0 2.29-1.14 3.43-3.43 3.43ZM14.87 15h3.26M16.5 16.631v-3.26"
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
			d="M18.57 22H14c-2.29 0-3.43-1.14-3.43-3.43v-7.14C10.57 9.14 11.71 8 14 8h4.57C20.86 8 22 9.14 22 11.43v7.14c0 2.29-1.14 3.43-3.43 3.43Z"
			:fill="color"
		></path>
		<path
			d="M13.43 5.43v1.34c-2.62.21-4.11 1.89-4.11 4.66V16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10c2.29 0 3.43 1.14 3.43 3.43ZM18.13 14.251h-.88v-.88c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.88h-.88c-.41 0-.75.34-.75.75s.34.75.75.75h.88v.88c0 .41.34.75.75.75s.75-.34.75-.75v-.88h.88c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
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
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10c2.29 0 3.43 1.14 3.43 3.43"
		></path>
		<path
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="M18.57 22H14c-2.29 0-3.43-1.14-3.43-3.43v-7.14C10.57 9.14 11.71 8 14 8h4.57C20.86 8 22 9.14 22 11.43v7.14c0 2.29-1.14 3.43-3.43 3.43zM14.87 15h3.26M16.5 16.63v-3.26"
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
			d="M8 16.75H5.43c-2.69 0-4.18-1.48-4.18-4.18V5.43c0-2.69 1.48-4.18 4.18-4.18H10c2.69 0 4.18 1.48 4.18 4.18 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.88-.8-2.68-2.68-2.68H5.43c-1.88 0-2.68.8-2.68 2.68v7.14c0 1.88.8 2.68 2.68 2.68H8c.41 0 .75.34.75.75s-.34.75-.75.75Z"
			:fill="color"
		></path>
		<path
			d="M18.57 22.75H14c-2.69 0-4.18-1.48-4.18-4.18v-7.14c0-2.69 1.48-4.18 4.18-4.18h4.57c2.69 0 4.18 1.48 4.18 4.18v7.14c0 2.7-1.48 4.18-4.18 4.18ZM14 8.75c-1.88 0-2.68.8-2.68 2.68v7.14c0 1.88.8 2.68 2.68 2.68h4.57c1.88 0 2.68-.8 2.68-2.68v-7.14c0-1.88-.8-2.68-2.68-2.68H14Z"
			:fill="color"
		></path>
		<path
			d="M18.13 15.75h-3.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25c.41 0 .75.34.75.75s-.34.75-.75.75Z"
			:fill="color"
		></path>
		<path
			d="M16.5 17.379c-.41 0-.75-.34-.75-.75v-3.25c0-.41.34-.75.75-.75s.75.34.75.75v3.25c0 .41-.34.75-.75.75Z"
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
			d="M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10c2.29 0 3.43 1.14 3.43 3.43"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M18.57 22H14c-2.29 0-3.43-1.14-3.43-3.43v-7.14C10.57 9.14 11.71 8 14 8h4.57C20.86 8 22 9.14 22 11.43v7.14c0 2.29-1.14 3.43-3.43 3.43Z"
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
			<path d="M14.87 15h3.26M16.5 16.631v-3.26"></path>
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
