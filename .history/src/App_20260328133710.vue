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
text-decoration: none;
font-weight: normal;
/* 此外可能还需要重置颜色等, 但"以及样式"可能包括所有默认样式, 所以可以给出重置颜色为默认或继承 */
color: inherit;
}
</style>
