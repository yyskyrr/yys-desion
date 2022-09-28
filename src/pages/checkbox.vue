<template>
  <div id="app">
    <h3>复选框</h3>
    <label class="yys-checkbox">
      <span class="checkbox"><input type="checkbox" value="apple" /></span>
      <span>苹果</span>
    </label>

    <h3>选中</h3>
    <label class="yys-checkbox checked">
      <span class="checkbox"><input type="radio" /></span>
      <span>苹果</span>
    </label>

    <h3>禁用</h3>
    <label class="yys-checkbox disabled">
      <span class="checkbox"><input type="checkbox" value="apple" /></span>
      <span>苹果</span>
    </label>

    <label class="yys-checkbox disabled checked">
      <span class="checkbox"><input type="checkbox" /></span>
      <span>苹果</span>
    </label>

    <h3>单选框组（水平）</h3>
    <div class="yys-checkbox-group">
      <label class="yys-checkbox">
        <span class="checkbox"><input type="checkbox" /></span>
        <span>苹果</span>
      </label>
      <label class="yys-checkbox">
        <span class="checkbox"><input type="checkbox" /></span>
        <span>香蕉</span>
      </label>
      <label class="yys-checkbox">
        <span class="checkbox"><input type="checkbox" /></span>
        <span>橙子</span>
      </label>
    </div>

    <h3>单选框组（垂直）</h3>
    <div class="yys-checkbox-group vertical">
      <label class="yys-checkbox">
        <span class="checkbox"><input type="checkbox" /></span>
        <span>苹果</span>
      </label>
      <label class="yys-checkbox">
        <span class="checkbox"><input type="checkbox" /></span>
        <span>香蕉</span>
      </label>
      <label class="yys-checkbox">
        <span class="checkbox"><input type="checkbox" /></span>
        <span>橙子</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
