<template>
	<view class="uni-row m-20 d-flex f-wap">
		<block v-for="(item,index) in dataArr" :key="index">
			<view class="col-4 t-center d-flex flex-column f-center py-20">
				<image :src="item.src" mode="widthFix" style="width: 60upx;height: 60upx;"></image>
				<text class="f12">{{item.desc}}</text>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			dataArr: Array
		}
	}
</script>

<style>
</style>
