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

		<view class="list-bar" v-for="(item, index) in menuList" :key="index">
			<view class="list-bar-title">
				<i :class="item.icon"></i>
				{{ item.title }}
			</view>
			<view class="list-bar-body" :class="item.layout">
				<view class="item" v-for="(i, k) in item.children" :key="k" @click="handleClickBaseBtn(i.path, i.parent)">
					<i :class="i.icon"></i>
					{{ i.title }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			menuList: [
				{
					title: '基础',
					layout: 'item6',
					layoutColor: '',
					icon: 'icon iconfont icon-jichu',
					children: [
						{
							title: '人员',
							icon: 'icon iconfont icon-renyuan',
							path: 'user'
						},
						{
							title: '客户',
							icon: 'icon iconfont icon-kehu',
							path: 'customer'
						},
						{
							title: '供应商',
							icon: 'icon iconfont icon-gongyingshang',
							path: 'supplier'
						},
						{
							title: '商品',
							icon: 'icon iconfont icon-shangpin',
							path: 'goods'
						},
						{
							title: '付款方式',
							icon: 'icon iconfont icon-fukuan1',
							path: 'paymentmethod'
						},
						{
							title: '支付类别',
							icon: 'icon iconfont icon-zhichu',
							path: 'expenseCategory'
						}
					]
				},
				{
					title: '核心',
					layout: 'item6',
					layoutColor: '',
					icon: 'icon iconfont icon-hexinshangye',
					children: [
						{
							title: '价格',
							icon: 'icon iconfont icon-RectangleCopy33',
							path: 'price'
						},
						{
							title: '销售',
							icon: 'icon iconfont icon-RectangleCopy121',
							path: 'order'
						},
						{
							title: '采购',
							icon: 'icon iconfont icon-RectangleCopy32',
							path: 'store'
						},
						{
							title: '入库',
							icon: 'icon iconfont icon-RectangleCopy131',
							path: 'inStore'
						},
						{
							title: '库存',
							icon: 'icon iconfont icon-RectangleCopy127',
							path: 'stock'
						},
						{
							title: '批次利润',
							icon: 'icon iconfont icon-lirun',
							path: 'profit'
						},
						{
							title: '订单',
							icon: 'icon iconfont icon-RectangleCopy223',
							path: 'orderList'
						},
						{
							title: '退货',
							icon: 'icon iconfont icon-RectangleCopy118',
							path: 'returnGoods'
						}
					]
				},
				{
					title: '支出',
					layout: 'item5',
					layoutColor: '',
					icon: 'icon iconfont icon-zhichu1',
					children: [
						{
							title: '支出明细',
							icon: 'icon iconfont icon-zanwuzhichumingxi',
							path: ''
						},
						{
							title: '定期支出',
							icon: 'icon iconfont icon-dingqi',
							path: ''
						},
						{
							title: '工资',
							icon: 'icon iconfont icon-gongzi',
							path: ''
						}
					]
				},
				{
					title: '账务',
					layout: 'item5',
					layoutColor: '',
					icon: 'icon iconfont icon-zhangdan',
					children: [
						{
							title: '应收',
							icon: 'icon iconfont icon-if__',
							path: ''
						},
						{
							title: '应付',
							icon: 'icon iconfont icon-list_yingfukuan',
							path: ''
						},
						{
							title: '客户对账',
							icon: 'icon iconfont icon-duizhang',
							path: ''
						},
						{
							title: '供应商对账',
							icon: 'icon iconfont icon-RectangleCopy99',
							path: ''
						}
					]
				},
				{
					title: '运营',
					layout: 'item5',
					layoutColor: '',
					icon: 'icon iconfont icon-baobiao',
					children: [
						{
							title: '日报',
							icon: 'icon iconfont icon-ribao2',
							path: 'day',
							parent: 'statistics'
						},
						{
							title: '周报',
							icon: 'icon iconfont icon-zhoubao2',
							path: 'week',
							parent: 'statistics'
						},
						{
							title: '月报',
							icon: 'icon iconfont icon-yuebao',
							path: 'month',
							parent: 'statistics'
						},
						{
							title: '年报',
							icon: 'icon iconfont icon-nianbao',
							path: 'year',
							parent: 'statistics'
						}
					]
				}
			],
			userInfo: JSON.parse(uni.getStorageSync('userInfo'))
		};
	},
	onLoad() {
		console.log('我是首页');
	},
	methods: {
		handleClickBaseBtn(path, parent) {
			if (path) {
				if(parent) {
					uni.navigateTo({
						url: `/pages/${parent}/${path}/${path}`
					});
				} else {
					uni.navigateTo({
						url: `/pages/${path}/${path}`
					});
				}
			}
		}
	}
};
</script>

<style lang="stylus">
.container
	position relative
	.header-bar
		position relative
		height 200rpx
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
			padding 30rpx 30rpx 0 30rpx
			box-sizing border-box
			display flex
			flex-wrap wrap
			align-items center
			.item
				flex 0 0 16.66%
				font-size 28rpx
				color #404040
				text-align center
				margin-bottom 30rpx
				&:active
					background #EEEEEE
					border-radius 10rpx
				.icon
					font-size 46rpx
					margin-bottom 10rpx
					color #0077AA
		.item5
			.item
				flex 0 0 25%
		.item6
			.item
				flex 0 0 25%
</style>
