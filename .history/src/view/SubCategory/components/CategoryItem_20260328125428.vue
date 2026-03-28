<template>
  <div>
      <div style="width: 18%;">
        <img :src="goods.picture" alt="">
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
.flexbox{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>