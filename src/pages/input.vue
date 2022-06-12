<template>
  <div id="app">
    <p>基本用法</p>
    <YInput v-model="value" placeholder="Basic usage"/>

    <p>前缀和后缀</p>
    <YInput
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput"
        @click="onClick"
        @change="onChange"
        placeholder="icons"
    >
      <template #prefix>
        <i class="fa fa-user-o" aria-hidden="true"></i>
      </template>
      <template #suffix>
        <i class="fa fa-envelope-o" aria-hidden="true"></i>
      </template>
    </YInput>
    <br/>
    <br/>
    <YInput disabled @change="onChange" placeholder="disabled">
      <template #prefix>
        <i class="fa fa-user-o" aria-hidden="true"></i>
      </template>
      <template #suffix>
        <i class="fa fa-envelope-o" aria-hidden="true"></i>
      </template>
    </YInput>
    <br/>
    <br/>
    <YInput @change="onChange" placeholder="input search text">
      <template #prefix>
        ￥
      </template>
      <template #suffix>
        RMB
      </template>
    </YInput>

    <p>搜索框 loading</p>
    <YInput placeholder="loading" loading/>
    <br><br>
    <YInput placeholder="loading" loading :enter-button="true"/>

    <p>输入框组合</p>
    <y-input-group>
      <YInput style="width: 20%" v-model:value="value1"/>
      <YInput style="width: 30%" v-model:value="value2"/>
    </y-input-group>
    <br><br>
    <y-input-group>
      <YSelect style="width: 50%" v-model:value="value11">
        <YOption value="Zhejiang">Zhejiang</YOption>
        <YOption value="Jiangsu">Jiangsu</YOption>
      </YSelect>
      <YInput style="width: 50%" v-model:value="value12"/>
    </y-input-group>
    <br><br>
    <y-input-group>
      <YSelect style="width: 50%" v-model:value="value13">
        <YOption value="Zhejiang">Zhejiang</YOption>
        <YOption value="Jiangsu">Jiangsu</YOption>
      </YSelect>
      <YSelect style="width: 50%" v-model:value="value14">
        <YOption value="Zhejiang">Zhejiang</YOption>
        <YOption value="Jiangsu">Jiangsu</YOption>
      </YSelect>
    </y-input-group>


    <p>输入时格式化展示</p>
    <YInput placeholder="Input a number" :formatValue="formatValue" v-model:value="value3" tooltip/>

    <p>密码框</p>
    <YInput password v-model:value="value4" placeholder="input password"/>

    <p>文本域</p>
    <YTextarea placeholder="Basic usage"/>

    <p>适应文本高度的文本域</p>
    <YTextarea v-model="value5" placeholder="Autosize height based on content lines" auto-size/>
    <br><br>
    <YTextarea v-model="value6" placeholder="Autosize height with minimum and maximum number of lines"
               :auto-size="{ minRows: 2, maxRows: 5 }"/>

    <p>搜索框</p>
    <YInput search v-model:value="value7" placeholder="input search text"/>
    <br><br>
    <YInput :enter-button="true" search v-model:value="value7" placeholder="input search text"/>
    <br><br>
    <YInput enter-button="Search" v-model:value="value7" placeholder="input search text"/>
    <br><br>
    <YInput v-model:value="value7" placeholder="input search text">
      <template #enterButton>
        <YButton>Custom</YButton>
      </template>
    </YInput>


    <p>三种大小</p>
    <YInput @change="onChange" size="large size" placeholder="large"/>
    <br><br>
    <YInput @change="onChange" placeholder="default size"/>
    <br><br>
    <YInput @change="onChange" size="small size" placeholder="small"/>

    <p>前置/后置标签</p>

    <YInput addon-before="Http://" addon-after=".com" v-model:value="value8"/>
    <br><br>
    <YInput v-model:value="value8">
      <template #addonAfter>
        <i class="fa fa-cog" aria-hidden="true"></i>
      </template>
    </YInput>

    <p>带移除图标</p>
    <YInput v-model="value9" allowClear placeholder="input with clear icon"/>
    <br><br>
    <YTextarea v-model="value9" allowClear placeholder="textarea with clear icon"></YTextarea>

    <p>带字数提示的文本域</p>
    <YTextarea v-model="value10" showCount :maxlength="100"></YTextarea>

  </div>
</template>

<script>
import YInput from "../components/yys-input/yys-input";
import YTextarea from "../components/yys-input/yys-textarea";
import YButton from "../components/yys-button/yys-button";
import YSelect from "../components/yys-select/yys-select";

export default {
  name: "App",
  components: {
    YInput,
    YSelect,
    YTextarea,
    YButton,
  },
  created() {
  },
  computed: {
    formatValue() {
      return Number(this.value3) ? Number(this.value3).toLocaleString('en-US') : null
    }
  },
  data() {
    return {
      value: "",
      value1: "0571",
      value2: "26888888",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "mysite",
      value9: "",
      value10: "test value",
      value11: "Zhejiang",
      value12: "Xihu District, Hangzhou",
      value13: "Zhejiang",
      value14: "Zhejiang",
      checked: true,
      disabled: false,
      selectValue: "a",
    };
  },
  methods: {
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
