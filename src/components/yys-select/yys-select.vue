<template>
  <div :class="{ 'yys-select-disabled': disabled }" class="yys-select">
    <div v-if="isTags">
      <div class="yys-tags-list" @click="onClick">
        <YTextarea
          v-model="tagsListValue.join('一一一一一一')"
          :placeholder="newPlaceholder"
          auto-size
          @blur="onblur"
        ></YTextarea>
        <div class="yys-tags-box">
          <div v-for="(item, key) in tagsList" :key="key" class="yys-tags-item">
            {{ item.label }}
            <span class="yys-close-icon" @click.stop="onDeleteItem(item)"
              >x
            </span>
          </div>
        </div>
      </div>

      <div v-show="isFocus" class="yys-tags-options-box">
        <div
          v-for="(item, index) in optionsList"
          v-if="optionsList.length > 0"
          :key="index"
          :class="{
            'yys-tags-selected': tagsList.indexOf(item) > -1,
          }"
          class="yys-option-item"
          @mousedown.prevent="onTagsSelect(item)"
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
      <div
        class="yys-select-box"
        @mouseenter="mouseenter"
        @mouseleave="showClear = false"
        @click="onClick"
      >
        <YInput
          v-if="loading"
          v-model="label"
          :disabled="disabled"
          :size="size"
          loading
          @blur="onblur"
        >
        </YInput>

        <YInput
          v-else
          v-model="label"
          :disabled="disabled"
          :placeholder="newPlaceholder"
          :size="size"
          @blur="onblur"
        >
          <template #prefix>
            <slot name="prefixIcon"></slot>
          </template>
          <template #suffix>
            <slot name="suffixIcon">
              <i
                v-if="showArrow"
                aria-hidden="true"
                class="fa fa-angle-down"
                style="cursor: pointer"
              ></i>
              <i
                v-show="allowClear && showClear"
                aria-hidden="true"
                class="fa fa-times-circle"
                style="cursor: pointer; color: #d9d9d9"
                @click.stop="handleClear"
              ></i>
            </slot>
          </template>
        </YInput>
      </div>

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
export default {
  name: "YSelect",
  data() {
    return {
      isFocus: this.defaultOpen || this.open,
      isTagsFocus: false,
      showClear: false,
      optionsList: [],
      tagsList: [],
      tagsListValue: [],
      newTimeSelectList: [],
      label: "",
      currentValue: this.value || this.defaultValue,
      newPlaceholder: this.placeholder,
    };
  },
  watch: {
    value(n, o) {
      if (n !== o && this.mode !== "multiple") {
        this.currentValue = n;
        this.optionsList = [];
        this.getOptions();
      }
    },
  },
  computed: {
    isTags() {
      return this.mode === "tags" || this.mode === "multiple";
    },
    // rule1() {
    //   return this.$parent.rule1;
    // },
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
    showArrow: { type: Boolean, default: true },
    allowClear: { type: Boolean, default: false },
    labelInValue: Boolean,
    loading: Boolean,
  },
  model: {
    prop: "value",
    event: "change",
  },
  methods: {
    mouseenter() {
      if (this.label) {
        this.showClear = true;
      }
    },
    handleClear() {
      this.$emit("change", "");
      this.label = "";
      this.showClear = false;
    },
    onClick(e) {
      if (this.disabled) return;
      this.isFocus = !this.isFocus;
      this.$emit("click", e);
    },
    onDeleteItem(item) {
      this.tagsList.splice(this.tagsList.indexOf(item), 1);
      this.tagsListValue.splice(this.tagsListValue.indexOf(item.label), 1);
      if (this.tagsList.length === 0) {
        this.newPlaceholder = this.placeholder;
      }
      if (this.mode === "multiple") {
        this.optionsList.push(item);
      }
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
      // if (this.rule1 && this.rule1.trigger === "change") {
      //   this.$parent.handleChange(item.value);
      // }
      this.$emit("change", item.value);
    },
    submit() {
      this.$emit("change", this.value);
    },
    getOptions() {
      const optionsList = [];
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
    onTagsSelect(item) {
      if (this.mode === "multiple") {
        this.optionsList.splice(this.optionsList.indexOf(item), 1);
        this.tagsList.push(item);
        this.$emit("change", this.tagsList);
        return;
      }
      if (this.tagsList.indexOf(item) > -1) {
        this.tagsList.splice(this.tagsList.indexOf(item), 1);
      } else {
        this.tagsList.push(item);
      }
      const tagsListValue = [];
      this.tagsList.forEach((item) => {
        tagsListValue.push(item.label.trim());
      });
      this.tagsListValue = tagsListValue;
      if (this.tagsList.length > 0) {
        this.newPlaceholder = "";
      }

      this.$emit("change", this.tagsListValue);
    },
  },
  mounted() {
    this.getOptions();
  },
};
</script>

<style></style>
