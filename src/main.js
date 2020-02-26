import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'babel-polyfill';

// import animated from 'animate.css';
import './assets/img/icon-font/iconfont.css'; // icon图
import VueQrcode from '@chenfengyuan/vue-qrcode';
import router from './router';
import App from './App.vue';
import * as g from './libs/global';
// 公共css
import './assets/css/basic.scss';

Vue.prototype.$EventBus = new Vue();


Vue.use(ElementUI, {
    size: 'small',
});

// Vue.use(animated);
Vue.component(VueQrcode.name, VueQrcode);
// 挂全局方法
Vue.prototype.$g = g;
setWindowAttribute('g', g);
window.g = g;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    render: (h) => h(App),
    router,
}).$mount('#app');

function setWindowAttribute ($attr, $value) {
    if (typeof $attr !== 'string' || typeof $value !== 'object') {
        throw new Error('参数类型不对!');
    }

    if (process.env.NODE_ENV === 'development') {
        window[$attr] = $value;
    }
}
