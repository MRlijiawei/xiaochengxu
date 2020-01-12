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
			<view class="flex-1 d-flex a-center j-center f14 main-text-color">
				<text>综合</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
			}
		}
	}
</script>

<style>

</style>
