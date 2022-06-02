import button from "./components/yys-button";
import checkbox from "./components/yys-checkbox";
import input from "./components/yys-input";
import select from "./components/yys-select";

const components = [button, checkbox, input, select];

const install = function (Vue) {
  components.forEach((component) => {
    // Vue.component：注册或获取全局组件
    Vue.component(component.name, component);
  });
};

export default install;
