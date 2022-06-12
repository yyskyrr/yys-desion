<template>
  <div class="yys-input-affix-wrapper">
    <span v-if="addonBefore || $slots.addonBefore" class="yys-input-addonBefore">
        <div>{{ addonBefore }}</div>
        <slot name="addonBefore"></slot>
    </span>
    <div class="yys-input-tooltip" v-if="tooltip&&showTooltip&&formatValue">
      {{ formatValue }}
    </div>
    <span v-if="$slots.prefix" class="yys-input-prefix" style="left: 12px">
      <slot name="prefix"></slot>
    </span>

    <input
        :style="{
        paddingLeft: ($slots.prefix ? 30 : 11) + 'px',
        marginLeft: marginLeft +'px',
        marginRight: marginRight +'px',
        width,
        borderRadius: $slots.addonAfter || addonAfter?0:'4px'
      }"
        ref="inputRef"
        :disabled="disabled"
        :value="value"
        :type="showPassword? 'password': null"
        @click="handleClick"
        @blur="handleBlur"
        @focus="handleFocus"
        @change="handleChange"
        @input="handleInput"
        :placeholder="placeholder"
        :class="{
        'yys-prefix-input': prefix,
        [`yys-input-${size}`]: size,
        'yys-input-disabled': disabled,
      }"
        class="yys-input"
    />
    <span class="yys-input-suffix" style="right: 12px">
      <slot name="suffix"></slot>
      <i style="cursor: pointer;color: #bfbfbf" @click="value = ''"
         v-if="allowClear && value" class="fa fa-times-circle" aria-hidden="true">
        </i>
        <i v-if="loading&&!enterButton" class="fa fa-circle-o-notch fa-spin " aria-hidden="true"></i>
        <i v-if="search&&!enterButton" class="fa fa-search" style="cursor:pointer;" aria-hidden="true"></i>

        <i @click="showPassword=true" style="cursor: pointer;color: #bfbfbf" v-if="password && !showPassword"
           class="fa fa-eye"
           aria-hidden="true"></i>

         <i @click="showPassword=false" style="cursor: pointer;color: #bfbfbf" v-if="password && showPassword"
            class="fa fa-eye-slash"
            aria-hidden="true"></i>

      <slot name="enterButton">
        <YButton type="primary" v-if="enterButton">
                <i v-if="loading" class="fa fa-circle-o-notch fa-spin " aria-hidden="true"></i>
                <i v-if="search" class="fa fa-search" aria-hidden="true"></i>
                <div v-if="enterButtonText">{{ enterButtonText }}</div>
        </YButton>
      </slot>

    </span>
    <span v-if="addonAfter || $slots.addonAfter" class="yys-input-addonAfter">
        <div>{{ addonAfter }}</div>
        <slot name="addonAfter"></slot>
    </span>
  </div>
</template>

<script>
import YButton from "../yys-button/yys-button";

export default {
  name: "yys-input",
  data() {
    return {
      showTooltip: false,
      showPassword: false,
      marginLeft: 0,
      marginRight: 0,
      width: '100%'
    };
  },
  components: {
    YButton,
  },
  computed: {
    enterButtonText() {
      if (typeof this.enterButton === 'string') {
        return this.enterButton
      }
    }
  },
  props: {
    placeholder: String,
    password: Boolean,
    search: Boolean,
    prefix: String,
    suffix: String,
    formatValue: String,
    addonBefore: String,
    addonAfter: String,
    disabled: Boolean,
    loading: Boolean,
    tooltip: Boolean,
    enterButton: [String, Boolean],
    allowClear: Boolean,
    size: String,
    icon: String,
    value: String,
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    },
    handleBlur(event) {
      this.showTooltip = false
      this.$emit("blur", event);
    },
    handleFocus(event) {
      this.$refs.inputRef.focus()
      this.showTooltip = true
      this.$emit("focus", event);
    },
    handleChange(e) {
      this.$emit("change", e);
    },
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },

  mounted() {
    if (this.addonBefore || this.addonAfter || this.$slots.addonBefore || this.$slots.addonAfter) {
      this.marginLeft = this.$el.firstChild.clientWidth
      this.marginRight = this.$el.lastChild.clientWidth
      this.width = (this.$el.clientWidth - (this.marginLeft || 0) - (this.marginRight || 0)) + 'px'
    }

  },
};
</script>

<style>

</style>
