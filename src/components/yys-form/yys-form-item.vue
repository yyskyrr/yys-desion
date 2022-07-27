<template>
  <div class="yys-form-item">
    <span :style="{ width: labelWidth }" class="yys-form-label">
      {{ this.label }}
    </span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YForm",
  props: {
    model: Object,
    label: String,
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
  computed: {
    labelWidth() {
      return this.$parent.labelWidth;
    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped></style>
