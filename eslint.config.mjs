// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  {
    rules: {
      "max-len": "off",
      "operator-linebreak": "off",
      "implicit-arrow-linebreak": "off",
      "function-paren-newline": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/multiline-html-element-content-newline": "off"
    }
  }
]);
