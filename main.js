import Vue from 'vue'
import App from './App'
// 全局组件
import devider from '@/components/common/devider.vue'
import card from '@/components/common/card.vue'

Vue.component('devider', devider)
Vue.component('card', card)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
