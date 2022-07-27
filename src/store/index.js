import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import app from "./children/app";

Vue.use(Vuex);

const children = { app };
const modules = {};
const paths = [];

for (const key in children) {
  const module = children[key];

  // 注入模块配置
  modules[key] = module.option;

  // 注入模块数据持久化路径配置
  module.paths.forEach((path) => {
    paths.push(`${key}.${path}`);
  });
}

const store = new Vuex.Store({
  modules: modules,
  getters: {
    authHeader: (state) => {
      return {
        Authorization: `Bearer ${state.user.token}`,
      };
    },
  },
  plugins: [
    // 数据持久化插件，通过配置paths白名单来实现对应状态数据保存
    createPersistedState({
      paths,
    }),
  ],
});

Vue.prototype.$state = store.state; // 注入快捷方式$state到vue实列
Vue.prototype.$store = store;

export default store;
