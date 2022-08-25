import button from "./components/yys-button/yys-button";
import checkbox from "./components/yys-checkbox/yys-checkbox";
import checkboxGroup from "./components/yys-checkbox/yys-checkbox-group";
import input from "./components/yys-input/yys-input";
import inputNumber from "./components/yys-input/yys-input-number";
import textarea from "./components/yys-input/yys-textarea";
import select from "./components/yys-select/yys-select";
import cascader from "./components/yys-select/yys-cascader";
import timePicker from "./components/yys-select/yys-time-picker";
import datePicker from "./components/yys-select/yys-date-picker";
import radio from "./components/yys-radio/yys-radio";
import radioGroup from "./components/yys-radio/yys-radio-group";
import radioButton from "./components/yys-radio/yys-radio-button";
import form from "./components/yys-form/yys-form";
import upload from "./components/yys-upload/yys-upload";
import formItem from "./components/yys-form/yys-form-item";
import Switch from "./components/yys-switch/yys-switch";
import rate from "./components/yys-rate/yys-rate";
import slider from "./components/yys-slider/yys-slider";
import "./index.scss";

const components = [
  button,
  checkbox,
  upload,
  checkboxGroup,
  timePicker,
  datePicker,
  cascader,
  form,
  formItem,
  input,
  inputNumber,
  Switch,
  textarea,
  radio,
  select,
  radioGroup,
  radioButton,
  rate,
  slider,
];

const install = function (Vue) {
  components.forEach((component) => {
    // Vue.component：注册或获取全局组件
    Vue.component(component.name, component);
  });
};

export default install;
