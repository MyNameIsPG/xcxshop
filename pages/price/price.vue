<template>
	<view>
		<view class="search-bar">
			<view class="search-bar-input"><input type="text" placeholder="请选择时间" /></view>
			<view class="search-bar-btn"><text>查询</text></view>
		</view>
		<view class="datetime">
			当前日期：
			<text>2020-04-20</text>
		</view>
		<view class="table-list">
			<view class="table-list-head">
				<view class="item1 item">商品名称</view>
				<view class="item2 item">今天价格</view>
				<view class="item3 item">上次价格</view>
			</view>
			<view class="table-list-body">
				<view class="table-list-body-item">
					<view class="item1 item">大白鱼</view>
					<view class="item2 item"><input value="28.10" /></view>
					<view class="item3 item">30.00</view>
				</view>
				<view class="table-list-body-item">
					<view class="item1 item">大白鱼</view>
					<view class="item2 item"><input value="28.10" /></view>
					<view class="item3 item">30.00</view>
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
.datetime
	background #FFFFFF
	height 80rpx
	padding 0 20rpx
	font-size 28rpx
	color #666666
	display flex
	align-items center
	text
		color #333333
		font-weight 600
.table-list
	background #FFFFFF
	font-size 24rpx
	border-top 1px solid #EEEEEE
	.table-list-head
		display flex
		height 60rpx
		line-height 60rpx
		text-align center
		color #666
		font-size 26rpx
		border-bottom 1px solid #EEEEEE
		.item
			padding 0 10rpx
			box-sizing border-box
			font-weight 600
	.table-list-body
		.table-list-body-item
			display flex
			text-align center
			align-items center
			color #333333
			font-size 24rpx
			border-bottom 1px solid #EEEEEE
			.item
				padding 20rpx 10rpx
				box-sizing border-box
			.item3
				color #888
	.item1
		width 60%
		text-align left
	.item2
		width 20%
		border-left 1px solid #EEEEEE
		border-right 1px solid #EEEEEE
		input
			font-size 24rpx
			color #000
			padding 0px
	.item3
		width 20%
.search-bar
	padding 10rpx 20rpx
	box-sizing border-box
	display flex
	align-items center
	background #FFFFFF
	border-bottom 1px solid #EEEEEE
	.search-bar-input
		flex 1
		margin-right 20rpx
		input
			-webkit-appearance none
			background-color #ccc
			box-sizing border-box
			display inline-block
			height 30px
			line-height 30px
			outline none
			padding 0 15px
			transition border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)
			width 100%
			border none
			font-size 30rpx
			color #FFFFFF
			border-radius 30px
	.search-bar-btn
		width 90rpx
		text
			color #fff
			background-color #409eff
			border-color #409eff
			font-size 12px
			border-radius 4px
			width 100%
			height 30px
			display flex
			justify-content center
			align-items center
</style>
