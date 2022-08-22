<template>
  <div id="app">
    <h3>选择日</h3>
    <YTimePicker
      v-model="value"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
      }"
      placeholder="选择时间"
    >
    </YTimePicker>
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
