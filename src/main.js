import Vue from "vue";
import App from "./App.vue";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
import "./index.scss";
import "font-awesome/css/font-awesome.min.css";

Vue.component("v-icon", Icon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
