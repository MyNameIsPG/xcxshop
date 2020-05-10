<template>
	<view v-if="uid">
		<uni-form-edit class="uni-form" :model.sync="form" :rules="rules" :uid="uid" query-one-interface="AppSuppliers" edit-interface="AppSuppliers" delete-interface="AppSuppliers">
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					姓名
				</view>
				<view class="uni-form-item__content"><input v-model="form.name" class="uni-input__inner" placeholder="请输入姓名" /></view>
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
				<view class="uni-form-item__label">银行卡号</view>
				<view class="uni-form-item__content"><input v-model="form.bankId" type="number" class="uni-input__inner" placeholder="请输入银行卡号" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">开户行名称</view>
				<view class="uni-form-item__content"><input v-model="form.bankName" class="uni-input__inner" placeholder="请输入开户行名称" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">地址</view>
				<view class="uni-form-item__content"><textarea v-model="form.address" class="uni-input__inner" placeholder="请输入地址" /></view>
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
				name: '',
				sortName: '',
				idCard: '',
				phone: '',
				sortPhone: '',
				wxId: '',
				address: '',
				bankId: '',
				bankName: ''
			},
			rules: {
				name: {
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
	},
	onLoad(option) {
		this.uid = option.id;
	}
};
</script>

<style lang="stylus">

</style>
