<template>
	<view class="container">
		<view class="container-list" v-if="userList.length > 0">
			<view class="item" v-for="item in userList" :key="item.acId" @click="handleClickDetails(item.acId)">
				<view class="left" :style="{ background: getColorIndex }">张</view>
				<view class="right">
					<view class="row row-lines">
						<view class="name">{{ item.auName }}</view>
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
			userList: [],
			colorArr: ['#409EFF', '#67C23A', '#00FFFF', '#F08080', '#FFE4E1', '#FFC0CB', '#F4A460', '#9ACD32', '#87CEFA', '#FF7F50']
		};
	},
	computed: {
		getColorIndex(inex) {
			let r, g, b;
			r = Math.floor(Math.random() * 256);
			g = Math.floor(Math.random() * 256);
			b = Math.floor(Math.random() * 256);
			return 'rgb(' + r + ',' + g + ',' + b + ')';
		}
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
				url: `AppCustomer/List/${num}`
			});
			this.userList = JSON.parse(data);
		},
		addBtnClick() {
			uni.navigateTo({
				url: `/pages/customerAdd/customerAdd`
			});
		},
		handleClickDetails(id) {
			uni.navigateTo({
				url: `/pages/customerDetails/customerDetails?id=${id}`
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
