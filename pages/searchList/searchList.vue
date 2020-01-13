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
		<view class="d-flex p10 bd-bottom">
			<view class="col-8">
				<image src="../../static/images/card1.jpg" mode="widthFix w-100"></image>
			</view>
			<view class="col-12">
				123123
			</view>
		</view>
	</view>
</template>

<script>
	import uniDrawer from '@/components/uni/uni-drawer/uni-drawer.vue'
	import radioGp from '@/components/common/radioGroup.vue'
	export default {
		components: {
			uniDrawer,
			radioGp
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
				]
			}
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
				
			}
		}
	}
</script>

<style>
.actived {
	background-color: #fce0d5;
	color: #Eb7320;
	border: 1upx solid #Eb7320;
}
</style>
