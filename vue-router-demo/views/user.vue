<template>
	<div>{{ $route.params.id }}</div>
</template>
<script type="text/javascript">
	export default {
		mounted() {
			console.log(this.$route);
		}
	}
</script>