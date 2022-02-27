<template>
  <div class="ant-input-affix-wrapper">
    <span class="ant-input-prefix" style="left: 12px">{{ prefix }}</span>
    <input
      :placeholder="placeholder"
      class="ant-input"
      :class="`${type ? `ant-btn-${type}` : ''} `"
    />
    <span class="ant-input-suffix" style="right: 12px">{{ suffix }}</span>
  </div>
</template>

<script>
export default {
  name: "button",
  data() {
    return {
      text: this.$slots.default[0].text,
    };
  },
  props: {
    placeholder: String,
    prefix: String,
    suffix: String,
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
  components: {},
};
</script>

<style lang="less" scoped>
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
  .ant-input {
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
