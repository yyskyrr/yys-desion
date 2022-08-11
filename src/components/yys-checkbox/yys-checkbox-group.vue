<template>
  <div class="yys-checkbox-group">
    <YCheckbox
      v-for="(item, index) in options"
      :checked="isChecked(item)"
      :disabled="disabled"
      class="yys-checkbox"
      @change="onChange(item)"
    >
      {{ item.value || item }}
    </YCheckbox>
  </div>
</template>

<script>
export default {
  name: "YCheckboxGroup",
  components: {},
  data() {
    return {};
  },
  props: {
    options: Array,
    value: { type: Array, default: () => [] },
    defaultValue: { type: Array, default: () => [] },
    disabled: Boolean,
  },
  model: {
    prop: "value",
    event: "change",
  },
  computed: {
    newValue() {
      return [...this.value, ...this.defaultValue];
    },
  },
  mounted() {},
  methods: {
    isChecked(item) {
      item = item.value || item;
      if (this.value && this.value.length > 0) {
        return this.value.indexOf(item) > -1;
      }
      if (this.defaultValue && this.defaultValue.length > 0) {
        return this.defaultValue.indexOf(item) > -1;
      }
    },
    onChange(val) {
      const item = val.value || val;
      const index = this.newValue.indexOf(item);
      if (index > -1) {
        delete this.newValue.splice(index, 1);
      } else {
        this.newValue.push(item);
      }
      this.$emit("change", this.newValue);
    },
  },
};
</script>

<style scoped></style>
