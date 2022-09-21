<template>
  <div class="yys-form" :class="{ 'yys-form-inline': inline }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YForm",
  props: {
    model: Object,
    rules: Object,
    inline: Boolean,
    hideRequiredAsterisk: { type: Boolean, default: false },
    showMessage: { type: Boolean, default: true },
    labelWidth: { type: String, default: "80px" },
    labelPosition: String,
    size: String,
  },
  data() {
    return {};
  },
  methods: {
    validate(callback) {
      let valid = true;
      try {
        this.$children.forEach((item) => {
          item.$children.forEach((each) => {
            if (each.submit) {
              each.submit();
              return;
            }
            if (each.$children[0].submit) {
              each.$children[0].submit();
              return;
            } else {
              return;
            }
          });
        });
      } catch (e) {
        // console.log(e);
      }

      this.$children.forEach((item) => {
        if (item.messageVisible) {
          valid = false;
        }
      });
      callback(valid);
    },

    resetFields() {
      this.$children.forEach((item) => {
        item.messageVisible = false;
        item.$children.forEach((each) => {
          each.messageVisible = false;
        });
      });
    },
  },
  created() {},
  mounted() {
    // this.$children.forEach((item) => {
    //   item.$children.forEach((each) => {
    //     console.log(each.size);
    //     each.size = this.size;
    //     console.log(each.size);
    //   });
    // });
  },
};
</script>

<style scoped></style>
