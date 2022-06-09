<template>
  <div id="app">
    <p>简单用法</p>
    <YCheckbox :checked="checked" @change="onChange">Check</YCheckbox>

    <p>受控的 checkbox</p>
    <YCheckbox :checked="checked1" :disabled="disabled" @change="onChange">Check</YCheckbox>
    <YButton @click="checked1=!checked1">{{ !checked1 ? 'Check' : 'Uncheck' }}</YButton>
    <YButton @click="disabled=!disabled">{{ !disabled ? 'disabled' : 'Undisabled' }}</YButton>

    <p>Checkbox 组</p>
    <YCheckboxGroup
        v-model="value"
        name="checkboxgroup"
        :options="plainOptions"
        @change="onChange"
    />
    <YCheckboxGroup :options="plainOptions" :default-value="['Apple']" @change="onChange"/>
    <YCheckboxGroup :options="options" :value="['Pear']" @change="onChange"/>
    <YCheckboxGroup
        :options="optionsWithDisabled"
        disabled
        :default-value="['Apple']"
        @change="onChange"
    >
      <span slot="label" slot-scope="{ value }" style="color: red">{{ value }}</span>
    </YCheckboxGroup>

    <p>全选</p>
    <YCheckbox :indeterminate="indeterminate" :checked="checkAll" @change="onCheckAllChange"></YCheckbox>
    <br><br>
    <YCheckboxGroup v-model="checkedList" :options="plainOptions" @change="onChange1"/>

    <p>不可用</p>
    <YCheckbox :checked="checked2" disabled></YCheckbox>
    <br>
    <YCheckbox :checked="checked2" disabled></YCheckbox>

  </div>
</template>

<script>
import YCheckbox from "../components/yys-checkbox/yys-checkbox";
import YCheckboxGroup from "../components/yys-checkbox/yys-checkbox-group";
import YButton from "../components/yys-button/yys-button";

export default {
  name: "App",
  components: {
    YCheckbox,
    YCheckboxGroup,
    YButton,
  },
  created() {
  },
  data() {
    return {
      checkedList: ['Apple', 'Orange'],
      plainOptions: ['Apple', 'Pear', 'Orange'],
      checkAll: false,
      indeterminate: true,
      options: [
        {label: 'Apple', value: 'Apple'},
        {label: 'Pear', value: 'Pear'},
        {label: 'Orange', value: 'Orange'},
      ],
      optionsWithDisabled: [
        {value: 'Apple'},
        {label: 'Pear', value: 'Pear'},
        {label: 'Orange', value: 'Orange', disabled: false},
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
      this.indeterminate = !!checkedList.length && checkedList.length < this.plainOptions.length;
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
      console.log('checked = ', checkedValues);
      console.log('value = ', this.value);
    },
    toggleChecked() {
      this.checked = !this.checked;
      console.log(this.checked);
    },
  },
};
</script>

<style></style>
