<template>
  <div id="app">
    <h3>基本使用</h3>
    <div class="yys-select">
      <div class="yys-select-box">
        <div class="yys-input">
          <input type="text" placeholder="请选择" />
          <span class="suffix">
            <i class="fa fa-angle-down"></i>
          </span>
        </div>
      </div>

      <div class="yys-option-box">
        <li>苹果</li>
        <li>香蕉</li>
        <li>橙子</li>
        <li>西瓜</li>
      </div>
    </div>

    <h3 style="margin-top: 180px">禁用</h3>
    <div class="yys-select">
      <div class="yys-select-box">
        <div class="yys-input disabled">
          <input type="text" placeholder="请选择" />
          <span class="suffix">
            <i class="fa fa-angle-down"></i>
          </span>
        </div>
      </div>
    </div>

    <h3>自定义选项</h3>
    <div class="yys-select">
      <div class="yys-select-box">
        <div class="yys-input">
          <input type="text" placeholder="请选择" />
          <span class="suffix">
            <i class="fa fa-angle-down"></i>
          </span>
        </div>
      </div>

      <div class="yys-option-box">
        <li>
          <h2>hello</h2>
        </li>
        <li>苹果</li>
        <li>香蕉</li>
        <li>橙子</li>
        <li>西瓜</li>
      </div>
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
