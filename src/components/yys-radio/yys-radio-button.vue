<template>
  <div
    class="yys-radio-button"
    :class="{
      'yys-radio-button-active': checked,
      'yys-radio-button-disabled': disabled || parenDisabled,
      [`yys-radio-${size}`]: size,
    }"
    @click="handleClick"
  >
    <span
      class="yys-radio-button-text"
      :class="{
        'yys-radio-button-text-active': checked,
        'yys-radio-button-text-disabled': disabled || parenDisabled,
        [`yys-radio-text-${size}`]: size,
      }"
      >{{ label }}</span
    >
  </div>
</template>

<script>
export default {
  name: "YRadioButton",
  data() {
    return {};
  },
  props: {
    value: [String, Number, Boolean],
    label: [String, Number, Boolean],
    disabled: Boolean,
  },
  components: {},
  model: {
    prop: "value",
    event: "change",
  },
  computed: {
    checked() {
      return this.value === this.label || this.parentValue === this.label;
    },
    parentValue() {
      return this.$parent.value;
    },
    size() {
      return this.$parent.size;
    },
    parenDisabled() {
      return this.$parent.disabled;
    },
  },
  methods: {
    handleClick(e) {
      if (this.disabled || this.parenDisabled) return;
      this.$emit("change", this.label);
      if (this.$parent.onChange) {
        this.$parent.onChange(this.label);
      }
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
