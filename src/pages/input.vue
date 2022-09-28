<template>
  <div id="app">
    <h3>输入框</h3>
    <div class="yys-input">
      <input type="text" placeholder="用户名" />
    </div>

    <h3>禁用</h3>
    <div class="yys-input disabled">
      <input type="text" disabled placeholder="用户名" />
    </div>

    <h3>可清空</h3>
    <div class="yys-input">
      <input type="text" placeholder="用户名" />
      <span class="suffix">
        <i class="fa fa-times-circle" />
      </span>
    </div>

    <h3>图标</h3>
    <div class="yys-input">
      <span class="prefix">
        <i class="fa fa-user"></i>
      </span>
      <input type="text" placeholder="用户名" />
    </div>
    <br />

    <div class="yys-input">
      <input type="text" placeholder="用户名" />
      <span class="suffix">
        <i class="fa fa-user"></i>
      </span>
    </div>

    <h3>长文本输入</h3>

    <div class="yys-input">
      <textarea cols="60" rows="4"></textarea>
    </div>

    <h3>组合</h3>

    <div class="yys-input">
      <div class="yys-btn">确认</div>
      <input type="text" class="prepend" placeholder="用户名" />
    </div>
    <br />
    <div class="yys-input">
      <input type="text" class="append" placeholder="用户名" />
      <div class="yys-btn">确认</div>
    </div>

    <h3>大小</h3>

    <div class="yys-input">
      <input type="text" class="large" placeholder="用户名" />
    </div>
    <br />
    <div class="yys-input">
      <input type="text" placeholder="用户名" />
    </div>
    <br />
    <div class="yys-input">
      <input type="text" class="small" placeholder="用户名" />
    </div>

    <h3>100%宽</h3>

    <div class="yys-input">
      <input type="text" class="full" placeholder="用户名" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style></style>
