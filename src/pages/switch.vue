<template>
  <div id="app">
    <h3>基本用法</h3>
    <YSwitch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </YSwitch>

    <h3>文字描述</h3>
    <YSwitch v-model="value1" active-text="按月付费" inactive-text="按年付费">
    </YSwitch>
    <YSwitch
      v-model="value2"
      active-color="#13ce66"
      active-text="按月付费"
      inactive-color="#ff4949"
      inactive-text="按年付费"
      style="display: block"
    >
    </YSwitch>

    <h3>禁用状态</h3>
    <YSwitch v-model="value3" disabled></YSwitch>
    <YSwitch v-model="value4" disabled></YSwitch>
    <h3>Attributes</h3>
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
          <td>boolean / string / number</td>
          <td>—</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>width</td>
          <td>switch 的宽度（像素）</td>
          <td>number</td>
          <td>40</td>
        </tr>
        <tr>
          <td>active-icon-class</td>
          <td>
            switch 打开时所显示图标的类名，设置此项会忽略
            <code>active-text</code>
          </td>
          <td>string</td>
          <td>—</td>
        </tr>
        <tr>
          <td>inactive-icon-class</td>
          <td>
            switch 关闭时所显示图标的类名，设置此项会忽略
            <code>inactive-text</code>
          </td>
          <td>string</td>
          <td>—</td>
        </tr>
        <tr>
          <td>active-text</td>
          <td>switch 打开时的文字描述</td>
          <td>string</td>
          <td>—</td>
        </tr>
        <tr>
          <td>inactive-text</td>
          <td>switch 关闭时的文字描述</td>
          <td>string</td>
          <td>—</td>
        </tr>
        <tr>
          <td>active-value</td>
          <td>switch 打开时的值</td>
          <td>boolean / string / number</td>
          <td>true</td>
        </tr>
        <tr>
          <td>inactive-value</td>
          <td>switch 关闭时的值</td>
          <td>boolean / string / number</td>
          <td>false</td>
        </tr>
        <tr>
          <td>active-color</td>
          <td>switch 打开时的背景色</td>
          <td>string</td>
          <td>#409EFF</td>
        </tr>
        <tr>
          <td>inactive-color</td>
          <td>switch 关闭时的背景色</td>
          <td>string</td>
          <td>#C0CCDA</td>
        </tr>
        <tr>
          <td>name</td>
          <td>switch 对应的 name 属性</td>
          <td>string</td>
          <td>—</td>
        </tr>
        <tr>
          <td>validate-event</td>
          <td>改变 switch 状态时是否触发表单的校验</td>
          <td>boolean</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>
    <h3>events</h3>
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
          <td>switch 状态发生变化时的回调函数</td>
          <td>新状态的值</td>
        </tr>
      </tbody>
    </table>
    <h3>methods</h3>
    <table>
      <thead>
        <tr>
          <th>方法名</th>
          <th>说明</th>
          <th>参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>focus</td>
          <td>使 Switch 获取焦点</td>
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
      value: true,
      value1: true,
      value2: true,
      value3: true,
      value4: false,
    };
  },
  methods: {
    handleChange(e) {
      console.log(e);
    },
  },
};
</script>

<style scoped>
>>> .yys-switch {
  margin: 20px 20px 20px 0;
}
</style>
