<template>
  <div id="app">
    <h3>选择日</h3>
    <YDatePicker v-model="value" type="date" placeholder="选择日期">
    </YDatePicker>
    <!--    <h3>其他日期单位</h3>-->
    <!--    <h4 class="demonstration">月</h4>-->
    <!--    <YDatePicker v-model="value2" type="month" placeholder="选择月">-->
    <!--    </YDatePicker>-->
    <!--    <h4 class="demonstration">年</h4>-->
    <!--    <YDatePicker v-model="value3" type="year" placeholder="选择年">-->
    <!--    </YDatePicker>-->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {},
  computed: {},
  data() {
    return {
      value: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
    };
  },
  methods: {},
};
</script>

<style></style>
