<template>
  <div>
    <span
      v-for="(item, index) in starList"
      :key="index"
      :style="{ cursor: disabled ? 'default' : 'pointer' }"
      class="yys-rate"
      @click="onClick(index)"
      @mouseenter="onMouseenter(index)"
      @mouseleave="onMouseleave"
    >
      <i
        v-if="item.active"
        :class="[iconClass]"
        :style="{ color: color }"
        aria-hidden="true"
        class="fa fa-star yys-star-active"
      ></i>
      <i
        v-else
        :class="[iconClass]"
        :style="{ color: voidColor }"
        aria-hidden="true"
        class="fa fa-star-o yys-star"
      ></i>
    </span>
    <span v-if="showText" :style="{ color: textColor }" class="yys-rate-text">{{
      rateText
    }}</span>
    <span v-if="showScore" class="yys-rate-score">{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: "YRate",
  data() {
    return {
      starList: [
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
      ],
      isHover: false,
      color: "#fdb138",
      rateText: "",
      iconClass: "",
    };
  },
  props: {
    value: Number,
    max: { type: Number, default: 5 },
    lowThreshold: { type: Number, default: 2 },
    highThreshold: { type: Number, default: 4 },
    voidColor: { type: String, default: "#beccd8" },
    textColor: { type: String, default: "#1F2D3D" },
    colors: Array,
    texts: {
      type: Array,
      default: () => ["极差", "失望", "一般", "满意", "惊喜"],
    },
    iconClasses: Array,
    showText: Boolean,
    disabled: Boolean,
    showScore: Boolean,
  },
  components: {},
  model: {
    prop: "value",
    event: "change",
  },
  computed: {},
  methods: {
    onClick(index) {
      if (this.disabled) return;
      this.$emit("change", index + 1);
    },
    onMouseleave() {
      if (this.disabled) return;
      this.active(this.value - 1);
    },

    onMouseenter(index) {
      if (this.disabled) return;
      this.active(index);
    },
    active(value) {
      if (value === -1) {
        this.color = this.colors && this.colors.length === 3 && this.colors[0];
        this.iconClass = this.iconClasses && this.iconClasses[1];
      }
      if (value > -1 && value <= this.lowThreshold - 1) {
        this.color = this.colors && this.colors.length === 3 && this.colors[0];
        this.iconClass = this.iconClasses && this.iconClasses[0];
      }
      if (value > this.lowThreshold - 1 && value < this.highThreshold - 1) {
        this.color = this.colors && this.colors.length === 3 && this.colors[1];
        this.iconClass = this.iconClasses && this.iconClasses[1];
      }
      if (value >= this.highThreshold - 1) {
        this.color = this.colors && this.colors.length === 3 && this.colors[2];
        this.iconClass = this.iconClasses && this.iconClasses[2];
      }
      if (this.showText) {
        this.rateText = this.texts[value];
      }
      this.starList.map((item, key) => {
        item.active = key <= value;
      });
    },
  },
  mounted() {
    this.active(this.value - 1);
  },
};
</script>

<style scoped></style>
