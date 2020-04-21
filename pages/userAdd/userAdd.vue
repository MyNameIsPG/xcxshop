<template>
	<view>
		<form @submit="formSubmit" class="uni-form">
			<view class="uni-form-item">
				<view class="uni-form-item__label">姓名</view>
				<view class="uni-form-item__content"><input v-model="name" class="uni-input__inner" name="input" placeholder="请输入姓名" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">手机号</view>
				<view class="uni-form-item__content"><input v-model="phone" class="uni-input__inner" name="input" placeholder="请输入手机号" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">身份证</view>
				<view class="uni-form-item__content"><input class="uni-input__inner" name="input" placeholder="请输入身份证" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">银行卡</view>
				<view class="uni-form-item__content"><input class="uni-input__inner" name="input" placeholder="请输入银行卡" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-button__content"><button class="uni-button uni-button__primary" form-type="submit">新增</button></view>
			</view>
		</form>
	</view>
</template>

<script>
export default {
	data() {
		return {
			name: '11111',
			phone: ''
		};
	},
	methods: {
		formSubmit: function(e) {
			console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value));
			var formdata = e.detail.value;
			uni.showModal({
				content: '表单数据内容：' + JSON.stringify(formdata),
				showCancel: false
			});
		}
	}
};
</script>

<style lang="stylus">

</style>
