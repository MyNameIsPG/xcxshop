<template>
	<view>
		<view class="order-item">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList: [{
					image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",
					image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
					image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
					title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
					price: 179,
					sales: 95,
				}]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="stylus">
.order-item{
		display: flex;
		flex-direction: column;
		padding-left: 30upx;
		background: #fff;
		margin-top: 16upx;
		.goods-box-single
			display: flex;
			padding: 20upx 0;
			.goods-img
				display: block;
				width: 120upx;
				height: 120upx;
			
			.right
				flex: 1;
				display: flex;
				flex-direction: column;
				padding: 0 30upx 0 24upx;
				overflow: hidden;
				.title
					font-size: $font-base + 2upx;
					color: $font-color-dark;
					line-height: 1;
				
				.attr-box
					font-size: $font-sm + 2upx;
					color: $font-color-light;
					padding: 10upx 12upx;
				
				.price
					font-size: $font-base + 2upx;
					color: $font-color-dark;
					&:before
						content: '￥';
						font-size: $font-sm;
						margin: 0 2upx 0 8upx;
</style>1
