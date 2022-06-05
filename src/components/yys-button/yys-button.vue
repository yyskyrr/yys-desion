<template>
  <button
      @click="onClick"
      :disabled="disabled"
      type="button"
      class="yys-btn"
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
  >
    <slot name="icon"></slot>
    <v-icon v-if="icon" style="vertical-align: middle" :name="icon"/>
    <div v-if="loading" class="yys-btn-loadingBox">
      <i class="fa fa-circle-o-notch fa-spin " :style="{marginRight:$slots.default?'5px':0}" aria-hidden="true"></i>
      <slot></slot>
    </div>

    <div
        v-if="!loading"
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
