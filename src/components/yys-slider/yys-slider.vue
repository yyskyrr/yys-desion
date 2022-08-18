<template>
  <div class="yys-slider-box">
    <div class="yys-slider" @click="handleClick">
      <div
        :class="{ disabled }"
        :style="{ width: left }"
        class="yys-slider-bar"
      ></div>
      <div
        :class="{ disabled, active }"
        :style="{ left: left }"
        class="yys-slider-button"
        @mousedown="handleMousedown"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @click.stop
      ></div>
      <div
        v-if="tooltipVisible"
        :style="{ left: left }"
        class="yys-slider-tooltip"
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
      active: false,
      pageX: 0,
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
      if (this.disabled) return;
      const value = Math.round((e.offsetX / this.$el.clientWidth) * this.max);
      if (!((value - this.min) % this.step)) {
        this.$emit("change", value);
      }
    },
    handleMouseEnter() {
      if (this.disabled) return;
      if (this.showTooltip) {
        this.tooltipVisible = true;
      }
    },
    handleMouseLeave() {
      if (this.disabled) return;
      this.active = false;
      if (this.showTooltip) {
        this.tooltipVisible = false;
      }
    },
    handleMousedown(e) {
      this.pageX = e.pageX;
      this.listenMouse();
    },
    listenMouse() {
      const temp = this.value;
      const listener = (e) => {
        if (this.showTooltip) {
          this.tooltipVisible = true;
        }
        this.active = true;
        const offsetX = e.pageX - this.pageX;
        let value =
          temp + Math.round((offsetX / this.$el.clientWidth) * this.max);
        if (value < 0) {
          value = 0;
        }
        if (value > 100) {
          value = 100;
        }
        if (!((value - this.min) % this.step)) {
          this.$emit("change", value);
        }
      };
      document.addEventListener("mousemove", listener);
      document.addEventListener("mouseup", (e) => {
        document.removeEventListener("mousemove", listener);
        if (this.showTooltip) {
          this.tooltipVisible = false;
        }
        this.active = false;
      });
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
