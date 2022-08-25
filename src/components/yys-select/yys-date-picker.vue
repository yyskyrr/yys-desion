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
        :name="name"
        @blur="onblur"
        @focus="onfocus"
      >
        <template #prefix>
          <i
            aria-hidden="true"
            :class="`fa ${prefixIcon}`"
            style="color: #d9d9d9"
          ></i>
        </template>
        <template #suffix>
          <slot name="suffixIcon">
            <i
              v-if="clearable"
              v-show="showClose"
              aria-hidden="true"
              class="fa fa-times-circle"
              :clearIcon="clearIcon"
              style="cursor: pointer; color: #d9d9d9"
              @click.stop="handleClear"
            ></i>
          </slot>
        </template>
      </YInput>
    </div>

    <div
      v-if="isFocus && type === 'date'"
      class="yys-date-box"
      :class="popperClass"
    >
      <div class="yys-date-header">
        <div>
          <i
            @mousedown.prevent="subtractYear"
            class="fa fa-angle-double-left"
            aria-hidden="true"
          ></i>
          <i
            @mousedown.prevent="subtractMonth"
            class="fa fa-angle-left"
            aria-hidden="true"
          ></i>
        </div>
        <div>
          <span class="year">{{ year }} 年</span>
          <span class="month">{{ month }} 月</span>
        </div>
        <div>
          <i
            @mousedown.prevent="addMonth"
            class="fa fa-angle-right"
            aria-hidden="true"
          ></i>
          <i
            @mousedown.prevent="addYear"
            class="fa fa-angle-double-right"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <div class="yys-date-body">
        <div class="yys-date-weekend">
          <span>日</span>
          <span>一</span>
          <span>二</span>
          <span>三</span>
          <span>四</span>
          <span>五</span>
          <span>六</span>
        </div>
        <div class="yys-date-day">
          <div v-for="(item, index) in dayList" :key="index">
            <span
              @mousedown.prevent="(e) => onSelect(item, e)"
              :style="{
                color: item.notCur
                  ? '#c0c4cc'
                  : item.value === day
                  ? '#fff'
                  : item.value === moment.date()
                  ? '#1890ff'
                  : '#000000a6',
                background:
                  item.value === day && !item.notCur
                    ? '#1890ff'
                    : 'transparent',
              }"
              >{{ item.value }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="isFocus && type === 'month'"
      class="yys-date-box"
      :class="popperClass"
    >
      <div class="yys-date-header">
        <div>
          <i
            @mousedown.prevent="subtractYear"
            class="fa fa-angle-double-left"
            aria-hidden="true"
          ></i>
        </div>
        <div>
          <span class="year">{{ year }} 年</span>
        </div>
        <div>
          <i
            @mousedown.prevent="addYear"
            class="fa fa-angle-double-right"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <div class="yys-date-body">
        <div class="yys-date-month">
          <div v-for="(item, index) in monthList" :key="index">
            <span
              @mousedown.prevent="(e) => onMonthSelect(index, e)"
              :style="{
                color:
                  index + 1 === Number(month) || index === moment.month()
                    ? '#409eff'
                    : '#000000a6',
              }"
              >{{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="isFocus && type === 'year'"
      class="yys-date-box"
      :class="popperClass"
    >
      <div class="yys-date-header">
        <div>
          <i
            @mousedown.prevent="subtractYear"
            class="fa fa-angle-double-left"
            aria-hidden="true"
          ></i>
        </div>
        <div>
          <span class="year"
            >{{ Math.floor(year / 10) * 10 }}年 -
            {{ Math.ceil(year / 10) * 10 - 1 }} 年
          </span>
        </div>
        <div>
          <i
            @mousedown.prevent="addYear"
            class="fa fa-angle-double-right"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <div class="yys-date-body">
        <div class="yys-date-month">
          <div v-for="(item, index) in yearList" :key="index">
            <span
              @mousedown.prevent="(e) => onYearSelect(item, e)"
              :style="{
                color:
                  item === Number(year) || item === moment.year()
                    ? '#409eff'
                    : '#000000a6',
              }"
              >{{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const moment = require("moment");

export default {
  name: "YDatePicker",
  data() {
    return {
      monthList: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ],
      isFocus: this.defaultOpen || this.open,
      showClose: false,
      isSelectableRange: false,
      optionsList: [],
      timeSelectList: [],
      label: "",
      newPlaceholder: this.placeholder,
      start: "",
      minTime: "",
      startTime: "",
      moment: moment(),
      endTime: "",
      year: moment().year(),
      month: moment().month() + 1,
      day: "",
    };
  },
  watch: {
    value: {
      handler(newVal, oldVal) {
        console.log(newVal);
        if (typeof newVal === "string" && newVal.indexOf("-") !== -1) {
          this.year = newVal.split("-")[0];
          this.month = newVal.split("-")[1];
          this.day = Number(newVal.split("-")[2]);
        } else {
          this.year = newVal;
        }
      },
      immediate: false,
      deep: true,
    },
  },
  computed: {
    yearList() {
      let list = Array(10).fill(Math.floor(this.year / 10) * 10);
      list = list.map((item, index) => {
        return item + index;
      });
      return list;
    },
    dayList() {
      let list = Array(42).fill({ value: 0, notCur: false });
      const week = moment()
        .year(this.year)
        .month(this.month - 1)
        .date(1)
        .weekday();
      list[week].value = 1;

      const days = moment()
        .year(this.year)
        .month(this.month - 1)
        .daysInMonth();

      const lastDays = moment()
        .year(this.year)
        .month(this.month - 2)
        .daysInMonth();

      list = list.map((item, index) => {
        if (index < week) {
          return { value: lastDays + index + 1 - week, notCur: true };
        } else if (index > week && index + 1 - week <= days) {
          return { value: index + 1 - week, notCur: false };
        } else if (index + 1 - week > days) {
          return { value: index + 1 - week - days, notCur: true };
        } else {
          return item;
        }
      });
      return list;
    },
  },
  props: {
    value: { default: "" },
    mode: String,
    name: String,
    placeholder: String,
    emptyText: String,
    popperClass: String,
    size: String,
    disabled: Boolean,
    open: Boolean,
    defaultOpen: Boolean,
    clearable: { type: Boolean, default: true },
    rangeSeparator: { type: String, default: "-" },
    type: { type: String, default: "date" },
    clearIcon: { type: String, default: "yys-circle-close" },
    prefixIcon: { type: String, default: "fa-calendar" },
    format: { type: String, default: "yyyy-MM-DD" },
    valueFormat: String,
    pickerOptions: Object,
  },
  model: {
    prop: "value",
    event: "change",
  },
  methods: {
    subtractYear() {
      this.moment.subtract(1, "y");
      this.updateMoment();
    },
    subtractMonth() {
      this.moment.subtract(1, "M");
      this.updateMoment();
    },
    addMonth() {
      this.moment.add(1, "M");
      this.updateMoment();
    },
    addYear() {
      this.moment.add(1, "y");
      this.updateMoment();
    },
    updateMoment() {
      this.year = this.moment.year();
      this.month = this.moment.month() + 1;
    },
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
    onClick() {
      if (this.disabled) return;
      this.isFocus = !this.isFocus;
    },
    onblur(e) {
      this.isFocus = false;
      this.$emit("blur", e);
    },
    focus() {
      this.$refs.input.Focus();
    },
    onfocus(e) {
      this.$emit("focus", e);
    },
    onYearSelect(item) {
      this.label = String(item);
      this.$emit("change", String(item));
      this.isFocus = false;
    },
    onMonthSelect(index) {
      const time = moment().month(index);
      const value = time.format("yyyy-MM");
      this.label = value;
      this.$emit("change", value);
      this.isFocus = false;
    },
    onSelect(item, e) {
      if (item.notCur) {
        e.preventDefault();
        return;
      }
      this.isFocus = false;
      const time = moment().date(item.value);
      const value = time.format(this.format);
      this.label = value;
      if (this.valueFormat === "timestamp") {
        this.$emit("change", String(time.valueOf()));
        return;
      }
      if (this.valueFormat) {
        this.$emit("change", time.format(this.valueFormat));
        return;
      }
      this.$emit("change", value);
    },
    submit() {
      this.$emit("change", this.value);
    },
  },
  mounted() {},
};
</script>

<style></style>
