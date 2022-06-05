<template>
  <div class="yys-input-affix-wrapper">
    <textarea
        id="textarea"
        class="yys-textarea"
        :style="{
        height: autoSize && textareaHeight,
        minHeight:autoSize && (minRows*20+10) + 'px',
        maxHeight:autoSize && (maxRows*20+10) + 'px',
    }"
        @click="handleClick"
        @blur="handleBlur"
        @focus="handleFocus"
        @change="handleChange"
        @input="handleInput"
        :disabled="disabled"
        :maxlength="maxlength"
        :readonly="readonly"
        :autofocus="autofocus"
        :placeholder="placeholder"
    >{{ value }}</textarea>
    <span class="yys-textarea-suffix">
      <i style="cursor: pointer;color: #bfbfbf" @click="value=''"
         v-if="allowClear && value" class="fa fa-times-circle" aria-hidden="true">
        </i>
    </span>
    <div class="yys-textarea-count" v-if="showCount">{{ value.length }}/{{ maxlength }}</div>

    <div id="getHeight" v-if="autoSize"
         class="yys-textarea"
         :style="{
        width:textareaWidth+'px' }"
         style="opacity: 0;position: absolute;word-break: break-word;z-index: -1">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "yys-textarea",
  data() {
    return {
      textareaHeight: undefined,
      textareaWidth: undefined,
      temp: this.value,
    };
  },
  computed: {
    maxRows() {
      return this.autoSize.maxRows
    },
    minRows() {
      return this.autoSize.minRows || 2
    }
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
      this.$emit("blur", event);
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
      this.textareaWidth = this.$el.clientWidth
      this.textareaHeight = window.getComputedStyle(this.$el.lastChild).getPropertyValue("height")
    }
  },
  mounted() {
    if (!this.autoSize) return
    this.heightRefresh()
  },
  updated() {
    if (!this.autoSize) return
    this.heightRefresh()
  },
  components: {},
};
</script>

<style scoped>

</style>
