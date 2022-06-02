<template>
  <div id="app">
    <YCheckbox :checked="checked" @change="onChange">Check</YCheckbox>
  </div>
</template>

<script>
import YCheckbox from "./components/yys-checkbox/yys-checkbox";

export default {
  name: "App",
  components: {
    YCheckbox,
  },
  created() {
  },
  data() {
    return {
      value: "value",
      checked: true,
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
