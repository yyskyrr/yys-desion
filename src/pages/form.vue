<template>
  <div id="app">
    <h3>典型表单</h3>
    <YForm ref="form" :model="form" label-width="80px">
      <YFormItem label="活动名称">
        <YInput v-model="form.name"></YInput>
      </YFormItem>
      <YFormItem label="活动区域">
        <YSelect v-model="form.region" placeholder="请选择活动区域">
          <YOption value="shanghai">区域一</YOption>
          <YOption value="beijing">区域二</YOption>
        </YSelect>
      </YFormItem>
      <YFormItem label="活动时间">
        <YDatePicker
          type="date"
          placeholder="选择日期"
          v-model="form.date1"
          style="width: 100%"
        ></YDatePicker>
        <div class="line">-</div>
        <YTimePicker
          placeholder="选择时间"
          v-model="form.date2"
          style="width: 100%"
        ></YTimePicker>
      </YFormItem>
      <YFormItem label="即时配送">
        <YSwitch v-model="form.delivery"></YSwitch>
      </YFormItem>
      <YFormItem label="活动性质">
        <YCheckboxGroup v-model="form.type" :options="checkBoxOptions">
        </YCheckboxGroup>
      </YFormItem>
      <YFormItem label="特殊资源">
        <YRadioGroup v-model="form.resource">
          <YRadio label="线上品牌商赞助">线上品牌商赞助</YRadio>
          <YRadio label="线下场地免费">线下场地免费</YRadio>
        </YRadioGroup>
      </YFormItem>
      <YFormItem label="活动形式">
        <YTextarea v-model="form.desc"></YTextarea>
      </YFormItem>
      <YFormItem>
        <YButton type="primary" @click="onSubmit">立即创建</YButton>
        <YButton>取消</YButton>
      </YFormItem>
    </YForm>
    <h3>行内表单</h3>
    <YForm :inline="true" :model="formInline">
      <YFormItem label="审批人">
        <YInput v-model="formInline.user" placeholder="审批人"></YInput>
      </YFormItem>
      <YFormItem label="活动区域">
        <YSelect v-model="formInline.region" placeholder="活动区域">
          <YOption value="shanghai">区域一</YOption>
          <YOption value="beijing">区域二</YOption>
        </YSelect>
      </YFormItem>
      <YFormItem>
        <YButton type="primary" @click="onSubmit">查询</YButton>
      </YFormItem>
    </YForm>
    <h3>对齐方式</h3>
    <div>
      <YButton @click="labelPosition = 'left'">left</YButton>
      <YButton @click="labelPosition = 'right'">right</YButton>
      <YButton @click="labelPosition = 'top'">top</YButton>
    </div>
    <div style="margin: 20px"></div>
    <YForm
      :label-position="labelPosition"
      :model="formLabelAlign"
      label-width="80px"
    >
      <YFormItem label="名称">
        <YInput v-model="formLabelAlign.name"></YInput>
      </YFormItem>
      <YFormItem label="活动区域">
        <YInput v-model="formLabelAlign.region"></YInput>
      </YFormItem>
      <YFormItem label="活动形式">
        <YInput v-model="formLabelAlign.type"></YInput>
      </YFormItem>
    </YForm>
    <h3>表单验证</h3>
    <YForm ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px">
      <YFormItem label="活动名称" prop="name">
        <YInput v-model="ruleForm.name"></YInput>
      </YFormItem>
      <YFormItem label="活动区域" prop="region">
        <YSelect v-model="ruleForm.region" placeholder="请选择活动区域">
          <YOption value="shanghai">区域一</YOption>
          <YOption value="beijing">区域二</YOption>
        </YSelect>
      </YFormItem>
      <YFormItem label="活动时间" required>
        <YFormItem prop="date1" style="margin-bottom: 0">
          <YDatePicker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.date1"
            style="width: 100%"
          ></YDatePicker>
        </YFormItem>
        <div class="line">-</div>
        <YFormItem prop="date2" style="margin-bottom: 0">
          <YTimePicker
            placeholder="选择时间"
            v-model="ruleForm.date2"
            style="width: 100%"
          ></YTimePicker>
        </YFormItem>
      </YFormItem>
      <YFormItem label="即时配送" prop="delivery">
        <YSwitch v-model="ruleForm.delivery"></YSwitch>
      </YFormItem>
      <YFormItem label="活动性质" prop="type">
        <YCheckboxGroup v-model="ruleForm.type" :options="checkBoxOptions">
        </YCheckboxGroup>
      </YFormItem>
      <YFormItem label="特殊资源" prop="resource">
        <YRadioGroup v-model="ruleForm.resource">
          <YRadio label="线上品牌商赞助">线上品牌商赞助</YRadio>
          <YRadio label="线下场地免费">线下场地免费</YRadio>
        </YRadioGroup>
      </YFormItem>
      <YFormItem label="活动形式" prop="desc">
        <YTextarea v-model="ruleForm.desc"></YTextarea>
      </YFormItem>
      <YFormItem>
        <YButton type="primary" @click="submitForm('ruleForm')"
          >立即创建</YButton
        >
        <YButton @click="resetForm('ruleForm')">重置</YButton>
      </YFormItem>
    </YForm>
    <!--    <h3>表单内组件尺寸控制</h3>-->
    <!--    <YForm ref="form" :model="sizeForm" label-width="80px" size="mini">-->
    <!--      <YFormItem label="活动名称">-->
    <!--        <YInput v-model="sizeForm.name"></YInput>-->
    <!--      </YFormItem>-->
    <!--      <YFormItem label="活动区域">-->
    <!--        <YSelect v-model="sizeForm.region" placeholder="请选择活动区域">-->
    <!--          <YOption value="shanghai">区域一</YOption>-->
    <!--          <YOption value="beijing">区域二</YOption>-->
    <!--        </YSelect>-->
    <!--      </YFormItem>-->
    <!--      <YFormItem label="活动时间">-->
    <!--        <YDatePicker-->
    <!--          type="date"-->
    <!--          placeholder="选择日期"-->
    <!--          v-model="sizeForm.date1"-->
    <!--          style="width: 100%"-->
    <!--        ></YDatePicker>-->
    <!--        <div class="line" :span="2">-</div>-->
    <!--        <YTimePicker-->
    <!--          placeholder="选择时间"-->
    <!--          v-model="sizeForm.date2"-->
    <!--          style="width: 100%"-->
    <!--        ></YTimePicker>-->
    <!--      </YFormItem>-->
    <!--      <YFormItem label="地址">-->
    <!--        <YRadioGroup v-model="sizeForm.type">-->
    <!--          <YRadioButton label="上海"></YRadioButton>-->
    <!--          <YRadioButton label="北京"></YRadioButton>-->
    <!--          <YRadioButton label="广州"></YRadioButton>-->
    <!--          <YRadioButton label="深圳"></YRadioButton>-->
    <!--        </YRadioGroup>-->
    <!--      </YFormItem>-->
    <!--      <YFormItem label="特殊资源">-->
    <!--        <YRadioGroup v-model="sizeForm.resource" size="medium">-->
    <!--          <YRadio border label="线上品牌商赞助">线上品牌商赞助</YRadio>-->
    <!--          <YRadio border label="线下场地免费">线下场地免费</YRadio>-->
    <!--        </YRadioGroup>-->
    <!--      </YFormItem>-->
    <!--      <YFormItem size="large">-->
    <!--        <YButton type="primary" @click="onSubmit">立即创建</YButton>-->
    <!--        <YButton>取消</YButton>-->
    <!--      </YFormItem>-->
    <!--    </YForm>-->
    <h3 id="form-attributes">Form Attributes</h3>
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
          <td>model</td>
          <td>表单数据对象</td>
          <td>object</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>rules</td>
          <td>表单验证规则</td>
          <td>object</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>inline</td>
          <td>行内表单模式</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>label-position</td>
          <td>
            表单域标签的位置，如果值为 left 或者 right 时，则需要设置
            <code>label-width</code>
          </td>
          <td>string</td>
          <td>right/left/top</td>
          <td>right</td>
        </tr>
        <tr>
          <td>label-width</td>
          <td>
            表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item
            会继承该值。支持 <code>auto</code>。
          </td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>hide-required-asterisk</td>
          <td>是否隐藏必填字段的标签旁边的红色星号</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>show-message</td>
          <td>是否显示校验错误信息</td>
          <td>boolean</td>
          <td>—</td>
          <td>true</td>
        </tr>
        <!--        <tr>-->
        <!--          <td>size</td>-->
        <!--          <td>用于控制该表单内组件的尺寸</td>-->
        <!--          <td>string</td>-->
        <!--          <td>medium / small / mini</td>-->
        <!--          <td>—</td>-->
        <!--        </tr>-->
        <!--        <tr>-->
        <!--          <td>disabled</td>-->
        <!--          <td>-->
        <!--            是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled-->
        <!--            属性不再生效-->
        <!--          </td>-->
        <!--          <td>boolean</td>-->
        <!--          <td>—</td>-->
        <!--          <td>false</td>-->
        <!--        </tr>-->
      </tbody>
    </table>
    <h3 id="form-events">Form Events</h3>
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
          <td>validate</td>
          <td>任一表单项被校验后触发</td>
          <td>被校验的表单项 prop 值，校验是否通过，错误消息（如果存在）</td>
        </tr>
      </tbody>
    </table>
    <h3 id="form-item-attributes">Form-Item Attributes</h3>
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
          <td>prop</td>
          <td>
            表单域 model 字段，在使用 validate、resetFields
            方法的情况下，该属性是必填的
          </td>
          <td>string</td>
          <td>传入 Form 组件的 <code>model</code> 中的字段</td>
          <td>—</td>
        </tr>
        <tr>
          <td>label</td>
          <td>标签文本</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>label-width</td>
          <td>表单域标签的的宽度，例如 '50px'。支持 <code>auto</code>。</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>required</td>
          <td>是否必填，如不设置，则会根据校验规则自动生成</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>rules</td>
          <td>表单验证规则</td>
          <td>object</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>error</td>
          <td>
            表单域验证错误信息,
            设置该值会使表单验证状态变为<code>error</code>，并显示该错误信息
          </td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>show-message</td>
          <td>是否显示校验错误信息</td>
          <td>boolean</td>
          <td>—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>size</td>
          <td>用于控制该表单域下组件的尺寸</td>
          <td>string</td>
          <td>medium / small / mini</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <h3 id="form-item-slot">Form-Item Slot</h3>
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>—</td>
          <td>Form Item 的内容</td>
        </tr>
        <tr>
          <td>label</td>
          <td>标签文本的内容</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      sizeForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: 0,
        resource: 0,
        desc: "",
      },
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
      checkBoxOptions: [
        "美食/餐厅线上活动",
        "地推活动",
        "线下主题活动",
        "单纯品牌曝光",
      ],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formInline: {
        user: "",
        region: "",
      },
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
    };
  },
  computed: {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  created() {},
};
</script>

<style scoped lang="scss">
.yys-form {
  width: 500px;
}
.yys-form-item {
  margin-bottom: 22px;
}
.line {
  margin: 0 10px;
}
</style>
