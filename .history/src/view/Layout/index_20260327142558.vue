<template>
  <div>
    <LayoutFixed></LayoutFixed>
   
       <LayoutNav ></LayoutNav>
    
    <div style="display: flex;justify-content: center;">
      <LayoutHeader></LayoutHeader>
    </div>
    
    <router-view></router-view>
    <LayoutFooter></LayoutFooter>

  </div>
  <!-- <router-view></router-view> -->
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutNav from './components/LayoutNav.vue';
import LayoutFixed from './components/LayoutFixed.vue';
</script>
<style scoped lang="less">
</style>