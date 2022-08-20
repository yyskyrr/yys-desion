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
      <Button v-if="currentIndex === 0" />
      <Checkbox v-else-if="currentIndex === 1" />
      <Radio v-else-if="currentIndex === 2" />
      <Rate v-else-if="currentIndex === 3" />
      <Switch_ v-else-if="currentIndex === 4" />
      <Slider v-else-if="currentIndex === 5" />
      <Input v-else-if="currentIndex === 6" />
      <InputNumber v-else-if="currentIndex === 7" />
      <Select v-else-if="currentIndex === 8" />
      <Form v-else-if="currentIndex === 9" />
    </div>
  </div>
</template>

<script>
import Button from "./pages/button";
import Checkbox from "./pages/checkbox";
import Input from "./pages/input";
import InputNumber from "./pages/inputNumber";
import Select from "./pages/select";
import Form from "./pages/form";
import Radio from "./pages/radio";
import Rate from "./pages/rate";
import Slider from "./pages/slider";
import Switch_ from "./pages/switch";

export default {
  name: "App",
  components: {
    Button,
    Checkbox,
    Input,
    InputNumber,
    Select,
    Form,
    Radio,
    Rate,
    Slider,
    Switch_,
  },
  created() {},
  data() {
    return {
      componentList: [
        "Button 按钮",
        "Checkbox 多选框",
        "Radio 单选框",
        "Rate 评分",
        "Switch 开关",
        "Slider 滑块",
        "Input 输入框",
        "InputNumber 计数器",
        "Select 选择框",
        "Form 表单",
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
  }
}
</style>
