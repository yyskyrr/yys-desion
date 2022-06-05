<template>
  <div id="app">
    <p>按钮类型</p>
    <YButton type="primary" @click="onClick">
      Primary Button
    </YButton>
    <YButton>Default Button</YButton>
    <YButton type="dashed">Dashed Button</YButton>
    <YButton type="text">Text Button</YButton>
    <YButton type="link">Link Button</YButton>

    <p>幽灵按钮</p>
    <div style="background: #bec8c8">
      <YButton type="primary" ghost @click="onClick">
        Primary Button
      </YButton>
      <YButton ghost>Default Button</YButton>
      <YButton type="danger" ghost>dashed</YButton>
      <YButton type="dashed" ghost>Dashed Button</YButton>
      <YButton type="link">Link Button</YButton>
    </div>

    <p>加载中状态</p>
    <YButton type="primary" loading @click="onClick">
      Loading
    </YButton>
    <YButton loading>Loading</YButton>
    <YButton type="danger" loading>Loading</YButton>
    <YButton type="dashed" loading>Loading</YButton>
    <YButton type="primary" loading shape="circle"></YButton>


    <p>按钮尺寸</p>
    <div>
      <YButton @click="size='large'">large</YButton>
      <YButton @click="size='default'">default</YButton>
      <YButton @click="size='small'">small</YButton>
    </div>

    <YButton :size="size" type="primary">Primary</YButton>
    <YButton :size="size">Default Button</YButton>
    <YButton :size="size" type="dashed">Dashed Button</YButton>
    <YButton :size="size" type="text">Text Button</YButton>
    <YButton :size="size" type="link">Link Button</YButton>
    <YButton :size="size" type="primary" shape="circle">A</YButton>
    <YButton :size="size" type="primary" shape="round">A</YButton>

    <p>危险按钮</p>
    <YButton type="primary" danger>primary</YButton>
    <YButton danger>danger</YButton>
    <YButton type="dashed" danger>dashed</YButton>
    <YButton type="link" danger>link</YButton>

    <p>不可用状态</p>
    <YButton type="dashed" disabled>dashed</YButton>
    <YButton type="link" disabled>link</YButton>
    <YButton type="text" disabled>text</YButton>
    <YButton disabled>default</YButton>

    <p>图标按钮</p>
    <YButton type="primary" shape="circle">A</YButton>
    <YButton shape="circle" icon="code"></YButton>
    <YButton>
      <template #icon>
        <i class="fa fa-search" aria-hidden="true"></i>
        Search
      </template>
    </YButton>
    <YButton type="dashed">
      <template #icon>
        <i class="fa fa-search" aria-hidden="true"></i>
        Search
      </template>
    </YButton>

    <p>Block 按钮</p>
    <YButton type="primary" block>primary</YButton>
    <YButton block>default</YButton>
    <YButton type="dashed" block>dashed</YButton>
    <YButton danger block>danger</YButton>
    <YButton type="link" block>link</YButton>

  </div>
</template>

<script>
import YButton from "../components/yys-button/yys-button";

export default {
  name: "App",
  components: {
    YButton,
  },
  created() {
  },
  data() {
    return {
      size: 'default',
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
