<template>
  <div class="yys-select">
    <div class="select-box" @click="onClick" @focus="onfocus">
      <YInput v-if="loading" :disabled="disabled"
              v-model="label" @blur="onblur" ref="YinputRef" loading>
      </YInput>

      <YInput ref="YinputRef" v-else :disabled="disabled" v-model="label" @blur="onblur">
        <template #suffix>
          <i @click="clickDownIcon" style="cursor: pointer" class="fa fa-angle-down" aria-hidden="true"></i>
        </template>
      </YInput>
    </div>

    <div v-show="isFocus" class="yys-option-box">
      <div
          class="yys-option-item"
          v-for="(item, index) in optionsList"
          :key="index"
          @mousedown="onSelect(item)"
          :class="{
          'yys-option-selected': currentValue === item.value,
        }"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
import YInput from "../yys-input/yys-input";

export default {
  name: "yys-select",
  data() {
    return {
      isFocus: false,
      optionsList: [],
      label: "",
      currentValue: this.value,
    };
  },
  props: {
    value: {type: String || Number, default: ""},
    disabled: Boolean,
    loading: Boolean
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  methods: {
    clickDownIcon() {
      // this.$refs.YinputRef.handleFocus()
      this.onClick()
    },
    onClick(e) {
      this.isFocus = !this.isFocus;
      this.$emit("click", e);
    },
    onfocus() {
    },
    onblur(e) {
      this.isFocus = false;
      this.$emit("blur", e);
    },
    onSelect(item) {
      this.currentValue = item.value;
      this.label = item.label;

      this.$emit("change", item.value);
    },
  },
  computed: {},
  mounted() {
    this.$slots.default.forEach((item) => {
      if (this.value === item.data.attrs.value) {
        this.label = item.children[0].text;
      }
      this.optionsList.push({
        label: item.children[0].text,
        value: item.data.attrs.value,
      });
    });
  },
  components: {
    YInput,
  },
};
</script>

<style>

</style>
