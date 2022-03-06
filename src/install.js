import BaseInput from "./components/base/Input.vue";

const BaseInputComponents = {
  install(Vue) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("base-input", BaseInput);
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(BaseInputComponents);
}

export default BaseInputComponents;
