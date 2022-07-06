<template>
  <button
      :class="{
      'yys-btn-disabled': disabled,
      'yys-btn-ghost': ghost,
      'yys-btn-text': text,
      'yys-btn-block': block,
      'yys-btn-dangerous': danger,
      [`yys-btn-${type}`]: type,
      [`yys-btn-${shape}`]: shape,
      [`yys-btn-${size}`]: size,
    }"
      :disabled="disabled"
      class="yys-btn"
      type="button"
      @click="onClick"
  >
    <slot name="icon"></slot>
    <i v-if="icon" :class="`fa fa-${icon}`" aria-hidden="true" style="vertical-align: middle"></i>
    <div v-if="loading" class="yys-btn-loadingBox">
      <i :style="{marginRight:$slots.default?'5px':0}" aria-hidden="true" class="fa fa-spinner fa-pulse "></i>
      <slot></slot>
    </div>

    <div
        v-if="!loading"
        :style="{ marginLeft: left }"
        style="display: inline-block; vertical-align: middle"
    >
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "YButton",
  data() {
    return {};
  },
  props: {
    type: String,
    icon: String,
    disabled: Boolean,
    danger: Boolean,
    text: Boolean,
    loading: Boolean,
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
  mounted() {
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>

</style>
