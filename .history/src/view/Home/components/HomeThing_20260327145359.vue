<template>
  <div>
    <el-row :gutter="10">
     <el-col v-for="item in thingList" :span="6"><div class="grid-content ep-bg-purple" />
        <img :src="item.picture" alt="">
        <p>{{ item.name }}</p>
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
