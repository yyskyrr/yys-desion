<template>
  <div id="app">
    <h3>简单用法</h3>
    <YCheckbox :checked="checked" @change="onChange">Check</YCheckbox>

    <h3>受控的 checkbox</h3>
    <YCheckbox :checked="checked1" :disabled="disabled" @change="onChange"
      >Check
    </YCheckbox>
    <div style="margin-top: 10px">
      <YButton @click="checked1 = !checked1"
        >{{ !checked1 ? "Check" : "Uncheck" }}
      </YButton>
      <YButton @click="disabled = !disabled" style="margin-left: 10px"
        >{{ !disabled ? "disabled" : "Undisabled" }}
      </YButton>
    </div>

    <h3>Checkbox 组</h3>
    <YCheckboxGroup
      v-model="value"
      :options="plainOptions"
      name="checkboxgroup"
      @change="onChange"
    />
    <YCheckboxGroup
      :default-value="['Apple']"
      :options="plainOptions"
      @change="onChange"
    />
    <YCheckboxGroup :options="options" :value="['Pear']" @change="onChange" />
    <YCheckboxGroup
      :default-value="['Apple']"
      :options="optionsWithDisabled"
      disabled
      @change="onChange"
    >
      <span slot="label" slot-scope="{ value }" style="color: red">{{
        value
      }}</span>
    </YCheckboxGroup>

    <h3>全选</h3>
    <YCheckbox
      :checked="checkAll"
      :indeterminate="indeterminate"
      @change="onCheckAllChange"
    ></YCheckbox>
    <br /><br />
    <YCheckboxGroup
      v-model="checkedList"
      :options="plainOptions"
      @change="onChange1"
    />

    <h3>不可用</h3>
    <YCheckbox :checked="checked2" disabled></YCheckbox>
    <br />
    <YCheckbox :checked="checked2" disabled></YCheckbox>

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
          <td>checked</td>
          <td>指定当前是否选中</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>defaultChecked</td>
          <td>初始是否选中</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>失效状态</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>indeterminate</td>
          <td>设置 indeterminate 状态，只负责样式控制</td>
          <td>boolean</td>
          <td>false</td>
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
  data() {
    return {
      checkedList: ["Apple", "Orange"],
      plainOptions: ["Apple", "Pear", "Orange"],
      checkAll: false,
      indeterminate: true,
      options: [
        { label: "Apple", value: "Apple" },
        { label: "Pear", value: "Pear" },
        { label: "Orange", value: "Orange" },
      ],
      optionsWithDisabled: [
        { value: "Apple" },
        { label: "Pear", value: "Pear" },
        { label: "Orange", value: "Orange", disabled: false },
      ],
      value: [],
      value1: "value1",
      checked: true,
      checked1: true,
      checked2: false,
      disabled: false,
      selectValue: "a",
    };
  },
  methods: {
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? this.plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked,
      });
    },
    onChange1(checkedList) {
      this.indeterminate =
        !!checkedList.length && checkedList.length < this.plainOptions.length;
      this.checkAll = checkedList.length === this.plainOptions.length;
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
    onChange(checkedValues) {
      console.log("checked = ", checkedValues);
      console.log("value = ", this.value);
    },
    toggleChecked() {
      this.checked = !this.checked;
      console.log(this.checked);
    },
  },
};
</script>

<style></style>
