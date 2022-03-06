<script>
export default {
  name: "BaseInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
