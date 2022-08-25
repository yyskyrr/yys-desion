<template>
  <div id="app">
    <h3>选择日</h3>
    <YDatePicker v-model="value" type="date" placeholder="选择日期">
    </YDatePicker>
    <h3>选择月</h3>
    <YDatePicker v-model="value2" type="month" placeholder="选择月">
    </YDatePicker>
    <h3>选择年</h3>
    <YDatePicker v-model="value3" type="year" placeholder="选择年">
    </YDatePicker>
    <h3>日期格式</h3>
    <table>
      <thead>
        <tr>
          <th>格式</th>
          <th>含义</th>
          <th>备注</th>
          <th>举例</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>yyyy</code></td>
          <td>年</td>
          <td></td>
          <td>2017</td>
        </tr>
        <tr>
          <td><code>M</code></td>
          <td>月</td>
          <td>不补0</td>
          <td>1</td>
        </tr>
        <tr>
          <td><code>MM</code></td>
          <td>月</td>
          <td></td>
          <td>01</td>
        </tr>
        <tr>
          <td><code>W</code></td>
          <td>周</td>
          <td>仅周选择器的 <code>format</code> 可用；不补0</td>
          <td>1</td>
        </tr>
        <tr>
          <td><code>WW</code></td>
          <td>周</td>
          <td>仅周选择器的 <code>format</code> 可用</td>
          <td>01</td>
        </tr>
        <tr>
          <td><code>d</code></td>
          <td>日</td>
          <td>不补0</td>
          <td>2</td>
        </tr>
        <tr>
          <td><code>dd</code></td>
          <td>日</td>
          <td></td>
          <td>02</td>
        </tr>
        <tr>
          <td><code>H</code></td>
          <td>小时</td>
          <td>24小时制；不补0</td>
          <td>3</td>
        </tr>
        <tr>
          <td><code>HH</code></td>
          <td>小时</td>
          <td>24小时制</td>
          <td>03</td>
        </tr>
        <tr>
          <td><code>h</code></td>
          <td>小时</td>
          <td>12小时制，须和 <code>A</code> 或 <code>a</code> 使用；不补0</td>
          <td>3</td>
        </tr>
        <tr>
          <td><code>hh</code></td>
          <td>小时</td>
          <td>12小时制，须和 <code>A</code> 或 <code>a</code> 使用</td>
          <td>03</td>
        </tr>
        <tr>
          <td><code>m</code></td>
          <td>分钟</td>
          <td>不补0</td>
          <td>4</td>
        </tr>
        <tr>
          <td><code>mm</code></td>
          <td>分钟</td>
          <td></td>
          <td>04</td>
        </tr>
        <tr>
          <td><code>s</code></td>
          <td>秒</td>
          <td>不补0</td>
          <td>5</td>
        </tr>
        <tr>
          <td><code>ss</code></td>
          <td>秒</td>
          <td></td>
          <td>05</td>
        </tr>
        <tr>
          <td><code>A</code></td>
          <td>AM/PM</td>
          <td>仅 <code>format</code> 可用，大写</td>
          <td>AM</td>
        </tr>
        <tr>
          <td><code>a</code></td>
          <td>am/pm</td>
          <td>仅 <code>format</code> 可用，小写</td>
          <td>am</td>
        </tr>
        <tr>
          <td><code>timestamp</code></td>
          <td>JS时间戳</td>
          <td>
            仅
            <code>value-format</code> 可用；组件绑定值为<code>number</code>类型
          </td>
          <td>1483326245000</td>
        </tr>
        <tr>
          <td><code>[MM]</code></td>
          <td>不需要格式化字符</td>
          <td>使用方括号标识不需要格式化的字符 (如 [A] [MM])</td>
          <td>MM</td>
        </tr>
      </tbody>
    </table>
    <h4>默认为Date对象</h4>
    <YDatePicker
      v-model="value5"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 DD 日"
    >
    </YDatePicker>
    {{ value5 }}
    <h4>使用 value-format</h4>
    <YDatePicker
      v-model="value6"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 DD 日"
      value-format="yyyy-MM-DD"
    >
    </YDatePicker>
    {{ value6 }}
    <h4>时间戳</h4>
    <YDatePicker
      v-model="value7"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 DD 日"
      value-format="timestamp"
    >
    </YDatePicker>
    {{ value7 }}
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
          <td>date(DatePicker) / array(DateRangePicker)</td>
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
          <td>large, small, mini</td>
          <td>—</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>非范围选择时的占位内容</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <!--        <tr>-->
        <!--          <td>start-placeholder</td>-->
        <!--          <td>范围选择时开始日期的占位内容</td>-->
        <!--          <td>string</td>-->
        <!--          <td>—</td>-->
        <!--          <td>—</td>-->
        <!--        </tr>-->
        <!--        <tr>-->
        <!--          <td>end-placeholder</td>-->
        <!--          <td>范围选择时结束日期的占位内容</td>-->
        <!--          <td>string</td>-->
        <!--          <td>—</td>-->
        <!--          <td>—</td>-->
        <!--        </tr>-->
        <tr>
          <td>type</td>
          <td>显示类型</td>
          <td>string</td>
          <td>
            year/month/date/dates/ week/datetime/datetimerange/
            daterange/monthrange
          </td>
          <td>date</td>
        </tr>
        <tr>
          <td>format</td>
          <td>显示在输入框中的格式</td>
          <td>string</td>
          <td>
            见<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">日期格式</a>
          </td>
          <td>yyyy-MM-dd</td>
        </tr>
        <!--        <tr>-->
        <!--          <td>align</td>-->
        <!--          <td>对齐方式</td>-->
        <!--          <td>string</td>-->
        <!--          <td>left, center, right</td>-->
        <!--          <td>left</td>-->
        <!--        </tr>-->
        <tr>
          <td>popper-class</td>
          <td>DatePicker 下拉框的类名</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <!--        <tr>-->
        <!--          <td>picker-options</td>-->
        <!--          <td>当前时间日期选择器特有的选项参考下表</td>-->
        <!--          <td>object</td>-->
        <!--          <td>—</td>-->
        <!--          <td>{}</td>-->
        <!--        </tr>-->
        <!--        <tr>-->
        <!--          <td>range-separator</td>-->
        <!--          <td>选择范围时的分隔符</td>-->
        <!--          <td>string</td>-->
        <!--          <td>—</td>-->
        <!--          <td>'-'</td>-->
        <!--        </tr>-->
        <tr>
          <td>value-format</td>
          <td>可选，绑定值的格式。不指定则绑定值为 Date 对象</td>
          <td>string</td>
          <td>
            见<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">日期格式</a>
          </td>
          <td>—</td>
        </tr>
        <tr>
          <td>name</td>
          <td>原生属性</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <!--        <tr>-->
        <!--          <td>unlink-panels</td>-->
        <!--          <td>在范围选择器里取消两个日期面板之间的联动</td>-->
        <!--          <td>boolean</td>-->
        <!--          <td>—</td>-->
        <!--          <td>false</td>-->
        <!--        </tr>-->
        <tr>
          <td>prefix-icon</td>
          <td>自定义头部图标的类名</td>
          <td>string</td>
          <td>—</td>
          <td>fa-calendar</td>
        </tr>
        <tr>
          <td>clear-icon</td>
          <td>自定义清空图标的类名</td>
          <td>string</td>
          <td>—</td>
          <td>yys-circle-close</td>
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
          <td>用户确认选定的值时触发</td>
          <td>
            组件绑定值。格式与绑定值一致，可受 <code>value-format</code> 控制
          </td>
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
    <h3 id="methods">Methods</h3>
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
          <td>使 input 获取焦点</td>
          <td>—</td>
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
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
    };
  },
  methods: {},
};
</script>

<style></style>
