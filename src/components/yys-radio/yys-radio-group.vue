<template>
  <div class="yys-radio-group">
    <slot></slot>
    12312{{ size }}
  </div>
</template>

<script>
export default {
  name: "YRadioGroup",
  components: {},
  data() {
    return {};
  },
  props: {
    value: [String, Number, Boolean],
    size: String,
    disabled: Boolean,
  },
  model: {
    prop: "value",
    event: "change",
  },
  computed: {},
  mounted() {},
  methods: {
    onChange(val) {
      this.$emit("change", val);
    },
    submit() {
      this.$emit("change", this.value);
    },
  },
};
</script>

<style scoped></style>
