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
			d="M4 13.5v5.4C4 20.6 5.39 22 7.1 22h9.8c1.7 0 3.1-1.39 3.1-3.1v-5.4c0-.28-.22-.5-.5-.5h-15c-.28 0-.5.22-.5.5Zm4.88 4.88c-.23.24-.55.37-.88.37-.08 0-.16-.01-.24-.02-.08-.02-.16-.04-.24-.08a1.39 1.39 0 0 1-.21-.11c-.07-.05-.14-.1-.19-.16-.24-.23-.37-.55-.37-.88 0-.33.13-.65.37-.88.05-.06.12-.11.19-.16.06-.04.14-.08.21-.11.08-.04.16-.06.24-.08.4-.08.83.06 1.12.35.24.23.37.55.37.88 0 .33-.13.65-.37.88Zm8 0c-.05.06-.12.11-.19.16-.06.04-.14.08-.21.11-.08.04-.16.06-.23.08-.09.01-.17.02-.25.02-.08 0-.16-.01-.24-.02-.08-.02-.16-.04-.24-.08a1.39 1.39 0 0 1-.21-.11c-.07-.05-.14-.1-.19-.16-.24-.23-.37-.55-.37-.88 0-.33.13-.65.37-.88.05-.06.12-.11.19-.16.06-.04.14-.08.21-.11.08-.04.16-.06.24-.08.16-.03.32-.03.49 0 .07.02.15.04.23.08.07.03.15.07.21.11.07.05.14.1.19.16.24.23.37.55.37.88 0 .33-.13.65-.37.88ZM16.9 2H7.1C5.39 2 4 3.39 4 5.1v2.4c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5V5.1C20 3.39 18.61 2 16.9 2Zm-2.4 3.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75ZM19.5 12h-15c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5h15c.28 0 .5.22.5.5v2c0 .28-.22.5-.5.5Z"
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
			d="M4 14.96V5.1C4 3.4 5.39 2 7.1 2h9.8C18.6 2 20 3.39 20 5.1v13.8c0 1.7-1.39 3.1-3.1 3.1H7.1C5.4 22 4 20.61 4 18.9"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M18.5 13c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-13C4.67 8 4 8.67 4 9.5v2c0 .83.67 1.5 1.5 1.5h8.53M9.5 5h5"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M8.495 17.7h.008M15.495 17.7h.009"
			:stroke="color"
			stroke-width="2.5"
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
			d="M16.9 22H7.1C5.4 22 4 20.61 4 18.9V5.1C4 3.4 5.39 2 7.1 2h9.8C18.6 2 20 3.39 20 5.1v13.8c0 1.71-1.39 3.1-3.1 3.1Z"
			:fill="color"
		></path>
		<path
			d="M20 8H4v5h16V8ZM8 18.748c-.08 0-.16-.01-.24-.02-.08-.02-.16-.04-.24-.08a1.39 1.39 0 0 1-.21-.11c-.07-.05-.14-.1-.19-.16-.24-.23-.37-.55-.37-.88 0-.33.13-.65.37-.88.05-.06.12-.11.19-.16.06-.04.14-.08.21-.11.08-.04.16-.06.24-.08.4-.08.83.06 1.12.35.24.23.37.55.37.88 0 .33-.13.65-.37.88-.23.24-.55.37-.88.37ZM16 18.749c-.08 0-.16-.01-.24-.02-.08-.02-.16-.04-.24-.08a1.39 1.39 0 0 1-.21-.11c-.07-.05-.14-.1-.19-.16-.24-.23-.37-.55-.37-.88 0-.33.13-.65.37-.88.05-.06.12-.11.19-.16.06-.04.14-.08.21-.11.08-.04.16-.06.24-.08.16-.03.32-.03.49 0 .07.02.15.04.23.08.07.03.15.07.21.11.07.05.14.1.19.16.24.23.37.55.37.88 0 .33-.13.65-.37.88-.05.06-.12.11-.19.16-.06.04-.14.08-.21.11-.08.04-.16.06-.23.08-.09.01-.17.02-.25.02ZM14.5 5.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
			d="M16.9 22H7.1C5.4 22 4 20.61 4 18.9V5.1C4 3.4 5.39 2 7.1 2h9.8C18.6 2 20 3.39 20 5.1v13.8c0 1.71-1.39 3.1-3.1 3.1Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M18.5 13h-13c-.83 0-1.5-.67-1.5-1.5v-2C4 8.67 4.67 8 5.5 8h13c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M8.495 17.7h.008M15.495 17.7h.009"
			:stroke="color"
			stroke-width="2.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M9.5 5h5"
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
			d="M16.9 22.75H7.1c-2.12 0-3.85-1.73-3.85-3.85V5.1c0-2.12 1.73-3.85 3.85-3.85h9.8c2.12 0 3.85 1.73 3.85 3.85v13.8c0 2.12-1.73 3.85-3.85 3.85Zm-9.8-20c-1.29 0-2.35 1.05-2.35 2.35v13.8c0 1.29 1.05 2.35 2.35 2.35h9.8c1.29 0 2.35-1.05 2.35-2.35V5.1c0-1.29-1.05-2.35-2.35-2.35H7.1Z"
			:fill="color"
		></path>
		<path
			d="M18.5 13.75h-13c-1.24 0-2.25-1.01-2.25-2.25v-2c0-1.24 1.01-2.25 2.25-2.25h13c1.24 0 2.25 1.01 2.25 2.25v2c0 1.24-1.01 2.25-2.25 2.25Zm-13-5c-.41 0-.75.34-.75.75v2c0 .41.34.75.75.75h13c.41 0 .75-.34.75-.75v-2c0-.41-.34-.75-.75-.75h-13ZM8 18.748c-.33 0-.65-.13-.88-.37-.06-.05-.11-.12-.16-.19a1.39 1.39 0 0 1-.11-.21c-.04-.08-.06-.16-.08-.24-.01-.08-.02-.16-.02-.24 0-.08.01-.16.02-.24.02-.08.04-.16.08-.24.03-.07.07-.15.11-.21.05-.07.1-.14.16-.19.46-.47 1.29-.47 1.76 0 .06.05.11.12.16.19.04.06.08.14.11.21.04.08.06.16.08.24.01.08.02.16.02.24 0 .08-.01.16-.02.24-.02.08-.04.16-.08.24-.03.07-.07.15-.11.21-.05.07-.1.14-.16.19-.23.24-.55.37-.88.37ZM16 18.748c-.33 0-.65-.13-.88-.37-.24-.23-.37-.55-.37-.88 0-.33.13-.65.37-.88.46-.47 1.3-.47 1.76 0 .24.23.37.55.37.88 0 .33-.13.65-.37.88-.23.24-.55.37-.88.37ZM14.5 5.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
			d="M16.9 22H7.1C5.4 22 4 20.61 4 18.9V5.1C4 3.4 5.39 2 7.1 2h9.8C18.6 2 20 3.39 20 5.1v13.8c0 1.71-1.39 3.1-3.1 3.1Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M18.5 13h-13c-.83 0-1.5-.67-1.5-1.5v-2C4 8.67 4.67 8 5.5 8h13c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5Z"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M9.5 5h5"
			:stroke="color"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			opacity=".4"
			d="M8.495 17.7h.008M15.495 17.7h.009"
			:stroke="color"
			stroke-width="2.5"
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
