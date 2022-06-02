<template>
  <div id="app">
    <YButton type="primary" @click="onClick">
      <div>插槽</div>
    </YButton>
    <YButton size="large" type="primary">largePrimary</YButton>
    <YButton size="small" type="primary">smallPrimary</YButton>
    <br/>
    <YButton type="danger" disabled>disabled</YButton>
    <YButton>Default</YButton>
    <YButton type="dashed">dashed</YButton>
    <YButton type="danger" ghost>dashed</YButton>
    <br/>
    <YButton type="danger">danger</YButton>
    <YButton type="dashed" disabled>dashedDisabled</YButton>
    <YButton type="link">link</YButton>
    <br/>

    <YButton type="primary" shape="circle">A</YButton>
    <YButton shape="circle" icon="code"></YButton>
    <YButton icon="search">搜索</YButton>
    <br/>

  </div>
</template>

<script>
import YButton from "./components/yys-button/yys-button";

export default {
  name: "App",
  components: {
    YButton,
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
