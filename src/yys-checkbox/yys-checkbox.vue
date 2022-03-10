<template>
  <label class="yys-checkbox-wrapper">
    <span class="yys-checkbox yys-checkbox-checked">
      <input
        @change="onChange"
        :disabled="disabled"
        type="checkbox"
        class="yys-checkbox-input"
        :checked="checked || defaultChecked"
        style="background-color: red"
      />
    </span>
    <span class="yys-checkbox-text"> {{ text }} </span>
  </label>
</template>

<script>
export default {
  name: "yys-checkbox",
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
  updated() {
    this.text = this.$slots.default[0].text;
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
.yys-checkbox-wrapper {
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
.yys-checkbox-input {
  width: 16px;
  background: red;
  height: 16px;
  vertical-align: middle;
}
.yys-checkbox-text {
  vertical-align: middle;
}
</style>
