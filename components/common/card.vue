<template>
	<view class="uni-card">
		<!-- 标题 -->
		<view class="p-2 bottom-border main-border-color" v-if="headTitle">
			<slot name="title">
				<text class="f20 f-weight">{{headTitle}}</text>
			</slot>
		</view>
		<!-- body -->
		<view class="">
			<image v-if="bodyImg" :src="bodyImg" mode="widthFix" lazy-load style="width: 100%;"></image>
			<slot name="body"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			headTitle: String,
			bodyImg: String
		}
	}
</script>

<style>
</style>
