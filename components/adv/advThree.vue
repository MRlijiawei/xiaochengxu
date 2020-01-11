<template>
	<view class="d-flex">
		<image :src="dataObj.left.src" lazy-load class="left-adv"></image>
		<view class="d-flex flex-column">
			<image :src="dataObj.right1.src" lazy-load class="right1-adv"></image>
			<image :src="dataObj.right2.src" lazy-load class="right2-adv"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			dataObj: Object
		}
	}
</script>

<style>
	.left-adv {
		width: 374upx;height: 530upx;border-right: 2upx solid #f5f5f5;
	}
	.right1-adv {
		width: 374upx;height: 264upx;border-bottom: 2upx solid #f5f5f5;
	}
	.right2-adv {
		width: 374upx;height: 264upx;
	}
</style>
