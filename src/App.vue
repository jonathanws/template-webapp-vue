<template>
	<!-- This tag turns into either a <default-layout /> or <fullscreen-layout /> component.
	This is based off of setting the meta.layout property on any of the routes in router.js-->
	<component :is="layout" class="app">
		<router-view />
	</component>
</template>

<script>
export default {
	computed: {
		layout() {
			return `${this.$route.meta.layout || 'default'}-layout`
		},
	},
}
</script>

<style lang="scss">
@import './styles/global-styles.scss';
</style>
