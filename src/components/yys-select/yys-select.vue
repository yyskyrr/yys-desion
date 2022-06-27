<template>
  <div :class="{'yys-select-disabled' : disabled}" class="yys-select">
    <div v-if="isTags">
      <div class="yys-tags-list" @click="onClick">
        <YTextarea v-model="tagsList.join('--------------')" :placeholder="placeholder" auto-size @blur="onblur"
        ></YTextarea>
        <div class="yys-tags-box">
          <div v-for="item in tagsList" class="yys-tags-item">{{ item }}
            <span class="yys-close-icon" @click.stop="onDeleteItem(item)">x</span>
          </div>
        </div>
      </div>

      <div v-show="isFocus" class="yys-tags-options-box" @mouseleave="isFocus=false"
      >
        <div
            v-for="(item, index) in optionsList"
            :key="index"
            :class="{
          'yys-tags-selected': tagsList.indexOf(item.value) > -1,
        }"
            class="yys-option-item"
            @mousedown="onTagsSelect(item)"
        >
          {{ item.label }}
        </div>
      </div>
    </div>

    <div v-else>
      <div class="yys-select-box" @click="onClick">
        <YInput v-if="loading" v-model="label" :disabled="disabled"
                loading @blur="onblur">
        </YInput>

        <YInput v-else v-model="label" :disabled="disabled" @blur="onblur">
          <template #suffix>
            <i aria-hidden="true" class="fa fa-angle-down"></i>
          </template>
        </YInput>
      </div>

      <div v-show="isFocus" class="yys-option-box">
        <div
            v-for="(item, index) in optionsList"
            :key="index"
            :class="{
          'yys-option-selected': currentValue == item.value,
        }"
            class="yys-option-item"
            @mousedown="onSelect(item)"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YInput from "../yys-input/yys-input";
import YTextarea from "../yys-input/yys-textarea";

export default {
  name: "yys-select",
  components: {
    YInput,
    YTextarea,
  },
  data() {
    return {
      isFocus: false,
      isTagsSelect: false,
      isTagsFocus: false,
      optionsList: [],
      tagsList: [],
      label: "",
      currentValue: this.value,
      default: this.$slots.default,
    };
  },
  watch: {
    value(n, o) {
      if (n !== o) {
        this.currentValue = n
        this.optionsList = []
        this.getOptions()
      }
    }
  },
  computed: {
    isTags() {
      return this.mode === 'tags'
    },
  },
  props: {
    value: {type: String || Number, default: ""},
    mode: String,
    placeholder: String,
    disabled: Boolean,
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
      console.log('this.value', this.value)
      this.$slots.default.forEach((item) => {
        if (this.value === item.data.attrs?.value || item.data.key && this.mode !== 'tags') {
          this.label = this.value;
        }
        this.optionsList.push({
          label: item.children[0].text,
          value: item.data.attrs?.value || item.data.key,
        });
      });
    },
    onTagsSelect(item) {
      if (this.tagsList.indexOf(item.value) > -1) {
        this.tagsList.splice(this.tagsList.indexOf(item.value), 1)
      } else {
        this.tagsList.push(item.value);
      }
      if (this.tagsList.length > 0) {
        this.placeholder = ''
      }
      this.isTagsSelect = true
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
