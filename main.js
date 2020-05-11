import Vue from 'vue'
import App from './App'
import "./static/font/iconfont.css"
import "./static/style/common-form.styl"
import uniAdd from "./components/uni-add/uni-add"
import uniFormAdd from "./components/uni-form-add/uni-form-add.vue"
import uniFormEdit from "./components/uni-form-edit/uni-form-edit.vue"
import uniSwitch from "./components/uni-switch/uni-switch.vue"
import uniNodata from "./components/uni-nodata/uni-nodata.vue"

import {
	apiRequest
} from "./api/index.js"
Vue.prototype.$request = apiRequest

Vue.config.productionTip = false

Vue.component("uniAdd", uniAdd);
Vue.component("uni-form-add", uniFormAdd);
Vue.component("uni-form-edit", uniFormEdit);
Vue.component("uni-switch", uniSwitch);
Vue.component("uni-nodata", uniNodata);

const prePage = ()=>{
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}

Vue.prototype.$api = {prePage}

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
