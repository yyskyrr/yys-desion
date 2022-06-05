<template>
  <div class="app">
    <div class="side">
      <div v-for="(item,index) in componentList" :key="index" @click="currentIndex=index"
           :style="{backgroundColor:currentIndex===index?'#e0f6fe':''}">
        {{ item }}
      </div>
    </div>

    <div class="content">
      <Button v-if="currentIndex  === 0"/>
      <Checkbox v-else-if="currentIndex === 1"/>
      <Input v-else-if="currentIndex  === 2"/>
      <Select v-else-if="currentIndex === 3"/>
    </div>
  </div>
</template>

<script>
import Button from "./pages/button";
import Checkbox from "./pages/checkbox";
import Input from "./pages/input";
import Select from "./pages/select";

export default {
  name: "App",
  components: {
    Button,
    Checkbox,
    Input,
    Select,
  },
  created() {
  },
  data() {
    return {
      componentList: ['button 按钮', 'checkbox 多选框', 'input 输入框', 'select 选择框',],
      currentIndex: 0
    };
  },
  methods: {},
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
  }
}

</style>
