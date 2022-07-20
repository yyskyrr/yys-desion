<template>
  <div id="app">
    <p>典型表单</p>
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
      <YFormItem>
        <YButton type="primary" @click="onSubmit">立即创建</YButton>
        <YButton>取消</YButton>
      </YFormItem>
    </YForm>

    <br><br>
  </div>
</template>

<script>
import YForm from "../components/yys-form/yys-form";
import YFormItem from "../components/yys-form/yys-form-item";
import YInput from "../components/yys-input/yys-input";
import YButton from "../components/yys-button/yys-button";
import YSelect from "../components/yys-select/yys-select";

export default {
  name: "App",
  components: {
    YInput,
    YForm,
    YFormItem,
    YButton,
    YSelect,
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    };
  },
  computed: {
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  },
  created() {
  },
};
</script>

<style></style>
