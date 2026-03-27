<script setup>
import { getBannerAPI } from '@/api/home'
import { onMounted, ref } from 'vue'

const bannerList = ref([])

const getBanner = async () => {
  const res = await getBannerAPI()
  console.log(res)
  bannerList.value = res.result
}

onMounted(() => getBanner())

</script>
<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  flex: 1;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  margin-left: -250px;
  position: relative;
  z-index: 5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>