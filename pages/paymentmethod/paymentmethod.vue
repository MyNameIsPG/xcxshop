<template>
	<view class="container">
		<view class="container-list" v-if="userList.length > 0">
			<view class="item" v-for="item in userList" :key="item.pytId" @click="handleClickDetails(item.pytId)">
				<view class="right">
					<view class="row row-lines">
						<view class="name">{{ item.name }}</view>
					</view>
				</view>
			</view>
		</view>
		<uni-nodata v-else></uni-nodata>
		<uni-add @add-btn-click="addBtnClick"></uni-add>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userList: []
		};
	},
	created() {
		this.getList(0);
	},
	methods: {
		refreshList() {
			this.getList(0);
		},
		async getList(num) {
			const data = await this.$request({
				url: `AppPyWay/List/${num}`
			});
			this.userList = JSON.parse(data);
		},
		addBtnClick() {
			uni.navigateTo({
				url: `/pages/paymentmethodAdd/paymentmethodAdd`
			});
		},
		handleClickDetails(id) {
			uni.navigateTo({
				url: `/pages/paymentmethodDetails/paymentmethodDetails?id=${id}`
			});
		}
	}
};
</script>

<style lang="stylus">
.container
	position relative
	.container-list
		background #FFFFFF
		.item
			border-bottom 1px solid #EEEEEE
			padding 10rpx 20rpx
			box-sizing border-box
			display flex
			position relative
			&::after
				position absolute
				content '\e6b0'
				right 0rpx
				top 12rpx
				font-family 'iconfont'
				font-size 28px
				color #999
				transform rotate(90deg)
			.left
				width 80rpx
				height 80rpx
				border 1px solid #F1F1F1
				box-sizing border-box
				border-radius 50%
				overflow hidden
				margin-right 10px
				display flex
				justify-content center
				align-items center
				color #FFFDEF
				font-size 14px
			.right
				flex 1
				display flex
				align-items center
				height 80rpx
				.row
					color #999
					font-size 28rpx
					.text
						color #333333
				.row-lines
					display flex
					align-items center
					.name
						color #000000
						font-size 30rpx
						font-weight 600
						flex 1
</style>
