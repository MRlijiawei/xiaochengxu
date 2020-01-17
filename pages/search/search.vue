<template>
	<view>
		<!-- #ifdef MP -->
		<text @tap="gotoSearchList">搜索框</text>
		<!-- #endif -->
		<mainCard headTitle="热门搜索" bodyImg="/static/images/katong1.jpg"></mainCard>
		<!-- 多色按钮 -->
		<tags :tags="dataTags"></tags>
		<devider></devider>
		<card headTitle="分类标签">
			<tags :tags="dataTags" :noboder="true"></tags>
		</card>
		<card headTitle="搜索记录">
			<tags :tags="dataTags" :noboder="true"></tags>
		</card>
	</view>
</template>

<script>
	import mainCard from '@/components/common/card.vue'
	import tags from '@/components/common/tags.vue'
	export default {
		components:{
			mainCard,
			tags
		},
		data() {
			return {
				dataTags: [{
					name: '赵钱孙李'
				},{
					name: '宝塔河妖'
				},{
					name: '天王地虎'
				},{
					name: 'xxxx'
				}]
			}
		},
		methods: {
			// 兼容小程序
			gotoSearchList(e) {
				console.log(e);
				// #ifndef MP
				if (e.index !== 0) {
					return false
				}
				// #endif
				uni.navigateTo({
					url:'../searchList/searchList'
				})
				
			}
		},
		onNavigationBarButtonTap(e) {
			this.gotoSearchList(e)
		}
	}
</script>

<style>

</style>
