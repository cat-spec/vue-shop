<template>
  <div class="home">
    <div class="home-banner">
      <!-- 左侧分类列表 -->
      <div class="category-list">
        <div 
          v-for="item in category" 
          :key="item.id" 
          class="category-item"
        >
          {{ item.name }}
        </div>
      </div>
      <!-- 右侧轮播图 -->
      <div class="banner-carousel">
        <div class="carousel-item">
          <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=e-commerce%20banner%20with%20rabbit%20theme&image_size=landscape_16_9" alt="Banner" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'
import { useCategoryStore } from '@/stores/category'

const categoryStore = useCategoryStore()
const { category } = toRefs(categoryStore)

onMounted(() => {
  // 模拟分类数据
  categoryStore.category = [
    {
      "id": "1005000",
      "name": "居家",
      "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/201516e3-25d0-48f5-bcee-7f0cafb14176.png",
      "children": [
        {
          "id": "1005999003",
          "name": "居家生活用品",
          "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/7f6a7b20-7902-4b43-b9c5-f33151ef1334.jpg?quality=95&imageView",
          "children": null,
          "goods": null
        }
      ]
    },
    {
      "id": "1005001",
      "name": "服饰",
      "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/201516e3-25d0-48f5-bcee-7f0cafb14176.png",
      "children": []
    },
    {
      "id": "1005002",
      "name": "数码",
      "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/201516e3-25d0-48f5-bcee-7f0cafb14176.png",
      "children": []
    },
    {
      "id": "1005003",
      "name": "食品",
      "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/201516e3-25d0-48f5-bcee-7f0cafb14176.png",
      "children": []
    },
    {
      "id": "1005004",
      "name": "运动",
      "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/201516e3-25d0-48f5-bcee-7f0cafb14176.png",
      "children": []
    },
    {
      "id": "1005005",
      "name": "美妆",
      "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/201516e3-25d0-48f5-bcee-7f0cafb14176.png",
      "children": []
    },
    {
      "id": "1005006",
      "name": "母婴",
      "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/201516e3-25d0-48f5-bcee-7f0cafb14176.png",
      "children": []
    },
    {
      "id": "1005007",
      "name": "图书",
      "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/201516e3-25d0-48f5-bcee-7f0cafb14176.png",
      "children": []
    }
  ]
})
</script>
<style scoped lang="less">
.home {
  width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
}

.home-banner {
  display: flex;
  gap: 20px;
  
  .category-list {
    width: 240px;
    background: #f5f5f5;
    border-radius: 8px;
    padding: 10px 0;
    
    .category-item {
      padding: 12px 20px;
      cursor: pointer;
      transition: all 0.3s;
      
      &:hover {
        background: #e8e8e8;
        color: #ff6b00;
      }
    }
  }
  
  .banner-carousel {
    flex: 1;
    height: 400px;
    border-radius: 8px;
    overflow: hidden;
    
    .carousel-item {
      width: 100%;
      height: 100%;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>