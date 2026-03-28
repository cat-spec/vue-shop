<template>
  <div class="detail-page" v-if="detail">
    <!-- 面包屑导航 -->
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/category' }">分类</el-breadcrumb-item>
        <el-breadcrumb-item>{{ detail.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 商品信息区域 -->
    <div class="goods-info">
      <!-- 商品图片区域 -->
      <div class="image-section">
        <div class="main-image">
          <img :src="detail.mainPictures[0]" alt="" />
        </div>
        <div class="thumbnails">
          <div 
            v-for="(image, index) in detail.mainPictures" 
            :key="index"
            class="thumbnail-item"
            :class="{ active: currentIndex === index }"
            @click="currentIndex = index"
          >
            <img :src="image" alt="" />
          </div>
        </div>
      </div>

      <!-- 商品详情区域 -->
      <div class="detail-section">
        <!-- 商品名称 -->
        <h1 class="goods-name">{{ detail.name }}</h1>
        
        <!-- 商品描述 -->
        <p class="goods-desc">{{ detail.desc }}</p>
        
        <!-- 商品价格 -->
        <div class="price-section">
          <span class="price-label">价格：</span>
          <span class="price">¥{{ detail.price }}</span>
        </div>
        
        <!-- 商品信息 -->
        <div class="goods-stats">
          <span class="stat-item">
            <i class="el-icon-sell"></i>
            销量：{{ detail.salesCount }}
          </span>
          <span class="stat-item">
            <i class="el-icon-chat-line-round"></i>
            评价：{{ detail.commentCount }}
          </span>
          <span class="stat-item">
            <i class="el-icon-star-on"></i>
            收藏：{{ detail.brand.name }}
          </span>
          <span class="stat-item">
            <i class="el-icon-s-shop"></i>
            品牌：{{ detail.brand }}
          </span>
        </div>
        
        <!-- 购买数量 -->
        <div class="quantity-section">
          <span class="quantity-label">数量：</span>
          <el-input-number v-model="quantity" :min="1" :max="99" size="small" />
        </div>
        
        <!-- 操作按钮 -->
        <div class="action-buttons">
          <el-button type="primary" size="large" class="add-to-cart" @click="addToCart">
            <i class="el-icon-shopping-cart-full"></i>
            加入购物车
          </el-button>
          <el-button type="danger" size="large" class="buy-now">
            <i class="el-icon-coin"></i>
            立即购买
          </el-button>
        </div>
      </div>
    </div>

    <!-- 商品详情标签页 -->
    <div class="detail-tabs">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="商品详情" name="detail">
          <div class="tab-content">
            <div v-for="(item, index) in detail.detailImages" :key="index" class="detail-image">
              <img :src="item" alt="" />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="规格参数" name="specs">
          <div class="tab-content">
            <el-table :data="detail.specs" style="width: 100%">
              <el-table-column prop="name" label="参数名称" width="180" />
              <el-table-column prop="value" label="参数值" />
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="用户评价" name="comments">
          <div class="tab-content">
            <div v-for="(comment, index) in detail.userComments" :key="index" class="comment-item">
              <div class="comment-header">
                <span class="comment-user">{{ comment.user }}</span>
                <span class="comment-time">{{ comment.time }}</span>
              </div>
              <div class="comment-content">{{ comment.content }}</div>
              <div class="comment-images" v-if="comment.images && comment.images.length > 0">
                <img v-for="(img, idx) in comment.images" :key="idx" :src="img" alt="" class="comment-img" />
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 热榜推荐 -->
    <div class="hot-section">
      <DetailHot :hotType="1"></DetailHot>
      <DetailHot :hotType="2"></DetailHot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import { ref, computed, onMounted} from 'vue'
import DetailHot from './components/DetailHot.vue'
import { getDetail } from '@/api/detail';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;

interface GoodsSpec {
  name: string;
  value: string;
}

interface UserComment {
  user: string;
  time: string;
  content: string;
  images: string[];
}

interface GoodsDetail {
  id: string;
  name: string;
  desc: string;
  price: number;
  sales: number;
  comments: number;
  favorites: number;
  brand: string;
  images: string[];
  detailImages: string[];
  specs: GoodsSpec[];
  userComments: UserComment[];
}

const detail = ref<GoodsDetail | null>(null);

// 当前选中的图片索引
const currentIndex = ref(0);


// 购买数量
const quantity = ref(1);

// 活跃的标签页
const activeTab = ref('detail');

// 加入购物车
const addToCart = () => {
  // 这里可以实现加入购物车的逻辑
  console.log('加入购物车:', detail.value?.name, '数量:', quantity.value);
  // 显示成功提示
  alert('加入购物车成功！');
};

onMounted(async () => {
   let {result} = await getDetail(id);
   detail.value=result;
   console.log(detail.value);
}
)
</script>

<style scoped lang="scss">
.detail-page {
  width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
}

.breadcrumb {
  margin-bottom: 20px;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
}

.goods-info {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.image-section {
  width: 500px;
  
  .main-image {
    width: 100%;
    height: 500px;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 20px;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .thumbnails {
    display: flex;
    gap: 10px;
    
    .thumbnail-item {
      width: 80px;
      height: 80px;
      overflow: hidden;
      border-radius: 4px;
      cursor: pointer;
      border: 2px solid transparent;
      transition: all 0.3s ease;
      
      &.active {
        border-color: #ff6b00;
      }
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

.detail-section {
  flex: 1;
  
  .goods-name {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin: 0 0 10px 0;
    line-height: 1.3;
  }
  
  .goods-desc {
    font-size: 14px;
    color: #666;
    margin: 0 0 20px 0;
    line-height: 1.4;
  }
  
  .price-section {
    margin-bottom: 20px;
    
    .price-label {
      font-size: 16px;
      color: #666;
      margin-right: 10px;
    }
    
    .price {
      font-size: 28px;
      font-weight: 600;
      color: #ff6b00;
    }
  }
  
  .goods-stats {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    padding: 15px 0;
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    
    .stat-item {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 14px;
      color: #666;
      
      i {
        color: #ff6b00;
      }
    }
  }
  
  .quantity-section {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    
    .quantity-label {
      font-size: 16px;
      color: #666;
      margin-right: 20px;
    }
  }
  
  .action-buttons {
    display: flex;
    gap: 20px;
    
    .add-to-cart,
    .buy-now {
      flex: 1;
      height: 48px;
      font-size: 16px;
    }
  }
}

.detail-tabs {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  margin-bottom: 40px;
  
  .el-tabs__header {
    border-bottom: 1px solid #f0f0f0;
  }
  
  .el-tabs__content {
    padding: 30px;
  }
  
  .tab-content {
    .detail-image {
      margin-bottom: 20px;
      
      img {
        width: 100%;
        border-radius: 4px;
      }
    }
    
    .comment-item {
      padding: 20px 0;
      border-bottom: 1px solid #f0f0f0;
      
      &:last-child {
        border-bottom: none;
      }
      
      .comment-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        
        .comment-user {
          font-weight: 600;
          color: #333;
        }
        
        .comment-time {
          font-size: 12px;
          color: #999;
        }
      }
      
      .comment-content {
        font-size: 14px;
        color: #666;
        line-height: 1.5;
        margin-bottom: 10px;
      }
      
      .comment-images {
        display: flex;
        gap: 10px;
        
        .comment-img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 4px;
        }
      }
    }
  }
}

.hot-section {
  margin-top: 40px;
}
</style>