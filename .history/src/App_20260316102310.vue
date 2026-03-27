<template>
  <div class="button-example">
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<script lang="ts" setup>
import { testApi } from "@/api/test.js";
console.log(testApi());
</script>


<style scoped>

</style>
