<script>
import { ref, watch } from "vue";
import { typeValids } from "./helpers/propsValidators";

export default {
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
      validator(value) {
        return typeValids.includes(value);
      },
    },
    error: {
      type: Boolean,
      deafutl: false,
    },
    subtitle: {
      type: String,
      default: "",
    },
    text: {
      requited: true,
      type: String,
    },
  },
  emits: ["iconClick"],
  setup(props, { emit }) {
    let innerText = ref(props.text);

    watch(innerText, (newValue) => {
      emit("update:text", newValue);
    });

    const clickHandle = () => {
      emit("iconClick");
    };

    return {
      innerText,
      clickHandle,
    };
  },
};
</script>

<template>
  <div
    class="inputBlock"
    :class="{ error }"
  >
    <div class="inputBlock__inputGroup">
      <input
        :type="type"
        :value="innerText"
        required
      />
      <span
        class="inputBlock__icon"
        @click="clickHandle"
      >
        <slot name="icon"></slot>
      </span>
      <span class="inputBlock__placeholder">{{ placeholder }}</span>
    </div>
    <span class="inputBlock__subtitle">{{ subtitle }}</span>
  </div>
</template>

<style lang="scss" scoped>
:root {
  background-color: red;
  width: 100%;
  height: 100%;
}

.inputBlock {
  &.error {
    input {
      background-color: red;
    }
  }
}
</style>
