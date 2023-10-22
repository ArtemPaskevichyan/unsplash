<script>
import { ref, onMounted } from "vue";

export default {
  props: {
    src: {
      required: true,
      type: String,
    },
    dataSrc: {
      required: true,
      type: String,
    },
    alt: {
      type: String,
    },
    lazy: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const innerSrc = ref(props.src);
    const img = ref(null);
    // console.log("TEST");
    if (props.lazy) {
      const dataImage = new Image();
      const observerCallback = () => {
        dataImage.src = props.dataSrc;
        dataImage.onload = () => {
          innerSrc.value = dataImage.src;
        };
      };
      const observerOptions = {
        rootMargin: "100px",
        threshold: 0.0,
      };
      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );
      onMounted(() => {
        observer.observe(img.value);
      });
    }

    return { innerSrc, img };
  },
};
</script>

<template>
  <img
    ref="img"
    :src="innerSrc"
  />
</template>
