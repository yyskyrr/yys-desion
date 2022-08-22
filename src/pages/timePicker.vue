<template>
  <div id="app">
    <h3>固定时间点</h3>
    <YTimePicker
      v-model="value"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
      }"
      placeholder="选择时间"
    >
    </YTimePicker>
    <h3>任意时间点</h3>
    <YTimePicker
      v-model="value1"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00',
      }"
      placeholder="任意时间点"
    >
    </YTimePicker>
    <h3>固定时间范围</h3>
    <YTimePicker
      placeholder="起始时间"
      v-model="startTime"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
      }"
    >
    </YTimePicker>
    <YTimePicker
      placeholder="结束时间"
      v-model="endTime"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
        minTime: startTime,
      }"
    >
    </YTimePicker>
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
          <td>date(TimePicker) / string(TimeSelect)</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>禁用</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>clearable</td>
          <td>是否显示清除按钮</td>
          <td>boolean</td>
          <td>—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>size</td>
          <td>输入框尺寸</td>
          <td>string</td>
          <td>medium / small / mini</td>
          <td>—</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>非范围选择时的占位内容</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>popper-class</td>
          <td>TimePicker 下拉框的类名</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>picker-options</td>
          <td>当前时间日期选择器特有的选项参考下表</td>
          <td>object</td>
          <td>—</td>
          <td>{}</td>
        </tr>
        <tr>
          <td>range-separator</td>
          <td>选择范围时的分隔符</td>
          <td>string</td>
          <td>-</td>
          <td>'-'</td>
        </tr>
        <tr>
          <td>prefix-icon</td>
          <td>自定义头部图标的类名</td>
          <td>string</td>
          <td>—</td>
          <td>fa-clock-o</td>
        </tr>
      </tbody>
    </table>
    <h3 id="time-select-options">Time Select Options</h3>
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
          <td>start</td>
          <td>开始时间</td>
          <td>string</td>
          <td>—</td>
          <td>09:00</td>
        </tr>
        <tr>
          <td>end</td>
          <td>结束时间</td>
          <td>string</td>
          <td>—</td>
          <td>18:00</td>
        </tr>
        <tr>
          <td>step</td>
          <td>间隔时间</td>
          <td>string</td>
          <td>—</td>
          <td>00:30</td>
        </tr>
        <tr>
          <td>minTime</td>
          <td>最小时间，小于该时间的时间段将被禁用</td>
          <td>string</td>
          <td>—</td>
          <td>00:00</td>
        </tr>
        <tr>
          <td>maxTime</td>
          <td>最大时间，大于该时间的时间段将被禁用</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
      </tbody>
    </table>
    <h3 id="time-picker-options">Time Picker Options</h3>
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
          <td>selectableRange</td>
          <td>
            可选时间段，例如<code>'18:30:00 - 20:30:00'</code>或者传入数组<code
              >['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']</code
            >
          </td>
          <td>string / array</td>
          <td>—</td>
          <td>—</td>
        </tr>
      </tbody>
    </table>
    <h3 id="events">Events</h3>
    <table>
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>change</td>
          <td>用户确认选定的值时触发</td>
          <td>组件绑定值</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>当 input 失去焦点时触发</td>
          <td>组件实例</td>
        </tr>
        <tr>
          <td>focus</td>
          <td>当 input 获得焦点时触发</td>
          <td>组件实例</td>
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
  computed: {},
  data() {
    return {
      value: "",
      value1: "18:40",
      startTime: "",
      endTime: "",
    };
  },
  methods: {},
};
</script>

<style></style>
