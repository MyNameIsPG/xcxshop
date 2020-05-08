<template>
	<view class="container">
		<view class="container-list">
			<view class="item" v-for="item in userList" :key="item.auId" @click="handleClickDetails(item.auId)">
				<view class="left"><image src="../../static/img/user_default.jpg"></image></view>
				<view class="right">
					<view class="row row-lines">
						<view class="name">{{ item.auName }}</view>
					</view>
					<view class="row">
						手机号码：
						<text class="text">{{ item.auPhone }}</text>
					</view>
					<view class="row">
						身份证号：
						<text class="text">{{ item.auIdCard }}</text>
					</view>
				</view>
			</view>
		</view>
		<uni-add @add-btn-click="addBtnClick"></uni-add>
	</view>
</template>

<script>
import uniAdd from '../../components/uni-add/uni-add.vue';
export default {
	components: {
		uniAdd
	},
	data() {
		return {
			userList: []
		};
	},
	created() {
		this.getUserList(0);
	},
	methods: {
		async getUserList(num) {
			const data = await this.$request({
				url: `AppUser/List/${num}`
			});
			this.userList = JSON.parse(data);
		},
		addBtnClick() {
			uni.navigateTo({
				url: `/pages/userAdd/userAdd`
			});
		},
		handleClickDetails(id) {
			uni.navigateTo({
				url: `/pages/userDetails/userDetails?id=${id}`
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
				top 50%
				font-family 'iconfont'
				font-size 28px
				height 30px
				line-height 30px
				color #999
				margin-top -15px
				transform rotate(90deg)
			.left
				width 80rpx
				height 80rpx
				border 1px solid #F1F1F1
				box-sizing border-box
				border-radius 50%
				overflow hidden
				margin-right 10px
				image
					width 100%
					height 100%
			.right
				flex 1
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
