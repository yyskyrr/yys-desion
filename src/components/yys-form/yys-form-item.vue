<template>
  <div
    :style="{ display: labelPosition === 'top' ? 'block' : '' }"
    class="yys-form-item"
  >
    <span
      v-if="label"
      :class="{ 'yys-form-label-required': rule1.required || required }"
      :style="{
        width: inline && !label ? 0 : labelWidth,
        textAlign: labelPosition === 'top' ? 'left' : labelPosition,
      }"
      class="yys-form-label"
    >
      {{ label }}
    </span>
    <span
      v-if="!label && !prop"
      :style="{ width: inline ? '20px' : labelWidth }"
    ></span>
    <slot></slot>
    <span
      v-if="messageVisible"
      class="yys-form-message"
      :style="{
        left: label ? labelWidth : '12px',
      }"
      >{{ rule1.message }}
    </span>
  </div>
</template>

<script>
export default {
  name: "YFormItem",
  props: {
    label: String,
    prop: String,
    required: Boolean,
  },
  data() {
    return {
      messageVisible: false,
    };
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
      return this.rules && this.prop && this.rules[this.prop]
        ? this.rules[this.prop][0]
        : {};
    },
  },
  methods: {
    handleBlur(value) {
      this.messageVisible = !!(!value && this.rule1.required);
    },
    handleChange(value) {
      this.messageVisible = !!(!value && this.rule1.required);
    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped></style>
