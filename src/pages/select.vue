<template>
  <div id="app">
    <p>基本使用</p>
    <YSelect :value="selectValue" @change="handleChange">
      <YOption value="Lucy1">Lucy1</YOption>
      <YOption value="Lucy2">Lucy2</YOption>
      <YOption value="Lucy3">Lucy3</YOption>
    </YSelect>
    <br><br>
    <YSelect :value="selectValue" disabled>
      <YOption value="Lucy1">Lucy1</YOption>
      <YOption value="Lucy2">Lucy2</YOption>
      <YOption value="Lucy3">Lucy3</YOption>
    </YSelect>
    <br><br>
    <YSelect v-model="selectValue2" loading @change="handleChange2">
      <YOption value="Lucy1">Lucy1</YOption>
      <YOption value="Lucy2">Lucy2</YOption>
      <YOption value="Lucy3">Lucy3</YOption>
    </YSelect>
  </div>
</template>

<script>
import YSelect from "../components/yys-select/yys-select";

export default {
  name: "App",
  components: {
    YSelect,
  },
  created() {
  },
  data() {
    return {
      value: "value",
      checked: true,
      disabled: false,
      selectValue: "Lucy2",
      selectValue2: "Lucy2",
    };
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleChange2() {
      console.log(this.selectValue2)
    },
    onClick() {
      console.log("onClick");
    },
    onBlur() {
      console.log("onBlur");
    },
    onFocus() {
      console.log("onFocus");
    },
    onInput(e) {
      console.log("onInput", e);
    },
    onChange(value) {
      console.log("Change", value.target.value);
    },
    toggleChecked() {
      this.checked = !this.checked;
      console.log(this.checked);
    },
  },
};
</script>

<style></style>
