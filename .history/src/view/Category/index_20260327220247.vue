<template>
  <div style="padding: 10px 0px 20px 0px; width: 1200px; margin: 0px auto;">
    <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/category', query: { id } }">{{category.name}}</el-breadcrumb-item>
  </el-breadcrumb>
  <HomeBanner></HomeBanner>
  
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted, watch} from 'vue'
import { getCategoryAPI } from "@/api/category";
import {useRoute} from 'vue-router'
import HomeBanner from '../Home/components/HomeBanner.vue';

let category = ref({})
const route = useRoute()

// 监听路由参数变化
watch(() => route.params.id, async (newId) => {
  if (newId) {
    try {
      const {result} = await getCategoryAPI(Number(newId))
      category.value = result
      console.log(category.value)
    } catch (error) {
      console.error('Failed to get category:', error)
    }
  }
}, { immediate: true })


</script>
<style scoped lang="less">
</style>