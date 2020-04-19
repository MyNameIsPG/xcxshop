<template>
	<view>
		<view>
			<view>
				<view class="header"><image src="../../static/img/qa.png"></image></view>
				<view class="content">
					{{ isCanUse }}
					<view>申请获取以下权限</view>
					<text>获得你的公开信息(昵称，头像、地区等)</text>
				</view>
				<button class="bottom" type="primary" open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">授权登录</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			SessionKey: '',
			OpenId: '',
			userInfo: {},
			isCanUse: uni.getStorageSync('isCanUse') || false //默认为true
		};
	},
	onLoad() {
		// 默认加载
		this.wxGetUserInfo();
	},
	methods: {
		wxGetUserInfo() {
			let _this = this;
			uni.login({
				provider: 'weixin',
				success: resCode => {
					console.log('获取到code  ' + resCode.code);
					// 获取到微信的用户信息
					if (!_this.isCanUse) {
						// 第一授权获取用户信息===》按钮触发
						uni.getUserInfo({
							provider: 'weixin',
							success: res => {
								_this.userInfo = res.userInfo;
								uni.setStorageSync('userInfo', JSON.stringify(res.userInfo));
								try {
									uni.setStorageSync('isCanUse', true); //记录是否第一次授权  false:表示不是第一次授权
								} catch (e) {}
								uni.showLoading({
									title: '登录中！'
								});
								setTimeout(() => {
									uni.navigateTo({
										url: `/pages/home/home`
									});
								}, 500);
							},
							fail(res) {
								console.log(res);
							}
						});
					} else {
						uni.showLoading({
							title: '直接登录！'
						});
						setTimeout(() => {
							uni.navigateTo({
								url: `/pages/home/home`
							});
						}, 500);
					}
				},
				fail(res) {
					console.log(res);
				}
			});
		}
	}
};
</script>

<style>
.header {
	margin: 90rpx 0 90rpx 50rpx;
	border-bottom: 1px solid #ccc;
	text-align: center;
	width: 650rpx;
	height: 300rpx;
	line-height: 450rpx;
}

.header image {
	width: 200rpx;
	height: 200rpx;
}

.content {
	margin-left: 50rpx;
	margin-bottom: 90rpx;
}

.content text {
	display: block;
	color: #9d9d9d;
	margin-top: 40rpx;
}

.bottom {
	border-radius: 80rpx;
	margin: 70rpx 50rpx;
	font-size: 35rpx;
}
</style>
