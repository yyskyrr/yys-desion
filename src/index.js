import button from "./components/yys-button/yys-button.vue";
import checkbox from "./components/yys-checkbox/yys-checkbox.vue";
import checkboxGroup from "./components/yys-checkbox/yys-checkbox-group.vue";
import input from "./components/yys-input/yys-input.vue";
import textarea from "./components/yys-input/yys-textarea.vue";
import select from "./components/yys-select/yys-select.vue";
import "./index.scss";

const components = [button, checkbox, input, select, checkboxGroup, textarea];

const install = function (Vue) {
  components.forEach((component) => {
    // Vue.component：注册或获取全局组件
    Vue.component(component.name, component);
  });
};

export default install;
