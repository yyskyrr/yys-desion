<template>
  <div id="app">
    <div>
      <YButton type="primary" icon="search" shape="round">按钮</YButton>
    </div>

    <YInput prefix="123123" suffix="234234" placeholder="round" />
  </div>
</template>

<script>
import YButton from "./components/yys-button.vue";
import YCheckbox from "./components/yys-checkbox.vue";
import YInput from "./components/yys-input.vue";
import YSelect from "./components/yys-select.vue";

export default {
  name: "App",
  components: {
    YButton,
    YCheckbox,
    YInput,
    YSelect,
  },
};
</script>

<style></style>
