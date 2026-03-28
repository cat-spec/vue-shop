<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/api/category'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import CategoryItem from '../SubCategory/components/CategoryItem.vue'
// 获取面包屑导航数据
const categoryData = ref({})
const route = useRoute()
const getCategoryData = async () => {
  const res = await getCategoryFilterAPI(route.params.id)
  categoryData.value = res.result
}
onMounted(() => getCategoryData())

// 获取基础列表数据渲染
const goodList = ref([])
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const getGoodList = async () => {
  const res = await getSubCategoryAPI(reqData.value)
  console.log(res)
  goodList.value = res.result.items
  console.log(goodList.value)
}
onMounted(() => getGoodList())


// tab切换回调
const tabChange = () => {
  console.log('tab切换了', reqData.value.sortField)
  reqData.value.page = 1
  getGoodList()
}

// 加载更多
const disabled = ref(false)
const load = async () => {
  console.log('加载更多数据咯')
  // 获取下一页的数据
  reqData.value.page++
  const res = await getSubCategoryAPI(reqData.value)
  goodList.value = [...goodList.value, ...res.result.items]
  // 加载完毕 停止监听
  if (res.result.items.length === 0) {
    disabled.value = true
  }
}

</script>

<template>
  <div style="width: 80%;margin: 0 auto;" class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryData.parentId}` }">{{ categoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <CategoryItem v-for="goods in goodList" :goods="goods" :key="goods.id" />
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;

  .body {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .goods-item {
    display: block;
    width: 18%;
    padding: 12px;
    text-align: center;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    
    .image-container {
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      position: relative;
      overflow: hidden;
      border-radius: 4px;
      background: #fff;
      
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 10%;
        // width: 100%;
        // height: 100%;
        object-fit: cover;
      }
    }

    p {
      margin: 10px 0 0 0;
    }

    .name {
      font-size: 14px;
      color: #333;
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
      color: #ff6b00;
      font-size: 16px;
      font-weight: 600;
      margin-top: 8px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>