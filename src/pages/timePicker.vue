<template>
  <div id="app">
    <h3>固定时间点</h3>
    <YTimeSelect
      v-model="value"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
      }"
      placeholder="选择时间"
    >
    </YTimeSelect>
    <h3>任意时间点</h3>
    <YTimeSelect
      v-model="value1"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00',
      }"
      placeholder="任意时间点"
    >
    </YTimeSelect>
    <YTimeSelect
      v-model="value2"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00',
      }"
      arrow-control
      placeholder="任意时间点"
    >
    </YTimeSelect>
    <h3>固定时间范围</h3>
    <YTimeSelect
      placeholder="起始时间"
      v-model="startTime"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
      }"
    >
    </YTimeSelect>
    <YTimeSelect
      placeholder="结束时间"
      v-model="endTime"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
        minTime: startTime,
      }"
    >
    </YTimeSelect>
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
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40),
      startTime: "",
      endTime: "",
    };
  },
  methods: {},
};
</script>

<style></style>
