<template>
	<div class="home-page">
		<welcome-summary />
	</div>
</template>

<script>
import welcomeSummary from '../components/welcome-summary'

export default {
	name: 'homePage',
	components: {
		welcomeSummary,
	},
}
</script>

<style lang="scss" scoped>
@import '../styles/_global-constants';
@import '../styles/_screen-sizes';

.home-page {
	width: 100%;
	padding: 16px;
}

@include for-size($tablet-landscape-up) {
	.home-page {
		width: 75%;
	}
}
@include for-size($desktop-up) {
	.home-page {
		width: 50%;
	}
}
</style>
