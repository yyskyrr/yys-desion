<template>
  <div class="yys-form" :class="{ 'yys-form-flex': inline }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YForm",
  props: {
    model: Object,
    rules: Object,
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
