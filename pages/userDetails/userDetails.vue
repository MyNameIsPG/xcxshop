<template>
	<view>
		<uni-form-edit class="uni-form" :model="form" :rules="rules" :uid="uid" query-one-interface="AppUser" edit-interface="AppUser">
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					姓名
				</view>
				<view class="uni-form-item__content"><input v-model="form.AUName" class="uni-input__inner" placeholder="请输入姓名" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					手机号
				</view>
				<view class="uni-form-item__content"><input v-model="form.AUPhone" type="number" class="uni-input__inner" placeholder="请输入手机号" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					身份证
				</view>
				<view class="uni-form-item__content"><input v-model="form.AUIdCard" type="number" class="uni-input__inner" placeholder="请输入身份证" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">管理员</view>
				<view class="uni-form-item__content"><uni-switch v-model="form.IsAdmin"></uni-switch></view>
			</view>
		</uni-form-edit>
	</view>
</template>

<script>
export default {
	data() {
		return {
			uid: '',
			form: {
				AUName: '',
				AUPhone: '',
				AUIdCard: '',
				IsAdmin: true
			},
			rules: {
				AUName: {
					required: '',
					message: '请输入姓名'
				},
				AUPhone: {
					required: '',
					type: 'phone',
					message: '请输入手机号'
				},
				AUIdCard: {
					required: '',
					type: 'cardnum',
					message: '请输入身份证'
				}
			}
		};
	},
	onLoad(option) {
		console.log(option.id)
	}
};
</script>

<style></style>
