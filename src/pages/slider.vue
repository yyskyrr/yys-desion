<template>
  <div id="app">
    <h3>基本用法</h3>
    <div class="block">
      <span class="demonstration">默认</span>
      <YSlider v-model="value1"></YSlider>
    </div>
    <div class="block">
      <span class="demonstration">自定义初始值</span>
      <YSlider v-model="value2"></YSlider>
    </div>
    <div class="block">
      <span class="demonstration">隐藏 Tooltip</span>
      <YSlider v-model="value3" :show-tooltip="false"></YSlider>
    </div>
    <div class="block">
      <span class="demonstration">格式化 Tooltip</span>
      <YSlider v-model="value4" :format-tooltip="formatTooltip"></YSlider>
    </div>
    <div class="block">
      <span class="demonstration">禁用</span>
      <YSlider v-model="value5" disabled></YSlider>
    </div>

    <h3>离散值</h3>
    <div class="block">
      <span class="demonstration">不显示间断点</span>
      <YSlider v-model="value6" :step="10"></YSlider>
    </div>
    <div class="block">
      <span class="demonstration">显示间断点</span>
      <YSlider v-model="value7" :step="10" show-stops></YSlider>
    </div>
    <h3>带有输入框</h3>
    <YSlider v-model="value8" show-input></YSlider>
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
          <td>最小值</td>
          <td>number</td>
          <td>—</td>
          <td>0</td>
        </tr>
        <tr>
          <td>max</td>
          <td>最大值</td>
          <td>number</td>
          <td>—</td>
          <td>100</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>step</td>
          <td>步长</td>
          <td>number</td>
          <td>—</td>
          <td>1</td>
        </tr>
        <tr>
          <td>show-input</td>
          <td>是否显示输入框，仅在非范围选择时有效</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>show-input-controls</td>
          <td>在显示输入框的情况下，是否显示输入框的控制按钮</td>
          <td>boolean</td>
          <td>—</td>
          <td>true</td>
        </tr>
        <!--        <tr>-->
        <!--          <td>input-size</td>-->
        <!--          <td>输入框的尺寸</td>-->
        <!--          <td>string</td>-->
        <!--          <td>large / medium / small / mini</td>-->
        <!--          <td>small</td>-->
        <!--        </tr>-->
        <tr>
          <td>show-stops</td>
          <td>是否显示间断点</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>show-tooltip</td>
          <td>是否显示 tooltip</td>
          <td>boolean</td>
          <td>—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>format-tooltip</td>
          <td>格式化 tooltip message</td>
          <td>function(value)</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <!--        <tr>-->
        <!--          <td>range</td>-->
        <!--          <td>是否为范围选择</td>-->
        <!--          <td>boolean</td>-->
        <!--          <td>—</td>-->
        <!--          <td>false</td>-->
        <!--        </tr>-->
        <!--        <tr>-->
        <!--          <td>vertical</td>-->
        <!--          <td>是否竖向模式</td>-->
        <!--          <td>boolean</td>-->
        <!--          <td>—</td>-->
        <!--          <td>false</td>-->
        <!--        </tr>-->
        <!--        <tr>-->
        <!--          <td>height</td>-->
        <!--          <td>Slider 高度，竖向模式时必填</td>-->
        <!--          <td>string</td>-->
        <!--          <td>—</td>-->
        <!--          <td>—</td>-->
        <!--        </tr>-->
        <!--        <tr>-->
        <!--          <td>label</td>-->
        <!--          <td>屏幕阅读器标签</td>-->
        <!--          <td>string</td>-->
        <!--          <td>—</td>-->
        <!--          <td>—</td>-->
        <!--        </tr>-->
        <!--        <tr>-->
        <!--          <td>marks</td>-->
        <!--          <td>-->
        <!--            标记， key 的类型必须为 number 且取值在闭区间-->
        <!--            <code>[min, max]</code> 内，每个标记可以单独设置样式-->
        <!--          </td>-->
        <!--          <td>object</td>-->
        <!--          <td>—</td>-->
        <!--          <td>—</td>-->
        <!--        </tr>-->
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
          <td>值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）</td>
          <td>改变后的值</td>
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
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
      value6: 0,
      value7: 0,
      value8: 0,
    };
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    },
  },
};
</script>

<style scoped>
.block {
  margin-bottom: 14px;
}

.demonstration {
  margin-bottom: 14px;
}
</style>
