// import es6 polyfill
import 'core-js/es6/array';
import 'core-js/es6/string';
import 'core-js/es6/promise';

// import es7 polyfill
import 'core-js/es7/array';
import 'core-js/es7/string';
import 'core-js/es7/promise';

// import business
import './less/index.less';
import './utils/axios';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import store from './ducks';
import { routes } from './schema';
import * as library from './library';
import * as components from './components';
import Env from './utils/env';
import JSBridge from './utils/bridge';
import Filters from './utils/filters';
import { setCookie } from './utils/cookie';
import { removeQuery } from './utils/helper';
import HOSTS from './env.config';

// 写入语言
function setCookies(locale) {
  // APP内通过header传递
  if (!Env.is('app')) {
    setCookie('locale', locale);
    setCookie('language', locale);
  }

  // 同步写入Vuex
  store.dispatch('setLocale', { locale });
}

Vue.use(VueI18n);
Vue.use(VueRouter);

// 工具方法
// AbCdEf => ab-cd-ef
const kebabCase = str => str.replace(/([A-Z])/g, s => '-' + s.toLowerCase()).replace(/^-/, '');

// 自动注册
Object.keys(components).forEach(name => {
  Vue.component(`ex-${kebabCase(name)}`, components[name]);
});

// 自动注册
Object.keys(library).forEach(name => {
  Vue.component(`bt-${kebabCase(name)}`, library[name]);
});

// 国际化
const i18n = new VueI18n({
  locale: /\.cn$/.test(document.domain) ? 'zh' : 'en', // en|zh
  fallbackLocale: 'en',
});

// 先写一次
setCookies(i18n.locale);

// 组装路由
const router = new VueRouter({
  mode: 'history',
  fallback: true,
  routes: [
    {
      path: '/:lang?',
      component: components.Panel,
      children: routes,
    },
    // ...routes,
    { path: '*', component: components.NoMatch },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

// 语言拦截
router.beforeEach((to, from, next) => {
  if (/\.cn$/.test(document.domain)) {
    i18n.locale = 'zh';
  } else {
    i18n.locale = to.params.lang || 'en';
  }
  // 防止错乱每次都重复写一次
  setCookies(i18n.locale);

  next();
});

// 等待加载
router.beforeEach((to, from, next) => {
  // 延迟Router组件实例化 以便确保user已经加载完毕(无论登录与否)
  // 根据ready来识别
  if (store.state.ready) {
    next();
  } else {
    store.subscribe(mutation => {
      if (mutation.type === 'fetchUser') {
        next();
      }
    });
  }
});

// 登录拦截
router.beforeEach((to, from, next) => {
  if (to.matched.some(item => item.meta.loginRequired)) {
    if (!store.state.user) {
      // APP登录
      if (Env.is('app')) {
        JSBridge.login();
      }
      // 网页登录
      else {
        const locale = i18n.locale;
        const next = encodeURIComponent(removeQuery('ticket', location.protocol + '//' + location.host + to.fullPath));
        location.href = `${HOSTS.LOGIN}/login?locale=${locale}&service=${next}`;
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

// 过滤器: 金额格式化
// 因为需要使用i18n，所以写在这里
{
  // 前缀
  const prefix = type => {
    if (type === 'USD' || type === 'PAYPAL') {
      return '$';
    } else if (type === 'CNY' || type === '元' || type === '人民币转账') {
      return '¥';
    }
    return '';
  };

  // 后缀
  const suffix = type => {
    if (type == 'CNY' || type == 'USD' || type == 'PAYPAL' || type === '元' || type === '人民币转账') {
      return '';
    }
    return type;
  };

  // 金额格式化
  Vue.filter('currency', function(num, type) {
    num = Number(num);
    if (isNaN(num)) {
      return 'NaN';
    }
    // 支付币种
    type = type || (i18n.locale === 'zh' ? 'CNY' : 'USD');

    // 保留小数
    if (type == 'CNY' || type == 'USD' || type == 'PAYPAL' || type === '元' || type === '人民币转账') {
      num = num.toFixed(2);
    } else {
      num = num.toFixed(8);
    }
    // 后缀加间隔
    let text = prefix(type) + num;
    if (suffix(type)) {
      text += ' ' + suffix(type);
    }
    return text;
  });
}

// 过滤器: 其他通用过滤器
Object.keys(Filters).forEach(name => {
  Vue.filter(name, Filters[name]);
});

// 语言前缀
Vue.prototype.$prelang = function(path) {
  return `/${i18n.locale}/${path}`.replace(/\/+/g, '/');
};

// 调试工具
if (process.env.NODE_ENV === 'development' && Env.is('app')) {
  const VConsole = require('vconsole');
  const vConsole = new VConsole();
}

// OK LET'S GO
new Vue({ store, router, i18n, render: c => c(components.App) }).$mount('#bootstrap');
