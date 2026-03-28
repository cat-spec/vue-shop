<template>
  <div>
      <div>
        <img style="width: 20%;" :src="goods.picture" alt="">
        <i>{{goods.name}}</i>
        <i>{{goods.desc}}</i>
        <i>{{goods.price}}</i>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'
defineProps({
    goods:{
        type:Object,
        default:()=>{}
    }
})

</script>
<style scoped lang="less">

</style>