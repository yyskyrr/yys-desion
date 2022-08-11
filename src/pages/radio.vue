<template>
  <div id="app">
    <p>基本用法</p>
    <YRadio v-model="radio" label="1">Radio</YRadio>
    <YRadio v-model="radio" label="2">Radio</YRadio>

    <p>禁用状态</p>
    <YRadio disabled v-model="radio1" label="1">Radio</YRadio>
    <YRadio disabled v-model="radio1" label="2">Radio</YRadio>

    <p>单选框组</p>
    <YRadioGroup v-model="radio2" @change="handleChange">
      <YRadio :label="3">备选项</YRadio>
      <YRadio :label="6">备选项</YRadio>
      <YRadio :label="9">备选项</YRadio>
    </YRadioGroup>

    <p>按钮样式</p>
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
        <YRadioButton label="北京" disabled></YRadioButton>
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

    <p>带有边框</p>
    <div>
      <YRadio v-model="radio7" label="1" border>备选项1</YRadio>
      <YRadio v-model="radio7" label="2" border>备选项2</YRadio>
    </div>
    <div style="margin-top: 20px">
      <YRadio v-model="radio8" label="1" border size="medium">备选项1</YRadio>
      <YRadio v-model="radio8" label="2" border size="medium">备选项2</YRadio>
    </div>
    <div style="margin-top: 20px">
      <YRadioGroup v-model="radio9" size="small">
        <YRadio label="1" border>备选项1</YRadio>
        <YRadio label="2" border disabled>备选项2</YRadio>
      </YRadioGroup>
    </div>
    <div style="margin-top: 20px">
      <YRadioGroup v-model="radio10" size="mini" disabled>
        <YRadio label="1" border>备选项1</YRadio>
        <YRadio label="2" border>备选项2</YRadio>
      </YRadioGroup>
    </div>
    <!--    <table>-->
    <!--      <thead>-->
    <!--        <tr>-->
    <!--          <th>参数</th>-->
    <!--          <th>说明</th>-->
    <!--          <th>类型</th>-->
    <!--          <th>默认值</th>-->
    <!--        </tr>-->
    <!--      </thead>-->
    <!--      <tbody>-->
    <!--        <tr>-->
    <!--          <td>checked</td>-->
    <!--          <td>指定当前是否选中</td>-->
    <!--          <td>boolean</td>-->
    <!--          <td>false</td>-->
    <!--        </tr>-->
    <!--        <tr>-->
    <!--          <td>defaultChecked</td>-->
    <!--          <td>初始是否选中</td>-->
    <!--          <td>boolean</td>-->
    <!--          <td>false</td>-->
    <!--        </tr>-->
    <!--        <tr>-->
    <!--          <td>disabled</td>-->
    <!--          <td>失效状态</td>-->
    <!--          <td>boolean</td>-->
    <!--          <td>false</td>-->
    <!--        </tr>-->
    <!--        <tr>-->
    <!--          <td>indeterminate</td>-->
    <!--          <td>设置 indeterminate 状态，只负责样式控制</td>-->
    <!--          <td>boolean</td>-->
    <!--          <td>false</td>-->
    <!--        </tr>-->
    <!--      </tbody>-->
    <!--    </table>-->
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
