<template>
  <div id="app">
    <YSelect :value="selectValue">
      <YOption value="a">Lucy1</YOption>
      <YOption value="b">Lucy2</YOption>
      <YOption value="c">Lucy3</YOption>
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
