<template>
  <div id="app">
    <YInput v-model="value" allowClear placeholder="normal"/>
    <YInput @change="onChange" size="large" allowClear placeholder="large"/>
    <YInput @change="onChange" size="small" allowClear placeholder="small"/>
    <YInput @change="onChange" placeholder="icons">
      <template #prefix>
        <v-icon name="user"></v-icon>
      </template>
      <template #suffix>
        <v-icon name="fan"></v-icon>
      </template>
    </YInput>
    <YInput disabled @change="onChange" placeholder="disabled">
      <template #prefix>
        <v-icon name="user"></v-icon>
      </template>
      <template #suffix>
        <v-icon name="fan"></v-icon>
      </template>
    </YInput>
    <YInput @change="onChange" placeholder="input search text">
      <template #suffix>
        <v-icon name="search"></v-icon>
      </template>
    </YInput>

    <YInput @change="onChange" placeholder="input search text">
      <template #suffix>
        <span>custom</span>
      </template>
    </YInput>
    <YInput
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput"
        @click="onClick"
        @change="onChange"
        placeholder="events"
    >
      <template #prefix>
        <v-icon name="user"></v-icon>
      </template>
      <template #suffix>
        <v-icon name="fan"></v-icon>
      </template>
    </YInput>
  </div>
</template>

<script>
import YInput from "./components/yys-input/yys-input";

export default {
  name: "App",
  components: {
    YInput,
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
