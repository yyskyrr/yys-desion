<template>
  <div :class="{'yys-select-disabled' : disabled}" class="yys-select">
    <div v-if="isTags">
      <div class="yys-tags-list" @click="onClick">
        <YTextarea v-model="tagsList.join('--------------')" :placeholder="newPlaceholder" auto-size @blur="onblur"
        ></YTextarea>
        <div class="yys-tags-box">
          <div v-for="item in tagsList" class="yys-tags-item">{{ item.value }}
            <span class="yys-close-icon" @click.stop="onDeleteItem(item)">x</span>
          </div>
        </div>
      </div>

      <div v-show="isFocus" class="yys-tags-options-box" @mouseleave="isFocus=false"
      >

        <div
            v-for="(item, index) in optionsList"
            v-if="optionsList.length > 0"
            :key="index"
            :class="{
          'yys-tags-selected': tagsList.indexOf(item) > -1,
        }"
            class="yys-option-item"
            @mousedown="onTagsSelect(item)"
        >
          {{ item.label }}
        </div>
        <div v-if="optionsList.length === 0" class="yys-empty-option">
          <svg height="41" viewBox="0 0 64 41" width="64" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd" transform="translate(0 1)">
              <ellipse cx="32" cy="33" fill="#F5F5F5" rx="32" ry="7"></ellipse>
              <g fillRule="nonzero" stroke="#D9D9D9">
                <path
                    d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                <path
                    d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                    fill="#FAFAFA"></path>
              </g>
            </g>
          </svg>
          {{ emptyText || '暂无数据' }}
        </div>
      </div>
    </div>

    <div v-else>
      <div class="yys-select-box" @click="onClick">
        <YInput v-if="loading" v-model="label" :disabled="disabled" :size="size"
                loading @blur="onblur">
        </YInput>

        <YInput v-else v-model="label" :disabled="disabled" :size="size" @blur="onblur">
          <template #suffix>
            <slot name="suffixIcon">
              <i v-if="showArrow" aria-hidden="true" class="fa fa-angle-down"></i>
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
        }"
            class="yys-option-item"
            @mousedown="onSelect(item)"
        >
          {{ item.label }}
        </div>
        <div v-if="optionsList.length === 0" class="yys-empty-option">
          <svg height="41" viewBox="0 0 64 41" width="64" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd" transform="translate(0 1)">
              <ellipse cx="32" cy="33" fill="#F5F5F5" rx="32" ry="7"></ellipse>
              <g fillRule="nonzero" stroke="#D9D9D9">
                <path
                    d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                <path
                    d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                    fill="#FAFAFA"></path>
              </g>
            </g>
          </svg>
          {{ emptyText || '暂无数据' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YInput from "../yys-input/yys-input";
import YTextarea from "../yys-input/yys-textarea";

export default {
  name: "YSelect",
  components: {
    YInput,
    YTextarea,
  },
  data() {
    return {
      isFocus: this.defaultOpen || this.open,
      isTagsSelect: false,
      isTagsFocus: false,
      optionsList: [],
      tagsList: [],
      label: "",
      currentValue: this.value || this.defaultValue,
      newPlaceholder: this.placeholder,
    };
  },
  watch: {
    value(n, o) {
      if (n !== o && this.mode !== 'multiple') {
        this.currentValue = n
        this.optionsList = []
        this.getOptions()
      }
    },
  },
  computed: {
    isTags() {
      return this.mode === 'tags' || this.mode === 'multiple'
    },
  },
  props: {
    value: {default: ""},
    defaultValue: {default: ""},
    mode: String,
    placeholder: String,
    emptyText: String,
    size: String,
    disabled: Boolean,
    open: Boolean,
    defaultOpen: Boolean,
    showArrow: {type: Boolean, default: true},
    labelInValue: Boolean,
    loading: Boolean
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  methods: {
    onClick(e) {
      if (this.disabled) return
      this.isFocus = !this.isFocus;
      this.$emit("click", e);
    },
    onDeleteItem(item) {
      this.tagsList.splice(this.tagsList.indexOf(item), 1)
      console.log(this.tagsList.length)
      if (this.tagsList.length === 0) {
        this.newPlaceholder = this.placeholder
      }
      console.log('item', item)
      if (this.mode === 'multiple') {
        this.optionsList.push(item)
      }
    },
    onblur(e) {
      this.isFocus = this.isTagsSelect ? true : false;
      this.$emit("blur", e);
    },
    onSelect(item) {
      this.currentValue = item.value;
      this.label = item.label;
      if (this.labelInValue) {
        this.$emit("change", {key: item.value, label: item.label});
        return
      }
      this.$emit("change", item.value);
    },
    getOptions() {
      this.$slots.default.forEach((item) => {
        if (this.value || this.defaultValue === item.data.attrs?.value || item.data.key && this.mode !== 'tags') {
          this.label = this.value || this.defaultValue;
        }
        this.optionsList.push({
          label: item.children[0].text,
          value: item.data.attrs?.value || item.data.key,
        });
      });
    },
    onTagsSelect(item) {
      this.isTagsSelect = true
      if (this.mode === 'multiple') {
        this.optionsList.splice(this.optionsList.indexOf(item), 1)
        this.tagsList.push(item);
        this.$emit("change", this.tagsList);
        return
      }
      if (this.tagsList.indexOf(item) > -1) {
        this.tagsList.splice(this.tagsList.indexOf(item), 1)
      } else {
        this.tagsList.push(item);
      }
      if (this.tagsList.length > 0) {
        this.newPlaceholder = ''
      }

      this.$emit("change", this.tagsList);
    },
  },
  mounted() {
    this.getOptions()

  },
};
</script>

<style>

</style>
