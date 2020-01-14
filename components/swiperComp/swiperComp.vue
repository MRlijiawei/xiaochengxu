<template>
	<view class="">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular :style="getHeight">
			<block v-for="(item,index) in res" :key="index">
				<swiper-item @tap="clickItem(item, index)">
					<view class="swiper-item">
						<!-- <image :src="item.src" lazy-load style="height: 350upx;width: 100%;" ></image> -->
						<image :src="item.src" lazy-load :style="getHeight" class="w-100"></image>
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			res:Array,
			height: {
				type: [String, Number],
				default: '350'
			},
			preview: {
				type: Boolean,
				default: false
			}
		},
		computed:{
			getHeight() {
				return `height: ${this.height}rpx`
			},
			urls() {
				return this.res.map(e => e.src)
			}
		},
		methods:{
			clickItem(img, index) {
				if (this.preview) {
					uni.previewImage({
						urls: this.urls,
						current: index,
						indicator:"default"
					})
				}
			}
		}
	}
</script>

<style>
</style>
