<template>
  <div class="yys-form" :style="{ display: inline ? 'flex' : '' }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YForm",
  props: {
    model: Object,
    inline: Boolean,
    labelWidth: { type: String, default: "80px" },
    labelPosition: String,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
};
</script>

<style scoped></style>
