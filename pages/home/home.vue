<template>
	<view class="container">
		<view class="header-bar">
			<view class="header-userinfo">
				<view>
					<image :src="userInfo.avatarUrl"></image>
					<text>{{ userInfo.nickName }}</text>
				</view>
			</view>
		</view>
		<view class="list-bar">
			<view class="list-bar-title">
				<i class="icon iconfont icon-biaoqian"></i>
				基础模块
			</view>
			<view class="list-bar-body">
				<view class="item" @click="handleClickBaseBtn('user')">
					<i class="icon iconfont icon-renyuan"></i>
					人员
				</view>
				<view class="item" @click="handleClickBaseBtn('customer')">
					<i class="icon iconfont icon-kehu"></i>
					客户
				</view>
				<view class="item" @click="handleClickBaseBtn('supplier')">
					<i class="icon iconfont icon-gongyingshang"></i>
					供应商
				</view>
				<view class="item" @click="handleClickBaseBtn('goods')">
					<i class="icon iconfont icon-shangpin"></i>
					商品
				</view>
				<view class="item" @click="handleClickBaseBtn('price')">
					<i class="icon iconfont icon-jiage"></i>
					价格
				</view>
				<view class="item" @click="handleClickBaseBtn('paymentmethod')">
					<i class="icon iconfont icon-fukuan1"></i>
					付款方式
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userInfo: JSON.parse(uni.getStorageSync('userInfo'))
		};
	},
	onLoad() {
		console.log('我是首页');
	},
	methods: {
		handleClickBaseBtn(path) {
			uni.navigateTo({
				url: `/pages/${path}/${path}`
			});
		}
	}
};
</script>

<style lang="stylus">
.container
	position relative
	.header-bar
		position relative
		height 240rpx
		background -webkit-linear-gradient(to bottom right, #f7883b, #f8ba63)
		background -o-linear-gradient(to bottom right, #f7883b, #f8ba63)
		background -moz-linear-gradient(to bottom right, #f7883b, #f8ba63)
		background linear-gradient(to bottom right, #f7883b, #f8ba63)
		.header-userinfo
			height 100%
			padding 0rpx 40rpx
			box-sizing border-box
			display flex
			align-items center
			justify-content center
			image
				width 100rpx
				height 100rpx
				border-radius 50%
				margin 0 auto
				display block
			text
				color #FFFFFF
				margin-left 20rpx
				font-size 30rpx
	.list-bar
		background #fff
		margin-bottom 20rpx
		.list-bar-title
			display flex
			align-items center
			height 80rpx
			padding 0 15rpx
			box-sizing border-box
			font-size 28rpx
			color #000
			border-bottom 1px solid #EEEEEE
			font-weight 600
			.icon
				font-weight normal
		.list-bar-body
			padding 30rpx
			box-sizing border-box
			display flex
			flex-wrap wrap
			align-items center
			.item
				flex 0 0 16.66%
				font-size 28rpx
				color #404040
				text-align center
				&:active
					background #EEEEEE
					border-radius 10rpx
				.icon
					font-size 46rpx
					margin-bottom 10rpx
					color #0077AA
</style>
