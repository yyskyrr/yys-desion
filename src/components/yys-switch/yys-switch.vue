<template>
  <div
    :class="{ 'is-checked': value, 'is-disabled': disabled }"
    class="yys-switch"
    @click="handleClick"
  >
    <span
      v-if="inactiveText"
      :class="{ 'is-checked': !value }"
      class="yys-switch__label yys-switch__label--left"
      >{{ inactiveText }}</span
    >
    <span
      :style="{
        backgroundColor: value ? activeColor : inactiveColor,
        borderColor: value ? activeColor : inactiveColor,
        width: width,
      }"
      class="yys-switch_core"
    >
    </span>
    <span
      v-if="activeText"
      :class="{ 'is-checked': value }"
      class="yys-switch__label yys-switch__label--right"
      >{{ activeText }}</span
    >
  </div>
</template>

<script>
export default {
  name: "YSwitch",
  data() {
    return {};
  },
  props: {
    value: Boolean,
    disabled: Boolean,
    width: { type: Number, default: 40 },
    activeColor: { type: String, default: "#409EFF" },
    inactiveColor: { type: String, default: "#C0CCDA" },
    activeText: String,
    inactiveText: String,
  },
  components: {},
  computed: {},
  model: {
    prop: "value",
    event: "change",
  },
  methods: {
    focus() {
      this.$emit("change", true);
    },
    handleClick() {
      if (this.disabled) return;
      console.log(!this.value);
      this.$emit("change", !this.value);
    },
    submit() {
      this.$emit("change", this.value);
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
