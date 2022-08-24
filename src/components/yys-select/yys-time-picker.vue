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
              style="cursor: pointer; color: #d9d9d9"
              @click.stop="handleClear"
            ></i>
          </slot>
        </template>
      </YInput>
    </div>
    <div v-if="isSelectableRange">
      <div v-show="isFocus" class="yys-time-range-box" :class="popperClass">
        <div class="top" @mousedown.prevent>
          <div class="yys-range-option-wrap" id="HH">
            <div
              v-for="(item, index) in HHList"
              :key="'1' + index"
              :class="{
                'yys-option-selected': HH == item.value,
                'yys-option-disabled': item.disabled,
              }"
              class="yys-option-item"
              @mousedown="(e) => onTimeRangeSelect(item, e, 'HH')"
            >
              {{ item.value }}
            </div>
          </div>

          <div class="yys-range-option-wrap" id="mm">
            <div
              v-for="(item, index) in mmList"
              :key="'2' + index"
              :class="{
                'yys-option-selected': mm == item.value,
                'yys-option-disabled': item.disabled,
              }"
              class="yys-option-item"
              @mousedown="(e) => onTimeRangeSelect(item, e, 'mm')"
            >
              {{ item.value }}
            </div>
          </div>

          <div class="yys-range-option-wrap" id="ss">
            <div
              v-for="(item, index) in ssList"
              :key="'3' + index"
              :class="{
                'yys-option-selected': ss == item.value,
                'yys-option-disabled': item.disabled,
              }"
              class="yys-option-item"
              @mousedown="(e) => onTimeRangeSelect(item, e, 'ss')"
            >
              {{ item.value }}
            </div>
          </div>
        </div>

        <div class="footer" @mousedown.prevent>
          <span @click.stop="isFocus = false">取消</span>
          <span @click.stop="onConfirm">确定</span>
        </div>
      </div>
    </div>

    <div v-else>
      <div v-show="isFocus" class="yys-option-box" :class="popperClass">
        <div
          v-for="(item, index) in optionsList"
          v-if="optionsList.length > 0"
          :key="index"
          :class="{
            'yys-option-selected': value == item.value,
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
  name: "YTimePicker",
  data() {
    return {
      isFocus: this.defaultOpen || this.open,
      showClose: false,
      isSelectableRange: false,
      optionsList: [],
      timeSelectList: [],
      label: "",
      newPlaceholder: this.placeholder,
      start: "",
      step: "",
      end: "",
      HH: "",
      mm: "",
      ss: "",
      HHList: this.getTimeList(24),
      mmList: this.getTimeList(60),
      ssList: this.getTimeList(60),
      minTime: "",
      startTime: "",
      endTime: "",
    };
  },
  watch: {
    pickerOptions: {
      handler(newVal, oldVal) {
        this.start = newVal.start;
        this.step = newVal.step;
        this.end = newVal.end;
        this.minTime = newVal.minTime;
        if (newVal.selectableRange) {
          this.isSelectableRange = true;
          this.startTime = newVal.selectableRange.split(
            ` ${this.rangeSeparator}`
          )[0];
          this.endTime = newVal.selectableRange.split(
            `${this.rangeSeparator} `
          )[1];
          this.HHList.map((item) => {
            if (item.value < this.startTime.split(":")[0]) {
              item.disabled = true;
            }
            if (item.value > this.endTime.split(":")[0]) {
              item.disabled = true;
            }
          });
        }
        this.getTimeSelectList();
        this.getOptions();
      },
      immediate: true,
      deep: true,
    },
    HH(newVal) {
      this.mmList.map((item) => {
        item.disabled = false;
        if (newVal === this.startTime.split(":")[0] - 0) {
          if (item.value < this.startTime.split(":")[1]) {
            item.disabled = true;
          }
        }

        if (newVal === this.endTime.split(":")[0] - 0) {
          console.log(item.value > this.endTime.split(":")[1]);
          if (item.value > this.endTime.split(":")[1]) {
            item.disabled = true;
          }
        }
      });
    },
    value: {
      handler(newVal, oldVal) {
        if (this.isSelectableRange && newVal) {
          this.HH = newVal.split(":")[0];
          this.mm = newVal.split(":")[1];
          this.ss = newVal.split(":")[2] || "00";
          if (this.ss.length === 1) {
            this.ss = "0" + this.ss;
          }
          this.label = `${this.HH}:${this.mm}:${this.ss}`;
          return;
        }
      },
      immediate: true,
      deep: true,
    },
  },
  computed: {},
  props: {
    value: { default: "" },
    mode: String,
    placeholder: String,
    emptyText: String,
    popperClass: String,
    size: String,
    disabled: Boolean,
    open: Boolean,
    defaultOpen: Boolean,
    clearable: { type: Boolean, default: true },
    rangeSeparator: { type: String, default: "-" },
    prefixIcon: { type: String, default: "fa-clock-o" },
    labelInValue: Boolean,
    loading: Boolean,
    pickerOptions: {
      type: Object,
      default: () => {
        return {
          selectableRange: "00:00:00 - 23:59:59",
        };
      },
    },
  },
  model: {
    prop: "value",
    event: "change",
  },
  methods: {
    onConfirm() {
      this.$emit("change", this.label);
      this.isFocus = false;
    },
    getTimeList(length) {
      let array = new Array(length).fill(1);
      array = array.map((item, index) => {
        if (index.toString().length === 1) {
          return { value: "0" + index };
        } else {
          return { value: index };
        }
      });
      return array;
    },
    mouseenter() {
      if (this.label) {
        this.showClose = true;
      }
    },
    handleClear() {
      this.$emit("change", "");
      this.label = "";
      this.HH = "";
      this.mm = "";
      this.ss = "";
      this.showClose = false;
    },
    onClick() {
      if (this.disabled) return;
      this.isFocus = !this.isFocus;
      this.HH = moment().hour();
      this.mm = moment().minute();
      this.ss = moment().second();
      this.$emit("change", `${this.HH}:${this.mm}:${this.ss}`);
      this.$nextTick(() => {
        if (this.isSelectableRange) {
          this.$el.querySelector(`#HH`).scrollTop = Number(this.HH) * 32;
          this.$el.querySelector(`#mm`).scrollTop = Number(this.mm) * 32;
          this.$el.querySelector(`#ss`).scrollTop = Number(this.ss) * 32;
        }
      });
    },
    onblur(e) {
      this.isFocus = false;
      this.$emit("blur", e);
    },
    onfocus(e) {
      this.$emit("focus", e);
    },
    onTimeRangeSelect(item, e, type) {
      if (item.disabled) {
        e.preventDefault();
        return;
      }
      this[type] = item.value;
      this.$el.querySelector(`#${type}`).scrollTop = Number(item.value) * 32;
      this.label = `${this.HH}:${this.mm}:${this.ss}`;
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
    submit() {
      this.$emit("change", this.value);
    },
    getTimeSelectList() {
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
      this.timeSelectList = list;
    },
    getOptions() {
      const optionsList = [];
      this.timeSelectList.forEach((item) => {
        optionsList.push({
          label: item.time,
          value: item.time,
          disabled: item.disabled || false,
        });
      });
      this.optionsList = optionsList;
    },
  },
  mounted() {},
};
</script>

<style></style>
