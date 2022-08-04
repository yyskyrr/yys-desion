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
      v-if="messageVisible"
      class="yys-form-message"
      :style="{
        left: this.label ? labelWidth : '12px',
      }"
      >{{ rule1.message }}
    </span>
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
      return this.rules && this.prop ? this.rules[this.prop][0] : {};
    },
  },
  methods: {
    handleBlur(value) {
      this.messageVisible = !!(!value && this.rule1.required);
    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped></style>
