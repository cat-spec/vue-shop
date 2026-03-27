<template>
  <div>
    <el-row v-for="item in thingList" :key="item.id" :gutter="10">
         <el-col :span="6"><img :src="item.picture" alt="">
            <p>{{ item.name }}</p></el-col>
         </el-col>
   
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
