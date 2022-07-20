<template>
  <div id="app">
    <p>典型表单</p>
    <YForm ref="form" :model="form" labYwidth="80px">
      <YFormItem label="活动名称">
        <YInput v-model="form.name"></YInput>
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

export default {
  name: "App",
  components: {
    YForm,
  },
  data() {
    return {
      form:{}
    };
  },
  computed: {
  },
  methods: {
    onSubmit(){

    }
  },
  created() {
  },
};
</script>

<style></style>
