import button from "./components/yys-button/yys-button";
import checkbox from "./components/yys-checkbox/yys-checkbox";
import checkboxGroup from "./components/yys-checkbox/yys-checkbox-group";
import input from "./components/yys-input/yys-input";
import textarea from "./components/yys-input/yys-textarea";
import select from "./components/yys-select/yys-select";
import radio from "./components/yys-radio/yys-radio";
import radioGroup from "./components/yys-radio/yys-radio-group";
import radioButton from "./components/yys-radio/yys-radio-button";
import form from "./components/yys-form/yys-form";
import formItem from "./components/yys-form/yys-form-item";
import "./index.scss";

const components = [
  button,
  checkbox,
  checkboxGroup,
  form,
  formItem,
  input,
  textarea,
  radio,
  select,
  radioGroup,
  radioButton,
];

const install = function (Vue) {
  components.forEach((component) => {
    // Vue.component：注册或获取全局组件
    Vue.component(component.name, component);
  });
};

export default install;
