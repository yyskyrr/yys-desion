<template>
  <div id="app">
    <h3>基本用法</h3>
    <div class="block">
      <div class="demonstration">默认不区分颜色</div>
      <YRate v-model="value1"></YRate>
    </div>
    <div class="block">
      <div class="demonstration">区分颜色</div>
      <YRate v-model="value2" :colors="colors"></YRate>
    </div>
    <p>辅助文字</p>
    <YRate v-model="value3" show-text></YRate>
    <p>其它 icon</p>
    <YRate
      v-model="value4"
      :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
      :icon-classes="iconClasses"
      void-icon-class="icon-rate-face-off"
    >
    </YRate>
    <p>只读</p>
    <YRate
      v-model="value5"
      disabled
      score-template="{value}"
      show-score
      text-color="#ff9900"
    >
    </YRate>
    <h3 id="attributes">Attributes</h3>
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
          <td>number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否为只读</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>low-threshold</td>
          <td>低分和中等分数的界限值，值本身被划分在低分中</td>
          <td>number</td>
          <td>2</td>
        </tr>
        <tr>
          <td>high-threshold</td>
          <td>高分和中等分数的界限值，值本身被划分在高分中</td>
          <td>number</td>
          <td>4</td>
        </tr>
        <tr>
          <td>colors</td>
          <td>
            icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色
          </td>
          <td>array</td>
          <td>['#F7BA2A', '#F7BA2A', '#F7BA2A']</td>
        </tr>
        <tr>
          <td>void-color</td>
          <td>未选中 icon 的颜色</td>
          <td>string</td>
          <td>#C6D1DE</td>
        </tr>
        <tr>
          <td>icon-classes</td>
          <td>
            icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名
          </td>
          <td>array</td>
          <td>—</td>
        </tr>
        <tr>
          <td>show-text</td>
          <td>
            是否显示辅助文字，若为真，则会从 texts
            数组中选取当前分数对应的文字内容
          </td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>show-score</td>
          <td>是否显示当前分数，show-score 和 show-text 不能同时为真</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>text-color</td>
          <td>辅助文字的颜色</td>
          <td>string</td>
          <td>#1F2D3D</td>
        </tr>
        <tr>
          <td>texts</td>
          <td>辅助文字数组</td>
          <td>array</td>
          <td>['极差', '失望', '一般', '满意', '惊喜']</td>
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
          <td>分值改变时触发</td>
          <td>改变后的分值</td>
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
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: 3,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      iconClasses: ["fa-frown-o", "fa-meh-o", "fa-smile-o"],
    };
  },
  methods: {},
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
