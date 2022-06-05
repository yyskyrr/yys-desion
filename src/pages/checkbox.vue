<template>
  <div id="app">
    <p>简单用法</p>
    <YCheckbox :checked="checked" @change="onChange">Check</YCheckbox>

    <p>受控的 checkbox</p>
    <YCheckbox :checked="checked1" :disabled="disabled" @change="onChange">Check</YCheckbox>
    <YButton @click="checked1=!checked1">{{ !checked1 ? 'Check' : 'Uncheck' }}</YButton>
    <YButton @click="disabled=!disabled">{{ !disabled ? 'disabled' : 'Undisabled' }}</YButton>

    <p>不可用</p>
    <YCheckbox :checked="checked2" disabled></YCheckbox>
    <br>
    <YCheckbox :checked="checked2" disabled></YCheckbox>

  </div>
</template>

<script>
import YCheckbox from "../components/yys-checkbox/yys-checkbox";
import YButton from "../components/yys-button/yys-button";

export default {
  name: "App",
  components: {
    YCheckbox,
    YButton,
  },
  created() {
  },
  data() {
    return {
      value: "value",
      checked: true,
      checked1: true,
      checked2: false,
      disabled: false,
      selectValue: "a",
    };
  },
  methods: {
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
