<template>
  <div class="yys-checkbox-group">
    <YCheckbox :disabled="disabled" :checked="isChecked(item)"
               @change="onChange(item)" class="yys-checkbox"
               v-for="(item,index) in options">
      {{ item.value || item }}
    </YCheckbox>
  </div>
</template>

<script>
import YCheckbox from './yys-checkbox'

export default {
  name: "yys-checkbox-group",
  components: {
    YCheckbox
  },
  data() {
    return {};
  },
  props: {
    options: Array,
    value: {type: Array, default: () => []},
    defaultValue: {type: Array, default: () => []},
    disabled: Boolean,
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  computed: {
    newValue() {
      return [...this.value, ...this.defaultValue]
    }
  },
  mounted() {
  },
  methods: {
    isChecked(item) {
      item = item.value || item
      if (this.value && this.value.length > 0) {
        return this.value.indexOf(item) > -1
      } else if (this.defaultValue && this.defaultValue.length > 0) {
        return this.defaultValue.indexOf(item) > -1
      }
    },
    onChange(val) {
      const item = val.value || val
      const index = this.newValue.indexOf(item)
      if (index > -1) {
        delete this.newValue.splice(index, 1)
      } else {
        this.newValue.push(item)
      }
      this.$emit("change", this.newValue);
    },
  },
};
</script>

<style scoped>

</style>
