<template>
	<component :is="computedIcon" />
</template>

<script lang="ts" setup>
import { defineAsyncComponent, watchEffect, shallowRef, watch } from "vue";
const props = defineProps({
	iconName: String
});
const computedIcon = shallowRef("");
watchEffect(() => {
	computedIcon.value = defineAsyncComponent(
		() => import(`./icons/${props.iconName}.vue`)
	);
});
watch(
	() => props.iconName,
	() => {
		computedIcon.value = defineAsyncComponent(
			() => import(`./icons/${props.iconName}.vue`)
		);
	}
);
</script>

<style lang="scss" scoped></style>
