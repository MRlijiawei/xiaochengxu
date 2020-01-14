<template>
	<view class="uni-flex uni-row j-sb">
		<block v-for="(item,index) in searchList" :key="index" @tap="gotoDetail(item)">
			<view style="width:372.5upx;overflow: hidden;">
				<image :src="item.img" mode="widthFix" lazy-load></image>
				<view class="p-2">
					<view class="f14">{{item.title}}</view>
					<text class="d-b uni-text-small uni-text-gray">{{item.desc}}</text>
					<view class="d-flex">
						<price>{{item.pprice}}</price>
						<view class="uni-text-small uni-text-gray line-through m-l-1 a-self-e">￥{{item.oprice}}</view>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import price from '@/components/common/price.vue'
	export default {
		components:{
			price
		},
		props:{
			searchList: Array
		},
		methods:{
			gotoDetail(item) {
				uni.navigateTo({
					url:'/pages/detail/detail?id=' + (item.id||''),
					// 参数
				})
			}
		}
	}
</script>

<style>
</style>
