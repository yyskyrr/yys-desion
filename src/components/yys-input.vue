<template>
  <div class="ant-input-affix-wrapper">
    <span class="ant-input-prefix" style="left: 12px">{{ prefix }}</span>
    <input
      v-model="value"
      :placeholder="placeholder"
      :class="`${prefix ? `ant-prefix-input` : ''} ${
        size ? `ant-input-${size}` : ''
      }`"
      class="ant-input"
    />
    <span class="ant-input-suffix" style="right: 12px"
      >{{ suffix }}
      <i
        @click="value = ''"
        v-if="allowClear && value"
        aria-label="图标: close-circle"
        tabindex="-1"
        class="anticon anticon-close-circle ant-input-clear-icon"
        ><svg
          viewBox="64 64 896 896"
          data-icon="close-circle"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          class=""
        >
          <path
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
          ></path></svg
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "button",
  data() {
    return {
      value: this.$slots.default,
    };
  },
  props: {
    placeholder: String,
    prefix: String,
    suffix: String,
    disabled: Boolean,
    allowClear: Boolean,
    size: String,
    icon: String,
  },
  computed: {},
  mounted() {
    console.log(this.$slots);
    console.log(this.disabled);
  },
  components: {},
};
</script>

<style lang="less" scoped>
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.ant-input-clear-icon {
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
  cursor: pointer;
  transition: color 0.3s;
  vertical-align: 0;
}
.ant-input {
  box-sizing: border-box;
  margin: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: "tnum";
  position: relative;
  display: inline-block;
  width: 100%;
  height: 32px;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all 0.3s;
  &:hover {
    border-color: #1890ff;
  }
  &:focus {
    outline: 0;
    border-color: #1890ff;
  }
  &.ant-input-large {
    height: 40px;
    padding: 6px 11px;
    font-size: 16px;
  }
  &.ant-input-small {
    height: 24px;
    padding: 1px 7px;
  }
}
.ant-input-affix-wrapper {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: "tnum";
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: start;
  .ant-prefix-input {
    position: relative;
    text-align: inherit;
    padding: 0 30px;
  }
  .ant-input-prefix,
  .ant-input-suffix {
    position: absolute;
    top: 50%;
    z-index: 2;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.65);
    line-height: 0;
    transform: translateY(-50%);
  }
}
</style>
