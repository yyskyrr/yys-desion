import Vue from "vue";
import App from "./App.vue";
import store from "@/store";
import yysDesign from "./index";
import "./index.scss";
import "font-awesome/css/font-awesome.min.css";

Vue.config.productionTip = false;
Vue.use(yysDesign);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
