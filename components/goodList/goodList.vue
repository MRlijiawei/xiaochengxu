<template>
	<view>
		<view class="d-flex p10 bd-bottom animated fadeIn" v-for="(good,index) in goods" :key="index" @tap="gotoDetail(good)">
			<view class="col-8">
				<image :src="good.img" mode="widthFix" class="w-100" lazy-load></image>
			</view>
			<view class="col-12 pl20 d-flex flex-column">
				<view class="f20 f-weight">{{good.title}}</view>
				<view class="f16 font-muted mb-auto">{{good.tags.join(' / ')}}</view>
				<price>{{good.price}}</price>
				<view class="f12 font-muted">{{good.saleNum}} 月销量  {{good.rate}}%满意度</view>
			</view>
		</view>
	</view>
</template>

<script>
	import price from '@/components/common/price.vue'
	export default {
		components: {
			price
		},
		props:{
			goods: Array
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
