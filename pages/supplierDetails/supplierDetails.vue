<template>
	<view>
		<uni-form-edit class="uni-form" :model="form" :rules="rules" @submit="submitForm">
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					姓名
				</view>
				<view class="uni-form-item__content"><input v-model="form.Name" class="uni-input__inner" placeholder="请输入姓名" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					手机号
				</view>
				<view class="uni-form-item__content"><input v-model="form.Phone" type="number" class="uni-input__inner" placeholder="请输入手机号" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					身份证
				</view>
				<view class="uni-form-item__content"><input v-model="form.IdCard" type="number" class="uni-input__inner" placeholder="请输入身份证" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">银行卡号</view>
				<view class="uni-form-item__content"><input v-model="form.BankId" type="number" class="uni-input__inner" placeholder="请输入银行卡号" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">开户行名称</view>
				<view class="uni-form-item__content"><input v-model="form.BankName" class="uni-input__inner" placeholder="请输入开户行名称" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">地址</view>
				<view class="uni-form-item__content"><textarea v-model="form.Address" class="uni-input__inner" placeholder="请输入地址" /></view>
			</view>
		</uni-form-edit>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				Name: '1232',
				Phone: '',
				IdCard: '',
				BankId: '',
				BankName: '招商',
				Address: ''
			},
			rules: {
				Name: {
					required: '',
					message: '请输入姓名'
				},
				Phone: {
					required: '',
					type: 'phone',
					message: '请输入手机号'
				},
				IdCard: {
					required: '',
					type: 'cardnum',
					message: '请输入身份证'
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
