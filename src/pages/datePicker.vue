<template>
  <div id="app">
    <h3>选择日</h3>
    <YDatePicker v-model="value" type="date" placeholder="选择日期">
    </YDatePicker>
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
      value1: "18:40",
      startTime: "",
      endTime: "",
    };
  },
  methods: {},
};
</script>

<style></style>
