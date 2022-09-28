<template>
  <div id="app">
    <h3>基本使用</h3>
    <div class="yys-select">
      <div class="yys-select-box">
        <div class="yys-input">
          <input type="text" placeholder="请选择" />
          <span class="suffix">
            <i class="fa fa-angle-down"></i>
          </span>
        </div>
      </div>

      <div class="yys-option-box">
        <div>Lucy1</div>
        <div>Lucy1</div>
        <div>Lucy1</div>
      </div>
    </div>

    <!--    <div class="yu-select">-->
    <!--      <div class="yu-input">-->
    <!--        <input type="text" class="suffix" placeholder="请选择" />-->
    <!--        <span class="suffix icon">-->
    <!--          <i class="iconfont icon-angle-down"></i>-->
    <!--        </span>-->
    <!--      </div>-->
    <!--      <ul class="yu-option">-->
    <!--        <li>猫</li>-->
    <!--        <li>猫</li>-->
    <!--        <li>猫</li>-->
    <!--        <li>猫</li>-->
    <!--      </ul>-->
    <!--    </div>-->

    <h3>标签</h3>
    <YSelect
      mode="tags"
      placeholder="Tags Mode"
      style="width: 100%"
      @change="handleChange"
    >
      <YOption v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{ (i + 9).toString(36) + i }}
      </YOption>
    </YSelect>

    <h3>获得选项的文本</h3>
    <YSelect
      :value="selectValue3"
      label-in-value
      style="width: 120px"
      @change="handleChange3"
    >
      <YOption value="jack"> Jack (100)</YOption>
      <YOption value="lucy"> Lucy (101)</YOption>
    </YSelect>

    <h3>联动</h3>
    <YSelect
      :value="provinceData[0]"
      style="width: 120px"
      @change="handleProvinceChange"
    >
      <YOption v-for="province in provinceData" :key="province">
        {{ province }}
      </YOption>
    </YSelect>
    <YSelect v-model="secondCity" style="width: 120px">
      <YOption v-for="city in cities" :key="city">
        {{ city }}
      </YOption>
    </YSelect>

    <h3>隐藏已选择选项</h3>
    <YSelect
      :value="selectedItems"
      mode="multiple"
      placeholder="Inserted are removed"
      style="width: 100%"
      @change="handleChange4"
    >
      <YOption v-for="item in filteredOptions" :key="item" :value="item">
        {{ item }}
      </YOption>
    </YSelect>

    <h3>三种大小</h3>
    <YSelect
      size="large"
      style="width: 200px"
      value="a1"
      @change="handleChange"
    >
      <YOption v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{ (i + 9).toString(36) + i }}
      </YOption>
    </YSelect>
    <br /><br />
    <YSelect
      size="default"
      style="width: 200px"
      value="a1"
      @change="handleChange"
    >
      <YOption v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{ (i + 9).toString(36) + i }}
      </YOption>
    </YSelect>
    <br /><br />
    <YSelect
      size="small"
      style="width: 200px"
      value="a1"
      @change="handleChange"
    >
      <YOption v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{ (i + 9).toString(36) + i }}
      </YOption>
    </YSelect>

    <h3>多选</h3>
    <YSelect
      mode="tags"
      placeholder="Please select"
      style="width: 100%"
      @change="handleChange"
    >
      <YOption v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{ (i + 9).toString(36) + i }}
      </YOption>
    </YSelect>

    <h3>后缀图标</h3>
    <YSelect default-value="lucy" style="width: 120px" @change="handleChange">
      <i slot="suffixIcon" aria-hidden="true" class="fa fa-envelope-o"></i>
      <YOption value="jack"> Jack</YOption>
      <YOption value="lucy"> Lucy</YOption>
      <YOption disabled value="disabled"> Disabled</YOption>
      <YOption value="Yiminghe"> yiminghe</YOption>
    </YSelect>
    <YSelect default-value="lucy" disabled style="width: 120px">
      <i slot="suffixIcon" aria-hidden="true" class="fa fa-envelope-o"></i>
      <YOption value="lucy"> Lucy</YOption>
    </YSelect>
    <br /><br />
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
          <td>defaultValue</td>
          <td>指定默认选中的条目</td>
          <td>string|string[]|number|number[]</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>labelInValue</td>
          <td>
            是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从
            <code>string</code> 变为
            <code>{key: string, label: vNodes}</code> 的格式
          </td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>mode</td>
          <td>设置 Select 的模式为多选或标签</td>
          <td>'multiple' | 'tags'</td>
          <td>-</td>
        </tr>
        <tr>
          <td>notFoundContent</td>
          <td>当下拉列表为空时显示的内容</td>
          <td>string|slot</td>
          <td>'Not Found'</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>选择框默认文字</td>
          <td>string|slot</td>
          <td>-</td>
        </tr>
        <tr>
          <td>showArrow</td>
          <td>是否显示下拉小箭头</td>
          <td>boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>size</td>
          <td>选择框大小，可选 <code>large</code> <code>small</code></td>
          <td>string</td>
          <td>default</td>
        </tr>
        <tr>
          <td>suffixIcon</td>
          <td>自定义的选择框后缀图标</td>
          <td>VNode | slot</td>
          <td>-</td>
        </tr>
        <tr>
          <td>value(v-model)</td>
          <td>指定当前选中的条目</td>
          <td>string|string[]|number|number[]</td>
          <td>-</td>
        </tr>
        <tr>
          <td>emptyText</td>
          <td>自定义选项为空时显示文字</td>
          <td>string</td>
          <td>暂无数据</td>
        </tr>
        <tr>
          <td>defaultOpen</td>
          <td>是否默认展开下拉菜单</td>
          <td>boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>open</td>
          <td>是否展开下拉菜单</td>
          <td>boolean</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const provinceData = ["Zhejiang", "Jiangsu"];
const cityData = {
  Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
  Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"],
};
const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];
export default {
  name: "App",
  components: {},
  created() {},
  computed: {
    filteredOptions() {
      return OPTIONS.filter((o) => !this.selectedItems.includes(o));
    },
  },
  data() {
    return {
      value: "value",
      checked: true,
      disabled: false,
      selectedItems: [],
      selectValue: "Lucy2",
      selectValue2: "Lucy2",
      selectValue3: "jack",
      provinceData,
      cityData,
      cities: cityData[provinceData[0]],
      secondCity: cityData[provinceData[0]][0],
    };
  },
  methods: {
    handleProvinceChange(value) {
      this.cities = cityData[value];
      this.secondCity = cityData[value][0];
      console.log(this.secondCity);
    },
    handleChange4(selectedItems) {
      this.selectedItems = selectedItems;
      console.log(selectedItems);
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleChange3(value) {
      console.log(value);
    },
    handleChange2() {
      console.log(this.selectValue2);
    },
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
