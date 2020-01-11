<template>
	<view>
		<scroll-view scroll-x class="scroll-view">
			<view style="width: 200upx;" class="bd scroll-view-item">1</view>
			<view style="width: 200upx;" class="bd scroll-view-item">2</view>
			<view style="width: 200upx;" class="bd scroll-view-item">3</view>
			<view style="width: 200upx;" class="bd scroll-view-item">4</view>
			<view style="width: 200upx;" class="bd scroll-view-item">5</view>
		</scroll-view>
		<view class="uni-row">
			<view class="col-4 d-i-b t-center">1</view>
			<view class="col-4 d-i-b t-center">2</view>
			<view class="col-4 d-i-b t-center">3</view>
			<view class="col-4 d-i-b t-center">4</view>
			<view class="col-4 d-i-b t-center">5</view>
			<view class="col-4 d-i-b t-center">6</view>
			<view class="col-4 d-i-b t-center">11</view>
			<view class="col-4 d-i-b t-center">22</view>
			<view class="col-4 d-i-b t-center">33</view>
			<view class="col-4 d-i-b t-center">44</view>
			<view class="col-4 d-i-b t-center">55</view>
			<view class="col-4 d-i-b t-center">66</view>
		</view>
		<view class="d-flex bg-white bd-top p-f b-0 l-0 r-0" style="height: 90upx;">
			<view class="flex-1 d-flex j-center a-center flex-column">
				<view class="iconfont icon-like l-h-1"></view>
				收藏
			</view>
			<view class="flex-1 d-flex j-center a-center flex-column">
				<view class="iconfont icon-saomiao l-h-1"></view>
				购物车
			</view>
			<view style="flex:2.5" class="t-white main-bg-color d-flex j-center a-center" hover-class="main">加入购物车</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
