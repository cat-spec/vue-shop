<template>
  <div style="height: 400px;">
    <h2>服饰</h2>
      <div style="height: 100%;background-color: aqua;width: 20%;">
      </div>
      <div style="height: 100%; display: flex;flex-wrap: wrap;justify-content: space-between;">
        <div style="height: 100%; background-color: aquamarine;" v-for="value in 8"></div>
      </div>
   
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'

</script>
<style scoped lang="scss">
</style>