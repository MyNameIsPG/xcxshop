<template>
	<view>
		<view class="order-item">
			<view class="i-top b-b"><text class="time">2019-04-06 11:37</text></view>
			<view class="goods-box-single">
				<image class="goods-img" src="http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg"></image>
				<view class="right">
					<text class="title clamp">古黛妃 短袖t恤女 春夏装2019新款韩版宽松</text>
					<text class="attr-box">珊瑚粉 M x 1</text>
					<text class="price">179.5</text>
				</view>
			</view>
			<view class="price-box">
				共
				<text class="num">7</text>
				件商品 实付款
				<text class="price">143.7</text>
			</view>
			<view class="action-box">
				<button class="action-btn">取消订单</button>
				<button class="action-btn recom">立即支付</button>
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
		.goods-img
			display block
			width 120upx
			height 120upx
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
				&:before
					content '￥'
					font-size 20rpx
					margin 0 2upx 0 8upx
	.price-box
		display flex
		justify-content flex-end
		align-items baseline
		padding 20upx 30upx
		font-size 24rpx
		color #909399
		.num
			margin 0 8upx
			color #303133
		.price
			font-size 26rpx
			color #303133
			&:before
				content '￥'
				font-size 20rpx
				margin 0 2upx 0 8upx
	.action-box
		display flex
		justify-content flex-end
		align-items center
		height 100upx
		position relative
		padding-right 30upx
		&::after
			top 0
			position absolute
			z-index 3
			left 0
			right 0
			height 0
			content ''
			-webkit-transform scaleY(0.5)
			transform scaleY(0.5)
			border-bottom 1px solid #E4E7ED
		.action-btn
			width 160upx
			height 60upx
			margin 0
			margin-left 24upx
			padding 0
			text-align center
			line-height 60upx
			font-size 24rpx
			color #303133
			background #fff
			border-radius 100px
			&:after
				border-radius 100px
			&.recom
				background #fff9f9
				color #fa436a
				&:after
					border-color #f7bcc8
</style>
