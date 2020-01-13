<template>
	<view class="d-flex f-wap">
		<view v-for="(rd,index) in radioItem" :key="index" class="px-20 py-10 font-muted t-center m-20 bd-2 br-10"
		@tap="changeRadio(index)" :class="{'actived':rd.checked}">{{rd.name}}</view>
	</view>
</template>

<script>
	export default {
		props:{
			radioItem: Array,
			type: String
		},
		methods:{
			changeRadio(index) {
				if (this.radioItem[index].checked && this.type==='single') return
				if (this.type==='multi') {
					this.radioItem[index].checked = !this.radioItem[index].checked
					return
				}
				this.radioItem.forEach(e => {e.checked = false})
				this.radioItem[index].checked = true
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
