import button from "./yys-button.vue";
import checkbox from "./yys-checkbox.vue";
import input from "./yys-input.vue";
import select from "./yys-select.vue";

button.install = (Vue) => Vue.component(button.name, button); //注册组件 // 标签的方式引入，留到后面再另开新篇讨论 //　　Vue.component(sumFunction.name, sumFunction); //}
checkbox.install = (Vue) => Vue.component(checkbox.name, checkbox); //注册组件 // 标签的方式引入，留到后面再另开新篇讨论 //　　Vue.component(sumFunction.name, sumFunction); //}
input.install = (Vue) => Vue.component(input.name, input); //注册组件 // 标签的方式引入，留到后面再另开新篇讨论 //　　Vue.component(sumFunction.name, sumFunction); //}
select.install = (Vue) => Vue.component(select.name, select); //注册组件 // 标签的方式引入，留到后面再另开新篇讨论 //　　Vue.component(sumFunction.name, sumFunction); //}
//const install = function(Vue, opts = {}) {
/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
//if (typeof window !== 'undefined' && window.Vue) {
//  install(window.Vue);
//}

export default { button, checkbox, input, select };
