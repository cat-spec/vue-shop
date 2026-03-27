<template>
  <div style="padding: 20px 0px; width: 1200px; margin: 0px auto;">
    <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
    <el-breadcrumb-item>{{category.name}}</el-breadcrumb-item>
   
  </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'
import { getCategoryAPI } from "@/api/category";

let category = ref({})

onMounted(async () => {
  const {result} = await getCategoryAPI($route.params.id)
  category.value = result
  console.log(category.value)
})




</script>
<style scoped lang="less">
</style>