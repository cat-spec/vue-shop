<template>
  <div>
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="{path:'/category/'+detail.categories[0].parent.id}">{{ detail.categories[0].parent.name }}</el-breadcrumb-item>
    <el-breadcrumb-item >{{ detail.categories[0].name }}</el-breadcrumb-item>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'
import DetailHot from './components/DetailHot.vue'
import { getDetail } from '@/api/detail';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;
let detail=ref([]);

onMounted(async () => {
   let {result} = await getDetail(id);
   detail.value=result;
   console.log(detail.value);
})


</script>
<style scoped lang="less">
</style>