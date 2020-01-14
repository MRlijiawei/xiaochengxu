<template>
	<view>
		<swiperComp :res="imgs" height="750" preview></swiperComp>
	</view>
</template>

<script>
	import swiperComp from '@/components/swiperComp/swiperComp.vue'
	export default {
		components:{
			swiperComp
		},
		data() {
			return {
				imgs: [{
					src: "../../static/images/sqlist2.jpg"
				},{
					src: "../../static/images/sqlist3.jpg"
				},{
					src: "../../static/images/sqlist4.jpg"
				}]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
