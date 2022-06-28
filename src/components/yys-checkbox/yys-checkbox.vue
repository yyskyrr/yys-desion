<template>
  <label :class="{'yys-disabled-text': disabled}" class="yys-checkbox-wrapper">
    <span class="yys-checkbox yys-checkbox-checked">
      <input
          :checked="checked || defaultChecked"
          :class="{'yys-checkbox-indeterminate':indeterminate}"
          :disabled="disabled"
          class="yys-checkbox-input"
          type="checkbox"
          @change="onChange"
      />
    </span>
    <slot class="yys-checkbox-text"></slot>
  </label>
</template>

<script>
export default {
  name: "YCheckbox",
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
