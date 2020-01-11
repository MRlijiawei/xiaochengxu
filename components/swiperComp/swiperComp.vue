<template>
	<view class="">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<block v-for="(item,index) in res" :key="index">
				<swiper-item @tap="clickItem(item)">
					<view class="swiper-item">
						<image :src="item.src" lazy-load style="height: 350upx;width: 100%;"></image>
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			res:Array
		},
		methods:{
			clickItem(img) {
				
			}
		}
	}
</script>

<style>
</style>
