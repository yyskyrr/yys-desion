<template>
  <div id="app">
    <YButton type="primary" @click="onClick">
      <div>插槽</div>
    </YButton>
    <YButton size="large" type="primary">largePrimary</YButton>
    <YButton size="small" type="primary">smallPrimary</YButton>
    <br />
    <YButton type="danger" disabled>disabled</YButton>
    <YButton>Default</YButton>
    <YButton type="dashed">dashed</YButton>
    <YButton type="danger" ghost>dashed</YButton>
    <br />
    <YButton type="danger">danger</YButton>
    <YButton type="dashed" disabled>dashedDisabled</YButton>
    <YButton type="link">link</YButton>
    <br />

    <YButton type="primary" shape="circle">A</YButton>
    <YButton shape="circle" icon="code"></YButton>
    <YButton icon="search">搜索</YButton>
    <br />

    <YCheckbox :checked="checked" @change="onChange">Check</YCheckbox>
    <div style="height: 10px"></div>

    <YInput v-model="value" allowClear placeholder="normal" />
    <YInput @change="onChange" size="large" allowClear placeholder="large" />
    <YInput @change="onChange" size="small" allowClear placeholder="small" />
    <YInput @change="onChange">
      <template #prefix>
        <v-icon name="user"></v-icon>
      </template>
      <template #suffix>
        <v-icon name="fan"></v-icon>
      </template>
    </YInput>
    <YInput
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
      @click="onClick"
      @change="onChange"
    >
      <template #prefix>
        <v-icon name="user"></v-icon>
      </template>
      <template #suffix>
        <v-icon name="fan"></v-icon>
      </template>
    </YInput>

    <YSelect :value="selectValue">
      <YOption value="a">Lucy1</YOption>
      <YOption value="b">Lucy2</YOption>
      <YOption value="c">Lucy3</YOption>
    </YSelect>
  </div>
</template>

<script>
import YButton from "./yys-button/yys-button";
import YCheckbox from "./yys-checkbox/yys-checkbox";
import YInput from "./yys-input/yys-input";
import YSelect from "./yys-select/yys-select";

export default {
  name: "App",
  components: {
    YButton,
    YCheckbox,
    YInput,
    YSelect,
  },
  created() {},
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
