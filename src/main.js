import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 引入echarts
// import echarts from 'echarts'   // 这个会报错
import * as echarts from "echarts";
Vue.prototype.$echarts = echarts

new Vue({
  render: h => h(App),
}).$mount('#app')
