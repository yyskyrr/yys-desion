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
    <slot class="yys-checkbox-text"></slot>
  </label>
</template>

<script>
export default {
  name: "yys-checkbox",
  data() {
    return {};
  },
  props: {
    disabled: Boolean,
    checked: Boolean,
    defaultChecked: Boolean,
  },
  computed: {},
  mounted() {},
  methods: {
    onChange(val) {
      this.$emit("change", val);
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>

</style>
