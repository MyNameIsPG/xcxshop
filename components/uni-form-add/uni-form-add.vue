<template>
	<form class="uni-form">
		<slot></slot>
		<view class="uni-form-item">
			<view class="uni-button__content"><button class="uni-button uni-button__primary" @click="submit">新增</button></view>
		</view>
	</form>
</template>

<script>
export default {
	name: 'uniFormAdd',
	props: {
		model: {
			type: Object,
			default: {}
		},
		rules: {
			type: Object,
			default: {}
		}
	},
	data() {
		return {};
	},
	methods: {
		submit: function() {
			if (this.rules) {
				for (let key in this.rules) {
					let required = this.rules[key].required;
					let message = this.rules[key].message ? this.rules[key].message : '字段不能为空';
					if (this.model[key] == required) {
						uni.showModal({
							content: message,
							showCancel: false
						});
						return false;
					}
				}
			}
			this.$emit('submit', this.model);
		}
	}
};
</script>

<style></style>
