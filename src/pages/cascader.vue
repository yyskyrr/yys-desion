<template>
  <div id="app">
    <h3>级联选择器</h3>
    <div class="yys-select">
      <div class="yys-select-box">
        <div class="yys-input">
          <input type="text" placeholder="请选择" />
          <span class="suffix">
            <i class="fa fa-angle-down"></i>
          </span>
        </div>
      </div>

      <div class="yys-cascade-box">
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li class="active">
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li class="disabled">
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
      </div>
      <div class="yys-cascade-box">
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
      </div>
    </div>

    <h3>多项级联选择器</h3>
    <div class="yys-select">
      <div class="yys-select-box">
        <div class="yys-input">
          <input type="text" placeholder="请选择" />
          <span class="suffix">
            <i class="fa fa-angle-down"></i>
          </span>
        </div>
      </div>

      <div class="yys-cascade-box">
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li class="active">
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li class="disabled">
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
      </div>
      <div class="yys-cascade-box">
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li class="active">
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li class="disabled">
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
      </div>
      <div class="yys-cascade-box">
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li class="active">
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li class="disabled">
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
      </div>
      <div class="yys-cascade-box">
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li class="active">
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li class="disabled">
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          猫
          <i class="fa fa-angle-right"></i>
        </li>
      </div>
    </div>

    <h3>禁用选项</h3>
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
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
h3:not(:first-child) {
  margin-top: 250px;
}
</style>
