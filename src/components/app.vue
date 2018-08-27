<template>
  <div id="app">
    <router-view v-if="ready"></router-view>
    <ex-grid-loading v-else />
    <ex-widgets>
      <ex-toast v-bind="toast" />
      <ex-modal v-bind="modal" />
    </ex-widgets>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import HOSTS from '../env.config';
import { setCookie, getCookie, delCookie } from '../utils/cookie';
import { parseQuery } from '../utils/helper';
import Env from '../utils/env';
import JSBridge from '../utils/bridge';
export default {
  computed: {
    ...mapState(['toast', 'modal', 'sheet']),
    ready() {
      return this.$store.state.ready;
    },
  },

  created() {
    // APP授权
    if (Env.is('app')) {
      JSBridge.oauth(token => {
        this.$store.dispatch('fetchToken', { token });
        if (!token) {
          this.$store.dispatch('fetchUser', { user: null });
        } else {
          this.getAppUser();
        }
      });
    } else {
      // 网页授权
      const { ticket } = parseQuery(location.search);
      // 登录回调: TICKET
      if (ticket) {
        setCookie('ticket', ticket);
      }

      /***
      获取用户节流:
      后台不允许频繁调用casLogin，所以此处根据cookie中的ticket来判别
      **尽管不赞同前端操作cookie**
    */
      if (getCookie('ticket')) {
        this.getWebUser(ticket);
      } else {
        this.$store.dispatch('fetchUser', { user: null });
      }
    }
  },
  methods: {
    getWebUser(ticket) {
      const url = `${HOSTS.BASE}/api/casLogin`;
      const params = ticket ? { ticket } : null;
      // 当获取用户异常时，是否需要重定向到登录页面
      // 我们默认当URL中存在ticket参数时必须强制登录
      // 此时当登录失败时 axios拦截器会自动重定向到登录页
      const force = ticket ? true : false;
      let user = null;
      axios
        .get(url, { params, force, global: false })
        .then(
          ({ isError, data }) => {
            if (!isError && data[0]) {
              user = data[0];
            }
          },
          () => {
            // 如果存在ticket却无法获取用户
            // 表明ticket已经失效,此时为了避免刷新后依然调用登录 - 移除ticket
            delCookie('ticket');
            // eslint-disable-next-line
            console.log('༼ ºل͟º ༼ ºل͟º ༼ ºل͟º ༽ ºل͟º ༽ ºل͟º ༽: who are you?');
          }
        )
        .finally(() => {
          this.$store.dispatch('fetchUser', { user });
        });
    },

    getAppUser() {
      const url = `${HOSTS.UCENTER}/api/user/getLoginUserInfo`;
      // 当获取用户异常时，是否需要重定向到登录页面
      // 我们默认当APP中存在token时必须强制登录
      // 此时当登录失败时 axios拦截器会自动重定向到登录页
      const force = this.$store.state.token ? true : false;
      let user = null;
      axios
        .get(url, { force, global: false })
        .then(({ code, data }) => {
          if (Number(code) === 0) {
            user = data;
          }
        })
        .finally(() => {
          this.$store.dispatch('fetchUser', { user });
        });
    },
  },
};
</script>
