<template>
	<view class="d-flex bd-top" style="height: 100%;box-sizing: border-box;">
		<!-- <fontLoading v-show="loadingShow"></fontLoading> -->
		<cssLoading v-show="loadingShow"></cssLoading>
		<scroll-view scroll-y style="flex: 1;height: 100%;" class="bd-right" :scroll-top="leftTop" id="leftScroller" scroll-with-animation @scroll="scrollLeft">
			<view>
				<view v-for="(cls,i) in classes" :key="i" class="bd-bottom py-20 t-center left-scroller-items"
				:class="{'actived':classIndex===i}" @tap="changeIndex(i)" hover-class="bg-light">{{cls.name}}</view>
			</view>
		</scroll-view>
		<scroll-view scroll-y style="flex: 3.5;height: 100%;" :scroll-top="rightTop" scroll-with-animation @scroll="scrollRight">
			<view class="row-12 d-flex f-wap right-scroller-items" v-for="(goodL,gi) in goodList" :key="gi">
				<view class="col-12-4 py-20" v-for="(good,i) in goodL.list" :key="i" @tap="gotoDetail(good)">
					<image :src="good.src" mode="widthFix" class="w-90"></image>
					<text class="d-b t-center">{{good.name}}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				leftDom:[],
				rightDom:[],
				leftTop: 0,
				rightTop: 0,
				classIndex: 0,
				classes: [],
				goodList: [],
				loadingShow: false
			}
		},
		onLoad() {
			this._initData({})
		},
		onReady() {
			const qy = uni.createSelectorQuery().in(this)
			qy.selectAll('.left-scroller-items').boundingClientRect(data => {
				this.leftDom = data.map(e => e.top)
			}).exec(function(){
				
			})
			qy.selectAll('.right-scroller-items').boundingClientRect(data => {
				this.rightDom = data.map(e => e.top)
				console.log(this.rightDom);
			}).exec(function(){
				
			})
		},
		methods: {
			_initData(param) {
				/* uni.showLoading({
				    title: '加载中。。。'  
				}) */
				this.loadingShow = true
				setTimeout(()=>{
					// uni.hideLoading()
					this.loadingShow = false
				}, 500)
				for(let i=0;i<20;i++) {
					this.classes.push({
						name: `分类${i+1}`
					})
					this.goodList.push({
						list: []
					})
					for(let j=0;j<20;j++) {
						const rdn = Math.ceil(Math.random()*5)
						this.goodList[i].list.push({
							name: `分类${i+1}商品${j+1}`,
							src: '/static/images/sqlist' + rdn + (rdn === 1?'.webp':'.jpg')
						})
					}
				}
			},
			changeIndex(i) {
				if (this.classIndex === i) return
				this.classIndex = i
				// this._initData()此为动态查，不自动滚动，下为自动滚动
				// this.rightTop = this.rightDom[i]// TODO目前的高度和实际尺寸不对应，相差一倍和几像素，不知原因？？？upx和px转化差？？
				// this.rightTop = (this.rightDom[i]-28*i)/2晚上在模拟器试一下
				this.rightTop = this.rightDom[i]
			},
			async scrollLeft(e) {
				this.leftTop = e.detail.scrollTop
			},
			async scrollRight(e) {
				/* this.rightDom.forEach((d,i) => {
					if (d<e.detail.scrollTop) {// 感觉条件有点绕，但是效果确实是对的。不过和上边一样，有两倍的差
						this.classIndex = i
						return false
					}
				}) */// 但是这种循环实际return false是跳不出的，上边课程里的代码的思路是错的。下边的代码是我自己写的
				this.rightTop = e.detail.scrollTop
				for (let i=1,len=this.rightDom.length;i<len;i++) {
					if (this.rightDom[i] > e.detail.scrollTop) {
						this.classIndex = i - 1// (i - 1) || 0在i=0时会显示异常// (i - 1) ?? 0目前??还不支持，为减少判断，将for的i起点改成1
						// 如果此时该分类不可见
						// const vh = 0等于0时的效果是固定在上边
						const qy = uni.createSelectorQuery().in(this),_that = this
						qy.select('#leftScroller').fields({
							size: true,
							// scrollOffset: true
						},data => {
							const vh = data.height
							// vh:滚动区域高度，小于--在下边
							if ((_that.leftTop + vh) < _that.leftDom[_that.classIndex]) {
								_that.leftTop = _that.leftDom[_that.classIndex + 1] - vh
							} else if (_that.leftTop > _that.leftDom[_that.classIndex]) {
								// 大于，在上边
								_that.leftTop = _that.leftDom[_that.classIndex]
							}
						}).exec(function(){
							
						})
						break
					}
				}
			},
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
.actived {
	border-left: 8upx solid #FD6801;
	color: #FD6801;
}
</style>
