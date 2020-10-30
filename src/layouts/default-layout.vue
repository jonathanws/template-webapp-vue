<template>
	<div class="default-layout">
		<topbar />

		<div class="side-and-content">
			<div class="main-content" :class="routeAlign">
				<slot />
			</div>
		</div>
	</div>
</template>

<script>
import topbar from '@/components/topbar.vue'

export default {
	components: {
		topbar,
	},
	data: () => ({
		routeAlign: '',
	}),
	mounted() {
		if (this.$route.meta.align) {
			this.routeAlign = this.$route.meta.align
		}
	},
}
</script>

<style lang="scss" scoped>
@import '../styles/global-constants.scss';

.default-layout {
	height: 100%;
}

.side-and-content {
	display: flex;
	height: calc(100% - #{$topbar-size});
	.main-content {
		flex-grow: 1;
		display: flex;
		&.center {
			justify-content: center;
		}
		&.left {
			justify-content: start;
		}
	}
}
</style>
