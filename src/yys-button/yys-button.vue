<template>
  <button
    @click="onClick"
    :disabled="disabled"
    type="button"
    class="ant-btn"
    :class = "{
       'ant-btn-disabled' : disabled,
       'ant-btn-ghost' : ghost,
       'ant-btn-block' : block,
       [`ant-btn-${type}`] : type,
       [`ant-btn-${shape}`] : shape,
       [`ant-btn-${size}`] : size,
     }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "yys-button",
  data() {
    return {
      text: this.$slots.default[0].text,
    };
  },
  props: {
    type: String,
    disabled: Boolean,
    ghost: Boolean,
    block: Boolean,
    size: String,
    shape: String,
    icon: String,
  },
  computed: {
    // text: this.$slots.default[0].text,
  },
  mounted() {
    console.log(this.$slots);
    console.log(this.disabled);
  },
  updated() {
    this.text = this.$slots.default[0].text;
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.ant-btn {
  margin: 10px;
  line-height: 1.499;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border: 1px solid #d9d9d9;
  &:active {
    box-shadow: none;
    outline: 0;
  }
  &:hover {
    color: #40a9ff;
    background-color: #fff;
    border-color: #40a9ff;
  }
  &.ant-btn-primary {
    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    &.ant-btn-ghost {
      color: #1890ff;
      background: transparent !important;
      border-color: #1890ff;
    }
  }
  &.ant-btn-danger {
    color: #fff;
    background-color: #ff4d4f;
    border-color: #ff4d4f;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    &.ant-btn-ghost {
      color: #ff4d4f;
      background: transparent !important;
      border-color: #ff4d4f;
    }
  }
  &.ant-btn-dashed {
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-color: #d9d9d9;
    border-style: dashed;
  }
  &.ant-btn-link {
    color: #1890ff;
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
  }
  &.ant-btn-disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
    cursor: not-allowed;
  }
  &.ant-btn-ghost {
    color: #fff;
    background: transparent !important;
    border-color: #fff;
  }
  &.ant-btn-small {
    height: 24px;
    padding: 0 7px;
    font-size: 14px;
    border-radius: 4px;
  }
  &.ant-btn-large {
    height: 40px;
    padding: 0 15px;
    font-size: 16px;
    border-radius: 4px;
  }
  &.ant-btn-block {
    width: 100%;
  }
  &.ant-btn-circle {
    min-width: 32px;
    padding-right: 0;
    padding-left: 0;
    text-align: center;
    border-radius: 50%;
  }
  &.ant-btn-round {
    height: 32px;
    padding: 0 16px;
    font-size: 14px;
    border-radius: 32px;
  }
}
</style>
