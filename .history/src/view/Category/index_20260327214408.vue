<template>
  <div style="padding: 10px 0px 20px 0px; width: 1200px; margin: 0px auto;">
    <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
    <el-breadcrumb-item>{{category.name}}</el-breadcrumb-item>
   
  </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'
import { getCategoryAPI } from "@/api/category";
import {useRouter} from 'vue-router'

let category = ref({})
let id=useRouter().currentRoute.value.params.id
onMounted(async () => {
  const {result} = await getCategoryAPI(Number(id))
  category.value = result
  console.log(category.value)
})




</script>
<style scoped lang="less">
</style>