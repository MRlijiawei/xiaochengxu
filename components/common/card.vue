<template>
	<view><!-- class="uni-card" -->
		<!-- 标题 -->
		<view class="p-2 main-border-color" :class="{'bottom-border':titleBorder}" v-if="headTitle">
			<slot name="title">
				<text class="f20" :class="{'f-weight':titleBold}">{{headTitle}}</text>
			</slot>
		</view>
		<!-- body -->
		<view class="">
			<image v-if="bodyImg" :src="bodyImg" mode="widthFix" lazy-load style="width: 100%;"></image>
			<slot></slot><!-- <template #name>如果插槽指定了name，那么就要对应的name的才能显示。template的name可以是动态的 -->
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			headTitle: {
				type: String,
				default: ''
			},
			bodyImg: {
				type: String,
				default: ''
			},
			titleBold: {
				type: Boolean,
				default: true
			},
			titleBorder: {
				type: Boolean,
				default: true
			}
		}
	}
</script>

<style>
</style>
