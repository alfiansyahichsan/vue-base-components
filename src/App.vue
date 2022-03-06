<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="test" />
  <BaseInput v-model="test" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import BaseInput from "./components/base/Input.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    BaseInput,
  },
  data() {
    return {
      test: "",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
