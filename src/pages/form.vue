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
        <YButton type="primary" @click="onSubmit">立即创建</YButton>
        <YButton>取消</YButton>
      </YFormItem>
    </YForm>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
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
