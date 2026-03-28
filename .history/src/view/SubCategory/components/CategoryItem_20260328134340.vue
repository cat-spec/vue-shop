<template>
  <div class="goods-item" style="text-decoration: none;">
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
  text-decoration: none;
  color: #666 !important;
}
.name {
      font-size: 14px;
      color: #333 !important;
      line-height: 1.4;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      min-height: 40px;
    }

    .desc {
      color: #999;
      font-size: 12px;
      margin: 5px 0;
      line-height: 1.3;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .price {
      color: #ff6b00 !important;
      font-size: 16px;
      font-weight: 600;
      margin-top: 8px;
    }
</style>