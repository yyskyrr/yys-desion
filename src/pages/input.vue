<template>
  <div id="app">
    <p>基本用法</p>
    <YInput v-model="value" placeholder="Basic usage" />

    <p>前缀和后缀</p>
    <YInput
      placeholder="icons"
      @blur="onBlur"
      @change="onChange"
      @click="onClick"
      @focus="onFocus"
      @input="onInput"
    >
      <template #prefix>
        <i aria-hidden="true" class="fa fa-user-o"></i>
      </template>
      <template #suffix>
        <i aria-hidden="true" class="fa fa-envelope-o"></i>
      </template>
    </YInput>
    <br />
    <br />
    <YInput disabled placeholder="disabled" @change="onChange">
      <template #prefix>
        <i aria-hidden="true" class="fa fa-user-o"></i>
      </template>
      <template #suffix>
        <i aria-hidden="true" class="fa fa-envelope-o"></i>
      </template>
    </YInput>
    <br />
    <br />
    <YInput placeholder="input search text" @change="onChange">
      <template #prefix> ￥ </template>
      <template #suffix> RMB </template>
    </YInput>

    <p>搜索框 loading</p>
    <YInput loading placeholder="loading" />
    <br /><br />
    <YInput :enter-button="true" loading placeholder="loading" />

    <p>输入框组合</p>
    <y-input-group>
      <YInput v-model:value="value1" style="width: 20%" />
      <YInput v-model:value="value2" style="width: 30%" />
    </y-input-group>
    <br /><br />
    <y-input-group>
      <YSelect v-model:value="value11" style="width: 50%">
        <YOption value="Zhejiang">Zhejiang</YOption>
        <YOption value="Jiangsu">Jiangsu</YOption>
      </YSelect>
      <YInput v-model:value="value12" style="width: 50%" />
    </y-input-group>
    <br /><br />
    <y-input-group>
      <YSelect v-model:value="value13" style="width: 50%">
        <YOption value="Zhejiang">Zhejiang</YOption>
        <YOption value="Jiangsu">Jiangsu</YOption>
      </YSelect>
      <YSelect v-model:value="value14" style="width: 50%">
        <YOption value="Zhejiang">Zhejiang</YOption>
        <YOption value="Jiangsu">Jiangsu</YOption>
      </YSelect>
    </y-input-group>

    <p>输入时格式化展示</p>
    <YInput
      v-model:value="value3"
      :formatValue="formatValue"
      placeholder="Input a number"
      tooltip
    />

    <p>密码框</p>
    <YInput v-model:value="value4" password placeholder="input password" />

    <p>文本域</p>
    <YTextarea placeholder="Basic usage" />

    <p>适应文本高度的文本域</p>
    <YTextarea
      v-model="value5"
      auto-size
      placeholder="Autosize height based on content lines"
    />
    <br /><br />
    <YTextarea
      v-model="value6"
      :auto-size="{ minRows: 2, maxRows: 5 }"
      placeholder="Autosize height with minimum and maximum number of lines"
    />

    <p>搜索框</p>
    <YInput v-model:value="value7" placeholder="input search text" search />
    <br /><br />
    <YInput
      v-model:value="value7"
      :enter-button="true"
      placeholder="input search text"
      search
    />
    <br /><br />
    <YInput
      v-model:value="value7"
      enter-button="Search"
      placeholder="input search text"
    />
    <br /><br />
    <YInput v-model:value="value7" placeholder="input search text">
      <template #enterButton>
        <YButton>Custom</YButton>
      </template>
    </YInput>

    <p>三种大小</p>
    <YInput placeholder="large" size="large size" @change="onChange" />
    <br /><br />
    <YInput placeholder="default size" @change="onChange" />
    <br /><br />
    <YInput placeholder="small" size="small size" @change="onChange" />

    <p>前置/后置标签</p>

    <YInput v-model:value="value8" addon-after=".com" addon-before="Http://" />
    <br /><br />
    <YInput v-model:value="value8">
      <template #addonAfter>
        <i aria-hidden="true" class="fa fa-cog"></i>
      </template>
    </YInput>

    <p>带移除图标</p>
    <YInput v-model="value9" allowClear placeholder="input with clear icon" />
    <br /><br />
    <YTextarea
      v-model="value9"
      allowClear
      placeholder="textarea with clear icon"
    ></YTextarea>

    <p>带字数提示的文本域</p>
    <YTextarea v-model="value10" :maxlength="100" showCount></YTextarea>

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
          <td>addonAfter</td>
          <td>带标签的 input，设置后置标签</td>
          <td>string|slot</td>
          <td></td>
        </tr>
        <tr>
          <td>addonBefore</td>
          <td>带标签的 input，设置前置标签</td>
          <td>string|slot</td>
          <td></td>
        </tr>
        <tr>
          <td>defaultValue</td>
          <td>输入框默认内容</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用状态，默认为 false</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>maxLength</td>
          <td>最大长度</td>
          <td>number</td>
          <td></td>
        </tr>
        <tr>
          <td>prefix</td>
          <td>带有前缀图标的 input</td>
          <td>string|slot</td>
          <td></td>
        </tr>
        <tr>
          <td>size</td>
          <td>
            控件大小。注：标准表单内的输入框大小限制为 <code>large</code>。可选
            <code>large</code> <code>default</code> <code>small</code>
          </td>
          <td>string</td>
          <td><code>default</code></td>
        </tr>
        <tr>
          <td>suffix</td>
          <td>带有后缀图标的 input</td>
          <td>string|slot</td>
          <td></td>
        </tr>
        <tr>
          <td>type</td>
          <td>
            声明 input 类型，同原生 input 标签的 type 属性，见：<a
              href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#%E5%B1%9E%E6%80%A7"
              >MDN</a
            >(请直接使用 <code>Input.TextArea</code> 代替
            <code>type="textarea"</code>)。
          </td>
          <td>string</td>
          <td><code>text</code></td>
        </tr>
        <tr>
          <td>value(v-model)</td>
          <td>输入框内容</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>allowClear</td>
          <td>可以点击清除图标删除内容</td>
          <td>boolean</td>
          <td></td>
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
  computed: {
    formatValue() {
      return Number(this.value3)
        ? Number(this.value3).toLocaleString("en-US")
        : null;
    },
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
