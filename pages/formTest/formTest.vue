<template>
	<view>
		<uni-form-add :model="form" :rules="rules" @submit="submitForm">
			<view class="uni-form-item">
				<view class="uni-form-item__label">姓名</view>
				<view class="uni-form-item__content"><input v-model="form.name" class="uni-input__inner" placeholder="请输入姓名" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">姓名</view>
				<view class="uni-form-item__content"><input v-model="form.phone" class="uni-input__inner" placeholder="请输入手机号" /></view>
			</view>
		</uni-form-add>

		<uni-add></uni-add>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name: '',
				phone: ''
			},
			rules: {
				name: {
					required: '',
					message: '请输入姓名'
				},
				phone: {
					required: '',
					message: '请输入手机号'
				}
			}
		};
	},
	methods: {
		submitForm: function(param) {
			uni.showModal({
				content: '表单数据内容：' + JSON.stringify(param),
				showCancel: false
			});
		}
	}
};
</script>

<style lang="stylus">

</style>
