<template>
	<div>
		<v-title title="Vue标题组件"></v-title>
		<v-button @click="handleClick">点击按钮</v-button>
		<p>
			<img src="../images/image.png" style="width: 200px;" />
		</p>
	</div>
</template>

<script>
	import vTitle from './title.vue';
	import vButton from './button.vue';

	export default {
		components: {
			vTitle,
			vButton
		},
		methods: {
			handleClick (e) {
				alert("You get me!");
			}
		}
	}
</script>