<template>
	<view>
		<view class="order-item">
			<view class="i-top b-b"><text class="time">2019-04-06 11:37</text></view>
			<view class="goods-box-single">
				<view class="right">
					<text class="title clamp">进货批号：21331</text>
					<view class="price">进价总额：<text>512.25</text></view>
					<view class="price">销售总额：<text>514.25</text></view>
					<view class="price">是否盈利：<text class="red">是</text></view>
				</view>
			</view>
		</view>
		<view class="order-item">
			<view class="i-top b-b"><text class="time">2019-04-06 11:37</text></view>
			<view class="goods-box-single">
				<view class="right">
					<text class="title clamp">进货批号：21331</text>
					<view class="price">进价总额：<text>512.25</text></view>
					<view class="price">销售总额：<text>514.25</text></view>
					<view class="price">是否盈利：<text class="green">否</text></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="stylus">
.order-item
	display flex
	flex-direction column
	padding-left 30upx
	background #fff
	margin-top 16upx
	.i-top
		display flex
		align-items center
		height 80upx
		padding-right 30upx
		font-size 24rpx
		color #303133
		position relative
		&::after
			position absolute
			z-index 3
			bottom 0
			left 0
			right 0
			height 0
			content ''
			-webkit-transform scaleY(0.5)
			transform scaleY(0.5)
			border-bottom 1px solid #E4E7ED
	.goods-box-single
		display flex
		padding 20upx 0
		.right
			flex 1
			display flex
			flex-direction column
			padding 0 30upx 0 24upx
			overflow hidden
			.title
				font-size 25rpx
				color #303133
				line-height 1
			.attr-box
				font-size 24rpx
				color #909399
				padding 10upx 12upx
			.price
				font-size 24rpx
				color #303133
</style>
