module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser", // 解析器
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/no-v-model-argument": 0,
    "no-unused-vars": 0,
    "vue/no-use-v-if-with-v-for": 0,
    "vue/valid-v-model": 0,
    "vue/no-unused-components": 0,
    "vue/no-unused-vars": 0,
    "vue/no-textarea-mustache": 0,
    "vue/no-mutating-props": 0,
  },
};
