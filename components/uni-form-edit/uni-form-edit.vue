<template>
	<form class="uni-form">
		<slot></slot>
		<view class="uni-form-item">
			<view class="uni-button__content" style="width: 100%;overflow: hidden;">
				<button class="uni-button uni-button__primary" style="width: calc(50% - 5px); float: left;" @click="submit">修改</button>
				<button class="uni-button uni-button__danger" style="width: calc(50% - 5px); float: right;" @click="del">删除</button>
			</view>
		</view>
	</form>
</template>

<script>
/*
 * required = '' 必填
 * type = 'phone' 验证手机号格式
 * type = 'cardnum' 验证身份证号格式
 */
export default {
	name: 'uniFormEdit',
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
					let value = this.model[key];
					let required = this.rules[key].required;
					let type = this.rules[key].type;
					let message = this.rules[key].message ? this.rules[key].message : '字段不能为空';
					if (value == required) {
						uni.showModal({
							content: message,
							showCancel: false
						});
						return false;
					}
					if (type == 'phone') {
						let resuleMsg = this.isPoneAvailable(value);
						if (!resuleMsg) {
							uni.showModal({
								content: '手机号码格式不正确',
								showCancel: false
							});
							return false;
						}
					}
					if (type == 'cardnum') {
						let resuleMsg = this.isCardNumAvailabel(value);
						if (!resuleMsg) {
							uni.showModal({
								content: '身份证格式不正确',
								showCancel: false
							});
							return false;
						}
					}
				}
			}
			this.$emit('submit', this.model);
		},
		del() {
			this.$emit('del', this.model);
		},
		isPoneAvailable(value) {
			var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if (!myreg.test(value)) {
				return false;
			} else {
				return true;
			}
		},
		isCardNumAvailabel(value) {
			var myreg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
			if (!myreg.test(value)) {
				return false;
			} else {
				return true;
			}
		}
	}
};
</script>

<style></style>
