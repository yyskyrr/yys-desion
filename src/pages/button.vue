<template>
  <div id="app">
    <h3>按钮类型</h3>
    <YButton type="primary" @click="onClick"> Primary Button </YButton>
    <YButton>Default Button</YButton>
    <YButton type="dashed">Dashed Button</YButton>
    <YButton type="text">Text Button</YButton>
    <YButton type="link">Link Button</YButton>

    <h3>幽灵按钮</h3>
    <div style="background: #bec8c8">
      <YButton ghost type="primary" @click="onClick"> Primary Button </YButton>
      <YButton ghost>Default Button</YButton>
      <YButton ghost type="danger">dashed</YButton>
      <YButton ghost type="dashed">Dashed Button</YButton>
      <YButton type="link">Link Button</YButton>
    </div>

    <h3>加载中状态</h3>
    <YButton loading type="primary" @click="onClick"> Loading </YButton>
    <YButton loading>Loading</YButton>
    <YButton loading type="danger">Loading</YButton>
    <YButton loading type="dashed">Loading</YButton>
    <YButton loading shape="circle" type="primary"></YButton>

    <h3>按钮尺寸</h3>
    <div>
      <YButton @click="size = 'large'">large</YButton>
      <YButton @click="size = 'default'">default</YButton>
      <YButton @click="size = 'small'">small</YButton>
    </div>

    <YButton :size="size" type="primary">Primary</YButton>
    <YButton :size="size">Default Button</YButton>
    <YButton :size="size" type="dashed">Dashed Button</YButton>
    <YButton :size="size" type="text">Text Button</YButton>
    <YButton :size="size" type="link">Link Button</YButton>
    <YButton :size="size" shape="circle" type="primary">A</YButton>
    <YButton :size="size" shape="round" type="primary">A</YButton>

    <h3>危险按钮</h3>
    <YButton danger type="primary">primary</YButton>
    <YButton danger>danger</YButton>
    <YButton danger type="dashed">dashed</YButton>
    <YButton danger type="link">link</YButton>

    <h3>不可用状态</h3>
    <YButton disabled type="dashed">dashed</YButton>
    <YButton disabled type="link">link</YButton>
    <YButton disabled type="text">text</YButton>
    <YButton disabled>default</YButton>

    <h3>图标按钮</h3>
    <YButton shape="circle" type="primary">A</YButton>
    <YButton icon="download" shape="circle"></YButton>
    <YButton>
      <template #icon>
        <i aria-hidden="true" class="fa fa-search"></i>
        Search
      </template>
    </YButton>
    <YButton type="dashed">
      <template #icon>
        <i aria-hidden="true" class="fa fa-search"></i>
        Search
      </template>
    </YButton>

    <h3>Block 按钮</h3>
    <YButton block type="primary">primary</YButton>
    <YButton block>default</YButton>
    <YButton block type="dashed">dashed</YButton>
    <YButton block danger>danger</YButton>
    <YButton block type="link">link</YButton>

    <table>
      <thead>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>disabled</td>
          <td>按钮失效状态</td>
          <td>boolean</td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td>ghost</td>
          <td>幽灵属性，使按钮背景透明</td>
          <td>boolean</td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td>icon</td>
          <td>设置按钮的图标类型</td>
          <td>string</td>
          <td>-</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>设置按钮载入状态</td>
          <td>boolean</td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td>shape</td>
          <td>
            设置按钮形状，可选值为 <code>circle</code>、
            <code>round</code> 或者不设
          </td>
          <td>string</td>
          <td>-</td>
        </tr>
        <tr>
          <td>size</td>
          <td>
            设置按钮大小，可选值为 <code>small</code>
            <code>large</code> 或者不设
          </td>
          <td>string</td>
          <td><code>default</code></td>
        </tr>
        <tr>
          <td>type</td>
          <td>
            设置按钮类型，可选值为 <code>primary</code> <code>dashed</code>
            <code>danger</code> <code>link</code> 或者不设
          </td>
          <td>string</td>
          <td><code>default</code></td>
        </tr>
        <tr>
          <td>block</td>
          <td>将按钮宽度调整为其父宽度的选项</td>
          <td>boolean</td>
          <td><code>false</code></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {},
  data() {
    return {
      size: "default",
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
