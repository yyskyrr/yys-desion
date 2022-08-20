<template>
  <div id="app">
    <h3>基本用法</h3>
    <YInputNumber
      v-model="num"
      :max="10"
      :min="1"
      label="描述文字"
      @change="handleChange"
    ></YInputNumber>
    <h3>禁用状态</h3>
    <YInputNumber v-model="num1" :disabled="true"></YInputNumber>
    <h3>步数</h3>
    <YInputNumber v-model="num2" :step="2"></YInputNumber>
    <h3>严格步数</h3>
    <YInputNumber v-model="num3" :step="2" step-strictly></YInputNumber>
    <h3>尺寸</h3>
    <YInputNumber v-model="num4"></YInputNumber>
    <YInputNumber v-model="num5" size="medium"></YInputNumber>
    <YInputNumber v-model="num6" size="small"></YInputNumber>
    <YInputNumber v-model="num7" size="mini"></YInputNumber>
    <h3 id="attributes">Attributes</h3>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>value / v-model</td>
          <td>绑定值</td>
          <td>number</td>
          <td>—</td>
          <td>0</td>
        </tr>
        <tr>
          <td>min</td>
          <td>设置计数器允许的最小值</td>
          <td>number</td>
          <td>—</td>
          <td>-Infinity</td>
        </tr>
        <tr>
          <td>max</td>
          <td>设置计数器允许的最大值</td>
          <td>number</td>
          <td>—</td>
          <td>Infinity</td>
        </tr>
        <tr>
          <td>step</td>
          <td>计数器步长</td>
          <td>number</td>
          <td>—</td>
          <td>1</td>
        </tr>
        <tr>
          <td>step-strictly</td>
          <td>是否只能输入 step 的倍数</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>size</td>
          <td>计数器尺寸</td>
          <td>string</td>
          <td>large, small</td>
          <td>—</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用计数器</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>controls</td>
          <td>是否使用控制按钮</td>
          <td>boolean</td>
          <td>—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>name</td>
          <td>原生属性</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>label</td>
          <td>输入框关联的label文字</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>输入框默认 placeholder</td>
          <td>string</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <h3 id="events">Events</h3>
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
          <td>绑定值被改变时触发</td>
          <td>currentValue, oldValue</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>在组件 Input 失去焦点时触发</td>
          <td>(event: Event)</td>
        </tr>
        <tr>
          <td>focus</td>
          <td>在组件 Input 获得焦点时触发</td>
          <td>(event: Event)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {},
  computed: {},
  data() {
    return {
      num: 1,
      num1: 1,
      num2: 5,
      num3: 2,
      num4: 1,
      num5: 1,
      num6: 1,
      num7: 1,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style></style>
