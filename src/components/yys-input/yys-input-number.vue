<template>
  <div
    :class="{
      [`yys-input-number-${size}`]: size,
      disabled,
    }"
    class="yys-input-number-wrap"
  >
    <span
      v-if="controls"
      :class="{
        disabled: decreaseDisabled || disabled,
      }"
      class="yys-input-number__decrease"
      @click="handleDecrease"
    >
      -
    </span>
    <span
      v-if="controls"
      :class="{
        disabled: increaseDisabled || disabled,
      }"
      class="yys-input-number__increase"
      @click="handleIncrease"
    >
      +
    </span>
    <input
      :class="{
        disabled,
      }"
      :disabled="disabled"
      :label="name"
      :name="name"
      :placeholder="placeholder"
      :value="value_"
      class="yys-input-number"
      @blur="handleBlur"
      @change="handleChange"
      @focus="handleFocus"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  name: "YInputNumber",
  data() {
    return {
      value_: this.value,
    };
  },
  watch: {
    value(n) {
      this.value_ = n;
    },
  },
  computed: {
    decreaseDisabled() {
      return this.value <= this.min;
    },
    increaseDisabled() {
      return this.value >= this.max;
    },
  },
  props: {
    placeholder: String,
    disabled: Boolean,
    size: String,
    value: [Number, String],
    min: Number,
    max: Number,
    name: String,
    label: String,
    step: { type: Number, default: 1 },
    stepStrictly: { type: Boolean, default: false },
    controls: { type: Boolean, default: true },
  },
  model: {
    prop: "value",
    event: "change",
  },
  methods: {
    handleIncrease() {
      if (this.increaseDisabled || this.disabled) return;
      this.$emit("change", Number(this.value) + this.step);
      this.value_ = Number(this.value) + this.step;
    },
    handleDecrease() {
      if (this.decreaseDisabled || this.disabled) return;
      this.$emit("change", Number(this.value) - this.step);
      this.value_ = Number(this.value) - this.step;
    },
    handleBlur(event) {
      this.$emit("blur", event);
    },
    handleFocus(event) {
      this.$emit("focus", event);
    },
    handleChange() {
      if (!/^\d*$/.test(this.value_)) {
        this.value_ = this.value;
        return;
      }
      if (this.stepStrictly && this.value_ % this.step) {
        this.value_++;
        return;
      }
      if (this.value_ < this.min) {
        this.value_ = this.min;
        return;
      }
      if (this.value_ > this.max) {
        this.value_ = this.max;
        return;
      }
      this.$emit("change", this.value_);
    },
    handleInput(e) {
      this.value_ = e.target.value;
    },
  },

  mounted() {},
};
</script>

<style></style>
