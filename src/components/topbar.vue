<template>
	<div class="topbar">
		<div class="logo link">
			<router-link :to="pages.HOME" tag="div">
				<h2>Template Webapp Vue</h2>
			</router-link>
		</div>

		<div class="links">
			<router-link
				v-for="({ text, to }, index) in links"
				tag="div"
				:key="index"
				:to="to"
				class="link"
			>{{ text }}</router-link>
		</div>
	</div>
</template>

<script>
import { pages } from '@/constants/paths'

export default {
	name: 'topbar',
	data: () => ({
		links: [{ text: 'Home', to: pages.HOME }],
		pages,
	}),
}
</script>

<style lang="scss" scoped>
@import '../styles/_global-constants';
@import '../styles/_screen-sizes';

.topbar {
	display: flex;
	align-items: center;
	height: $topbar-size;
	padding: 0 32px;
}

.logo {
	color: $accent-color;
}

.links {
	display: flex;
	justify-content: flex-end;
	flex-grow: 1;
	.link {
		display: flex;
		align-items: center;
		padding: 16px;
		&:not(:last-of-type) {
			margin-right: 16px;
		}
		// When the link matches the view the user is currently viewing
		&.router-link-exact-active {
			$border-size: 6px;
			border-bottom: $border-size solid $accent-color;
			margin-top: $border-size;
		}
	}
}

.link {
	&:hover {
		cursor: pointer;
	}
}
</style>
