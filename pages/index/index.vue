<template>
	<view>
		<!-- #ifdef MP -->
		<text @tap="gotoSearch">导航栏</text>
		<!-- #endif -->
		<!-- 选项卡 -->
		<scroll-view scroll-x="true" class="scroll-view" style="height: 80rpx;" :scroll-into-view="scrollInto" scroll-with-animation show-scrollbar="false">
			<view class="scroll-view-item" style="height: 80rpx;line-height: 80rpx;"
			v-for="(item,index) in tabBars" :key="index"
			@click="changeTab(index)"
			:id="'tab'+index"
			>
				<text class="f14 px-10"
			:class="tabIndex===index?'main-text-color bd-bottom-main-color':''">{{item.name}}</text>
			</view>
		</scroll-view>
		<swiper :duration="150" :current="tabIndex" :style="'height: '+scrollH+'px;'" @change="swipTab">
			<swiper-item v-for="(item,index) in tabBars" :key="index">
				<scroll-view scroll-y="true" :style="'height: '+scrollH+'px;'">
					<!-- TODO 下边的模块都放进后，实现不同分类的统一展现形式，需要设计好数据的格式 -->
					<!-- 轮播图 -->
					<swiperComp :res="swiperImgs"></swiperComp>
					<!--分类-->
					<items :dataArr="itemList"></items>
					<!--分割-->
					<devider></devider>
					<!--广告图高530，宽对半-->
					<advThree :dataObj="threeAdv"></advThree>
					
					<devider></devider>
					<!-- 卡片 -->
					<card bodyImg="/static/images/img1.jpg" headTitle="Card 1"></card>
					<!-- <card>
						<block slot="title">Card One</block>
						<block slot="body">Body One</block>
					</card> -->
					<!-- 公共列表 -->
					<commonList :searchList="searchList"></commonList>
				</scroll-view>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	import swiperComp from '@/components/swiperComp/swiperComp.vue'
	import items from '@/components/itemsComp/itemsComp.vue'
	import advThree from '@/components/adv/advThree.vue'
	import commonList from '@/components/common/commonList.vue'
	/* import card from '@/components/common/card.vue' */
	export default {
		components:{
			swiperComp,
			items,
			advThree,
			commonList
			//card
		},
		data() {
			return {
				title: 'Hello',
				scrollH: 500,
				scrollInto: 'tab0',
				tabIndex:0,
				tabBars: [
					{
						name: '小班'
					},
					{
						name: '大班'
					},
					{
						name: '幼儿园'
					},
					{
						name: '小学'
					},
					{
						name: '初中'
					},
					{
						name: '高中'
					},
					{
						name: '大学'
					},
					{
						name: '研究生'
					},
					{
						name: '博士'
					},
					{
						name: '博士后'
					},
					{
						name: '博导'
					}
				],
				swiperImgs: [{
					src: "../../static/images/img1.jpg"
				},{
					src: "../../static/images/img2.jpg"
				},{
					src: "../../static/images/img3.jpg"
				}],
				itemList: [
					{
						src: 'data:image/jpeg;base64,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',
						desc: 'model1'
					},
					{
						src: 'data:image/jpeg;base64,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',
						desc: 'model2'
					},
					{
						src: 'data:image/jpeg;base64,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',
						desc: 'model3'
					},
					{
						src: 'data:image/jpeg;base64,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',
						desc: 'model4'
					},
					{
						src: 'data:image/jpeg;base64,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',
						desc: 'model5'
					},
					{
						src: 'data:image/jpeg;base64,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',
						desc: 'model6'
					},
					{
						src: 'data:image/jpeg;base64,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',
						desc: 'model7'
					},
					{
						src: 'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2760321135,1640872053&fm=58',
						desc: 'model8'
					},
					{
						src: 'data:image/jpeg;base64,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',
						desc: 'model9'
					},
					{
						src: 'data:image/jpeg;base64,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',
						desc: 'model10'
					}
				],
				threeAdv: {
					left: {
						src: '/static/images/left1.jpg'
					},
					right1: {
						src: '/static/images/right1.jpg'
					},
					right2: {
						src: '/static/images/right2.jpg'
					} 
				},
				midCard:{
					title: 'Card1',
					img: '/static/images/card1.jpg'
				},
				searchList: [
					{
						img: '/static/images/card1.jpg',
						title: 'Num1',
						desc:'xasdxsd',
						oprice: '212',
						pprice: '121'
					},
					{
						img: '/static/images/right2.jpg',
						title: 'Num2',
						desc:'xasdxsd',
						oprice: '222',
						pprice: '121'
					}
				]
			}
		},
		onNavigationBarSearchInputClicked() {
			this.gotoSearch()
		},
		onLoad() {
			// 获取可视区域高度
			uni.getSystemInfo({
				success: (res) => {
					this.scrollH = res.windowHeight - uni.upx2px(82)
				}
			})
			this._initPage()
			/* uni.onNavigationBarSearchInputClicked(()=>{
				uni.navigateTo({
					url:'../search/search'
				})
			}) */
		},
		// 上拉onReachBottom
		// 下拉刷新
		onPullDownRefresh() {
			uni.showLoading({
			    title: '加载中。。。'  
			})
			setTimeout(()=>{
				this.searchList = this.searchList.concat(this.searchList)
				uni.stopPullDownRefresh()
				uni.hideLoading()
			}, 500)
		},
		methods: {
			_initPage() {
				uni.showLoading({
				    title: '加载中。。。'  
				})
				setTimeout(()=>{
					uni.hideLoading()
				}, 500)
			},
			gotoSearch() {
				uni.navigateTo({
					url:'../search/search'
				})
			},
			changeTab(index) {
				if (this.tabIndex === index) return
				this.tabIndex = index
				this.scrollInto = 'tab' + index
				// 切换的时候查询data或者统一查询好
				uni.showLoading({  
				    title: '加载中。。。'  
				})
				setTimeout(()=>{
					uni.hideLoading()
				}, 500)
			},
			swipTab(e) {
				this.changeTab(e.detail.current)
			}
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
