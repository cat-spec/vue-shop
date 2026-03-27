<template>
  <div class="button-example">
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<script lang="ts" setup>
import { testApi } from "@/api/test.js";
testApi({
    type:1
}).then(res=>{
    console.log(res);
})
</script>


<style scoped>

</style>
