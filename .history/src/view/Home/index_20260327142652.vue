<template>
  <div>
    <div style="display: flex; justify-content: center">
      <div>
        <HomeCategory></HomeCategory> <HomeBanner></HomeBanner>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from "vue";
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/HomeBanner.vue";
</script>
<style scoped lang="less"></style>
