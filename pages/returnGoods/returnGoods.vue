<template>
	<view>
		<uni-form-add class="uni-form" :model="form" :rules="rules" add-interface="AppReIn">
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					商品名称
				</view>
				<view class="uni-form-item__content">
					<picker @change="bindPickerChange2" :range="appGoodsList" :value="appGoodsListIndex" range-key="name">
						<view class="uni-input">{{ appGoodsList[appGoodsListIndex].name }}</view>
					</picker>
				</view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					客户名称
				</view>
				<view class="uni-form-item__content">
					<picker @change="bindPickerChange1" :range="appCustomerList" :value="appCustomerListIndex" range-key="auName">
						<view class="uni-input">{{ appCustomerList[appCustomerListIndex].auName }}</view>
					</picker>
				</view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					操作人
				</view>
				<view class="uni-form-item__content">
					<picker @change="bindPickerChange" :range="apuNameList" :value="apuNameListIndex" range-key="auName">
						<view class="uni-input">{{ apuNameList[apuNameListIndex].auName }}</view>
					</picker>
				</view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					价格
				</view>
				<view class="uni-form-item__content"><input v-model="form.price" type="number" class="uni-input__inner" placeholder="请输入价格" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					数量
				</view>
				<view class="uni-form-item__content"><input v-model="form.count" type="number" class="uni-input__inner" placeholder="请输入数量" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">是否支付</view>
				<view class="uni-form-item__content"><uni-switch v-model="form.isPay"></uni-switch></view>
			</view>
		</uni-form-add>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 采购人
			apuNameList: [],
			apuNameListIndex: 0,
			// 商品
			appGoodsList: [],
			appGoodsListIndex: 0,
			// 客户
			appCustomerList: [],
			appCustomerListIndex: 0,
			form: {
				agId: '', // 商品Id
				agName: '', //商品名称
				price: '', // 价格
				count: '', // 数量
				acId: '', // 客户Id
				acName: '', // 客户名称
				auId: '', //操作人Id
				auName: '', //操作人姓名
				isPay: true // 已付
			},
			rules: {}
		};
	},
	created() {
		this.getAppGoodsList(0);
		this.getUserList(0);
		this.getAppCustomerList(0);
	},
	methods: {
		async getAppCustomerList(num) {
			const data = await this.$request({
				url: `AppCustomer/List/${num}`
			});
			let obj = {
				acId: '',
				auName: '请选择'
			};
			let arr = JSON.parse(data);
			arr.unshift(obj);
			this.appCustomerList = arr;
		},
		bindPickerChange1(e) {
			this.appCustomerListIndex = e.target.value;
			this.form.acId = this.appCustomerList[this.appCustomerListIndex].acId;
			this.form.acName = this.appCustomerList[this.appCustomerListIndex].auName;
		},
		async getAppGoodsList(num) {
			const data = await this.$request({
				url: `AppGoods/List/${num}`
			});
			let obj = {
				agId: '',
				name: '请选择'
			};
			let arr = JSON.parse(data);
			arr.unshift(obj);
			this.appGoodsList = arr;
		},
		bindPickerChange2(e) {
			this.appGoodsListIndex = e.target.value;
			this.form.agId = this.appGoodsList[this.appGoodsListIndex].agId;
			this.form.agName = this.appGoodsList[this.appGoodsListIndex].name;
		},
		bindPickerChange2(e) {
			this.appGoodsListIndex = e.target.value;
			this.form.agId = this.appGoodsList[this.appGoodsListIndex].agId;
			this.form.agName = this.appGoodsList[this.appGoodsListIndex].name;
		},
		async getUserList(num) {
			const data = await this.$request({
				url: `AppUser/List/${num}`
			});
			let obj = {
				auId: '',
				auName: '请选择'
			};
			let arr = JSON.parse(data);
			arr.unshift(obj);
			this.apuNameList = arr;
		},
		bindPickerChange(e) {
			this.apuNameListIndex = e.target.value;
			this.form.auId = this.apuNameList[this.apuNameListIndex].auId;
			this.form.auName = this.apuNameList[this.apuNameListIndex].auName;
		},
	}
};
</script>

<style lang="stylus">

</style>
