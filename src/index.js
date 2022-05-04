import button from "./yys-button";
import checkbox from "./yys-checkbox";
import input from "./yys-input";
import select from "./yys-select";

const components = [button, checkbox, input, select];

const install = function (Vue) {
  components.forEach((component) => {
    // Vue.component：注册或获取全局组件
    Vue.component(component.name, component);
  });
};

export default install;
