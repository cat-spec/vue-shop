<template>
  <div class="goods-item">
   <router-link :to="`/detail/${goods.id}`">
    <div class="image-container">
      <img style="width: 100%;" :src="goods.picture" alt="">
    </div>
    <p class="name">{{goods.name}}</p>
    <p class="desc">{{goods.desc}}</p>
    <p class="price">{{goods.price}}</p>
   </router-link>
  </div>
</template>

<script setup lang="ts">
import type router from '@/router';
import { ref, reactive, toRefs, onMounted} from 'vue'
defineProps({
    goods:{
        type:Object,
        default:()=>{}
    }
})

</script>
<style scoped lang="less">
.desc{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0.4;
  color: #666;
}
</style>