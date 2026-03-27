<template>
    <!-- 整体页面的切换，比如layout->login整体页面更换 -->
  <div class="app" >
      
  </div>
  <router-view></router-view>
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
</style>
