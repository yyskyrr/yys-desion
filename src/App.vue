<template>
  <div id="app">
    <YButton type="primary" @click="onClick">
      <div>12345</div>
    </YButton>
    <YButton size="large" type="primary">Primary</YButton>
    <YButton size="small" type="primary">Primary</YButton>
    <YButton type="primary" disabled>Primary</YButton>
    <YButton>Default</YButton>
    <YButton type="dashed">Default</YButton>
    <YButton type="danger">Default</YButton>
    <YButton type="link">Default</YButton>
    <YButton type="dashed" disabled>Default</YButton>
    <YCheckbox :checked="checked" @change="onChange">Check</YCheckbox>
    <YInput @change="onChange" allowClear placeholder="round" />

    <YahooFilled />
    <component is="YahooFilled" mode="out-in"></component>
  </div>
</template>

<script>
import YButton from "./yys-button/yys-button";
import YCheckbox from "./yys-checkbox/yys-checkbox";
import YInput from "./yys-input/yys-input";
// import YSelect from "./yys-select/yys-select";

export default {
  name: "App",
  components: {
    YButton,
    YCheckbox,
    YInput,
    // YSelect,
  },
  created() {
    console.log(111);
  },
  data() {
    return {
      checked: true,
      disabled: false,
    };
  },
  methods: {
    onClick(){
      console.log(123)
    },
    toggleChecked() {
      this.checked = !this.checked;
      console.log(this.checked);
    },
    onChange(e) {
      console.log("e", e);
    },
  },
};
</script>

<style></style>
