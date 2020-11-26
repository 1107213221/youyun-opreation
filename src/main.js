import Vue from 'vue';
import ElementUI from 'element-ui';
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/element-variables.scss';
import 'babel-polyfill';

import VueQrcode from '@chenfengyuan/vue-qrcode';
import router from './router';
import App from './App.vue';
import * as g from './libs/global';

// 权限控制
import './libs/directive/permission';
// 公共css
import './assets/css/basic.scss';
import './assets/css/utils.scss';
import './assets/css/scrollBar.scss';
import './assets/img/icon-font/iconfont.css';

Vue.prototype.$EventBus = new Vue();

const echarts = require('echarts/lib/echarts');

// 引入柱状图
require('echarts/lib/chart/line');
require('echarts/lib/chart/bar');
require('echarts/lib/chart/pie');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

Vue.prototype.$echarts = echarts;

Vue.prototype.$store = store;

store.dispatch('saveWebsocketOption');
store.dispatch('setAdvertType', 0);

Vue.use(ElementUI, {
  size: 'small'
});

Vue.component(VueQrcode.name, VueQrcode);
// 挂全局方法
Vue.prototype.$g = g;
setWindowAttribute('g', g);
window.g = g;

Vue.config.productionTip = false;
Vue.mixin({
  beforeCreate() {
    if (document.getElementsByClassName("el-tooltip__popper").length > 0) {
      for (const node of document.getElementsByClassName("el-tooltip__popper")) {
        document.body.removeChild(node)
      }
    }
  },
  created() {
    const includeKeepAlive = this.$g.utils.deepClone(this.$store.state.admin.includeKeepAlive);
    const keepAlive = (this.$g.utils.isObj(this.$route) && this.$g.utils.isObj(this.$route.meta)) ? this.$route.meta.keepAlive : "";
    if (keepAlive && keepAlive === this.$options.name && includeKeepAlive.indexOf(this.$options.name) === -1) {
      includeKeepAlive.push(this.$options.name)
      this.$store.dispatch('saveKeepAlive', includeKeepAlive)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  render: (h) => h(App),
  store,
  router
}).$mount('#app');

function setWindowAttribute ($attr, $value) {
  if (typeof $attr !== 'string' || typeof $value !== 'object') {
    throw new Error('参数类型不对!');
  }

  if (process.env.NODE_ENV === 'development') {
    window[$attr] = $value;
  }
}
