<template>
	<view>
		<uni-form-add class="uni-form" :model="form" :rules="rules" @submit="submitForm">
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					客户名称
				</view>
				<view class="uni-form-item__content">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{ array[index] }}</view>
					</picker>
					<!-- <input v-model="form.ACName" class="uni-input__inner" placeholder="请输入姓名" /> -->
				</view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					付款方式
				</view>
				<view class="uni-form-item__content"><input v-model="form.PTName" type="number" class="uni-input__inner" placeholder="请输入手机号" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					成交价格
				</view>
				<view class="uni-form-item__content"><input v-model="form.RealPrice" type="number" class="uni-input__inner" placeholder="请输入身份证" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					当时价格
				</view>
				<view class="uni-form-item__content"><input v-model="form.Price" type="number" class="uni-input__inner" placeholder="请输入身份证" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					实际数量
				</view>
				<view class="uni-form-item__content"><input v-model="form.Count" type="number" class="uni-input__inner" placeholder="请输入身份证" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					成交数量
				</view>
				<view class="uni-form-item__content"><input v-model="form.RealCount" type="number" class="uni-input__inner" placeholder="请输入身份证" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					成交减免金额
				</view>
				<view class="uni-form-item__content"><input v-model="form.DeductionMoney" type="number" class="uni-input__inner" placeholder="请输入身份证" /></view>
			</view>
		</uni-form-add>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				APUId: '', // 采购人
				APUName: '', //采购人姓名
				ASId: '', // 供应商标识
				ASName: '', // 供应商姓名
				AGId: '', // 采购物品
				AGName: '', // 物品名称
				Price: '', // 采购价格
				Count: '', // 采购量
				IsPay: false, // 已付 运费 和 货款
				IsPayFreight: false, // 已付运费
				IsPFG: false, // 已付货款
				IsNoBatch: false // 不记批次
			},
			index: 0,
			array: ['中国', '美国', '巴西', '日本'],
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
	methods: {
		submitForm: function(param) {
			uni.showModal({
				content: '表单数据内容：' + JSON.stringify(param),
				showCancel: false
			});
		},
		bindPickerChange(e) {
			this.index = e.target.value;
		}
	}
};
</script>

<style lang="stylus">

</style>
