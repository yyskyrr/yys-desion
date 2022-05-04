import Vue from "vue";
import App from "./App.vue";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
import "./index.less";

Vue.component("v-icon", Icon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
