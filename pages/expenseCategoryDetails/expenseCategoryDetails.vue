<template>
	<view>
		<uni-form-edit class="uni-form" :model="form" :rules="rules" @submit="submitForm">
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					名称
				</view>
				<view class="uni-form-item__content"><input v-model="form.Name" class="uni-input__inner" placeholder="请输入名称" /></view>
			</view>
		</uni-form-edit>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				Name: '123'
			},
			rules: {
				AUName: {
					required: '',
					message: '请输入姓名'
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
