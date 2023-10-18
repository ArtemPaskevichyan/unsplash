<template>
  <BaseHeader />
  <router-view></router-view>
</template>

<script>
import BaseHeader from "@/components/header/BaseHeader.vue";

export default {
  components: {
    BaseHeader,
  },
};
</script>
