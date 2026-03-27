<template>
  <div>
      <el-row :gutter="20">
    <el-col v-for="value in 4" :span="6">
      <img v-img-lazy="`@/assets/images/load.gif`"  alt="">
    </el-col>
   
  </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'

</script>
<style scoped lang="less">
</style>