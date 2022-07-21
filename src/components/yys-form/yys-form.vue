<template>
  <div class="yys-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YForm",
  props: {
    model: Object,
    labelWidth: String,
  },
  data() {
    return {
      componentList: [
        "button 按钮",
        "checkbox 多选框",
        "input 输入框",
        "select 选择框",
        "form 表单",
      ],
      currentIndex: 0,
    };
  },
  created() {},
  mounted() {
    console.log(this.$slots);
  },
};
</script>

<style scoped></style>
