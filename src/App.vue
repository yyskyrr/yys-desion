<template>
  <div class="app">
    <div class="side">
      <div
        v-for="(item, index) in componentList"
        :key="index"
        :style="{ backgroundColor: currentIndex === index ? '#e0f6fe' : '' }"
        @click="handleClick(index)"
      >
        {{ item }}
      </div>
    </div>

    <div class="content">
      <Input v-if="currentIndex === 0" />
      <Radio v-if="currentIndex === 1" />
      <Checkbox v-if="currentIndex === 2" />
      <Select v-if="currentIndex === 3" />
      <Cascader v-if="currentIndex === 4" />
    </div>
  </div>
</template>

<script>
import Checkbox from "./pages/checkbox";
import Input from "./pages/input";
import Select from "./pages/select";
import Cascader from "./pages/cascader";
import Radio from "./pages/radio";

export default {
  name: "App",
  components: {
    Checkbox,
    Input,
    Select,
    Cascader,
    Radio,
  },
  created() {},
  data() {
    return {
      componentList: [
        "Input 输入框",
        "Radio 单选框",
        "Checkbox 多选框",
        "Select 选择框",
        "Cascader 级联选择器",
      ],
    };
  },
  computed: {
    currentIndex() {
      return this.$state.app.selectIndex;
    },
  },
  methods: {
    handleClick(index) {
      this.$store.commit("UPDATE_SELECT_INDEX", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: row;
  min-height: 100vh;

  .side {
    width: 250px;
    flex-shrink: 0;
    border-right: 1px solid #efeeee;

    div {
      font-size: 13px;
      white-space: nowrap;
      padding-left: 20px;
      cursor: pointer;
      color: #000000d9;
      line-height: 50px;

      &:hover {
        color: #008cfa;
      }
    }
  }

  .content {
    padding: 20px;
    width: 100%;
    margin-bottom: 150px;
  }
}
</style>
