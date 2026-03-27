<template>
  <div>
    <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
  </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'
import { getThingAPI } from '@/api/home'

const thingList = ref([])

onMounted(async () => {
  let {result} = await getThingAPI();
  thingList.value = result;
})

</script>
<style scoped lang="less">
</style>
