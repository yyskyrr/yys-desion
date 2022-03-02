<template>
  <div id="app">
    <YButton type="primary" size="small" @click="toggleChecked">
      {{ !checked ? "Check" : "Uncheck" }}
    </YButton>
    <YCheckbox :checked="checked" @change="onChange">Check</YCheckbox>
    <YInput @change="onChange" allowClear placeholder="round" />
  </div>
</template>

<script>
import YButton from "./yys-button.vue";
import YCheckbox from "./yys-checkbox.vue";
import YInput from "./yys-input.vue";
import YSelect from "./yys-select.vue";

export default {
  name: "App",
  components: {
    YButton,
    YCheckbox,
    YInput,
    YSelect,
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
