<template>
  <div
    class="yys-form-item"
    :class="{ 'yys-form-top': labelPosition === 'top' }"
  >
    <span
      v-if="label"
      :class="{
        'yys-form-label-required':
          (!hideRequiredAsterisk && rule1.required) || required,
      }"
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
      v-if="showMessage_ && messageVisible"
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
    showMessage: Boolean,
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
    hideRequiredAsterisk() {
      return this.$parent.hideRequiredAsterisk;
    },
    showMessage_() {
      return this.showMessage || this.$parent.showMessage;
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
      console.log(value);
      this.messageVisible = !!(!value && this.rule1.required);
    },
    // change(value) {
    //   if (this.rule1.type === "array") {
    //     this.messageVisible = !!(!value.length && this.rule1.required);
    //     return;
    //   }
    //   this.messageVisible = !!(!value && this.rule1.required);
    // },
    // handleChange(value) {
    //   if (this.rule1.type === "array") {
    //     this.messageVisible = !!(!value.length && this.rule1.required);
    //     return;
    //   }
    //   console.log(this.rule1);
    //   console.log(value);
    //   this.messageVisible = !!(!value && this.rule1.required);
    // },
  },
  created() {},
  mounted() {
    this.$children.forEach((item) => {
      item.$on("change", (value) => {
        if (this.rule1.type === "array") {
          this.messageVisible = !!(!value.length && this.rule1.required);
          return;
        }
        this.messageVisible = !!(!value && this.rule1.required);
      });

      item.$on("blur", (value) => {
        this.messageVisible = !!(!value && this.rule1.required);
      });
    });
  },
};
</script>

<style scoped></style>
