<template>
  <div class="app">
    <div class="side">
      <div
        v-for="(item, index) in componentList"
        :key="index"
        @click="handleClick(index)"
        :style="{ backgroundColor: currentIndex === index ? '#e0f6fe' : '' }"
      >
        {{ item }}
      </div>
    </div>

    <div class="content">
      <Button v-if="currentIndex === 0" />
      <Checkbox v-else-if="currentIndex === 1" />
      <Radio v-else-if="currentIndex === 2" />
      <Input v-else-if="currentIndex === 3" />
      <Select v-else-if="currentIndex === 4" />
      <Form v-else-if="currentIndex === 5" />
    </div>
  </div>
</template>

<script>
import Button from "./pages/button";
import Checkbox from "./pages/checkbox";
import Input from "./pages/input";
import Select from "./pages/select";
import Form from "./pages/form";
import Radio from "./pages/radio";
import store from "@/store";

export default {
  name: "App",
  components: {
    Button,
    Checkbox,
    Input,
    Select,
    Form,
    Radio,
  },
  created() {},
  data() {
    return {
      componentList: [
        "button 按钮",
        "checkbox 多选框",
        "radio 单选框",
        "input 输入框",
        "select 选择框",
        "form 表单",
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
