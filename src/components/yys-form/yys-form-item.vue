<template>
  <div
    :style="{ display: labelPosition === 'top' ? 'block' : '' }"
    class="yys-form-item"
  >
    <span
      :class="{ 'yys-form-label-required': rule1.required }"
      :style="{
        width: inline && !this.label ? 0 : labelWidth,
        textAlign: labelPosition === 'top' ? 'left' : labelPosition,
      }"
      class="yys-form-label"
    >
      {{ this.label }}
    </span>
    <slot></slot>
    <span
      :style="{
        left: this.label ? labelWidth : '12px',
      }"
      class="yys-form-message"
      >{{ rule1.message }}</span
    >
  </div>
</template>

<script>
export default {
  name: "YForm",
  props: {
    label: String,
    prop: String,
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
    inline() {
      return this.$parent.inline;
    },
    rules() {
      return this.$parent.rules;
    },
    rule1() {
      if (this.rules && this.prop) {
        return this.rules[this.prop][0];
      } else {
        return {};
      }
    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped></style>
