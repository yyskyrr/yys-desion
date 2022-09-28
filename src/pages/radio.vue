<template>
  <div id="app">
    <h3>单选框</h3>
    <label class="yys-radio">
      <span class="radio"><input type="radio" /></span>
      <span>苹果</span>
    </label>

    <h3>选中</h3>
    <label class="yys-radio checked">
      <span class="radio"><input type="radio" /></span>
      <span>苹果</span>
    </label>

    <h3>禁用</h3>
    <label class="yys-radio disabled">
      <span class="radio"><input type="radio" /></span>
      <span>苹果</span>
    </label>

    <label class="yys-radio disabled checked">
      <span class="radio"><input type="radio" /></span>
      <span>苹果</span>
    </label>

    <h3>单选框组（水平）</h3>
    <div class="yys-radio-group">
      <label class="yys-radio">
        <span class="radio"><input type="radio" /></span>
        <span>苹果</span>
      </label>
      <label class="yys-radio">
        <span class="radio"><input type="radio" /></span>
        <span>香蕉</span>
      </label>
      <label class="yys-radio">
        <span class="radio"><input type="radio" /></span>
        <span>橙子</span>
      </label>
    </div>

    <h3>单选框组（垂直）</h3>
    <div class="yys-radio-group vertical">
      <label class="yys-radio">
        <span class="radio"><input type="radio" /></span>
        <span>苹果</span>
      </label>
      <label class="yys-radio">
        <span class="radio"><input type="radio" /></span>
        <span>香蕉</span>
      </label>
      <label class="yys-radio">
        <span class="radio"><input type="radio" /></span>
        <span>橙子</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {},
  data() {
    return {};
  },
  methods: {},
};
</script>
