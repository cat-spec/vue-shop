<template>
  <div>
    <div style="display: flex;justify-content: space-between;" >
        <div v-for="item in thingList" :key="item.id">
            <img :src="item.picture" alt="">
            <p>{{ item.name }}</p>
        </div>
    </div>
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

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
