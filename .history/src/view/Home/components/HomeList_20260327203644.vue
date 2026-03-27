<template>
  <div style="height: 400px;">
    <h2>服饰</h2>
    <el-row>
    <el-col :span="4">
      <div style="height: 100%;background-color: aqua;">

      </div>
    </el-col>
    <el-col :span="20">
      <div style="display: flex;flex-wrap: wrap;justify-content: space-between;">
        <div v-for="value in 8"></div>
      </div>
    </el-col>
  </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'

</script>
<style scoped lang="scss">
</style>