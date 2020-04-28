<template>
	<view class="qiun-columns">
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas
				canvas-id="canvasColumn"
				id="canvasColumn"
				class="charts"
				:width="cWidth * pixelRatio"
				:height="cHeight * pixelRatio"
				:style="{ width: cWidth + 'px', height: cHeight + 'px' }"
				@touchstart="touchColumn"
			></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" @touchstart="touchColumn"></canvas>
			<!--#endif-->
		</view>
	</view>
</template>

<script>
import uCharts from '../../../components/u-charts/u-charts.js';
import { isJSON } from '../../../common/checker.js';
var _self;
var canvaColumn = null;
export default {
	data() {
		return {
			cWidth: '',
			cHeight: '',
			pixelRatio: 1,
			textarea: ''
		};
	},
	onLoad() {
		_self = this;
		//#ifdef MP-ALIPAY
		uni.getSystemInfo({
			success: function(res) {
				if (res.pixelRatio > 1) {
					//正常这里给2就行，如果pixelRatio=3性能会降低一点
					//_self.pixelRatio =res.pixelRatio;
					_self.pixelRatio = 2;
				}
			}
		});
		//#endif
		this.cWidth = uni.upx2px(750);
		this.cHeight = uni.upx2px(500);
		this.getServerData();
	},
	methods: {
		getServerData() {
			let Column = { categories: [], series: [] };
			//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
			Column.categories = ["2013", "2014", "2015", "2016", "2017", "2018"]
			Column.series = [{
        "name": "新成交量3",
        "data": [35, 36, 31, 33, 13, 34]
      }, {
        "name": "新成交量4",
        "data": [18, 27, 21, 24, 6, 28]
      }]
			_self.textarea = JSON.stringify(Column);
			_self.showColumn('canvasColumn', Column);
		},
		showColumn(canvasId, chartData) {
			canvaColumn = new uCharts({
				$this: _self,
				canvasId: canvasId,
				type: 'column',
				padding: [15, 5, 0, 15],
				legend: {
					show: true,
					padding: 5,
					lineHeight: 11,
					margin: 0
				},
				fontSize: 11,
				background: '#FFFFFF',
				pixelRatio: _self.pixelRatio,
				animation: true,
				categories: chartData.categories,
				series: chartData.series,
				xAxis: {
					disableGrid: true
				},
				yAxis: {
					data: [
						{
							position: 'right',
							axisLine: false,
							format: val => {
								return val.toFixed(0) + '元';
							}
						}
					]
				},
				dataLabel: true,
				width: _self.cWidth * _self.pixelRatio,
				height: _self.cHeight * _self.pixelRatio,
				extra: {
					column: {
						type: 'group',
						width: (_self.cWidth * _self.pixelRatio * 0.45) / chartData.categories.length
					}
				}
			});
		},
		touchColumn(e) {
			canvaColumn.showToolTip(e, {
				format: function(item, category) {
					if (typeof item.data === 'object') {
						return category + ' ' + item.name + ':' + item.data.value;
					} else {
						return category + ' ' + item.name + ':' + item.data;
					}
				}
			});
			canvaColumn.touchLegend(e, { animation: true });
		}
	}
};
</script>

<style>
/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
.qiun-charts {
	width: 750upx;
	height: 500upx;
	background-color: #ffffff;
}

.charts {
	width: 750upx;
	height: 500upx;
	background-color: #ffffff;
}
</style>
