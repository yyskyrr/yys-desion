<template>
  <label class="yys-checkbox-wrapper" :class="{'yys-disabled-text': disabled}">
    <span class="yys-checkbox yys-checkbox-checked">
      <input
          @change="onChange"
          :disabled="disabled"
          type="checkbox"
          class="yys-checkbox-input"
          :class="{'yys-checkbox-indeterminate':indeterminate}"
          :checked="checked || defaultChecked"
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
    indeterminate: Boolean
  },
  computed: {},
  mounted() {
  },
  methods: {
    onChange(val) {
      this.$emit("change", val);
    },
  },
  components: {},
};
</script>

<style scoped>

</style>
