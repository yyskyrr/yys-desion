import button from "./components/yys-button/yys-button";
import checkbox from "./components/yys-checkbox/yys-checkbox";
import checkboxGroup from "./components/yys-checkbox/yys-checkbox-group";
import input from "./components/yys-input/yys-input";
import textarea from "./components/yys-input/yys-textarea";
import select from "./components/yys-select/yys-select";

const components = [button, checkbox, input, select, checkboxGroup, textarea];

const install = function (Vue) {
    components.forEach((component) => {
        // Vue.component：注册或获取全局组件
        Vue.component(component.name, component);
    });
};

export default install;
