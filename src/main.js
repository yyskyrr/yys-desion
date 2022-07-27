import Vue from "vue";
import App from "./App.vue";
import store from "@/store";
import "./index.scss";
import "font-awesome/css/font-awesome.min.css";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
