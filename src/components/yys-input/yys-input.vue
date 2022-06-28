<template>
  <div class="yys-input-affix-wrapper">
    <span v-if="addonBefore || $slots.addonBefore" class="yys-input-addonBefore">
        <div>{{ addonBefore }}</div>
        <slot name="addonBefore"></slot>
    </span>
    <div v-if="tooltip&&showTooltip&&formatValue" class="yys-input-tooltip">
      {{ formatValue }}
    </div>
    <span v-if="$slots.prefix" class="yys-input-prefix" style="left: 12px">
      <slot name="prefix"></slot>
    </span>

    <input
        ref="inputRef"
        :class="{
        'yys-prefix-input': prefix,
        [`yys-input-${size}`]: size,
        'yys-input-disabled': disabled,
      }"
        :disabled="disabled"
        :placeholder="placeholder"
        :style="{
        paddingLeft: ($slots.prefix ? 30 : 11) + 'px',
        paddingRight: (enterButton  ?50:(allowClear || loading ||password || search ||$slots.suffix) ?30:11) + 'px',
        marginLeft: marginLeft +'px',
        marginRight: marginRight +'px',
        width,
        borderRadius: $slots.addonAfter || addonAfter?0:'4px'
      }"
        :type="showPassword? 'password': null"
        :value="value"
        class="yys-input"
        @blur="handleBlur"
        @change="handleChange"
        @click="handleClick"
        @focus="handleFocus"
        @input="handleInput"
        @select="handleSelect"
    />
    <span class="yys-input-suffix" style="right: 12px">
      <slot name="suffix"></slot>
      <i v-if="allowClear && value" aria-hidden="true"
         class="fa fa-times-circle" style="cursor: pointer;color: #bfbfbf" @click="value = ''">
        </i>
        <i v-if="loading&&!enterButton" aria-hidden="true" class="fa fa-spinner fa-pulse "></i>
        <i v-if="search&&!enterButton" aria-hidden="true" class="fa fa-search" style="cursor:pointer;"></i>

        <i v-if="password && !showPassword" aria-hidden="true" class="fa fa-eye"
           style="cursor: pointer;color: #bfbfbf"
           @click="showPassword=true"></i>

         <i v-if="password && showPassword" aria-hidden="true" class="fa fa-eye-slash"
            style="cursor: pointer;color: #bfbfbf"
            @click="showPassword=false"></i>

      <slot name="enterButton">
        <YButton v-if="enterButton" type="primary">
                <i v-if="loading" aria-hidden="true" class="fa fa-spinner fa-pulse"></i>
                <i v-if="search" aria-hidden="true" class="fa fa-search"></i>
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
  name: "YInput",
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
    handleSelect(e) {
      this.$emit("select", e.target.value);
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
