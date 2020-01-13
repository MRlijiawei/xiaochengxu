<template>
	<view class="px-10 mb10">
		<!-- #ifdef MP-WEIXIN -->
		<view class="px-10 py-10 d-i-b m10" :class="{'bd-5':!noboder}" v-for="(tag,index) in tags" :key="index">{{tag.name}}</view>
		<!-- #endif -->
		<!-- #ifndef MP-WEIXIN -->
		<view class="px-10 py-10 d-i-b m10" :class="{'bd-5':!noboder}" :style="getStyle()" v-for="(tag,index) in tags" :key="index">{{tag.name}}</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		props:{
			tags:Array,
			noboder:Boolean
		},
		methods:{
			getStyle() {
				if (this.noboder) {
					return 'background-color:#f5f5f5'
				}
				// 这里用了随机反色，实际开发中需要规定好颜色范围的
				let rc = Math.floor(Math.random()*16777215)
				let rvc = Math.floor(16777215 - rc)
				let randomColor = rc.toString(16)
				let revRC = rvc.toString(16)
				return `background-color:#${randomColor};border-color:#${revRC}`
			}
		}
	}
</script>

<style>
</style>
