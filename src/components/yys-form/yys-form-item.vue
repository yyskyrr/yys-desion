<template>
  <div class="yys-form-item">
    <span
      :style="{ width: this.label ? labelWidth : 0, textAlign: labelPosition }"
      class="yys-form-label"
    >
      {{ this.label }}
    </span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YForm",
  props: {
    label: String,
  },
  data() {
    return {};
  },
  computed: {
    labelWidth() {
      return this.$parent.labelWidth;
    },
    labelPosition() {
      return this.$parent.labelPosition;
    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped></style>
