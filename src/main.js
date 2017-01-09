import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router'

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({routes: routerConfig})
//console.log('');
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
