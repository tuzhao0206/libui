import axios from 'axios';
import Cache from './cache';
import store from '../ducks';

// 缓存最近的20个请求
const cache = new Cache(20);

// Create intercepting get function which returns cached promise,
const caching = (config, data) => {
  let key = config.url + '?' + JSON.stringify(config.params || {});
  cache.set(key, data);
};

// 异常处理
const errorHandler = (message = '参数异常或格式不正确') => {
  const locale = store.state.locale;
  store.dispatch({
    type: 'showModal',
    modal: {
      title: locale === 'zh' ? '非常抱歉' : 'Sorry',
      message: message,
      buttons: [
        {
          text: locale === 'zh' ? '确定' : 'Confirm',
          onClick: () => {
            store.dispatch('hideModal');
          },
        },
      ],
    },
  });
};

axios.defaults.timeout = 20000;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 对异步请求进行计数
// 并发请求时，当且仅当最后返回时触发Success Action
let count = 0;

// Add request interceptor
axios.interceptors.request.use(
  config => {
    // 仅首个请求触发Action 重复触发无意义
    if (config.global !== false) {
      // 如果上次请求有异常 重置count (异常发生时 count会被设置为-1)
      // 这里有个假设是如果有自动轮训Ajax请求，不会发生异常时依然继续轮训的情况
      // 不然当轮训异常时，就会出现: 异常弹窗->TOAST->异常弹窗...
      count = Math.max(count, 0);
      count = count + 1;
      if (count === 1) {
        store.dispatch({
          type: 'showToast',
          toast: {
            icon: 'loading',
          },
        });
      }
    }
    return config;
  },
  error => {
    count = -1;
    errorHandler('参数异常或格式不正确');
    return Promise.reject(error);
  }
);
// Add response interceptor
axios.interceptors.response.use(
  ({ config, data = { code: 500 } }) => {
    // 没有code标志
    if (typeof data.code === 'undefined') {
      data.code = data.isError ? 500 : 0;
    }
    // code
    if (/^\d+$/.test(data.code)) {
      data.code = Number(data.code);
    }

    // 如果支持全局拦截 则进行统一的异常处理
    if (config.global !== false) {
      count = count - 1;
      if (data.code !== 0) {
        count = -1;
        store.dispatch('hideToast');
        errorHandler(data.message || '服务器繁忙，请稍后再试');
      }
      // 仅最后响应触发Action 否则会提前关闭Toast
      else if (count === 0) {
        store.dispatch('hideToast');
      }
    }

    // 响应失败
    if (data.code !== 0) {
      return Promise.reject(data);
    }

    // 缓存数据 - 仅限GET请求
    if (config.method === 'get' && config.cache === true) {
      caching(config, data);
    }

    // 响应成功
    return data;
  },
  error => {
    if (axios.isCancel(error)) {
      count = count - 1;
      if (count === 0) {
        store.dispatch('hideToast');
      }
    }
    // 其他异常
    else {
      count = -1;
      store.dispatch('hideToast');
      const locale = store.state.locale;
      errorHandler(locale === 'zh' ? '网络异常或服务器宕机' : 'Network Error！Please try again.');
    }
    return Promise.reject(error);
  }
);

// 代理GET请求 以便缓存生效 笨方法
let get = axios.get;
axios.get = function(url, options = {}) {
  let params = options.params || {};
  let key = url + '?' + (JSON.stringify(params) || '');
  let data = cache.get(key);
  if (options.cache === true && data) {
    return Promise.resolve(data);
  }
  return get(...arguments);
};
