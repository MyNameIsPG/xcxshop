import Vue from 'vue'
import App from './App'
import "./static/font/iconfont.css"
import "./static/style/common-form.styl"
import uniAdd from "./components/uni-add/uni-add"
import uniFormAdd from "./components/uni-form-add/uni-form-add.vue"

Vue.config.productionTip = false

Vue.use(uniAdd)
Vue.use(uniFormAdd)

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
