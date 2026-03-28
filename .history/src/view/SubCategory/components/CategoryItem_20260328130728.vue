<template>
  <div class="goods-item">
    <div class="image-container">
      <img style="width: 100%;" :src="goods.picture" alt="">
    </div>
    <p class="name">{{goods.name}}</p>
    <p class="desc">{{goods.desc}}</p>
    <p class="price">{{goods.price}}</p>
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
.desc{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0.8;
  color: #666;
}
</style>