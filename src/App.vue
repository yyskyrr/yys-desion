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
      <Radio v-else-if="currentIndex === 1" />
      <Checkbox v-else-if="currentIndex === 2" />
      <Input v-else-if="currentIndex === 3" />
      <InputNumber v-else-if="currentIndex === 4" />
      <Select v-else-if="currentIndex === 5" />
      <Cascader v-else-if="currentIndex === 6" />
      <Switch_ v-else-if="currentIndex === 7" />
      <Slider v-else-if="currentIndex === 8" />
      <TimePicker v-else-if="currentIndex === 9" />
      <DatePicker v-else-if="currentIndex === 10" />
      <Upload v-else-if="currentIndex === 11" />
      <Rate v-else-if="currentIndex === 12" />
      <Form v-else-if="currentIndex === 13" />
      <div class="beian-bottom">
        备案号：
        <span @click="toBeian" style="cursor: pointer"
          >豫ICP备2022026989号-1</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./pages/button";
import Checkbox from "./pages/checkbox";
import Input from "./pages/input";
import InputNumber from "./pages/inputNumber";
import Select from "./pages/select";
import Cascader from "./pages/cascader";
import TimePicker from "./pages/timePicker";
import DatePicker from "./pages/datePicker";
import Form from "./pages/form";
import Radio from "./pages/radio";
import Rate from "./pages/rate";
import Slider from "./pages/slider";
import Switch_ from "./pages/switch";
import Upload from "./pages/upload";

export default {
  name: "App",
  components: {
    Button,
    Checkbox,
    Upload,
    Input,
    InputNumber,
    Select,
    Cascader,
    Form,
    Radio,
    Rate,
    Slider,
    Switch_,
    TimePicker,
    DatePicker,
  },
  created() {},
  data() {
    return {
      componentList: [
        "Button 按钮",
        "Radio 单选框",
        "Checkbox 多选框",
        "Input 输入框",
        "InputNumber 计数器",
        "Select 选择框",
        "Cascader 级联选择器",
        "Switch 开关",
        "Slider 滑块",
        "TimePicker 时间选择器",
        "DatePicker 日期选择器",
        "Upload 上传",
        "Rate 评分",
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
    toBeian() {
      window.open("https://beian.miit.gov.cn/");
    },
    handleClick(index) {
      this.$store.commit("UPDATE_SELECT_INDEX", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.beian-bottom {
  border-radius: 4px;
  background-color: #eee;
  padding: 14px;
}

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
