<template>
  <div id="app">
    <h3>基本用法</h3>
    <YRadio v-model="radio" label="1">Radio</YRadio>
    <YRadio v-model="radio" label="2">Radio</YRadio>

    <h3>禁用状态</h3>
    <YRadio v-model="radio1" disabled label="1">Radio</YRadio>
    <YRadio v-model="radio1" disabled label="2">Radio</YRadio>

    <h3>单选框组</h3>
    <YRadioGroup v-model="radio2" @change="handleChange">
      <YRadio :label="3">备选项</YRadio>
      <YRadio :label="6">备选项</YRadio>
      <YRadio :label="9">备选项</YRadio>
    </YRadioGroup>

    <h3>按钮样式</h3>
    <div>
      <YRadioGroup v-model="radio3">
        <YRadioButton label="上海"></YRadioButton>
        <YRadioButton label="北京"></YRadioButton>
        <YRadioButton label="广州"></YRadioButton>
        <YRadioButton label="深圳"></YRadioButton>
      </YRadioGroup>
    </div>
    <div style="margin-top: 20px">
      <YRadioGroup v-model="radio4" size="medium">
        <YRadioButton label="上海"></YRadioButton>
        <YRadioButton label="北京"></YRadioButton>
        <YRadioButton label="广州"></YRadioButton>
        <YRadioButton label="深圳"></YRadioButton>
      </YRadioGroup>
    </div>
    <div style="margin-top: 20px">
      <YRadioGroup v-model="radio5" size="small">
        <YRadioButton label="上海"></YRadioButton>
        <YRadioButton disabled label="北京"></YRadioButton>
        <YRadioButton label="广州"></YRadioButton>
        <YRadioButton label="深圳"></YRadioButton>
      </YRadioGroup>
    </div>
    <div style="margin-top: 20px">
      <YRadioGroup v-model="radio6" disabled size="mini">
        <YRadioButton label="上海"></YRadioButton>
        <YRadioButton label="北京"></YRadioButton>
        <YRadioButton label="广州"></YRadioButton>
        <YRadioButton label="深圳"></YRadioButton>
      </YRadioGroup>
    </div>

    <h3>带有边框</h3>
    <div>
      <YRadio v-model="radio7" border label="1">备选项1</YRadio>
      <YRadio v-model="radio7" border label="2">备选项2</YRadio>
    </div>
    <div style="margin-top: 20px">
      <YRadio v-model="radio8" border label="1" size="medium">备选项1</YRadio>
      <YRadio v-model="radio8" border label="2" size="medium">备选项2</YRadio>
    </div>
    <div style="margin-top: 20px">
      <YRadioGroup v-model="radio9" size="small">
        <YRadio border label="1">备选项1</YRadio>
        <YRadio border disabled label="2">备选项2</YRadio>
      </YRadioGroup>
    </div>
    <div style="margin-top: 20px">
      <YRadioGroup v-model="radio10" disabled size="mini">
        <YRadio border label="1">备选项1</YRadio>
        <YRadio border label="2">备选项2</YRadio>
      </YRadioGroup>
    </div>
    <h3>Radio Attributes</h3>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>value / v-model</td>
          <td>绑定值</td>
          <td>string / number / boolean</td>
          <td>—</td>
        </tr>
        <tr>
          <td>label</td>
          <td>Radio 的 value</td>
          <td>string / number / boolean</td>
          <td>—</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>border</td>
          <td>是否显示边框</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>size</td>
          <td>Radio 的尺寸，仅在 border 为真时有效</td>
          <td>string</td>
          <td>—</td>
        </tr>
      </tbody>
    </table>
    <h3>Radio Events</h3>
    <table>
      <thead>
        <tr>
          <th>事件名称</th>
          <th>说明</th>
          <th>回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>change</td>
          <td>绑定值变化时触发的事件</td>
          <td>选中的 Radio label 值</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {},
  data() {
    return {
      radio: "1",
      radio1: "1",
      radio2: 3,
      radio3: "上海",
      radio4: "上海",
      radio5: "上海",
      radio6: "上海",
      radio7: "1",
      radio8: "1",
      radio9: "1",
      radio10: "1",
    };
  },
  methods: {
    handleChange(e) {
      console.log(e);
    },
  },
};
</script>

<style></style>
