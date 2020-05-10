<template>
	<view>
		<uni-form-add class="uni-form" :model="form" :rules="rules" add-interface="AppPyType">
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					名称
				</view>
				<view class="uni-form-item__content"><input v-model="form.name" class="uni-input__inner" placeholder="请输入名称" /></view>
			</view>
		</uni-form-add>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name: ''
			},
			rules: {
				name: {
					required: '',
					message: '请输入姓名'
				}
			}
		};
	}
};
</script>

<style lang="stylus">

</style>
