<template>
	<view>
		<uni-form-add class="uni-form" :model="form" :rules="rules" @submit="submitForm">
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					商品名称
				</view>
				<view class="uni-form-item__content"><input v-model="form.Name" class="uni-input__inner" placeholder="请输入商品名称" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">商品类型</view>
				<view class="uni-form-item__content"><input v-model="form.FAGId" class="uni-input__inner" placeholder="请输入商品类型" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">是否商品大类</view>
				<view class="uni-form-item__content"><uni-switch v-model="form.IsFamily"></uni-switch></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">是否销售</view>
				<view class="uni-form-item__content"><uni-switch v-model="form.IsSelling"></uni-switch></view>
			</view>
		</uni-form-add>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				Name: '',
				FAGId: '',
				IsFamily: false,
				IsSelling: false
			},
			rules: {
				Name: {
					required: '',
					message: '请输入商品名称'
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
