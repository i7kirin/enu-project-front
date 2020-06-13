import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from "./router";
import YmapPlugin from 'vue-yandex-maps'
import './assets/css/main.css'
import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts);
Vue.use(YmapPlugin, {
    apiKey: '70a5ef5a-bf75-4dab-bc93-2556dca96051',
    lang: 'ru_RU',
    coordorder: 'latlong',
    version: '2.1'
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
