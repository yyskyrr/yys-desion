<template>
  <div class="yys-input-affix-wrapper">
    <textarea
      id="textarea"
      :autofocus="autofocus"
      :disabled="disabled"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :readonly="readonly"
      :style="{
        height: autoSize && textareaHeight,
        paddingRight: (allowClear ? 20 : 11) + 'px',
        minHeight: autoSize && minRows * 20 + 10 + 'px',
        maxHeight: autoSize && maxRows * 20 + 10 + 'px',
      }"
      class="yys-textarea"
      @blur="handleBlur"
      @change="handleChange"
      @click="handleClick"
      @focus="handleFocus"
      @input="handleInput"
      >{{ value }}</textarea
    >
    <span class="yys-textarea-suffix">
      <i
        v-if="allowClear && value"
        aria-hidden="true"
        class="fa fa-times-circle"
        style="cursor: pointer; color: #bfbfbf"
        @click="value = ''"
      >
      </i>
    </span>
    <div v-if="showCount" class="yys-textarea-count">
      {{ value.length }}/{{ maxlength }}
    </div>

    <div
      v-if="autoSize"
      id="getHeight"
      :style="{
        width: textareaWidth + 'px',
      }"
      class="yys-textarea"
      style="
        opacity: 0;
        position: absolute;
        word-break: break-word;
        z-index: -1;
      "
    >
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "YTextarea",
  data() {
    return {
      textareaHeight: undefined,
      textareaWidth: undefined,
      temp: this.value,
    };
  },
  computed: {
    maxRows() {
      return this.autoSize.maxRows;
    },
    minRows() {
      return this.autoSize.minRows || 2;
    },
    // rule1() {
    //   return this.$parent.rule1;
    // },
  },
  props: {
    placeholder: String,
    disabled: Boolean,
    allowClear: Boolean,
    readonly: Boolean,
    showCount: Boolean,
    autofocus: Boolean,
    autoSize: [Boolean, Object],
    value: String,
    cols: Number,
    maxlength: Number,
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    },
    handleBlur(event) {
      // if (this.rule1 && this.rule1.trigger === "blur") {
      //   this.$parent.handleBlur(this.value);
      // }
      this.$emit("blur", this.value, event);
    },
    submit() {
      this.$emit("blur", this.value);
    },
    handleFocus(event) {
      this.$emit("focus", event);
    },
    handleChange(e) {
      this.$emit("change", e);
    },
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    heightRefresh() {
      this.textareaWidth = this.$el.clientWidth;
      this.textareaHeight = window
        .getComputedStyle(this.$el.lastChild)
        .getPropertyValue("height");
    },
  },
  mounted() {
    if (!this.autoSize) return;
    this.heightRefresh();
  },
  updated() {
    if (!this.autoSize) return;
    this.heightRefresh();
  },
  components: {},
};
</script>

<style scoped></style>
