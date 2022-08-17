<template>
  <div>
    <span
      @mouseenter="onMouseenter(index)"
      @mouseleave="onMouseleave"
      @click="onClick(index)"
      class="yys-rate"
      :style="{ cursor: disabled ? 'default' : 'pointer' }"
      v-for="(item, index) in starList"
      :key="index"
    >
      <i
        :style="{ color: color }"
        v-if="item.active"
        class="fa fa-star yys-star-active"
        aria-hidden="true"
      ></i>
      <i v-else class="fa fa-star-o yys-star" aria-hidden="true"></i>
    </span>
    <span v-if="showText" class="yys-rate-text">{{ rateText }}</span>
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
      textList: ["极差", "失望", "一般", "满意", "惊喜"],
    };
  },
  props: {
    value: Number,
    colors: Array,
    iconClasses: Array,
    showText: Boolean,
    disabled: Boolean,
    showScore: Boolean,
  },
  components: {},
  watch: {
    value: {
      handler(newVal, oldVal) {
        console.log("newVal", newVal);
        this.starList.map((item, key) => {
          item.active = key + 1 <= newVal;
          this.rateText = this.textList[newVal - 1];
        });
      },
      immediate: true,
      deep: true,
    },
  },
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
      console.log("this.value", this.value);
      this.$emit("change", this.value);
      if (!this.value && this.isHover) {
        this.starList.map((item, key) => {
          item.active = false;
        });
        this.rateText = "";
      }
    },
    onMouseenter(index) {
      if (this.disabled) return;
      if (this.colors && this.colors.length === 3) {
        if (index < 2) {
          this.color = this.colors[0];
        }
        if (index === 2) {
          this.color = this.colors[1];
        }
        if (index > 2) {
          this.color = this.colors[2];
        }
      }

      if (this.showText) {
        this.rateText = this.textList[index];
      }
      this.isHover = true;
      this.starList.map((item, key) => {
        item.active = key <= index;
      });
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
