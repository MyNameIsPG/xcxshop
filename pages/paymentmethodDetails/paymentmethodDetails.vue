<template>
	<view v-if="uid">
		<uni-form-edit class="uni-form" :model.sync="form" :rules="rules" :uid="uid" query-one-interface="AppPyWay" edit-interface="AppPyWay" delete-interface="AppPyWay">
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					名称
				</view>
				<view class="uni-form-item__content"><input v-model="form.name" class="uni-input__inner" placeholder="请输入名称" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">是否支付</view>
				<view class="uni-form-item__content"><uni-switch v-model="form.isFinshed"></uni-switch></view>
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
				isFinshed: false
			},
			rules: {
				name: {
					required: '',
					message: '请输入姓名'
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
