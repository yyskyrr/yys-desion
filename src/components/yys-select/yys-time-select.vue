<template>
  <div :class="{ 'yys-select-disabled': disabled }" class="yys-select">
    <div
      class="yys-select-box"
      @mouseenter="mouseenter"
      @mouseleave="showClose = false"
      @click="onClick"
    >
      <YInput
        v-model="label"
        :disabled="disabled"
        :placeholder="newPlaceholder"
        :size="size"
        @blur="onblur"
      >
        <template #prefix>
          <i
            aria-hidden="true"
            class="fa fa-clock-o"
            style="color: #d9d9d9"
          ></i>
        </template>
        <template #suffix>
          <slot name="suffixIcon">
            <i
              v-show="showClose"
              aria-hidden="true"
              class="fa fa-times-circle"
              style="cursor: pointer; color: #d9d9d9"
              @click.stop="handleClear"
            ></i>
          </slot>
        </template>
      </YInput>
    </div>
    <div v-if="selectableRange">
      <div v-show="isFocus" class="yys-time-range-box">
        <div
          v-for="(item, index) in optionsList"
          v-if="optionsList.length > 0"
          :key="index"
          :class="{
            'yys-option-selected': currentValue == item.value,
            'yys-option-disabled': item.disabled,
          }"
          class="yys-option-item"
          @mousedown="(e) => onSelect(item, e)"
        >
          {{ item.label }}
        </div>
        <div v-if="optionsList.length === 0" class="yys-empty-option">
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
    </div>

    <div v-else>
      <div v-show="isFocus" class="yys-option-box">
        <div
          v-for="(item, index) in optionsList"
          v-if="optionsList.length > 0"
          :key="index"
          :class="{
            'yys-option-selected': currentValue == item.value,
            'yys-option-disabled': item.disabled,
          }"
          class="yys-option-item"
          @mousedown="(e) => onSelect(item, e)"
        >
          {{ item.label }}
        </div>
        <div v-if="optionsList.length === 0" class="yys-empty-option">
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
    </div>
  </div>
</template>

<script>
const moment = require("moment");

export default {
  name: "YTimeSelect",
  data() {
    return {
      isFocus: this.defaultOpen || this.open,
      showClose: false,
      optionsList: [],
      newTimeSelectList: [],
      label: "",
      currentValue: this.value || this.defaultValue,
      newPlaceholder: this.placeholder,
      start: "",
      step: "",
      end: "",
      selectableRange: "",
      minTime: "",
    };
  },
  watch: {
    value(n, o) {
      this.currentValue = n;
      this.optionsList = [];
      this.getOptions();
    },
    timeSelectList: {
      handler(newVal, oldVal) {
        this.newTimeSelectList = newVal;
        this.getOptions();
      },
      immediate: false,
      deep: true,
    },
    pickerOptions: {
      handler(newVal, oldVal) {
        this.start = newVal.start;
        this.step = newVal.step;
        this.end = newVal.end;
        this.selectableRange = newVal.selectableRange;
        this.minTime = newVal.minTime;
      },
      immediate: true,
      deep: true,
    },
  },
  computed: {
    timeSelectList() {
      const list = [];
      let time = this.start;
      do {
        list.push({ time });
        time = moment(time, "HH:mm").add(this.step, "HH:mm").format("HH:mm");
      } while (+moment(time, "HH:mm") <= +moment(this.end, "HH:mm"));
      list.map((item) => {
        if (+moment(item.time, "HH:mm") <= +moment(this.minTime, "HH:mm")) {
          item.disabled = true;
        }
      });
      return list;
    },
  },
  props: {
    value: { default: "" },
    defaultValue: { default: "" },
    mode: String,
    placeholder: String,
    emptyText: String,
    size: String,
    disabled: Boolean,
    open: Boolean,
    defaultOpen: Boolean,
    allowClear: { type: Boolean, default: false },
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
      this.$emit("change", "");
      this.label = "";
      this.showClose = false;
    },
    onClick(e) {
      if (this.disabled) return;
      this.isFocus = !this.isFocus;
      this.$emit("click", e);
    },
    onblur(e) {
      this.isFocus = false;
      this.$emit("blur", e);
    },
    onSelect(item, e) {
      if (item.disabled) {
        e.preventDefault();
        return;
      }
      this.currentValue = item.value;
      this.label = item.label;
      if (this.labelInValue) {
        this.$emit("change", { key: item.value, label: item.label });
        return;
      }
      this.$emit("change", item.value);
    },
    getOptions() {
      const optionsList = [];
      if (this.newTimeSelectList.length) {
        const optionsList = [];
        this.newTimeSelectList.forEach((item) => {
          optionsList.push({
            label: item.time,
            value: item.time,
            disabled: item.disabled || false,
          });
        });
        this.optionsList = optionsList;
        return;
      }
      this.$slots.default &&
        this.$slots.default.forEach((item) => {
          if (
            this.value === (item.data.attrs?.value || item.data.key) ||
            this.defaultValue === (item.data.attrs?.value || item.data.key)
          ) {
            this.label = item.children[0].text;
          }

          optionsList.push({
            label: item.children[0].text,
            value: item.data.attrs?.value || item.data.key,
            disabled: item.disabled || false,
          });
        });
      this.optionsList = optionsList;
    },
  },
  mounted() {
    this.getOptions();
  },
};
</script>

<style></style>
