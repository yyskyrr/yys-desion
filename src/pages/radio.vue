<template>
  <div id="app">
    <p>基本用法</p>
    <YRadio v-model="radio" label="1">Radio</YRadio>
    <YRadio v-model="radio" label="2">Radio</YRadio>

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
    };
  },
  methods: {},
};
</script>

<style></style>
