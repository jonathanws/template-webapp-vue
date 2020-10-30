<template>
	<div class="welcome-summary">
		<div>Welcome to the Template Webapp Vue project!</div>
		<div>
			This project includes the very basics to give you a starting point for your
			<a
				href="https://vuejs.org/"
				target="_blank"
			>Vue</a> webapp
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({}),
}
</script>

<style lang="scss" scoped>
@import '../styles/global-styles.scss';

.welcome-summary {
	margin-bottom: 64px;
	> div {
		&:first-of-type {
			color: $accent-color;
		}
		&:not(:last-child) {
			margin-bottom: 16px;
		}
	}
}
</style>
