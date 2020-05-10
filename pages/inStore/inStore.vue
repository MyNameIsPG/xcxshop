<template>
	<view>
		<uni-form-add class="uni-form" :model="form" :rules="rules" add-interface="AppInStore">
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
				<view class="uni-form-item__label">
					<sup>*</sup>
					金额
				</view>
				<view class="uni-form-item__content"><input v-model="form.money" type="number" class="uni-input__inner" placeholder="请输入金额" /></view>
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
			form: {
				agId: '',
				agName: '',
				price: 0,
				count: 0,
				money: 0,
				auId: '',
				auName: ''
			},
			rules: {
				
			}
		};
	},
	created() {
		this.getUserList(0);
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
			this.form.auId = this.apuNameList[this.apuNameListIndex].auId;
			this.form.auName = this.apuNameList[this.apuNameListIndex].auName;
		},
	}
};
</script>

<style lang="stylus">

</style>
