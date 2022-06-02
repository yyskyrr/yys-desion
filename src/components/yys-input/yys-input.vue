<template>
  <div class="yys-input-affix-wrapper">
    <span class="yys-input-prefix" style="left: 12px">
      <slot name="prefix"></slot>
    </span>
    <input
        :style="{
        paddingLeft: ($slots.prefix ? 30 : 11) + 'px',
      }"
        :disabled="disabled"
        :value="value"
        @click="handleClick"
        @blur="handleBlur"
        @focus="handleFocus"
        @change="handleChange"
        @input="handleInput"
        :placeholder="placeholder"
        :class="{
        'yys-prefix-input': prefix,
        [`yys-input-${size}`]: size,
        'yys-input-disabled': disabled,
      }"
        class="yys-input"
    />
    <span class="yys-input-suffix" style="right: 12px">
      <slot name="suffix"></slot>
      <!--        class="anticon anticon-close-circle yys-input-clear-icon"-->
      <v-icon
          style="cursor: pointer"
          @click="value = ''"
          v-if="allowClear && value"
          name="window-close"
      ></v-icon>
    </span>
  </div>
</template>

<script>
export default {
  name: "yys-input",
  data() {
    return {};
  },
  props: {
    placeholder: String,
    prefix: String,
    suffix: String,
    disabled: Boolean,
    allowClear: Boolean,
    size: String,
    icon: String,
    value: String,
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
  },
  computed: {},
  mounted() {
    // console.log(this.$slots);
    // console.log(this.value);
  },
  components: {},
};
</script>

<style lang="less" scoped>

</style>
