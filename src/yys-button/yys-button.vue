<template>
  <button
    @click="onClick"
    :disabled="disabled"
    type="button"
    class="yys-btn"
    :class="{
      'yys-btn-disabled': disabled,
      'yys-btn-ghost': ghost,
      'yys-btn-block': block,
      [`yys-btn-${type}`]: type,
      [`yys-btn-${shape}`]: shape,
      [`yys-btn-${size}`]: size,
    }"
  >
    <v-icon v-if="icon" style="vertical-align: middle" :name="icon" />
    <div
      style="display: inline-block; vertical-align: middle"
      :style="{ marginLeft: left }"
    >
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "yys-button",
  data() {
    return {};
  },
  props: {
    type: String,
    icon: String,
    disabled: Boolean,
    ghost: Boolean,
    block: Boolean,
    size: String,
    shape: String,
  },
  computed: {
    left() {
      return this.$slots.default && this.icon ? "5px" : 0;
    },
  },
  mounted() {},
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="less" scoped>

</style>
