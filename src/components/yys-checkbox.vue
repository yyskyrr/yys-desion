<template>
  <label class="ant-checkbox-wrapper">
    <span class="ant-checkbox ant-checkbox-checked">
      <input
        @change="onChange"
        :disabled="disabled"
        type="checkbox"
        class="ant-checkbox-input"
        :checked="checked || defaultChecked" />
      <span class="ant-checkbox-inner"> </span
    ></span>
    <span> {{ text }} </span>
  </label>
</template>

<script>
export default {
  name: "button",
  data() {
    return {
      text: this.$slots.default[0].text,
    };
  },
  props: {
    disabled: Boolean,
    checked: Boolean,
    defaultChecked: Boolean,
  },
  computed: {},
  mounted() {
    console.log(this.$slots);
  },
  methods: {
    onChange(val) {
      this.$emit("change", val);
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.ant-checkbox-wrapper {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: "tnum";
  display: inline-block;
  line-height: unset;
  cursor: pointer;
}
</style>
