<template>
  <label
    :class="{
      'yys-disabled-text': disabled || parenDisabled,
      'yys-radio-active': checked,
      'yys-radio-border': border,
      [`yys-radio-${size}`]: size,
    }"
    class="yys-radio-wrapper"
  >
    <span class="yys-radio">
      <input
        :checked="checked"
        :disabled="disabled || parenDisabled"
        class="yys-radio-input"
        type="radio"
        @change="onChange"
      />
    </span>
    <span class="yys-radio-text">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "YRadio",
  data() {
    return {};
  },
  props: {
    value: [String, Number, Boolean],
    label: [String, Number, Boolean],
    disabled: Boolean,
    border: Boolean,
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
    size() {
      return this.$parent.size;
    },
    parentValue() {
      return this.$parent.value;
    },
    parenDisabled() {
      return this.$parent.disabled;
    },
  },
  methods: {
    onChange(e) {
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
