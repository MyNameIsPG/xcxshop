<template>
	<view>
		<uni-form-add class="uni-form" :model="form" :rules="rules" add-interface="AppGoods">
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					商品名称
				</view>
				<view class="uni-form-item__content"><input v-model="form.name" class="uni-input__inner" placeholder="请输入商品名称" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">商品类型</view>
				<view class="uni-form-item__content"><input v-model="form.fagId" class="uni-input__inner" placeholder="请输入商品类型" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">是否商品大类</view>
				<view class="uni-form-item__content"><input v-model="form.isFamily" class="uni-input__inner" placeholder="请输入是否商品大类" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">是否销售</view>
				<view class="uni-form-item__content"><uni-switch v-model="form.isSelling"></uni-switch></view>
			</view>
		</uni-form-add>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name: '',
				isFamily: '',
				fagId: '',
				isSelling: true
			},
			rules: {
				name: {
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
