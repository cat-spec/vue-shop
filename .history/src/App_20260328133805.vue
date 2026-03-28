<template>
    <!-- 整体页面的切换，比如layout->login整体页面更换 -->
  <div class="app" >
      <router-view></router-view>
  </div>
  
</template>

<script lang="ts" setup>


</script>


<style scoped lang="scss">
@import '@/styles/var.scss';

.app{
    color:$xtxColor;
};
*{
    margin: 0;
    padding: 0;
}
a {
  all: unset;          /* 移除所有样式（包括下划线、颜色、光标等） */
  cursor: pointer;     /* 恢复手型光标，提升可访问性 */
}
</style>
