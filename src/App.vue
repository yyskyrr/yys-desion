<template>
  <div id="app">
    <YButton type="primary" size="small" @click="toggleChecked">
      {{ !checked ? "Check" : "Uncheck" }}
    </YButton>

    <!-- <icon-filter /> -->

    <YCheckbox :checked="checked" @change="onChange">Check</YCheckbox>
    <YInput @change="onChange" allowClear placeholder="round" />
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
