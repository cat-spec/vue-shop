<template>
  <div>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <LayoutFooter></LayoutFooter>

  </div>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutNav from './components/LayoutNav.vue';

</script>
<style scoped lang="less">
</style>