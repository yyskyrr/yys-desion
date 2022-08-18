<template>
  <div id="app">
    <h3>基本用法</h3>
    <div class="block">
      <span class="demonstration">默认</span>
      <YSlider v-model="value1"></YSlider>
    </div>
    <div class="block">
      <span class="demonstration">自定义初始值</span>
      <YSlider v-model="value2"></YSlider>
    </div>
    <div class="block">
      <span class="demonstration">隐藏 Tooltip</span>
      <YSlider v-model="value3" :show-tooltip="false"></YSlider>
    </div>
    <div class="block">
      <span class="demonstration">格式化 Tooltip</span>
      <YSlider v-model="value4" :format-tooltip="formatTooltip"></YSlider>
    </div>
    <div class="block">
      <span class="demonstration">禁用</span>
      <YSlider v-model="value5" disabled></YSlider>
    </div>

    <h3>离散值</h3>
    <div class="block">
      <span class="demonstration">不显示间断点</span>
      <YSlider v-model="value6" :step="10"></YSlider>
    </div>
    <div class="block">
      <span class="demonstration">显示间断点</span>
      <YSlider v-model="value7" :step="10" show-stops></YSlider>
    </div>
    <!--    <h3 id="attributes">Attributes</h3>-->
    <!--    <h3 id="events">Events</h3>-->
  </div>
</template>

<script>
export default {
  name: "App",
  created() {},
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
      value6: 0,
      value7: 0,
    };
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    },
  },
};
</script>

<style scoped>
.block {
  margin-bottom: 14px;
}

.demonstration {
  margin-bottom: 14px;
}
</style>
