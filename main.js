import Vue from 'vue'
import App from './App'
import "./static/font/iconfont.css"
import "./static/style/common-form.styl"
import uniAdd from "./components/uni-add/uni-add"
import uniFormAdd from "./components/uni-form-add/uni-form-add.vue"
import uniFormEdit from "./components/uni-form-edit/uni-form-edit.vue"
import uniSwitch from "./components/uni-switch/uni-switch.vue"

Vue.config.productionTip = false

Vue.use(uniAdd)
Vue.use(uniFormAdd)
Vue.use(uniFormEdit)
Vue.use(uniSwitch)

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
