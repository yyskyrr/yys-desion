import Vue from "vue";
import App from "./App.vue";
import * as Icons from '@ant-design/icons-vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");


const icons  = Icons;

for (const i in icons) {
  Vue.component(i, icons[i]);
}