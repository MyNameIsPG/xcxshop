<template>
	<view>
		<uni-form-add class="uni-form" :model="form" :rules="rules" add-interface="AppInOrder">
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					采购人
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
					供应商
				</view>
				<view class="uni-form-item__content">
					<picker @change="bindPickerChange1" :range="appSuppliersList" :value="appSuppliersListIndex" range-key="name">
						<view class="uni-input">{{ appSuppliersList[appSuppliersListIndex].name }}</view>
					</picker>
				</view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					采购物品
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
					采购价格
				</view>
				<view class="uni-form-item__content"><input v-model="form.price" type="number" class="uni-input__inner" placeholder="请输入采购价格" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">
					<sup>*</sup>
					采购量
				</view>
				<view class="uni-form-item__content"><input v-model="form.count" type="number" class="uni-input__inner" placeholder="请输入采购量" /></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">是否支付</view>
				<view class="uni-form-item__content"><uni-switch v-model="form.isPay"></uni-switch></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">已付运费</view>
				<view class="uni-form-item__content"><uni-switch v-model="form.isPayFreight"></uni-switch></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">已付货款</view>
				<view class="uni-form-item__content"><uni-switch v-model="form.isPFG"></uni-switch></view>
			</view>
			<view class="uni-form-item">
				<view class="uni-form-item__label">不记批次</view>
				<view class="uni-form-item__content"><uni-switch v-model="form.isNoBatch"></uni-switch></view>
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
			// 供应商
			appSuppliersList: [],
			appSuppliersListIndex: 0,
			// 商品
			appGoodsList: [],
			appGoodsListIndex: 0,
			form: {
				apuId: '',
				apuName: '',
				asId: '',
				asName: '',
				agId: '',
				agName: '',
				price: 0,
				count: 0,
				isPay: true,
				isPayFreight: true,
				isPFG: true,
				isNoBatch: true
			},
			rules: {}
		};
	},
	created() {
		this.getUserList(0);
		this.getAppSuppliersList(0);
		this.getAppGoodsList(0);
	},
	methods: {
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
			this.form.apuId = this.apuNameList[this.apuNameListIndex].auId;
			this.form.apuName = this.apuNameList[this.apuNameListIndex].auName;
		},
		async getAppSuppliersList(num) {
			const data = await this.$request({
				url: `AppSuppliers/List/${num}`
			});
			let obj = {
				asId: '',
				name: '请选择'
			};
			let arr = JSON.parse(data);
			arr.unshift(obj);
			this.appSuppliersList = arr;
		},
		bindPickerChange1(e) {
			this.appSuppliersListIndex = e.target.value;
			this.form.asId = this.appSuppliersList[this.appSuppliersListIndex].asId;
			this.form.asName = this.appSuppliersList[this.appSuppliersListIndex].name;
		}
	}
};
</script>

<style lang="stylus">

</style>
