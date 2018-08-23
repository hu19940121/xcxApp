import Vue from 'vue'
import App from './App'
import {http} from '@/utils/http.js'
import {apis} from '@/utils/apis.js'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.http = http
Vue.prototype.apis = apis
const app = new Vue(App)
app.$mount()
