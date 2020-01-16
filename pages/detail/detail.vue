<template>
	<view>
		<swiperComp :res="good.imgs" height="750" preview></swiperComp>
		<view class="px-20">
			<view class="f20 f-weight">{{good.title}}</view>
			<view class="f16 font-muted mb-auto">{{good.tags.join(' / ')}}</view>
			<price>{{good.price}}</price>
			<view class="f12 font-muted">{{good.saleNum}} 月销量  {{good.rate}}%满意度</view>
		</view>
		<scroll-view scroll-x class="scroll-view">
			<!-- <view class="scroll-view-item ">1234</view>
			<view class="scroll-view-item">1234</view>
			<view class="scroll-view-item">1234</view>
			<view class="scroll-view-item">1234</view>
			<view class="scroll-view-item">1234</view>
			<view class="scroll-view-item">1234</view>
			<view class="scroll-view-item">1234</view>
			<view class="scroll-view-item">1234</view>
			<view class="scroll-view-item">1234</view>
			<view class="scroll-view-item">1234</view>
			<view class="scroll-view-item">1234</view>
			<view class="scroll-view-item">1234</view>
			<view class="scroll-view-item">1234</view> -->
		</scroll-view>
		<view class="px-20 bd-light-secondary">
			<uniListItem title="123" note='123111'></uniListItem>
		</view>
		<view class="py-20">
			<wxParse :content="good.detail" @preview="preview" @navigate="navigate"></wxParse>
		</view>
	</view>
</template>

<script>
	import swiperComp from '@/components/swiperComp/swiperComp.vue'
	import price from '@/components/common/price.vue'
	import uniListItem from '@/components/uni/uni-list-item/uni-list-item.vue'
	import wxParse from '@/components/uni/uParse/src/wxParse.vue'
	var htmlInner = '<div class="s-pic-content">'+
		'<ul class="s-news-content-imgs clearfix">'+'<li class="item-img-wrap">'+
		'<a href="https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_10316883135909038921%22%7D&amp;n_type=0&amp;p_from=1" target="_blank" data-click="LOG_LINK">'+
		'<img class="s-news-img" src="../../static/images/sqlist6.jpg" height="119" width="179"></a>'+
		'</li><li class="item-img-wrap"><a href="https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_10316883135909038921%22%7D&amp;n_type=0&amp;p_from=1" target="_blank" data-click="LOG_LINK">'+
		'<img class="s-news-img" src="../../static/images/sqlist5.jpg" height="119" width="179"></a>'+
		'</li><li class="item-img-wrap"><a href="https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_10316883135909038921%22%7D&amp;n_type=0&amp;p_from=1" target="_blank" data-click="LOG_LINK">'+
		'<img class="s-news-img" src="../../static/images/sqlist1.webp" height="119" width="179"> </a></li></ul></div>'

	export default {
		components:{
			swiperComp,
			price,
			uniListItem,
			wxParse
		},
		data() {
			return {
				good: {
					imgs: [{
						src: "../../static/images/sqlist2.jpg"
					},{
						src: "../../static/images/sqlist3.jpg"
					},{
						src: "../../static/images/sqlist4.jpg"
					}],
					title: '智能5G手环',
					price: 520,
					saleNum: 2019,
					rate: 90,
					tags:['智能联网','一键管理','为所欲为','功能齐全','货真价实'],
					detail: htmlInner
				}
			}
		},
		onBackPress() {
			// 在点击了其他操作如预览和加购时点返回直接退出了详情页问题解决
			return true// 即可阻止默认返回。if()判断有其他框时阻止，并关闭相应的框即可
		},
		methods: {
			navigate() {
				
			},
			preview() {
				
			}
		}
	}
</script>

<style>

</style>
