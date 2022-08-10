<template>
  <label :class="{ 'yys-disabled-text': disabled }" class="yys-radio-wrapper">
    <span class="yys-radio">
      <input
        :checked="value === label"
        :disabled="disabled"
        class="yys-radio-input"
        type="radio"
        @change="onChange"
      />
    </span>
    <span class="yys-radio-text">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "YRadio",
  data() {
    return {};
  },
  props: {
    value: String,
    label: [String, Number, Boolean],
    disabled: Boolean,
  },
  components: {},

  computed: {},
  methods: {
    onChange(e) {
      // this.$emit("change", this.label);
    },
  },
  mounted() {
    console.log(this.value);
  },
};
</script>

<style scoped></style>
