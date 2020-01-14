<template>
	<view>
		<view class="d-flex bd-top bd-bottom a-center" style="height: 100upx;">
			<view class="flex-1 d-flex a-center j-center f14 font-muted" v-for="(filter, index) in filterList" :key="index" @tap="changeFilter(index)">
				<text :class="{'main-text-color':index === filterIndex}">{{filter.name}}</text>
				<view>
					<view class="iconfont icon-paixu-shengxu line-h-0" :class="{'main-text-color':filter.status===1&&index === filterIndex}"></view>
					<view class="iconfont icon-paixu-jiangxu line-h-0" :class="{'main-text-color':filter.status===2&&index === filterIndex}"></view>
				</view>
			</view>
			<view class="flex-1 d-flex a-center j-center f14 main-text-color" @tap="showRight=true">
				<text>综合</text>
			</view>
		</view>
		<!-- 抽屉 -->
		<uni-drawer :visible="showRight" mode="right" @close="showRight = false">
			<view class="">
				<card headTitle="服务" :titleBold="false" :titleBorder="false">
					<radio-gp :radioItem="serveRadios" type="single"></radio-gp>
				</card>
				<card headTitle="服务" :titleBold="false" :titleBorder="false">
					<radio-gp :radioItem="serveRadios" type="single"></radio-gp>
				</card>
				<view class="d-flex b-0 p-f r-0 w-100 bd-top bd-light-secondary">
					<view class="flex-1 t-center main-bg-color t-white f14 py-10" hover-class="main-bg-hover-color" @tap="quryWithMore">
						确定
					</view>
					<view class="flex-1 t-center f14 py-10" hover-class="bg-light-secondary" @tap="reset">
						重置
					</view>
				</view>
			</view>
		</uni-drawer>
		<!-- 列表 -->
		<good-list :goods="goodList"></good-list>
	</view>
</template>

<script>
	import uniDrawer from '@/components/uni/uni-drawer/uni-drawer.vue'
	import radioGp from '@/components/common/radioGroup.vue'
	import goodList from '@/components/goodList/goodList.vue'
	export default {
		components: {
			uniDrawer,
			radioGp,
			goodList
		},
		data() {
			return {
				showRight: false,
				filterIndex: 0,
				filterList: [
					{
						name: '综合',
						status: 1// 0默认，1升序，2降序
					},
					{
						name: '销量',
						status: 0// 0默认，1升序，2降序
					},
					{
						name: '价格',
						status: 0// 0默认，1升序，2降序
					}
				],
				serveRadios: [
					{
						name: '打折',// 需要一个code供接口下发
						checked: false
					},
					{
						name: '促销',
						checked: true
					},
					{
						name: '换季',
						checked: false
					},
					{
						name: '批发',
						checked: false
					}
				],
				goodList: [
					{
						id: '1',
						title: '蓝牙耳机',
						img: '/static/images/sqlist1.webp',
						tags: ['时尚','简约','可爱','唯美','蓝牙5.0'],
						price: 250,
						saleNum: 234,
						rate: 95
					},
					{
						id: '2',
						title: '平衡车',
						img: '/static/images/sqlist2.jpg',
						tags: ['时@尚','简@约','可@爱','唯@美','蓝@牙5.0'],
						price: 250,
						saleNum: 234,
						rate: 95
					},
					{
						id: '3',
						title: '阿姆斯特朗回旋加速喷气式阿姆斯特朗炮',
						img: '/static/images/sqlist3.jpg',
						tags: ['阿姆斯特朗','回旋','加速','喷气式','阿姆斯特朗炮'],
						price: 200000,
						saleNum: 2554,
						rate: 95
					},
					{
						id: '4',
						title: '智能音响',
						img: '/static/images/sqlist4.jpg',
						tags: ['时尚','简约','可爱','唯美','蓝牙5.0'],
						price: 200,
						saleNum: 214,
						rate: 93.56
					},
					{
						id: '5',
						title: '降噪耳机',
						img: '/static/images/sqlist5.jpg',
						tags: ['时尚','简约','可爱','唯美','蓝牙5.0'],
						price: 200,
						saleNum: 224,
						rate: 94
					},
					{
						id: '6',
						title: '海景别墅',
						img: '/static/images/sqlist6.jpg',
						tags: ['时尚','简约','可爱','唯美','蓝牙5.0'],
						price: 25000000,
						saleNum: 34,
						rate: 85
					}
				]
			}
		},
		onLoad() {
			this.queryList()
		},
		methods: {
			changeFilter(index) {
				if (this.filterIndex === index) { // this.screen???
					switch (this.filterList[index].status) {
						case 0:
						case 2:
							this.filterList[index].status = 1
							break
						case 1:
							this.filterList[index].status = 2
							break
					}
				} else {
					this.filterIndex = index
					this.filterList[index].status = 1
				}
				// 根据查询条件查询接口
			},
			reset() {
				this.serveRadios.forEach(e => {e.checked = false})
			},
			quryWithMore() {
				// 获取选中的条件，下发请求
				this.queryList({})
				this.showRight = false
			},
			queryList(param) {
				uni.showLoading({
				    title: '加载中。。。'  
				})
				setTimeout(()=>{
					uni.hideLoading()
				}, 500)
			}
		}
	}
</script>

<style>
/* .actived {
	background-color: #fce0d5;
	color: #Eb7320;
	border: 1upx solid #Eb7320;
} */
</style>
