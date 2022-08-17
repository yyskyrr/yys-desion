<template>
  <div id="app">
    <h3>基本用法</h3>
    <div class="block">
      <div class="demonstration">默认不区分颜色</div>
      <YRate v-model="value1"></YRate>
    </div>
    <div class="block">
      <div class="demonstration">区分颜色</div>
      <YRate v-model="value2" :colors="colors"> </YRate>
    </div>
    <p>辅助文字</p>
    <YRate v-model="value3" show-text> </YRate>
    <p>其它 icon</p>
    <YRate
      v-model="value4"
      :icon-classes="iconClasses"
      void-icon-class="icon-rate-face-off"
      :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
    >
    </YRate>
    <p>只读</p>
    <YRate
      v-model="value5"
      disabled
      show-score
      text-color="#ff9900"
      score-template="{value}"
    >
    </YRate>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {},
  data() {
    return {
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: 3,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      iconClasses: ["icon-rate-face-1", "icon-rate-face-2", "icon-rate-face-3"],
    };
  },
  methods: {},
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
