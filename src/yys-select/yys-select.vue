<template>
  <div>
    <YInput @focus="onfocus" @blur="onblur" v-model="label" />
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
    value: { type: String || Number, default: "" },
  },
  methods: {
    onfocus() {
      this.isFocus = true;
    },
    onblur() {
      this.isFocus = false;
    },
    onSelect(item) {
      this.currentValue = item.value;
      this.label = item.label;
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
    console.log(this.$slots.default);
  },
  components: {
    YInput,
  },
};
</script>

<style lang="less" scoped>
.yys-option-box {
  background-color: #ffffff;
  box-sizing: border-box;
  margin: 0;
  list-style: none;
  position: relative;
  display: inline-block;
  width: 100%;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all 0.3s;
  .yys-option-item {
    height: 32px;
    width: 100%;
    text-align: center;
    cursor: pointer;
    line-height: 32px;
    &:hover {
      background-color: #f5f5f5;
    }
    &.yys-option-selected {
      background-color: #e6f7ff;
    }
  }
}
</style>
