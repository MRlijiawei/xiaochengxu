import Vue from 'vue'
import App from './App'
// 全局组件
import devider from '@/components/common/devider.vue'
import card from '@/components/common/card.vue'
import fontLoading from '@/components/common/fontLoading.vue'
import cssLoading from '@/components/common/cssLoading.vue'

Vue.component('devider', devider)
Vue.component('card', card)
Vue.component('fontLoading', fontLoading)
Vue.component('cssLoading', cssLoading)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
