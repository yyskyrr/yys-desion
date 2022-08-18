<template>
  <div class="yys-slider-box">
    <div class="yys-slider" @click="handleClick">
      <div class="yys-slider-bar" :style="{ width: left }"></div>
      <div
        class="yys-slider-button"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        :style="{ left: left }"
      ></div>
      <div
        v-if="tooltipVisible"
        class="yys-slider-tooltip"
        :style="{ left: left }"
      >
        {{ formatTooltipValue || value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YSlider",
  data() {
    return {
      tooltipVisible: false,
    };
  },
  props: {
    value: { type: Number, default: 0 },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    disabled: { type: Boolean, default: false },
    step: { type: Number, default: 1 },
    showTooltip: { type: Boolean, default: true },
    formatTooltip: { type: Function },
  },
  components: {},
  model: {
    prop: "value",
    event: "change",
  },
  computed: {
    left() {
      return ((this.value - this.min) / this.max) * 100 + "%";
    },
    formatTooltipValue() {
      if (this.formatTooltip) {
        return this.formatTooltip(this.value);
      } else {
        return undefined;
      }
    },
  },
  methods: {
    handleClick(e) {
      const value = Math.round((e.offsetX / this.$el.clientWidth) * this.max);
      this.$emit("change", value);
    },
    handleMouseEnter() {
      if (this.showTooltip) {
        this.tooltipVisible = true;
      }
    },
    handleMouseLeave() {
      if (this.showTooltip) {
        this.tooltipVisible = false;
      }
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
