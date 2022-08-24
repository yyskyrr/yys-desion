<template>
  <div :class="{ 'yys-select-disabled': disabled }" class="yys-select">
    <div
      class="yys-select-box"
      @mouseenter="mouseenter"
      @mouseleave="showClose = false"
      @click="onClick"
    >
      <YInput
        ref="input"
        v-model="label"
        :disabled="disabled"
        :placeholder="newPlaceholder"
        :size="size"
        @blur="onblur"
        @focus="onfocus"
      >
        <template #suffix>
          <slot name="suffixIcon">
            <i
              v-if="clearable"
              v-show="showClose"
              aria-hidden="true"
              class="fa fa-times-circle"
              @click.stop="handleClear"
              style="cursor: pointer; color: #d9d9d9"
            ></i>
            <i
              v-if="showArrow && !showClose"
              aria-hidden="true"
              class="fa fa-angle-down"
              style="cursor: pointer; color: #d9d9d9"
            ></i>
          </slot>
        </template>
      </YInput>
    </div>

    <div v-show="isFocus" class="yys-cascader-box">
      <div
        v-for="(item, index) in options"
        v-if="options.length > 0"
        :key="index"
        :class="{
          'yys-option-selected': currentValue == item.value,
          'yys-option-disabled': item.disabled,
        }"
        class="yys-cascader-item"
        @mousedown.prevent="() => onSelect(item, index, 1)"
      >
        {{ item.label }}
        <i
          v-if="item.children"
          class="fa fa-angle-right"
          aria-hidden="true"
        ></i>
      </div>
      <div v-if="options.length === 0" class="yys-empty-option">
        <svg
          height="41"
          viewBox="0 0 64 41"
          width="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd" transform="translate(0 1)">
            <ellipse cx="32" cy="33" fill="#F5F5F5" rx="32" ry="7"></ellipse>
            <g fillRule="nonzero" stroke="#D9D9D9">
              <path
                d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
              ></path>
              <path
                d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                fill="#FAFAFA"
              ></path>
            </g>
          </g>
        </svg>
        {{ emptyText || "暂无数据" }}
      </div>
    </div>

    <div v-if="showSecond" class="yys-cascader-box" style="left: 180px">
      <div
        v-for="(item, index) in secondOptions"
        :key="index"
        :class="{
          'yys-option-selected': currentValue == item.value,
          'yys-option-disabled': item.disabled,
        }"
        class="yys-cascader-item"
        @mousedown.prevent="() => onSelect(item, index, 2)"
      >
        {{ item.label }}
        <i
          v-if="item.children"
          class="fa fa-angle-right"
          aria-hidden="true"
        ></i>
      </div>
    </div>
    <div v-if="showThird" class="yys-cascader-box" style="left: 360px">
      <div
        v-for="(item, index) in thirdOptions"
        :key="index"
        :class="{
          'yys-option-selected': currentValue == item.value,
          'yys-option-disabled': item.disabled,
        }"
        class="yys-cascader-item"
        @mousedown.prevent="() => onSelect(item, index, 3)"
      >
        {{ item.label }}
        <i
          v-if="item.children"
          class="fa fa-angle-right"
          aria-hidden="true"
        ></i>
      </div>
    </div>

    <!--    <div v-show="isFocus" class="yys-cascader-box" :class="popperClass">-->
    <!--      <div v-for="(item, index) in options" :key="index">-->
    <!--        {{ item.label }}-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
const moment = require("moment");

export default {
  name: "YCascader",
  data() {
    return {
      isFocus: this.defaultOpen || this.open,
      showClose: false,
      showSecond: false,
      showThird: false,
      label: "",
      currentValue: "",
      newPlaceholder: this.placeholder,
      secondOptions: [],
      thirdOptions: [],
      firstSelect: "",
      secondSelect: "",
      thirdSelect: "",
    };
  },
  watch: {
    value: {
      handler(newVal, oldVal) {
        console.log(newVal);
      },
      immediate: true,
      deep: true,
    },
    options: {
      handler(newVal, oldVal) {
        // const firstLevel = [];
        // newVal.map((item) => {
        //   firstLevel.push({ label: item.label, value: item.value });
        // });
        console.log(newVal);
      },
      immediate: true,
      deep: true,
    },
  },
  computed: {},
  props: {
    value: Array,
    options: Array,
    mode: String,
    placeholder: { type: String, default: "请选择" },
    emptyText: String,
    popperClass: String,
    size: String,
    disabled: Boolean,
    open: Boolean,
    defaultOpen: Boolean,
    showArrow: { type: Boolean, default: true },
    clearable: { type: Boolean, default: true },
    rangeSeparator: { type: String, default: "-" },
    prefixIcon: { type: String, default: "fa-calendar" },
    labelInValue: Boolean,
    loading: Boolean,
    pickerOptions: Object,
  },
  model: {
    prop: "value",
    event: "change",
  },
  methods: {
    mouseenter() {
      if (this.label) {
        this.showClose = true;
      }
    },
    handleClear() {
      this.$emit("change", []);
      this.label = "";
      this.showClose = false;
    },
    onClick() {
      if (this.disabled) return;
      this.isFocus = !this.isFocus;
    },
    onblur(e) {
      this.isFocus = false;
      this.showSecond = false;
      this.showThird = false;
      this.$emit("blur", e);
    },
    onfocus(e) {
      this.$emit("focus", e);
    },
    onSelect(item, index, level) {
      switch (level) {
        case 1:
          this.secondOptions = item.children;
          this.showSecond = true;
          this.firstSelect = index;
          if (!item.children) {
            this.label = `${this.options[this.firstSelect].label}`;
            this.$refs.input.Blur();
            this.$emit("change", [this.options[this.firstSelect].value]);
          }
          return;
        case 2:
          this.thirdOptions = item.children;
          this.showThird = true;
          this.secondSelect = index;
          if (!item.children) {
            this.label = `${this.options[this.firstSelect].label} / ${
              this.secondOptions[this.secondSelect].label
            }`;
            this.$refs.input.Blur();
            this.$emit("change", [
              this.options[this.firstSelect].value,
              this.secondOptions[this.secondSelect].value,
            ]);
          }
          return;
        case 3:
          this.thirdSelect = index;
          this.label = `${this.options[this.firstSelect].label} / ${
            this.secondOptions[this.secondSelect].label
          } / ${this.thirdOptions[this.thirdSelect].label}`;
          this.$refs.input.Blur();
          this.$emit("change", [
            this.options[this.firstSelect].value,
            this.secondOptions[this.secondSelect].value,
            this.thirdOptions[this.thirdSelect].value,
          ]);
          return;
        default:
          return;
      }
      // this.$emit("change", `${this.year}-${this.month}-${item.value}`);
    },
    submit() {
      this.$emit("change", this.value);
    },
  },
  mounted() {},
};
</script>

<style></style>
