<template>
  <div class="button-example">
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<script lang="ts" setup>
import { testApi } from "@/api/test.js";
const res=await testApi({})
</script>


<style scoped>

</style>
