<template>
	<view>
		<uni-form-add class="uni-form" :model="form" :rules="rules" add-interface="AppUser">
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
				<view class="uni-form-item__content"><input v-model="form.auPhone" type="number" class="uni-input__inner" placeholder="请输入手机号" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					身份证
				</view>
				<view class="uni-form-item__content"><input v-model="form.auIdCard" class="uni-input__inner" placeholder="请输入身份证" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">管理员</view>
				<view class="uni-form-item__content"><uni-switch v-model="form.isAdmin"></uni-switch></view>
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
				auIdCard: '',
				auPhone: '',
				isAdmin: true
			},
			rules: {
				auName: {
					required: '',
					message: '请输入姓名'
				},
				auPhone: {
					required: '',
					type: 'phone',
					message: '请输入手机号'
				},
				auIdCard: {
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
