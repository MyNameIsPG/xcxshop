<template>
	<view>
		<uni-form-add class="uni-form" :model="form" :rules="rules" add-interface="AppCustomer">
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					姓名
				</view>
				<view class="uni-form-item__content"><input v-model="form.auName" class="uni-input__inner" placeholder="请输入姓名" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					手机号
				</view>
				<view class="uni-form-item__content"><input v-model="form.phone" type="number" class="uni-input__inner" placeholder="请输入手机号" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					身份证
				</view>
				<view class="uni-form-item__content"><input v-model="form.idCard" class="uni-input__inner" placeholder="请输入身份证" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">地址</view>
				<view class="uni-form-item__content"><textarea v-model="form.address" class="uni-input__inner" placeholder="请输入地址" /></view>
			</view>
		</uni-form-add>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				auName: '',
				sortName: '',
				idCard: '',
				phone: '',
				sortPhone: '',
				wxId: '',
				address: ''
			},
			rules: {
				auName: {
					required: '',
					message: '请输入姓名'
				},
				phone: {
					required: '',
					type: 'phone',
					message: '请输入手机号'
				},
				idCard: {
					required: '',
					type: 'cardnum',
					message: '请输入身份证'
				}
			}
		};
	}
};
</script>

<style lang="stylus">

</style>
