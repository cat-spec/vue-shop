<template>
  <div class="home-list">
    <div v-for="item in goodsList" :key="item.id" class="goods-section">
      <!-- <h2 class="section-title">{{ item.name }}</h2> -->
      <div class="section-content">
        <div class="left-section">
          <img v-img-lazy="item.picture" alt="" class="left-image">
        </div>
        <div class="right-section">
          <div class="goods-item" v-for="item1 in item.goods" :key="item1.id">
            <div class="goods-image-container">
              <img v-img-lazy="item1.picture" alt="" class="goods-image">
            </div>
            <div class="goods-info">
              <p class="goods-name">{{ item1.name }}</p>
              <p class="goods-price" v-if="item1.price"><span class="price-symbol">¥</span>{{ item1.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'
import { getGoodsAPI } from '@/api/home'

interface GoodsItem {
  id: string
  name: string
  price?: number
  picture: string
}

interface GoodsSection {
  id: string
  name: string
  picture: string
  goods: GoodsItem[]
}

let goodsList = ref<GoodsSection[]>([])

onMounted(async () => {
  try {
    let {result} = await getGoodsAPI()
    goodsList.value = result
  } catch (error) {
    console.error('Failed to get goods:', error)
  }
})
</script>

<style scoped lang="scss">
.home-list {
  width: 100%;
  padding: 20px 0;
}

.goods-section {
  margin-bottom: 40px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  margin: 0;
}

.section-content {
  display: flex;
  min-height: 420px;
  height: auto;
}

.left-section {
  width: 20%;
  overflow: hidden;
  
  .left-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
}

.right-section {
  width: 80%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 20px;
}

.goods-item {
  width: calc(25% - 15px);
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}

.goods-image-container {
  height: 180px;
  overflow: hidden;
  background: #fff;
}

.goods-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
}

.goods-info {
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 80px;
}

.goods-name {
  font-size: 14px;
  color: #333;
  margin: 0 0 12px 0;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.goods-price {
  font-size: 16px;
  font-weight: 600;
  color: #ff6b00;
  margin: 0;
  
  .price-symbol {
    font-size: 14px;
  }
}

// 响应式设计
@media (max-width: 1200px) {
  .goods-item {
    width: calc(33.333% - 13.333px);
  }
}

@media (max-width: 992px) {
  .section-content {
    flex-direction: column;
    height: auto;
  }
  
  .left-section {
    width: 100%;
    height: 200px;
  }
  
  .right-section {
    width: 100%;
  }
  
  .goods-item {
    width: calc(25% - 15px);
  }
}

@media (max-width: 768px) {
  .goods-item {
    width: calc(33.333% - 13.333px);
  }
}

@media (max-width: 576px) {
  .goods-item {
    width: calc(50% - 10px);
  }
  
  .section-title {
    font-size: 18px;
    padding: 12px 16px;
  }
  
  .right-section {
    padding: 16px;
    gap: 16px;
  }
}
</style>